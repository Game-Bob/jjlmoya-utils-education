import type { ToolDefinition } from '../../types';
import { examCountdownSessionPredictor } from './entry';

export * from './entry';
export const EXAM_COUNTDOWN_SESSION_PREDICTOR_TOOL: ToolDefinition = {
  entry: examCountdownSessionPredictor,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
