export function attachButtonListeners(handlers: Record<string, () => void>): void {
  Object.entries(handlers).forEach(([id, handler]) => {
    document.getElementById(id)?.addEventListener("click", handler);
  });
}

export function attachCycleListeners(selector: string, handler: (card: Element) => void): void {
  document.querySelectorAll(selector).forEach((card) => {
    card.addEventListener("click", () => handler(card));
  });
}
