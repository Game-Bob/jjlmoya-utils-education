import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'transcript-gpa-parser' as const;
const title = 'Transcript GPA Parser & Calculator';
const description = 'Instantly calculate your cumulative GPA and weighted grade average by copy-pasting your raw university transcript text. Works completely offline.';

const faqItems = [
  {
    question: 'How does the automatic parsing work?',
    answer: 'It scans the pasted text line-by-line, splitting it into columns based on spaces, tabs, or punctuation. It then analyzes the values to automatically identify which column contains subject names, grades, and credits.'
  },
  {
    question: 'Is my academic data secure?',
    answer: 'Yes, completely. The parsing and GPA calculations run entirely inside your browser on your device. No data is sent to any server, keeping your transcript 100% private.'
  },
  {
    question: 'What if the columns are mapped incorrectly?',
    answer: 'You can easily adjust them. Each column in the detected table has a dropdown header where you can manually select whether that column represents the Course Name, Grade, Credits, or should be Ignored.'
  },
  {
    question: 'Does it support letter grades and different scales?',
    answer: 'Yes, it supports standard letter grades (A, B, C, D, F) as well as numerical scales (0-10, 0-20, 0-100). You can configure the maximum scale to match your university system.'
  }
];

const howToItems = [
  {
    name: 'Copy your transcript',
    text: 'Go to your university portal or grade sheet, highlight the text, and copy it.'
  },
  {
    name: 'Paste the text',
    text: 'Paste the copied text into the text area of this tool.'
  },
  {
    name: 'Verify and map',
    text: 'Review the automatically generated table. If necessary, adjust the column roles using the headers.'
  },
  {
    name: 'Get your GPA',
    text: 'View your calculated weighted GPA and total credits instantly at the bottom.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Paste your transcript here',
    pasteAreaPlaceholder: 'Paste text copied from Moodle, Canvas, or your university transcript page...',
    parsedTitle: 'Parsed Transcript Data',
    columnSelect: 'Map column',
    subjectName: 'Course/Subject Name',
    grade: 'Grade',
    credits: 'Credits',
    ignore: 'Ignore',
    gpaResult: 'Cumulative GPA',
    totalCredits: 'Total Credits',
    emptyState: 'Paste your transcript data above to preview and edit rows here.',
    scaleLabel: 'Grade Scale Limit',
    customScale: 'Max Grade Scale',
    exampleSubject: 'Calculus I',
    newSubjectPlaceholder: 'New course',
    clearBtn: 'Clear text',
    errorFormat: 'We could not detect clear columns. Try copy-pasting a table or list format.'
  },
  seo: [
    { type: 'title', text: 'How to Parse and Calculate GPA from Any Transcript', level: 2 },
    { type: 'paragraph', html: 'Calculating your academic average shouldn\'t require manual entry of dozens of classes. This tool extracts data from any raw text copy-paste to calculate your GPA.' },
    { type: 'title', text: 'Why use a raw transcript parser?', level: 3 },
    { type: 'paragraph', html: 'University portals often format grade reports in complex HTML tables. Copying and pasting them directly into this tool lets our heuristic engine extract the courses, grades, and credits instantly without typing errors.' },
    { type: 'title', text: 'Safe, private, and fast', level: 3 },
    { type: 'paragraph', html: 'Because the parsing engine runs locally in JavaScript, your academic record never leaves your browser. You can parse pages containing hundreds of lines in milliseconds.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
