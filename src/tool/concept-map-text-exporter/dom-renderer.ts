import type { ConceptMapLayout, FlatConceptNode } from './logic';
import type { ConceptMapTextExporterUI } from './entry';

export interface NodeRendererOptions {
  labels: ConceptMapTextExporterUI;
  onToggle: (nodeId: string) => void;
  onDragStart: (event: PointerEvent, node: FlatConceptNode, group: SVGGElement) => void;
}

function curvedPath(source: FlatConceptNode, target: FlatConceptNode): string {
  const x1 = source.x + 176;
  const y1 = source.y;
  const x2 = target.x;
  const y2 = target.y;
  const mid = Math.max(60, (x2 - x1) * 0.55);
  return `M${x1} ${y1} C${x1 + mid} ${y1} ${x2 - mid} ${y2} ${x2} ${y2}`;
}

function labelChunks(word: string, maxLineLength: number): string[] {
  if (word.length <= maxLineLength + 4) return [word];
  const chunks: string[] = [];
  for (let index = 0; index < word.length; index += maxLineLength) {
    chunks.push(word.slice(index, index + maxLineLength));
  }
  return chunks;
}

function wrappedLabel(label: string, fallback: string, maxLineLength = 21): string[] {
  const normalized = label.trim().replace(/\s+/g, ' ');
  if (!normalized) return [fallback];
  const lines: string[] = [];
  normalized.split(' ').flatMap((word) => labelChunks(word, maxLineLength)).forEach((word) => {
    const current = lines[lines.length - 1] || '';
    if (!current || `${current} ${word}`.length > maxLineLength) lines.push(word);
    else lines[lines.length - 1] = `${current} ${word}`;
  });
  return truncateLines(lines, maxLineLength);
}

function truncateLines(lines: string[], maxLineLength: number): string[] {
  const limited = lines.slice(0, 2);
  if (lines.length <= 2 && limited.every((line) => line.length <= maxLineLength + 4)) return limited;
  const last = limited[limited.length - 1] || '';
  limited[limited.length - 1] = `${last.slice(0, Math.max(8, maxLineLength - 3)).trim()}...`;
  return limited;
}

export function createLinksGroup(layout: ConceptMapLayout): SVGGElement {
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.classList.add('cmt-links');
  layout.links.forEach((link) => {
    const source = layout.nodes.find((node) => node.id === link.source);
    const target = layout.nodes.find((node) => node.id === link.target);
    if (!source || !target) return;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', curvedPath(source, target));
    group.appendChild(path);
  });
  return group;
}

function createLabel(node: FlatConceptNode, labels: ConceptMapTextExporterUI): SVGTextElement {
  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.classList.add('cmt-node-label');
  text.setAttribute('x', '16');
  text.setAttribute('y', '23');
  wrappedLabel(node.label, labels.untitledNodeLabel).forEach((line, index) => {
    const tspan = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    tspan.setAttribute('x', '16');
    tspan.setAttribute('dy', index === 0 ? '0' : '15');
    tspan.textContent = line;
    text.appendChild(tspan);
  });
  return text;
}

function createDepth(node: FlatConceptNode, labels: ConceptMapTextExporterUI): SVGTextElement {
  const depth = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  depth.classList.add('cmt-node-depth');
  depth.setAttribute('x', '156');
  depth.setAttribute('y', '51');
  depth.setAttribute('text-anchor', 'end');
  depth.textContent = `${labels.levelPrefix}${node.depth + 1}`;
  return depth;
}

function createToggle(node: FlatConceptNode, options: NodeRendererOptions): SVGGElement {
  const toggle = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  toggle.classList.add('cmt-toggle');
  toggle.setAttribute('transform', 'translate(176 32)');
  toggle.setAttribute('role', 'button');
  toggle.setAttribute('aria-label', node.collapsed ? options.labels.expandBranch : options.labels.collapseBranch);
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('r', '5');
  const mark = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  mark.setAttribute('text-anchor', 'middle');
  mark.setAttribute('y', '4');
  mark.textContent = node.collapsed ? options.labels.collapsedBranchMark : options.labels.expandedBranchMark;
  toggle.append(circle, mark);
  toggle.addEventListener('pointerdown', (event) => event.stopPropagation());
  toggle.addEventListener('click', () => options.onToggle(node.id));
  return toggle;
}

export function createNodeGroup(node: FlatConceptNode, options: NodeRendererOptions): SVGGElement {
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.classList.add('cmt-node');
  group.dataset.nodeId = node.id;
  group.setAttribute('transform', `translate(${node.x} ${node.y - 32})`);
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttribute('width', '176');
  rect.setAttribute('height', '64');
  rect.setAttribute('rx', '8');
  group.append(rect, createLabel(node, options.labels), createDepth(node, options.labels));
  if (node.childCount > 0) group.appendChild(createToggle(node, options));
  group.addEventListener('pointerdown', (event) => options.onDragStart(event, node, group));
  return group;
}
