import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'university-finance-simulator' as const;
const title = '大学学费与债务模拟器';
const description =
  '模拟大学教育的真实成本，对比不同奖学金方案，并通过可视化的还款时间线和等额本息摊还表来预测学生贷款的还款情况。';

const faqItems = [
  {
    question: '此模拟器在计算总成本时包含哪些项目？',
    answer:
      '它结合了每年的学费、每月的生活费、就读年限以及您预计每个学年支付生活费的月数。然后在计算贷款前，减去奖学金和任何首期出资。',
  },
  {
    question: '毎月的学生贷款还款额是如何计算的？',
    answer:
      '该工具使用标准的等额本息贷款摊还公式。它将年利率转换为月利率，并将还款分摊到选定的还款年限中。',
  },
  {
    question: '我能用它来模拟免息的家庭贷款或助学金吗？',
    answer:
      '可以。将年利率设置为 0 即可模拟免息还款计划。您还可以增加奖学金或首期出资额，以反映助学金、个人储蓄或家庭资金支持。',
  },
  {
    question: '为什么不同场景下的贷款额度差异如此之大？',
    answer:
      '在多个学年里，生活成本累积得非常快。即使学费完全相同，走读计划和在校住宿计划也可能产生截然不同的债务总额。',
  },
  {
    question: '还清债务的日期是否包含宽限期或基于收入的还款计划？',
    answer:
      '不包含。此版本假设还款按照正常的固定计划开始，每月还款额相等。它适合作为基准规划，而非建模每项政策的特殊边际情况。',
  },
];

const howToItems = [
  {
    name: '设置您的就读画像',
    text: '选择一个预设的画像，或手动移动滑块，以反映您的学费、生活费和奖学金方案。',
  },
  {
    name: '调整贷款融资假设',
    text: '选择您可以预先支付的金额，然后设置年利率和还款年限，以匹配您可能获得的贷款条款。',
  },
  {
    name: '阅读财务仪表盘',
    text: '摘要卡片一目了然地显示了您的总账面成本、借入本金、估计的每月还款额以及利息总额，以评估负担能力。',
  },
  {
    name: '查看还款轨迹曲线',
    text: '使用图表直观了解剩余贷款余额、已支付总额和累计利息如何逐年演变。',
  },
  {
    name: '打开还款摊还表',
    text: '当您需要详细的本金与利息分析以进行预算编制或家庭讨论时，展开按月的还款明细表。',
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
    currency: '货币',
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
    annualTuition: '年学费',
    monthlyLivingCost: '月生活费',
    studyYears: '就读年限',
    studyMonthsPerYear: '每年支付生活费的月数',
    scholarshipPerYear: '每年奖学金',
    upfrontContribution: '首期出资',
    aprPercent: '年利率',
    repaymentYears: '还款年限',
    quickProfiles: '快速画像',
    commuterProfile: '走读/住家',
    balancedProfile: '平衡',
    campusProfile: '校内住宿',
    stickerCost: '总学业成本',
    borrowedPrincipal: '借入本金',
    monthlyPayment: '预供每月还款',
    totalInterest: '利息总额',
    projectionTitle: '债务预测',
    scheduleTitle: '每月还款摊还表',
    chartBalance: '剩余本金',
    chartPaid: '累计已付',
    chartInterest: '已付利息',
    openSchedule: '展开完整表格',
    closeSchedule: '隐藏完整表格',
    monthColumn: '期数',
    paymentColumn: '单期还款',
    principalColumn: '本金',
    interestColumn: '利息',
    balanceColumn: '余额',
    timelineLabel: '清偿债务时间线',
    affordabilityHint:
      '请确保预测的每月还款额与您毕业后第一年可能拿到的税后收入相匹配，而不仅仅符合您眼下的学生预算。',
    debtFreeLabel: '债务清偿用时',
    scholarshipShare: '奖学金覆盖率',
    livingShare: '生活费占比',
    degreeCostLabel: '学费占比',
    blendedCost: '平均年成本',
    totalPaid: '累计还款总额',
    averageYearlyCost: '年均成本',
    plannerLabel: '成本规划器',
    resultsLabel: '资金前景',
    assumptionsLabel: '贷款假设条件',
    scheduleHint:
      '逐月列出每笔还款中本金和利息的具体构成比例。',
    noDebtNeeded: '当前配置下无需借入债务',
    exactAmount: '准确金额',
    monthWord: '月',
    paymentWord: '还款',
    principalWord: '本金',
    interestWord: '利息',
    remainingWord: '剩余',
    perMonthSuffix: '/月',
    yearsSuffix: '年',
    monthsSuffix: '个月',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: '借贷前合理规划大学的真实成本', level: 2 },
    {
      type: 'summary',
      title: '此大学成本计算器有什么用',
      items: [
        '估算完成学业的全部花费，而不仅仅是官方宣传的学费数字。',
        '在相同的债务基准线上，对比不同学校、住宿选择以及奖学金计划。',
        '在承诺借贷之前，看还款计划是否在您的可承受范围内。',
      ],
    },
    {
      type: 'paragraph',
      html: '大学宣传册上通常只强调一个数字：学费。现实生活要复杂得多。您还需要为住宿、伙食、交通、教材、保险以及借入资金的利息买单。这就是为什么实用的学生贷款模拟器不能止步于表面标签价格。它应该帮助您回答更难的问题：<em>这个决定在整个学位期间究竟会让我付出多少代价，在获得资助后还会留下多少债务，以及毕业后我将面临怎样的还款压力？</em>',
    },
    { type: 'title', text: '此模拟器帮助您做出的决策', level: 3 },
    {
      type: 'list',
      items: [
        '奖学金计划是真正改变了债务结果，还是仅仅美化了招生的宣传噱头。',
        '住在校内、往返通勤还是合租，能带来最健康的长期利弊权衡。',
        '在考虑总利息成本的情况下，为了更低的每月还款额而选择更长的还款期限是否值得。',
        '在将生活费纳入考量后，该进修项目是否依然具有可行性。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '在决定去某所学校前使用此工具',
      html: '<ul><li>使用相同的生活费假设来对比两到三个录取通知书。</li><li>测试一个"最佳情况"和"更符合现实"的奖学金场景。</li><li>检查如果借贷额度上升或还款时间延长，每月还款额是否依然在可接受范围内。</li></ul>',
    },
    { type: 'title', text: '如何客观地解读结果，不自欺欺人', level: 3 },
    {
      type: 'table',
      headers: ['指标', '含义', '为什么重要'],
      rows: [
        ['总学业成本', '整个学位周期内的学费加上生活费总和', '这是您试图资助的真实预算，而非宣传册上的简化数字'],
        ['借入本金', '奖学金和首期现金支付后仍未覆盖的金额', '这是毕业后如影随形的债务，最值得重点关注'],
        ['预估每月还款', '基于年利率和还款期限计算出的固定还款额', '这是衡量毕业后财务压力最直观的快速指标'],
        ['利息总额', '在借款本金之外支付的额外成本', '帮助您看清较低的月供是否正在悄然演变成代价高昂的贷款'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: '个首先需要进行压力测试的核心输入' },
        { value: '2', label: '个最起码值得拿来进行对比的场景' },
        { value: '1', label: '个用于进行合理性检查的每月还款数字' },
        { value: '0', label: '盲目只看学费的依赖度，这是您应该坚持的底线' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '较短还款期',
          description: '当您未来的现金流足够强劲、能承受更高的月供时更佳。',
          highlight: true,
          points: [
            '较高的每月还款',
            '较低的利息总额',
            '债务清除速度更快',
          ],
        },
        {
          title: '较长还款期',
          description: '当您前期需要财务喘息空间时更佳，但前提是您必须清楚了解额外的长期利息成本。',
          points: [
            '较低的每月还款',
            '较高的利息总额',
            '灵活性更强，但长期成本更高',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>实用的压力测试：</strong>调低奖学金，略微调高房租，并将还款期延长几年。如果这个计划只有在最乐观的版本下才行得通，那么它还不是一个稳健的计划。',
    },
    { type: 'title', text: '对比两所学校的实用方法', level: 3 },
    {
      type: 'list',
      items: [
        '首先为两所学校输入相同的生活费假设，这样您就不会在对比两种不同的生活水平。',
        '然后仅更新真正不同的变量：学费、奖学金和可能的住宿选择。',
        '在过多关注声誉或品牌之前，先聚焦于借款本金和每月还款额。',
        '如果某个选项之所以胜出是因为您假设了异常低廉的生活成本，请将其视为警示信号。',
      ],
    },
    {
      type: 'card',
      title: '家庭常常忽略的事情',
      html: '一所学费看起来更便宜的学校，如果当地的生活成本结构性偏高，或者奖学金支持逐年不够稳定，最终依然可能导致 <strong>更多的债务总额</strong>。',
    },
    { type: 'title', text: '大学成本预测的局限性', level: 3 },
    {
      type: 'proscons',
      title: '优势与局限性',
      items: [
        {
          pro: '快速估算基准，便于对比多个就读选项',
          con: '未建模还款宽限期、延迟还款或基于收入的还款计划',
        },
        {
          pro: '让生活成本显性化，而不是隐藏在学费背后',
          con: '假设年利率和每月还款额固定不变',
        },
        {
          pro: '直观展示债务递减轨迹，而非仅报告一个总额',
          con: '未考虑税收、通货膨胀或未来的薪资变动',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: '年利率',
          definition: '代表年度借款成本，还款计算时会转换为月利率。',
        },
        {
          term: '本金',
          definition: '在奖学金和首期出资冲抵总成本后，实际需要借入的金额。',
        },
        {
          term: '摊还',
          definition: '逐月偿还贷款的过程，通过定期还款先支付利息，并随着时间推移逐渐偿还本金。',
        },
      ],
    },
    {
      type: 'message',
      title: '推荐的下一步操作',
      html: '使用此模拟器缩小您的首选范围，然后在做出最终决定前，结合实际的财务资助信、住宿租金现状以及您所处行业的预期起薪收入来校验最终选择的合理性。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
