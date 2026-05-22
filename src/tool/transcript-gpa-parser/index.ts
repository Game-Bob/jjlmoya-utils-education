import type { ToolDefinition } from '../../types';
import { transcriptGPAParser } from './entry';

export * from './entry';

export const TRANSCRIPT_GPA_PARSER_TOOL: ToolDefinition = {
  entry: transcriptGPAParser,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
