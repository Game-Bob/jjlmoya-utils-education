import type { Session, State, ElementsMap } from './types';

interface HarvestData {
  elements: ElementsMap;
  workDuration: number;
  interruptions: number;
  sessions: Session[];
  state: State;
  taskName: string;
  renderTaskBreakdown: (stats: Record<string, number>) => void;
  switchPhase: (from: Element | null, to: Element | null) => void;
}

export function updateHarvestUI(data: HarvestData): void {
  const score = Math.max(0, Math.min(100, ((data.workDuration - data.interruptions * 2) / data.workDuration) * 100));
  if (data.elements.harvestFocus) (data.elements.harvestFocus as HTMLElement).textContent = `${Math.round(score)}%`;
  if (data.elements.harvestTime) (data.elements.harvestTime as HTMLElement).textContent = `${data.workDuration}m`;
  if (data.elements.harvestInterruptions) (data.elements.harvestInterruptions as HTMLElement).textContent = String(data.interruptions);
  if (data.elements.harvestTasks) {
    (data.elements.harvestTasks as HTMLElement).textContent = String(new Set(data.sessions.map((s: Session) => s.taskName)).size);
  }
  const stats: Record<string, number> = {};
  data.sessions.forEach((s: Session) => {
    stats[s.taskName] = (stats[s.taskName] || 0) + s.workDuration;
  });
  data.renderTaskBreakdown(stats);
}

export function displayHarvestPhase(data: HarvestData): void {
  if (data.state.currentPhase === "flow") {
    if (data.elements.taskName) (data.elements.taskName as HTMLElement).textContent = data.taskName;
    data.switchPhase(data.elements.phaseConfig, data.elements.phaseFlow);
  } else if (data.state.currentPhase === "harvest") {
    data.switchPhase(data.elements.phaseConfig, data.elements.phaseHarvest);
    updateHarvestUI(data);
  }
}
