export interface GradeScale {
  id: string;
  name: string;
  min: number;
  max: number;
  pass: number;
  isReverse?: boolean;
}

export const GRADE_SCALES: Record<string, GradeScale> = {
  spain: { id: 'spain', name: 'Spain (0-10)', min: 0, max: 10, pass: 5 },
  usa_gpa: { id: 'usa_gpa', name: 'USA GPA (0-4.0)', min: 0, max: 4, pass: 2 },
  france: { id: 'france', name: 'France (0-20)', min: 0, max: 20, pass: 10 },
  italy: { id: 'italy', name: 'Italy (0-30)', min: 0, max: 30, pass: 18 },
  germany: { id: 'germany', name: 'Germany (1-6)', min: 6, max: 1, pass: 4, isReverse: true },
  uk_percent: { id: 'uk_percent', name: 'UK Percentage (0-100)', min: 0, max: 100, pass: 40 },
  netherlands: { id: 'netherlands', name: 'Netherlands (1-10)', min: 1, max: 10, pass: 6 },
};

export function convertGrade(grade: number, from: GradeScale, to: GradeScale): number {
  // Normalize to 0-1 range
  let normalized: number;
  if (from.isReverse) {
    normalized = (from.min - grade) / (from.min - from.max);
  } else {
    normalized = (grade - from.min) / (from.max - from.min);
  }

  // Handle out of bounds
  normalized = Math.max(0, Math.min(1, normalized));

  // Convert to target scale
  if (to.isReverse) {
    return to.min - normalized * (to.min - to.max);
  } else {
    return to.min + normalized * (to.max - to.min);
  }
}

export function getGradeColor(grade: number, scale: GradeScale): string {
  const normalized = scale.isReverse 
    ? (scale.min - grade) / (scale.min - scale.max)
    : (grade - scale.min) / (scale.max - scale.min);
  
  if (normalized >= 0.9) return '#10b981'; // Emerald 500
  if (normalized >= 0.7) return '#3b82f6'; // Blue 500
  if (normalized >= 0.5) return '#f59e0b'; // Amber 500
  return '#ef4444'; // Red 500
}
