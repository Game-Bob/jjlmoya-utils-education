import type { Session, State } from './types';

export class StateManager {
  private readonly STORAGE_KEY = "jjlmoya_pomodoro_sessions";
  private readonly STATE_KEY = "jjlmoya_pomodoro_state";

  getSessions(): Session[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "[]") as Session[];
  }

  saveSessions(sessionData: Session): void {
    const sessions = this.getSessions();
    sessions.push(sessionData);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sessions));
  }

  saveState(state: State): void {
    localStorage.setItem(this.STATE_KEY, JSON.stringify(state));
  }

  getState(): State | null {
    const saved = localStorage.getItem(this.STATE_KEY);
    return saved ? (JSON.parse(saved) as State) : null;
  }

  clearState(): void {
    localStorage.removeItem(this.STATE_KEY);
  }
}
