import type { EducationToolEntry, ToolLocaleContent } from '../../types';

export type AcademicScheduleOptimizerUI = {
  subjectLabel: string;
  roomLabel: string;
  dayLabel: string;
  startLabel: string;
  durationLabel: string;
  colorLabel: string;
  addClass: string;
  saveClass: string;
  newClass: string;
  exportICS: string;
  conflictLabel: string;
  noConflicts: string;
  removeLabel: string;
  editHint: string;
  weekendDaysLabel: string;
  saturdayLabel: string;
  sundayLabel: string;
  weekDayLabels: string[];
  weekendDayShortLabels: string[];
  hourOptions: number[];
  durationValues: string[];
  durationOptions: string[];
  hourSuffix: string;
  timeSeparator: string;
  defaultSubject: string;
  defaultRoom: string;
  defaultNewSubject: string;
  defaultFormDay: string;
  defaultFormStart: string;
  defaultFormDuration: string;
  defaultColor: string;
  defaultEvents: { id: string; subject: string; room: string; day: number; start: number; duration: number; color: string }[];
  removeGlyph: string;
  exportFilename: string;
  exportWeekStartISO: string;
  overlapSingular: string;
  overlapPlural: string;
  detectedLabel: string;
  classEditorAriaLabel: string;
  weeklyScheduleAriaLabel: string;
  faqTitle: string;
  bibliographyTitle: string;
};

export type AcademicScheduleOptimizerLocaleContent = ToolLocaleContent<AcademicScheduleOptimizerUI>;

export const academicScheduleOptimizer: EducationToolEntry<AcademicScheduleOptimizerUI> = {
  id: 'academic-schedule-optimizer',
  icons: { bg: 'mdi:calendar-week', fg: 'mdi:table-clock' },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
