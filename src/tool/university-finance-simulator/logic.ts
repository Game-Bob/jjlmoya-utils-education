export interface FinanceScenarioInput {
  annualTuition: number;
  monthlyLivingCost: number;
  studyYears: number;
  studyMonthsPerYear: number;
  scholarshipPerYear: number;
  upfrontContribution: number;
  aprPercent: number;
  repaymentYears: number;
}

export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
  cumulativePaid: number;
}

export interface YearlyPoint {
  year: number;
  remainingBalance: number;
  cumulativePaid: number;
  cumulativeInterest: number;
}

export interface FinanceScenarioResult {
  totalStudyCost: number;
  totalLivingCost: number;
  totalStickerCost: number;
  totalScholarship: number;
  principalBorrowed: number;
  monthlyPayment: number;
  totalPaid: number;
  totalInterest: number;
  payoffMonths: number;
  amortization: AmortizationRow[];
  yearlyPoints: YearlyPoint[];
}

export const DEFAULT_FINANCE_SCENARIO: FinanceScenarioInput = {
  annualTuition: 14500,
  monthlyLivingCost: 850,
  studyYears: 4,
  studyMonthsPerYear: 9,
  scholarshipPerYear: 2500,
  upfrontContribution: 6000,
  aprPercent: 5.1,
  repaymentYears: 10,
};

function roundCurrency(value: number): number {
  return Math.round(value * 100) / 100;
}

function calculatePrincipalBorrowed(input: FinanceScenarioInput) {
  const totalStudyCost = input.annualTuition * input.studyYears;
  const totalLivingCost =
    input.monthlyLivingCost * input.studyMonthsPerYear * input.studyYears;
  const totalStickerCost = totalStudyCost + totalLivingCost;
  const totalScholarship = input.scholarshipPerYear * input.studyYears;
  const principalBorrowed = Math.max(
    0,
    totalStickerCost - totalScholarship - input.upfrontContribution,
  );
  return {
    totalStudyCost,
    totalLivingCost,
    totalStickerCost,
    totalScholarship,
    principalBorrowed,
  };
}

function calculateMonthlyPayment(
  principalBorrowed: number,
  monthlyRate: number,
  repaymentMonths: number,
) {
  if (principalBorrowed === 0) return 0;
  if (monthlyRate === 0) return principalBorrowed / repaymentMonths;
  return (principalBorrowed * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -repaymentMonths));
}

function buildAmortization(
  principalBorrowed: number,
  monthlyRate: number,
  repaymentMonths: number,
  monthlyPayment: number,
) {
  let remainingBalance = principalBorrowed;
  let cumulativePaid = 0;
  let cumulativeInterest = 0;
  const amortization: AmortizationRow[] = [];
  const yearlyPoints: YearlyPoint[] = [
    {
      year: 0,
      remainingBalance: roundCurrency(principalBorrowed),
      cumulativePaid: 0,
      cumulativeInterest: 0,
    },
  ];

  for (let month = 1; month <= repaymentMonths; month += 1) {
    const interest = remainingBalance * monthlyRate;
    const scheduledPrincipal = monthlyPayment - interest;
    const principal = Math.min(remainingBalance, scheduledPrincipal);
    const payment = principal + interest;

    remainingBalance = Math.max(0, remainingBalance - principal);
    cumulativePaid += payment;
    cumulativeInterest += interest;

    amortization.push({
      month,
      payment: roundCurrency(payment),
      principal: roundCurrency(principal),
      interest: roundCurrency(interest),
      remainingBalance: roundCurrency(remainingBalance),
      cumulativePaid: roundCurrency(cumulativePaid),
    });

    if (month % 12 === 0 || month === repaymentMonths) {
      yearlyPoints.push({
        year: Math.ceil(month / 12),
        remainingBalance: roundCurrency(remainingBalance),
        cumulativePaid: roundCurrency(cumulativePaid),
        cumulativeInterest: roundCurrency(cumulativeInterest),
      });
    }
  }

  return { amortization, yearlyPoints, cumulativePaid, cumulativeInterest };
}

export function calculateStudentFinanceScenario(
  input: FinanceScenarioInput,
): FinanceScenarioResult {
  const {
    totalStudyCost,
    totalLivingCost,
    totalStickerCost,
    totalScholarship,
    principalBorrowed,
  } = calculatePrincipalBorrowed(input);
  const monthlyRate = input.aprPercent / 100 / 12;
  const repaymentMonths = Math.max(1, Math.round(input.repaymentYears * 12));
  const monthlyPayment = calculateMonthlyPayment(
    principalBorrowed,
    monthlyRate,
    repaymentMonths,
  );
  const { amortization, yearlyPoints, cumulativePaid, cumulativeInterest } =
    buildAmortization(
      principalBorrowed,
      monthlyRate,
      repaymentMonths,
      monthlyPayment,
    );

  return {
    totalStudyCost: roundCurrency(totalStudyCost),
    totalLivingCost: roundCurrency(totalLivingCost),
    totalStickerCost: roundCurrency(totalStickerCost),
    totalScholarship: roundCurrency(totalScholarship),
    principalBorrowed: roundCurrency(principalBorrowed),
    monthlyPayment: roundCurrency(monthlyPayment),
    totalPaid: roundCurrency(cumulativePaid),
    totalInterest: roundCurrency(cumulativeInterest),
    payoffMonths: repaymentMonths,
    amortization,
    yearlyPoints,
  };
}
