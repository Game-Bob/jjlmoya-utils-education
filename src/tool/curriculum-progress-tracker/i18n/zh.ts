import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'degree-credit-progress-and-projected-grade-calculator' as const;
const title = '修读学分进度与预测绩点计算器';
const description = '分学期组织您的学位修读计划，追踪您的真实绩点与预测绩点，并模拟在剩余科目中需要达到的平均成绩以实现您的学术目标。';

const faqItems = [
  {
    question: '我该如何开始规划我的学位？',
    answer: '只需在控制面板上添加学期，然后直接在页面中输入您的课程即可。您可以设置学分分值、选择课程状态并记录成绩。',
  },
  {
    question: '真实 GPA 与预测 GPA 之间有什么区别？',
    answer: '真实 GPA 仅根据已完成且获得正式成绩的的课程计算。预测 GPA 则将您正在修读和计划修读的课程（使用您的预期成绩）纳入计算，以估算您的最终平均成绩。',
  },
  {
    question: '所需成绩指标显示的是什么？',
    answer: '它计算出您在所有剩余课程（修读中或计划中）中必须维持的精确加权平均成绩，以便达到您的全局目标绩点（GPA）。',
  },
  {
    question: '我的学业数据安全吗？',
    answer: '是的。所有数据都使用本地存储保存在您的网页浏览器中，绝不会上传到任何服务器。您还可以使用导出按钮将计划下载为 JSON 文件。',
  },
];

const howToItems = [
  { name: '设定目标', text: '在控制面板顶部设置您的总毕业学分目标和期望的目标绩点（GPA）。' },
  { name: '构建课程计划', text: '添加学期，并根据您的官方教学大纲列出课程，为其分配对应的学分。' },
  { name: '更新成绩和状态', text: '在已完成、修读中和计划中之间切换课程状态，并在完成课程时输入实际成绩。' },
  { name: '分析所需成绩', text: '查看成绩分析器，了解您的目标是否可行，并获取在未来学期中需要达到的确切平均绩点。' },
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
  applicationCategory: 'EducationalApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: '学位/专业名称',
    graduationCreditsLabel: '毕业要求总学分',
    targetGpaLabel: '目标绩点 (GPA)',
    realGpaLabel: '真实绩点',
    projectedGpaLabel: '预测绩点',
    creditsCompletedLabel: '已修完学分',
    requiredGradeLabel: '所需成绩 (剩余科目平均)',
    addSemesterButton: '添加学期',
    addCourseButton: '添加课程',
    exportPlanButton: '导出计划',
    importPlanButton: '导入计划',
    semesterNamePlaceholder: '学期名称（如：一年级秋季学期）',
    courseNamePlaceholder: '课程名称',
    creditsPlaceholder: '学分',
    gradePlaceholder: '成绩',
    statusCompleted: '已完成',
    statusInProgress: '修读中',
    statusPlanned: '计划中',
    importError: '无法导入课程计划。请检查文件格式是否正确。',
    uploadHint: '所有数据都保存在您的浏览器本地。导入和导出完全在您的设备上进行。',
    statusMessageSuccess: '您正处于实现目标绩点的轨道上。',
    statusMessageWarning: '您需要在剩余的课程中获得平均 {grade} 分或以上，才能达到您的目标绩点。',
    statusMessageImpossible: '根据您当前的课程设置，要达到您的目标绩点在数学上是不可能的。',
    degreeNamePlaceholder: '如：计算机科学工学学士',
    deleteSemesterLabel: '删除学期',
    deleteCourseLabel: '删除课程',
    semesterTitleTemplate: '学期 {num}',
  },
  seo: [
    { type: 'title', text: '如何预测您的毕业绩点并管理课程学分进度', level: 2 },
    { type: 'paragraph', html: '规划大学学业需要前瞻性的工具。本计算器允许您模拟未来的修读学期，以便在考期到来之前了解不同课程成绩对整体毕业绩点的影响。' },
    { type: 'summary', title: '每学期需要追踪的关键指标', items: [
      '对比已修完学分与毕业所需的总学分差距。',
      '将真实已得成绩与假设预测区分开来，进行合乎现实的规划。',
      '计算在接下来的学期中必须拿到的最低绩点底线。',
    ] },
    {
      type: 'proscons',
      title: '预测绩点模拟器的优势与局限',
      items: [
        {
          pro: '帮助您主动进行未来学期的履修设计。',
          con: '模拟的精确性完全取决于您输入预期成绩时的合理性。',
        },
        {
          pro: '精确展示维持目标绩点所需达到的课程分数控制线。',
          con: '无法自动套用您所在院校的重修成绩覆盖或放弃课程学分等特殊校规。',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
