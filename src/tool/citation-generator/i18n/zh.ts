import type { ToolLocaleContent } from '../../../types';

const slug = 'citation-generator' as const;
const title = '引用格式生成器' as const;
const description = '创建具有持久存储功能的 APA、MLA 和 Vancouver 格式自动引用。' as const;
const faqTitle = '常见问题解答' as const;
const bibliographyTitle = '参考文献' as const;

const ui = {
    format: '格式',
    book: '书籍',
    website: '网站',
    article: '文章',
    publicationYear: '出版年份',
    authors: '作者（姓, 名字缩写）',
    title: '标题',
    publisher: '出版商',
    locationUrl: '位置 / URL',
    preview: '预览',
    saveToList: '保存到我的列表',
    mySavedCitations: '我保存的引用',
    noSavedCitations: '您没有保存的引用。',
    clickToCopy: '点击引用直接复制',
    apa: 'APA (第7版)',
    mla: 'MLA (第9版)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: '引用格式生成器：掌握 APA, MLA 和 Vancouver', level: 2 },
    { type: 'paragraph', html: '正确引用来源不仅是学术道德问题，也是为您的作品赋予公信力并避免剽窃的基础。我们的工具允许您生成世界上最广泛使用的自动引用格式。' },
    { type: 'title', text: '最重要的引用样式', level: 3 },
    { type: 'paragraph', html: '根据您的研究领域，您将被要求使用特定的格式。这并不是教授们的怪癖；每种样式都旨在为您所在学科最重要的信息提供优先权。' },
    { type: 'title', text: 'APA （社会科学）', level: 4 },
    { type: 'paragraph', html: '由<strong>美国心理学会</strong>创建，侧重于出版日期，为研究提供历史背景。它是心理学、教育学和社会学的标准。' },
    { type: 'title', text: 'Vancouver （医学）', level: 4 },
    { type: 'paragraph', html: '它是一种数字系统，按出现顺序引用来源。它是生物医学和健康科学中的通用格式，便于阅读具有多个参考文献的文本。' },
    { type: 'title', text: '如何一步步引用一本书？', level: 3 },
    { type: 'paragraph', html: '虽然我们的工具可以自动化执行此操作，但了解基本要素将帮助您识别需要从物理或数字资源中收集哪些信息。' },
    { type: 'list', items: ['<strong>作者：</strong> 姓氏后跟名字的首字母。', '<strong>年份：</strong> 根据样式的不同，出版年份放在括号中或放在最后。', '<strong>标题：</strong> 对于书籍和完整作品，应以斜体显示。', '<strong>出版商：</strong> 负责出版作品的公司。', '<strong>URL：</strong> 对于数字资源，为永久位置提供直接链接或 DOI。'] },
    { type: 'title', text: '各格式之间的视觉差异', level: 3 },
    { type: 'table', headers: ['元素', 'APA (第7版)', 'MLA (第9版)', 'Vancouver'], rows: [['作者', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['日期', '(2024)', '2024.', '2024.'], ['标题', '斜体', '引号内', '正常']] },
    { type: 'tip', html: '始终咨询您所在机构的具体指南。虽然 APA 是全球标准，但许多大学都有细微的本地差异，或者要求使用特定版本的标准。' },
    { type: 'title', text: '避免学术剽窃', level: 3 },
    { type: 'paragraph', html: '剽窃并不总是故意的。它通常是由于做笔记时粗心大意，或不知道如何引用不属于自己的想法造成的。使用这样的引用生成器可确保每位作者获得应有的署名，同时保护您的学术诚信。' },
    { type: 'paragraph', html: '请记住，即使您用自己的话转述了一个想法，您也必须在正文中包含相应的引用，并在最终参考文献中包含其引用项。' },
];

const faq = [
    {
        question: '生成器支持哪些格式？',
        answer: '目前它支持 APA（第7版）、MLA（第9版）和 Vancouver，这些是社会科学、人文和健康领域最常用的格式。',
    },
    {
        question: '我可以保存我的引用吗？',
        answer: '可以，生成器会自动将历史记录保存在浏览器的本地存储中，以便您稍后查阅。',
    },
    {
        question: 'APA 和 Vancouver 有什么区别？',
        answer: 'APA 使用作者-日期系统（Perez, 2024），而 Vancouver 使用按文中出现顺序排列的数字系统。',
    },
    {
        question: '引用生成器是免费的吗？',
        answer: '完全免费。它是一款旨在帮助学生和专业人士撰写学术作品的免费工具。',
    },
] as const;

const howTo = [
    {
        name: '选择来源类型',
        text: '选择您的来源是书籍、网站还是专业期刊文章。',
    },
    {
        name: '完善数据',
        text: '输入作者、标题、年份以及出版商或 URL。输入的数据越多，引用就越准确。',
    },
    {
        name: '复制或保存',
        text: '一键直接复制引用，或按“保存到我的列表”将其添加到您的持久历史记录中。',
    },
] as const;

const bibliography = [
    {
        name: 'APA 样式手册第 7 版',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'MLA 样式指南 (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Vancouver 指南 - ICJME',
        url: 'https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html',
    },
] as const;

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
} as const;

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item.name,
        text: item.text,
    })),
} as const;

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'EducationalApplication',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
} as const;

const schemas = [faqSchema, howToSchema, appSchema] as const;

export const content = {
    slug,
    title,
    description,
    faqTitle,
    bibliographyTitle,
    ui,
    seo,
    faq,
    howTo,
    bibliography,
    schemas,
} as const satisfies ToolLocaleContent;
