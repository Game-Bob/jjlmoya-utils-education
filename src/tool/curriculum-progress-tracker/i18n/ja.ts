import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'degree-credit-progress-and-projected-grade-calculator' as const;
const title = '修得単位進捗・想定GPAシミュレーター';
const description = '学期ごとに履修計画を立て、確定GPAおよび将来の想定GPAを管理しながら、目標GPA達成に必要な残り科目の目標点を算出します。';

const faqItems = [
  {
    question: 'どのようにして履修計画を作成し始めますか？',
    answer: 'ダッシュボード上で学期を追加し、科目を入力するだけです。単位数や科目のステータスを設定して成績を入力できます。',
  },
  {
    question: '確定GPAと想定GPAの違いは何ですか？',
    answer: '確定GPAは成績が確定した修得済みの科目のみで計算されます。想定GPAは、履修中や計画中の科目について想定する目標成績を含めて全体の平均を算出します。',
  },
  {
    question: '必要な目標点数の指標は何を示していますか？',
    answer: '設定した全体目標GPAを達成するために、残りのすべての科目（履修中・計画中）で維持すべき正確な加重平均点を算出します。',
  },
  {
    question: '入力したデータは安全に保存されますか？',
    answer: 'はい。すべてのデータはお使いのブラウザのローカルストレージに保存されます。サーバーに送信されることはありません。計画はJSONファイルとしてエクスポート可能です。',
  },
];

const howToItems = [
  { name: '目標の設定', text: 'ダッシュボード上部で卒業に必要な総単位数と目標のGPAを設定します。' },
  { name: 'カリキュラムの構築', text: '学期を追加し、公式カリキュラムに沿って科目名と単位数を登録します。' },
  { name: '成績とステータスの更新', text: '科目の状態を「修得済み」「履修中」「計画中」に切り替え、実際の成績や想定スコアを入力します。' },
  { name: '必要成績の確認', text: '目標達成に必要な残りの平均成績を確認し、学習配分をシミュレーションします。' },
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

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: '専攻名・学位プログラム',
    graduationCreditsLabel: '卒業要件単位数',
    targetGpaLabel: '目標GPA',
    realGpaLabel: '確定GPA',
    projectedGpaLabel: '想定GPA',
    creditsCompletedLabel: '修得済み単位数',
    requiredGradeLabel: '必要目標点（残り科目平均）',
    addSemesterButton: '学期を追加',
    addCourseButton: '科目を追加',
    exportPlanButton: '計画をエクスポート',
    importPlanButton: '計画をインポート',
    semesterNamePlaceholder: '学期名（例：1年次 秋学期）',
    courseNamePlaceholder: '科目名',
    creditsPlaceholder: '単位',
    gradePlaceholder: '成績',
    statusCompleted: '修得済み',
    statusInProgress: '履修中',
    statusPlanned: '計画中',
    importError: '履修計画を読み込めませんでした。ファイル形式を確認してください。',
    uploadHint: 'すべてのデータはブラウザのローカルに保存されます。インポートとエクスポートはお使いのデバイス上でのみ実行されます。',
    statusMessageSuccess: '目標GPA達成に向けて順調です。',
    statusMessageWarning: '目標GPAを達成するには、残りの科目で平均 {grade} 以上を取得する必要があります。',
    statusMessageImpossible: '現在の科目の単位設定と成績では、目標GPAの達成は数学的に不可能です。',
    degreeNamePlaceholder: '例：情報科学科 学士課程',
    deleteSemesterLabel: '学期を削除',
    deleteCourseLabel: '科目を削除',
    semesterTitleTemplate: '学期 {num}',
  },
  seo: [
    { type: 'title', text: '卒業GPAの予測と修得単位数の戦略的シミュレーション方法', level: 2 },
    { type: 'paragraph', html: '大学での成績管理は、単に過去の評価を見直すだけでなく、将来の予測と結びつけることが重要です。このシミュレーターを使えば、目標とするGPAや奨学金の基準に到達するために、次の期でどの程度の成績を維持する必要があるかを容易に可視化できます。' },
    { type: 'summary', title: '毎学期追跡すべき重要な管理目標', items: [
      '卒業要件単位に対する現在の獲得比率を視覚化します。',
      '確定済みの評定と、仮定の想定スコアを区別してロードマップを描きます。',
      '目標GPAや推薦基準を満たすための最小必要平均を把握します。',
    ] },
    {
      type: 'proscons',
      title: '想定GPAシミュレーターのメリットと制限事項',
      items: [
        {
          pro: '将来の学期について主体的な履修設計を可能にします。',
          con: 'シミュレーションの精度は入力する想定成績の現実性に完全に依存します。',
        },
        {
          pro: '目標達成に必要なスコアラインを正確に示すため、学習の目安になります。',
          con: '各大学で独自に導入されている追試験や評定破棄などの細かな特例制度は考慮されません。',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
