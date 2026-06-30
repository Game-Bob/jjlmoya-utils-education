import type { EducationToolEntry, ToolLocaleContent } from '../../types';

export interface ReadingTimeNoteDensityPlannerUI {
  pagesLabel: string;
  minutesLabel: string;
  speedLabel: string;
  densityLabel: string;
  sessionsLabel: string;
  totalTimeLabel: string;
  readingTimeLabel: string;
  noteTimeLabel: string;
  coverageLabel: string;
  pagesSessionLabel: string;
  minutesSessionLabel: string;
  notesSessionLabel: string;
  controlsAriaLabel: string;
  minuteUnit: string;
  hourUnit: string;
  faqTitle: string;
  bibliographyTitle: string;
  statusLabels: {
    comfortable: string;
    tight: string;
    overloaded: string;
  };
  resetButton: string;
}

export type ReadingTimeNoteDensityPlannerLocaleContent = ToolLocaleContent<ReadingTimeNoteDensityPlannerUI>;

export const readingTimeNoteDensityPlanner: EducationToolEntry<ReadingTimeNoteDensityPlannerUI> = {
  id: 'reading-time-note-density-planner',
  icons: { bg: 'mdi:book-clock', fg: 'mdi:note-edit-outline' },
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
