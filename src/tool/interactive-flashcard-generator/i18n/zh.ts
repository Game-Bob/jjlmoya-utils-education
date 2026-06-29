import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = '互动式卡片生成器与学习牌组';
const description = '通过主动回忆和间隔重复提高学习效率。创建自定义学习卡，体验3D卡片翻转学习，支持牌组的导入和导出。';

const faqItems = [
  { question: '什么是主动回忆？', answer: '主动回忆是一种学习原理，通过主动检索信息来测试记忆，而不是被动地阅读或浏览笔记。' },
  { question: '间隔重复是如何工作的？', answer: '间隔重复是一种在增加的时间间隔内，更频繁地复习困难的卡片，而较少地复习简单的卡片，以优化长期记忆的方法。' },
  { question: '如何保存我自定义的卡片？', answer: '您可以将您的牌组导出为 JSON 文件。之后要继续学习，只需点击导入按钮并上传该文件即可。' },
  { question: '简单、一般和困难的评估有什么用？', answer: '它们帮助您分类对卡片的掌握程度。在莱特纳（Leitner）系统中，较难的卡片会被更频繁地复习，以强化神经元连接。' },
];

const howToItems = [
  { name: '创建卡片', text: '在正面（问题）输入问题或概念，在背面（答案）输入回答或解释，然后点击添加卡片。' },
  { name: '复习牌组', text: '点击视窗内的卡片即可翻转并显示答案。' },
  { name: '评估记忆', text: '使用简单、一般或困难按钮评估您回忆答案的轻松程度。' },
  { name: '保存学习进度', text: '使用导出按钮下载您的自定义牌组，以便日后重新加载。' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: '创建卡片',
    questionLabel: '正面 (问题)',
    answerLabel: '背面 (答案)',
    addCard: '添加卡片',
    questionPlaceholder: '例如：法国的首都是哪里？',
    answerPlaceholder: '例如：巴黎',
    reviewMode: '学习环节',
    cardIndex: '卡片',
    flipCard: '点击翻转',
    nextCard: '下一张',
    prevCard: '上一张',
    easy: '简单',
    medium: '一般',
    hard: '困难',
    resetSession: '重置进度',
    importExport: '牌组管理',
    importDeck: '导入 JSON',
    exportDeck: '导出 JSON',
    exportSelected: '导出所选分类',
    exportAll: '导出全部',
    emptyDeckWarning: '您的牌组为空。请创建卡片或导入牌组开始学习。',
    sampleQuestion1: '什么是主动回忆？',
    sampleAnswer1: '一种学习技术，涉及在学习过程中主动刺激记忆检索。',
    sampleQuestion2: '谁制定了遗忘曲线假设？',
    sampleAnswer2: '赫尔曼·艾宾浩斯（Hermann Ebbinghaus），他研究了随着时间的推移遗忘信息的指数性质。',
    aiPromptGenerator: 'AI卡片小助手',
    aiTopicsLabel: '输入您的考试主题或笔记',
    aiTopicsPlaceholder: '例如：涵盖导数、积分和极限的数学考试...',
    generatePromptBtn: '生成AI提示词',
    aiPromptOutputLabel: '复制此提示词到ChatGPT/Gemini',
    copyPromptBtn: '复制到剪贴板',
    selectAll: '全选',
    deleteCategory: '删除分类',
    deleteConfirmMsg: '您确定要删除此分类及其所有卡片吗？',
    cancel: '取消',
    delete: '删除',
    pasteJsonTitle: '粘贴卡片 JSON',
    pasteJsonPlaceholder: '在此粘贴由AI生成的JSON...',
    importBtn: '导入',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: '利用主动回忆和间隔重复优化您的学习策略', level: 2 },
    { type: 'paragraph', html: '卡片是公认的提高长期记忆和记忆检索能力最有效的学习工具之一。结合主动回忆和结构化的评估流程，您可以精准捕捉知识盲区。' },
    { type: 'title', text: '主动回忆与被动学习的对比', level: 3 },
    { type: 'paragraph', html: '很多学生仅仅是重新阅读教材或画线重点。然而，认知科学证明，真正的学习发生于您迫使大脑去主动提取信息的时候。' },
    { type: 'table', headers: ['学习方法', '认知参与度', '记忆保留率', '最适合用于'], rows: [
      ['互动学习卡片', '高 (主动回忆)', '极佳', '词汇、公式、核心概念、历史日期。'],
      ['总结书本段落', '中 (综合分析)', '中等', '理解复杂的故事情节和长篇论证。'],
      ['重读笔记笔记', '低 (被动浏览)', '较差', '初次接触新材料时的预习。'],
    ] },
    { type: 'title', text: '卡片暗记学习法的优缺点', level: 3 },
    {
      type: 'proscons',
      title: '学习卡优势与限制的对比',
      items: [
        { pro: '促使大脑主动提取记忆，而非被动的眼部识别。', con: '在学习初期，手工创建牌组可能会比较耗时。' },
        { pro: '能立刻清晰展现您的知识漏洞。', con: '不太适合深入理解极其复杂的逻辑网络或长篇大论。' },
        { pro: '高度便携且易于为任何科目定制。', con: '需要稳定的复习纪律以获得间隔重复带来的效果。' }
      ]
    },
    { type: 'title', text: 'AI驱动的卡片自动生成', level: 3 },
    { type: 'paragraph', html: '手写卡片可能比较繁琐。使用我们内置的<strong>AI卡片小助手</strong>，即可将教学大纲或书本笔记快速生成适合导入的牌组。写下考试主题，生成AI提示词并粘贴到ChatGPT/Gemini等AI模型中即可。' },
    { type: 'title', text: '组团学习：部分导出与平滑合并', level: 3 },
    { type: 'paragraph', html: '在小组中分工合作能让复习事半功倍。您可以在此仅选择导出特定分类。在朋友导入该文件时，系统会在保留他原本学习记录的同时，**合并**（merge）新导入的分类。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
