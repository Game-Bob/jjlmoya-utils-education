import type { EducationToolEntry, ToolLocaleContent } from '../../types';

export type CurriculumProgressTrackerUI = {
  degreeNameLabel: string;
  graduationCreditsLabel: string;
  targetGpaLabel: string;
  realGpaLabel: string;
  projectedGpaLabel: string;
  creditsCompletedLabel: string;
  requiredGradeLabel: string;
  addSemesterButton: string;
  addCourseButton: string;
  exportPlanButton: string;
  importPlanButton: string;
  semesterNamePlaceholder: string;
  courseNamePlaceholder: string;
  creditsPlaceholder: string;
  gradePlaceholder: string;
  statusCompleted: string;
  statusInProgress: string;
  statusPlanned: string;
  importError: string;
  uploadHint: string;
  statusMessageSuccess: string;
  statusMessageWarning: string;
  statusMessageImpossible: string;
  degreeNamePlaceholder: string;
  deleteSemesterLabel: string;
  deleteCourseLabel: string;
  semesterTitleTemplate: string;
};

export type CurriculumProgressTrackerLocaleContent = ToolLocaleContent<CurriculumProgressTrackerUI>;

export const curriculumProgressTracker: EducationToolEntry<CurriculumProgressTrackerUI> = {
  id: 'degree-credit-progress-and-projected-grade-calculator',
  icons: { bg: 'mdi:book-open-page-variant', fg: 'mdi:chart-donut' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
