import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'rubric-matrix-designer' as const;
const title = 'ルーブリック評価基準作成ツール';
const description = '評価レベル、配分比率（合計100%）の自動検証機能、CSVエクスポート、印刷用レイアウトを備えた、編集可能で重み付け対応のルーブリック評価基準表を作成します。';

const faqItems = [
  { question: 'ルーブリック評価基準表とは何ですか？', answer: 'ルーブリック評価基準表は、行に評価基準、列に達成レベルを配置した評価グリッドです。各セルにはそのレベルのパフォーマンスが具体的に記述されており、採点の透明性と一貫性が向上します。' },
  { question: '評価基準の配分比率の合計が100%である必要があるのはなぜですか？', answer: '合計を100%にすることで、評価モデルが明確になります。合計が100%未満または100%を超えていると、学生や採点者は、各評価基準が最終スコアにどれだけ貢献しているかを正確に判断できません。' },
  { question: '学生もこのツールを使用できますか？', answer: 'はい。学生は課題への期待事項を分析し、ドラフトを計画し、提出前にピアレビュー用のチェックリストを作成するために使用できます。' },
  { question: 'どのようなエクスポートオプションがありますか？', answer: 'CSVエクスポートはスプレッドシートやLMS（学習管理システム）の設定に便利です。印刷ボタンをクリックするとブラウザの印刷画面が開き、システムの印刷機能を使用してPDFとして保存できます。' },
];

const howToItems = [
  { name: '評価基準を編集する', text: '評価基準の名前をクリックし、評価したいスキル、学修成果、または要件に変更します。' },
  { name: '配分比率を設定する', text: 'パーセンテージを調整し、配分比率バーが合計100%になるようにします。' },
  { name: '達成レベルを記述する', text: '各記述子セルをクリックして、そのレベルのパフォーマンスに関する客観的な評価基準を記入します。' },
  { name: '必要に応じて構造を整える', text: '追加ボタンを使用して評価基準やレベルを作成し、不要な行や列を削除します。' },
  { name: 'エクスポートまたは印刷', text: 'スプレッドシート用のCSVをダウンロードするか、印刷機能を使用してPDFバージョンを作成します。' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: '評価基準',
    weightHeader: '配分比率',
    levelSectionLabel: '達成レベル',
    levelBadgePrefix: 'L',
    addCriterion: '基準を追加',
    addLevel: 'レベルを追加',
    removeCriterion: '基準を削除',
    removeLevel: 'レベルを削除',
    exportCsv: 'CSVエクスポート',
    printRubric: '印刷 / PDF',
    csvFilename: 'rubric-matrix.csv',
    pdfDocumentTitle: 'ルーブリック評価基準',
    pdfImageAlt: 'ルーブリック評価基準',
    confirmDeleteTitle: 'この評価基準を削除しますか？',
    confirmDeleteText: 'これにより、評価基準と、その達成レベルに対して記述されたすべての評価基準文面が削除されます。',
    cancelDelete: 'キャンセル',
    confirmDelete: '基準を削除',
    totalWeight: '合計配分比率',
    balanced: 'ちょうど100%で調整済み',
    under: '合計が100%になるように配分比率を追加してください',
    over: '合計が100%に戻るように配分比率を減らしてください',
    emptyCell: 'クリックして編集',
    newCriterionTemplate: '評価基準 {index}',
    newDescriptorTemplate: '基準記述 {index}.{level}',
    newLevelTemplate: 'レベル {index}',
    defaultLevels: [
      { name: '秀・優秀', score: 4 },
      { name: '優・良好', score: 3 },
      { name: '良・合格', score: 2 },
      { name: '可・初歩', score: 1 },
    ],
    defaultCriteria: [
      {
        name: '論理構成の質',
        weight: 35,
        cells: [
          '主張が明確であり、多角的な根拠付けがなされている',
          '主張が明確であり、適切な根拠付けがなされている',
          '主張は見られるが、論旨が一貫していない',
          '主張が不明確である、または欠落している',
        ],
      },
      {
        name: '根拠・証拠の活用',
        weight: 30,
        cells: [
          '証拠が正確に引用され、統合されている',
          '証拠がほとんどの主張をサポートしている',
          '証拠が一般的すぎる、または関連性が希薄である',
          '証拠が提示されていない、または不正確である',
        ],
      },
      {
        name: '推敲・構成',
        weight: 20,
        cells: [
          '構成が読者をスムーズに論旨へ導いている',
          '論理的な構成である',
          '構成に飛躍や重複がある',
          '構成が煩雑で追いにくい',
        ],
      },
      {
        name: '学術的表現',
        weight: 15,
        cells: [
          '洗練された文体であり、規則に忠実である',
          '軽微な誤りはあるが、理解の妨げにはならない',
          '頻繁な誤りがあり、読者の集中を妨げる',
          '誤りが多く、意味が伝わりにくい',
        ],
      },
    ],
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献と学術資料',
  },
  seo: [
    { type: 'title', text: '学生が実際に活用できるルーブリックの設計', level: 2 },
    { type: 'paragraph', html: '優れたルーブリック評価基準表は、単なる採点表ではありません。それは学習の期待値を共有する地図です。学生は課題提出前に求められる品質を理解するために使い、教員はより一貫した採点のために使い、レビュー担当者は曖昧さを排除した具体的なフィードバックのために使用します。本ツールは、基準、配分、達成レベル、評価文面をすべて1つの編集可能なマトリクスにまとめ、構造を可視化します。' },
    { type: 'diagnostic', variant: 'warning', title: 'ルーブリックの見直しが必要な場合', html: '<ul><li>複数の基準が重複しすぎており、同じミスが二重に減点されている。</li><li>配分比率の合計が100%になっておらず、最終スコアの解釈が困難である。</li><li>評価文面（記述）が客観的な事実に基づかず、「良い」「弱い」「素晴らしい」といった主観的な表現にとどまっている。</li><li>評価レベルが多すぎて、採点者が一貫して区別できない。</li></ul>' },
    { type: 'title', text: '評価基準と配分の選定', level: 3 },
    { type: 'table', headers: ['要素', '推奨プラクティス', 'よくある問題'], rows: [['評価基準', '論理、証拠、手法、正確性、プレゼンテーションなど、明確に異なるスキルや学修成果を評価する。', '1つの行に複数のスキルを詰め込んでしまい、フィードバックが曖昧になる。'], ['配分比率', '学習の優先度や課題の目的に応じて配分を一致させる。', '学修成果に軽重があるにもかかわらず、すべての基準に均等な配分を与えてしまう。'], ['レベル', '評価者が一貫して判断できる3～5レベルを使用する。', '文言にわずかな差しかない過度なレベル数を追加してしまう。'], ['評価記述', '学生の課題から観察できる客観的な証拠を記述する。', '評価的な響きはあるものの、学生が改善するためのヒントにならない指標を用いてしまう。']] },
    { type: 'comparative', title: '分析的ルーブリック vs 包括的ルーブリック', columns: 2, items: [{ title: '分析的ルーブリック', description: 'パフォーマンスを個別の基準と配分に分解して評価します。学生に詳細なフィードバックが必要な場合や、複数の採点者の評価基準を揃える場合に最適です。', highlight: true, points: ['透明性の高いスコアリング', '具体的なフィードバック', '複雑な課題にも適している'] }, { title: '包括的ルーブリック', description: '全体的な判断を1つだけ下します。採点時間は短縮されますが、課題の修正やピアレビューのための診断的な情報は少なくなります。', points: ['迅速な採点プロセス', '簡易的なチェックに最適', '詳細なフィードバックが少ない'] }] },
    { type: 'tip', html: '<strong>形容詞ではなく、客観的な証拠に基づいて記述子を書きましょう。</strong> 「素晴らしい分析」と書くのではなく、素晴らしい分析が実際に何を行っているかを書きます（例：証拠を主張に結び付け、制約事項に言及し、その証拠がなぜ重要であるかを説明している）。' },
    { type: 'title', text: '配分比率の検証方法', level: 3 },
    { type: 'paragraph', html: '配分比率は優先度を表します。40%の重みを持つ評価基準は、10%の重みを持つ評価基準とは学生の取り組み方に異なる影響を与えます。本ツールの自動計算は意図的に厳格に作られており、合計がちょうど100%のときにのみ正常と判断されます。100%未満の場合は評価の一部が未定義になり、100%を超える場合は得点モデルに矛盾が生じて混乱を招きます。' },
    { type: 'summary', title: 'ルーブリック作成の実践的な流れ', items: ['行を書き始める前に、まず学習目標を明確にします。', '評価マトリクスは、フィードバックに実際に影響を与える基準に限定します。', '客観的で観察可能な言葉を用いて評価文面をドラフトします。', '公開する前に、配分の合計が100%になっていることを確認します。', 'スプレッドシートやLMSへのインポート用にCSV形式で書き出します。'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
