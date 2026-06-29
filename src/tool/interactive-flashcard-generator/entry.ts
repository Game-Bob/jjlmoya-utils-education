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
  },
};
