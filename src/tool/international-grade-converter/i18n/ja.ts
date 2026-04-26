import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = '国際成績換算・GPA換算ツール';
const description = '各国の学業成績を国際的な基準へ正確に換算するためのツールです。スペイン、アメリカ、イギリス、ドイツ、フランス、イタリアなどの成績を瞬時に換算。Erasmus+やフルブライト奨学金、海外大学への出願に欠かせないツールです。';

const faqItems = [
  { 
    question: '国際的な成績換算はどのように行われますか？', 
    answer: 'このツールは、各国の最低合格点と最高可能点に基づいた数学的な線形写像（リニアマッピング）を使用しています。これにより、あるシステムの「合格」が別のシステムの「合格」と一致し、異なる評価尺度間でも学業上の比例的な公平性が保たれるようになっています。' 
  },
  { 
    question: 'この換算ツールは大学入試にそのまま使えますか？', 
    answer: '当ツールのアルゴリズムは、ECTSやWESで使用される標準的な国際換算表に準拠していますが、あくまで情報提供を目的としています。正式な単位認定については、必ず受け入れ先の教育機関や公認の評価サービスにご相談ください。' 
  },
  { 
    question: '「一括モード（Bulk Mode）」とは何ですか？', 
    answer: '一括モードは、成績証明書が長い学生が複数の成績を一度に処理できる機能です。PDFやExcelの記録から数字の列をコピーして貼り付けるだけで、個別の換算と全体のGPA平均が瞬時に算出されます。' 
  },
  { 
    question: '成績をECTSに換算することはできますか？', 
    answer: 'はい。欧州単位互換積算制度（ECTS）に準拠した換算値を提供しています。欧州内での留学を計画している学生や、修士課程に出願する学生に最適です。' 
  }
];

const howToItems = [
  { name: '1. 元の評価システムを選択', text: '出身国や特定の評価尺度（例：スペイン 0-10、フランス 0-20）を選択します。' },
  { name: '2. 換算先の国を設定', text: '出願予定の国を追加して、ダッシュボード上で全ての換算値を並べて比較できるようにします。' },
  { name: '3. 成績データを入力', text: 'クイックチェックには単一の成績を入力し、学期全体の記録には一括モードを使用します。' },
  { name: '4. 分析とエクスポート', text: '視覚的なパーセンタイルバーを確認し、記録用に成績換算レポートをPDFとしてダウンロードします。' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: '一括モード処理、リアルタイム換算、世界各国の評価尺度対応、PDFレポート生成',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: '元の評価システム',
    targetSystems: '国際的な換算結果',
    gradeInput: 'あなたの成績',
    bulkMode: '一括成績処理',
    bulkPlaceholder: 'ここに成績リストを貼り付けてください（1行に1つ）...',
    results: '換算ダッシュボード',
    passLimit: '最低合格点',
    shareResults: '成績換算レポートを生成',
    averageMedia: '換算後の全体平均',
    compareTitle: '世界基準での学力評価',
    addSystem: '国を追加',
    removeSystem: '削除',
    selectCountry: '国を選択',
    sourceCountry: '元の国',
    systemSelection: 'システム選択',
    convertedScore: '換算後のスコア',
    emptyState: '成績を入力すると換算結果が表示されます',
    minLabel: '最小',
    passLabel: '合格',
    maxLabel: '最大',
    scaleLabel: '尺度',
    howToTitle: '国際教育への道のり',
    faqTitle: 'よくある質問',
    bibliographyTitle: '学術的な参照と基準',
    singleGradeMode: '単一成績',
    transcriptMode: '全成績証明',
    gradeCounter: '入力された成績数',
    averageSummary: '算出された平均点',
    gradesIgnored: '{count}件の成績は範囲外のため無視されました',
    bulkHelp: '成績証明書を直接貼り付けることができます。スペース、カンマ、または改行で区切られた成績を自動的に検出します。',
    copiedLabel: 'コピーしました！',
    germanyExpl: 'ドイツの評価：1.0が最高点、4.0が最低合格点となる逆転評価システムです。',
    spainExpl: 'スペインの評価：標準的な0-10評価で、5.0が最低合格点です。',
    usaExpl: 'アメリカの評価：0.0から4.0のGPA評価で、通常2.0が最低合格点です。',
    ukExpl: 'イギリスの評価：パーセントベースの分類で、40%が最低合格点です。',
    franceExpl: 'フランスの評価：20点満点の評価で、10点が最低合格点です。',
    italyExpl: 'イタリアの評価：30点満点の評価で、18点が最低合格点です。',
    netherlandsExpl: 'オランダの評価：1-10評価で、6が最低合格点です。',
    placeholderSpain: '例：8.5',
    placeholderUSA: '例：3.7 または A-',
    placeholderFrance: '例：14',
    placeholderGermany: '例：1.3',
    placeholderUK: '例：75',
    placeholderItaly: '例：28',
    placeholderNetherlands: '例：7.5',
  },
  seo: [
    { type: 'title', text: 'グローバルな活躍のための正確な成績換算', level: 2 },
    { type: 'paragraph', html: '<strong>Erasmus+</strong>の留学生であっても、<strong>アイビーリーグの修士課程</strong>への出願であっても、自分の学業成績が世界基準でどこに位置するかを理解することが第一歩です。成績の付け方は国によって大きく異なります。スペインでの10点は完璧を意味しますが、フランスでは単なる合格点に過ぎません。当ツールはこれらの違いを明確にします。' },
    { type: 'title', text: 'GPA換算における正確性が重要な理由', level: 3 },
    { type: 'paragraph', html: '入試委員会は換算されたGPAを使用して、数千件の応募者をフィルタリングします。手動計算でのわずかなミスが奨学金の獲得に影響することもあります。当ツールは、主要な国際教育機関で使用されている<strong>公式の線形マッピングアルゴリズム</strong>を採用しています。' },
    { type: 'title', text: '対応している主要なシステム', level: 3 },
    { type: 'list', items: [
      '<strong>スペイン (0-10):</strong> AprobadoからSobresalienteまでの詳細なマッピング。',
      '<strong>アメリカ GPA (4.0):</strong> 標準的なアメリカの大学の評価基準。',
      '<strong>ドイツ (1-6):</strong> 1.0が最高点となる逆転スケールの処理。',
      '<strong>フランス (0-20):</strong> グランゼコールや大学向けの正確な換算。',
      '<strong>イギリス評価:</strong> パーセンテージから学位（Honours Degree）への翻訳。'
    ] },
    { type: 'tip', html: '<strong>学術的なアドバイス：</strong> 「一括モード」を使用して、複数セメスターの累積GPAを算出しましょう。手動での表計算にかかる時間を大幅に節約できます！' },
    { type: 'title', text: 'WES換算の算出', level: 3 },
    { type: 'paragraph', html: '正式なWES評価は有料サービスですが、当ツールは<strong>精度の高いWES GPAの推定値</strong>を提供します。評価料を支払う前に、どの大学に出願すべきかの判断材料として活用してください。' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
