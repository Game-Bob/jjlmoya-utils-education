import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'concept-map-text-exporter' as const;
const title = '概念图文本导出器';
const description = '将缩进格式的笔记转换为具有可拖拽节点、可折叠分支、缩放控制以及支持导出为 SVG 或 PNG 的交互式概念图。';

const faqItems = [
  { question: '我可以将什么样格式的文本粘贴到概念图生成器中？', answer: '使用简单的提纲格式：每行写一个想法，用缩进表示子主题。支持项目符号、编号列表、制表符（Tab）和空格，因此从文档、课堂总结或学习软件中复制的笔记通常无需手动重新排版即可直接转换。' },
  { question: '如何设置缩进才能生成最整洁的概念图？', answer: '将核心主题放在第一行，然后在下方缩进写出支撑想法。保持同一层级的想法对齐在相同的缩进深度。如果一个节点出现在错误的父节点下，通常只需要调整其缩进级别即可。' },
  { question: '概念图生成后，我可以移动节点吗？', answer: '可以。您可以拖动画布上的任意节点来优化间距、分隔密集分支或突出显示某种关系。您还可以在导出前平移画布、放大或缩小以及折叠分支。' },
  { question: '导出 SVG 和 PNG 有什么区别？', answer: 'SVG 是可编辑的矢量图，在矢量编辑器、幻灯片和文档中可以无损缩放。PNG 是固定大小的图片，更便于上传到课程平台、发送消息、插入工作表和制作快速复习卡片。' },
  { question: '这个工具会自动分析并生成交叉链接吗？', answer: '不会。它完全根据缩进构建树状层级关系。这保证了输出的预测性，但像因果、对比或反馈环等横向交叉链接需要在导出 SVG 后手动添加和调整。' },
];

const howToItems = [
  { name: '粘贴或编写提纲', text: '每行输入一个概念，并在父主题下方缩进编写子想法。' },
  { name: '检查生成的结构', text: '使用交互式画布，查看层级结构是否符合学习该主题的逻辑。' },
  { name: '整理画布布局', text: '拖拽节点、折叠拥挤的分支并调整缩放，直到视觉分组清晰明了。' },
  { name: '导出为学习资料', text: '下载 SVG 用于二次编辑，或下载 PNG 用于快速分享、工作表和幻灯片展示。' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: '缩进提纲',
    sampleButton: '加载示例',
    clearButton: '清空',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: '放大',
    zoomOut: '缩小',
    resetView: '重置视角',
    exportSvg: '导出 SVG',
    exportPng: '导出 PNG',
    collapseBranch: '折叠分支',
    expandBranch: '展开分支',
    emptyStateTitle: '暂无概念',
    emptyStateText: '每行输入一个想法并缩进子主题，即可开始构建概念图。',
    nodeCount: '个概念',
    depthCount: '层级',
    branchCount: '条连接线',
    levelPrefix: 'L',
    untitledNodeLabel: '未命名',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'concept-map.svg',
    pngFilename: 'concept-map.png',
    sampleOutline: `研究项目
  研究问题
    正在调查什么问题？
    谁受到了影响？
  论据支撑
    第一手资料
    学术论文
    数据集
  研究方法
    抽样计划
    分析步骤
  研究结论
    主要发现
    局限性
    下一个研究问题`,
    faqTitle: '常见问题',
    bibliographyTitle: '参考文献与学术资源',
  },
  seo: [
    { type: 'title', text: '将缩进笔记转换为概念图', level: 2 },
    { type: 'paragraph', html: '概念图对于将凌乱零散的知识点整理成体系非常有用。它展示了哪些是核心想法，哪些是支撑细节，并能帮助学生理清易混淆的类别、案例、因果关系和结论。该生成器专门针对学生已有的笔记格式设计：直接粘贴带有缩进的提纲，微调层级，然后利用交互式画布整理出清晰直观、适合复习的概念图。' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: '每行一个概念' }, { value: '2+', label: '支持多级缩进' }, { value: 'SVG', label: '可编辑格式导出' }, { value: 'PNG', label: '方便分享的图片格式' }] },
    { type: 'diagnostic', variant: 'info', title: '获得准确概念图的最佳输入格式', html: '<ul><li>在最上方单独的一行中写下主要主题。</li><li>在子主题所解释、支撑、定义或举例说明的节点下方进行缩进。</li><li>保持同级想法对齐在相同的缩进深度。</li><li>可随意使用项目符号或数字列表，常见的列表标记会被自动清除。</li><li>尽量保持节点标签简短且具有描述性。详细解释应写在你的笔记中，而不是塞进每一个节点里。</li></ul>' },
    { type: 'title', text: '如何调整不够美观或混乱的概念图', level: 3 },
    { type: 'table', headers: ['常见问题', '可能原因', '如何修复'], rows: [['细节显示在错误的父主题下', '缩进级别太浅或太深。', '向左或向右移动该行文本，直到它位于正确的父概念下方。'], ['概念图横向过宽', '在同一层级上放置了太多的想法。', '在一个更清晰的类别节点下对相关的同级项进行归类合并。'], ['概念图过于拥挤、难于学习', '节点标签写成了长句。', '将标签缩短为关键词、核心主张或提问引导词。'], ['遗漏了重要的关联关系', '提纲呈纯树状结构，但该主题包含交叉关联。', '导出为 SVG 格式，然后在图形编辑器中手动添加横向的连接线。']] },
    { type: 'comparative', columns: 3, items: [{ title: '概念图', description: '最适合展示想法之间的相互关系、先决条件、因果、论据支撑和逻辑分类。', highlight: true, points: ['关注概念间的关系', '非常适合考前复习', '有助于大声复述复习内容'] }, { title: '提纲', description: '最适合有序的笔记、文章大纲、讲义序列、操作步骤和按时间顺序排列的资料。', points: ['书写速度快', '便于快速扫视', '能承载长篇细节'] }, { title: '思维导图', description: '最适合在尚未明晰主题逻辑结构前，用于发散思维和头脑风暴建立广泛的联想。', points: ['创造性探索', '松散的分组', '无严格的等级限制'] }] },
    { type: 'tip', html: '<strong>将折叠分支作为主动回忆的工具。</strong> 折叠一个分支，根据记忆口头说出隐藏的细节，然后展开以检查遗漏的内容。这把静态的概念图变成了动态的复习卡片。' },
    { type: 'title', text: '通过视觉概念图提升学习效率的场景', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: '备考复习', description: '围绕可能的考试问题构建概念图。父节点应当是诸如原因、证据、局限性、定义或案例等引导词。', highlight: true, points: ['使用折叠分支进行回忆自测', '保持标签简短', '导出 PNG 图片制成快速复习卡'] }, { title: '研究规划', description: '使用概念图将核心研究问题与证据、方法、来源、局限性以及结论联系起来。', points: ['在根节点放置核心问题', '将证据事实与主观解释分开', '导出 SVG 用于后续修改设计'] }] },
    { type: 'message', title: '重要局限性说明', html: '缩进格式构建的是单向树状结构，而非复杂的语义网络图。如果分属不同分支的两个概念互相影响，本工具不会自动绘制它们之间的交叉横向线。请将生成的概念图视为干净的初稿，并在导出后根据需要手动添加非等级的关联线。' },
    { type: 'title', text: '导出概念图用于幻灯片、工作表 and 图形编辑器', level: 3 },
    { type: 'paragraph', html: '当您需要一份可编辑的矢量图以便在矢量编辑器、演示工具或排版设计中继续精细化时，请选择 SVG 格式。当您只需一张稳定的图片以便上传到学习管理系统、打印工作表、发在群聊或加入复习卡组时，请选择 PNG 格式。在导出之前，请整理好过于拥挤的节点，折叠次要细节，并进行缩放以确保文字在目标尺寸下依然清晰可读。' },
    { type: 'summary', title: '实用的工作流程建议', items: ['粘贴从个人笔记、AI 草稿或讲义中整理出来的粗糙提纲。', '修正缩进，直到每一个子概念都归于正确的父节点下方。', '缩短文本标签，确保节点在画布和导出的图片中保持良好的可读性。', '通过拖拽拉开过于拥挤的分支，折叠最终版中不需要展示的冗余细节。', '下载 SVG 供后续软件精修，或导出 PNG 立即进行分享。'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
