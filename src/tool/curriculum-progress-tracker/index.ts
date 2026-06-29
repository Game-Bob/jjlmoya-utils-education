import type { ToolDefinition } from '../../types';
import { curriculumProgressTracker } from './entry';

export * from './entry';
export const CURRICULUM_PROGRESS_TRACKER_TOOL: ToolDefinition = {
  entry: curriculumProgressTracker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
