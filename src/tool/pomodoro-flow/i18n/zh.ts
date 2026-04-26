import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow 番茄钟';
const description = '通过禅意风格的时间管理工具掌控您的效率。自定义工作与休息周期，追踪干扰，并实时可视化您的专注模式。';

const faqItems = [
  { question: '什么是番茄工作法？', answer: '番茄工作法是一种时间管理方法，通过专注的工作时间（通常为 25 分钟）和随后的短时间休息来提高效率。本工具通过可自定义的周期和详细的分析功能对其进行了扩展。' },
  { question: '我可以自定义工作或休息时长吗？', answer: '可以！您可以从三个预设（种子：25/5，树木：50/10，高山：90/15）中选择，或者使用 +5 和 -5 分钟按钮实时调整。' },
  { question: '干扰追踪功能有什么作用？', answer: '每当您点击分心按钮时，工具会记录一次干扰。这有助于计算您的“专注分”，并识别您注意力模式中的规律。' },
  { question: '专注分是如何计算的？', answer: '专注分 = ((工作时间 - 干扰次数 × 2) / 工作时间) × 100。这考虑了任务切换带来的认知成本。' },
  { question: '我可以导出我的 session 数据吗？', answer: '可以。您可以将 session 摘要复制为 Markdown 格式（非常适合 Notion/Obsidian），或者在社交媒体上分享视觉摘要。' },
];

const howToItems = [
  { name: '输入您的任务', text: '输入您即将开始的工作内容。这有助于保持上下文和专注意图。' },
  { name: '选择周期', text: '快速任务选择“种子（25/5）”，标准工作选择“树木（50/10）”，深度专注选择“高山（90/15）”。' },
  { name: '点击开始并专注', text: '计时开始。点击环形进度条可暂停。根据需要使用 +5/-5 进行调整。浏览器标签栏会显示剩余时间。' },
  { name: '记录干扰', text: '分心了吗？点击“分心警报”按钮。工具会将其记录下来以计算您的专注分。' },
  { name: '回顾您的收获', text: 'session 结束后，查看您的统计数据：专注分、任务分解以及生产力月度热力图。' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: '您接下来要处理什么任务？',
    selectCycle: '选择您的专注周期',
    startButton: '开始',
    seed: '种子',
    tree: '树木',
    mountain: '高山',
    timer: '计时器',
    pauseButton: '暂停',
    resumeButton: '恢复',
    distractionButton: '分心警报',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: '专注',
    breakTime: '休息',
    sessionComplete: 'Session 完成',
    endSession: '结束 Session',
    focusScore: '专注分',
    totalTime: '总时长',
    interruptions: '干扰次数',
    taskBreakdown: '任务统计',
    monthlyHeatmap: '月度活动',
    copyMarkdown: '复制 Markdown',
    shareImage: '分享',
    wellnessMessage: '休息一下吧，这是你应得的',
    sessionSummary: 'Session 摘要',
    newSession: '新 Session',
    copied: '已复制！',
    unnamedTask: '未命名任务',
    breakTimeNotification: '休息时间到！',
    focusTimeNotification: '开始专注吧！',
    interruptionsLabel: '干扰：',
    studySession: '学习 Session',
  },
  seo: [
    { type: 'title', text: '通过 Pomodoro Flow 掌控专注力', level: 2 },
    { type: 'paragraph', html: '生产力不在于更努力地工作，而在于更聪明地工作。<strong>Pomodoro Flow</strong> 将久经考验的番茄工作法与禅意设计及实时分析相结合，帮助您理解自己<em>如何</em>才能达到最佳工作状态。' },
    { type: 'title', text: '番茄工作法为什么有效', level: 3 },
    { type: 'paragraph', html: '人类并不适合进行 8 小时的超高度专注马拉松。我们的大脑在“专注工作 + 恢复性休息”的循环中表现最佳。番茄工作法将此转化为一个简单的仪式：专注工作 25 分钟，休息 5 分钟，然后重复。' },
    { type: 'paragraph', html: '但每个任务都不同。这就是为什么 Pomodoro Flow 提供三种周期：适合快速任务的<strong>种子</strong> (25/5)，适合日常工作的<strong>树木</strong> (50/10)，以及适合深度工作的<strong>高山</strong> (90/15)。' },
    { type: 'title', text: '真正的力量：干扰追踪', level: 3 },
    { type: 'paragraph', html: '您工作了 50 分钟，觉得自己表现很棒。但您是否分心了 5 次？每次干扰都会产生“任务切换税”。Pomodoro Flow 通过一个简单的按钮（分心警报）追踪这些瞬间，并计算您的<strong>专注分</strong>——一个衡量您专注程度的真实指标。' },
    { type: 'paragraph', html: '随着时间的推移，您会发现哪些任务、一天中的哪些时段或哪些环境能让您达到最佳专注状态。那里正是产生最高价值成果的地方。' },
    { type: 'title', text: '不干扰工作的精妙功能', level: 3 },
    { type: 'list', items: [
      '禅意科技设计：深色模式、玻璃拟态风格，以及一个让您心无旁骛的中心计时器。',
      '实时标题栏：浏览器标签页显示倒计时，扫视一眼即可掌握时间。',
      '灵活计时：无需重启即可实时调整工作/休息时间。',
      'Session 导出：将摘要复制为 Markdown 格式或分享视觉图表到社交媒体。',
      '月度热力图：查看您的生产力模式。哪几天是您的专注巅峰？',
    ] },
    { type: 'title', text: '“心流状态”心理学', level: 3 },
    { type: 'paragraph', html: '心理学家米哈里·契克森米哈赖将<strong>心流 (Flow)</strong> 定义为挑战与技能相匹配、时间感消失的状态。Pomodoro Flow 通过消除干扰、设定明确的时间界限并提供即时反馈，为您创造进入心流状态的三个必要条件。' },
    { type: 'tip', html: '<strong>专业建议：</strong> 当您处于心流状态时，不要打断自己。如果计时器响了但您正思如泉涌，请点击恢复并继续工作。追踪干扰的意义在于让您看清外部混乱与自身动力之间的区别。' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
