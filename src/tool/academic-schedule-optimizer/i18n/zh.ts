import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'academic-schedule-optimizer' as const;
const title = '学术课表优化器';
const description = '创建直观的每周课程表，用颜色标记科目，检测重叠时间段，并将您的作息表导出为 .ics 日历文件。';

const faqItems = [
  {
    question: '重叠检测器是如何工作的？',
    answer: '每个课程块都包含星期、开始时间和持续时间。本工具会对比任意两个课程块，若它们在同一天且时间范围发生重叠，则会进行标记。'
  },
  {
    question: '我可以直接在日历上移动课程吗？',
    answer: '可以。拖拽课程块到另一天，即可快速尝试新的每周布局。移动后，冲突状态会立即更新。'
  },
  {
    question: '.ics 导出包含哪些内容？',
    answer: '导出会生成标准的 iCalendar 文件，其中每个课程都作为一个事件，包括科目、教室、开始和结束时间。您可以将其导入许多日历应用。'
  },
  {
    question: '为什么要对科目进行颜色编码？',
    answer: '颜色使密集的课程表更易于快速浏览。为实验课、讲座、研讨会或高强度科目使用不同颜色，有助于快速识别冲突和繁忙的日子。'
  }
];

const howToItems = [
  { name: '添加课程详情', text: '输入科目、教室、星期、开始时间、持续时间和颜色。' },
  { name: '在每周网格中放置课程块', text: '使用生成的课程块来观察每门课程如何融入您的每周课程表中。' },
  { name: '解决重叠冲突', text: '寻找高亮显示的冲突块，然后移动或编辑课程，直到冲突面板清空。' },
  { name: '导出您的日历', text: '下载 .ics 文件并将其导入 Google 日历、苹果日历、Outlook 或其他日历应用。' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: '科目',
    roomLabel: '教室',
    dayLabel: '星期',
    startLabel: '开始',
    durationLabel: '时长',
    colorLabel: '颜色',
    addClass: '添加课程',
    saveClass: '保存课程',
    newClass: '新课程',
    exportICS: '导出 .ics',
    conflictLabel: '课表冲突',
    noConflicts: '未检测到时间重叠',
    removeLabel: '删除课程',
    editHint: '选择一门课程进行编辑，或将其拖动到其他天和时间。',
    weekendDaysLabel: '周末显示',
    saturdayLabel: '星期六',
    sundayLabel: '星期日',
    weekDayLabels: ['周一', '周二', '周三', '周四', '周五'],
    weekendDayShortLabels: ['周六', '周日'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 小时', '2 小时', '3 小时'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: '微积分',
    defaultRoom: '204 教室',
    defaultNewSubject: '新课程',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: '微积分', room: '204 教室', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: '文学', room: '实验室 B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: '物理', room: '大礼堂', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'academic-schedule.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: '处重叠',
    overlapPlural: '处重叠',
    detectedLabel: '被检测到',
    classEditorAriaLabel: '课程编辑器',
    weeklyScheduleAriaLabel: '每周课表',
    faqTitle: '常见问题',
    bibliographyTitle: '参考资料与日历标准',
  },
  seo: [
    { type: 'title', text: '如何构建一个真正行之有效的每周学术课表', level: 2 },
    { type: 'paragraph', html: '一份好的课表不仅是课程的清单。它能展示您哪一天的负荷过重，哪些日子被空闲时间切碎，以及两门必修课程是否冲突。学术课表优化器使这些问题在变成缺课、奔波或无法成功注册的尴尬之前直观可见。' },
    { type: 'summary', title: '在最终确定课表前需要检查的事项', items: [
      '没有两门必修课在同一天发生重叠。',
      '针对有周末课程的教学系统，可启用星期六和星期日。',
      '实验室课、讲座和研讨会使用不同颜色以供快速浏览。',
      '高难度的科目不要连续排课，应留出恢复时间。',
      '最终的课表可以导出到您日常使用的日历应用中。'
    ] },
    { type: 'title', text: '为什么网格视图胜过纯文本列表', level: 3 },
    { type: 'paragraph', html: '纯文本课程列表会隐藏时间压力，因为它们将每门课程与这一周的其他时间割裂开来。而网格可以立即显现负荷密度。您可以一眼看出周一是否有过多的学时，讲座是否挡住了实验课，周六的课程是否改变了每周的节奏，以及教室间的奔波是否会带来隐性的麻烦。' },
    { type: 'comparative', columns: 3, items: [
      { title: '课程列表', description: '便于核对选课代码，但不易发觉每周排课的负荷情况。' },
      { title: '每周网格', description: '最适合一眼看清课程节奏、空当与冲突。', highlight: true },
      { title: '仅日历应用', description: '适合规划好之后的日常查看，但对于尝试多种排课组合效率较低。' }
    ] },
    { type: 'title', text: '重叠检测如何工作', level: 3 },
    { type: 'paragraph', html: '当两门课在同一天且时间范围发生相交时即发生冲突。例如，上午 10:00 至 12:00 的讲座与 11:00 至 13:00 的研讨会重叠，因为它们都占用了 11:00 这一小时。工具会检查每个课程块与其他所有块，并标示冲突的双方。' },
    { type: 'table', headers: ['课程 A', '课程 B', '结果'], rows: [
      ['周一 09:00-11:00', '周一 11:00-13:00', '没有重叠，因为一门课结束时另一门课刚好开始。'],
      ['周二 10:00-12:00', '周二 11:00-13:00', '发生重叠，因为它们的时间范围相交。'],
      ['周三 09:00-11:00', '周四 09:00-11:00', '没有重叠，因为它们在不同的日期。']
    ] },
    { type: 'title', text: '使用颜色作为学术规划的辅助信号', level: 3 },
    { type: 'paragraph', html: '颜色不仅是装饰。它可以代表课程类型、难度、校区位置或精力消耗程度。一致的调色板能让课表在紧凑的学习生活中更易读，特别是在选课期间对比不同的排课方案时。' },
    { type: 'tip', html: '<strong>保持颜色含义的稳定。</strong> 例如，将一类颜色用于实验课，另一类用于理论讲座，并用警告色标记那些需要跨校区通勤或需要大量预习的课程。' },
    { type: 'title', text: '导出到日历应用', level: 3 },
    { type: 'paragraph', html: '.ics 格式是标准的 iCalendar 交换格式。导出学术课表允许您将课程导入 Google 日历、苹果日历、Outlook 以及许多学校的日历系统中。导入后，您可以添加提醒、通勤时间、重复规则以及个人自习时间。' },
    { type: 'diagnostic', variant: 'warning', title: '在导入前', html: '确认周起始日期与您想要导入的周一致，检查日历应用中的时区，并确认导入的事件不会与学校已有的课程表订阅冲突导致重复。' },
    { type: 'title', text: '选课登记的实用工作流', level: 3 },
    { type: 'list', items: [
      '先添加必修课，解决冲突，然后再添加选修课。',
      '当您的学校课表包含周末授课时，启用星期六或星期日。',
      '使用颜色来区分讲座、实验课、研讨会和自习。',
      '在日期之间拖拽课程块，快速对比不同的选班组合。',
      '留出明显的空当用于用餐、通勤和休息。',
      '仅在冲突面板完全清空后，再进行导出操作。'
    ] },
    { type: 'message', title: '规划是一个迭代的过程', html: '把第一个版本当成草稿。最佳课表通常是在您测试了冲突、对比了授课形式并确认每周节奏是可持续的之后才成型的。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
