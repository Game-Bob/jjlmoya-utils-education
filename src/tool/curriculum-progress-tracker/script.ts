import { PlannerStore } from './store';
import { DOMRenderer, type CurriculumLabels } from './renderer';
import { validatePlan } from './logic';

async function handleImportFile(file: File, store: PlannerStore, renderer: DOMRenderer, errorMsg: string) {
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const result = validatePlan(parsed);
    if (result.valid) {
      store.setPlan(result.plan);
    } else {
      renderer.showError(errorMsg);
    }
  } catch {
    renderer.showError(errorMsg);
  }
}

function handleExport(store: PlannerStore) {
  const plan = store.getPlan();
  const text = JSON.stringify(plan, null, 2);
  const blob = new Blob([text], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${plan.degreeName.toLowerCase().replace(/\s+/g, '-')}-plan.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function setupMetaListeners(root: HTMLElement, store: PlannerStore, renderer: DOMRenderer) {
  const degreeNameInput = root.querySelector('[data-degree-name-input]') as HTMLInputElement | null;
  degreeNameInput?.addEventListener('input', () => {
    store.updateDegreeName(degreeNameInput.value);
  });

  const gradCreditsInput = root.querySelector('[data-graduation-credits-input]') as HTMLInputElement | null;
  gradCreditsInput?.addEventListener('input', () => {
    const val = Math.max(1, Number(gradCreditsInput.value) || 0);
    store.updateGraduationCredits(val);
    renderer.updateCalculatedStats();
  });

  const targetGpaInput = root.querySelector('[data-target-gpa-input]') as HTMLInputElement | null;
  targetGpaInput?.addEventListener('input', () => {
    const val = Math.max(0, Math.min(10, Number(targetGpaInput.value) || 0));
    store.updateTargetGpa(val);
    renderer.updateCalculatedStats();
  });
}

function setupActionListeners(
  root: HTMLElement,
  store: PlannerStore,
  labels: CurriculumLabels,
  renderer: DOMRenderer
) {
  root.querySelector('[data-action="add-semester"]')?.addEventListener('click', () => {
    const count = store.getPlan().semesters.length + 1;
    const name = labels.semesterTitleTemplate.replace('{num}', String(count));
    store.addSemester(name);
  });

  const importInput = root.querySelector('[data-import-input]') as HTMLInputElement | null;
  root.querySelector('[data-action="import"]')?.addEventListener('click', () => {
    importInput?.click();
  });

  importInput?.addEventListener('change', async () => {
    const file = importInput.files?.[0];
    if (file) {
      await handleImportFile(file, store, renderer, labels.importError);
    }
    if (importInput) importInput.value = '';
  });

  root.querySelector('[data-action="export"]')?.addEventListener('click', () => {
    handleExport(store);
  });
}

export function initCurriculumProgressTracker(labels: CurriculumLabels) {
  const root = document.getElementById('curriculum-progress-tracker');
  if (!root) return;

  const store = new PlannerStore(() => {
    renderer.renderLayout();
  });

  const renderer = new DOMRenderer(root, labels, store);

  setupMetaListeners(root, store, renderer);
  setupActionListeners(root, store, labels, renderer);

  renderer.renderLayout();
}

export type { CurriculumLabels };
