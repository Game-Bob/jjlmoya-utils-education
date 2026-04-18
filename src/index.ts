export { educationCategory } from './category';
export const educationCategorySEO = () => import('./category/EducationCategorySEO.astro').then((m) => m.default);

export { weightedGradeCalculator, WEIGHTED_GRADE_CALCULATOR_TOOL } from './tool/weighted-grade-calculator';
export { citationGenerator, CITATION_GENERATOR_TOOL } from './tool/citation-generator';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  EducationToolEntry,
  EducationCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

