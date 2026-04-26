export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { WEIGHTED_GRADE_CALCULATOR_TOOL } from './tool/weighted-grade-calculator';
import { CITATION_GENERATOR_TOOL } from './tool/citation-generator';
import { POMODORO_FLOW_TOOL } from './tool/pomodoro-flow';
import { INTERNATIONAL_GRADE_CONVERTER_TOOL } from './tool/international-grade-converter';

export const ALL_TOOLS: ToolDefinition[] = [
  WEIGHTED_GRADE_CALCULATOR_TOOL,
  CITATION_GENERATOR_TOOL,
  POMODORO_FLOW_TOOL,
  INTERNATIONAL_GRADE_CONVERTER_TOOL,
];


