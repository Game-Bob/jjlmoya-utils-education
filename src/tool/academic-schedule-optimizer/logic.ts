export interface ScheduleEvent {
  id: string;
  subject: string;
  day: number;
  start: number;
  duration: number;
  color: string;
  room: string;
}

export interface ScheduleConflict {
  firstId: string;
  secondId: string;
  day: number;
}

export function detectScheduleConflicts(events: ScheduleEvent[]): ScheduleConflict[] {
  const conflicts: ScheduleConflict[] = [];

  events.forEach((event, index) => {
    events.slice(index + 1).forEach((candidate) => {
      const eventEnd = event.start + event.duration;
      const candidateEnd = candidate.start + candidate.duration;
      const overlaps = event.day === candidate.day && event.start < candidateEnd && candidate.start < eventEnd;

      if (overlaps) {
        conflicts.push({ firstId: event.id, secondId: candidate.id, day: event.day });
      }
    });
  });

  return conflicts;
}

function pad(value: number): string {
  return value.toString().padStart(2, '0');
}

function formatTime(hour: number): string {
  return `${pad(hour)}0000`;
}

export function buildICS(events: ScheduleEvent[], weekStartISO: string): string {
  const start = new Date(`${weekStartISO}T00:00:00`);
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//JJLMoya Utils//Academic Schedule Optimizer//EN',
  ];

  events.forEach((event) => {
    const date = new Date(start);
    date.setDate(start.getDate() + event.day);
    const stamp = `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`;
    lines.push(
      'BEGIN:VEVENT',
      `UID:${event.id}@jjlmoya-utils-education`,
      `SUMMARY:${event.subject}`,
      `LOCATION:${event.room}`,
      `DTSTART:${stamp}T${formatTime(event.start)}`,
      `DTEND:${stamp}T${formatTime(event.start + event.duration)}`,
      'END:VEVENT',
    );
  });

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}
