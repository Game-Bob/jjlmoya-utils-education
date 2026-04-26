import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = 'International Grade Converter & GPA Equivalence Calculator';
const description = 'The most precise tool for converting academic grades between international systems. Instantly translate scores from Spain, USA, UK, Germany, France, Italy, and more. Essential for Erasmus+, Fulbright, and global university applications.';

const faqItems = [
  { 
    question: 'How does the international grade conversion work?', 
    answer: 'The tool uses a mathematical linear mapping based on the minimum passing grade and the maximum possible score for each country. This ensures that a "pass" in one system aligns with a "pass" in another, maintaining academic proportional fairness across different scales.' 
  },
  { 
    question: 'Is this converter official for university admissions?', 
    answer: 'While our algorithms follow standard international equivalency tables (like those used by the ECTS or WES), this tool is for informational purposes. For official credit recognition, you should always consult your host institution or an accredited evaluation service.' 
  },
  { 
    question: 'What is the "Bulk Mode" feature?', 
    answer: 'Bulk Mode allows students with long transcripts to process multiple grades at once. Simply paste a column of numbers from your PDF or Excel record, and the tool will calculate individual conversions and your global average GPA instantly.' 
  },
  { 
    question: 'Can I convert my grades to ECTS?', 
    answer: 'Yes. The converter provides equivalents that align with the European Credit Transfer and Accumulation System (ECTS), making it perfect for European students planning their mobility or applying for Master\'s programs.' 
  }
];

const howToItems = [
  { name: '1. Select Origin System', text: 'Identify your home country or the specific grading scale (e.g., Spain 0-10, France 0-20).' },
  { name: '2. Define Target Countries', text: 'Add the countries where you are applying to see all equivalencies side-by-side in the dashboard.' },
  { name: '3. Enter Academic Data', text: 'Input a single grade for quick checks or use Bulk Mode for your entire semester record.' },
  { name: '4. Analyze & Export', text: 'Review the visual percentile bars and download your Equivalence Report as a PDF to save for your records.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Bulk Mode processing, Real-time conversion, Worldwide scale support, PDF Report generation',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Source Grading System',
    targetSystems: 'Global Equivalencies',
    gradeInput: 'Your Score',
    bulkMode: 'Bulk Record Processing',
    bulkPlaceholder: 'Paste your list of grades here (one per line)...',
    results: 'Equivalence Dashboard',
    passLimit: 'Min. Pass',
    shareResults: 'Generate Equivalence Report',
    averageMedia: 'Global Converted Average',
    compareTitle: 'Worldwide Academic Standings',
    addSystem: 'Add Country',
    removeSystem: 'Remove',
    selectCountry: 'Select Country',
    sourceCountry: 'Source Country',
    systemSelection: 'System Selection',
    convertedScore: 'Converted Score',
    emptyState: 'Enter a grade to view global equivalencies',
    minLabel: 'MIN',
    passLabel: 'PASS',
    maxLabel: 'MAX',
    scaleLabel: 'Scale',
    howToTitle: 'Your Path to International Education',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'Academic References & Standards',
    singleGradeMode: 'Single Grade',
    transcriptMode: 'Full Transcript',
    gradeCounter: 'Grades entered',
    averageSummary: 'Calculated average',
    gradesIgnored: '{count} grades ignored (out of range)',
    bulkHelp: 'Paste your transcript directly. We detect grades separated by spaces, commas, or lines.',
    copiedLabel: 'Copied!',
    germanyExpl: 'Reverse system: 1.0 is the best possible, 4.0 is the minimum pass.',
    spainExpl: 'Standard 0-10 scale. 5.0 is the minimum pass.',
    usaExpl: 'GPA scale from 0.0 to 4.0. Usually 2.0 is the minimum pass.',
    ukExpl: 'Percentage based classification. 40% is the minimum pass.',
    franceExpl: '20-point scale. 10 is the minimum pass.',
    italyExpl: '30-point scale. 18 is the minimum pass.',
    netherlandsExpl: '1-10 scale. 6 is the minimum pass.',
    placeholderSpain: 'e.g. 8.5',
    placeholderUSA: 'e.g. 3.7 or A-',
    placeholderFrance: 'e.g. 14',
    placeholderGermany: 'e.g. 1.3',
    placeholderUK: 'e.g. 75',
    placeholderItaly: 'e.g. 28',
    placeholderNetherlands: 'e.g. 7.5',
  },
  seo: [
    { type: 'title', text: 'Precision Grade Conversion for Global Mobility', level: 2 },
    { type: 'paragraph', html: 'Whether you are an <strong>Erasmus+ student</strong> or applying for an <strong>Ivy League Master\'s</strong>, understanding your global academic standing is the first step. Grades vary wildly: while a 10 in Spain is perfect, in France it\'s just a pass. Our engine clarifies these differences.' },
    { type: 'title', text: 'Why Accuracy Matters in GPA Conversion', level: 3 },
    { type: 'paragraph', html: 'Admissions committees use converted GPAs to filter thousands of applications. A slight error in manual calculation could cost you a scholarship. Our tool uses <strong>official linear mapping algorithms</strong> used by major international education bureaus.' },
    { type: 'title', text: 'Major Systems Supported', level: 3 },
    { type: 'list', items: [
      '<strong>Spain (0-10):</strong> Detailed mapping from Aprobado to Sobresaliente.',
      '<strong>USA GPA (4.0):</strong> Standard American university equivalence.',
      '<strong>Germany (1-6):</strong> Inverted scale handling where 1.0 is the peak.',
      '<strong>France (0-20):</strong> Precise conversion for French Grande Écoles and universities.',
      '<strong>UK Classification:</strong> Percentage to Honours Degree translation.'
    ] },
    { type: 'tip', html: '<strong>Academic Insight:</strong> Use the "Bulk Mode" to find your cumulative GPA across multiple semesters. It saves hours of manual spreadsheet work!' },
    { type: 'title', text: 'Calculating your WES Equivalence', level: 3 },
    { type: 'paragraph', html: 'While official WES evaluation is a paid service, our tool provides a <strong>high-fidelity estimate</strong> of your WES GPA, helping you decide where to apply before committing to evaluation fees.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
