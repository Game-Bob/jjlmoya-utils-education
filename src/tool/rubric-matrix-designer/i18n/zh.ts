import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'rubric-matrix-designer' as const;
const title = '量规评价矩阵设计器';
const description = '创建可编辑的加权评估量规，具备达成等级、实时100%权重验证、CSV导出和打印友好布局等功能。';

const faqItems = [
  { question: '什么是量规矩阵？', answer: '量规矩阵是一种评估网格，行表示评估维度/标准，列表示达成水平/等级。每个单元格描述了该水平下的具体表现，使评分更加透明和一致。' },
  { question: '为什么评估标准的权重之和必须等于100%？', answer: '100%的总和使评分模型更加明确。如果总和低于或高于100%，学生和评分者就无法清楚地理解每个标准对最终分数的贡献程度。' },
  { question: '学生可以使用这个工具吗？', answer: '可以。学生可以使用它来逆向理解作业要求、规划草稿，或在提交前创建互评清单。' },
  { question: '包含哪些导出选项？', answer: '导出CSV格式对电子表格和LMS（学习管理系统）设置非常有用。打印按钮将打开浏览器打印流程，您可以通过系统打印对话框将其保存为PDF。' },
];

const howToItems = [
  { name: '编辑标准', text: '点击任何评估标准的名称，将其替换为您想要评估的技能、产出或要求。' },
  { name: '设置权重', text: '调整各个百分比，直到实时权重条显示正好100%平衡的量规。' },
  { name: '描述达成水平', text: '点击每个描述单元格，填写该表现水平下可观察到的表现证据。' },
  { name: '根据需要调整结构', text: '使用添加按钮创建额外的标准或达成等级，并删除不需要的行或列。' },
  { name: '导出或打印', text: '下载CSV以便导入电子表格，或使用打印功能生成干净的PDF版本。' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: '评估标准',
    weightHeader: '权重',
    levelSectionLabel: '达成水平',
    levelBadgePrefix: 'L',
    addCriterion: '添加标准',
    addLevel: '添加水平',
    removeCriterion: '删除标准',
    removeLevel: '删除水平',
    exportCsv: '导出 CSV',
    printRubric: '打印 / PDF',
    csvFilename: 'rubric-matrix.csv',
    pdfDocumentTitle: '量规评价矩阵',
    pdfImageAlt: '量规评价矩阵',
    confirmDeleteTitle: '删除此标准？',
    confirmDeleteText: '这会删除该标准以及为该达成等级所撰写的所有具体表现描述。',
    cancelDelete: '取消',
    confirmDelete: '删除标准',
    totalWeight: '总权重配比',
    balanced: '精确平衡在100%',
    under: '添加权重以达到100%',
    over: '减少权重以恢复到100%',
    emptyCell: '点击编辑',
    newCriterionTemplate: '标准 {index}',
    newDescriptorTemplate: '描述 {index}.{level}',
    newLevelTemplate: '水平 {index}',
    defaultLevels: [
      { name: '优秀', score: 4 },
      { name: '熟练', score: 3 },
      { name: '发展中', score: 2 },
      { name: '起步', score: 1 },
    ],
    defaultCriteria: [
      {
        name: '论证质量',
        weight: 35,
        cells: [
          '论点清晰，推理细致深入',
          '论点清晰，推理充分合理',
          '有论点但推理不够连贯',
          '论点不清晰或缺失',
        ],
      },
      {
        name: '论据使用',
        weight: 30,
        cells: [
          '论据精确，且与论点高度整合',
          '论据支持大部分论点',
          '论据泛泛或与论点关联较弱',
          '论据缺失或不准确',
        ],
      },
      {
        name: '组织结构',
        weight: 20,
        cells: [
          '结构引导流畅，阅读体验好',
          '结构合乎逻辑',
          '结构有跳跃或重复现象',
          '结构混乱，难以跟进',
        ],
      },
      {
        name: '学术规范',
        weight: 15,
        cells: [
          '文风精炼，学术规范精准',
          '次要错误不影响意思表达',
          '错误频繁，分散读者注意力',
          '错误严重影响表达，意思模糊',
        ],
      },
    ],
    faqTitle: '常见问题解答',
    bibliographyTitle: '参考文献与学术资源',
  },
  seo: [
    { type: 'title', text: '设计学生真正能用的评估量规', level: 2 },
    { type: 'paragraph', html: '一个优秀的评估量规不仅仅是一个评分表，它是一张共享的表现期望地图。学生在提交作业前用它理解高品质的标准，教师用它实现更一致的评分，审阅者用它解释反馈以减少分歧。该设计器使结构可视化：标准、权重、达成等级和描述都集中在一个可编辑的矩阵中。' },
    { type: 'diagnostic', variant: 'warning', title: '量规何时需要修改', html: '<ul><li>多个评估维度过于重叠，以至于同一个错误被重复扣分。</li><li>权重总和不等于100%，这使最终成绩的解释变得困难。</li><li>描述性文字过于模糊，如\'好\'、\'弱\'或\'优秀\'，缺乏可观察的表现证据。</li><li>划分等级过多，评分者难以保持一致且可信地加以区分。</li></ul>' },
    { type: 'title', text: '选择标准与权重', level: 3 },
    { type: 'table', headers: ['量规元素', '良好实践', '常见问题'], rows: [['评估标准', '评估彼此独立的技能或产出，如论证、证据、方法、准确性或表达呈现。', '在单行中混合多种技能导致反馈模糊不清。'], ['权重配比', '使权重与教学优先事项及作业目的保持一致。', '即便某些学习产出更重要，仍给每一行赋予相同的权重。'], ['水平等级', '使用3至5个评分者可以一致区分的等级。', '增加许多表达字眼仅有细微差别的冗余等级。']] },
    { type: 'comparative', title: '分析型量规 vs 整体型量规', columns: 2, items: [{ title: '分析型量规', description: '将表现拆分为独立标准与权重。最适合学生需要针对性反馈，或多个评分者之间需要对齐标准的情况。', highlight: true, points: ['评分透明度高', '反馈具体针对性强', '适用于复杂任务评估'] }, { title: '整体型量规', description: '给出单一的整体判断。评分速度更快，但较难为修改或学生互评提供诊断性价值。', points: ['评分过程更快', '适用于快速检查', '反馈细节较少'] }] },
    { type: 'tip', html: '<strong>具体表现描述应当基于证据，而非形容词。</strong> 相比于使用\'分析出色\'这类表述，更应该写明出色分析的具体行为：将证据与论点联系起来、阐述局限性并说明为什么论据具有重要性。' },
    { type: 'title', text: '如何验证加权量规', level: 3 },
    { type: 'paragraph', html: '权重传递了教学优先级。一个占40%权重的标准与占10%权重的标准相比，会引导学生投入不同的精力。本工具的实时计算非常严格：只有总和正好为100%时量规才能平衡。如果总和低于100%，部分成绩权重将处于未定义状态。如果超过100%，则会超出分值模型并引起混乱。' },
    { type: 'summary', title: '实用的量规工作流', items: ['在编写行之前，先明确学习成果/教学目标。', '将矩阵限制在那些确实会影响反馈的标准上。', '使用简单、可观察的语言草拟具体表现描述。', '在分享量规之前，验证权重是否达到100%。', '需要电子表格或LMS设置时导出CSV文件。'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
