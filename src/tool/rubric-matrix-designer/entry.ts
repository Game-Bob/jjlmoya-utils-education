import type { EducationToolEntry, ToolLocaleContent } from '../../types';

export interface RubricMatrixDesignerUI {
  criterionHeader: string;
  weightHeader: string;
  levelSectionLabel: string;
  levelBadgePrefix: string;
  addCriterion: string;
  addLevel: string;
  removeCriterion: string;
  removeLevel: string;
  exportCsv: string;
  printRubric: string;
  csvFilename: string;
  pdfDocumentTitle: string;
  pdfImageAlt: string;
  confirmDeleteTitle: string;
  confirmDeleteText: string;
  cancelDelete: string;
  confirmDelete: string;
  totalWeight: string;
  balanced: string;
  under: string;
  over: string;
  emptyCell: string;
  newCriterionTemplate: string;
  newDescriptorTemplate: string;
  newLevelTemplate: string;
  defaultLevels: Array<{
    name: string;
    score: number;
  }>;
  defaultCriteria: Array<{
    name: string;
    weight: number;
    cells: string[];
  }>;
  faqTitle: string;
  bibliographyTitle: string;
}

export type RubricMatrixDesignerLocaleContent = ToolLocaleContent<RubricMatrixDesignerUI>;

export const rubricMatrixDesigner: EducationToolEntry<RubricMatrixDesignerUI> = {
  id: 'rubric-matrix-designer',
  icons: { bg: 'mdi:table-edit', fg: 'mdi:clipboard-check-outline' },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};

