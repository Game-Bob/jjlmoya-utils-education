import { weightedGradeCalculator } from './entry';
export * from './entry';
export const WEIGHTED_GRADE_CALCULATOR_TOOL: ToolDefinition = {
  entry: weightedGradeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
