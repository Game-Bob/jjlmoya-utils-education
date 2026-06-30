export interface ReadingPlannerInput {
  pages: number;
  minutesAvailable: number;
  pagesPerHour: number;
  noteDensity: number;
  sessions: number;
}

export interface ReadingPlannerResult {
  totalReadingMinutes: number;
  totalNoteMinutes: number;
  totalMinutes: number;
  coveragePercent: number;
  pagesPerSession: number;
  minutesPerSession: number;
  notesPerSession: number;
  status: 'comfortable' | 'tight' | 'overloaded';
}

function getPlanStatus(loadRatio: number): ReadingPlannerResult['status'] {
  if (loadRatio <= 0.85) return 'comfortable';
  if (loadRatio <= 1) return 'tight';
  return 'overloaded';
}

export function calculateReadingPlan(input: ReadingPlannerInput): ReadingPlannerResult {
  const pages = Math.max(0, input.pages);
  const minutesAvailable = Math.max(0, input.minutesAvailable);
  const pagesPerHour = Math.max(1, input.pagesPerHour);
  const noteDensity = Math.max(0, input.noteDensity);
  const sessions = Math.max(1, Math.round(input.sessions));
  const totalReadingMinutes = (pages / pagesPerHour) * 60;
  const totalNoteMinutes = pages * noteDensity;
  const totalMinutes = totalReadingMinutes + totalNoteMinutes;
  const coveragePercent = totalMinutes > 0 ? Math.min(100, (minutesAvailable / totalMinutes) * 100) : 100;
  const loadRatio = minutesAvailable > 0 ? totalMinutes / minutesAvailable : Number.POSITIVE_INFINITY;
  const status = getPlanStatus(loadRatio);

  return {
    totalReadingMinutes,
    totalNoteMinutes,
    totalMinutes,
    coveragePercent,
    pagesPerSession: pages / sessions,
    minutesPerSession: totalMinutes / sessions,
    notesPerSession: (pages * noteDensity) / sessions,
    status,
  };
}
