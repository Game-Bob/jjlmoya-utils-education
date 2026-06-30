import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'concept-map-text-exporter' as const;
const title = 'コンセプトマップ作成ツール';
const description = 'インデントされたメモを、ドラッグ可能なノード、折りたたみ可能なブランチ、ズームコントロール、およびSVGまたはPNGエクスポート機能を備えたインタラクティブなコンセプトマップに変換します。';

const faqItems = [
  { question: 'コンセプトマップジェネレーターにはどのようなテキストを貼り付けることができますか？', answer: '1行に1つのアイデアを書き、サブトピックにはインデントを適用するだけのシンプルなアウトラインを使用してください。箇条書き、番号付きリスト、タブ、スペースに対応しているため、ドキュメント、講義メモ、学習アプリからコピーしたメモであれば、通常は手動で再フォーマットすることなく変換できます。' },
  { question: '最も見やすいコンセプトマップを作成するには、インデントをどのようにフォーマットすればよいですか？', answer: '最初の行に中心となるテーマを配置し、その下にサポートするアイデアをインデントして配置します。同じレベルのアイデアは、同じインデントの深さに揃えてください。ノードが間違った親ノードの下に表示される場合、ほとんどの場合はインデントのレベルが原因です。' },
  { question: 'マップの生成後にノードを移動することはできますか？', answer: 'はい。キャンバス上の任意のノードをドラッグして、間隔を調整したり、密集したブランチを整理したり、関係性を強調したりできます。エクスポートする前に、キャンバスをパンしたり、ズームイン・ズームアウトしたり、ブランチを折りたたんだりすることも可能です。' },
  { question: 'SVGエクスポートとPNGエクスポートの違いは何ですか？', answer: 'SVGは編集可能なベクター形式であり、ベクターエディター、スライド、ドキュメントなどで鮮明に拡大縮小できます。PNGは固定画像であり、クラスルームのプラットフォーム、メッセージ、ワークシート、クイック復習用のカードなどに簡単にアップロードできます。' },
  { question: 'このツールは相互リンクを自動的に検出しますか？', answer: 'いいえ。インデントから階層構造を構築します。これにより、出力は予測可能な状態に保たれますが、因果関係、対比、フィードバックループなどの横方向のリンクは、SVGエクスポート後に手動で調整する必要があります。' },
];

const howToItems = [
  { name: 'アウトラインを貼り付けるか入力する', text: '1行に1つのコンセプトを入力し、親トピックの下にサブアイデアをインデントして配置します。' },
  { name: '生成された階層構造を確認する', text: 'インタラクティブなキャンバスを使用して、階層がそのトピックを学習する順序と一致しているか確認します。' },
  { name: 'キャンバスを整理する', text: '視覚的なグループ分けが明確になるまで、ノードをドラッグし、密集したブランチを折りたたみ、ズームを調整します。' },
  { name: '学習教材としてエクスポートする', text: '編集用のSVG、または簡単な共有、ワークシート、プレゼンテーションスライド用のPNGをダウンロードします。' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'インデントされたアウトライン',
    sampleButton: 'サンプルを読み込む',
    clearButton: 'クリア',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'ズームイン',
    zoomOut: 'ズームアウト',
    resetView: 'ビューをリセット',
    exportSvg: 'SVGエクスポート',
    exportPng: 'PNGエクスポート',
    collapseBranch: 'ブランチを折りたたむ',
    expandBranch: 'ブランチを展開する',
    emptyStateTitle: 'コンセプトがありません',
    emptyStateText: '1行に1つのアイデアを書き、サブトピックをインデントしてマップを作成します。',
    nodeCount: '個のコンセプト',
    depthCount: 'レベル',
    branchCount: '本の接続線',
    levelPrefix: 'L',
    untitledNodeLabel: '無題',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'concept-map.svg',
    pngFilename: 'concept-map.png',
    sampleOutline: `研究プロジェクト
  研究課題
    どのような課題を調査しているか？
    誰が影響を受けるか？
  根拠
    一次資料
    学術論文
    データセット
  研究手法
    サンプリング計画
    分析の手順
  結論
    主な知見
    限界点
    次の研究課題`,
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献と学術リソース',
  },
  seo: [
    { type: 'title', text: 'インデントされたメモをコンセプトマップに変換する', level: 2 },
    { type: 'paragraph', html: 'コンセプトマップは、あるテーマが単なる事実の羅列ではなくなったときに便利です。どのアイデアが中心で、どのような詳細がそれを支えているかを示し、学習者がカテゴリ、具体例、原因、結果を混同している箇所を明らかにします。このジェネレーターは、学生がすでに持っているメモをそのまま活用できるように設計されています。インデントされたアウトラインを貼り付け、階層を調整し、インタラクティブなキャンバスを使って学習に役立つビジュアルマップを整理できます。' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: '1行あたり1コンセプト' }, { value: '2+', label: 'インデントレベル対応' }, { value: 'SVG', label: '編集可能なエクスポート' }, { value: 'PNG', label: '共有しやすい画像出力' }] },
    { type: 'diagnostic', variant: 'info', title: '正確なマッピングのための最適な入力形式', html: '<ul><li>一番上の行に主要なテーマを配置します。</li><li>説明、サポート、定義、具体例を示すアイデアの下にサブトピックをインデントします。</li><li>静かに同じ階層のアイデアは、同じインデント幅に揃えます。</li><li>箇条書きや番号付きリストを使用しても構いません。一般的なリストマーカーは自動的に削除されます。</li><li>ノードのラベルは短く簡潔に保ちます。詳細な説明はノード内ではなく、自分のメモに残してください。</li></ul>' },
    { type: 'title', text: '見にくいコンセプトマップの改善方法', level: 3 },
    { type: 'table', headers: ['発生している問題', '考えられる原因', '解決策'], rows: [['詳細が間違ったトピックの下に表示される', 'インデントが浅すぎる、または深すぎる。', '正しい親トピックの下に来るまで行を左右に移動します。'], ['マップが横に広すぎる', '同じレベルにアイデアが多すぎる。', '関連する項目を、より分かりやすいカテゴリノードの下にグループ化します。'], ['学習に使いにくい', 'ノードのラベルが完全な文章で書かれている。', 'ラベルをキーワード、要点、または質問形式に短縮します。'], ['重要な関係性が欠落している', 'アウトラインは階層型だが、テーマに相互リンクがある。', 'SVG形式でエクスポートし、必要に応じてエディターで横方向のリンクを手動で追加します。']] },
    { type: 'comparative', columns: 3, items: [{ title: 'コンセプトマップ', description: 'アイデア間の関係性、前提条件、原因、根拠、カテゴリを示すのに最適です。', highlight: true, points: ['関係性重視', '復習に最適', 'トピックを口頭で説明するのに便利'] }, { title: 'アウトライン', description: '整理されたメモ、論文の構成、講義の順序、手順、時系列の資料に最適です。', points: ['素早く書ける', 'スキャンしやすい', '長文の詳細情報に対応可能'] }, { title: 'マインドマップ', description: 'テーマの構造が完全に決まる前に、大まかな連想をブレインストーミングするのに最適です。', points: ['クリエイティブな探索', '大まかなグループ分け', '厳格すぎない階層'] }] },
    { type: 'tip', html: '<strong>折りたたみ機能をアクティブリコールのツールとして活用しましょう。</strong> ブランチを折りたたみ、隠された詳細を記憶から唱えてから、展開して見落としがないか確認します。これにより、マップを受動的な図からアクティブな復習ツールに変えることができます。' },
    { type: 'title', text: 'ビジュアルマッピングが効果的な学習ワークフロー', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: '試験前の復習', description: '出題されそうな質問を中心にマップを構築します。親ノードは、原因、根拠、限界点、定義、例などのトリガーにします。', highlight: true, points: ['折りたたみブランチで自己テスト', 'ラベルを短く保つ', 'PNGでエクスポートしてクイック復習シートにする'] }, { title: '研究計画の立案', description: '研究の問い、根拠、手法、情報源、限界点、結論をマップで結びつけます。', points: ['問いをルート（根本）に配置する', '根拠と解釈を区別する', '編集用にSVGでエクスポートする'] }] },
    { type: 'message', title: '重要な制限事項', html: 'インデントはツリー構造を作成するものであり、完全な意味ネットワークを生成するものではありません。2つのアイデアが異なるブランチにありながら互いに影響し合っている場合、ツールが自動的にその接続線を引くことはありません。生成されたマップは綺麗な下書きとして扱い、エクスポート後に非階層的なリンクを追加してください。' },
    { type: 'title', text: 'スライド、ワークシート、エディター向けのコンセプトマップのエクスポート', level: 3 },
    { type: 'paragraph', html: 'ベクターエディター、プレゼンテーションツール、出版物で編集可能な図を作成したい場合はSVGを選択してください。クラスルームプラットフォーム、学習管理システム、ワークシート、チャット、復習カードなどで使用できる安定した画像が必要な場合はPNGを選択してください。エクスポートする前に、混雑したノードを整理し、不要な詳細を折りたたみ、使用するサイズで関係性が読み取れるようにズームを調整します。' },
    { type: 'summary', title: '実践的なワークフロー', items: ['メモ、AIの下書き、または配布資料から大まかなアウトラインを貼り付けます。', 'すべてのサブトピックが正しい親の下に配置されるまでインデントを修正します。', 'キャンバスやエクスポートされた画像で読みやすくなるよう、ラベルを短くします。', '密集したブランチをドラッグして離し、最終版に不要な詳細は折りたたみます。', 'さらに編集を重ねるためにSVGをダウンロードするか、すぐに共有するためにPNGを保存します。'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
