import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'university-finance-simulator' as const;
const title = 'University Finance Simulator';
const description =
  'Model the real cost of college, compare scholarship scenarios, and project student-loan payments with a visual payoff timeline and amortization table.';

const faqItems = [
  {
    question: 'What does this simulator include in the total cost?',
    answer:
      'It combines annual tuition, monthly living costs, the number of study years, and the months you expect to pay living expenses each academic year. Then it subtracts scholarships and any upfront contribution before calculating the loan.',
  },
  {
    question: 'How is the monthly student-loan payment calculated?',
    answer:
      'The tool uses the standard amortizing-loan formula. It converts the annual percentage rate into a monthly rate and spreads repayment across the selected number of years.',
  },
  {
    question: 'Can I use it for zero-interest family loans or grants?',
    answer:
      'Yes. Set the APR to 0 to simulate an interest-free repayment plan. You can also increase the scholarship or upfront contribution to reflect grants, savings, or family support.',
  },
  {
    question: 'Why does the borrowed amount differ so much between profiles?',
    answer:
      'Living costs compound quickly over multiple academic years. A commuter plan and a campus-living plan can produce very different debt loads even when tuition stays the same.',
  },
  {
    question: 'Does the payoff date include deferment or income-driven plans?',
    answer:
      'No. This version assumes repayment starts on a normal fixed schedule with equal monthly payments. It is ideal for baseline planning, not for modeling every policy edge case.',
  },
];

const howToItems = [
  {
    name: 'Set your study profile',
    text: 'Use one of the quick profiles or move the sliders manually to reflect your tuition, living costs, and scholarship package.',
  },
  {
    name: 'Adjust the financing assumptions',
    text: 'Choose how much you can pay upfront, then set the APR and repayment years to mirror your likely loan terms.',
  },
  {
    name: 'Read the financial dashboard',
    text: 'The summary tiles show your full sticker cost, borrowed principal, monthly payment, and total interest so you can evaluate affordability at a glance.',
  },
  {
    name: 'Inspect the payoff curve',
    text: 'Use the SVG chart to see how remaining balance, cumulative paid amount, and cumulative interest evolve year by year.',
  },
  {
    name: 'Open the amortization table',
    text: 'Expand the monthly table when you need detailed principal-versus-interest analysis for budgeting or family discussions.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'FinanceApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<UniversityFinanceSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    currency: 'Currency',
    usdSymbol: '$',
    eurSymbol: '€',
    gbpSymbol: '£',
    jpySymbol: '¥',
    rubSymbol: '₽',
    inrSymbol: '₹',
    cnySymbol: '¥',
    krwSymbol: '₩',
    brlSymbol: 'R$',
    mxnSymbol: 'Mex$',
    chfSymbol: '₣',
    usd: 'USD',
    eur: 'EUR',
    gbp: 'GBP',
    jpy: 'JPY',
    rub: 'RUB',
    inr: 'INR',
    cny: 'CNY',
    krw: 'KRW',
    brl: 'BRL',
    mxn: 'MXN',
    chf: 'CHF',
    annualTuition: 'Annual tuition',
    monthlyLivingCost: 'Monthly living cost',
    studyYears: 'Study years',
    studyMonthsPerYear: 'Months of living costs per year',
    scholarshipPerYear: 'Scholarship per year',
    upfrontContribution: 'Upfront contribution',
    aprPercent: 'APR',
    repaymentYears: 'Repayment years',
    quickProfiles: 'Quick profiles',
    commuterProfile: 'Commuter',
    balancedProfile: 'Balanced',
    campusProfile: 'Campus living',
    stickerCost: 'Full study cost',
    borrowedPrincipal: 'Borrowed principal',
    monthlyPayment: 'Estimated monthly payment',
    totalInterest: 'Total interest',
    projectionTitle: 'Debt projection',
    scheduleTitle: 'Monthly amortization schedule',
    chartBalance: 'Remaining balance',
    chartPaid: 'Total paid',
    chartInterest: 'Interest paid',
    openSchedule: 'Open full schedule',
    closeSchedule: 'Hide full schedule',
    monthColumn: 'Month',
    paymentColumn: 'Payment',
    principalColumn: 'Principal',
    interestColumn: 'Interest',
    balanceColumn: 'Balance',
    timelineLabel: 'Debt-free timeline',
    affordabilityHint:
      'Keep your projected monthly payment in line with your likely first-year take-home pay, not only your current student budget.',
    debtFreeLabel: 'Debt-free after',
    scholarshipShare: 'Scholarship coverage',
    livingShare: 'Living-cost share',
    degreeCostLabel: 'Tuition share',
    blendedCost: 'Average yearly cost',
    totalPaid: 'Total repaid',
    averageYearlyCost: 'Average cost per year',
    plannerLabel: 'Cost planner',
    resultsLabel: 'Funding outlook',
    assumptionsLabel: 'Loan assumptions',
    scheduleHint:
      'Month-by-month detail of how each payment is split between principal and interest.',
    noDebtNeeded: 'No debt needed with the current setup',
    exactAmount: 'Exact amount',
    monthWord: 'Month',
    paymentWord: 'payment',
    principalWord: 'principal',
    interestWord: 'interest',
    remainingWord: 'remaining',
    perMonthSuffix: '/mo.',
    yearsSuffix: 'years',
    monthsSuffix: 'months',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Plan the Real Cost of College Before You Borrow', level: 2 },
    {
      type: 'summary',
      title: 'What this college cost calculator is useful for',
      items: [
        'Estimate the full cost of a degree, not just the advertised tuition figure.',
        'Compare schools, housing choices, and scholarship packages on the same debt baseline.',
        'See whether a repayment plan feels manageable before you commit to borrowing.',
      ],
    },
    {
      type: 'paragraph',
      html: 'A university brochure usually highlights one number: tuition. Real life is messier. You may also pay for <strong>housing, food, transport, books, insurance, and interest on borrowed money</strong>. That is why a useful student loan simulator should not stop at a sticker price. It should help you answer the harder question: <em>what will this decision cost me across the full degree, how much debt will remain after aid, and what kind of repayment pressure will I face after graduation?</em>',
    },
    { type: 'title', text: 'Decisions This Simulator Helps You Make', level: 3 },
    {
      type: 'list',
      items: [
        'Whether a scholarship package truly changes the debt outcome or only softens the marketing headline.',
        'Whether living on campus, commuting, or sharing accommodation creates the healthiest long-term tradeoff.',
        'Whether a longer repayment term is worth the lower monthly payment once total interest is taken into account.',
        'Whether the program still looks viable after you include living costs, not only tuition.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Use this before you say yes to a school',
      html: '<ul><li>Compare two or three offers using the same living-cost assumptions.</li><li>Test a "best case" and a "more realistic" scholarship scenario.</li><li>Check whether the monthly payment still feels acceptable if borrowing rises or repayment takes longer.</li></ul>',
    },
    { type: 'title', text: 'How to Read the Results Without Fooling Yourself', level: 3 },
    {
      type: 'table',
      headers: ['Metric', 'What it means', 'Why it matters'],
      rows: [
        ['Full study cost', 'Tuition plus living costs across the full degree horizon', 'This is the real budget you are trying to finance, not the simplified brochure number'],
        ['Borrowed principal', 'Amount still uncovered after scholarships and upfront cash', 'This is the debt that follows you into repayment and deserves the most attention'],
        ['Estimated monthly payment', 'Fixed repayment amount based on APR and repayment length', 'This is the best quick proxy for post-graduation financial pressure'],
        ['Total interest', 'Extra cost paid on top of the amount borrowed', 'This helps you see whether a lower monthly payment is quietly becoming a much more expensive loan'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'core inputs to stress-test first' },
        { value: '2', label: 'scenarios worth comparing minimum' },
        { value: '1', label: 'monthly payment number to sanity-check' },
        { value: '0', label: 'reliance on tuition alone you should accept' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Shorter term',
          description: 'Better when your future cash flow is likely to be strong enough to absorb a higher payment.',
          highlight: true,
          points: [
            'Higher monthly payment',
            'Lower total interest',
            'Debt disappears faster',
          ],
        },
        {
          title: 'Longer term',
          description: 'Better when you need breathing room early, but only if you understand the extra long-term cost.',
          points: [
            'Lower monthly payment',
            'Higher total interest',
            'More flexibility but more long-term cost',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Useful stress test:</strong> lower the scholarship, raise rent slightly, and extend repayment by a few years. If the plan only works in the most optimistic version, it is not a robust plan yet.',
    },
    { type: 'title', text: 'A Practical Way to Compare Two Schools', level: 3 },
    {
      type: 'list',
      items: [
        'Enter the same living-cost assumptions for both schools first so you are not comparing different realities.',
        'Then update only the variables that truly differ: tuition, scholarship, and likely housing choice.',
        'Focus on borrowed principal and monthly payment before you focus on prestige or branding.',
        'If one option only wins because you assume unusually cheap living costs, treat that as a warning flag.',
      ],
    },
    {
      type: 'card',
      title: 'What families often miss',
      html: 'A school that looks cheaper on tuition can still create <strong>more debt overall</strong> if living costs are structurally higher or scholarship support is less stable year to year.',
    },
    { type: 'title', text: 'Limits of Any University Cost Projection', level: 3 },
    {
      type: 'proscons',
      title: 'Strengths and limits',
      items: [
        {
          pro: 'Fast baseline estimate for comparing multiple study options',
          con: 'Does not model deferment, grace periods, or income-driven repayment',
        },
        {
          pro: 'Makes living costs visible instead of hiding them behind tuition',
          con: 'Assumes a fixed APR and fixed monthly payment',
        },
        {
          pro: 'Shows debt trajectory visually instead of only reporting one headline total',
          con: 'Does not account for taxes, inflation, or future salary changes',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'APR',
          definition: 'Annual Percentage Rate. It represents the yearly borrowing cost and is converted into a monthly rate for repayment calculations.',
        },
        {
          term: 'Principal',
          definition: 'The amount actually borrowed after scholarships and upfront payments reduce the total cost.',
        },
        {
          term: 'Amortization',
          definition: 'The month-by-month process of paying down a loan through regular payments that cover interest first and principal over time.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Best next step',
      html: 'Use this simulator to narrow your shortlist, then validate the winner against the actual financial aid letter, housing reality, and expected early-career income for your field before you make the final commitment.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
