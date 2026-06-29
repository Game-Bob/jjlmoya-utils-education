import type { InteractiveFlashcardGeneratorUI } from './entry';
import { mergeImportedPayload, normalizeImportedPayload } from './scriptData';
import { render, restartAnimation, type State, type UiElements } from './script';

type Runtime = {
  labels: InteractiveFlashcardGeneratorUI;
  refreshCategories: () => void;
  rerender: () => void;
  state: State;
  syncAndRender: () => void;
  ui: UiElements;
};

function pulseCard(cardEl: HTMLElement) {
  restartAnimation(cardEl, 'card-pulse');
}
function moveCard(cardEl: HTMLElement, direction: 'next' | 'prev') {
  restartAnimation(cardEl, direction === 'prev' ? 'slide-prev' : 'slide-next');
}
function updateStreak(state: State, ui: UiElements, difficulty: 'easy' | 'hard' | 'medium') {
  if (difficulty === 'easy') {
    state.streak += 2;
  } else if (difficulty === 'medium') {
    state.streak += 1;
  } else {
    state.streak = 0;
  }
  if (state.streakTimer) {
    clearTimeout(state.streakTimer);
  }
  ui.activeCardEl.dataset.streak = `${state.streak}`;
  ui.flashcardStreakChip.textContent = `x${state.streak} streak`;
  ui.flashcardStreakChip.dataset.active = state.streak > 0 ? 'true' : 'false';
  if (state.streak > 0) {
    restartAnimation(ui.activeCardEl, 'streak-pop');
    state.streakTimer = window.setTimeout(() => {
      state.streak = 0;
      ui.activeCardEl.dataset.streak = '0';
      ui.flashcardStreakChip.textContent = 'x0 streak';
      ui.flashcardStreakChip.dataset.active = 'false';
    }, 2600);
  }
}

function rateCard(runtime: Runtime, difficulty: 'easy' | 'hard' | 'medium') {
  const { state, ui } = runtime;
  const currentCard = state.filteredDeck[state.currentIndex];
  if (!currentCard) return;
  const originalCard = state.deck.find((card) =>
    card.question === currentCard.question &&
    card.answer === currentCard.answer &&
    card.category === currentCard.category);
  if (originalCard) {
    originalCard.score = difficulty;
  }
  state.currentIndex = (state.currentIndex + 1) % state.filteredDeck.length;
  ui.activeCardEl.dataset.burst = difficulty;
  restartAnimation(ui.activeCardEl, `burst-${difficulty}`);
  updateStreak(state, ui, difficulty);
  runtime.syncAndRender();
  pulseCard(ui.activeCardEl);
}

function importPayload(runtime: Runtime, rawValue: string, onSuccess?: () => void) {
  const payload = normalizeImportedPayload(rawValue.trim());
  if (!payload) return;
  mergeImportedPayload(payload, runtime.state.categories, runtime.state.selectedCategories, runtime.state.deck);
  runtime.state.lastProgressMilestone = 0;
  runtime.syncAndRender();
  onSuccess?.();
}

function attachCategoryHandlers(runtime: Runtime) {
  const { state, ui } = runtime;
  ui.selectAllCategories.addEventListener('change', () => {
    state.selectedCategories = ui.selectAllCategories.checked ? [...state.categories] : [];
    runtime.refreshCategories();
    runtime.syncAndRender();
  });
  ui.addCategoryBtn.addEventListener('click', () => {
    const categoryName = ui.newCategoryInput.value.trim();
    if (!categoryName || state.categories.includes(categoryName)) return;
    state.categories.push(categoryName);
    state.selectedCategories.push(categoryName);
    ui.newCategoryInput.value = '';
    runtime.syncAndRender();
  });
}

function toggleActiveCard(runtime: Runtime) {
  const { ui } = runtime;
  ui.activeCardEl.classList.toggle('flipped');
  pulseCard(ui.activeCardEl);
}
function addCurrentCard(runtime: Runtime) {
  const { labels, state, ui } = runtime;
  const question = ui.questionInput.value.trim();
  const answer = ui.answerInput.value.trim();
  const category = ui.cardCategorySelect.value;
  if (!question || !answer || !category) return;
  state.deck.push({ answer, category, question, score: null });
  ui.questionInput.value = '';
  ui.answerInput.value = '';
  runtime.syncAndRender();
  state.currentIndex = state.filteredDeck.findIndex((card) => card.question === question && card.answer === answer);
  render(state, ui, labels);
  pulseCard(ui.activeCardEl);
}
function shiftCard(runtime: Runtime, direction: 'next' | 'prev') {
  const { state, ui } = runtime;
  if (state.filteredDeck.length === 0) return;
  const delta = direction === 'prev' ? -1 : 1;
  state.currentIndex = (state.currentIndex + delta + state.filteredDeck.length) % state.filteredDeck.length;
  moveCard(ui.activeCardEl, direction);
  runtime.rerender();
}
function attachCardHandlers(runtime: Runtime) {
  const { ui } = runtime;
  ui.activeCardEl.addEventListener('click', () => toggleActiveCard(runtime));
  ui.addCardBtn.addEventListener('click', () => addCurrentCard(runtime));
  ui.prevCardBtn.addEventListener('click', () => shiftCard(runtime, 'prev'));
  ui.nextCardBtn.addEventListener('click', () => shiftCard(runtime, 'next'));
  ui.scoreEasyBtn.addEventListener('click', () => rateCard(runtime, 'easy'));
  ui.scoreMediumBtn.addEventListener('click', () => rateCard(runtime, 'medium'));
  ui.scoreHardBtn.addEventListener('click', () => rateCard(runtime, 'hard'));
}

function attachDeckHandlers(runtime: Runtime) {
  const { state, ui } = runtime;
  ui.resetDeckBtn.addEventListener('click', () => {
    state.filteredDeck.forEach((card) => {
      const originalCard = state.deck.find((item) => item.question === card.question && item.answer === card.answer && item.category === card.category);
      if (originalCard) originalCard.score = null;
    });
    state.currentIndex = 0;
    state.lastProgressMilestone = 0;
    state.streak = 0;
    runtime.syncAndRender();
  });
  ui.exportAllBtn.addEventListener('click', () => {
    const anchor = document.createElement('a');
    anchor.href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify({ categories: state.categories, deck: state.deck }))}`;
    anchor.download = 'flashcards-all.json';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  });
}

function closeDeleteModal(runtime: Runtime) {
  const { state, ui } = runtime;
  ui.deleteConfirmModal.style.display = 'none';
  state.categoryToDelete = '';
}
function confirmCategoryDelete(runtime: Runtime) {
  const { state } = runtime;
  if (!state.categoryToDelete) return;
  state.categories = state.categories.filter((item) => item !== state.categoryToDelete);
  state.selectedCategories = state.selectedCategories.filter((item) => item !== state.categoryToDelete);
  state.deck = state.deck.filter((card) => card.category !== state.categoryToDelete);
  closeDeleteModal(runtime);
  runtime.syncAndRender();
}
function importDeckFile(runtime: Runtime) {
  const { ui } = runtime;
  const file = ui.importDeckFile.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ({ target }) => target?.result && importPayload(runtime, String(target.result));
  reader.readAsText(file);
}

function updatePromptButtonState(runtime: Runtime) {
  const { ui } = runtime;
  ui.generatePromptBtn.disabled = !ui.aiTopicsInput.value.trim();
}
function generateAiPrompt(runtime: Runtime) {
  const { labels, ui } = runtime;
  const topics = ui.aiTopicsInput.value.trim();
  if (!topics) return;
  ui.generatedPromptOutput.value = labels.aiPromptTemplate.replace('{topics}', topics);
  ui.generatedPromptContainer.style.display = 'flex';
}

function openImportTextModal(runtime: Runtime) {
  const { ui } = runtime;
  ui.importTextTextarea.value = '';
  ui.importTextModal.style.display = 'flex';
}
function confirmTextImport(runtime: Runtime) {
  const { ui } = runtime;
  importPayload(runtime, ui.importTextTextarea.value, () => {
    ui.importTextModal.style.display = 'none';
  });
}

function attachImportHandlers(runtime: Runtime) {
  const { ui } = runtime;
  ui.deleteModalCancel.addEventListener('click', () => closeDeleteModal(runtime));
  ui.deleteModalConfirm.addEventListener('click', () => confirmCategoryDelete(runtime));
  ui.importDeckFile.addEventListener('change', () => importDeckFile(runtime));
  ui.aiTopicsInput.addEventListener('input', () => updatePromptButtonState(runtime));
  ui.generatePromptBtn.addEventListener('click', () => generateAiPrompt(runtime));
  ui.copyPromptBtn.addEventListener('click', () => navigator.clipboard.writeText(ui.generatedPromptOutput.value));
  ui.importTextBtn.addEventListener('click', () => openImportTextModal(runtime));
  ui.importTextCancel.addEventListener('click', () => { ui.importTextModal.style.display = 'none'; });
  ui.importTextConfirm.addEventListener('click', () => confirmTextImport(runtime));
}

function isTypingTarget(tagName: string | undefined) {
  return tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA';
}

function runKeyboardAction(runtime: Runtime, key: string) {
  const actions: Record<string, () => void> = {
    '1': () => runtime.ui.scoreEasyBtn.click(),
    '2': () => runtime.ui.scoreMediumBtn.click(),
    '3': () => runtime.ui.scoreHardBtn.click(),
    ArrowLeft: () => runtime.ui.prevCardBtn.click(),
    ArrowRight: () => runtime.ui.nextCardBtn.click(),
    ArrowDown: () => toggleActiveCard(runtime),
    ArrowUp: () => toggleActiveCard(runtime),
    ' ': () => toggleActiveCard(runtime),
  };
  actions[key]?.();
}

function handleKeyboard(runtime: Runtime, event: KeyboardEvent) {
  const { state } = runtime;
  const tagName = document.activeElement?.tagName;
  if (isTypingTarget(tagName) || state.filteredDeck.length === 0) return;
  if (event.key === ' ' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();
  }
  runKeyboardAction(runtime, event.key);
}

export function attachInteractiveFlashcardHandlers(runtime: Runtime) {
  attachCategoryHandlers(runtime);
  attachCardHandlers(runtime);
  attachDeckHandlers(runtime);
  attachImportHandlers(runtime);
  window.addEventListener('keydown', (event) => {
    handleKeyboard(runtime, event);
  });
}
