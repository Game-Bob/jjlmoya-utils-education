import type { ExamCountdownState } from './types';
import { formatLocalDate, getTodayLocalDate } from './logic';

const STATE_KEY = 'jjlmoya_exam_countdown_state';

export class StateManager {
  public getDefaultState(): ExamCountdownState {
    const futureDate = getTodayLocalDate();
    futureDate.setDate(futureDate.getDate() + 30);

    return {
      examDate: formatLocalDate(futureDate),
      totalMaterial: 300,
      materialUnit: 'pages',
      currentProgress: 0,
      weeklySchedule: [true, true, true, true, true, true, true],
      reviewBuffer: 2,
      excludedDates: [],
    };
  }

  public loadState(): ExamCountdownState {
    const saved = localStorage.getItem(STATE_KEY);
    if (!saved) {
      return this.getDefaultState();
    }
    try {
      const parsed = JSON.parse(saved);
      const defaults = this.getDefaultState();
      return {
        ...defaults,
        ...parsed,
      };
    } catch {
      return this.getDefaultState();
    }
  }

  public saveState(state: ExamCountdownState): void {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
  }

  public clearState(): void {
    localStorage.removeItem(STATE_KEY);
  }
}
