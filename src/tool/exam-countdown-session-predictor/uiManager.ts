import type { ExamCountdownState, DaySchedule, ExamCountdownUI } from './types';

export class UIManager {
  private labels: ExamCountdownUI;

  constructor(labels: ExamCountdownUI) {
    this.labels = labels;
  }

  public getElements() {
    return {
      examDate: document.getElementById('exam-date') as HTMLInputElement | null,
      totalMaterial: document.getElementById('total-material') as HTMLInputElement | null,
      materialUnit: document.getElementById('material-unit') as HTMLSelectElement | null,
      currentProgress: document.getElementById('current-progress') as HTMLInputElement | null,
      reviewBuffer: document.getElementById('review-buffer') as HTMLInputElement | null,
      weeklyCheckboxes: document.querySelectorAll('.weekly-day-checkbox') as NodeListOf<HTMLInputElement>,
      newExcludedDate: document.getElementById('new-excluded-date') as HTMLInputElement | null,
      addExclusionBtn: document.getElementById('add-exclusion-btn') as HTMLButtonElement | null,
      exclusionsList: document.getElementById('exclusions-list') as HTMLDivElement | null,
      dailyPace: document.getElementById('daily-pace') as HTMLElement | null,
      daysLeft: document.getElementById('days-left') as HTMLElement | null,
      studyDays: document.getElementById('study-days') as HTMLElement | null,
      bufferDays: document.getElementById('buffer-days') as HTMLElement | null,
      paceUnit: document.getElementById('pace-unit') as HTMLElement | null,
      scheduleTableBody: document.getElementById('schedule-table-body') as HTMLElement | null,
      errorMessage: document.getElementById('error-message') as HTMLElement | null,
      resetBtn: document.getElementById('reset-btn') as HTMLButtonElement | null,
    };
  }

  public populateInputs(state: ExamCountdownState): void {
    const el = this.getElements();
    if (el.examDate) el.examDate.value = state.examDate;
    if (el.totalMaterial) el.totalMaterial.value = state.totalMaterial.toString();
    if (el.materialUnit) el.materialUnit.value = state.materialUnit;
    if (el.currentProgress) el.currentProgress.value = state.currentProgress.toString();
    if (el.reviewBuffer) el.reviewBuffer.value = state.reviewBuffer.toString();

    el.weeklyCheckboxes.forEach((checkbox) => {
      const dayIndex = parseInt(checkbox.getAttribute('data-day') || '0');
      checkbox.checked = !!state.weeklySchedule[dayIndex];
    });

    this.renderExclusionsList(state.excludedDates);
  }

  public renderExclusionsList(excludedDates: string[]): void {
    const el = this.getElements();
    if (!el.exclusionsList) return;

    if (excludedDates.length === 0) {
      el.exclusionsList.innerHTML = `<span class="no-exclusions">No custom rest days added</span>`;
      return;
    }

    el.exclusionsList.innerHTML = excludedDates
      .map((dateStr) => {
        const date = new Date(dateStr + 'T00:00:00');
        const formatted = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        return `
          <div class="exclusion-badge">
            <span>${formatted}</span>
            <button class="remove-exclusion-btn" data-date="${dateStr}">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        `;
      })
      .join('');
  }

  public updateOutputs(
    state: ExamCountdownState,
    results: {
      daysSchedule: DaySchedule[];
      totalDaysLeft: number;
      availableStudyDays: number;
      dailyPace: number;
    }
  ): void {
    const el = this.getElements();

    if (el.dailyPace) el.dailyPace.textContent = results.dailyPace.toFixed(1);
    if (el.daysLeft) el.daysLeft.textContent = results.totalDaysLeft.toString();
    if (el.studyDays) el.studyDays.textContent = results.availableStudyDays.toString();
    if (el.bufferDays) el.bufferDays.textContent = state.reviewBuffer.toString();

    const unitKey = state.materialUnit as keyof typeof this.labels.units;
    const unitLabel = this.labels.units[unitKey] || state.materialUnit;
    if (el.paceUnit) el.paceUnit.textContent = `${unitLabel}/day`;

    this.renderSchedule(results.daysSchedule, state);
    this.validateInputs(state, results);
  }

  private validateInputs(
    state: ExamCountdownState,
    results: {
      daysSchedule: DaySchedule[];
      totalDaysLeft: number;
      availableStudyDays: number;
      dailyPace: number;
    }
  ): void {
    const el = this.getElements();
    if (!el.errorMessage) return;

    if (results.totalDaysLeft <= 0) {
      el.errorMessage.textContent = this.labels.examInPastError;
      el.errorMessage.style.display = 'block';
    } else if (results.availableStudyDays === 0) {
      el.errorMessage.textContent = this.labels.noStudyDaysError;
      el.errorMessage.style.display = 'block';
    } else if (state.totalMaterial <= 0) {
      el.errorMessage.textContent = this.labels.noMaterialError;
      el.errorMessage.style.display = 'block';
    } else {
      el.errorMessage.style.display = 'none';
      el.errorMessage.textContent = '';
    }
  }

  private getActionButton(day: DaySchedule, isExcluded: boolean, isWeeklyRest: boolean): string {
    if (day.type === 'study') {
      return `
        <button class="toggle-day-btn btn-rest" data-date="${day.dateStr}">
          ${this.labels.markAsRest}
        </button>
      `;
    }
    if (day.type === 'rest' && isExcluded && !isWeeklyRest) {
      return `
        <button class="toggle-day-btn btn-study" data-date="${day.dateStr}">
          ${this.labels.markAsStudy}
        </button>
      `;
    }
    if (day.type === 'rest' && isWeeklyRest) {
      return `<span class="weekly-rest-indicator">Weekly Rest</span>`;
    }
    return '';
  }

  private renderRow(day: DaySchedule, state: ExamCountdownState, unitLabel: string): string {
    const isWeeklyRest = !state.weeklySchedule[day.dayOfWeek];
    const isExcluded = state.excludedDates.includes(day.dateStr);
    const typeLabel = this.labels.dayTypes[day.type];
    const rowClass = `row-${day.type}`;
    const actionButton = this.getActionButton(day, isExcluded, isWeeklyRest);
    const targetVal = day.type === 'study' ? `${day.dailyTarget.toFixed(1)} ${unitLabel}` : '-';
    const cumulativeVal = day.type === 'study' || day.type === 'review' || day.type === 'exam'
      ? `${day.cumulativeTarget.toFixed(1)} / ${state.totalMaterial} ${unitLabel}`
      : '-';

    return `
      <tr class="schedule-row ${rowClass}">
        <td class="cell-date">${day.formattedDate}</td>
        <td class="cell-day">${this.labels.daysOfWeek[day.dayOfWeek]}</td>
        <td class="cell-type">
          <span class="type-pill pill-${day.type}">${typeLabel}</span>
        </td>
        <td class="cell-target">${targetVal}</td>
        <td class="cell-cumulative">${cumulativeVal}</td>
        <td class="cell-action">${actionButton}</td>
      </tr>
    `;
  }

  private renderSchedule(schedule: DaySchedule[], state: ExamCountdownState): void {
    const el = this.getElements();
    if (!el.scheduleTableBody) return;

    if (schedule.length === 0) {
      el.scheduleTableBody.innerHTML = `
        <tr>
          <td colspan="6" class="empty-schedule-cell">Select a future exam date to generate study schedule</td>
        </tr>
      `;
      return;
    }

    const unitKey = state.materialUnit as keyof typeof this.labels.units;
    const unitLabel = this.labels.units[unitKey] || state.materialUnit;

    el.scheduleTableBody.innerHTML = schedule
      .map((day) => this.renderRow(day, state, unitLabel))
      .join('');
  }
}
