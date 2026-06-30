import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'reading-time-note-density-planner' as const;
const title = '阅读时间与笔记密度规划器';
const description = '估算包含记笔记时间在内的学术阅读总时长，并将学习任务分解为实用的单次学习阶段。';

const faqItems = [
  { question: '为什么记笔记会如此显著地增加阅读时间？', answer: '学术阅读很少只是扫视文字。每一个划线、总结、边注或记忆卡片的制作都会增加处理时间。单独规划笔记密度，可以防止因对每小时阅读页数过于乐观而导致临近截止日期时熬夜。' },
  { question: '什么是合理的"每小时阅读页数"估算？', answer: '对于高密度的专业教材，每小时 15 到 25 页是比较常见的速度。对于较轻量的内容，每小时 30 到 50 页是比较现实的。如果阅读材料包含公式、原始文献或生疏的专业词汇，建议先按较低的速度估算，并在完成第一次计时学习后进行调整。' },
  { question: '我该如何选择笔记密度？', answer: '如果是简单的划线或制作简短大纲，建议每页预留 1 到 2 分钟；如果是制作康奈尔笔记，建议每页预留 3 到 5 分钟；如果需要制作记忆卡片、解答例题或撰写段落总结，则每页建议预留 5 分钟以上。' },
  { question: '这个规划器可以代替课程大纲中的进度表吗？', answer: '不能。它能帮您将阅读量转化为所需的时间和学习阶段，但交作业截止日期、研讨会、实验课和复习时间仍然需要记录在您的主日历上。' },
];

const howToItems = [
  { name: '输入阅读总量', text: '添加您需要读完的总页数或等效阅读量的字数单元。' },
  { name: '设置可用时间', text: '输入在截止日期之前，您实际能够用于学习的总分钟数。' },
  { name: '估算阅读速度和笔记密度', text: '选择每小时阅读页数以及您预计每页所需的平均记笔记分钟数。' },
  { name: '拆分为学习阶段', text: '设置学习阶段的数量，以查看每次学习时需要阅读的页数、分钟数和笔记时间。' },
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
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'CNY' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: '阅读页数',
    minutesLabel: '可用时间',
    speedLabel: '阅读速度，页/小时',
    densityLabel: '笔记密度，分钟/页',
    sessionsLabel: '学习阶段数',
    totalTimeLabel: '预计总工作量',
    readingTimeLabel: '阅读时间',
    noteTimeLabel: '笔记时间',
    coverageLabel: '时间覆盖率',
    pagesSessionLabel: '页数/次',
    minutesSessionLabel: '分钟/次',
    notesSessionLabel: '笔记分钟/次',
    controlsAriaLabel: '阅读计划设置',
    minuteUnit: '分钟',
    hourUnit: '小时',
    faqTitle: '常见问题',
    bibliographyTitle: '参考资料与学术资源',
    statusLabels: {
      comfortable: '时间充裕的计划',
      tight: '紧张但可行',
      overloaded: '计划严重超时',
    },
    resetButton: '重置',
  },
  seo: [
    { type: 'title', text: '根据笔记时间而不仅是页面数量来规划阅读时间', level: 2 },
    { type: 'paragraph', html: '许多学生在估算阅读时间时，只是简单地用页数除以大致的阅读速度，却忽略了最大的隐藏成本：记笔记。一个四十页 class 的章节，如果只是粗略浏览，可能只需要九十分钟；但如果要写批注、做总结并将知识点转化为记忆卡片，则需要三个小时。本规划器将阅读速度与笔记密度分开进行估算，以便您的日程安排能真实反映学术任务的实际情况。' },
    { type: 'diagnostic', variant: 'info', title: '阅读计划过于乐观的常见表现', html: '<ul><li>您的可用时间只覆盖了纯阅读的分钟数，没有包含记笔记或课后练习的时间。</li><li>您对小说、专业教材、研究论文和法律案例使用相同的每小时阅读页数估算。</li><li>单次学习时长超出了您平时的注意力集中时间，导致后半部分页面的笔记质量显著下降。</li><li>截止日期前还有其他课业，但阅读计划假设每一分钟空闲时间都可以用来学这一门课。</li></ul>' },
    { type: 'title', text: '如何选择 realistic 的每小时阅读页数', level: 3 },
    { type: 'table', headers: ['材料类型', '建议起始速度', '规划建议'], rows: [['轻松复习或熟悉的内容', '40-60 页/小时', '仅在您已掌握专业术语且阅读目的是温故而非知新时使用。'], ['标准的教科书章节', '20-35 页/小时', '如果章节中包含计算例题、图表或节末小测，请降低估算速度。'], ['深奥的理论、研究论文或原始文献', '8-20 页/小时', '规划更短的学习阶段，并留出总结复习的时间，因为理解通常建立在反复阅读的基础上。']] },
    { type: 'tip', html: '<strong>在第一次学习后进行校准。</strong> 对前十页的阅读和笔记过程进行计时。如果计算器显示计划可行，但计时结果表明时间紧张，请以实际计时为准并调低您的估算速度。' },
    { type: 'title', text: '笔记密度的具体含义', level: 3 },
    { type: 'paragraph', html: '笔记密度是指在阅读中或阅读后，平均在每页纸的内容整理上所花费的时间。低密度的笔记可能只是在页边记一个关键词和画重点。高密度的笔记则可能包含康奈尔笔记、简短总结、问题清单和三张记忆卡片。正确的笔记方式取决于考核形式：客观题测试适合使用记忆卡片，主观题考试需要论点图，而定量课程则需要亲自动手做例题。' },
    { type: 'comparative', title: '简单笔记 vs 深度整理', columns: 2, items: [{ title: '简单笔记', description: '完成速度更快，适合泛读，但知识遗忘较快，且后期复习时难以作为高效参考资料。', points: ['最适合熟悉的主题', '即时学习负担较低', '复习支撑力度较弱'] }, { title: '深度整理', description: '虽然耗时较长，但这是准备考试、研讨会和撰写课程论文的极佳方法，有助于准确回忆细节事实。', highlight: true, points: ['推荐用于考试内容', '即时学习负担较高', '极佳的复习材料'] }] },
    { type: 'summary', title: '时间规划的实用守则', items: ['尽量将单次阅读学习的时长控制在 75 分钟以内。', '如果记笔记的时间超过了纯阅读时间，请把任务拆成两步：先通读，后整理。', '将最后一个阶段留给知识的巩固，而不是把新页面的阅读一直排到截止日期前。'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
