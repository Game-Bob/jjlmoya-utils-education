export interface ExamCountdownState {
  examDate: string;
  totalMaterial: number;
  materialUnit: string;
  currentProgress: number;
  weeklySchedule: boolean[];
  reviewBuffer: number;
  excludedDates: string[];
}

export type DayScheduleType = 'study' | 'rest' | 'review' | 'exam';

export interface DaySchedule {
  dateStr: string;
  dayOfWeek: number;
  formattedDate: string;
  type: DayScheduleType;
  dailyTarget: number;
  cumulativeTarget: number;
}

export interface ExamCountdownUI {
  title: string;
  examDateLabel: string;
  materialLabel: string;
  materialUnitLabel: string;
  progressLabel: string;
  weeklyScheduleLabel: string;
  reviewBufferLabel: string;
  excludedDatesLabel: string;
  dailyPaceLabel: string;
  daysLeftLabel: string;
  studyDaysLabel: string;
  bufferDaysLabel: string;
  scheduleTitle: string;
  resetButton: string;
  addExclusionButton: string;
  daysOfWeek: string[];
  dayTypes: {
    study: string;
    rest: string;
    review: string;
    exam: string;
  };
  units: {
    pages: string;
    chapters: string;
    exercises: string;
    modules: string;
    topics: string;
  };
  noStudyDaysError: string;
  examInPastError: string;
  noMaterialError: string;
  scheduleTableHeader: {
    date: string;
    day: string;
    type: string;
    target: string;
    cumulative: string;
    action: string;
  };
  markAsRest: string;
  markAsStudy: string;
  faqTitle: string;
  bibliographyTitle: string;
}
