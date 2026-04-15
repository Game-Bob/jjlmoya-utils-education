import type { ToolLocaleContent } from '../../../types';

const slug = 'citation-generator' as const;
const title = '引用文献作成ツール' as const;
const description = 'APA、MLA、バンクーバー形式の自動参照文献を、保存機能付きで作成できます。' as const;
const faqTitle = 'よくある質問' as const;
const bibliographyTitle = '参考文献' as const;

const ui = {
    format: '形式',
    book: '書籍',
    website: 'ウェブサイト',
    article: '記事・論文',
    publicationYear: '発行年',
    authors: '著者（姓, 名のイニシャル）',
    title: 'タイトル',
    publisher: '出版社・発行元',
    locationUrl: '場所 / URL',
    preview: 'プレビュー',
    saveToList: 'リストに保存',
    mySavedCitations: '保存済みの引用文献',
    noSavedCitations: '保存された引用文献はありません。',
    clickToCopy: '引用文献をクリックすると直接コピーできます',
    apa: 'APA (第7版)',
    mla: 'MLA (第9版)',
    vancouver: 'バンクーバー',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: '引用文献作成ツール：APA、MLA、バンクーバー形式をマスターする', level: 2 },
    { type: 'paragraph', html: '出典を正しく引用することは、単なる学術的倫理の問題ではありません。自分の仕事に信頼性を与え、盗作（プラギオリズム）を避けるための基礎となります。当ツールを使用すると、世界で最も広く使用されている形式で自動的に参照文献を生成できます。' },
    { type: 'title', text: '最も重要な引用スタイル', level: 3 },
    { type: 'paragraph', html: '研究分野によって、特定の形式の使用が求められます。これは教授の気まぐれではなく、各スタイルが各専門分野にとって最も関連性の高い情報を優先するように設計されているためです。' },
    { type: 'title', text: 'APA（社会科学）', level: 4 },
    { type: 'paragraph', html: '<strong>アメリカ心理学会</strong>によって作成され、研究に歴史的背景を提供するために発行日に焦点を当てています。心理学、教育学、社会学の標準です。' },
    { type: 'title', text: 'バンクーバー（医学）', level: 4 },
    { type: 'paragraph', html: '出典が出現順に引用される数値システムです。バイオ医学や健康科学における普遍的な形式であり、多数の参考文献を含むテキストの読みやすさを向上させます。' },
    { type: 'title', text: '書籍をステップバイステップで引用する方法は？', level: 3 },
    { type: 'paragraph', html: '当ツールはこれを自動化しますが、基本要素を知っておくことで、物理的またはデジタルの出典からどのような情報を収集する必要があるかを判断するのに役立ちます。' },
    { type: 'list', items: ['<strong>著者：</strong> 姓の後に名のイニシャルを続けます。', '<strong>年：</strong> スタイルに応じて、括弧内または最後に発行年を記載します。', '<strong>タイトル：</strong> 書籍や全集の場合はイタリック体で表示する必要があります。', '<strong>出版社：</strong> 作品の出版に責任を持つ企業。', '<strong>URL：</strong> デジタル出典の場合は、恒久的な場所を示す直接リンクまたはDOI。'] },
    { type: 'title', text: '形式間の視覚的な違い', level: 3 },
    { type: 'table', headers: ['要素', 'APA (第7版)', 'MLA (第9版)', 'バンクーバー'], rows: [['著者', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['日付', '(2024)', '2024.', '2024.'], ['タイトル', 'イタリック体', '引用符内', '標準']] },
    { type: 'tip', html: '常に所属機関の特定のガイドを確認してください。APAは世界標準ですが、多くの大学には独自のローカルなバリエーションがあったり、特定の版の使用が義務付けられていたりします。' },
    { type: 'title', text: '学術的盗作を避ける', level: 3 },
    { type: 'paragraph', html: '盗作は常に意図的であるとは限りません。メモの取り方が不注意であったり、自分の考えではないアイデアをどのように参照すればよいかを知らなかったりすることでよく発生します。このような引用ジェネレーターを使用することで、学術的な誠実さを守りながら、各著者が当然受けるべき評価を確実に受けることができます。' },
    { type: 'paragraph', html: '自分の言葉でアイデアを言い換えたとしても、テキスト内に該当する引用を、巻末の参考文献リストにその参照を必ず含める必要があることを忘れないでください。' },
];

const faq = [
    {
        question: 'ジェネレーターはどの形式をサポートしていますか？',
        answer: '現在は、社会科学、人文科学、保健分野で最も一般的な形式であるAPA（第7版）、MLA（第9版）、およびバンクーバー形式をサポートしています。',
    },
    {
        question: '自分の引用文献を保存できますか？',
        answer: 'はい。ジェネレーターは履歴をブラウザのローカルストレージに自動的に保存するため、後で確認することができます。',
    },
    {
        question: 'APAとバンクーバーの違いは何ですか？',
        answer: 'APAは著者・日付システム（Perez, 2024）を使用し、バンクーバーはテキスト内の出現順の数値システムを使用します。',
    },
    {
        question: '引用文献作成ツールは無料ですか？',
        answer: '完全に無料です。学生や専門家が学術論文を執筆するのを支援するために設計された無料のツールです。',
    },
] as const;

const howTo = [
    {
        name: '出典の種類を選択する',
        text: '出典が書籍、ウェブサイト、または専門雑誌の記事であるかを選択します。',
    },
    {
        name: 'データを入力する',
        text: '著者、タイトル、年、および出版社またはURLを入力します。入力するデータが多いほど、引用はより正確になります。',
    },
    {
        name: 'コピーまたは保存',
        text: 'ワンクリックで引用文献を直接コピーするか、「リストに保存」を押して永続的な履歴に追加します。',
    },
] as const;

const bibliography = [
    {
        name: 'APAスタイルマニュアル 第7版',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'MLAスタイルガイド (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'バンクーバー・ガイドライン - ICJME',
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
