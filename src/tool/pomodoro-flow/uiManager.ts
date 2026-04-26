import type { ElementsMap, Labels } from './types';

export class UIManager {
  constructor(private elements: ElementsMap, private labels: Labels) {}

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  updateDisplay(timeRemaining: number, isWorkPhase: boolean, workDuration: number, breakDuration: number): void {
    if (!this.elements.timerDisplay) return;
    (this.elements.timerDisplay as HTMLElement).textContent = this.formatTime(timeRemaining);
    const circumference = 879.6;
    const maxTime = (isWorkPhase ? workDuration : breakDuration) * 60;
    const progress = 1 - timeRemaining / maxTime;
    if (this.elements.progressRing) {
      (this.elements.progressRing as SVGCircleElement).style.strokeDashoffset = `${circumference * (1 - progress)}`;
    }
  }

  switchPhase(from: Element | null, to: Element | null): void {
    from?.classList.remove("active");
    to?.classList.add("active");
  }

  updatePhaseUI(isWorkPhase: boolean): void {
    const label = isWorkPhase ? this.labels.focusMode : this.labels.breakTime;
    if (this.elements.phaseLabel) (this.elements.phaseLabel as HTMLElement).textContent = label;
    if (isWorkPhase) {
      this.elements.container?.classList.remove("break-mode");
      if (this.elements.pauseBtn) (this.elements.pauseBtn as HTMLElement).textContent = this.labels.pauseButton;
    } else {
      this.elements.container?.classList.add("break-mode");
      if (this.elements.pauseBtn) (this.elements.pauseBtn as HTMLElement).textContent = this.labels.resumeButton;
    }
  }

  renderTaskBreakdown(taskStats: Record<string, number>): void {
    if (!this.elements.taskBreakdown) return;
    (this.elements.taskBreakdown as HTMLElement).innerHTML = "";
    const totalTime = Object.values(taskStats).reduce((a, b) => a + b, 0);
    Object.entries(taskStats).forEach(([task, time]) => {
      const percentage = (time / totalTime) * 100;
      const div = document.createElement("div");
      div.style.cssText = "display: flex; flex-direction: column; gap: 0.5rem;";
      div.innerHTML = `<div style="display: flex; justify-content: space-between; font-size: 0.9rem;"><span>${task}</span><span style="font-weight: 700; color: var(--color-focus);">${time}m</span></div><div style="width: 100%; height: 24px; background: rgba(255,255,255,0.05); border-radius: 0.4rem; overflow: hidden;"><div style="height: 100%; width: ${percentage}%; background: linear-gradient(90deg, var(--color-focus), rgba(14,165,233,0.6)); border-radius: 0.4rem; transition: width 0.3s ease;"></div></div>`;
      (this.elements.taskBreakdown as HTMLElement).appendChild(div);
    });
  }

  updateInterruptCount(interruptions: number): void {
    if (this.elements.interruptCount) (this.elements.interruptCount as HTMLElement).textContent = String(interruptions);
  }

  updateTaskName(taskName: string): void {
    if (this.elements.taskName) (this.elements.taskName as HTMLElement).textContent = taskName;
  }

  recordInterruptionFeedback(): void {
    if (this.elements.distrationBtn) {
      (this.elements.distrationBtn as HTMLElement).style.opacity = "0.7";
      setTimeout(() => {
        if (this.elements.distrationBtn) (this.elements.distrationBtn as HTMLElement).style.opacity = "1";
      }, 200);
    }
  }

  setTitleBar(taskName: string, timeStr: string): void {
    document.title = `(${timeStr}) ${taskName}`;
  }
}
