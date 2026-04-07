import type { EducationToolEntry, ToolDefinition, ToolLocaleContent } from '../../types';
import WeightedGradeCalculatorComponent from './component.astro';
import WeightedGradeCalculatorSEO from './seo.astro';
import WeightedGradeCalculatorBibliography from './bibliography.astro';

export type WeightedGradeCalculatorUI = {
  addSubject: string;
  subjects: string;
  subjectName: string;
  grade: string;
  weight: string;
  scale: string;
  finalGrade: string;
  removeSubject: string;
  weightSum: string;
  exampleSubject: string;
  newSubjectPlaceholder: string;
};

export type WeightedGradeCalculatorLocaleContent = ToolLocaleContent<WeightedGradeCalculatorUI>;

export const weightedGradeCalculator: EducationToolEntry<WeightedGradeCalculatorUI> = {
  id: 'weighted-grade-calculator',
  icons: { bg: 'mdi:calculator', fg: 'mdi:chart-box' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const WEIGHTED_GRADE_CALCULATOR_TOOL: ToolDefinition = {
  entry: weightedGradeCalculator,
  Component: WeightedGradeCalculatorComponent,
  SEOComponent: WeightedGradeCalculatorSEO,
  BibliographyComponent: WeightedGradeCalculatorBibliography,
};
