import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'concept-map-text-exporter' as const;
const title = 'Concept Map Text Exporter';
const description = 'Turn indented notes into an interactive concept map with draggable nodes, collapsible branches, zoom controls, and SVG or PNG export.';

const faqItems = [
  { question: 'What kind of text can I paste into the concept map generator?', answer: 'Use a simple outline: one idea per line, with indentation for subtopics. Bullets, numbered lists, tabs, and spaces are accepted, so notes copied from documents, lecture summaries, or study apps can usually be converted without manual reformatting.' },
  { question: 'How should I format indentation for the cleanest concept map?', answer: 'Put the central topic on the first line, then indent supporting ideas below it. Keep sibling ideas aligned at the same indentation depth. If a node appears under the wrong parent, the indentation level is almost always the thing to fix.' },
  { question: 'Can I move nodes after the map is generated?', answer: 'Yes. Drag any node on the canvas to improve spacing, separate dense branches, or emphasize a relationship. You can also pan the canvas, zoom in or out, and collapse branches before exporting.' },
  { question: 'What is the difference between SVG and PNG export?', answer: 'SVG is editable and scales cleanly in vector editors, slides, and documents. PNG is a fixed image that is easier to upload to classroom platforms, messages, worksheets, and quick revision decks.' },
  { question: 'Does this tool infer cross-links automatically?', answer: 'No. It builds a hierarchy from indentation. That keeps the output predictable, but lateral links such as causes, contrasts, or feedback loops should be reviewed manually after SVG export.' },
];

const howToItems = [
  { name: 'Paste or write an outline', text: 'Enter one concept per line and indent child ideas below their parent topic.' },
  { name: 'Review the generated structure', text: 'Use the live canvas to check whether the hierarchy matches how the topic should be studied.' },
  { name: 'Arrange the canvas', text: 'Drag nodes, collapse crowded branches, and zoom until the visual grouping is clear.' },
  { name: 'Export for study material', text: 'Download SVG for editing or PNG for quick sharing, worksheets, and slide decks.' },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'EducationalApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'Indented outline',
    sampleButton: 'Load sample',
    clearButton: 'Clear',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Zoom in',
    zoomOut: 'Zoom out',
    resetView: 'Reset view',
    exportSvg: 'Export SVG',
    exportPng: 'Export PNG',
    collapseBranch: 'Collapse branch',
    expandBranch: 'Expand branch',
    emptyStateTitle: 'No concepts yet',
    emptyStateText: 'Write one idea per line and indent subtopics to build the map.',
    nodeCount: 'concepts',
    depthCount: 'levels',
    branchCount: 'links',
    levelPrefix: 'L',
    untitledNodeLabel: 'Untitled',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'concept-map.svg',
    pngFilename: 'concept-map.png',
    sampleOutline: `Research project
  Question
    What problem is being investigated?
    Who is affected?
  Evidence
    Primary sources
    Academic articles
    Data set
  Method
    Sampling plan
    Analysis steps
  Conclusion
    Main finding
    Limitations
    Next research question`,
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'References & Academic Resources',
  },
  seo: [
    { type: 'title', text: 'Convert Indented Notes Into a Concept Map', level: 2 },
    { type: 'paragraph', html: 'A concept map is useful when a topic is no longer just a list of facts. It shows which ideas are central, which details support them, and where a learner may be confusing categories, examples, causes, and consequences. This generator is designed for the notes students already have: paste an indented outline, adjust the hierarchy, then use the interactive canvas to arrange a study-ready visual map.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'line per concept' }, { value: '2+', label: 'indent levels supported' }, { value: 'SVG', label: 'editable export' }, { value: 'PNG', label: 'shareable export' }] },
    { type: 'diagnostic', variant: 'info', title: 'Best input format for accurate mapping', html: '<ul><li>Place the main topic on its own line at the top.</li><li>Indent subtopics below the idea they explain, support, define, or exemplify.</li><li>Keep sibling ideas aligned at the same indentation depth.</li><li>Use bullets or numbered lists if you like; common list markers are removed automatically.</li><li>Keep node labels short and descriptive. Full explanations belong in your notes, not inside every node.</li></ul>' },
    { type: 'title', text: 'How to Diagnose a Messy Concept Map', level: 3 },
    { type: 'table', headers: ['What you see', 'Likely cause', 'How to fix it'], rows: [['A detail appears under the wrong topic', 'The indentation level is too shallow or too deep.', 'Move the line left or right until it sits below the correct parent idea.'], ['The map is very wide', 'Too many ideas are placed at the same level.', 'Group related siblings under a clearer category node.'], ['The map is hard to study', 'Node labels are written as full sentences.', 'Shorten labels to keywords, claims, or question prompts.'], ['Important relationships are missing', 'The outline is hierarchical but the topic has cross-links.', 'Export SVG and add lateral links manually in an editor if needed.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Concept map', description: 'Best for showing relationships between ideas, prerequisites, causes, evidence, and categories.', highlight: true, points: ['Relationship-focused', 'Good for revision', 'Useful for explaining a topic aloud'] }, { title: 'Outline', description: 'Best for ordered notes, essay structure, lecture sequences, procedures, and chronological material.', points: ['Fast to write', 'Easy to scan', 'Handles long detail well'] }, { title: 'Mind map', description: 'Best for brainstorming broad associations before the structure of the topic is fully known.', points: ['Creative exploration', 'Loose grouping', 'Less strict hierarchy'] }] },
    { type: 'tip', html: '<strong>Use collapse as an active recall tool.</strong> Collapse a branch, say the hidden details from memory, then expand it to check what you missed. This turns the map from a passive diagram into a revision prompt.' },
    { type: 'title', text: 'Study Workflows That Benefit From Visual Mapping', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Exam revision', description: 'Build the map around likely questions. Parent nodes should be prompts such as causes, evidence, limitations, definitions, or examples.', highlight: true, points: ['Use collapsed branches for recall', 'Keep labels short', 'Export PNG for quick review sheets'] }, { title: 'Research planning', description: 'Use the map to connect a research question to evidence, method, sources, limitations, and conclusions.', points: ['Put the question at the root', 'Separate evidence from interpretation', 'Export SVG for editing'] }] },
    { type: 'message', title: 'Important limitation', html: 'Indentation creates a tree, not a full semantic network. If two ideas belong to different branches but still influence each other, the tool will not invent that cross-link. Treat the generated map as a clean first draft, then add non-hierarchical links after export when the subject requires them.' },
    { type: 'title', text: 'Exporting Concept Maps for Slides, Worksheets, and Editors', level: 3 },
    { type: 'paragraph', html: 'Choose SVG when you want an editable diagram that can be refined in a vector editor, presentation tool, or publishing workflow. Choose PNG when you need a reliable image for a classroom platform, learning management system, worksheet, chat, or revision deck. Before exporting, arrange crowded nodes, collapse optional detail, and zoom until the relationship structure is readable at the size where the map will be used.' },
    { type: 'summary', title: 'A practical workflow', items: ['Paste a rough outline from notes, AI drafts, or a course handout.', 'Fix indentation until every child idea sits under the correct parent.', 'Shorten labels so nodes remain readable in the canvas and exported image.', 'Drag crowded branches apart and collapse detail that is not needed in the final version.', 'Download SVG for further editing or PNG for immediate sharing.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
