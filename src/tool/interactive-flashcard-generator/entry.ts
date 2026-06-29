import type { EducationToolEntry, ToolLocaleContent } from '../../types';

export type InteractiveFlashcardGeneratorUI = {
  cardCreator: string;
  questionLabel: string;
  answerLabel: string;
  addCard: string;
  questionPlaceholder: string;
  answerPlaceholder: string;
  reviewMode: string;
  cardIndex: string;
  flipCard: string;
  nextCard: string;
  prevCard: string;
  easy: string;
  medium: string;
  hard: string;
  resetSession: string;
  importExport: string;
  importDeck: string;
  exportDeck: string;
  exportSelected: string;
  exportAll: string;
  emptyDeckWarning: string;
  sampleQuestion1: string;
  sampleAnswer1: string;
  sampleQuestion2: string;
  sampleAnswer2: string;
  aiPromptGenerator: string;
  aiTopicsLabel: string;
  aiTopicsPlaceholder: string;
  generatePromptBtn: string;
  aiPromptOutputLabel: string;
  copyPromptBtn: string;
  selectAll: string;
  deleteCategory: string;
  deleteConfirmMsg: string;
  cancel: string;
  delete: string;
  pasteJsonTitle: string;
  pasteJsonPlaceholder: string;
  importBtn: string;
  aiPromptTemplate: string;
};

export type InteractiveFlashcardGeneratorLocaleContent = ToolLocaleContent<InteractiveFlashcardGeneratorUI>;

export const interactiveFlashcardGenerator: EducationToolEntry<InteractiveFlashcardGeneratorUI> = {
  id: 'interactive-flashcard-generator',
  icons: { bg: 'mdi:cards', fg: 'mdi:cards-outline' },
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
