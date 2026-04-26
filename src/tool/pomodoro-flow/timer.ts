import type { Labels, ElementsMap } from './types';
import { updateHarvestUI, displayHarvestPhase } from './harvestHelper';
import { generateMarkdown, copyAndShowFeedback } from './markdownHelper';
import { StateManager } from './stateManager';
import { UIManager } from './uiManager';
import { getElements } from './elementGetter';
import { playNotification, adjustTimerValue, generateDefaultTaskName } from './timerHelpers';
import { attachButtonListeners, attachCycleListeners } from './eventHandlers';

export class PomodoroTimer {
  private currentCycle = "tree";
  private workDuration = 50;
  private breakDuration = 10;
  private isRunning = false;
  private isPaused = false;
  private timeRemaining = this.workDuration * 60;
  private isWorkPhase = true;
  private interruptions = 0;
  private taskName = "";
  private timerInterval: number | null = null;
  private phaseStartTime: number | null = null;
  private labels: Labels;
  private elements: ElementsMap;
  private stateManager: StateManager;
  private uiManager: UIManager;

  constructor(labels: Labels) {
    this.labels = labels;
    this.elements = getElements();
    this.stateManager = new StateManager();
    this.uiManager = new UIManager(this.elements, this.labels);
  }

  private formatTime(s: number) { return this.uiManager.formatTime(s); }
  private updateDisplay() { this.uiManager.updateDisplay(this.timeRemaining, this.isWorkPhase, this.workDuration, this.breakDuration); }
  private switchPhase(from: Element | null, to: Element | null) { this.uiManager.switchPhase(from, to); }
  private saveState() {
    let currentPhase = "config";
    if (this.elements.phaseFlow?.classList.contains("active")) currentPhase = "flow";
    else if (this.elements.phaseHarvest?.classList.contains("active")) currentPhase = "harvest";
    this.stateManager.saveState({
      currentCycle: this.currentCycle, workDuration: this.workDuration, breakDuration: this.breakDuration,
      isRunning: this.isRunning, isPaused: this.isPaused, timeRemaining: this.timeRemaining,
      isWorkPhase: this.isWorkPhase, interruptions: this.interruptions, taskName: this.taskName,
      phaseStartTime: this.phaseStartTime, currentPhase,
    });
  }

  private togglePause() {
    this.isPaused = !this.isPaused;
    if (this.elements.pauseBtn) {
      (this.elements.pauseBtn as HTMLElement).textContent = this.isPaused ? this.labels.resumeButton : this.labels.pauseButton;
    }
    this.saveState();
  }

  private recordInterruption() {
    this.interruptions++;
    this.uiManager.updateInterruptCount(this.interruptions);
    this.uiManager.recordInterruptionFeedback();
    this.saveState();
  }

  private adjustTime(d: number) {
    this.timeRemaining = adjustTimerValue(this.timeRemaining, d * 60);
    this.updateDisplay();
    this.saveState();
  }

  private handleTimerEnd(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    playNotification(this.isWorkPhase, {
      breakTimeNotification: this.labels.breakTimeNotification,
      focusTimeNotification: this.labels.focusTimeNotification,
    });
    if (this.isWorkPhase) {
      this.stateManager.saveSessions({
        taskName: this.taskName, cycleType: this.currentCycle, workDuration: this.workDuration,
        breakDuration: this.breakDuration, timestamp: Date.now(), interruptions: this.interruptions,
      });
      this.showHarvest();
    } else {
      this.switchPhases();
    }
  }

  private startTimer(): void {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.phaseStartTime = Date.now();
    this.isRunning = true;
    this.timerInterval = window.setInterval(() => {
      if (!this.isPaused) {
        this.timeRemaining--;
        this.updateDisplay();
        this.uiManager.setTitleBar(this.taskName, this.formatTime(this.timeRemaining));
        this.saveState();
        if (this.timeRemaining <= 0) this.handleTimerEnd();
      }
    }, 1000);
  }

  private switchPhases(): void {
    this.isWorkPhase = !this.isWorkPhase;
    this.timeRemaining = (this.isWorkPhase ? this.workDuration : this.breakDuration) * 60;
    this.uiManager.updatePhaseUI(this.isWorkPhase);
    this.updateDisplay();
    this.startTimer();
  }

  private startSession(): void {
    const inp = this.elements.taskInput as HTMLInputElement;
    this.taskName = inp?.value.trim() || generateDefaultTaskName();
    Object.assign(this, { isRunning: true, interruptions: 0 });
    this.uiManager.updateInterruptCount(0);
    this.uiManager.updateTaskName(this.taskName);
    this.switchPhase(this.elements.phaseConfig, this.elements.phaseFlow);
    this.elements.container?.classList.remove("break-mode");
    this.saveState();
    this.startTimer();
  }

  private showHarvest(): void {
    updateHarvestUI({
      elements: this.elements, workDuration: this.workDuration, interruptions: this.interruptions,
      sessions: this.stateManager.getSessions(), renderTaskBreakdown: (t) => this.uiManager.renderTaskBreakdown(t),
    });
    this.switchPhase(this.elements.phaseFlow, this.elements.phaseHarvest);
    this.saveState();
  }

  private copyToClipboard(): void {
    const md = generateMarkdown(
      { studySession: this.labels.studySession, interruptionsLabel: this.labels.interruptionsLabel, copied: this.labels.copied },
      this.taskName, this.workDuration, this.interruptions
    );
    copyAndShowFeedback(md, this.elements.copyMarkdown as HTMLElement, { copied: this.labels.copied });
  }

  private resetSession(): void {
    this.switchPhase(this.elements.phaseHarvest, this.elements.phaseConfig);
    const inp = this.elements.taskInput as HTMLInputElement;
    if (inp) { inp.value = ""; inp.focus(); }
    Object.assign(this, { isRunning: false, isPaused: false, isWorkPhase: true, interruptions: 0, taskName: "", timeRemaining: this.workDuration * 60 });
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.uiManager.updateInterruptCount(0);
    this.stateManager.clearState();
    this.updateDisplay();
  }

  private restoreState(): boolean {
    const state = this.stateManager.getState();
    if (!state) return false;
    Object.assign(this, state);
    if (this.isRunning && this.phaseStartTime) {
      const elapsed = Math.floor((Date.now() - this.phaseStartTime) / 1000);
      this.timeRemaining = Math.max(0, this.timeRemaining - elapsed);
      this.phaseStartTime = Date.now();
    }
    displayHarvestPhase({
      elements: this.elements, workDuration: this.workDuration, interruptions: this.interruptions,
      sessions: this.stateManager.getSessions(), state, taskName: this.taskName,
      renderTaskBreakdown: (t) => this.uiManager.renderTaskBreakdown(t), switchPhase: (f, t) => this.switchPhase(f, t),
    });
    this.uiManager.updateInterruptCount(this.interruptions);
    this.updateDisplay();
    return true;
  }

  private handleCycleCardClick(card: Element): void {
    document.querySelectorAll(".cycle-card").forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
    Object.assign(this, {
      currentCycle: card.getAttribute("data-cycle") || "tree",
      workDuration: parseInt(card.getAttribute("data-work") || "50"),
      breakDuration: parseInt(card.getAttribute("data-break") || "10"),
    });
    this.timeRemaining = this.workDuration * 60;
    this.updateDisplay();
    this.saveState();
  }

  private handleWindowFocus(): void {
    if (this.isRunning && this.phaseStartTime) {
      const elapsed = Math.floor((Date.now() - this.phaseStartTime) / 1000);
      this.timeRemaining = Math.max(0, this.timeRemaining - elapsed);
      this.phaseStartTime = Date.now();
      this.updateDisplay();
    }
  }

  public init(): void {
    const restored = this.restoreState();
    attachCycleListeners(".cycle-card", (c) => this.handleCycleCardClick(c));
    attachButtonListeners({
      "start-btn": () => this.startSession(), "pause-btn": () => this.togglePause(), "distraction-btn": () => this.recordInterruption(),
      "plus-5": () => this.adjustTime(5), "minus-5": () => this.adjustTime(-5), "timer-ring": () => { if (this.isRunning) this.togglePause(); },
      "copy-markdown": () => this.copyToClipboard(), "new-session-btn": () => this.resetSession(),
    });
    window.addEventListener("focus", () => this.handleWindowFocus());
    if (!restored) (document.querySelector(".cycle-card") as HTMLElement)?.click();
    else if (this.isRunning) this.startTimer();
    if ("Notification" in window && Notification.permission === "default") Notification.requestPermission();
  }
}
