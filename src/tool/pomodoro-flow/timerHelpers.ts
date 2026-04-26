export function playNotification(isWorkPhase: boolean, labels: { breakTimeNotification: string; focusTimeNotification: string }): void {
  if ("Notification" in window && Notification.permission === "granted") {
    const msg = isWorkPhase ? labels.breakTimeNotification : labels.focusTimeNotification;
    new Notification("Pomodoro Flow", { body: msg });
  }
}

export function adjustTimerValue(current: number, delta: number): number {
  return Math.max(0, current + delta);
}
export function generateDefaultTaskName(): string {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  return `Study Session - ${time}, ${date}`;
}
