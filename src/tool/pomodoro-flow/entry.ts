import type { EducationToolEntry, ToolLocaleContent } from '../../types';

export type PomodoroFlowUI = {
  taskInput: string;
  selectCycle: string;
  startButton: string;
  seed: string;
  tree: string;
  mountain: string;
  timer: string;
  pauseButton: string;
  resumeButton: string;
  distractionButton: string;
  addFiveMin: string;
  subtractFiveMin: string;
  focusMode: string;
  breakTime: string;
  sessionComplete: string;
  endSession: string;
  focusScore: string;
  totalTime: string;
  interruptions: string;
  taskBreakdown: string;
  monthlyHeatmap: string;
  copyMarkdown: string;
  shareImage: string;
  wellnessMessage: string;
  sessionSummary: string;
  newSession: string;
  copied: string;
  unnamedTask: string;
  breakTimeNotification: string;
  focusTimeNotification: string;
  interruptionsLabel: string;
  studySession: string;
};

export type PomodoroFlowLocaleContent = ToolLocaleContent<PomodoroFlowUI>;

export const pomodoroFlow: EducationToolEntry<PomodoroFlowUI> = {
  id: 'pomodoro-flow',
  icons: { bg: 'mdi:timer', fg: 'mdi:focus-field' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
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
