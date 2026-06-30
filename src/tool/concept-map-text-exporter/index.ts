import type { ToolDefinition } from '../../types';
import { conceptMapTextExporter } from './entry';

export * from './entry';
export const CONCEPT_MAP_TEXT_EXPORTER_TOOL: ToolDefinition = {
  entry: conceptMapTextExporter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
