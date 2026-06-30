import type { RubricState } from './logic';
import type { RubricMatrixDesignerUI } from './entry';

export interface RendererCallbacks {
  onPersist: () => void;
  onRender: () => void;
  onRenderWeight: () => void;
  onRequestDelete: (rowIndex: number) => void;
}

export interface EditableOptions {
  text: string;
  onInput: (value: string) => void;
  placeholder: string;
  callbacks: RendererCallbacks;
  extraClass?: string;
}

export interface LevelOptions {
  level: { name: string; score: number };
  index: number;
  state: RubricState;
  labels: RubricMatrixDesignerUI;
  callbacks: RendererCallbacks;
}

export interface CriterionOptions {
  criterion: { name: string; weight: number; cells: string[] };
  rowIndex: number;
  state: RubricState;
  labels: RubricMatrixDesignerUI;
  callbacks: RendererCallbacks;
}

export function createEditable(opts: EditableOptions) {
  const div = document.createElement('div');
  div.className = `rd-editable ${opts.extraClass || ''}`.trim();
  div.contentEditable = 'true';
  div.textContent = opts.text || opts.placeholder;
  div.spellcheck = true;
  div.addEventListener('input', () => {
    opts.onInput(div.textContent || '');
    opts.callbacks.onPersist();
    opts.callbacks.onRenderWeight();
  });
  return div;
}

function createScoreInput(level: { score: number }, callbacks: RendererCallbacks) {
  const score = document.createElement('input');
  score.type = 'number';
  score.min = '0';
  score.step = '0.5';
  score.value = String(level.score);
  score.addEventListener('input', () => {
    level.score = Number(score.value);
    callbacks.onPersist();
  });
  return score;
}

function createRemoveLevelButton(opts: LevelOptions) {
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'rd-remove-level';
  remove.title = opts.labels.removeLevel;
  remove.setAttribute('aria-label', opts.labels.removeLevel);
  remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm-2 6h10l-.7 11H7.7L7 9Zm3 2v7h2v-7h-2Zm4 0v7h2v-7h-2Z"/></svg>';
  remove.addEventListener('click', () => {
    if (opts.state.levels.length <= 2) return;
    opts.state.levels.splice(opts.index, 1);
    opts.state.criteria.forEach((criterion) => criterion.cells.splice(opts.index, 1));
    opts.callbacks.onPersist();
    opts.callbacks.onRender();
  });
  return remove;
}

export function createLevelTh(opts: LevelOptions) {
  const th = document.createElement('th');
  th.dataset.rdCol = String(opts.index + 2);
  const wrap = document.createElement('div');
  wrap.className = 'rd-level-head';
  
  wrap.appendChild(
    createEditable({
      text: opts.level.name,
      onInput: (val) => { opts.level.name = val; },
      placeholder: opts.labels.emptyCell,
      callbacks: opts.callbacks
    })
  );

  wrap.append(createScoreInput(opts.level, opts.callbacks), createRemoveLevelButton(opts));
  th.appendChild(wrap);
  return th;
}

function createRemoveRowButton(opts: CriterionOptions) {
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'rd-remove-row';
  remove.title = opts.labels.removeCriterion;
  remove.setAttribute('aria-label', opts.labels.removeCriterion);
  remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm-2 6h10l-.7 11H7.7L7 9Zm3 2v7h2v-7h-2Zm4 0v7h2v-7h-2Z"/></svg>';
  remove.addEventListener('click', () => {
    opts.callbacks.onRequestDelete(opts.rowIndex);
  });
  return remove;
}

function createWeightInput(criterion: { weight: number }, callbacks: RendererCallbacks) {
  const weight = document.createElement('input');
  weight.type = 'number';
  weight.min = '0';
  weight.max = '100';
  weight.step = '1';
  weight.value = String(criterion.weight);
  weight.addEventListener('input', () => {
    criterion.weight = Number(weight.value);
    callbacks.onPersist();
    callbacks.onRenderWeight();
  });
  return weight;
}

function createCriterionNameCell(opts: CriterionOptions) {
  const cellWrap = document.createElement('div');
  cellWrap.className = 'rd-criterion-cell';
  cellWrap.append(
    createEditable({
      text: opts.criterion.name,
      onInput: (val) => { opts.criterion.name = val; },
      placeholder: opts.labels.emptyCell,
      callbacks: opts.callbacks,
      extraClass: 'rd-criterion-name'
    }),
    createRemoveRowButton(opts)
  );
  return cellWrap;
}

function appendCriterionColumns(tr: HTMLTableRowElement, opts: CriterionOptions) {
  opts.state.levels.forEach((_, colIndex) => {
    const td = document.createElement('td');
    td.dataset.rdCol = String(colIndex + 2);
    td.appendChild(
      createEditable({
        text: opts.criterion.cells[colIndex] || '',
        onInput: (val) => { opts.criterion.cells[colIndex] = val; },
        placeholder: opts.labels.emptyCell,
        callbacks: opts.callbacks
      })
    );
    tr.appendChild(td);
  });
}

export function createCriterionRow(opts: CriterionOptions) {
  const tr = document.createElement('tr');
  tr.dataset.rdRow = String(opts.rowIndex);
  const nameTd = document.createElement('td');
  nameTd.appendChild(createCriterionNameCell(opts));
  tr.appendChild(nameTd);

  const weightTd = document.createElement('td');
  weightTd.appendChild(createWeightInput(opts.criterion, opts.callbacks));
  tr.appendChild(weightTd);

  appendCriterionColumns(tr, opts);
  return tr;
}

export function createMobileLevelCard(opts: LevelOptions) {
  const card = document.createElement('div');
  card.className = 'rd-mobile-level';
  const badge = document.createElement('span');
  badge.className = 'rd-mobile-score-badge';
  badge.textContent = `${opts.labels.levelBadgePrefix}${opts.index + 1}`;
  
  card.appendChild(
    createEditable({
      text: opts.level.name,
      onInput: (val) => { opts.level.name = val; },
      placeholder: opts.labels.emptyCell,
      callbacks: opts.callbacks,
      extraClass: 'rd-mobile-level-name'
    })
  );

  card.prepend(badge);
  card.append(createScoreInput(opts.level, opts.callbacks), createRemoveLevelButton(opts));
  return card;
}

function createMobileIdentity(opts: CriterionOptions) {
  const identity = document.createElement('div');
  identity.className = 'rd-mobile-criterion-identity';
  const number = document.createElement('span');
  number.textContent = String(opts.rowIndex + 1).padStart(2, '0');
  identity.append(
    number,
    createEditable({
      text: opts.criterion.name,
      onInput: (val) => { opts.criterion.name = val; },
      placeholder: opts.labels.emptyCell,
      callbacks: opts.callbacks,
      extraClass: 'rd-criterion-name'
    })
  );
  return identity;
}

function createMobileRemoveBtn(opts: CriterionOptions) {
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.className = 'rd-mobile-remove';
  remove.title = opts.labels.removeCriterion;
  remove.setAttribute('aria-label', opts.labels.removeCriterion);
  remove.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6l1 2h4v2H4V5h4l1-2Zm-2 6h10l-.7 11H7.7L7 9Zm3 2v7h2v-7h-2Zm4 0v7h2v-7h-2Z"/></svg>';
  remove.addEventListener('click', () => {
    opts.callbacks.onRequestDelete(opts.rowIndex);
  });
  return remove;
}

function createMobileCardTop(opts: CriterionOptions) {
  const top = document.createElement('div');
  top.className = 'rd-mobile-card-top';
  top.appendChild(createMobileIdentity(opts));

  const weightWrap = document.createElement('label');
  weightWrap.className = 'rd-mobile-weight';
  weightWrap.innerHTML = `<span>${opts.labels.weightHeader}</span>`;
  weightWrap.appendChild(createWeightInput(opts.criterion, opts.callbacks));
  top.appendChild(weightWrap);

  top.appendChild(createMobileRemoveBtn(opts));
  return top;
}

export function createMobileCriterionCard(opts: CriterionOptions) {
  const card = document.createElement('article');
  card.className = 'rd-mobile-card';
  card.appendChild(createMobileCardTop(opts));

  opts.state.levels.forEach((level, colIndex) => {
    const descriptor = document.createElement('label');
    descriptor.className = 'rd-mobile-descriptor';
    const head = document.createElement('span');
    head.className = 'rd-mobile-descriptor-head';
    head.innerHTML = `<b>${level.score}</b><em>${level.name}</em>`;
    descriptor.append(
      head,
      createEditable({
        text: opts.criterion.cells[colIndex] || '',
        onInput: (val) => { opts.criterion.cells[colIndex] = val; },
        placeholder: opts.labels.emptyCell,
        callbacks: opts.callbacks
      })
    );
    card.appendChild(descriptor);
  });

  return card;
}

export function orbitPath(total: number, status: 'balanced' | 'under' | 'over'): string {
  if (status === 'balanced') {
    return 'M60 14 C85 14 106 35 106 60 C106 85 85 106 60 106 C35 106 14 85 14 60 C14 35 35 14 60 14';
  }
  if (status === 'under') {
    const gap = Math.min(30, Math.max(8, 100 - total));
    return `M${60 - gap} 16 C35 22 16 38 14 60 C12 83 33 103 57 106 M${68 + gap / 3} 105 C91 101 106 83 106 60 C106 35 85 14 60 14`;
  }
  const pressure = Math.min(24, Math.max(8, total - 100));
  return `M60 ${14 - pressure / 4} C${86 + pressure} ${10 + pressure / 3} ${108 + pressure / 2} ${34 - pressure / 4} 106 60 C${109 + pressure / 2} ${87 + pressure / 3} ${84 - pressure / 5} ${110 + pressure / 2} 60 106 C${34 - pressure} ${109 - pressure / 5} ${11 - pressure / 2} ${84 + pressure / 4} 14 60 C${10 - pressure / 3} ${34 - pressure / 2} ${36 + pressure / 4} ${12 - pressure / 4} 60 ${14 - pressure / 4}`;
}
