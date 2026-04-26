import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow';
const description = '禅のような集中力を実現する時間管理ツール。作業と休憩のサイクルをカスタマイズし、中断を記録して、集中力のパターンをリアルタイムで視覚化します。';

const faqItems = [
  { question: 'ポモドーロ・テクニックとは何ですか？', answer: 'ポモドーロ・テクニックは、集中して作業する時間（通常25分）と短い休憩を繰り返す時間管理術です。このツールでは、サイクルのカスタマイズや詳細な分析機能が追加されています。' },
  { question: '作業時間や休憩時間を変更できますか？', answer: 'はい。3つのプリセット（種：25/5、樹：50/10、山：90/15）から選ぶか、+5分/-5分ボタンでその都度調整が可能です。' },
  { question: '中断記録機能は何のためのものですか？', answer: '気が散った時にボタンをクリックすると、中断が記録されます。これにより、あなたの「集中スコア」を算出し、集中力が途切れやすいパターンを把握できます。' },
  { question: '集中スコアはどのように計算されますか？', answer: '集中スコア = ((作業時間 - 中断回数 × 2) / 作業時間) × 100。これはタスクの切り替えによる認知コストを考慮した指標です。' },
  { question: 'セッションデータをエクスポートできますか？', answer: 'はい。セッションの概要をMarkdown形式でコピー（NotionやObsidianに最適）したり、視覚的な要約をSNSで共有したりできます。' },
];

const howToItems = [
  { name: 'タスクを入力する', text: 'これから取り組む内容を入力します。これにより、目的意識とコンテキストを維持しやすくなります。' },
  { name: 'サイクルを選ぶ', text: '手軽なタスクには「種（25/5）」、標準的な作業には「樹（50/10）」、深い集中が必要な時には「山（90/15）」を選びます。' },
  { name: '開始して集中する', text: 'タイマーが始まります。リングをクリックすると一時停止できます。調整が必要な場合は+5/-5を使用します。タブのタイトルバーで残り時間を確認できます。' },
  { name: '中断を記録する', text: '気が散ってしまいましたか？「中断アラート」ボタンをクリックしてください。集中スコアを計算するために記録されます。' },
  { name: '成果を確認する', text: 'セッション終了後、集中スコア、タスクの内訳、月間の生産性ヒートマップなどの統計データを確認します。' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: '何に取り組む予定ですか？',
    selectCycle: '集中サイクルを選択',
    startButton: '開始',
    seed: '種',
    tree: '樹',
    mountain: '山',
    timer: 'タイマー',
    pauseButton: '一時停止',
    resumeButton: '再開',
    distractionButton: '中断アラート',
    addFiveMin: '+5分',
    subtractFiveMin: '-5分',
    focusMode: '集中',
    breakTime: '休憩',
    sessionComplete: 'セッション完了',
    endSession: 'セッション終了',
    focusScore: '集中スコア',
    totalTime: '合計時間',
    interruptions: '中断回数',
    taskBreakdown: 'タスクの内訳',
    monthlyHeatmap: '月間アクティビティ',
    copyMarkdown: 'Markdownをコピー',
    shareImage: '共有',
    wellnessMessage: 'お疲れ様でした。ゆっくり休憩してください。',
    sessionSummary: 'セッションの概要',
    newSession: '新しいセッション',
    copied: 'コピーしました！',
    unnamedTask: '無題のタスク',
    breakTimeNotification: '休憩時間です！',
    focusTimeNotification: '集中する時間です！',
    interruptionsLabel: '中断：',
    studySession: '学習セッション',
  },
  seo: [
    { type: 'title', text: 'Pomodoro Flowで究極の集中力を手に入れる', level: 2 },
    { type: 'paragraph', html: '生産性とは長時間働くことではなく、賢く働くことです。<strong>Pomodoro Flow</strong>は、実績あるポモドーロ・テクニックに禅の精神に基づいたデザインとリアルタイム分析を融合させ、あなたが最も効率的に働くための「仕組み」を理解する手助けをします。' },
    { type: 'title', text: 'なぜポモドーロは効果的なのか', level: 3 },
    { type: 'paragraph', html: '人間は8時間連続で超集中し続けるようにはできていません。私たちの脳は、集中した作業と休息を繰り返すサイクルで最大のパフォーマンスを発揮します。ポモドーロ・テクニックは、このリズムを「25分集中して5分休む」というシンプルな習慣に変えます。' },
    { type: 'paragraph', html: 'しかし、タスクによって最適な時間は異なります。Pomodoro Flowでは、軽いタスク用の<strong>種</strong>（25/5）、日常的な作業用の<strong>樹</strong>（50/10）、そして深い思考を要する作業用の<strong>山</strong>（90/15）の3つのサイクルを用意しています。' },
    { type: 'title', text: '中断の記録：集中力を数値化する', level: 3 },
    { type: 'paragraph', html: '50分間デスクに向かっていても、5回中断していれば、その都度コンテキスト・スイッチによる認知コストが発生しています。Pomodoro Flowでは「中断アラート」ボタン一つでこれを記録し、あなたの本当の集中度を示す<strong>集中スコア</strong>を算出します。' },
    { type: 'paragraph', html: '継続して使用することで、どのタスクや時間帯、環境があなたにとって最適な集中をもたらすかが可視化されます。そこが、あなたの最も価値ある仕事が生まれる場所です。' },
    { type: 'title', text: '集中を妨げない機能', level: 3 },
    { type: 'list', items: [
      '禅テック・デザイン：ダークモード、グラスモーフィズム、そしてタイマー以外の情報を取り除いたミニマルな画面。',
      'ライブ・タイトルバー：ブラウザのタブにカウントダウンが表示されるため、一瞬で残り時間を確認可能。',
      '柔軟な時間調整：セッションを中断することなく、その場で作業・休憩時間を調整できます。',
      'セッション・エクスポート：概要をMarkdownでコピーしたり、SNS共有用の画像を生成したりできます。',
      '月間ヒートマップ：生産性のパターンを把握。あなたのピーク・パフォーマンスは何曜日ですか？',
    ] },
    { type: 'title', text: '「フロー状態」の心理学', level: 3 },
    { type: 'paragraph', html: '心理学者のミハイ・チクセントミハイは、挑戦とスキルが一致し、時間の感覚が消える状態を<strong>フロー</strong>と定義しました。Pomodoro Flowは、雑念を排除し、明確な時間制限を設け、即時のフィードバックを与えることで、フロー状態に入るための3つの条件を整えます。' },
    { type: 'tip', html: '<strong>プロのコツ：</strong> フロー状態にある時は、タイマーが鳴っても無理に中断しないでください。「再開」を押して勢いを維持しましょう。中断を記録することで、外部からの邪魔と、自分自身のポジティブな勢いの違いが明確に見えてきます。' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
