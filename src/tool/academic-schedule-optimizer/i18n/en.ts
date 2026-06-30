import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'academic-schedule-optimizer' as const;
const title = 'Academic Schedule Optimizer';
const description = 'Build a visual weekly class schedule, color-code subjects, detect overlapping sessions, and export your timetable as an .ics calendar file.';

const faqItems = [
  {
    question: 'How does the overlap detector work?',
    answer: 'Every class block has a day, start hour, and duration. The tool compares each pair of blocks and flags them when they share the same day and their time ranges intersect.'
  },
  {
    question: 'Can I move classes directly on the calendar?',
    answer: 'Yes. Drag a class block to another day column to test a new weekly layout. The conflict status updates immediately after the move.'
  },
  {
    question: 'What does the .ics export include?',
    answer: 'The export creates a standard iCalendar file with each class as an event, including its subject, room, start time, and end time. You can import it into many calendar apps.'
  },
  {
    question: 'Why should I color-code subjects?',
    answer: 'Color makes a dense timetable easier to scan. Use different colors for labs, lectures, seminars, or high-effort subjects so conflicts and heavy days stand out faster.'
  }
];

const howToItems = [
  { name: 'Add class details', text: 'Enter the subject, room, day, start hour, duration, and color.' },
  { name: 'Place blocks on the week grid', text: 'Use the generated blocks to see how each class fits into your weekly timetable.' },
  { name: 'Resolve overlaps', text: 'Look for highlighted conflict blocks, then move or edit sessions until the conflict panel is clear.' },
  { name: 'Export your calendar', text: 'Download the .ics file and import it into Google Calendar, Apple Calendar, Outlook, or another calendar app.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Subject',
    roomLabel: 'Room',
    dayLabel: 'Day',
    startLabel: 'Start',
    durationLabel: 'Duration',
    colorLabel: 'Color',
    addClass: 'Add class',
    saveClass: 'Save class',
    newClass: 'New class',
    exportICS: 'Export .ics',
    conflictLabel: 'Schedule conflicts',
    noConflicts: 'No overlaps detected',
    removeLabel: 'Remove class',
    editHint: 'Select a class to edit it, or drag it to another day and time.',
    weekendDaysLabel: 'Weekend days',
    saturdayLabel: 'Saturday',
    sundayLabel: 'Sunday',
    weekDayLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    weekendDayShortLabels: ['Sat', 'Sun'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 h', '2 h', '3 h'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Calculus',
    defaultRoom: 'Room 204',
    defaultNewSubject: 'New class',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Calculus', room: 'Room 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Literature', room: 'Lab B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Physics', room: 'Auditorium', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'academic-schedule.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'overlap',
    overlapPlural: 'overlaps',
    detectedLabel: 'detected',
    classEditorAriaLabel: 'Class editor',
    weeklyScheduleAriaLabel: 'Weekly schedule',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'References & Calendar Standards',
  },
  seo: [
    { type: 'title', text: 'How to Build a Weekly Academic Schedule That Actually Works', level: 2 },
    { type: 'paragraph', html: 'A good timetable does more than list classes. It shows where your week is overloaded, which days are fragmented, and whether two required sessions collide. A visual academic schedule optimizer makes those problems visible before they turn into missed lectures, rushed commutes, or impossible registration choices.' },
    { type: 'summary', title: 'What to check before finalizing a timetable', items: [
      'No two required classes overlap on the same day.',
      'Saturday and Sunday can be enabled for school systems that use weekend classes.',
      'Labs, seminars, and lectures use distinct colors for fast scanning.',
      'Heavy subjects are not stacked without recovery time.',
      'The final schedule can be exported to your everyday calendar.'
    ] },
    { type: 'title', text: 'Why Visual Grids Beat Plain Lists', level: 3 },
    { type: 'paragraph', html: 'Plain course lists hide time pressure because they separate each class from the rest of the week. A grid reveals density immediately. You can see whether Monday has too many contact hours, whether a lecture blocks a lab, whether a Saturday school session changes the rhythm of the week, and whether the same room or commute pattern creates hidden friction.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Course list', description: 'Good for registration codes, weak for spotting weekly pressure.' },
      { title: 'Weekly grid', description: 'Best for understanding rhythm, gaps, and conflicts at a glance.', highlight: true },
      { title: 'Calendar app only', description: 'Useful after planning, but slower for experimenting with many alternatives.' }
    ] },
    { type: 'title', text: 'How Overlap Detection Works', level: 3 },
    { type: 'paragraph', html: 'Two classes conflict when they occur on the same day and their time ranges intersect. For example, a 10:00 to 12:00 lecture overlaps with an 11:00 to 13:00 seminar because both occupy the 11:00 hour. The tool checks every block against every other block and marks both sides of a collision.' },
    { type: 'table', headers: ['Class A', 'Class B', 'Result'], rows: [
      ['Monday 09:00-11:00', 'Monday 11:00-13:00', 'No overlap because one ends when the other starts.'],
      ['Tuesday 10:00-12:00', 'Tuesday 11:00-13:00', 'Overlap because the time ranges intersect.'],
      ['Wednesday 09:00-11:00', 'Thursday 09:00-11:00', 'No overlap because the days are different.']
    ] },
    { type: 'title', text: 'Using Color as an Academic Planning Signal', level: 3 },
    { type: 'paragraph', html: 'Color is not just decoration. It can encode subject type, difficulty, campus location, or energy level. A consistent palette makes the timetable easier to read under pressure, especially when comparing alternate sections during course registration.' },
    { type: 'tip', html: '<strong>Keep color meanings stable.</strong> For example, use one color family for labs, another for lectures, and a warning color for sessions that require travel or preparation.' },
    { type: 'title', text: 'Exporting to Calendar Apps', level: 3 },
    { type: 'paragraph', html: 'The .ics format is the standard iCalendar exchange format. Exporting your academic schedule lets you import classes into Google Calendar, Apple Calendar, Outlook, and many school calendar systems. After import, you can add reminders, travel time, recurring rules, and personal study blocks.' },
    { type: 'diagnostic', variant: 'warning', title: 'Before importing', html: 'Check that the week start date matches the week you want to import, review time zones inside your calendar app, and confirm that imported events do not duplicate an existing school calendar feed.' },
    { type: 'title', text: 'A Practical Workflow for Course Registration', level: 3 },
    { type: 'list', items: [
      'Add required classes first and resolve hard conflicts before adding electives.',
      'Enable Saturday or Sunday when your school calendar includes weekend instruction.',
      'Use color to separate lectures, labs, seminars, and independent study.',
      'Drag blocks between days to compare alternate sections quickly.',
      'Leave visible gaps for meals, commute time, and review blocks.',
      'Export only after the conflict panel is clear.'
    ] },
    { type: 'message', title: 'Planning is iterative', html: 'Treat the first version as a draft. The best timetable usually emerges after you test conflicts, compare class formats, and check whether the weekly rhythm is sustainable.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
