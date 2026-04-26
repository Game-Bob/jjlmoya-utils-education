export interface PomodoroSession {
  taskName: string;
  cycleType: 'seed' | 'tree' | 'mountain';
  workDuration: number;
  breakDuration: number;
  startTime: number;
  sessions: SessionRecord[];
  interruptions: number;
}

export interface SessionRecord {
  taskName: string;
  cycleType: string;
  workDuration: number;
  breakDuration: number;
  timestamp: number;
  interruptions: number;
}

export const CYCLE_PRESETS = {
  seed: { work: 25, break: 5, label: 'Seed' },
  tree: { work: 50, break: 10, label: 'Tree' },
  mountain: { work: 90, break: 15, label: 'Mountain' },
} as const;

export function calculateFocusScore(sessionData: SessionRecord): number {
  if (sessionData.workDuration === 0) return 0;
  const score =
    ((sessionData.workDuration - sessionData.interruptions * 2) /
      sessionData.workDuration) *
    100;
  return Math.max(0, Math.min(100, score));
}

export function getHeatmapData(sessions: SessionRecord[]): Record<string, number> {
  const heatmap: Record<string, number> = {};
  sessions.forEach((session) => {
    const date = new Date(session.timestamp);
    const key = date.toISOString().split('T')[0];
    heatmap[key] = (heatmap[key] || 0) + session.workDuration;
  });
  return heatmap;
}

export function getTaskStats(
  sessions: SessionRecord[],
): Record<string, number> {
  const stats: Record<string, number> = {};
  sessions.forEach((session) => {
    const taskName = session.taskName || 'Unnamed';
    stats[taskName] = (stats[taskName] || 0) + session.workDuration;
  });
  return stats;
}

export function formatTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const secs = 0;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
