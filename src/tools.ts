export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { WEIGHTED_GRADE_CALCULATOR_TOOL } from './tool/weighted-grade-calculator';
import { CITATION_GENERATOR_TOOL } from './tool/citation-generator';
import { POMODORO_FLOW_TOOL } from './tool/pomodoro-flow';
import { INTERNATIONAL_GRADE_CONVERTER_TOOL } from './tool/international-grade-converter';
import { TRANSCRIPT_GPA_PARSER_TOOL } from './tool/transcript-gpa-parser';
import { EXAM_COUNTDOWN_SESSION_PREDICTOR_TOOL } from './tool/exam-countdown-session-predictor';

export const ALL_TOOLS: ToolDefinition[] = [
  WEIGHTED_GRADE_CALCULATOR_TOOL,
  CITATION_GENERATOR_TOOL,
  POMODORO_FLOW_TOOL,
  INTERNATIONAL_GRADE_CONVERTER_TOOL,
  TRANSCRIPT_GPA_PARSER_TOOL,
  EXAM_COUNTDOWN_SESSION_PREDICTOR_TOOL,
];



