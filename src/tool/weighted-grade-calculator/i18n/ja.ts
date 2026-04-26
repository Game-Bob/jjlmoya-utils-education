import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'weighted-grade-calculator' as const;
const title = '加重平均・最終成績計算機';
const description = '成績のことで悩むのはもうおしまい！コース成績や最終評価を簡単に計算できます。課題、試験、そしてそれらの比重を入力するだけで、現在の立ち位置が分かります。';

const faqItems = [
  { question: '加重平均（重み付けされた成績）とは何ですか？', answer: '多くのコースでは、すべての課題の価値が同じわけではありません。例えば、期末試験が成績の40%を占める一方で、宿題は10%に過ぎないといった具合です。加重平均は、これらの違いを考慮して、あなたの本当の状況を算出します。' },
  { question: '成績の比重（ウェイト）はどこで確認できますか？', answer: '通常、コースのシラバス（履修案内）の「成績評価方針」や「アセスメント」という項目に記載されています。教授は、出席、小テスト、プロジェクトなどの各カテゴリーにパーセンテージを割り当てています。' },
  { question: '課題の合計がまだ100%にならない場合は？', answer: '心配いりません！この計算機は、これまでに完了した作業に基づいた「予測」の成績を表示します。現在のスコアを100%相当に換算して算出します。' },
  { question: 'GPAの計算に使えますか？', answer: 'もちろんです。各コースを1つの「項目」として扱い、その単位数を「ウェイト（重み）」として使用することで、学期ごとの加重平均（GPA相当）を求めることができます。' },
];

const howToItems = [
  { name: '課題をリストアップする', text: '試験、小テスト、プロジェクトなどの名前を入力します。整理して入力しましょう！' },
  { name: 'スコアを入力する', text: '各項目の得点を入力します（通常は10点満点や100点満点など）。' },
  { name: '比重（ウェイト）を追加する', text: 'シラバスを確認し、各項目が最終成績に占める割合を入力します。' },
  { name: '結果を確認する', text: '最終成績が即座に更新されるのを確認しましょう。手計算は不要です！' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    addSubject: '項目を追加',
    subjects: '成績と比重',
    subjectName: '課題 / 科目',
    grade: '成績',
    weight: '比重 (%)',
    scale: '満点設定（例：4.0, 10, 100）',
    finalGrade: '現在の成績',
    removeSubject: '削除',
    weightSum: '合計比重',
    exampleSubject: '期末試験',
    newSubjectPlaceholder: '例：中間テスト',
  },
  seo: [
    { type: 'title', text: '加重平均計算機で成績をマスターする方法', level: 2 },
    { type: 'paragraph', html: '成績の山を見て途方に暮れたことはありませんか？あなただけではありません。<strong>加重平均</strong>を理解することは、高校や大学で優位に立つための秘訣です。' },
    { type: 'title', text: 'なぜ重み付けされた成績が重要なのか', level: 3 },
    { type: 'paragraph', html: '単純な平均では、すべての課題を同じに扱います。しかし現実の世界（そしてシラバス）では、2分で終わる小テストが20ページの論文と同じ価値を持つべきではありません。加重平均は、重要なものに、より大きな「影響力」を与えます。' },
    { type: 'paragraph', html: '<strong>学期のGPA</strong>を計算する場合でも、最後の任意課題を飛ばしても大丈夫か確認したい場合でも、ウェイト（重み付け）こそがあなたに必要なツールです。' },
    { type: 'title', text: '3ステップで最終成績を計算する', level: 3 },
    { type: 'list', items: ['シラバスから各カテゴリーの比重を見つける（例：試験 50%、宿題 20%）。', 'スコアにその比重を掛ける（例：90点 * 0.50 ウェイト = 45ポイント）。', 'これらすべてのポイントを合計して、最終的なパーセンテージを求めます。'] },
    { type: 'title', text: 'プロのヒント：「もしも」シミュレーション', level: 3 },
    { type: 'paragraph', html: 'この計算機を使って、さまざまなシナリオを試してみてください。「期末試験で85点を取ったらどうなるか？」「この宿題を出さなかったらどうなるか？」リアルタイムで影響を確認することで、どこで勉強時間を優先すべきかを判断するのに役立ちます。' },
    { type: 'tip', html: '<strong>パニックにならないでください。</strong> 比重の合計がまだ100%に達していなくても、計算機は現在の作業に基づいて予測される成績を算出します。学期途中の進捗を追跡するのに最適な方法です！' },
    { type: 'title', text: '算術平均 vs 加重平均：本当の違い', level: 3 },
    { type: 'paragraph', html: '単純な算術平均は、危険なほど誤解を招くことがあります。小さなテストで100%を取っていても、重要な試験で50%だった場合、単純平均は75%（合格点）となります。しかし、もし試験が成績の90%を占めるなら、あなたの<strong>実際の計算された成績</strong>は55%（不合格）に近くなります。常にウェイト（比重）に注目しましょう！' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
