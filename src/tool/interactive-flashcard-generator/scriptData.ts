import type { InteractiveFlashcardGeneratorUI } from './entry';

export type Flashcard = {
  answer: string;
  category: string;
  question: string;
  score: 'easy' | 'hard' | 'medium' | null;
};

export type ImportPayload = {
  categories: string[];
  deck: Flashcard[];
};

const defaultCategories = ['General', 'Exam 1', 'Exam 2'];

export function createFallbackDeck(labels: InteractiveFlashcardGeneratorUI): Flashcard[] {
  return [
    {
      answer: labels.sampleAnswer1,
      category: 'General',
      question: labels.sampleQuestion1,
      score: null,
    },
  ];
}

export function createInitialDeck(labels: InteractiveFlashcardGeneratorUI): Flashcard[] {
  return [
    ...createFallbackDeck(labels),
    {
      answer: labels.sampleAnswer2,
      category: 'General',
      question: labels.sampleQuestion2,
      score: null,
    },
  ];
}

export function loadInitialState(labels: InteractiveFlashcardGeneratorUI, deckKey: string, categoryKey: string) {
  try {
    const storedDeck = localStorage.getItem(deckKey);
    const storedCategories = localStorage.getItem(categoryKey);

    return {
      categories: storedCategories ? JSON.parse(storedCategories) : defaultCategories,
      deck: storedDeck ? JSON.parse(storedDeck) : createInitialDeck(labels),
    };
  } catch {
    return { categories: ['General'], deck: createFallbackDeck(labels) };
  }
}

export function normalizeImportedPayload(rawValue: string): ImportPayload | null {
  const sanitizedValue = rawValue.startsWith('```')
    ? rawValue.replace(/^```[a-zA-Z]*\s*/, '').replace(/\s*```$/, '').trim()
    : rawValue;

  try {
    const parsed = JSON.parse(sanitizedValue) as Partial<ImportPayload>;
    if (!Array.isArray(parsed.categories) || !Array.isArray(parsed.deck)) {
      return null;
    }

    return {
      categories: parsed.categories.filter(Boolean),
      deck: parsed.deck.map((card) => ({
        answer: card.answer || '',
        category: card.category || 'General',
        question: card.question || '',
        score: card.score || null,
      })),
    };
  } catch {
    return null;
  }
}

export function mergeImportedPayload(payload: ImportPayload, categories: string[], selectedCategories: string[], deck: Flashcard[]) {
  payload.categories.forEach((category) => {
    if (!categories.includes(category)) {
      categories.push(category);
    }
    if (!selectedCategories.includes(category)) {
      selectedCategories.push(category);
    }
  });

  payload.deck.forEach((importedCard) => {
    const alreadyExists = deck.some((originalCard) =>
      originalCard.question === importedCard.question &&
      originalCard.answer === importedCard.answer &&
      originalCard.category === importedCard.category);

    if (!alreadyExists) {
      deck.push(importedCard);
    }
  });
}
