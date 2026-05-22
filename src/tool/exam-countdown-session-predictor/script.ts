import { StateManager } from './stateManager';
import { UIManager } from './uiManager';
import { calculateSchedule } from './logic';
import type { ExamCountdownUI, ExamCountdownState } from './types';

export class ExamCountdownController {
  private stateManager: StateManager;
  private uiManager: UIManager;
  private state: ExamCountdownState;

  constructor(labels: ExamCountdownUI) {
    this.stateManager = new StateManager();
    this.uiManager = new UIManager(labels);
    this.state = this.stateManager.loadState();
  }

  public init(): void {
    this.uiManager.populateInputs(this.state);
    this.update();
    this.bindEvents();
  }

  private update(): void {
    const results = calculateSchedule(this.state);
    this.uiManager.updateOutputs(this.state, results);
  }

  private saveAndRefresh(): void {
    this.stateManager.saveState(this.state);
    this.update();
  }

  private bindInputs(el: ReturnType<UIManager['getElements']>): void {
    el.examDate?.addEventListener('change', (e) => {
      this.state.examDate = (e.target as HTMLInputElement).value;
      this.saveAndRefresh();
    });
    el.totalMaterial?.addEventListener('input', (e) => {
      this.state.totalMaterial = Math.max(0, parseFloat((e.target as HTMLInputElement).value) || 0);
      this.saveAndRefresh();
    });
    el.materialUnit?.addEventListener('change', (e) => {
      this.state.materialUnit = (e.target as HTMLSelectElement).value;
      this.saveAndRefresh();
    });
    el.currentProgress?.addEventListener('input', (e) => {
      this.state.currentProgress = Math.max(0, parseFloat((e.target as HTMLInputElement).value) || 0);
      this.saveAndRefresh();
    });
    el.reviewBuffer?.addEventListener('input', (e) => {
      this.state.reviewBuffer = Math.max(0, parseInt((e.target as HTMLInputElement).value) || 0);
      this.saveAndRefresh();
    });
  }

  private bindWeeklyCheckboxes(checkboxes: NodeListOf<HTMLInputElement>): void {
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const dayIndex = parseInt(checkbox.getAttribute('data-day') || '0');
        this.state.weeklySchedule[dayIndex] = checkbox.checked;
        this.saveAndRefresh();
      });
    });
  }

  private addExclusion(newExcludedDate: HTMLInputElement | null): void {
    if (!newExcludedDate) return;
    const dateStr = newExcludedDate.value;
    if (!dateStr) return;

    if (!this.state.excludedDates.includes(dateStr)) {
      this.state.excludedDates.push(dateStr);
      this.state.excludedDates.sort();
      this.uiManager.renderExclusionsList(this.state.excludedDates);
      this.saveAndRefresh();
    }
    newExcludedDate.value = '';
  }

  private bindExclusions(el: ReturnType<UIManager['getElements']>): void {
    el.addExclusionBtn?.addEventListener('click', () => this.addExclusion(el.newExcludedDate));
    el.newExcludedDate?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.addExclusion(el.newExcludedDate);
      }
    });
    el.exclusionsList?.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.remove-exclusion-btn') as HTMLButtonElement | null;
      if (!btn) return;
      const dateStr = btn.getAttribute('data-date');
      if (dateStr) {
        this.state.excludedDates = this.state.excludedDates.filter((d) => d !== dateStr);
        this.uiManager.renderExclusionsList(this.state.excludedDates);
        this.saveAndRefresh();
      }
    });
  }

  private bindScheduleAndReset(el: ReturnType<UIManager['getElements']>): void {
    el.scheduleTableBody?.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('.toggle-day-btn') as HTMLButtonElement | null;
      if (!btn) return;
      const dateStr = btn.getAttribute('data-date');
      if (!dateStr) return;
      if (this.state.excludedDates.includes(dateStr)) {
        this.state.excludedDates = this.state.excludedDates.filter((d) => d !== dateStr);
      } else {
        this.state.excludedDates.push(dateStr);
        this.state.excludedDates.sort();
      }
      this.uiManager.renderExclusionsList(this.state.excludedDates);
      this.saveAndRefresh();
    });
    el.resetBtn?.addEventListener('click', () => {
      this.state = this.stateManager.getDefaultState();
      this.uiManager.populateInputs(this.state);
      this.saveAndRefresh();
    });
  }

  private bindEvents(): void {
    const el = this.uiManager.getElements();
    this.bindInputs(el);
    this.bindWeeklyCheckboxes(el.weeklyCheckboxes);
    this.bindExclusions(el);
    this.bindScheduleAndReset(el);
  }
}

export function initExamCountdown(labels: ExamCountdownUI) {
  const controller = new ExamCountdownController(labels);
  return { init: () => controller.init() };
}
