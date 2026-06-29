import type { ToolDefinition } from '../../types';
import { universityFinanceSimulator } from './entry';

export * from './entry';

export const UNIVERSITY_FINANCE_SIMULATOR_TOOL: ToolDefinition = {
  entry: universityFinanceSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
