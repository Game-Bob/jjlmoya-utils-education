import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'transcript-gpa-parser' as const;
const title = '成績証明書 GPA抽出・計算機';
const description = '大学の成績データをコピー＆ペーストするだけで、累積GPAと加重平均点を瞬時に計算できます。完全にオフラインで動作します。';

const faqItems = [
  {
    question: '自動解析はどのように行われますか？',
    answer: 'ペーストされたテキストを1行ずつスキャンし、スペース、タブ、または記号に基づいて列に分割します。その後、各値を分析して、どの列に科目名、成績、単位数が含まれているかを自動的に判定します。'
  },
  {
    question: '学業データは安全ですか？',
    answer: 'はい、完全に安全です。データの解析やGPAの計算はすべてお使いのデバイス上のブラウザ内で行われます。データがサーバーに送信されることは一切なく、成績情報は100%プライベートに保たれます。'
  },
  {
    question: '列が誤ってマッピングされた場合はどうすればよいですか？',
    answer: '簡単に調整できます。検出された表の各列にはドロップダウン形式のヘッダーがあり、その列が「科目名」、「成績」、「単位数」のどれを表すか、あるいは「無視」するかを手動で選択できます。'
  },
  {
    question: 'レターグレード（評価値）や異なる評価基準に対応していますか？',
    answer: 'はい、一般的なレターグレード（A、B、C、D、F）に加え、数値による評価基準（0-10、0-20、0-100）にも対応しています。大学の評価システムに合わせて、評価基準の最大値を設定できます。'
  }
];

const howToItems = [
  {
    name: '成績データをコピーする',
    text: '大学のポータルサイトや成績表のページを開き、テキストを選択してコピーします。'
  },
  {
    name: 'テキストを貼り付ける',
    text: 'コピーしたテキストをこのツールの入力欄に貼り付けます。'
  },
  {
    name: '確認とマッピング',
    text: '自動生成された表を確認します。必要に応じて、ヘッダーを使って各列の役割を調整します。'
  },
  {
    name: 'GPAを確認する',
    text: '下部に瞬時に計算されて表示される、加重平均GPAと総取得単位数を確認します。'
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
    pasteAreaLabel: 'ここに成績データを貼り付けてください',
    pasteAreaPlaceholder: 'Moodle、Canvas、または大学の成績証明書ページからコピーしたテキストを貼り付けてください...',
    parsedTitle: '解析された成績データ',
    columnSelect: '列のマッピング',
    subjectName: '科目名',
    grade: '成績',
    credits: '単位数',
    ignore: '無視する',
    gpaResult: '累積GPA',
    totalCredits: '総取得単位数',
    emptyState: '上に成績データを貼り付けると、ここにプレビューが表示され、行を編集できます。',
    scaleLabel: '成績評価基準の上限',
    customScale: '評価基準の最大値',
    exampleSubject: '解析学 I',
    newSubjectPlaceholder: '新しい科目',
    clearBtn: 'テキストをクリア',
    errorFormat: '明確な列を検出できませんでした。表形式やリスト形式のテキストをコピーして貼り付けてみてください。'
  },
  seo: [
    { type: 'title', text: 'あらゆる成績証明書からGPAを解析・計算する方法', level: 2 },
    { type: 'paragraph', html: '学業成績の平均を計算するために、何十もの授業を手動で入力する必要はありません。このツールは、コピー＆ペーストされた未加工のテキストからデータを抽出し、GPAを算出します。' },
    { type: 'title', text: 'なぜ成績データの自動抽出機能を使うべきなのか？', level: 3 },
    { type: 'paragraph', html: '大学のポータルサイトでは、成績表が複雑なHTMLの表形式で表示されることがよくあります。テキストをそのまま本ツールにコピー＆ペーストするだけで、独自の解析エンジンが科目名、成績、単位数を瞬時に抽出し、入力ミスを防ぎます。' },
    { type: 'title', text: '安全、プライベート、そして高速', level: 3 },
    { type: 'paragraph', html: '解析エンジンはJavaScriptを用いてローカル（ブラウザ内）で動作するため、成績データがお使いのブラウザ外に送信されることはありません。何百行にも及ぶページでも、わずか数ミリ秒で解析できます。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
