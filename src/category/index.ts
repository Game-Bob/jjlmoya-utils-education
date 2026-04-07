import type { EducationCategoryEntry } from '../types';

const loadTools = async () => {
  const { weightedGradeCalculator } = await import('../tool/weighted-grade-calculator');
  const { citationGenerator } = await import('../tool/citation-generator');
  return [weightedGradeCalculator, citationGenerator];
};

const tools = await loadTools();

export const educationCategory: EducationCategoryEntry = {
  icon: 'mdi:school',
  tools,
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

