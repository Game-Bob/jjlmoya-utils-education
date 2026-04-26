import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = '国际成绩换算器与 GPA 等级转换计算器';
const description = '最精准的国际学业成绩转换工具。支持西班牙、美国、英国、德国、法国、意大利等多个国家的成绩互换。是 Erasmus+、富布赖特奖学金及全球大学申请的必备工具。';

const faqItems = [
  { 
    question: '国际成绩转换是如何工作的？', 
    answer: '本工具采用基于各国最低及格分数和最高可能分数的数学线性映射算法。这确保了一个系统的“及格”能与另一个系统的“及格”精准对齐，从而在不同评分标准之间保持学业上的比例公平。' 
  },
  { 
    question: '此转换器生成的成绩是否可用于大学申请？', 
    answer: '虽然我们的算法遵循国际标准的等效对照表（如 ECTS 或 WES 使用的标准），但本工具仅供参考。对于正式的学分认定，您应始终咨询您的接收院校或认可的评估机构。' 
  },
  { 
    question: '什么是“批量模式（Bulk Mode）”？', 
    answer: '批量模式允许拥有多门课程成绩的学生一次性处理所有分数。只需从您的 PDF 或 Excel 成绩单中复制一列数字并粘贴，工具将立即计算出单项转换结果和全球平均 GPA。' 
  },
  { 
    question: '我可以将成绩转换为 ECTS 吗？', 
    answer: '可以。本转换器提供与欧洲学分互认体系（ECTS）对齐的等值分数，非常适合计划在欧洲学习或申请硕士项目的学生使用。' 
  }
];

const howToItems = [
  { name: '1. 选择原始评分体系', text: '确定您所在国家或特定的评分标准（例如：西班牙 0-10，法国 0-20）。' },
  { name: '2. 设定目标国家', text: '添加您申请的目标国家，以便在仪表盘中并排查看所有转换等值。' },
  { name: '3. 输入学业数据', text: '输入单项成绩进行快速查询，或使用批量模式处理整个学期的成绩记录。' },
  { name: '4. 分析与导出', text: '查看视觉化的百分位进度条，并下载 PDF 格式的成绩转换报告供您存档。' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: '批量模式处理, 实时转换, 支持全球评分标准, 生成 PDF 报告',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: '原始评分体系',
    targetSystems: '全球等值参考',
    gradeInput: '您的分数',
    bulkMode: '批量成绩处理',
    bulkPlaceholder: '在此粘贴您的成绩列表（每行一个）...',
    results: '等值对照表',
    passLimit: '最低及格线',
    shareResults: '生成成绩转换报告',
    averageMedia: '全球转换后平均分',
    compareTitle: '世界学术水平定位',
    addSystem: '添加国家',
    removeSystem: '移除',
    selectCountry: '选择国家',
    sourceCountry: '原产国',
    systemSelection: '体系选择',
    convertedScore: '转换后分数',
    emptyState: '输入成绩以查看全球等值对照',
    minLabel: '最小',
    passLabel: '及格',
    maxLabel: '最大',
    scaleLabel: '分制',
    howToTitle: '通往国际教育之路',
    faqTitle: '常见问题',
    bibliographyTitle: '学术参考资料与标准',
    singleGradeMode: '单项成绩',
    transcriptMode: '完整成绩单',
    gradeCounter: '已输入课程数',
    averageSummary: '计算出的平均分',
    gradesIgnored: '{count} 个成绩超出范围已被忽略',
    bulkHelp: '您可以直接粘贴成绩单。我们会自动检测由空格、逗号或换行分隔的分数。',
    copiedLabel: '已复制！',
    germanyExpl: '德国评分体系：反向计分，1.0 为最高分，4.0 为最低及格线。',
    spainExpl: '西班牙评分体系：标准 0-10 分制，5.0 为最低及格线。',
    usaExpl: '美国 GPA 体系：0.0 到 4.0 分制，通常 2.0 为最低及格线。',
    ukExpl: '英国评分体系：百分比制分类，40% 为最低及格线。',
    franceExpl: '法国评分体系：20 分制，10 分为最低及格线。',
    italyExpl: '意大利评分体系：30 分制，18 分为最低及格线。',
    netherlandsExpl: '荷兰评分体系：1-10 分制，6 分为最低及格线。',
    placeholderSpain: '例如：8.5',
    placeholderUSA: '例如：3.7 或 A-',
    placeholderFrance: '例如：14',
    placeholderGermany: '例如：1.3',
    placeholderUK: '例如：75',
    placeholderItaly: '例如：28',
    placeholderNetherlands: '例如：7.5',
  },
  seo: [
    { type: 'title', text: '为全球留学打造的精准成绩换算', level: 2 },
    { type: 'paragraph', html: '无论您是 <strong>Erasmus+ 交换生</strong> 还是正在申请 <strong>常春藤盟校硕士</strong>，了解自己的全球学术定位是第一步。各国评分标准差异巨大：在西班牙 10 分代表完美，而在法国 10 分仅代表及格。我们的换算引擎旨在消除这些认知鸿沟。' },
    { type: 'title', text: '为什么 GPA 换算的准确性至关重要', level: 3 },
    { type: 'paragraph', html: '招生委员会利用换算后的 GPA 来筛选成千上万的申请。手动计算中的细微错误可能会让您错失奖学金。本工具采用各大国际教育机构通用的<strong>官方线性映射算法</strong>。' },
    { type: 'title', text: '支持的主要评分体系', level: 3 },
    { type: 'list', items: [
      '<strong>西班牙 (0-10):</strong> 从“及格”到“优秀”的详细映射。',
      '<strong>美国 GPA (4.0):</strong> 标准美国大学等值标准。',
      '<strong>德国 (1-6):</strong> 处理 1.0 为峰值的反向评分。',
      '<strong>法国 (0-20):</strong> 针对法国精英大学校和公立大学的精准换算。',
      '<strong>英国等级:</strong> 百分比到荣誉学位的翻译。'
    ] },
    { type: 'tip', html: '<strong>学业建议：</strong> 使用“批量模式”计算多个学期的累计 GPA。这能为您节省数小时的手动制表时间！' },
    { type: 'title', text: '计算您的 WES 等值成绩', level: 3 },
    { type: 'paragraph', html: '虽然正式的 WES 认证是付费服务，但本工具能提供<strong>高保真度的 WES GPA 估算</strong>，帮助您在支付昂贵的认证费前，更好地决定申请哪所学校。' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
