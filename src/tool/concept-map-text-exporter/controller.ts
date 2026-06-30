import { countConceptNodes, layoutConceptMap, maxConceptDepth, parseOutline } from './logic';
import type { ConceptMapLayout, FlatConceptNode } from './logic';
import { createLinksGroup, createNodeGroup } from './dom-renderer';

const root = document.querySelector<HTMLElement>('[data-concept-map-tool]');
const labels = JSON.parse(root?.dataset.labels || '{}');
const input = root?.querySelector<HTMLTextAreaElement>('[data-cmt-input]');
const shell = root?.querySelector<HTMLElement>('[data-cmt-shell]');
const svg = root?.querySelector<SVGSVGElement>('[data-cmt-canvas]');
const viewport = root?.querySelector<SVGGElement>('[data-cmt-viewport]');
const empty = root?.querySelector<HTMLElement>('[data-cmt-empty]');
const nodeCount = root?.querySelector<HTMLElement>('[data-cmt-node-count]');
const depthCount = root?.querySelector<HTMLElement>('[data-cmt-depth-count]');
const branchCount = root?.querySelector<HTMLElement>('[data-cmt-branch-count]');
const storageKey = 'jjlmoya_concept_map_text_v1';

let collapsedIds = new Set<string>();
let layout: ConceptMapLayout | null = null;
let scale = 1;
let pan = { x: 0, y: 0 };
let draggingNode: { id: string; dx: number; dy: number } | null = null;
let panning = false;
let pointerStart = { x: 0, y: 0 };

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function setTransform() {
  viewport?.setAttribute('transform', `translate(${pan.x} ${pan.y}) scale(${scale})`);
}

function nodeById(id: string): FlatConceptNode | undefined {
  return layout?.nodes.find((node) => node.id === id);
}

function svgPoint(event: PointerEvent) {
  if (!svg) return { x: 0, y: 0 };
  const point = svg.createSVGPoint();
  point.x = event.clientX;
  point.y = event.clientY;
  const transformed = point.matrixTransform(svg.getScreenCTM()?.inverse());
  return { x: (transformed.x - pan.x) / scale, y: (transformed.y - pan.y) / scale };
}

function renderLinks() {
  if (layout) viewport?.appendChild(createLinksGroup(layout));
}

function toggleBranch(nodeId: string) {
  if (collapsedIds.has(nodeId)) collapsedIds.delete(nodeId);
  else collapsedIds.add(nodeId);
  render();
}

function startNodeDrag(event: PointerEvent, node: FlatConceptNode, group: SVGGElement) {
  const point = svgPoint(event);
  draggingNode = { id: node.id, dx: point.x - node.x, dy: point.y - node.y };
  group.setPointerCapture(event.pointerId);
}

function renderNode(node: FlatConceptNode) {
  viewport?.appendChild(createNodeGroup(node, { labels, onToggle: toggleBranch, onDragStart: startNodeDrag }));
}

function render() {
  if (!input || !viewport) return;
  const roots = parseOutline(input.value);
  layout = layoutConceptMap(roots, collapsedIds);
  viewport.innerHTML = '';
  renderLinks();
  layout.nodes.forEach(renderNode);
  updateMetrics(roots);
  svg?.setAttribute('viewBox', `0 0 ${layout.width} ${layout.height}`);
  localStorage.setItem(storageKey, input.value);
  setTransform();
}

function updateMetrics(roots: ReturnType<typeof parseOutline>) {
  if (empty && layout) empty.hidden = layout.nodes.length > 0;
  if (nodeCount) nodeCount.textContent = String(countConceptNodes(roots));
  if (depthCount) depthCount.textContent = String(maxConceptDepth(roots) + (roots.length ? 1 : 0));
  if (branchCount && layout) branchCount.textContent = String(layout.links.length);
}

function download(filename: string, blob: Blob) {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function serializedSvg(): string {
  if (!layout || !svg) return '';
  const clone = svg.cloneNode(true) as SVGSVGElement;
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.setAttribute('width', String(layout.width));
  clone.setAttribute('height', String(layout.height));
  clone.querySelector('[data-cmt-viewport]')?.setAttribute('transform', 'translate(0 0) scale(1)');
  const styles = `
    .cmt-grid{fill:#f6f8fb}.cmt-grid+g{font-family:Inter,Arial,sans-serif}
    pattern circle{fill:#c4cbd6}.cmt-links path{fill:none;stroke:#8ea1b5;stroke-width:2.4}
    .cmt-node rect{fill:#fff;stroke:rgba(17,24,39,.22);stroke-width:1}.cmt-node text{fill:#111827;font-size:13px;font-weight:780}
    .cmt-node-depth{fill:#637083!important;font-size:9px!important;font-weight:760;opacity:.42}.cmt-toggle{display:none}
  `;
  const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  style.textContent = styles;
  clone.prepend(style);
  return `<?xml version="1.0" encoding="UTF-8"?>\n${clone.outerHTML}`;
}

root?.querySelector('[data-cmt-sample]')?.addEventListener('click', () => {
  if (!input) return;
  input.value = labels.sampleOutline;
  collapsedIds = new Set();
  render();
});

root?.querySelector('[data-cmt-clear]')?.addEventListener('click', () => {
  if (!input) return;
  input.value = '';
  collapsedIds = new Set();
  render();
  input.focus();
});

input?.addEventListener('input', render);
root?.querySelector('[data-cmt-zoom-in]')?.addEventListener('click', () => {
  scale = Math.min(2.3, scale + 0.15);
  setTransform();
});
root?.querySelector('[data-cmt-zoom-out]')?.addEventListener('click', () => {
  scale = Math.max(0.45, scale - 0.15);
  setTransform();
});
root?.querySelector('[data-cmt-reset]')?.addEventListener('click', () => {
  scale = 1;
  pan = { x: 0, y: 0 };
  setTransform();
});
root?.querySelector('[data-cmt-export-svg]')?.addEventListener('click', () => {
  download(labels.svgFilename, new Blob([serializedSvg()], { type: 'image/svg+xml;charset=utf-8' }));
});
root?.querySelector('[data-cmt-export-png]')?.addEventListener('click', () => {
  const source = serializedSvg();
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width * 2;
    canvas.height = image.height * 2;
    const context = canvas.getContext('2d');
    context?.scale(2, 2);
    context?.drawImage(image, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) download(labels.pngFilename, blob);
    }, 'image/png');
  };
  image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`;
});

shell?.addEventListener('pointerdown', (event) => {
  if ((event.target as Element).closest('.cmt-node, .cmt-toolbar')) return;
  panning = true;
  pointerStart = { x: event.clientX - pan.x, y: event.clientY - pan.y };
  shell.setPointerCapture(event.pointerId);
});

function refreshDraggedLinks() {
  viewport?.querySelector('.cmt-links')?.remove();
  renderLinks();
  const links = viewport?.querySelector('.cmt-links');
  if (links) viewport?.prepend(links);
}

function moveDraggedNode(event: PointerEvent): boolean {
  if (!draggingNode || !layout) return false;
  const node = nodeById(draggingNode.id);
  if (!node) return true;
  const point = svgPoint(event);
  node.x = point.x - draggingNode.dx;
  node.y = point.y - draggingNode.dy;
  viewport?.querySelector(`[data-node-id="${escapeXml(node.id)}"]`)?.setAttribute('transform', `translate(${node.x} ${node.y - 32})`);
  refreshDraggedLinks();
  return true;
}

function moveCanvasPan(event: PointerEvent) {
  if (!panning) return;
  pan = { x: event.clientX - pointerStart.x, y: event.clientY - pointerStart.y };
  setTransform();
}

shell?.addEventListener('pointermove', (event) => {
  if (moveDraggedNode(event)) return;
  moveCanvasPan(event);
});
document.addEventListener('pointerup', () => {
  draggingNode = null;
  panning = false;
});
shell?.addEventListener('wheel', (event) => {
  event.preventDefault();
  scale = Math.min(2.3, Math.max(0.45, scale + (event.deltaY > 0 ? -0.08 : 0.08)));
  setTransform();
}, { passive: false });

if (input) input.value = localStorage.getItem(storageKey) || input.value;
render();
