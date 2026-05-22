import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor' as const;
const title = '考试倒计时与每日学习规划器';
const description = '计算精确的每日学习进度，以充沛的准备迎接考试。输入您的学习资料总量，设置休息日，即可生成专属的学习日历。';

const faqItems = [
  { question: '为什么每天学习比考试前最后一晚熬夜死记硬背更好？', answer: '科学研究表明，分散学习（在一段时间内分散学习时间）相比于在最后几天临时抱佛脚，能带来好得多的长期记忆效果，并显著减轻考试前的焦虑感。' },
  { question: '复习缓冲期有什么作用？', answer: '复习缓冲期在考试前预留了指定的天数，专门用于全面复习。在此期间，规划器不会安排新的学习内容，确保您有充足的时间巩固已学知识。' },
  { question: '自定义休息日对我的学习进度有什么影响？', answer: '当您将某天标记为休息日（无论是每周的固定休息日还是特定的临时日期）时，规划器会自动将剩余的学习任务重新分配到其他学习日，略微增加每日目标，以确保您能按时完成。' },
  { question: '我可以把休息日改回学习日吗？', answer: '可以。您可以在学习日历中实时切换任意一天的状态（学习或休息），或者从排除列表中移除特定的休息日期，日历会立即重新计算目标。' },
];

const howToItems = [
  { name: '输入您的考试日期', text: '在日历输入框中选择您即将迎来的考试日期。' },
  { name: '输入学习资料总量', text: '输入您需要学习的材料总量，例如总页数、章节数或练习题数。' },
  { name: '设置学习日程与缓冲期', text: '选择您每周的休息日，并设置考试前的复习缓冲天数（例如预留 2 天进行最终复习）。' },
  { name: '调整和跟踪进度', text: '根据您的个人时间安排，直接在日历中将特定的某天切换为自定义休息日，以便灵活调整。' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: '学习规划器与倒计时',
    examDateLabel: '考试日期',
    materialLabel: '资料总量（页数 / 章节）',
    materialUnitLabel: '资料单位',
    progressLabel: '目前已完成',
    weeklyScheduleLabel: '每周学习日',
    reviewBufferLabel: '复习缓冲期（天）',
    excludedDatesLabel: '自定义休息日',
    dailyPaceLabel: '每日学习进度',
    daysLeftLabel: '剩余天数',
    studyDaysLabel: '学习天数',
    bufferDaysLabel: '缓冲天数',
    scheduleTitle: '您的专属学习日历',
    resetButton: '恢复默认设置',
    addExclusionButton: '添加休息日',
    daysOfWeek: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayTypes: {
      study: '学习日',
      rest: '休息日',
      review: '复习缓冲期',
      exam: '考试日',
    },
    units: {
      pages: '页',
      chapters: '章',
      exercises: '练习',
      modules: '模块',
      topics: '主题',
    },
    noStudyDaysError: '没有可用的学习天数！请检查您的每周学习日程和复习缓冲期设置。',
    examInPastError: '考试日期必须是未来的某个时间。',
    noMaterialError: '请输入大于零的学习资料总量。',
    scheduleTableHeader: {
      date: '日期',
      day: '星期',
      type: '状态',
      target: '今日目标',
      cumulative: '累计进度',
      action: '快速操作',
    },
    markAsRest: '标记为休息',
    markAsStudy: '标记为学习',
    faqTitle: '常见问题解答',
    bibliographyTitle: '参考文献与学术资源',
  },
  seo: [
    { type: 'title', text: '如何合理规划学习时间以最大化记忆留存', level: 2 },
    { type: 'paragraph', html: '备考的核心在于合理分配工作量，而非考前最后一晚的突击。保持匀速的学习节奏对于避免认知过载、提高记忆提取效率以及从容不迫地完成所有复习内容至关重要。' },
    { type: 'title', text: '分散学习与间隔重复的科学依据', level: 3 },
    { type: 'paragraph', html: '人类大脑在学习时间有所间隔时记忆效果最佳。将学习内容分摊到数周的时间里，能让大脑通过巩固过程建立起更牢固的神经连接。间隔重复可以预防精神疲劳，并促使信息从短期记忆转化为长期记忆。' },
    { type: 'paragraph', html: '根据艾宾浩斯遗忘曲线理论，除非我们主动进行复习，否则记忆强度会随时间流逝而衰减。有计划的复习间隔犹如一次记忆重置，能有效减缓遗忘速度，从而构建深层次的概念性理解。' },
    { type: 'title', text: '设置临考复习缓冲期的必要性', level: 3 },
    { type: 'paragraph', html: '一个常见的误区是一直学习新内容直到临考前的最后一刻。设置一个专门的复习缓冲期（通常是考前 2 至 5 天），能够让您有时间做模拟题、回顾总结笔记并查漏补缺。这也有助于确保您在考试当天拥有充足的睡眠，以保持最佳的精神状态。' },
    { type: 'title', text: '自适应学习规划的优势', level: 3 },
    { type: 'paragraph', html: '固定的学习计划往往会因为生活的不可预测性而泡汤。一旦落后了几页进度，静态日程表就会失效。而自适应计算器则可以实时重新计算每日的学习要求，消除由于小挫折带来的焦虑感。' },
    { type: 'list', items: [
      '定期更新您的学习进度，以确保每日目标的准确性。',
      '在出现突发日程冲突时，灵活调整您的休息日期。',
      '保持平稳的学习节奏，而不是试图在一天内弥补大量的进度拖欠。'
    ] },
    { type: 'title', text: '灵活性：有意识地安排休息时间', level: 3 },
    { type: 'paragraph', html: '休息并非奖赏，而是学习过程中不可或缺的一环。在日历中主动规划休息日可以防止过度疲劳。本规划器会自动将剩余的学习任务分配到其他可用天数中。' },
    { type: 'tip', html: '<strong>预留应对突发情况的空间。</strong> 建议每周至少留出一个休息日。它起到了安全阀的作用：一旦您生病或有紧急事务，可以用这一天来补齐进度，而不会打乱整个主日程。' },
    { type: 'title', text: '如何手动计算您的学习步调', level: 3 },
    { type: 'paragraph', html: '您可以使用简单的数学公式手动计算每日学习目标。首先，用总资料量减去已完成的页数或章节数，确定剩余的工作量。接着，统计从今天到考试日期的总天数，并减去休息天数和复习缓冲天数。最后，用剩余工作量除以可用的学习天数。' },
    { type: 'paragraph', html: '例如：如果您有 400 页资料需要学习，已完成了 50 页，距离考试还有 20 天，计划休息 4 天，并希望有 2 天的复习缓冲期：那么剩余的工作量是 350 页，实际的学习天数是 14 天。您的每日学习进度就是 350 除以 14，正好是每天 25 页。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
