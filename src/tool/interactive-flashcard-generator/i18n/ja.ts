import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = 'インタラクティブな単語帳ジェネレーターと学習デッキ';
const description = 'アクティブリコールと分散学習で学習効率を高めましょう。カスタム単語帳の作成、3D回転表示での学習、デッキの書き出し/読み込みに対応。';

const faqItems = [
  { question: 'アクティブリコールとは何ですか？', answer: 'アクティブリコールとは、受動的にノートを読むのではなく、記憶を呼び起こすことで脳を刺激する学習法です。' },
  { question: '分散学習はどのように機能しますか？', answer: '難しいカードを頻繁に、簡単なカードをたまに復習することで、長期的な記憶定着を図ります。' },
  { question: '単語帳を保存するにはどうすればいいですか？', answer: '単語帳をJSONファイルとしてエクスポートできます。後で学習を再開する場合は、インポートボタンを押してそのファイルをロードするだけです。' },
  { question: '簡単・普通・難しいの評価は何に役立ちますか？', answer: '覚えている度合いを分類するのに役立ちます。ライトナーシステムでは、難しいカードがより頻繁に出題され復習されます。' },
];

const howToItems = [
  { name: 'カードを作成する', text: '表に質問、裏に答えを入力し、「カードを追加」をクリックします。' },
  { name: 'デッキをめくる', text: 'ビューア内のカードをクリックすると、回転して答えが表示されます。' },
  { name: '記憶を評価する', text: '「簡単」「普通」「難しい」ボタンを使って、答えをどれだけスムーズに思い出せたかを評価します。' },
  { name: 'セッションを保存する', text: 'エクスポートボタンを押してデッキをダウンロードし、後で復習できるようにします。' },
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
    cardCreator: '単語帳作成',
    questionLabel: '表（質問）',
    answerLabel: '裏（答え）',
    addCard: 'カードを追加',
    questionPlaceholder: '例: フランスの首都はどこですか？',
    answerPlaceholder: '例: パリ',
    reviewMode: '学習セッション',
    cardIndex: 'カード',
    flipCard: 'クリックで回転',
    nextCard: '次へ',
    prevCard: '前へ',
    easy: '簡単',
    medium: '普通',
    hard: '難しい',
    resetSession: '進行状況をリセット',
    importExport: 'デッキ管理',
    importDeck: 'JSONを読み込む',
    exportDeck: 'JSONを書き出す',
    exportSelected: '選択したカテゴリを書き出す',
    exportAll: 'すべて書き出す',
    emptyDeckWarning: 'デッキが空です。カードを作成するか、デッキを読み込んで学習を開始してください。',
    sampleQuestion1: 'アクティブリコールとは何ですか？',
    sampleAnswer1: '学習プロセス中にメモリの想起を積極的に刺激することを含む学習テクニック。',
    sampleQuestion2: '忘却曲線の仮説を定式化したのは誰ですか？',
    sampleAnswer2: '時間の経過とともに情報を忘れることの指数関数的な性質を研究したヘルマン・エビングハウス。',
    aiPromptGenerator: 'AI単語帳アシスタント',
    aiTopicsLabel: '試験のトピックやメモを入力してください',
    aiTopicsPlaceholder: '例: 微分、積分、極限をカバーする数学の試験...',
    generatePromptBtn: 'AIプロンプトを生成',
    aiPromptOutputLabel: 'このプロンプトをChatGPTやGeminiにコピーしてください',
    copyPromptBtn: 'クリップボードにコピー',
    selectAll: 'すべて選択',
    deleteCategory: 'カテゴリを削除',
    deleteConfirmMsg: 'このカテゴリとすべてのカードを削除してもよろしいですか？',
    cancel: 'キャンセル',
    delete: '削除',
    pasteJsonTitle: '単語帳のJSONを貼り付け',
    pasteJsonPlaceholder: 'AIによって生成されたJSONをここに貼り付けてください...',
    importBtn: '読み込み',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'アクティブリコールと分散学習による効率的な暗記学習', level: 2 },
    { type: 'paragraph', html: '単語帳は長期的な記憶定着に最も効果的なツールの一つです。能動的な思い出しと評価を組み合わせることで、記憶の弱い箇所を効率よく補強できます。' },
    { type: 'title', text: 'アクティブリコールと受動的学習の比較', level: 3 },
    { type: 'paragraph', html: '多くの学生はノートや教科書をただ読み返します。しかし認知科学が示すように、真の学習は脳を刺激して情報を能動的に引き出すことで得られます。' },
    { type: 'table', headers: ['学習方法', '認知的な関与度', '記憶の定着率', '最適な用途'], rows: [
      ['インタラクティブ単語帳', '高い（アクティブリコール）', '非常に高い', '語彙、公式、重要な概念、日付。'],
      ['要約ノート作成', '中程度（統合）', '普通', '複雑な議論の理解。'],
      ['ノートの読み返し', '低い（受動的）', '低い', '新しい情報への初めての接触。'],
    ] },
    { type: 'title', text: '単語帳学習のメリットとデメリット', level: 3 },
    {
      type: 'proscons',
      title: '単語帳学習のメリットと制限の比較',
      items: [
        { pro: '受動的な認識ではなく、能動的な記憶の引き出しを促す。', con: '最初にカードを作成するのに手間がかかる。' },
        { pro: '覚えている部分とそうでない部分を瞬時に特定。', con: '非常に複雑な理論や文脈の深い理解には不向き。' },
        { pro: 'どんな科目にも簡単にカスタマイズ可能。', con: '分散学習の効果を得るためには継続的な学習が必要。' }
      ]
    },
    { type: 'title', text: 'AIを活用した単語帳の自動作成', level: 3 },
    { type: 'paragraph', html: '単語帳の手作業入力は面倒な場合があります。当ツールの<strong>AIアシスタント</strong>を使って、講義ノートを簡単にJSON形式のデッキに変換できます。テーマを入力し、プロンプトをChatGPTやGeminiに貼り付け、結果をインポートするだけです。' },
    { type: 'title', text: 'グループ学習：カテゴリ選択エクスポートとマージ機能', level: 3 },
    { type: 'paragraph', html: '作業を分担してグループで勉強すると効率的です。本ツールは、任意のカテゴリのみをエクスポートできます。インポートの際は、友達の既存のデッキを削除せず、新しく**マージ**（merge）します。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
