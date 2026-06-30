import type { ToolDefinition } from '../../types';
import { academicScheduleOptimizer } from './entry';

export * from './entry';

export const ACADEMIC_SCHEDULE_OPTIMIZER_TOOL: ToolDefinition = {
  entry: academicScheduleOptimizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
