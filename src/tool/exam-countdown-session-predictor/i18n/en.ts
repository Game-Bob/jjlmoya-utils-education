import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor' as const;
const title = 'Exam Countdown & Study Session Predictor';
const description = 'Calculate your exact daily study pace to reach your exam day fully prepared. Enter your material size, set rest days, and generate a customized study calendar.';

const faqItems = [
  { question: 'Why is it better to study daily instead of cramming?', answer: 'Research shows that distributed practice (spacing study sessions out over time) leads to much better long-term retention and significantly reduces test anxiety compared to cramming everything into the last few days.' },
  { question: 'What is the review buffer for?', answer: 'The review buffer reserves a specified number of days right before the exam solely for comprehensive review. The calculator schedules no new material during these days, ensuring you have time to consolidate your knowledge.' },
  { question: 'How do custom rest days affect my pace?', answer: 'When you exclude a day (either as a weekly day off or a specific custom date), the calculator redistributes the remaining material across all other study days, increasing your daily target slightly so you still finish on time.' },
  { question: 'Can I change a rest day back to a study day?', answer: 'Yes. You can toggle any day in your timeline between rest and study in real-time, or remove custom dates from the list to recalculate instantly.' },
];

const howToItems = [
  { name: 'Enter your exam date', text: 'Pick the date of your upcoming exam in the calendar input.' },
  { name: 'Input your total material', text: 'Enter the amount of material you need to study, such as page count, chapters, or exercises.' },
  { name: 'Set your schedule and buffer', text: 'Choose your weekly rest days and set a review buffer (e.g., 2 days for final reviews).' },
  { name: 'Adjust and track', text: 'Toggle individual calendar days as custom rest days directly in your timeline to fit your personal schedule.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Study Planner & Countdown',
    examDateLabel: 'Exam Date',
    materialLabel: 'Total Material (Pages / Chapters)',
    materialUnitLabel: 'Material Unit',
    progressLabel: 'Completed So Far',
    weeklyScheduleLabel: 'Weekly Study Days',
    reviewBufferLabel: 'Review Buffer (Days)',
    excludedDatesLabel: 'Custom Rest Days',
    dailyPaceLabel: 'Daily Study Pace',
    daysLeftLabel: 'Days Left',
    studyDaysLabel: 'Study Days',
    bufferDaysLabel: 'Buffer Days',
    scheduleTitle: 'Your Customized Study Calendar',
    resetButton: 'Reset to Defaults',
    addExclusionButton: 'Add Rest Day',
    daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayTypes: {
      study: 'Study Day',
      rest: 'Rest Day',
      review: 'Review Buffer',
      exam: 'Exam Day',
    },
    units: {
      pages: 'Pages',
      chapters: 'Chapters',
      exercises: 'Exercises',
      modules: 'Modules',
      topics: 'Topics',
    },
    noStudyDaysError: 'You have no available study days! Check your weekly schedule and review buffer settings.',
    examInPastError: 'The exam date must be in the future.',
    noMaterialError: 'Please enter a total material count greater than zero.',
    scheduleTableHeader: {
      date: 'Date',
      day: 'Day',
      type: 'Status',
      target: 'Daily Target',
      cumulative: 'Overall Progress',
      action: 'Quick Actions',
    },
    markAsRest: 'Mark as Rest',
    markAsStudy: 'Mark as Study',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'References & Academic Resources',
  },
  seo: [
    { type: 'title', text: 'How to Pace Your Study Sessions for Maximum Retention', level: 2 },
    { type: 'paragraph', html: 'Preparing for an exam is less about the hours spent on the final night and more about how you distribute your study workload. Pacing yourself is crucial for avoiding cognitive burnout, improving recall, and ensuring you cover all necessary material without panic.' },
    { type: 'title', text: 'The Science of Paced Learning and Spaced Repetition', level: 3 },
    { type: 'paragraph', html: 'Our brain learns best through spacing. When you spread study sessions over several weeks, you allow your brain to build stronger neural connections through a process called consolidation. Spaced repetition prevents mental fatigue and helps transfer information from short-term to long-term memory, making it much easier to retrieve during the exam.' },
    { type: 'paragraph', html: 'According to Ebbinghaus\' Forgetting Curve theory, we lose memory strength over time unless we actively review the material. Spaced intervals act as resets, slowing down the rate of forgetting and building deep conceptual understanding.' },
    { type: 'title', text: 'Setting a Buffer for Final Review', level: 3 },
    { type: 'paragraph', html: 'A common mistake is planning to study new material right up to the last minute. Having a dedicated <strong>review buffer</strong> (typically 2 to 5 days before the test) allows you to practice mock exams, review summaries, and address weak spots. It also ensures you get enough sleep, which is critical for peak cognitive performance on exam day.' },
    { type: 'title', text: 'The Power of Adaptive Planning', level: 3 },
    { type: 'paragraph', html: 'Static study plans almost always fail because life is unpredictable. If you fall behind by a few pages, a static plan becomes obsolete. An adaptive calculator recalculates your daily requirements in real-time, taking the stress out of minor setbacks.' },
    { type: 'list', items: [
      'Enter your progress regularly to keep calculations accurate.',
      'Adjust your target dates if you encounter unexpected scheduling conflicts.',
      'Maintain a consistent pace rather than trying to make up large deficits in a single day.'
    ] },
    { type: 'title', text: 'Flexibility: Accounting for Rest Days', level: 3 },
    { type: 'paragraph', html: 'Rest is not a reward; it is an essential part of the learning process. By deliberately scheduling rest days into your calendar, you avoid fatigue. This calculator allows you to plan these days in advance, adjusting your daily study target automatically so you stay on track without stress.' },
    { type: 'tip', html: '<strong>Plan for the unexpected.</strong> Always leave at least one weekly rest day. This acts as a safety valve. If you get sick or have an emergency, you can use that day to catch up without falling behind on your master schedule.' },
    { type: 'title', text: 'How to Calculate Your Study Pace Manually', level: 3 },
    { type: 'paragraph', html: 'To calculate your daily study target manually, you can use a simple mathematical formula. First, determine your remaining workload by subtracting your completed pages or chapters from the total. Next, count the total days between today and your exam, and subtract your review buffer days and rest days. Finally, divide the remaining workload by the available study days.' },
    { type: 'paragraph', html: 'For example, if you have 400 pages to study, have completed 50 pages, have 20 days left until the exam, plan to take 4 rest days, and want a 2-day review buffer: your remaining workload is 350 pages, and your study days are 14. Your daily pace is 350 divided by 14, which equals exactly 25 pages per day.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
