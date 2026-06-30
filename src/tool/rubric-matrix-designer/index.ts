import type { ToolDefinition } from '../../types';
import { rubricMatrixDesigner } from './entry';

export * from './entry';
export const RUBRIC_MATRIX_DESIGNER_TOOL: ToolDefinition = {
  entry: rubricMatrixDesigner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
