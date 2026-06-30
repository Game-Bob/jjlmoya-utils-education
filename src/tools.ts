export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { WEIGHTED_GRADE_CALCULATOR_TOOL } from './tool/weighted-grade-calculator';
import { CITATION_GENERATOR_TOOL } from './tool/citation-generator';
import { POMODORO_FLOW_TOOL } from './tool/pomodoro-flow';
import { INTERNATIONAL_GRADE_CONVERTER_TOOL } from './tool/international-grade-converter';
import { TRANSCRIPT_GPA_PARSER_TOOL } from './tool/transcript-gpa-parser';
import { EXAM_COUNTDOWN_SESSION_PREDICTOR_TOOL } from './tool/exam-countdown-session-predictor';
import { LATEX_FORMULA_RENDERER_TOOL } from './tool/latex-formula-renderer';
import { UNIVERSITY_FINANCE_SIMULATOR_TOOL } from './tool/university-finance-simulator';
import { CURRICULUM_PROGRESS_TRACKER_TOOL } from './tool/curriculum-progress-tracker';
import { INTERACTIVE_FLASHCARD_GENERATOR_TOOL } from './tool/interactive-flashcard-generator';
import { ACADEMIC_SCHEDULE_OPTIMIZER_TOOL } from './tool/academic-schedule-optimizer';
import { READING_TIME_NOTE_DENSITY_PLANNER_TOOL } from './tool/reading-time-note-density-planner';

export const ALL_TOOLS: ToolDefinition[] = [
  WEIGHTED_GRADE_CALCULATOR_TOOL,
  CITATION_GENERATOR_TOOL,
  POMODORO_FLOW_TOOL,
  INTERNATIONAL_GRADE_CONVERTER_TOOL,
  TRANSCRIPT_GPA_PARSER_TOOL,
  EXAM_COUNTDOWN_SESSION_PREDICTOR_TOOL,
  LATEX_FORMULA_RENDERER_TOOL,
  UNIVERSITY_FINANCE_SIMULATOR_TOOL,
  CURRICULUM_PROGRESS_TRACKER_TOOL,
  INTERACTIVE_FLASHCARD_GENERATOR_TOOL,
  ACADEMIC_SCHEDULE_OPTIMIZER_TOOL,
  READING_TIME_NOTE_DENSITY_PLANNER_TOOL,
];

