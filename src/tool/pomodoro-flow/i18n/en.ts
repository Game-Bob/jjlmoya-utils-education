import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow';
const description = 'Master your productivity with zen-focused time management. Customize work/break cycles, track interruptions, and visualize your focus patterns in real-time.';

const faqItems = [
  { question: 'What is the Pomodoro Technique?', answer: 'The Pomodoro Technique is a time management method that uses focused work intervals (usually 25 minutes) followed by short breaks. This tool extends it with customizable cycles and detailed analytics.' },
  { question: 'Can I customize the work/break durations?', answer: 'Yes! Choose from three presets (Seed: 25/5, Tree: 50/10, Mountain: 90/15) or adjust times on-the-fly with +5 and -5 minute buttons.' },
  { question: 'What does interruptions tracking do?', answer: 'Each time you click the distraction button, the tool records an interruption. This helps calculate your Focus Score and identify patterns in your concentration.' },
  { question: 'How is Focus Score calculated?', answer: 'Focus Score = ((Work Time - Interruptions × 2) / Work Time) × 100. This accounts for the cognitive cost of context switching.' },
  { question: 'Can I export my session data?', answer: 'Yes. You can copy your session summary as Markdown (great for Notion/Obsidian) or share a visual summary on social media.' },
];

const howToItems = [
  { name: 'Enter your task', text: 'Type what you\'re about to work on. This helps maintain context and intention.' },
  { name: 'Choose a cycle', text: 'Pick Seed (25/5) for quick tasks, Tree (50/10) for standard work, or Mountain (90/15) for deep focus.' },
  { name: 'Hit start and focus', text: 'The timer begins. Click the ring to pause. Use +5/-5 to adjust if needed. The title bar shows time remaining.' },
  { name: 'Track interruptions', text: 'Got distracted? Click the Distraction Alert button. The tool records this to calculate your Focus Score.' },
  { name: 'Review your harvest', text: 'After your session, see your stats: Focus Score, task breakdown, and monthly heatmap of your productivity.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: 'What are you going to work on?',
    selectCycle: 'Choose your focus cycle',
    startButton: 'Start',
    seed: 'Seed',
    tree: 'Tree',
    mountain: 'Mountain',
    timer: 'Timer',
    pauseButton: 'Pause',
    resumeButton: 'Resume',
    distractionButton: 'Distraction Alert',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Focus',
    breakTime: 'Break',
    sessionComplete: 'Session Complete',
    endSession: 'End Session',
    focusScore: 'Focus Score',
    totalTime: 'Total Time',
    interruptions: 'Interruptions',
    taskBreakdown: 'Task Breakdown',
    monthlyHeatmap: 'Monthly Activity',
    copyMarkdown: 'Copy Markdown',
    shareImage: 'Share',
    wellnessMessage: 'Take a break, you deserve it',
    sessionSummary: 'Session Summary',
    newSession: 'New Session',
    copied: 'Copied!',
    unnamedTask: 'Unnamed Task',
    breakTimeNotification: 'Break time!',
    focusTimeNotification: 'Time to focus!',
    interruptionsLabel: 'Interruptions:',
    studySession: 'Study Session',
  },
  seo: [
    { type: 'title', text: 'Master Focus with Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'Productivity isn\'t about working harder—it\'s about working smarter. <strong>Pomodoro Flow</strong> combines the proven Pomodoro Technique with zen-focused design and real-time analytics to help you understand <em>how</em> you work best.' },
    { type: 'title', text: 'Why Pomodoro Works', level: 3 },
    { type: 'paragraph', html: 'Humans aren\'t built for 8-hour hyperfocus marathons. Our brains work best in cycles of focused work followed by restorative breaks. The Pomodoro Technique turns this into a simple ritual: work intensely for 25 minutes, break for 5, repeat.' },
    { type: 'paragraph', html: 'But every task is different. That\'s why Pomodoro Flow offers three cycles: <strong>Seed</strong> for quick tasks (25/5), <strong>Tree</strong> for your daily grind (50/10), and <strong>Mountain</strong> for deep work sessions (90/15).' },
    { type: 'title', text: 'The Real Power: Interruption Tracking', level: 3 },
    { type: 'paragraph', html: 'You work for 50 minutes and think you crushed it. But did you get distracted 5 times? Each interruption costs you context-switching tax. Pomodoro Flow tracks this with a single button (Distraction Alert) and calculates your <strong>Focus Score</strong>—a real metric of your concentration.' },
    { type: 'paragraph', html: 'Over time, you\'ll see which tasks, times of day, or environments let you reach your best focus. That\'s where your highest-leverage work happens.' },
    { type: 'title', text: 'Features That Get Out of Your Way', level: 3 },
    { type: 'list', items: [
      'Zen-Tech Design: Dark mode, glassmorphism, and a centered timer that becomes the only thing you see.',
      'Live Title Bar: Your browser tab shows the countdown, so you know time at a glance.',
      'Flexible Timing: Adjust work/break times on the fly without restarting.',
      'Session Export: Copy your summary as Markdown or share a visual to social media.',
      'Monthly Heatmap: See your productivity patterns. Which days are your peak focus days?',
    ] },
    { type: 'title', text: 'The "Flow State" Psychology', level: 3 },
    { type: 'paragraph', html: 'Psychologist Mihaly Csikszentmihalyi defines <strong>flow</strong> as the state where challenge meets skill, and time disappears. Pomodoro Flow removes distractions, sets clear time boundaries, and gives you immediate feedback—the three conditions for flow state.' },
    { type: 'tip', html: '<strong>Pro Tip:</strong> When you\'re in flow, don\'t interrupt yourself. If the timer goes off but you\'re mid-thought, hit resume and keep going. The beauty of tracking interruptions is you\'ll see the difference between external chaos and your own momentum.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
