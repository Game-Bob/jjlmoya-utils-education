import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'academic-schedule-optimizer' as const;
const title = '時間割・時間管理オプティマイザー';
const description = '視覚的な週間の時間割を作成し、科目を色分けし、講義の重複を検出して、予定を.icsカレンダーファイルとしてエクスポートします。';

const faqItems = [
  {
    question: '重複検出機能はどのように動作しますか？',
    answer: '各講義ブロックには曜日、開始時間、授業時間が設定されています。ツールはブロックの全ペアを比較し、同じ曜日で時間帯が重なっている場合に警告を表示します。'
  },
  {
    question: 'カレンダー上で講義を直接移動できますか？',
    answer: 'はい。講義ブロックを別の曜日の列にドラッグ＆ドロップして、新しい週間レイアウトをテストできます。重複状況は移動後すぐに更新されます。'
  },
  {
    question: '.icsエクスポートには何が含まれますか？',
    answer: 'エクスポートすると、各講義がイベントとして登録された標準のiCalendarファイルが作成されます。これには科目、教室、開始時間、終了時間が含まれ、多くのカレンダーアプリに取り込めます。'
  },
  {
    question: 'なぜ科目を色分けするのですか？',
    answer: '色分けをすることで、過密な時間割をひと目で把握しやすくなります。実験、講義、ゼミ、または負担の大きい科目ごとに異なる色を使用することで、重複や忙しい曜日がすぐに視覚化されます。'
  }
];

const howToItems = [
  { name: '講義情報の入力', text: '科目、教室、曜日、開始時間、授業時間、カラーを入力します。' },
  { name: 'グリッドにブロックを配置', text: '生成された講義ブロックを確認し、週間の時間割にどのように収まるかを確認します。' },
  { name: '重複の解決', text: '強調表示された重複ブロックを確認し、競合パネルの警告が消えるまで講義を移動または編集します。' },
  { name: 'カレンダーのエクスポート', text: '.icsファイルをダウンロードし、Googleカレンダー、Appleカレンダー、Outlookなどにインポートします。' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: '科目名',
    roomLabel: '教室',
    dayLabel: '曜日',
    startLabel: '開始時間',
    durationLabel: '授業時間',
    colorLabel: 'カラー',
    addClass: '講義を追加',
    saveClass: '講義を保存',
    newClass: '新規講義',
    exportICS: '.icsエクスポート',
    conflictLabel: 'スケジュールの重複',
    noConflicts: '重複は検出されませんでした',
    removeLabel: '講義を削除',
    editHint: '講義を選択して編集するか、別の曜日や時間にドラッグして移動します。',
    weekendDaysLabel: '週末の表示',
    saturdayLabel: '土曜日',
    sundayLabel: '日曜日',
    weekDayLabels: ['月', '火', '水', '木', '金'],
    weekendDayShortLabels: ['土', '日'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 時間', '2 時間', '3 時間'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: '微積分学',
    defaultRoom: '204教室',
    defaultNewSubject: '新規講義',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: '微積分学', room: '204教室', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: '文学', room: '実験室B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: '物理学', room: '大講堂', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'academic-schedule.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: '件の重複',
    overlapPlural: '件の重複',
    detectedLabel: '検出されました',
    classEditorAriaLabel: '講義エディター',
    weeklyScheduleAriaLabel: '週間スケジュール',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献とカレンダー標準',
  },
  seo: [
    { type: 'title', text: '実際に機能する週間の大学時間割を組み立てる方法', level: 2 },
    { type: 'paragraph', html: '優れた時間割は、単に講義を並べるだけではありません。週のどこに負荷が集中しているか、どの曜日が空き時間で細切れになっているか、そして必修科目の重複がないかを示してくれます。視覚的な時間割オプティマイザーを使用することで、講義の聞き逃し、移動の焦り、あるいは履修登録時の致命的なミスを防ぐことができます。' },
    { type: 'summary', title: '時間割を確定する前に確認すべきこと', items: [
      '同じ曜日に必修科目が2つ重複していないこと。',
      '土曜日や日曜日に開講される授業に対応するため、週末表示を有効にすること。',
      '実験、セミナー、講義を色分けして視覚的に区別すること。',
      '負担の大きい科目を休憩なしで連続して配置しないこと。',
      '作成した時間割を普段使用しているカレンダーアプリにエクスポートすること。'
    ] },
    { type: 'title', text: 'なぜ視覚的なグリッドがプレーンテキストのリストより優れているのか', level: 3 },
    { type: 'paragraph', html: '単なる講義リストでは、各講義が他の曜日や時間から独立して表示されるため、時間的な過密さが隠れてしまいます。グリッド表示にすることで、スケジュールの密度が瞬時に明らかになります。月曜日の授業数が多すぎないか、講義が実験時間を圧迫していないか、土曜日の授業が生活リズムを崩していないか、移動距離が隠れたストレスになっていないかを確認できます。' },
    { type: 'comparative', columns: 3, items: [
      { title: '講義リスト', description: '履修コードの確認には適していますが、週間の過密さを測るには不向きです。' },
      { title: '週間グリッド', description: '生活リズム、空き時間、競合状況を直感的に把握するのに最適です。', highlight: true },
      { title: 'カレンダーアプリのみ', description: '計画決定後の管理には便利ですが、代替案をいくつも試すのには向きません。' }
    ] },
    { type: 'title', text: '重複検出の仕組み', level: 3 },
    { type: 'paragraph', html: '2つの講義が同じ曜日に設定され、かつ時間帯が重なっている場合に競合とみなされます。例えば、10:00〜12:00の講義と11:00〜13:00のゼミは、どちらも11時台を占有するため重複します。ツールはすべての講義ブロックを相互にチェックし、競合する両方のブロックをマークします。' },
    { type: 'table', headers: ['講義A', '講義B', '結果'], rows: [
      ['月曜 09:00-11:00', '月曜 11:00-13:00', '一方が終わると同時に他方が始まるため、重複はありません。'],
      ['火曜 10:00-12:00', '火曜 11:00-13:00', '時間帯が一部重なっているため、重複が発生します。'],
      ['水曜 09:00-11:00', '木曜 09:00-11:00', '曜日が異なるため、重複はありません。']
    ] },
    { type: 'title', text: '時間割計画のシグナルとしての色分けの活用', level: 3 },
    { type: 'paragraph', html: 'カラーは単なる飾りではありません。講義形式、難易度、キャンパスの場所、または必要なエネルギー量を分類するのに役立ちます。一貫したパレットを使用することで、特に履修登録期間中に複数の選択肢を比較する際、時間割を素早く確認できるようになります。' },
    { type: 'tip', html: '<strong>カラーのルールを明確に保ちましょう。</strong> 例えば、実験は青系、通常の講義は緑系、長距離の移動や事前準備が必要なコマは警告色に設定します。' },
    { type: 'title', text: 'カレンダーアプリへのエクスポート', level: 3 },
    { type: 'paragraph', html: '.ics形式は、カレンダー情報をやり取りするための標準フォーマットです。時間割をエクスポートすることで、講義情報をGoogleカレンダー、Appleカレンダー、Outlook、および各種大学カレンダーシステムに取り込めます。インポート後は、リマインダー、移動時間、繰り返しルール、個人学習の予定を自由に追加できます。' },
    { type: 'diagnostic', variant: 'warning', title: 'インポートする前の注意点', html: 'インポート先カレンダーの週の開始日が正しいか確認し、タイムゾーンの設定を見直し、インポートする予定が既存の講義スケジュールと重複していないか確認してください。' },
    { type: 'title', text: '履修登録のための実用的な手順', level: 3 },
    { type: 'list', items: [
      '選択科目を追加する前に、まず必修科目を登録し、重大な衝突を解決します。',
      '土曜日や日曜日の講義がある場合は、週末の表示設定を有効にします。',
      '色を使用して、講義、実験、ゼミ、自主学習を分類します。',
      '曜日間でブロックをドラッグして、時間割の組み合わせをすばやく比較します。',
      '食事、移動時間、休憩用の空き時間を確保します。',
      '重複警告パネルが完全にクリアになってからエクスポートを行います。'
    ] },
    { type: 'message', title: '時間割作成は繰り返しの作業です', html: '最初のバージョンは下書きとして扱いましょう。最適な時間割は、競合をテストし、講義形式を比較し、週間リズムが持続可能かを確認した後に完成します。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
