import { createCriterion, createLevel, toCsv, weightStatus, weightTotal } from './logic';
import type { RubricState } from './logic';
import {
  createCriterionRow,
  createLevelTh,
  createMobileCriterionCard,
  createMobileLevelCard,
  orbitPath
} from './dom-renderer';

const root = document.querySelector<HTMLElement>('[data-rubric-designer]');
const labels = JSON.parse(root?.dataset.labels || '{}');
const head = root?.querySelector<HTMLTableSectionElement>('[data-rd-head]');
const body = root?.querySelector<HTMLTableSectionElement>('[data-rd-body]');
const mobileBoard = root?.querySelector<HTMLElement>('[data-rd-mobile]');
const totalEl = root?.querySelector<HTMLElement>('[data-rd-total]');
const orbitEl = root?.querySelector<SVGPathElement>('[data-rd-orbit]');
const statusCard = root?.querySelector<HTMLElement>('.rd-weight-card');
const messageEl = root?.querySelector<HTMLElement>('[data-rd-message]');
const confirmModal = root?.querySelector<HTMLElement>('[data-rd-confirm]');
const cancelDeleteBtn = root?.querySelector<HTMLButtonElement>('[data-rd-cancel-delete]');
const confirmDeleteBtn = root?.querySelector<HTMLButtonElement>('[data-rd-confirm-delete]');
const storageKey = 'jjlmoya_rubric_matrix_v2';
let pendingCriterionDelete: number | null = null;

const templates = {
  newCriterionTemplate: labels.newCriterionTemplate,
  newDescriptorTemplate: labels.newDescriptorTemplate,
  newLevelTemplate: labels.newLevelTemplate,
  criterionHeader: labels.criterionHeader,
  weightHeader: labels.weightHeader,
};

const defaultState: RubricState = {
  levels: labels.defaultLevels ? labels.defaultLevels.map((l: { name: string; score: number }, i: number) => ({ id: `level-${i + 1}`, ...l })) : [],
  criteria: labels.defaultCriteria ? labels.defaultCriteria.map((c: { name: string; weight: number; cells: string[] }, i: number) => ({ id: `criterion-${i + 1}`, ...c })) : [],
};

function loadState(): RubricState {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return defaultState;
  try {
    const parsed = JSON.parse(stored);
    return parsed.levels && parsed.criteria ? parsed : defaultState;
  } catch {
    return defaultState;
  }
}

const state = loadState();

const callbacks = {
  onPersist: () => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  },
  onRender: () => {
    render();
  },
  onRenderWeight: () => {
    renderWeight();
  },
  onRequestDelete: (rowIndex: number) => {
    if (state.criteria.length <= 1) return;
    pendingCriterionDelete = rowIndex;
    if (confirmModal) {
      confirmModal.hidden = false;
      confirmDeleteBtn?.focus();
    }
  }
};

function closeDeleteModal() {
  pendingCriterionDelete = null;
  if (confirmModal) confirmModal.hidden = true;
}

function confirmCriterionDelete() {
  if (pendingCriterionDelete === null) return;
  state.criteria.splice(pendingCriterionDelete, 1);
  callbacks.onPersist();
  closeDeleteModal();
  render();
}

function renderHead() {
  if (!head) return;
  head.innerHTML = '';
  const row = document.createElement('tr');
  row.innerHTML = `<th>${labels.criterionHeader}</th><th>${labels.weightHeader}</th>`;
  state.levels.forEach((level, index) => {
    row.appendChild(createLevelTh({ level, index, state, labels, callbacks }));
  });
  head.appendChild(row);
}

function renderBody() {
  if (!body) return;
  body.innerHTML = '';
  state.criteria.forEach((criterion, rowIndex) => {
    body.appendChild(createCriterionRow({ criterion, rowIndex, state, labels, callbacks }));
  });
}

function renderMobile() {
  if (!mobileBoard) return;
  mobileBoard.innerHTML = '';

  const levelPanel = document.createElement('section');
  levelPanel.className = 'rd-mobile-levels';
  const levelTitle = document.createElement('div');
  levelTitle.className = 'rd-mobile-section-label';
  levelTitle.textContent = labels.levelSectionLabel;
  levelPanel.appendChild(levelTitle);

  state.levels.forEach((level, index) => {
    levelPanel.appendChild(createMobileLevelCard({ level, index, state, labels, callbacks }));
  });
  mobileBoard.appendChild(levelPanel);

  state.criteria.forEach((criterion, rowIndex) => {
    mobileBoard.appendChild(createMobileCriterionCard({ criterion, rowIndex, state, labels, callbacks }));
  });
}

function renderWeight() {
  const total = weightTotal(state.criteria);
  const status = weightStatus(total);
  if (totalEl) totalEl.textContent = `${Math.round(total)}%`;
  if (orbitEl) orbitEl.setAttribute('d', orbitPath(total, status));
  if (statusCard) statusCard.dataset.rdStatus = status;
  if (messageEl) messageEl.textContent = labels[status];
}

function wireHover() {
  root?.querySelectorAll<HTMLTableCellElement>('th[data-rd-col], td[data-rd-col]').forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
      root.querySelectorAll(`[data-rd-col="${cell.dataset.rdCol}"]`).forEach((match) => match.classList.add('is-column-hover'));
    });
    cell.addEventListener('mouseleave', () => {
      root.querySelectorAll('.is-column-hover').forEach((match) => match.classList.remove('is-column-hover'));
    });
  });
}

function render() {
  renderHead();
  renderBody();
  renderMobile();
  renderWeight();
  wireHover();
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

root?.querySelector('[data-rd-add-criterion]')?.addEventListener('click', () => {
  state.criteria.push(createCriterion(state.criteria.length + 1, state.levels.length, templates));
  callbacks.onPersist();
  render();
});

root?.querySelector('[data-rd-add-level]')?.addEventListener('click', () => {
  state.levels.push(createLevel(state.levels.length + 1, templates));
  state.criteria.forEach((criterion) => criterion.cells.push(labels.emptyCell));
  callbacks.onPersist();
  render();
});

cancelDeleteBtn?.addEventListener('click', closeDeleteModal);
confirmDeleteBtn?.addEventListener('click', confirmCriterionDelete);
confirmModal?.addEventListener('click', (event) => {
  if (event.target === confirmModal) closeDeleteModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && confirmModal && !confirmModal.hidden) closeDeleteModal();
});

root?.querySelector('[data-rd-export]')?.addEventListener('click', () => {
  const blob = new Blob([toCsv(state, labels)], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = labels.csvFilename;
  link.click();
  URL.revokeObjectURL(link.href);
});

function writePrintIframe(frame: HTMLIFrameElement, image: string, title: string, alt: string) {
  const frameDoc = frame.contentDocument;
  if (!frameDoc) return;
  frameDoc.open();
  frameDoc.write(`
    <!doctype html>
    <html>
      <head>
        <title>${title}</title>
        <style>
          @page { margin: 12mm; }
          html, body { margin: 0; background: #fff; }
          img { display: block; width: 100%; height: auto; }
        </style>
      </head>
      <body><img src="${image}" alt="${alt}" /></body>
    </html>
  `);
  frameDoc.close();
}

async function printRubricOnly() {
  if (!root) return;
  const { default: html2canvas } = await import('html2canvas');
  root.classList.add('rd-pdf-capture');
  try {
    const canvas = await html2canvas(root, {
      backgroundColor: '#ffffff',
      scale: Math.min(2, window.devicePixelRatio || 1),
      useCORS: true,
    });
    const image = canvas.toDataURL('image/png');
    const frame = document.createElement('iframe');
    frame.className = 'rd-print-frame';
    document.body.appendChild(frame);
    writePrintIframe(frame, image, escapeHtml(labels.pdfDocumentTitle), escapeHtml(labels.pdfImageAlt));
    setTimeout(() => {
      frame.contentWindow?.focus();
      frame.contentWindow?.print();
      setTimeout(() => frame.remove(), 1000);
    }, 100);
  } finally {
    root.classList.remove('rd-pdf-capture');
  }
}

root?.querySelector('[data-rd-print]')?.addEventListener('click', () => {
  printRubricOnly();
});

render();
