import {
  DEFAULT_FINANCE_SCENARIO,
  calculateStudentFinanceScenario,
} from './logic';
import {
  areaFromValues,
  buildRowMeta,
  convertMoney,
  formatCurrency,
  formatExactCurrency,
  loadPersistedState,
  persistState,
  pointsFromValues,
  profiles,
  smoothPathFromPoints,
} from './scriptHelpers';
import type { Labels, State } from './scriptHelpers';

function setMoney(
  labels: Labels,
  state: State,
  element: Element | null,
  value: number,
  threshold = 1000000,
) {
  if (!element) return;
  const converted = convertMoney(state, value);
  const compact = Math.abs(converted) >= threshold;
  element.textContent = formatCurrency(state, converted, compact);
  element.setAttribute(
    'title',
    `${labels.exactAmount}: ${formatExactCurrency(state, converted)}`,
  );
}

function drawGrid(chartGrid: Element | null) {
  if (!chartGrid) return;
  const rows = [68, 129, 190, 251, 312];
  const cols = [36, 208, 380, 552, 724];
  chartGrid.innerHTML = [
    ...rows.map((y) => `<line x1="36" y1="${y}" x2="724" y2="${y}" />`),
    ...cols.map((x) => `<line x1="${x}" y1="48" x2="${x}" y2="312" />`),
  ].join('');
}

function renderChart(
  chartEls: Record<string, Element | null>,
  result: ReturnType<typeof calculateStudentFinanceScenario>,
) {
  const balanceValues = result.yearlyPoints.map((point) => point.remainingBalance);
  const paidValues = result.yearlyPoints.map((point) => point.cumulativePaid);
  const interestValues = result.yearlyPoints.map((point) => point.cumulativeInterest);
  const maxValue = Math.max(...balanceValues, ...paidValues, ...interestValues, 1);

  if (chartEls.areaBalance) {
    chartEls.areaBalance.setAttribute('d', areaFromValues(balanceValues, maxValue));
  }
  if (chartEls.balance) {
    chartEls.balance.setAttribute(
      'd',
      smoothPathFromPoints(pointsFromValues(balanceValues, maxValue)),
    );
  }
  if (chartEls.paid) {
    chartEls.paid.setAttribute(
      'd',
      smoothPathFromPoints(pointsFromValues(paidValues, maxValue)),
    );
  }
  if (chartEls.interest) {
    chartEls.interest.setAttribute(
      'd',
      smoothPathFromPoints(pointsFromValues(interestValues, maxValue)),
    );
  }

  const crossYear =
    result.totalPaid === 0
      ? result.yearlyPoints[0]
      : result.yearlyPoints.find((point) => point.cumulativePaid >= point.remainingBalance) ??
        result.yearlyPoints[result.yearlyPoints.length - 1];
  const pulseX = 36 + (688 * crossYear.year) / Math.max(1, result.yearlyPoints.length - 1);
  const pulseY = 312 - (244 * crossYear.remainingBalance) / Math.max(maxValue, 1);

  if (chartEls.pulse) {
    chartEls.pulse.setAttribute('cx', String(pulseX));
    chartEls.pulse.setAttribute('cy', String(pulseY));
  }
  if (chartEls.handle) {
    const handleY =
      312 - (244 * balanceValues[balanceValues.length - 1]) / Math.max(maxValue, 1);
    chartEls.handle.setAttribute('cx', '724');
    chartEls.handle.setAttribute('cy', String(handleY));
  }
}

function renderSchedule(
  labels: Labels,
  state: State,
  scheduleBody: Element | null,
  rows: ReturnType<typeof calculateStudentFinanceScenario>['amortization'],
) {
  if (!scheduleBody) return;
  scheduleBody.innerHTML = rows
    .map((row, index) => {
      const { payment, principal, interest, balance, rowMeta } = buildRowMeta(
        labels,
        state,
        row,
      );
      return `
        <tr data-row-month="${row.month}" data-row-index="${index}" data-row-meta="${rowMeta}">
          <td>${row.month}</td>
          <td title="${labels.exactAmount}: ${formatExactCurrency(state, payment)}">${formatCurrency(state, payment, Math.abs(payment) >= 1000000)}</td>
          <td title="${labels.exactAmount}: ${formatExactCurrency(state, principal)}">${formatCurrency(state, principal, Math.abs(principal) >= 1000000)}</td>
          <td title="${labels.exactAmount}: ${formatExactCurrency(state, interest)}">${formatCurrency(state, interest, Math.abs(interest) >= 1000000)}</td>
          <td title="${labels.exactAmount}: ${formatExactCurrency(state, balance)}">${formatCurrency(state, balance, Math.abs(balance) >= 1000000)}</td>
        </tr>`;
    })
    .join('');
}

function syncScheduleFromTimeline(
  state: State,
  chartEls: Record<string, Element | null>,
  scheduleBody: Element | null,
  drawer: Element | null,
  clientX: number,
) {
  if (!chartEls.svg) return;
  const bounds = (chartEls.svg as SVGElement).getBoundingClientRect();
  const xRatio = Math.min(1, Math.max(0, (clientX - bounds.left) / bounds.width));
  const targetMonth = Math.max(1, Math.round(1 + xRatio * (state.repaymentYears * 12 - 1)));
  const scrubX = 36 + xRatio * 688;

  if (chartEls.scrubLine) {
    chartEls.scrubLine.setAttribute('x1', String(scrubX));
    chartEls.scrubLine.setAttribute('x2', String(scrubX));
  }
  if (!scheduleBody || drawer?.hasAttribute('hidden')) return;

  const rows = Array.from(scheduleBody.querySelectorAll('tr'));
  rows.forEach((row) => row.classList.remove('is-active'));
  const targetRow = scheduleBody.querySelector(`[data-row-month="${targetMonth}"]`);
  if (targetRow) {
    targetRow.classList.add('is-active');
    targetRow.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

export function initUniversityFinanceSimulator(labels: Labels): void {
  const root = document.getElementById('ufs-root');
  if (!root) return;

  const state: State = {
    ...DEFAULT_FINANCE_SCENARIO,
    currency: 'USD',
    ...loadPersistedState(),
  };
  const ranges = Array.from(root.querySelectorAll('.ufs-range'));
  const profileButtons = Array.from(root.querySelectorAll('.ufs-profile-btn'));
  const currencySelect = root.querySelector(
    '[data-currency-select]',
  ) as HTMLSelectElement | null;
  const drawer = root.querySelector('[data-schedule-drawer]');
  const toggleButtons = Array.from(
    root.querySelectorAll('[data-action="toggle-schedule"]'),
  );
  const scheduleBody = root.querySelector('[data-schedule-body]');
  const outputs = Array.from(root.querySelectorAll('[data-output]'));
  const statMap = {
    stickerCost: root.querySelector('[data-stat="stickerCost"]'),
    principalBorrowed: root.querySelector('[data-stat="principalBorrowed"]'),
    monthlyPayment: root.querySelector('[data-stat="monthlyPayment"]'),
    totalInterest: root.querySelector('[data-stat="totalInterest"]'),
    totalPaid: root.querySelector('[data-stat="totalPaid"]'),
    averageYearlyCost: root.querySelector('[data-stat="averageYearlyCost"]'),
    payoffTimeline: root.querySelector('[data-stat="payoffTimeline"]'),
    axisEnd: root.querySelector('[data-stat="axisEnd"]'),
    affordability: root.querySelector('[data-stat="affordability"]'),
  };
  const meterMap = {
    scholarshipShare: root.querySelector('[data-meter="scholarshipShare"]'),
    livingShare: root.querySelector('[data-meter="livingShare"]'),
    degreeCostShare: root.querySelector('[data-meter="degreeCostShare"]'),
  };
  const meterLabels = {
    scholarshipShare: root.querySelector('[data-meter-label="scholarshipShare"]'),
    livingShare: root.querySelector('[data-meter-label="livingShare"]'),
    degreeCostShare: root.querySelector('[data-meter-label="degreeCostShare"]'),
  };
  const chartEls = {
    grid: root.querySelector('[data-chart-grid]'),
    areaBalance: root.querySelector('[data-area="balance"]'),
    balance: root.querySelector('[data-line="balance"]'),
    paid: root.querySelector('[data-line="paid"]'),
    interest: root.querySelector('[data-line="interest"]'),
    scrubLine: root.querySelector('[data-scrub-line]'),
    pulse: root.querySelector('[data-pulse]'),
    handle: root.querySelector('[data-handle]'),
    svg: root.querySelector('.ufs-chart'),
  };

  const updateOutputLabels = () => {
    outputs.forEach((output) => {
      const field = output.getAttribute('data-output');
      if (!field) return;
      const value = Number(state[field as keyof State]);
      if (field === 'aprPercent') {
        output.textContent = `${value.toFixed(1)}%`;
        output.removeAttribute('title');
        return;
      }
      if (field === 'studyYears' || field === 'studyMonthsPerYear' || field === 'repaymentYears') {
        output.textContent = String(value);
        output.removeAttribute('title');
        return;
      }
      setMoney(labels, state, output, value);
    });
  };

  const syncRanges = () => {
    ranges.forEach((range) => {
      const field = range.getAttribute('data-field');
      if (field) range.value = String(state[field as keyof State]);
    });
    if (currencySelect) {
      currencySelect.value = state.currency;
    }
  };

  const renderStats = (result: ReturnType<typeof calculateStudentFinanceScenario>) => {
    setMoney(labels, state, statMap.stickerCost, result.totalStickerCost);
    if (result.principalBorrowed > 0) {
      setMoney(labels, state, statMap.principalBorrowed, result.principalBorrowed);
    } else if (statMap.principalBorrowed) {
      statMap.principalBorrowed.textContent = labels.noDebtNeeded;
      statMap.principalBorrowed.removeAttribute('title');
    }
    setMoney(labels, state, statMap.monthlyPayment, result.monthlyPayment, 100000);
    setMoney(labels, state, statMap.totalInterest, result.totalInterest);
    setMoney(labels, state, statMap.totalPaid, result.totalPaid);
    setMoney(
      labels,
      state,
      statMap.averageYearlyCost,
      result.totalStickerCost / Math.max(1, state.studyYears),
    );
    if (statMap.payoffTimeline) {
      statMap.payoffTimeline.textContent = `${result.payoffMonths} ${labels.monthsSuffix}`;
    }
    if (statMap.axisEnd) {
      statMap.axisEnd.textContent = `${Math.ceil(result.payoffMonths / 12)} ${labels.yearsSuffix}`;
    }
    if (statMap.affordability) {
      const monthly = convertMoney(state, result.monthlyPayment);
      const suffix = Math.abs(monthly) >= 100000;
      statMap.affordability.textContent =
        result.principalBorrowed === 0
          ? labels.noDebtNeeded
          : `${labels.affordabilityHint} ${formatCurrency(state, monthly, suffix)}${labels.perMonthSuffix}`;
    }
    root.classList.toggle('is-risky', result.principalBorrowed > 120000);
  };

  const renderMeters = (result: ReturnType<typeof calculateStudentFinanceScenario>) => {
    const sticker = result.totalStickerCost;
    const shares = {
      scholarshipShare: sticker === 0 ? 0 : (result.totalScholarship / sticker) * 100,
      livingShare: sticker === 0 ? 0 : (result.totalLivingCost / sticker) * 100,
      degreeCostShare: sticker === 0 ? 0 : (result.totalStudyCost / sticker) * 100,
    };
    (Object.keys(shares) as Array<keyof typeof shares>).forEach((key) => {
      const value = shares[key];
      const meter = meterMap[key];
      const label = meterLabels[key];
      if (meter) meter.setAttribute('style', `width:${Math.min(100, Math.max(0, value))}%`);
      if (label) label.textContent = `${value.toFixed(0)}%`;
    });
  };

  const render = () => {
    updateOutputLabels();
    const result = calculateStudentFinanceScenario(state);
    renderStats(result);
    renderMeters(result);
    renderChart(chartEls, result);
    renderSchedule(labels, state, scheduleBody, result.amortization);
    persistState(state);
  };

  const handleChartPointer = (clientX: number, clientY: number) => {
    if (!chartEls.svg) return;
    const bounds = (chartEls.svg as SVGElement).getBoundingClientRect();
    const xRatio = Math.min(1, Math.max(0, (clientX - bounds.left) / bounds.width));
    const yRatio = Math.min(1, Math.max(0, (clientY - bounds.top) / bounds.height));
    state.repaymentYears = Math.max(1, Math.min(20, Math.round(1 + xRatio * 19)));
    state.aprPercent = Math.max(0, Math.min(15, Number((15 - yRatio * 15).toFixed(1))));
    syncRanges();
    render();
    syncScheduleFromTimeline(state, chartEls, scheduleBody, drawer, clientX);
  };

  let draggingHandle = false;

  chartEls.handle?.addEventListener('pointerdown', (event) => {
    draggingHandle = true;
    event.preventDefault();
  });
  window.addEventListener('pointermove', (event) => {
    if (draggingHandle) handleChartPointer(event.clientX, event.clientY);
  });
  window.addEventListener('pointerup', () => {
    draggingHandle = false;
  });
  chartEls.svg?.addEventListener('pointermove', (event) => {
    syncScheduleFromTimeline(state, chartEls, scheduleBody, drawer, event.clientX);
    root.classList.add('is-chart-hover');
  });
  chartEls.svg?.addEventListener('pointerleave', () => {
    root.classList.remove('is-chart-hover');
  });

  ranges.forEach((range) => {
    range.addEventListener('input', () => {
      const field = range.getAttribute('data-field');
      if (!field) return;
      state[field as keyof State] = Number(range.value) as never;
      profileButtons.forEach((button) => button.classList.remove('is-active'));
      render();
    });
  });
  profileButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.getAttribute('data-profile') as keyof typeof profiles | null;
      if (!key) return;
      Object.assign(state, profiles[key]);
      profileButtons.forEach((item) => item.classList.toggle('is-active', item === button));
      syncRanges();
      render();
    });
  });
  currencySelect?.addEventListener('change', () => {
    state.currency = currencySelect.value;
    render();
  });
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (!drawer) return;
      const open = drawer.hasAttribute('hidden');
      if (open) {
        drawer.removeAttribute('hidden');
        drawer.setAttribute('aria-hidden', 'false');
      } else {
        drawer.setAttribute('hidden', '');
        drawer.setAttribute('aria-hidden', 'true');
      }
      toggleButtons.forEach((item) => {
        if (item instanceof HTMLButtonElement) {
          item.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
      });
    });
  });

  drawGrid(chartEls.grid);
  syncRanges();
  render();
}
