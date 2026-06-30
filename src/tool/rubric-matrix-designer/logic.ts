export interface RubricCriterion {
  id: string;
  name: string;
  weight: number;
  cells: string[];
}

export interface RubricLevel {
  id: string;
  name: string;
  score: number;
}

export interface RubricState {
  levels: RubricLevel[];
  criteria: RubricCriterion[];
}

export function weightTotal(criteria: RubricCriterion[]): number {
  return criteria.reduce((sum, criterion) => sum + Number(criterion.weight || 0), 0);
}

export function weightStatus(total: number): 'balanced' | 'under' | 'over' {
  if (Math.abs(total - 100) < 0.01) return 'balanced';
  return total < 100 ? 'under' : 'over';
}

export interface RubricTextTemplates {
  newCriterionTemplate: string;
  newDescriptorTemplate: string;
  newLevelTemplate: string;
  criterionHeader: string;
  weightHeader: string;
}

function applyIndexTemplate(template: string, values: Record<string, number>): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

export function createCriterion(index: number, levelCount: number, templates: RubricTextTemplates): RubricCriterion {
  return {
    id: `criterion-${Date.now()}-${index}`,
    name: applyIndexTemplate(templates.newCriterionTemplate, { index }),
    weight: 20,
    cells: Array.from({ length: levelCount }, (_, cellIndex) => applyIndexTemplate(templates.newDescriptorTemplate, { index, level: cellIndex + 1 })),
  };
}

export function createLevel(index: number, templates: RubricTextTemplates): RubricLevel {
  return {
    id: `level-${Date.now()}-${index}`,
    name: applyIndexTemplate(templates.newLevelTemplate, { index }),
    score: Math.max(1, 5 - index),
  };
}

export function toCsv(state: RubricState, labels: Pick<RubricTextTemplates, 'criterionHeader' | 'weightHeader'>): string {
  const header = [labels.criterionHeader, labels.weightHeader, ...state.levels.map((level) => `${level.name} (${level.score})`)];
  const rows = state.criteria.map((criterion) => [
    criterion.name,
    `${criterion.weight}%`,
    ...criterion.cells,
  ]);
  return [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','))
    .join('\n');
}
