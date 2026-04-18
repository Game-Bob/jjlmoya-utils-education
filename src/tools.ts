export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { WEIGHTED_GRADE_CALCULATOR_TOOL } from './tool/weighted-grade-calculator';
import { CITATION_GENERATOR_TOOL } from './tool/citation-generator';

export const ALL_TOOLS: ToolDefinition[] = [
  WEIGHTED_GRADE_CALCULATOR_TOOL,
  CITATION_GENERATOR_TOOL,
];


