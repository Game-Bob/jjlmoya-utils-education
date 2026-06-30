import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'rubric-matrix-designer' as const;
const title = 'Rubric Matrix Designer';
const description = 'Create editable weighted assessment rubrics with achievement levels, live 100% weighting validation, CSV export, and a print-ready layout.';

const faqItems = [
  { question: 'What is a rubric matrix?', answer: 'A rubric matrix is an assessment grid that places criteria in rows and achievement levels in columns. Each cell describes what performance looks like at that level, making grading more transparent and consistent.' },
  { question: 'Why should criterion weights add up to 100%?', answer: 'A 100% total makes the grading model explicit. If the total is below or above 100%, students and graders cannot clearly interpret how much each criterion contributes to the final score.' },
  { question: 'Can students use this tool?', answer: 'Yes. Students can use it to reverse-engineer assignment expectations, plan drafts, or create peer-review checklists before submission.' },
  { question: 'What export options are included?', answer: 'The CSV export is useful for spreadsheets and LMS setup. The print button opens the browser print workflow, where you can save as PDF using the operating system print dialog.' },
];

const howToItems = [
  { name: 'Edit the criteria', text: 'Click any criterion name and replace it with the skill, outcome, or requirement you want to assess.' },
  { name: 'Set the weights', text: 'Adjust each percentage until the live weighting bar reports a balanced 100% rubric.' },
  { name: 'Describe achievement levels', text: 'Click into each descriptor cell and write observable evidence for that level of performance.' },
  { name: 'Add structure when needed', text: 'Use the add buttons to create extra criteria or achievement levels, and remove rows or columns that are not useful.' },
  { name: 'Export or print', text: 'Download a CSV for spreadsheets or use print to create a clean PDF version.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Criterion',
    weightHeader: 'Weight',
    levelSectionLabel: 'Achievement levels',
    levelBadgePrefix: 'L',
    addCriterion: 'Add criterion',
    addLevel: 'Add level',
    removeCriterion: 'Remove criterion',
    removeLevel: 'Remove level',
    exportCsv: 'Export CSV',
    printRubric: 'Print / PDF',
    csvFilename: 'rubric-matrix.csv',
    pdfDocumentTitle: 'Rubric matrix',
    pdfImageAlt: 'Rubric matrix',
    confirmDeleteTitle: 'Delete this criterion?',
    confirmDeleteText: 'This removes the criterion and all descriptors written for its achievement levels.',
    cancelDelete: 'Cancel',
    confirmDelete: 'Delete criterion',
    totalWeight: 'Total weighting',
    balanced: 'Balanced at exactly 100%',
    under: 'Add weight until the rubric reaches 100%',
    over: 'Reduce weight until the rubric returns to 100%',
    emptyCell: 'Click to edit',
    newCriterionTemplate: 'Criterion {index}',
    newDescriptorTemplate: 'Descriptor {index}.{level}',
    newLevelTemplate: 'Level {index}',
    defaultLevels: [
      { name: 'Exemplary', score: 4 },
      { name: 'Proficient', score: 3 },
      { name: 'Developing', score: 2 },
      { name: 'Beginning', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Argument quality',
        weight: 35,
        cells: [
          'Clear claim with nuanced reasoning',
          'Clear claim with adequate reasoning',
          'Claim is present but uneven',
          'Claim is unclear or missing',
        ],
      },
      {
        name: 'Evidence use',
        weight: 30,
        cells: [
          'Evidence is precise and integrated',
          'Evidence supports most claims',
          'Evidence is general or loosely connected',
          'Evidence is absent or inaccurate',
        ],
      },
      {
        name: 'Organization',
        weight: 20,
        cells: [
          'Structure guides the reader smoothly',
          'Structure is logical',
          'Structure has gaps or repetition',
          'Structure is difficult to follow',
        ],
      },
      {
        name: 'Academic style',
        weight: 15,
        cells: [
          'Polished style and accurate conventions',
          'Minor errors do not block meaning',
          'Frequent errors distract the reader',
          'Errors make meaning unclear',
        ],
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'References & Academic Resources',
  },
  seo: [
    { type: 'title', text: 'Design Rubrics That Students Can Actually Use', level: 2 },
    { type: 'paragraph', html: 'A strong assessment rubric is more than a grading sheet. It is a shared map of expectations. Students use it to understand what quality looks like before submitting work, teachers use it to grade more consistently, and reviewers use it to explain feedback with less ambiguity. This designer makes the structure visible: criteria, weights, achievement levels, and descriptors all live in one editable matrix.' },
    { type: 'diagnostic', variant: 'warning', title: 'When a rubric needs revision', html: '<ul><li>Several criteria overlap so much that the same mistake is penalized twice.</li><li>The total weight does not equal 100%, making the final score hard to interpret.</li><li>Descriptors use vague words such as good, weak, or excellent without observable evidence.</li><li>There are too many levels for graders to distinguish reliably.</li></ul>' },
    { type: 'title', text: 'Choosing Criteria and Weights', level: 3 },
    { type: 'table', headers: ['Rubric element', 'Good practice', 'Common problem'], rows: [['Criteria', 'Assess distinct skills or outcomes such as argument, evidence, method, accuracy, or presentation.', 'Mixing multiple skills into one row makes feedback unclear.'], ['Weights', 'Match weight to instructional priority and assignment purpose.', 'Giving equal weight to every row even when some outcomes matter more.'], ['Levels', 'Use 3 to 5 levels that graders can distinguish consistently.', 'Adding many levels with tiny wording differences.'], ['Descriptors', 'Describe observable evidence in student work.', 'Using labels that sound evaluative but do not guide revision.']] },
    { type: 'comparative', title: 'Analytic vs holistic rubrics', columns: 2, items: [{ title: 'Analytic rubric', description: 'Breaks performance into separate criteria and weights. Best when students need targeted feedback or several graders must align.', highlight: true, points: ['Transparent scoring', 'Specific feedback', 'Works well for complex assignments'] }, { title: 'Holistic rubric', description: 'Gives one overall judgment. Faster to apply, but less diagnostic for revision or peer review.', points: ['Faster grading', 'Useful for quick checks', 'Less detailed feedback'] }] },
    { type: 'tip', html: '<strong>Write descriptors from evidence, not adjectives.</strong> Instead of "excellent analysis", write what excellent analysis does: connects evidence to the claim, addresses limitations, and explains why the evidence matters.' },
    { type: 'title', text: 'How to Validate a Weighted Rubric', level: 3 },
    { type: 'paragraph', html: 'Weights communicate priority. A criterion worth 40% shapes student effort differently than one worth 10%. The live total in this tool is intentionally strict: the rubric is balanced only when the sum is exactly 100%. If the total is under 100%, part of the grade is undefined. If it is over 100%, the model overpromises points and creates confusion.' },
    { type: 'summary', title: 'A practical rubric workflow', items: ['Start with the learning outcomes before writing rows.', 'Limit the matrix to criteria that will actually affect feedback.', 'Draft descriptors in plain, observable language.', 'Check the 100% weighting before sharing the rubric.', 'Export CSV when you need spreadsheet or LMS setup.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
