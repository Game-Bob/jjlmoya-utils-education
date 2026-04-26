import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'weighted-grade-calculator' as const;
const title = 'Weighted Grade & Final Score Calculator';
const description = 'Stop stressing over your GPA! Easily calculate your course grades and final marks. Just enter your assignments, exams, and their weights to see where you stand.';

const faqItems = [
  { question: 'What exactly is a weighted grade?', answer: 'In many courses, not all assignments are equal. A final exam might be worth 40% of your grade, while homework is only 10%. A weighted grade accounts for these differences so you know your true standing.' },
  { question: 'Where can I find my grade weights?', answer: 'Usually, these are listed in your course syllabus under "Grading Policy" or "Assessment". Professors assign a percentage to different categories like participation, quizzes, and projects.' },
  { question: 'What if my assignments don\'t add up to 100% yet?', answer: 'No worries! Our calculator will show you a "projected" grade based on the work you\'ve completed so far. It scales your current scores to a 100% equivalent.' },
  { question: 'Can I use this for my GPA?', answer: 'Absolutely. You can treat each course as a "subject" and use its credit hours as the "weight" to find your semester weighted average.' },
];

const howToItems = [
  { name: 'List your assignments', text: 'Enter the name of your exams, quizzes, or projects. Keep it organized!' },
  { name: 'Input your scores', text: 'Type in the grade you received for each item (usually out of 10 or 100).' },
  { name: 'Add the weights', text: 'Check your syllabus and enter the percentage each item contributes to your final grade.' },
  { name: 'Check your result', text: 'Watch your final grade update instantly. No manual math required!' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    addSubject: 'Add Item',
    subjects: 'Grades & Weights',
    subjectName: 'Assignment / Subject',
    grade: 'Grade',
    weight: 'Weight (%)',
    scale: 'Scale (e.g., 4.0, 10, 100)',
    finalGrade: 'Your Current Grade',
    removeSubject: 'Remove',
    weightSum: 'Total Weight',
    exampleSubject: 'Final Exam',
    newSubjectPlaceholder: 'e.g., Midterm',
  },
  seo: [
    { type: 'title', text: 'How to Master Your Grades with a Weighted Calculator', level: 2 },
    { type: 'paragraph', html: 'Ever felt lost looking at a pile of grades? You\'re not alone. Understanding your <strong>weighted average</strong> is the secret to staying ahead in high school and college.' },
    { type: 'title', text: 'Why Weighted Grades Matter', level: 3 },
    { type: 'paragraph', html: 'A simple average treats every assignment the same. But in the real world (and in your syllabus), a 2-minute quiz shouldn\'t count as much as a 20-page term paper. Weighted grades give more "power" to the important stuff.' },
    { type: 'paragraph', html: 'Whether you\'re calculating your <strong>semester GPA</strong> or just trying to see if you can skip the last optional assignment, weighting is the tool you need.' },
    { type: 'title', text: 'Calculate Your Final Grade in 3 Steps', level: 3 },
    { type: 'list', items: ['Find the weight of each category in your syllabus (e.g., Exams 50%, Homework 20%).', 'Multiply your score by that weight (e.g., 90 score * 0.50 weight = 45 points).', 'Add up all those points to get your final percentage.'] },
    { type: 'title', text: 'Pro Tip: The "What-If" Game', level: 3 },
    { type: 'paragraph', html: 'Use this calculator to simulate different scenarios. "What if I get an 85 on the final?" or "What if I miss this homework?" Seeing the impact in real-time helps you prioritize your study time where it actually moves the needle.' },
    { type: 'tip', html: '<strong>Don\'t panic.</strong> If your weights don\'t add up to 100% yet, the calculator will project what your grade looks like based on current work. It\'s a great way to track progress mid-semester!' },
    { type: 'title', text: 'Arithmetic vs. Weighted: The Real Difference', level: 3 },
    { type: 'paragraph', html: 'An arithmetic mean can be dangerously misleading. If you have a 100% on a small quiz but a 50% on a major exam, a simple average says you have a 75% (passing). But if the exam is worth 90% of your grade, your <strong>actual weighted grade</strong> is closer to a 55% (failing). Always look at the weights!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};

