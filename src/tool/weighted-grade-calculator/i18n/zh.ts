import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'weighted-grade-calculator' as const;
const title = '权重成绩与最终得分计算器';
const description = '别再为你的绩点发愁了！轻松计算课程成绩和最终得分。只需输入你的作业、考试及其权重，即可查看你的排名情况。';

const faqItems = [
  { question: '什么是权重成绩？', answer: '在许多课程中，并非所有作业的重要性都是相同的。期末考试可能占成绩的 40%，而家庭作业仅占 10%。权重成绩考虑了这些差异，让你了解真实的成绩水平。' },
  { question: '哪里可以找到我的成绩权重？', answer: '通常，这些信息列在课程大纲的“评分政策”或“评估”部分。教授会为参与度、测验和项目等不同类别分配百分比。' },
  { question: '如果我的作业总权重还不到 100% 怎么办？', answer: '没关系！我们的计算器将根据你目前已完成的工作显示“预测”成绩。它会将你当前的得分按比例放大到 100% 的等效分值。' },
  { question: '我可以把这个用于绩点计算吗？', answer: '当然可以。你可以将每门课程视为一个“项目”，并使用其学分作为“权重”，来计算你的学期权重平均分。' },
];

const howToItems = [
  { name: '列出你的作业', text: '输入考试、测验或项目的名称。保持条理性！' },
  { name: '输入你的分数', text: '输入你每项获得的成绩（通常满分为 10 或 100）。' },
  { name: '添加权重', text: '查看课程大纲，输入每项在最终成绩中所占的百分比。' },
  { name: '查看结果', text: '实时观察你的最终成绩更新。无需手动计算！' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: '还有疑问吗？',
  bibliographyTitle: '了解更多',
  ui: {
    addSubject: '添加项目',
    subjects: '成绩与权重',
    subjectName: '作业 / 学科',
    grade: '成绩',
    weight: '权重 (%)',
    scale: '分制（如 4.0, 10, 100）',
    finalGrade: '你当前的成绩',
    removeSubject: '移除',
    weightSum: '总权重',
    exampleSubject: '期末考试',
    newSubjectPlaceholder: '如：期中考试',
  },
  seo: [
    { type: 'title', text: '如何利用权重计算器掌控你的成绩', level: 2 },
    { type: 'paragraph', html: '看着一堆成绩感到迷茫吗？你并不孤单。理解<strong>权重平均分</strong>是在高中和大学保持领先的秘诀。' },
    { type: 'title', text: '为什么权重成绩很重要', level: 3 },
    { type: 'paragraph', html: '简单的平均法对每项作业一视同仁。但在现实世界中（以及在你的课程大纲中），一个 2 分钟的测验不应等同于一篇 20 页的学期论文。权重成绩为重要的内容赋予更大的“权重”。' },
    { type: 'paragraph', html: '无论是计算<strong>学期绩点</strong>，还是只想看看是否可以跳过最后一项可选作业，权重计算都是你需要的工具。' },
    { type: 'title', text: '只需 3 步即可计算最终成绩', level: 3 },
    { type: 'list', items: ['在课程大纲中找到每个类别的权重（如考试 50%，作业 20%）。', '将你的分数乘以该权重（如 90 分 * 0.50 权重 = 45 分）。', '将所有这些分数相加，即可得到最终的百分比。'] },
    { type: 'title', text: '高手建议：玩转“如果……会怎样”', level: 3 },
    { type: 'paragraph', html: '使用此计算器模拟不同的情况。“如果我期末考试得了 85 分会怎样？”或“如果我没交这项作业会怎样？”实时查看影响有助于你在最能提高成绩的地方优先分配学习时间。' },
    { type: 'tip', html: '<strong>别惊慌。</strong> 如果你的总权重还不到 100%，计算器将根据目前的工作预测你的成绩。这是在学期中跟踪进度的绝佳方式！' },
    { type: 'title', text: '算术平均 vs 权重平均：真正的区别', level: 3 },
    { type: 'paragraph', html: '算术平均值可能具有危险的误导性。如果你在一项小测验中得了 100%，但在一次重大考试中仅得 50%，简单的平均分会说你有 75%（及格）。但如果该考试占成绩的 90%，那么你<strong>实际的权重成绩</strong>接近 55%（不及格）。务必关注权重！' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    { name: '理解权重平均值 (维基百科)', url: 'https://zh.wikipedia.org/wiki/%E5%8A%A0%E6%AC%8A%E5%B9%B3%E5%9D%87%E6%95%B8' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
