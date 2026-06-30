import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'reading-time-note-density-planner' as const;
const title = '読書時間・ノート密度プランナー';
const description = 'ノート作成時間を含めた学術文献の読書時間を予測し、学習スケジュールを実践的なセッションに分割します。';

const faqItems = [
  { question: 'なぜノート作成がこれほど読書時間に影響するのですか？', answer: '学術的な読書は、単に文字を目で追うだけではないからです。重要箇所のハイライト、要約の作成、余白への疑問の書き込み、単語カードの作成などには、すべて追加の処理時間がかかります。ノート作成にかける時間を別個に見積もることで、「1時間あたり数ページ」という楽観的な見積もりが原因で締め切り直前に夜更かしすることになるのを防げます。' },
  { question: '1時間あたりの読書ページ数はどれくらいを目安にすべきですか？', answer: '専門的な教科書の場合、1時間に15〜25ページが一般的です。比較的平易な内容であれば、30〜50ページ程度が現実的です。数式や一次史料、馴染みのない専門用語が含まれる資料の場合は、低めの見積もりから開始し、最初の読書セッションを終えた後にスピードを微調整してください。' },
  { question: 'ノート密度はどのように選べばよいですか？', answer: '簡単なハイライトや短い要約なら1ページあたり1〜2分、コーネル式ノートなどの本格的なノート作成なら3〜5分、単語カードの作成や練習問題の解答、統合的な段落作成を行う場合は5分以上を見積もります。' },
  { question: 'このプランナーはシラバスのスケジュールの代わりになりますか？', answer: 'いいえ。読書量を必要な時間やセッション数に変換する補助は行いますが、提出期限、ゼミ、実験、復習期間などは、普段お使いのカレンダー上で管理する必要があります。' },
];

const howToItems = [
  { name: '読書量の入力', text: '読了する必要があるページ数またはそれに準ずるテキスト量を入力します。' },
  { name: '使用可能時間の入力', text: '締め切りまでに学習に割くことができる合計時間を分単位で入力します。' },
  { name: '速度とノート密度の予測', text: '1時間あたりの読書スピードと、1ページあたりの想定ノート作成時間を選択します。' },
  { name: 'セッションの分割', text: 'セッション数を設定し、1回あたりの読書ページ、時間、ノート作成負荷を確認します。' },
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

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: '読書ページ数',
    minutesLabel: '使用可能な時間',
    speedLabel: '読書スピード（ページ/時間）',
    densityLabel: 'ノート密度（分/ページ）',
    sessionsLabel: 'セッション分割数',
    totalTimeLabel: '想定総作業時間',
    readingTimeLabel: '読書',
    noteTimeLabel: 'ノート作成',
    coverageLabel: '時間カバー率',
    pagesSessionLabel: 'ページ/セッション',
    minutesSessionLabel: '時間/セッション',
    notesSessionLabel: 'ノート時間/セッション',
    controlsAriaLabel: '読書プランコントロール',
    minuteUnit: '分',
    hourUnit: '時間',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献と学習リソース',
    statusLabels: {
      comfortable: '余裕のある計画です',
      tight: '過密ですが実行可能です',
      overloaded: '計画がオーバーロードしています',
    },
    resetButton: 'リセット',
  },
  seo: [
    { type: 'title', text: 'ページ数だけでなく、ノート作成時間を含めて読書時間を計画する', level: 2 },
    { type: 'paragraph', html: '多くの学生は、単純にページ数を読書スピードで割って読む時間を見積もりますが、最も見落とされやすい「ノート作成」にかかる時間を忘れてしまいます。40ページの章を読む場合、ただ目を通すだけなら90分で済みますが、ノートを取り、要約し、復習用のクエスチョンを作るなら3時間は必要になります。このプランナーは、読書スピードとノート作成時間を分けてシミュレーションするため、実際の学習タスクに応じた現実的な予定を組むことができます。' },
    { type: 'diagnostic', variant: 'info', title: '読書計画が楽観的すぎるときに起こること', html: '<ul><li>確保した時間が「ただ文字を読むだけの時間」になっており、ノート取りや要約、練習問題を解く時間が考慮されていない。</li><li>小説、専門書、学術論文、判例などの異なる種類の資料に対して、すべて同じ読書スピードを適用している。</li><li>1回のセッションが通常の集中力持続時間よりも長く設定されているため、後半のページのノートの質が著しく低下している。</li><li>提出期限までに他の科目の課題があるにもかかわらず、空き時間をすべて1つの科目に使える前提で計画している。</li></ul>' },
    { type: 'title', text: '現実的な「1時間あたりのページ数」の選び方', level: 3 },
    { type: 'table', headers: ['資料の種類', '初期スピード', '計画上のアドバイス'], rows: [['簡単な復習や馴染みのある内容', '40-60 ページ/時間', 'すでに用語を理解しており、新しい知識の習得ではなく確認作業として読む場合にのみ適用してください。'], ['標準的な教科書の章', '20-35 ページ/時間', '章の中に例題や図、章末の確認テストが含まれる場合は、想定スピードを下げて計算してください。'], ['難解な学術理論、論文、一次史料', '8-20 ページ/時間', 'セッションを細かく分け、理解には再読が必要であることを想定して、十分に復習のバッファを取ってください。']] },
    { type: 'tip', html: '<strong>最初のセッションでスピードを調整しましょう。</strong> 最初の10ページにかかった時間（ノート取りを含む）を計ってください。もし計算結果が「余裕あり」となっていても、実際の計測時間が異なっていれば、実際の時間を信頼して見積もりスピードを下げてください。' },
    { type: 'title', text: 'ノート密度とは何か', level: 3 },
    { type: 'paragraph', html: 'ノート密度とは、読書中または読了後に、1ページあたりの内容整理にかける平均時間のことです。低密度のノートであれば、余白へのキーワード記入とハイライト程度で済みます。高密度のノートを作成する場合は、コーネル式でのまとめ、短い要約、質問リスト、単語カードの作成などを行います。必要な密度は試験形式によって異なります。暗記が主となるテストには単語カード、論述試験には論点マップ、理系科目には例題の解き直しが必要です。' },
    { type: 'comparative', title: '簡単なノート vs 深いノート', columns: 2, items: [{ title: '簡単なノート', description: '短時間で読み終えられますが、記憶の定着率が低く、テスト前の復習用資料としては使いにくくなります。', points: ['内容を知っている場合に向く', '当日の学習負荷が軽い', '復習用の資料としては弱い'] }, { title: '深いノート', description: '時間はかかりますが、セミナーの準備、レポート作成、試験対策など、正確な事実確認が必要な場合に最適な手法です。', highlight: true, points: ['試験対策に推奨', '当日の学習負荷が高い', '優れた復習用ツールになる'] }] },
    { type: 'summary', title: '時間管理の実用的なルール', items: ['通常の読書セッションは、できる限り1回75分以下に抑えるようにします。', 'ノート作成時間が読書時間を上回る場合は、作業を2段階（「まず読む」、「後から整理する」）に分割します。', '締め切りの直前まで新しいページを読み進めるのではなく、最後の1セッションは知識の整理と定着に充てます。'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
