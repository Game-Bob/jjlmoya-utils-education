import type { ToolDefinition } from '../../types';
import { latexFormulaRenderer } from './entry';

export * from './entry';

export const LATEX_FORMULA_RENDERER_TOOL: ToolDefinition = {
  entry: latexFormulaRenderer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
