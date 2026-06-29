import type { EducationToolEntry, ToolLocaleContent } from '../../types';

export type UniversityFinanceSimulatorUI = {
  currency: string;
  usdSymbol: string;
  eurSymbol: string;
  gbpSymbol: string;
  jpySymbol: string;
  rubSymbol: string;
  inrSymbol: string;
  cnySymbol: string;
  krwSymbol: string;
  brlSymbol: string;
  mxnSymbol: string;
  chfSymbol: string;
  usd: string;
  eur: string;
  gbp: string;
  jpy: string;
  rub: string;
  inr: string;
  cny: string;
  krw: string;
  brl: string;
  mxn: string;
  chf: string;
  annualTuition: string;
  monthlyLivingCost: string;
  studyYears: string;
  studyMonthsPerYear: string;
  scholarshipPerYear: string;
  upfrontContribution: string;
  aprPercent: string;
  repaymentYears: string;
  quickProfiles: string;
  commuterProfile: string;
  balancedProfile: string;
  campusProfile: string;
  stickerCost: string;
  borrowedPrincipal: string;
  monthlyPayment: string;
  totalInterest: string;
  projectionTitle: string;
  scheduleTitle: string;
  chartBalance: string;
  chartPaid: string;
  chartInterest: string;
  openSchedule: string;
  closeSchedule: string;
  monthColumn: string;
  paymentColumn: string;
  principalColumn: string;
  interestColumn: string;
  balanceColumn: string;
  timelineLabel: string;
  affordabilityHint: string;
  debtFreeLabel: string;
  scholarshipShare: string;
  livingShare: string;
  degreeCostLabel: string;
  blendedCost: string;
  totalPaid: string;
  averageYearlyCost: string;
  plannerLabel: string;
  resultsLabel: string;
  assumptionsLabel: string;
  scheduleHint: string;
  noDebtNeeded: string;
  exactAmount: string;
  monthWord: string;
  paymentWord: string;
  principalWord: string;
  interestWord: string;
  remainingWord: string;
  perMonthSuffix: string;
  yearsSuffix: string;
  monthsSuffix: string;
  axisStart: string;
  rowMetaSeparator: string;
};

export type UniversityFinanceSimulatorLocaleContent =
  ToolLocaleContent<UniversityFinanceSimulatorUI>;

export const universityFinanceSimulator: EducationToolEntry<UniversityFinanceSimulatorUI> = {
  id: 'university-finance-simulator',
  icons: { bg: 'mdi:school-outline', fg: 'mdi:chart-areaspline' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
  },
};
