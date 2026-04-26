import type { Labels } from './types';
import { PomodoroTimer } from './timer';

export function initPomodoroTimer(labels: Labels) {
  const timer = new PomodoroTimer(labels);
  return { init: () => timer.init() };
}
