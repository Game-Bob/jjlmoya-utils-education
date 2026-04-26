import type { ToolDefinition } from '../../types';
import { internationalGradeConverter } from './entry';

export * from './entry';

export const INTERNATIONAL_GRADE_CONVERTER_TOOL: ToolDefinition = {
  entry: internationalGradeConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
