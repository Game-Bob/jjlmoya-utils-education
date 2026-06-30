export { educationCategory } from './category';
export const educationCategorySEO = () => import('./category/EducationCategorySEO.astro').then((m) => m.default);

export { weightedGradeCalculator, WEIGHTED_GRADE_CALCULATOR_TOOL } from './tool/weighted-grade-calculator';
export { citationGenerator, CITATION_GENERATOR_TOOL } from './tool/citation-generator';
export { pomodoroFlow, POMODORO_FLOW_TOOL } from './tool/pomodoro-flow';
export { internationalGradeConverter, INTERNATIONAL_GRADE_CONVERTER_TOOL } from './tool/international-grade-converter';
export { examCountdownSessionPredictor, EXAM_COUNTDOWN_SESSION_PREDICTOR_TOOL } from './tool/exam-countdown-session-predictor';
export { universityFinanceSimulator, UNIVERSITY_FINANCE_SIMULATOR_TOOL } from './tool/university-finance-simulator';
export { curriculumProgressTracker, CURRICULUM_PROGRESS_TRACKER_TOOL } from './tool/curriculum-progress-tracker';
export { interactiveFlashcardGenerator, INTERACTIVE_FLASHCARD_GENERATOR_TOOL } from './tool/interactive-flashcard-generator';
export { academicScheduleOptimizer, ACADEMIC_SCHEDULE_OPTIMIZER_TOOL } from './tool/academic-schedule-optimizer';
export { readingTimeNoteDensityPlanner, READING_TIME_NOTE_DENSITY_PLANNER_TOOL } from './tool/reading-time-note-density-planner';
export { rubricMatrixDesigner, RUBRIC_MATRIX_DESIGNER_TOOL } from './tool/rubric-matrix-designer';


export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  EducationToolEntry,
  EducationCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';
