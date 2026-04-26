export interface Labels {
  resumeButton: string;
  pauseButton: string;
  focusMode: string;
  breakTime: string;
  breakTimeNotification: string;
  focusTimeNotification: string;
  interruptionsLabel: string;
  studySession: string;
  copied: string;
}

export interface ElementsMap {
  [key: string]: Element | HTMLElement | HTMLInputElement | SVGCircleElement | null;
}

export interface Session {
  taskName: string;
  cycleType: string;
  workDuration: number;
  breakDuration: number;
  timestamp: number;
  interruptions: number;
}

export interface State {
  currentCycle: string;
  workDuration: number;
  breakDuration: number;
  isRunning: boolean;
  isPaused: boolean;
  timeRemaining: number;
  isWorkPhase: boolean;
  interruptions: number;
  taskName: string;
  phaseStartTime: number | null;
  currentPhase: string;
}
