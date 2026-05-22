import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor' as const;
const title = '試験カウントダウン＆勉強ペースメーカー';
const description = '試験当日に万全の状態で臨むための、正確な日々の勉強ペースを計算します。学習教材の量、休息日を設定し、あなた専用の学習スケジュールを作成しましょう。';

const faqItems = [
  { question: '試験直前の詰め込み勉強よりも、毎日コツコツ勉強する方が良いのはなぜですか？', answer: '研究によると、分散学習（勉強セッションを一定期間に分散させること）は、直前の数日間にすべてを詰め込むよりも、長期的な記憶の定着が大幅に向上し、試験に対する不安を著しく軽減させることが分かっています。' },
  { question: '直前復習期間（バッファ）は何のために設定するのですか？', answer: '直前復習期間は、試験の直前の数日間を総復習専用の期間として確保するためのものです。この期間中、計算ツールは新しい教材の学習をスケジュールに入れないため、学んだ知識をしっかりと整理・定着させることができます。' },
  { question: '個別の休息日を設定すると、勉強ペースにどのように影響しますか？', answer: '週ごとの定休日や特定の日付を学習スケジュールから除外すると、計算ツールは残りの教材を他の勉強日に自動的に再分配します。そのため、期日通りに終わらせるために、残りの勉強日の目標量が少しずつ増加します。' },
  { question: '設定した休息日を、再び勉強日に戻すことはできますか？', answer: 'はい。スケジュール上の任意の日のステータスを、リアルタイムで「休息日」と「勉強日」の間で切り替えることができます。また、リストから除外日を削除することで、即座に再計算が行われます。' },
];

const howToItems = [
  { name: '試験日を入力する', text: 'カレンダー入力から、控えている試験の日付を選択します。' },
  { name: '教材の総量を入力する', text: 'ページ数、章数、問題数など、学習する必要がある教材の総量を入力します。' },
  { name: 'スケジュールと復習期間を設定する', text: '週ごとの休息日を選択し、直前復習用の期間（例：最終復習用に2日間）を設定します。' },
  { name: 'スケジュールを微調整・確認する', text: '急な予定に合わせて、カレンダー上の特定の日を直接クリックして休息日に切り替え、計画を調整します。' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'JPY' },
};

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: '学習プランナー＆カウントダウン',
    examDateLabel: '試験日',
    materialLabel: '教材の総量（ページ数 / 章数）',
    materialUnitLabel: '教材の単位',
    progressLabel: 'ここまでに完了した量',
    weeklyScheduleLabel: '週ごとの勉強日',
    reviewBufferLabel: '直前復習期間（日間）',
    excludedDatesLabel: '個別の休息日',
    dailyPaceLabel: '1日あたりの勉強ペース',
    daysLeftLabel: '試験までの残り日数',
    studyDaysLabel: '実際の勉強日数',
    bufferDaysLabel: '復習にあてる日数',
    scheduleTitle: 'あなた専用の学習カレンダー',
    resetButton: '初期設定に戻す',
    addExclusionButton: '休息日を追加',
    daysOfWeek: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    dayTypes: {
      study: '勉強日',
      rest: '休息日',
      review: '直前復習期間',
      exam: '試験当日',
    },
    units: {
      pages: 'ページ',
      chapters: '章',
      exercises: '問題',
      modules: 'モジュール',
      topics: 'トピック',
    },
    noStudyDaysError: '利用可能な勉強日がありません！週ごとのスケジュールや直前復習期間の設定を確認してください。',
    examInPastError: '試験日は将来の日付に設定してください。',
    noMaterialError: 'ゼロより大きい教材の総量を入力してください。',
    scheduleTableHeader: {
      date: '日付',
      day: '曜日',
      type: 'ステータス',
      target: '本日の目標量',
      cumulative: '全体の進捗',
      action: 'クイック操作',
    },
    markAsRest: '休息日に設定',
    markAsStudy: '勉強日に設定',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献＆学術資料',
  },
  seo: [
    { type: 'title', text: '記憶の定着を最大化する学習計画の立て方', level: 2 },
    { type: 'paragraph', html: '試験対策で重要なのは、前日の夜に何時間勉強するかではなく、学習負荷をどのように分散させるかです。適切なペースを保つことは、認知的な燃え尽き症候群を防ぎ、記憶の想起を高め、パニックを起こさずにすべての範囲をカバーするために極めて重要です。' },
    { type: 'title', text: '分散学習と間隔反復の科学', level: 3 },
    { type: 'paragraph', html: '私たちの脳は、学習セッションの間に時間的な間隔を置くことで最もよく学習します。勉強を数週間にわたって分散させると、脳内で記憶の固定化（コンソリデーション）が行われ、より強固な神経接続が形成されます。間隔反復は精神的な疲労を防ぎ、短期記憶から長期記憶への情報の移行を促します。' },
    { type: 'paragraph', html: 'エビングハウスの忘却曲線理論によれば、学んだ情報は能動的に復習しない限り、時間の経過とともに記憶から失われていきます。計画的な学習間隔は忘却を遅らせ、深い概念的な理解を築き上げるリセットとしての役割を果たします。' },
    { type: 'title', text: '直前復習のためのバッファの重要性', level: 3 },
    { type: 'paragraph', html: 'よくある失敗は、試験の直前まで新しい教材を勉強し続けようとすることです。専用の復習期間（通常、試験前の2〜5日間）を確保することで、模擬試験を解いたり、まとめノートを見直したり、苦手分野を克服したりする余裕が生まれます。また、試験当日に十分な認知能力を発揮するための睡眠時間を確保することにもつながります。' },
    { type: 'title', text: '状況に適応できる計画が持つ力', level: 3 },
    { type: 'paragraph', html: '固定された学習計画は、予期せぬ予定によって破綻しがちです。数ページでも遅れてしまうと、古いスケジュールは役に立たなくなります。状況に応じて自動計算するプランナーは、日々の目標量をリアルタイムで再計算し、軽微な遅れによるストレスを解消します。' },
    { type: 'list', items: [
      '計算の正確性を維持するために、進捗状況は定期的に入力してください。',
      '予期せぬスケジュールの競合が発生した場合は、休息日を柔軟に調整します。',
      '1日で大幅な遅れを取り戻そうとするのではなく、安定したペースを維持しましょう。'
    ] },
    { type: 'title', text: '柔軟性：計画的な休息日の組み込み', level: 3 },
    { type: 'paragraph', html: '休息はご褒美ではなく、学習プロセスにおいて不可欠な一部です。カレンダーに意識的に休息日を組み込むことで、疲労困憊を防ぎます。本プランナーは、残りの学習量を残りの勉強日に自動で均等に割り振ります。' },
    { type: 'tip', html: '<strong>不測の事態に備えましょう。</strong> 週に少なくとも1日は休息日を残しておくことをお勧めします。これは安全弁の役割を果たします。体調不良や急用が生じた場合、その日を補習日として活用すれば、全体計画を崩さずに追いつくことができます。' },
    { type: 'title', text: '学習ペースを手動で計算する方法', level: 3 },
    { type: 'paragraph', html: '1日の勉強目標を手動で計算するには、簡単な数式が使用できます。まず、総教材量から完了済みのページや章を引いて、残りの学習量を求めます。次に、今日から試験日までの総日数を数え、そこから休息日と復習期間の日数を引きます。最後に、残りの学習量を利用可能な勉強日数で割ります。' },
    { type: 'paragraph', html: 'たとえば、学習する教材が400ページあり、すでに50ページを完了していて、試験まで残り20日あるとします。そのうち4日の休息日を取り、2日間の復習期間を設定する場合、残りの学習量は350ページ、勉強日数は14日になります。1日のペースは350割る14で、ちょうど1日あたり25ページになります。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
