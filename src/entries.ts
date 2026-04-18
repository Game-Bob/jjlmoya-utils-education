export { citationGenerator } from './tool/citation-generator/entry';
export type { CitationGeneratorUI, CitationGeneratorLocaleContent } from './tool/citation-generator/entry';
export { weightedGradeCalculator } from './tool/weighted-grade-calculator/entry';
export type { WeightedGradeCalculatorUI, WeightedGradeCalculatorLocaleContent } from './tool/weighted-grade-calculator/entry';
export { educationCategory } from './category';
import { citationGenerator } from './tool/citation-generator/entry';
import { weightedGradeCalculator } from './tool/weighted-grade-calculator/entry';
export const ALL_ENTRIES = [citationGenerator, weightedGradeCalculator];
