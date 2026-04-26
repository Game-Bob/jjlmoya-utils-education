import { pomodoroFlow } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';
export const POMODORO_FLOW_TOOL: ToolDefinition = {
  entry: pomodoroFlow,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
