import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'degree-credit-progress-and-projected-grade-calculator' as const;
const title = 'Degree Credit Progress and Projected Grade Calculator';
const description = 'Build your degree structure semester by semester, track your real GPA, simulate projected grades, and calculate the exact average needed in remaining courses to reach your academic goals.';

const faqItems = [
  {
    question: 'How do I start planning my degree?',
    answer: 'Simply add semesters and input your courses directly on the dashboard. You can set the credit values, select the status of each subject, and record grades.',
  },
  {
    question: 'What is the difference between Real GPA and Projected GPA?',
    answer: 'Real GPA is calculated using only completed courses with confirmed grades. Projected GPA simulates your final average by incorporating in-progress and planned courses using your expected grades.',
  },
  {
    question: 'What does the Required Grade indicator show?',
    answer: 'It calculates the exact average grade you need to maintain across all remaining in-progress and planned courses to achieve your overall Target GPA.',
  },
  {
    question: 'Is my academic data stored securely?',
    answer: 'Yes. All data remains in your web browser utilizing local storage. No information is uploaded to any servers. You can also download a copy of your plan using the export button.',
  },
];

const howToItems = [
  { name: 'Configure targets', text: 'Set your total graduation credits goal and desired Target GPA at the top of the dashboard.' },
  { name: 'Build your curriculum', text: 'Add semesters and list your courses, assigning credits to each course according to your syllabus.' },
  { name: 'Update grades and statuses', text: 'Toggle course states between Completed, In Progress, and Planned, entering actual grades as you complete courses.' },
  { name: 'Analyze required scores', text: 'Check the grade analyzer to see if your target is achievable and find out the exact average needed in upcoming semesters.' },
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

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: 'Degree Program Name',
    graduationCreditsLabel: 'Graduation Credits Goal',
    targetGpaLabel: 'Target GPA',
    realGpaLabel: 'Real GPA',
    projectedGpaLabel: 'Projected GPA',
    creditsCompletedLabel: 'Credits Completed',
    requiredGradeLabel: 'Required Grade (Remaining)',
    addSemesterButton: 'Add Semester',
    addCourseButton: 'Add Course',
    exportPlanButton: 'Export Plan',
    importPlanButton: 'Import Plan',
    semesterNamePlaceholder: 'Semester name (e.g., Autumn Year 1)',
    courseNamePlaceholder: 'Course title',
    creditsPlaceholder: 'Credits',
    gradePlaceholder: 'Grade',
    statusCompleted: 'Completed',
    statusInProgress: 'In Progress',
    statusPlanned: 'Planned',
    importError: 'The degree plan could not be imported. Please verify the file format.',
    uploadHint: 'All data is stored locally in your web browser. Import and export processes are processed entirely on your device.',
    statusMessageSuccess: 'You are on track to achieve your target GPA.',
    statusMessageWarning: 'You need an average grade of {grade} or higher in remaining courses to reach your target GPA.',
    statusMessageImpossible: 'It is mathematically impossible to reach your target GPA with your current course settings.',
    degreeNamePlaceholder: 'e.g., BSc Computer Science',
    deleteSemesterLabel: 'Delete Semester',
    deleteCourseLabel: 'Delete Course',
    semesterTitleTemplate: 'Semester {num}',
  },
  seo: [
    { type: 'title', text: 'How to Project Your Graduation Average and Manage Course Credits', level: 2 },
    { type: 'paragraph', html: 'Planning a university degree requires more than keeping a list of past courses. To stay on track for honors thresholds, graduate admissions, or scholarship requirements, you must understand your future trajectory. A comprehensive degree planning calculator lets you model different scenarios, project your final GPA, and understand the real consequences of current semester performance before final exams arrive.' },
    { type: 'summary', title: 'Core planning targets to track every semester', items: [
      'Visualise the distance between completed credits and total graduation requirements.',
      'Separate confirmed grades from projected assumptions to keep planning grounded in reality.',
      'Determine the minimum average required in future semesters to recover from a low grade or secure a target GPA.',
      'Build a customizable roadmap of your entire academic career.',
    ] },
    { type: 'title', text: 'The Core Calculations Behind Your Academic Path', level: 3 },
    { type: 'paragraph', html: 'A student GPA is not a simple arithmetic average. It is a weighted calculation where courses with higher credit hours exert a stronger pull on the final score. Because of this, failing a 6-credit course hurts twice as much as failing a 3-credit course, and conversely, scoring highly in a high-credit seminar yields a greater reward.' },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: 'Real GPA', label: 'Calculated purely from completed courses' },
        { value: 'Projected GPA', label: 'Simulates completed plus expected grades' },
        { value: 'Credit Progress', label: 'Visualizes completion percentage' },
        { value: 'Required Grade', label: 'Minimum average score needed in remaining courses' },
      ],
    },
    { type: 'title', text: 'Understanding Course Status States', level: 3 },
    { type: 'paragraph', html: 'The progress tracker organizes your degree courses into three distinct operational states to ensure calculations match current academic circumstances.' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Completed',
          description: 'Subjects that have been finalized and recorded on your official transcript.',
          points: [
            'Drives the Real GPA calculation.',
            'Directly increments the completed credits total.',
            'Locked in unless retaken for grade replacement.',
          ],
        },
        {
          title: 'In Progress',
          description: 'Modules you are currently enrolled in during the ongoing academic term.',
          points: [
            'Factored into the Projected GPA using target grades.',
            'Lets you adjust grades to simulate final exam scenarios.',
            'Serves as the primary buffer for GPA recovery.',
          ],
        },
        {
          title: 'Planned',
          description: 'Future modules scheduled for upcoming semesters to fulfill graduation requirements.',
          points: [
            'Allows long-term academic forecasting.',
            'Essential for identifying future credit loads.',
            'Calculates target requirements before registration.',
          ],
        },
      ],
    },
    { type: 'title', text: 'Tactical Strategies for GPA Recovery', level: 3 },
    { type: 'paragraph', html: 'When your average drops below scholarship or graduation thresholds, you must act strategically rather than aiming blindly for perfect grades.' },
    {
      type: 'table',
      headers: ['Scenario', 'Math Analysis', 'Recommended Action Plan'],
      rows: [
        ['Severe Drop in Early Year', 'High remaining credits mean your GPA is highly malleable.', 'Prioritize upcoming high-credit courses. A strong performance now will easily wash out early mistakes.'],
        ['Moderate Drop in Final Year', 'Low remaining credits mean your GPA is heavily set.', 'Focus heavily on the few pending courses. Explore grade replacement policies or extra credit options if available.'],
        ['Target GPA is Impossible', 'Remaining credits are insufficient to lift the average to target.', 'Adjust the target GPA to a realistic level or plan additional summer courses to expand the credit denominator.'],
      ],
    },
    {
      type: 'diagnostic',
      title: 'How to Resolve a Target GPA Shortfall',
      variant: 'warning',
      html: '<ul><li>Check if you have underestimated credit weights on upcoming courses. Lighter courses will not pull your GPA up enough.</li><li>Verify if your simulated grades for planned semesters are realistic. Expecting straight perfect scores can skew your roadmap.</li><li>Consider adding elective courses with high credit values to dilute early low marks.</li></ul>',
    },
    {
      type: 'tip',
      html: '<strong>Use the simulator before registration.</strong> Before choosing your electives or scheduling your next semester, enter the prospective courses with their credit values. This will show you exactly how much breathing room they give you in maintaining your desired average.',
    },
    {
      type: 'card',
      title: 'Common Mistake: Credit Disregard',
      html: '<p>Many students dedicate equal study time to all courses. In terms of your GPA, a 6-credit class demands double the strategic focus of a 3-credit class. Use this planner to spot high-impact subjects early and allocate your preparation time accordingly.</p>',
    },
    {
      type: 'proscons',
      title: 'Comparing Static Transcripts to an Active Simulator',
      items: [
        {
          pro: 'Forecasts future requirements rather than just reporting past failures.',
          con: 'Projections are only as accurate as the expected grades you input.',
        },
        {
          pro: 'Calculates exact target grades needed, taking the guesswork out of study planning.',
          con: 'Does not automatically account for university-specific grade forgiveness or pass/fail policies.',
        },
        {
          pro: 'Runs completely locally in your browser to safeguard your academic privacy.',
          con: 'Relies on local browser storage; clearing browser data will clear the plan unless exported.',
        },
      ],
    },
    {
      type: 'glossary',
      title: 'Key Terms in Academic Planning',
      items: [
        { term: 'GPA (Grade Point Average)', definition: 'The metric summarizing student performance, typically calculated by weighting grades against course credit values.' },
        { term: 'Weighted Average', definition: 'A calculation method where some values contribute more to the final result than others based on predefined weights (credits).' },
        { term: 'Credits Completed', definition: 'The total sum of credit units earned from courses marked as Completed.' },
        { term: 'Projected GPA', definition: 'An estimation of your final graduation GPA combining actual grades with simulated values for remaining courses.' },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
