export function generateMarkdown(
  labels: { studySession: string; interruptionsLabel: string; copied: string },
  taskName: string,
  workDuration: number,
  interruptions: number
): string {
  const score = Math.round(((workDuration - interruptions * 2) / workDuration) * 100);
  return `## ${labels.studySession} - ${new Date().toLocaleDateString()}\n* Task: ${taskName}\n* Time: ${workDuration} min\n* Focus: ${score}%\n* ${labels.interruptionsLabel} ${interruptions}`;
}

export function copyAndShowFeedback(
  markdown: string,
  copyBtn: HTMLElement | null,
  labels: { copied: string }
): Promise<void> {
  return navigator.clipboard.writeText(markdown).then(() => {
    if (copyBtn) {
      const orig = copyBtn.textContent || "";
      copyBtn.textContent = labels.copied;
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = orig;
      }, 2000);
    }
  });
}
