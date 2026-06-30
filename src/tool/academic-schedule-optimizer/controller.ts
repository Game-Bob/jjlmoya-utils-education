import { buildICS, detectScheduleConflicts } from './logic';
import type { ScheduleEvent } from './logic';

const q = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const root = q<HTMLElement>('academic-schedule-root');
const subjectInput = q<HTMLInputElement>('subject-input');
const roomInput = q<HTMLInputElement>('room-input');
const dayInput = q<HTMLSelectElement>('day-input');
const startInput = q<HTMLSelectElement>('start-input');
const durationInput = q<HTMLSelectElement>('duration-input');
const colorInput = q<HTMLInputElement>('color-input');
const saturdayToggle = q<HTMLInputElement>('saturday-toggle');
const sundayToggle = q<HTMLInputElement>('sunday-toggle');
const addButton = q<HTMLButtonElement>('add-event-button');
const newButton = q<HTMLButtonElement>('new-event-button');
const exportButton = q<HTMLButtonElement>('export-ics-button');
const weekBoard = q<HTMLElement>('week-board');
const customScrollbar = q<HTMLElement>('custom-scrollbar');
const customScrollbarThumb = q<HTMLElement>('custom-scrollbar-thumb');
const dayGrid = q<HTMLElement>('day-grid');
const timeRail = q<HTMLElement>('time-rail');
const conflictOutput = q<HTMLElement>('conflict-output');

const STORAGE_KEY = 'jjlmoya_academic_schedule_optimizer_v1';
let events: ScheduleEvent[] = [];

if (root && subjectInput && roomInput && dayInput && startInput && durationInput && colorInput && saturdayToggle && sundayToggle && addButton && newButton && exportButton && weekBoard && customScrollbar && customScrollbarThumb && dayGrid && timeRail && conflictOutput) {
  const labels = JSON.parse(root.dataset.labels || '{}');
  const escapeHtml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const weekdays = labels.weekDayLabels;
  const weekendDays = labels.weekendDayShortLabels;
  const hours = labels.hourOptions;
  let selectedEventId: string | null = null;
  events = labels.defaultEvents.map((event: ScheduleEvent) => ({ ...event }));

  const getFormState = () => ({
    subject: subjectInput.value,
    room: roomInput.value,
    day: dayInput.value,
    start: startInput.value,
    duration: durationInput.value,
    color: colorInput.value,
    selectedEventId,
  });

  const persistState = () => localStorage.setItem(STORAGE_KEY, JSON.stringify({ events, selectedEventId, form: getFormState(), weekend: { saturday: saturdayToggle.checked, sunday: sundayToggle.checked } }));

  const restoreForm = (form: Record<string, string> | undefined) => {
    if (!form) return;
    subjectInput.value = form.subject || '';
    roomInput.value = form.room || '';
    startInput.value = form.start || labels.defaultFormStart;
    durationInput.value = form.duration || labels.defaultFormDuration;
    colorInput.value = form.color || labels.defaultColor;
  };

  const restoreWeekend = (wk: Record<string, boolean> | undefined) => {
    saturdayToggle.checked = wk ? Boolean(wk.saturday) : false;
    sundayToggle.checked = wk ? Boolean(wk.sunday) : false;
  };

  const getDayVal = (form: Record<string, string> | undefined) => {
    const val = form ? form.day : null;
    return typeof val === 'string' ? val : null;
  };

  const restoreState = () => {
    const rawState = localStorage.getItem(STORAGE_KEY);
    if (!rawState) return null;
    try {
      const state = JSON.parse(rawState);
      if (Array.isArray(state.events)) events = state.events;
      restoreWeekend(state.weekend);
      selectedEventId = typeof state.selectedEventId === 'string' ? state.selectedEventId : null;
      restoreForm(state.form);
      return getDayVal(state.form);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  };

  hours.forEach((hour: number) => {
    startInput.add(new Option(`${hour}${labels.hourSuffix}`, hour.toString()));
    const mark = document.createElement('span');
    mark.textContent = `${hour}${labels.hourSuffix}`;
    timeRail.appendChild(mark);
  });

  const getActiveDays = () => [
    ...weekdays,
    ...(saturdayToggle.checked ? [weekendDays[0]] : []),
    ...(sundayToggle.checked ? [weekendDays[1]] : []),
  ];

  const refreshDayOptions = () => {
    const selectedDay = Number(dayInput.value || 0);
    const activeDays = getActiveDays();
    dayInput.innerHTML = '';
    activeDays.forEach((day) => dayInput.add(new Option(day, [...weekdays, ...weekendDays].indexOf(day).toString())));
    dayInput.value = activeDays.includes([...weekdays, ...weekendDays][selectedDay]) ? selectedDay.toString() : '0';
  };

  const updateCustomScrollbar = () => {
    const maxScroll = weekBoard.scrollWidth - weekBoard.clientWidth;
    customScrollbar.hidden = maxScroll <= 0;
    if (maxScroll <= 0) return;
    const trackWidth = customScrollbar.clientWidth;
    const thumbWidth = Math.max(44, (weekBoard.clientWidth / weekBoard.scrollWidth) * trackWidth);
    const thumbTravel = trackWidth - thumbWidth;
    const thumbLeft = (weekBoard.scrollLeft / maxScroll) * thumbTravel;
    customScrollbarThumb.style.width = `${thumbWidth}px`;
    customScrollbarThumb.style.transform = `translateX(${thumbLeft}px)`;
  };

  const resetForm = () => {
    selectedEventId = null;
    subjectInput.value = '';
    roomInput.value = '';
    dayInput.value = labels.defaultFormDay;
    startInput.value = labels.defaultFormStart;
    durationInput.value = labels.defaultFormDuration;
    colorInput.value = labels.defaultColor;
    addButton.textContent = labels.addClass;
    persistState();
    render();
  };

  const loadEventIntoForm = (id: string) => {
    const item = events.find((event) => event.id === id);
    if (!item) return;
    selectedEventId = id;
    subjectInput.value = item.subject;
    roomInput.value = item.room;
    refreshDayOptions();
    dayInput.value = item.day.toString();
    startInput.value = item.start.toString();
    durationInput.value = item.duration.toString();
    colorInput.value = item.color;
    addButton.textContent = labels.saveClass;
    persistState();
    render();
  };

  const render = () => {
    refreshDayOptions();
    const activeDays = getActiveDays();
    const allDays = [...weekdays, ...weekendDays];
    const visibleEvents = events.filter((event) => activeDays.includes(allDays[event.day]));
    selectedEventId = selectedEventId && visibleEvents.some((event) => event.id === selectedEventId) ? selectedEventId : null;
    addButton.textContent = selectedEventId ? labels.saveClass : labels.addClass;
    const conflicts = detectScheduleConflicts(visibleEvents);
    const conflictIds = new Set(conflicts.flatMap((conflict) => [conflict.firstId, conflict.secondId]));
    dayGrid.style.setProperty('--active-days', activeDays.length.toString());
    dayGrid.innerHTML = activeDays.map((day) => `<div class="day-column"><strong>${day}</strong><div class="day-lane" data-day="${day}"></div></div>`).join('');

    visibleEvents.forEach((event) => {
      const lane = dayGrid.querySelector(`.day-lane[data-day="${allDays[event.day]}"]`);
      if (!lane) return;
      const block = document.createElement('article');
      block.className = `event-block${conflictIds.has(event.id) ? ' has-conflict' : ''}${selectedEventId === event.id ? ' is-selected' : ''}`;
      block.draggable = true;
      block.dataset.id = event.id;
      block.style.setProperty('--event-color', event.color);
      block.style.gridRow = `${event.start - 7} / span ${event.duration}`;
      block.innerHTML = `<strong>${escapeHtml(event.subject)}</strong><span>${event.start}${labels.hourSuffix}${labels.timeSeparator}${event.start + event.duration}${labels.hourSuffix}</span><small>${escapeHtml(event.room)}</small><button type="button" aria-label="${labels.removeLabel}" data-remove="${event.id}">${escapeHtml(labels.removeGlyph)}</button>`;
      lane.appendChild(block);
    });

    conflictOutput.textContent = conflicts.length > 0 ? `${conflicts.length} ${conflicts.length === 1 ? labels.overlapSingular : labels.overlapPlural} ${labels.detectedLabel}` : labels.noConflicts;
    requestAnimationFrame(updateCustomScrollbar);
  };

  customScrollbar.addEventListener('pointerdown', (event) => {
    const trackRect = customScrollbar.getBoundingClientRect();
    const thumbRect = customScrollbarThumb.getBoundingClientRect();
    const targetLeft = event.clientX - trackRect.left - thumbRect.width / 2;
    const maxScroll = weekBoard.scrollWidth - weekBoard.clientWidth;
    const maxThumbLeft = trackRect.width - thumbRect.width;
    weekBoard.scrollLeft = maxThumbLeft > 0 ? (Math.max(0, Math.min(maxThumbLeft, targetLeft)) / maxThumbLeft) * maxScroll : 0;
    updateCustomScrollbar();
  });

  weekBoard.addEventListener('scroll', updateCustomScrollbar);
  window.addEventListener('resize', updateCustomScrollbar);

  dayGrid.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const removeId = target.closest<HTMLButtonElement>('[data-remove]')?.dataset.remove;
    if (removeId) {
      events = events.filter((item) => item.id !== removeId);
      if (selectedEventId === removeId) selectedEventId = null;
      addButton.textContent = labels.addClass;
      persistState();
      render();
      return;
    }
    const block = target.closest<HTMLElement>('.event-block');
    if (block?.dataset.id) loadEventIntoForm(block.dataset.id);
  });

  dayGrid.addEventListener('dragstart', (event) => {
    const target = (event.target as HTMLElement).closest<HTMLElement>('.event-block');
    if (target?.dataset.id) event.dataTransfer?.setData('text/plain', target.dataset.id);
  });

  dayGrid.addEventListener('dragover', (event) => event.preventDefault());
  dayGrid.addEventListener('drop', (event) => {
    event.preventDefault();
    const lane = (event.target as HTMLElement).closest('.day-lane') as HTMLElement | null;
    const id = event.dataTransfer?.getData('text/plain');
    if (!lane || !id) return;
    const nextDay = [...weekdays, ...weekendDays].indexOf(lane.dataset.day || '');
    const laneRect = lane.getBoundingClientRect();
    const slotHeight = laneRect.height / hours.length;
    const offsetSlots = Math.max(0, Math.min(hours.length - 1, Math.floor((event.clientY - laneRect.top) / slotHeight)));
    const nextStart = hours[offsetSlots] ?? Number(labels.defaultFormStart);
    events = events.map((item) => item.id === id ? { ...item, day: nextDay, start: nextStart } : item);
    selectedEventId = id;
    loadEventIntoForm(id);
    persistState();
  });

  addButton.addEventListener('click', () => {
    const editedEvent = {
      id: selectedEventId || `event-${Date.now()}`,
      subject: subjectInput.value || labels.defaultNewSubject,
      room: roomInput.value || '',
      day: Number(dayInput.value),
      start: Number(startInput.value),
      duration: Number(durationInput.value),
      color: colorInput.value,
    };
    events = selectedEventId ? events.map((item) => item.id === selectedEventId ? editedEvent : item) : [...events, editedEvent];
    selectedEventId = editedEvent.id;
    addButton.textContent = labels.saveClass;
    persistState();
    render();
  });

  newButton.addEventListener('click', resetForm);

  exportButton.addEventListener('click', () => {
    const activeDays = getActiveDays();
    const allDays = [...weekdays, ...weekendDays];
    const visibleEvents = events.filter((event) => activeDays.includes(allDays[event.day]));
    const blob = new Blob([buildICS(visibleEvents, labels.exportWeekStartISO)], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = labels.exportFilename;
    link.click();
    URL.revokeObjectURL(url);
  });

  [subjectInput, roomInput, dayInput, startInput, durationInput, colorInput].forEach((field) => {
    field.addEventListener('input', persistState);
    field.addEventListener('change', persistState);
  });

  [saturdayToggle, sundayToggle].forEach((toggle) => {
    toggle.addEventListener('change', () => {
      persistState();
      render();
    });
  });

  const restoredFormDay = restoreState();
  refreshDayOptions();
  if (selectedEventId) addButton.textContent = labels.saveClass;
  if (restoredFormDay) dayInput.value = restoredFormDay;
  render();
}
