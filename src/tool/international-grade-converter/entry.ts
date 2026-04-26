import type { EducationToolEntry, ToolLocaleContent } from '../../types';

export type InternationalGradeConverterUI = {
  originSystem: string;
  targetSystems: string;
  gradeInput: string;
  bulkMode: string;
  bulkPlaceholder: string;
  results: string;
  passLimit: string;
  shareResults: string;
  averageMedia: string;
  compareTitle: string;
  addSystem: string;
  removeSystem: string;
  selectCountry: string;
  sourceCountry: string;
  systemSelection: string;
  convertedScore: string;
  emptyState: string;
  minLabel: string;
  passLabel: string;
  maxLabel: string;
  scaleLabel: string;
  howToTitle: string;
  faqTitle: string;
  bibliographyTitle: string;
  singleGradeMode: string;
  transcriptMode: string;
  gradeCounter: string;
  averageSummary: string;
  gradesIgnored: string;
  bulkHelp: string;
  copiedLabel: string;
  germanyExpl: string;
  spainExpl: string;
  usaExpl: string;
  ukExpl: string;
  franceExpl: string;
  italyExpl: string;
  netherlandsExpl: string;
  placeholderSpain: string;
  placeholderUSA: string;
  placeholderFrance: string;
  placeholderGermany: string;
  placeholderUK: string;
  placeholderItaly: string;
  placeholderNetherlands: string;
};

export type InternationalGradeConverterLocaleContent = ToolLocaleContent<InternationalGradeConverterUI>;

export const internationalGradeConverter: EducationToolEntry<InternationalGradeConverterUI> = {
  id: 'international-grade-converter',
  icons: { bg: 'mdi:earth', fg: 'mdi:swap-horizontal' },
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
