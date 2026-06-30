import type { ToolDefinition } from '../../types';
import { readingTimeNoteDensityPlanner } from './entry';

export * from './entry';
export const READING_TIME_NOTE_DENSITY_PLANNER_TOOL: ToolDefinition = {
  entry: readingTimeNoteDensityPlanner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
