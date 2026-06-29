import type { InteractiveFlashcardGeneratorUI } from './entry';
import type { Flashcard } from './scriptData';
import { loadInitialState } from './scriptData';
import { attachInteractiveFlashcardHandlers } from './scriptEvents';

const DECK_STORAGE_KEY = 'jjlmoya_flashcards_deck_v2';
const CATEGORY_STORAGE_KEY = 'jjlmoya_flashcards_cats_v2';

export type UiElements = ReturnType<typeof getUiElements>;
export type State = ReturnType<typeof createState>;

function getById<T extends HTMLElement>(id: string): T {
  return document.getElementById(id) as T;
}

function getUiElements() {
  return Object.fromEntries(
    Object.entries(elementIds).map(([key, value]) => [key, getById(value)]),
  ) as UiElements;
}

function createState(labels: InteractiveFlashcardGeneratorUI) {
  const initialState = loadInitialState(labels, DECK_STORAGE_KEY, CATEGORY_STORAGE_KEY);

  return {
    categories: initialState.categories,
    categoryToDelete: '',
    currentIndex: 0,
    deck: initialState.deck as Flashcard[],
    filteredDeck: [] as Flashcard[],
    lastProgressMilestone: 0,
    selectedCategories: [...initialState.categories],
    streak: 0,
    streakTimer: 0 as number | undefined,
  };
}

export function saveState(state: State) {
  localStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(state.deck));
  localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(state.categories));
}

export function restartAnimation(element: HTMLElement, className: string) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

export function updateFilteredDeck(state: State) {
  state.filteredDeck = state.deck.filter((card) => state.selectedCategories.includes(card.category));
  state.currentIndex %= Math.max(state.filteredDeck.length, 1);
}

export function updateFlashcardHud(state: State, ui: UiElements, score: string, percentage: number) {
  ui.activeCardEl.dataset.score = score;
  ui.activeCardEl.style.setProperty('--flashcard-progress', `${percentage}%`);
  ui.flashcardProgressPercent.textContent = `${Math.round(percentage)}%`;
  ui.flashcardStreakChip.textContent = `x${state.streak} streak`;
  ui.flashcardStreakChip.dataset.active = state.streak > 0 ? 'true' : 'false';
}

export function render(state: State, ui: UiElements, labels: InteractiveFlashcardGeneratorUI) {
  ui.activeCardEl.classList.remove('flipped');
  if (state.filteredDeck.length === 0) {
    ui.cardFrontContent.textContent = labels.emptyDeckWarning;
    ui.cardBackContent.textContent = labels.emptyDeckWarning;
    ui.cardProgressIndicator.textContent = '0 / 0';
    ui.deckProgressFill.style.width = '0%';
    updateFlashcardHud(state, ui, 'unrated', 0);
    return;
  }

  const currentCard = state.filteredDeck[state.currentIndex];
  const scoredCount = state.filteredDeck.filter((card) => card.score !== null).length;
  const percentage = (scoredCount / state.filteredDeck.length) * 100;

  ui.cardFrontContent.textContent = currentCard.question;
  ui.cardBackContent.textContent = currentCard.answer;
  ui.cardProgressIndicator.textContent = `${state.currentIndex + 1} / ${state.filteredDeck.length}`;
  ui.deckProgressFill.style.width = `${percentage}%`;
  updateFlashcardHud(state, ui, currentCard.score || 'unrated', percentage);
  animateMilestones(state, ui.activeCardEl, percentage);
}

function animateMilestones(state: State, cardEl: HTMLElement, percentage: number) {
  const milestone = [100, 75, 50, 25].find((value) => percentage >= value && state.lastProgressMilestone < value);
  if (!milestone) return;
  restartAnimation(cardEl, milestone === 100 ? 'deck-cleared' : 'deck-streak');
  state.lastProgressMilestone = milestone;
}

function updateCategoriesUi(state: State, ui: UiElements, labels: InteractiveFlashcardGeneratorUI, rerender: () => void) {
  ui.cardCategorySelect.innerHTML = state.categories.map((category) => `<option value="${category}">${category}</option>`).join('');
  ui.categoriesCheckboxesList.innerHTML = '';
  state.categories.forEach((category) => ui.categoriesCheckboxesList.appendChild(buildCategoryRow(category, state, labels, rerender)));
  ui.selectAllCategories.checked = state.selectedCategories.length === state.categories.length;
}

function buildCategoryRow(category: string, state: State, labels: InteractiveFlashcardGeneratorUI, rerender: () => void) {
  const row = document.createElement('div');
  const checkbox = document.createElement('input');
  const exportButton = buildIconButton('Export Category', '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"></path></svg>');
  const actions = document.createElement('div');
  const label = document.createElement('label');

  row.className = 'category-item-row';
  label.className = 'checkbox-label';
  actions.className = 'category-item-actions';
  checkbox.type = 'checkbox';
  checkbox.checked = state.selectedCategories.includes(category);
  checkbox.addEventListener('change', () => toggleCategory(category, checkbox.checked, state, rerender));
  exportButton.addEventListener('click', (event) => exportCategoryDeck(event, category, state.deck));

  label.append(checkbox, Object.assign(document.createElement('span'), { textContent: category }));
  actions.appendChild(exportButton);
  if (state.categories.length > 1) {
    actions.appendChild(buildDeleteButton(category, state, labels));
  }
  row.append(label, actions);
  return row;
}

function toggleCategory(category: string, checked: boolean, state: State, rerender: () => void) {
  state.selectedCategories = checked ? [...state.selectedCategories, category] : state.selectedCategories.filter((item) => item !== category);
  updateFilteredDeck(state);
  rerender();
}

function buildDeleteButton(category: string, state: State, labels: InteractiveFlashcardGeneratorUI) {
  const button = buildIconButton('Delete Category', '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>', 'delete-btn-color');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    state.categoryToDelete = category;
    getById<HTMLParagraphElement>('delete-modal-message').textContent = labels.deleteConfirmMsg.replace('this category', `"${category}"`);
    getById<HTMLDivElement>('delete-confirm-modal').style.display = 'flex';
  });
  return button;
}

function buildIconButton(title: string, icon: string, extraClass = '') {
  const button = document.createElement('button');
  button.className = `icon-btn ${extraClass}`.trim();
  button.title = title;
  button.innerHTML = icon;
  return button;
}

function exportCategoryDeck(event: Event, category: string, deck: Flashcard[]) {
  event.preventDefault();
  downloadJson(`flashcards-${category.toLowerCase().replace(/\s+/g, '-')}.json`, { categories: [category], deck: deck.filter((card) => card.category === category) });
}

function downloadJson(filename: string, payload: unknown) {
  const anchor = document.createElement('a');
  anchor.href = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(payload))}`;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

export function initInteractiveFlashcardGenerator(labels: InteractiveFlashcardGeneratorUI) {
  const ui = getUiElements();
  const state = createState(labels);
  const rerender = () => render(state, ui, labels);
  const refreshCategories = () => updateCategoriesUi(state, ui, labels, rerender);

  const syncAndRender = () => {
    saveState(state);
    updateFilteredDeck(state);
    refreshCategories();
    rerender();
  };

  attachInteractiveFlashcardHandlers({ labels, refreshCategories, rerender, state, syncAndRender, ui });
  syncAndRender();
}
const elementIds = {
  activeCardEl: 'active-flashcard',
  addCardBtn: 'add-card-btn',
  addCategoryBtn: 'add-category-btn',
  aiTopicsInput: 'ai-topics-input',
  answerInput: 'card-answer-input',
  cardBackContent: 'card-back-content',
  cardCategorySelect: 'card-category-select',
  cardFrontContent: 'card-front-content',
  cardProgressIndicator: 'card-progress-indicator',
  categoriesCheckboxesList: 'categories-checkboxes-list',
  copyPromptBtn: 'copy-prompt-btn',
  deckProgressFill: 'deck-progress-fill',
  deleteConfirmModal: 'delete-confirm-modal',
  deleteModalCancel: 'delete-modal-cancel',
  deleteModalConfirm: 'delete-modal-confirm',
  deleteModalMessage: 'delete-modal-message',
  exportAllBtn: 'export-all-btn',
  flashcardProgressPercent: 'flashcard-progress-percent',
  flashcardStreakChip: 'flashcard-streak-chip',
  generatePromptBtn: 'generate-prompt-btn',
  generatedPromptContainer: 'generated-prompt-container',
  generatedPromptOutput: 'generated-prompt-output',
  importDeckFile: 'import-deck-file',
  importTextBtn: 'import-text-btn',
  importTextCancel: 'import-text-cancel',
  importTextConfirm: 'import-text-confirm',
  importTextModal: 'import-text-modal',
  importTextTextarea: 'import-text-textarea',
  newCategoryInput: 'new-category-input',
  nextCardBtn: 'next-card-btn',
  prevCardBtn: 'prev-card-btn',
  questionInput: 'card-question-input',
  resetDeckBtn: 'reset-deck-btn',
  scoreEasyBtn: 'score-easy-btn',
  scoreHardBtn: 'score-hard-btn',
  scoreMediumBtn: 'score-medium-btn',
  selectAllCategories: 'select-all-categories',
} as const;
