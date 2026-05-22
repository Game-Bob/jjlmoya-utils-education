import type { ExamCountdownState, DaySchedule, DayScheduleType } from './types';

export function parseLocalDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}

export function formatLocalDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function getTodayLocalDate(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function getDaysDifference(d1: Date, d2: Date): number {
  const diffTime = d2.getTime() - d1.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

function generateDates(start: Date, end: Date): Date[] {
  const dates: Date[] = [];
  const current = new Date(start.getTime());
  while (current <= end) {
    dates.push(new Date(current.getTime()));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}

function getDayType(dateStr: string, date: Date, exam: Date, state: ExamCountdownState): DayScheduleType {
  if (dateStr === state.examDate) {
    return 'exam';
  }
  const daysToExam = getDaysDifference(date, exam);
  if (daysToExam <= state.reviewBuffer) {
    return 'review';
  }
  if (state.excludedDates.includes(dateStr) || !state.weeklySchedule[date.getDay()]) {
    return 'rest';
  }
  return 'study';
}

function buildRawSchedule(dates: Date[], exam: Date, state: ExamCountdownState): DaySchedule[] {
  return dates.map((date) => {
    const dateStr = formatLocalDate(date);
    return {
      dateStr,
      dayOfWeek: date.getDay(),
      formattedDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      type: getDayType(dateStr, date, exam, state),
      dailyTarget: 0,
      cumulativeTarget: 0,
    };
  });
}

function assignTargets(rawSchedule: DaySchedule[], startProgress: number, dailyPace: number): DaySchedule[] {
  let currentCumulative = startProgress;
  return rawSchedule.map((day) => {
    const dailyTarget = day.type === 'study' ? dailyPace : 0;
    currentCumulative += dailyTarget;
    return {
      ...day,
      dailyTarget,
      cumulativeTarget: currentCumulative,
    };
  });
}

export function calculateSchedule(state: ExamCountdownState): {
  daysSchedule: DaySchedule[];
  totalDaysLeft: number;
  availableStudyDays: number;
  dailyPace: number;
} {
  const today = getTodayLocalDate();
  const exam = parseLocalDate(state.examDate);
  const totalDaysLeft = getDaysDifference(today, exam);

  if (totalDaysLeft <= 0) {
    return {
      daysSchedule: [],
      totalDaysLeft: Math.max(0, totalDaysLeft),
      availableStudyDays: 0,
      dailyPace: 0,
    };
  }

  const rawSchedule = buildRawSchedule(generateDates(today, exam), exam, state);
  const studyDaysCount = rawSchedule.filter((d) => d.type === 'study').length;
  const remainingMaterial = Math.max(0, state.totalMaterial - state.currentProgress);
  const dailyPace = studyDaysCount > 0 ? remainingMaterial / studyDaysCount : 0;

  return {
    daysSchedule: assignTargets(rawSchedule, state.currentProgress, dailyPace),
    totalDaysLeft,
    availableStudyDays: studyDaysCount,
    dailyPace,
  };
}
