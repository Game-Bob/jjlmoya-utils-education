import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'reading-time-note-density-planner' as const;
const title = 'Reading Time & Note Density Planner';
const description = 'Estimate how long academic reading will take once note-taking is included, then split the workload into practical study sessions.';

const faqItems = [
  { question: 'Why does note-taking change reading time so much?', answer: 'Academic reading is rarely just scanning words. Every annotation, summary, margin question, or flashcard adds processing time. Planning note density separately prevents an optimistic page-per-hour estimate from turning into a late-night backlog.' },
  { question: 'What is a good pages-per-hour estimate?', answer: 'For dense textbooks, 15 to 25 pages per hour is common. For lighter readings, 30 to 50 pages per hour may be realistic. If the material has formulas, primary sources, or unfamiliar vocabulary, start lower and adjust after one timed session.' },
  { question: 'How should I choose note density?', answer: 'Use 1 to 2 minutes per page for light highlighting or a short outline, 3 to 5 minutes per page for Cornell notes, and more than 5 minutes per page when you are creating flashcards, solving examples, or writing a synthesis paragraph.' },
  { question: 'Can this planner replace a syllabus schedule?', answer: 'No. It helps convert reading volume into time and sessions, but deadlines, seminars, labs, and revision blocks still need to be placed on your calendar.' },
];

const howToItems = [
  { name: 'Enter the reading load', text: 'Add the number of pages or page-equivalent units you need to complete.' },
  { name: 'Set available time', text: 'Enter the total minutes you can realistically spend before the deadline.' },
  { name: 'Estimate reading speed and note density', text: 'Choose a pages-per-hour speed and the average note-taking minutes you expect per page.' },
  { name: 'Split into sessions', text: 'Set the number of sessions to see pages, minutes, and note load per sitting.' },
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Pages to read',
    minutesLabel: 'Minutes available',
    speedLabel: 'Reading speed, pages/hour',
    densityLabel: 'Note density, minutes/page',
    sessionsLabel: 'Study sessions',
    totalTimeLabel: 'Total workload',
    readingTimeLabel: 'Reading',
    noteTimeLabel: 'Notes',
    coverageLabel: 'Time coverage',
    pagesSessionLabel: 'Pages/session',
    minutesSessionLabel: 'Minutes/session',
    notesSessionLabel: 'Note min/session',
    controlsAriaLabel: 'Reading plan controls',
    minuteUnit: 'min',
    hourUnit: 'hr',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'References & Academic Resources',
    statusLabels: {
      comfortable: 'Comfortable plan',
      tight: 'Tight but workable',
      overloaded: 'Overloaded schedule',
    },
    resetButton: 'Reset',
  },
  seo: [
    { type: 'title', text: 'Plan Reading Time With Notes, Not Just Pages', level: 2 },
    { type: 'paragraph', html: 'Many students estimate reading by dividing pages by a rough speed, then forget the largest hidden cost: notes. A forty-page chapter can be a ninety-minute task if you skim it, or a three-hour task if you annotate, summarize, and convert ideas into review prompts. This planner separates reading speed from note density so your schedule reflects the actual academic task.' },
    { type: 'diagnostic', variant: 'info', title: 'When your reading plan is probably too optimistic', html: '<ul><li>Your available time only covers the raw reading minutes, not notes or problem solving.</li><li>You are using the same pages-per-hour estimate for novels, textbooks, research papers, and legal cases.</li><li>Your sessions are longer than your usual attention window, so later pages receive lower-quality notes.</li><li>The deadline includes other coursework, but the reading plan assumes every free minute belongs to one class.</li></ul>' },
    { type: 'title', text: 'Choosing a Realistic Pages-Per-Hour Rate', level: 3 },
    { type: 'table', headers: ['Material type', 'Starting speed', 'Planning advice'], rows: [['Light review or familiar content', '40-60 pages/hour', 'Use only when you already know the vocabulary and are reading for refresh, not mastery.'], ['Standard textbook chapter', '20-35 pages/hour', 'Reduce the speed if the chapter includes worked examples, diagrams, or end-of-section checks.'], ['Dense theory, research, or primary source', '8-20 pages/hour', 'Plan slower sessions and add a recap block because comprehension usually arrives after rereading.']] },
    { type: 'tip', html: '<strong>Calibrate after one session.</strong> Time the first ten pages, including notes. If the calculator says the plan is comfortable but the timed session says otherwise, trust the timed session and lower your speed.' },
    { type: 'title', text: 'What Note Density Means', level: 3 },
    { type: 'paragraph', html: 'Note density is the average time spent processing each page after or while reading it. A low-density approach might mean one margin keyword and a highlight. A high-density approach might mean Cornell notes, a short summary, a question list, and three flashcards. The right value depends on assessment style: factual quizzes need retrieval prompts, essay exams need argument maps, and quantitative courses need worked examples.' },
    { type: 'comparative', title: 'Light notes vs deep notes', columns: 2, items: [{ title: 'Light notes', description: 'Faster completion, useful for survey reading, but easier to forget and harder to revise from later.', points: ['Best for familiar content', 'Lower immediate workload', 'Weaker revision artifact'] }, { title: 'Deep notes', description: 'Slower completion, better for exam preparation, seminars, and writing assignments where evidence must be recalled accurately.', highlight: true, points: ['Best for assessed content', 'Higher immediate workload', 'Stronger review material'] }] },
    { type: 'summary', title: 'A practical planning rule', items: ['Keep ordinary reading sessions under 75 minutes when possible.', 'If notes exceed reading time, split the task into two passes: read first, synthesize later.', 'Leave a final session for consolidation instead of assigning new pages until the deadline.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
