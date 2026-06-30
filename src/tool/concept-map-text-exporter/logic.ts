export interface ConceptNode {
  id: string;
  label: string;
  depth: number;
  parentId: string | null;
  children: ConceptNode[];
  x: number;
  y: number;
  collapsed: boolean;
}

export interface FlatConceptNode extends Omit<ConceptNode, 'children'> {
  childCount: number;
}

export interface ConceptLink {
  source: string;
  target: string;
}

export interface ConceptMapLayout {
  roots: ConceptNode[];
  nodes: FlatConceptNode[];
  links: ConceptLink[];
  width: number;
  height: number;
}

function cleanLine(raw: string): { depth: number; label: string } | null {
  const match = raw.match(/^(\s*)(?:[-*+]|\d+[.)])?\s*(.+?)\s*$/);
  if (!match) return null;
  const leading = (match[1] || '').replaceAll('\t', '  ').length;
  const label = (match[2] || '').trim();
  if (!label) return null;
  return { depth: Math.floor(leading / 2), label };
}

export function parseOutline(text: string): ConceptNode[] {
  const roots: ConceptNode[] = [];
  const stack: ConceptNode[] = [];
  let index = 0;

  text.split(/\r?\n/).forEach((line) => {
    const cleaned = cleanLine(line);
    if (!cleaned) return;
    const depth = Math.max(0, cleaned.depth);
    while (stack.length > depth) stack.pop();
    const parent = stack[stack.length - 1] || null;
    const node: ConceptNode = {
      id: `node-${index}`,
      label: cleaned.label,
      depth: parent ? parent.depth + 1 : 0,
      parentId: parent?.id || null,
      children: [],
      x: 0,
      y: 0,
      collapsed: false,
    };
    index += 1;
    if (parent) parent.children.push(node);
    else roots.push(node);
    stack[node.depth] = node;
    stack.length = node.depth + 1;
  });

  return roots;
}

function visibleWalk(node: ConceptNode, nodes: ConceptNode[], links: ConceptLink[]) {
  nodes.push(node);
  if (node.collapsed) return;
  node.children.forEach((child) => {
    links.push({ source: node.id, target: child.id });
    visibleWalk(child, nodes, links);
  });
}

export function layoutConceptMap(roots: ConceptNode[], collapsedIds = new Set<string>()): ConceptMapLayout {
  const visibleNodes: ConceptNode[] = [];
  const links: ConceptLink[] = [];
  roots.forEach((root) => visibleWalk(markCollapsed(root, collapsedIds), visibleNodes, links));

  const levels = new Map<number, ConceptNode[]>();
  visibleNodes.forEach((node) => {
    const level = levels.get(node.depth) || [];
    level.push(node);
    levels.set(node.depth, level);
  });

  const columnGap = 260;
  const rowGap = 112;
  const width = Math.max(720, (Math.max(0, ...visibleNodes.map((node) => node.depth)) + 1) * columnGap + 160);
  const height = Math.max(420, Math.max(1, ...Array.from(levels.values()).map((level) => level.length)) * rowGap + 120);

  levels.forEach((levelNodes, depth) => {
    const total = (levelNodes.length - 1) * rowGap;
    levelNodes.forEach((node, index) => {
      node.x = 80 + depth * columnGap;
      node.y = height / 2 - total / 2 + index * rowGap;
    });
  });

  return {
    roots,
    nodes: visibleNodes.map(({ children, ...node }) => ({ ...node, childCount: children.length })),
    links,
    width,
    height,
  };
}

function markCollapsed(node: ConceptNode, collapsedIds: Set<string>): ConceptNode {
  node.collapsed = collapsedIds.has(node.id);
  node.children.forEach((child) => markCollapsed(child, collapsedIds));
  return node;
}

export function countConceptNodes(roots: ConceptNode[]): number {
  return roots.reduce((sum, node) => sum + 1 + countConceptNodes(node.children), 0);
}

export function maxConceptDepth(roots: ConceptNode[]): number {
  return roots.reduce((max, node) => Math.max(max, node.depth, maxConceptDepth(node.children)), 0);
}
