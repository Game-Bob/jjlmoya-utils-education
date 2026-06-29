import { DEFAULT_FINANCE_SCENARIO } from './logic';
import type { UniversityFinanceSimulatorUI } from './entry';

export type Labels = UniversityFinanceSimulatorUI;
export type State = typeof DEFAULT_FINANCE_SCENARIO & { currency: string };
type PersistedState = Partial<State>;

type CurrencyMeta = {
  locale: string;
  rate: number;
  digits: number;
  compactDigits: number;
};

const currencyMeta: Record<string, CurrencyMeta> = {
  USD: { locale: 'en-US', rate: 1, digits: 0, compactDigits: 1 },
  EUR: { locale: 'de-DE', rate: 0.92, digits: 0, compactDigits: 1 },
  GBP: { locale: 'en-GB', rate: 0.79, digits: 0, compactDigits: 1 },
  JPY: { locale: 'ja-JP', rate: 157, digits: 0, compactDigits: 1 },
  RUB: { locale: 'ru-RU', rate: 78, digits: 0, compactDigits: 1 },
  INR: { locale: 'en-IN', rate: 83, digits: 0, compactDigits: 1 },
  CNY: { locale: 'zh-CN', rate: 7.26, digits: 0, compactDigits: 1 },
  KRW: { locale: 'ko-KR', rate: 1380, digits: 0, compactDigits: 1 },
  BRL: { locale: 'pt-BR', rate: 5.42, digits: 0, compactDigits: 1 },
  MXN: { locale: 'es-MX', rate: 18.1, digits: 0, compactDigits: 1 },
  CHF: { locale: 'de-CH', rate: 0.81, digits: 0, compactDigits: 1 },
};

export const UNIVERSITY_FINANCE_STORAGE_KEY = 'tool:university-finance-simulator:state';

export const profiles = {
  commuter: {
    annualTuition: 9800,
    monthlyLivingCost: 380,
    studyYears: 4,
    studyMonthsPerYear: 9,
    scholarshipPerYear: 3200,
    upfrontContribution: 8000,
    aprPercent: 4.2,
    repaymentYears: 8,
  },
  balanced: DEFAULT_FINANCE_SCENARIO,
  campus: {
    annualTuition: 22000,
    monthlyLivingCost: 1450,
    studyYears: 4,
    studyMonthsPerYear: 10,
    scholarshipPerYear: 2500,
    upfrontContribution: 3500,
    aprPercent: 6.4,
    repaymentYears: 12,
  },
} as const;

export function isSupportedCurrency(currency: string): boolean {
  return currency in currencyMeta;
}

function clampNumber(value: unknown, min: number, max: number): number | null {
  if (typeof value !== 'number' || Number.isNaN(value)) return null;
  return Math.min(max, Math.max(min, value));
}

function sanitizePersistedNumber(
  value: unknown,
  min: number,
  max: number,
): number | undefined {
  return clampNumber(value, min, max) ?? undefined;
}

function sanitizePersistedCurrency(value: unknown): string | undefined {
  return typeof value === 'string' && isSupportedCurrency(value) ? value : undefined;
}

export function loadPersistedState(): Partial<State> {
  try {
    const raw = window.localStorage.getItem(UNIVERSITY_FINANCE_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as PersistedState;
    return {
      annualTuition: sanitizePersistedNumber(parsed.annualTuition, 2000, 40000),
      monthlyLivingCost: sanitizePersistedNumber(parsed.monthlyLivingCost, 150, 2500),
      studyYears: sanitizePersistedNumber(parsed.studyYears, 1, 8),
      studyMonthsPerYear: sanitizePersistedNumber(parsed.studyMonthsPerYear, 6, 12),
      scholarshipPerYear: sanitizePersistedNumber(parsed.scholarshipPerYear, 0, 20000),
      upfrontContribution: sanitizePersistedNumber(parsed.upfrontContribution, 0, 50000),
      aprPercent: sanitizePersistedNumber(parsed.aprPercent, 0, 15),
      repaymentYears: sanitizePersistedNumber(parsed.repaymentYears, 1, 20),
      currency: sanitizePersistedCurrency(parsed.currency),
    };
  } catch {
    return {};
  }
}

export function persistState(state: State): void {
  window.localStorage.setItem(UNIVERSITY_FINANCE_STORAGE_KEY, JSON.stringify(state));
}

export function convertMoney(state: State, value: number): number {
  return value * currencyMeta[state.currency].rate;
}

export function formatCurrency(state: State, value: number, compact = false): string {
  const meta = currencyMeta[state.currency];
  return new Intl.NumberFormat(meta.locale, {
    style: 'currency',
    currency: state.currency,
    currencyDisplay: 'narrowSymbol',
    notation: compact ? 'compact' : 'standard',
    maximumFractionDigits: compact ? meta.compactDigits : meta.digits,
  }).format(value);
}

export function formatExactCurrency(state: State, value: number): string {
  const meta = currencyMeta[state.currency];
  return new Intl.NumberFormat(meta.locale, {
    style: 'currency',
    currency: state.currency,
    currencyDisplay: 'symbol',
    maximumFractionDigits: meta.digits,
  }).format(value);
}

export function pointsFromValues(values: number[], maxValue: number) {
  return values.map((value, index) => ({
    x: 36 + (688 * index) / Math.max(1, values.length - 1),
    y: 312 - (244 * value) / Math.max(maxValue, 1),
  }));
}

export function smoothPathFromPoints(points: Array<{ x: number; y: number }>): string {
  if (points.length === 0) return '';
  if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
  const segments = [`M ${points[0].x} ${points[0].y}`];
  for (let index = 0; index < points.length - 1; index += 1) {
    const current = points[index];
    const next = points[index + 1];
    const midX = (current.x + next.x) / 2;
    segments.push(`Q ${midX} ${current.y} ${next.x} ${next.y}`);
  }
  return segments.join(' ');
}

export function areaFromValues(values: number[], maxValue: number): string {
  const smooth = smoothPathFromPoints(pointsFromValues(values, maxValue));
  return `${smooth} L 724 312 L 36 312 Z`;
}

export function buildRowMeta(
  labels: Labels,
  state: State,
  row: {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    remainingBalance: number;
  },
) {
  const payment = convertMoney(state, row.payment);
  const principal = convertMoney(state, row.principal);
  const interest = convertMoney(state, row.interest);
  const balance = convertMoney(state, row.remainingBalance);
  return {
    payment,
    principal,
    interest,
    balance,
    rowMeta: [
      `${labels.monthWord} ${row.month}`,
      `${formatExactCurrency(state, payment)} ${labels.paymentWord}`,
      `${formatExactCurrency(state, principal)} ${labels.principalWord}`,
      `${formatExactCurrency(state, interest)} ${labels.interestWord}`,
      `${formatExactCurrency(state, balance)} ${labels.remainingWord}`,
    ].join(` ${labels.rowMetaSeparator} `),
  };
}
