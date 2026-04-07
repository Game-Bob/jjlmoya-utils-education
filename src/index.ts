export { educationCategory } from './category';
export { default as educationCategorySEO } from './category/EducationCategorySEO.astro';

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

export { ALL_TOOLS } from './tools';

