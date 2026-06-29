import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'latex-formula-renderer' as const;
const title = 'LaTeX 公式渲染器';
const description = '在浏览器中即时渲染 LaTeX 数学公式。输入任何公式，并将其复制为 PNG 图片、Markdown 代码块或原始 LaTeX 源码，无需服务器。';

const faqItems = [
  { question: '什么是 LaTeX？为什么学生要使用它？', answer: 'LaTeX 是一种排版语言，广泛用于数学、物理、工程和经济学，用于编写专业质量的公式。与 Word 或 Google Docs 不同，LaTeX 允许您编写复杂的公式（如积分、矩阵和希腊字母），并能精确控制格式。' },
  { question: '我需要安装什么软件来使用这个渲染器吗？', answer: '不需要。此工具完全在您的浏览器中运行，使用的是开源 JavaScript 库 KaTeX。无需服务器、无需登录，也无需安装。您的表达式永远不会离开您的设备。' },
  { question: '整行块级模式和行内行级模式有什么区别？', answer: '整行块级模式（显示模式）将公式渲染在独立且居中的一行，非常适合独立方程。行内行级模式将公式渲染在文本流中，尺寸较小，适用于在句子中嵌入符号。' },
  { question: '为什么我的公式显示语法错误？', answer: 'LaTeX 语法错误最常发生于大括号不匹配（例如编写 \\frac{1 而没有闭合大括号）、命令名称拼写错误（例如 \\Frac 代替 \\frac）或使用不支持的命令。' },
  { question: '我可以使用这个工具将公式粘贴到 Word 或 Notion 中吗？', answer: '可以。使用"下载 PNG"可直接下载渲染公式的高分辨率图片，用于 Word、Google Docs 或 Notion。使用"复制 Markdown"可获取适用于 Markdown 编辑器的 LaTeX 代码块。' }
];

const howToItems = [
  { name: '输入 LaTeX 表达式', text: '在左侧编辑器中输入任何有效的 LaTeX 数学表达式。公式会在您输入时实时渲染。' },
  { name: '选择渲染模式', text: '选择整行块级模式渲染独立的等式，或选择行内行级模式将公式嵌入文本中。' },
  { name: '调整字体大小', text: '使用字号滑块放大或缩小预览，以匹配文档所需的尺寸。' },
  { name: '以首选格式导出', text: '点击"下载 PNG"获取图片，"复制 Markdown"获取代码块，或"复制 LaTeX"复制原始源表达式。' }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text
  }))
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' }
};

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'LaTeX 公式渲染器',
    inputLabel: 'LaTeX 表达式',
    inputPlaceholder: '例如：\\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: '整行块级',
    inlineModeLabel: '行内行级',
    fontSizeLabel: '字号大小',
    downloadPngButton: '下载 PNG',
    copyMarkdownButton: '复制 Markdown',
    copyLatexButton: '复制 LaTeX',
    resetButton: '重置',
    previewTitle: '实时预览',
    copiedToast: '已复制到剪贴板',
    errorLabel: '语法错误',
    emptyPreviewHint: '在上方开始输入 LaTeX 即可在此处查看渲染的公式。',
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与资源'
  },
  seo: [
    { type: 'title', text: '如何在浏览器中编写和渲染数学公式', level: 2 },
    { type: 'paragraph', html: 'LaTeX 是全球大学、期刊和研究人员使用的科学和数学排版标准。但大多数 LaTeX 环境需要复杂的安装。本工具利用 KaTeX（最快的数学渲染引擎之一）在浏览器中即时渲染 LaTeX 公式，无需任何设置。' },
    { type: 'title', text: '什么是 KaTeX？为什么它是浏览器渲染的最佳选择？', level: 3 },
    { type: 'paragraph', html: 'KaTeX 是可汗学院（Khan Academy）开发的一个开源 JavaScript 库，能以惊人的速度和准确性在浏览器中渲染 LaTeX 数学公式。它完全在客户端进行渲染，是实时交互工具的理想选择。' },
    { type: 'paragraph', html: 'KaTeX 生成干净、无障碍的 HTML 和 SVG 输出，可完美缩放至任何尺寸。' },
    { type: 'title', text: '学生和研究人员的常见应用场景', level: 3 },
    { type: 'list', items: [
      '在提交作业前，渲染教科书或讲义中的公式，以验证您的 LaTeX 语法。',
      '将公式下载为 PNG 图片，直接粘贴到 Word、Google Docs、Notion 或演示幻灯片中。',
      '将 LaTeX 表达式转换为 Markdown 代码块，用于文档、GitHub README 或 Jupyter 笔记本。',
      '在将公式包含到使用 Overleaf 撰写的论文中之前对其进行预览。'
    ] },
    { type: 'title', text: '常用 LaTeX 数学命令参考', level: 3 },
    { type: 'paragraph', html: '最常用的命令包括：\\frac{a}{b} 表示分数，\\sqrt{x} 表示平方根，\\sum 表示求和，\\int 表示积分。' },
    { type: 'title', text: '整行块级模式 vs 行内行级模式：何时使用', level: 3 },
    { type: 'paragraph', html: '整行块级模式将公式居中排在独立的一行，而行内行级模式缩放公式以适应当前的文本行。' },
    { type: 'tip', html: '调试语法错误的提示：在 LaTeX 中，每个左大括号都必须有匹配的右大括号。' },
    { type: 'title', text: '导出公式：PNG vs Markdown vs LaTeX 源码', level: 3 },
    { type: 'paragraph', html: 'PNG 导出利用浏览器 Canvas API，以双倍分辨率（2x 缩放）将 KaTeX 的 SVG 输出转换为高精度的透明背景图片。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
