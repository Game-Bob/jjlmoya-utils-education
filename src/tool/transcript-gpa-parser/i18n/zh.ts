import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'transcript-gpa-parser' as const;
const title = '成绩单 GPA 提取与计算器';
const description = '只需复制并粘贴大学成绩单的原始文本，即可立即计算您的累计 GPA 和加权平均成绩。完全离线运行。';

const faqItems = [
  {
    question: '自动解析是如何工作的？',
    answer: '它逐行扫描粘贴的文本，根据空格、制表符或标点符号将其拆分为不同的列。然后分析这些值，自动识别哪一列包含课程名称、成绩和学分。'
  },
  {
    question: '我的学业数据安全吗？',
    answer: '是的，完全安全。数据解析和 GPA 计算完全在您设备上的浏览器中运行。任何数据都不会发送到服务器，从而使您的成绩单保持 100% 的私密性。'
  },
  {
    question: '如果列映射不正确怎么办？',
    answer: '您可以非常轻松地进行调整。在检测到的表格中，每一列都有一个下拉菜单表头，您可以在其中手动选择该列代表课程名称、成绩、学分，还是应当被忽略。'
  },
  {
    question: '它支持字母成绩和不同的评分制吗？',
    answer: '是的，它支持标准的字母成绩（A、B、C、D、F）以及数值评分制（0-10、0-20、0-100）。您可以配置最大评分标准以匹配您学校的系统。'
  }
];

const howToItems = [
  {
    name: '复制成绩单',
    text: '前往您的大学教务门户或成绩单页面，选中并复制文本。'
  },
  {
    name: '粘贴文本',
    text: '将复制的文本粘贴到此工具的文本输入框中。'
  },
  {
    name: '核对与映射',
    text: '检查自动生成的表格。如有必要，使用表头调整每列的属性。'
  },
  {
    name: '获取 GPA',
    text: '在底部即可立即查看计算出的加权 GPA 和总学分。'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: '在此处粘贴您的成绩单',
    pasteAreaPlaceholder: '粘贴从 Moodle、Canvas 或大学成绩单页面复制的文本...',
    parsedTitle: '解析出的成绩单数据',
    columnSelect: '映射列',
    subjectName: '课程/科目名称',
    grade: '成绩',
    credits: '学分',
    ignore: '忽略',
    gpaResult: '累计 GPA',
    totalCredits: '总学分',
    emptyState: '在上方粘贴您的成绩单数据，即可在此处预览并编辑行。',
    scaleLabel: '成绩分制上限',
    customScale: '最大成绩分制',
    exampleSubject: '微积分 I',
    newSubjectPlaceholder: '新课程',
    clearBtn: '清空文本',
    errorFormat: '未能检测到清晰的列。请尝试复制并粘贴表格或列表格式的文本。'
  },
  seo: [
    { type: 'title', text: '如何从任何成绩单中解析并计算 GPA', level: 2 },
    { type: 'paragraph', html: '计算您的学术平均成绩不应该需要手动输入几十门课程。此工具可直接从任何复制粘贴的原始文本中提取数据，为您计算 GPA。' },
    { type: 'title', text: '为什么要使用原始成绩单解析器？', level: 3 },
    { type: 'paragraph', html: '大学门户网站通常将成绩报告排版为复杂的 HTML 表格。将它们直接复制并粘贴到此工具中，我们的启发式引擎即可立即提取课程、成绩和学分，避免手动输入错误。' },
    { type: 'title', text: '安全、私密且快捷', level: 3 },
    { type: 'paragraph', html: '由于解析引擎通过 JavaScript 在本地运行，您的学术记录绝不会离开您的浏览器。您可以在几毫秒内解析包含数百行的页面。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
