import type { EducationCategoryEntry } from '../types';
import { weightedGradeCalculator } from '../tool/weighted-grade-calculator';
import { citationGenerator } from '../tool/citation-generator';

export const educationCategory: EducationCategoryEntry = {
  icon: 'mdi:school',
  tools: [weightedGradeCalculator, citationGenerator],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

