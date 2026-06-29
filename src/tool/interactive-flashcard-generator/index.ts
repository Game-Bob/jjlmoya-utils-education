import type { ToolDefinition } from '../../types';
import { interactiveFlashcardGenerator } from './entry';
export * from './entry';
export const INTERACTIVE_FLASHCARD_GENERATOR_TOOL: ToolDefinition = {
  entry: interactiveFlashcardGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
