import type { ElementsMap } from './types';

export function getElements(): ElementsMap {
  return {
    taskInput: document.getElementById("task-input"),
    startBtn: document.getElementById("start-btn"),
    phaseConfig: document.getElementById("phase-config"),
    phaseFlow: document.getElementById("phase-flow"),
    phaseHarvest: document.getElementById("phase-harvest"),
    timerDisplay: document.getElementById("timer-display"),
    taskName: document.getElementById("task-name"),
    phaseLabel: document.getElementById("phase-label"),
    pauseBtn: document.getElementById("pause-btn"),
    distrationBtn: document.getElementById("distraction-btn"),
    interruptCount: document.getElementById("interrupt-count"),
    plus5: document.getElementById("plus-5"),
    minus5: document.getElementById("minus-5"),
    timerRing: document.getElementById("timer-ring"),
    progressRing: document.getElementById("progress-ring"),
    container: document.querySelector(".pomodoro-container"),
    copyMarkdown: document.getElementById("copy-markdown"),
    newSessionBtn: document.getElementById("new-session-btn"),
    harvestFocus: document.getElementById("harvest-focus"),
    harvestTime: document.getElementById("harvest-time"),
    harvestInterruptions: document.getElementById("harvest-interruptions"),
    harvestTasks: document.getElementById("harvest-tasks"),
    taskBreakdown: document.getElementById("task-breakdown"),
  };
}
