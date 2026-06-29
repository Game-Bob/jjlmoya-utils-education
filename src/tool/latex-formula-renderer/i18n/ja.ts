import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'latex-formula-renderer' as const;
const title = 'LaTeX数式レンダラー';
const description = 'ブラウザ上でLaTeX数式を瞬時にレンダリングします。数式を入力するだけで、PNG画像、Markdownコードブロック、または生のLaTeXソースコードとしてコピーできます。サーバーは不要です。';

const faqItems = [
  { question: 'LaTeXとは何ですか？なぜ学生はこれを使用するのですか？', answer: 'LaTeXは、数学、物理学、工学、経済学などでプロ品質の数式を書くために広く使用されている組版言語です。WordやGoogleドキュメントとは異なり、LaTeXを使用すると、積分、行列、ギリシャ文字などの複雑な数式を、書式設定を正確に制御しながら記述できます。' },
  { question: 'このレンダラーを使用するために何かをインストールする必要がありますか？', answer: 'いいえ。このツールは、オープンソースのJavaScriptライブラリであるKaTeXを使用して、完全にブラウザ上で動作します。サーバー、ログイン、インストールは不要です。' },
  { question: 'ブロック表示とインライン表示の違いは何ですか？', answer: 'ブロック表示（ディスプレイモード）は、数式を独自の中央揃えの行にレンダリングします。これは独立した方程式に最適です。インライン表示は、数式をテキストの流れの中に小さいサイズでレンダリングします。これは文の中に記号を埋め込むのに便利です。' },
  { question: '数式に構文エラーが表示されるのはなぜですか？', answer: 'LaTeXの構文エラーは、通常、括弧の不一致（例：閉じる括弧なしで\\frac{1と書く）、コマンド名のスペルミス（例：\\fracの代わりに\\Fracと書く）、またはサポートされていないコマンドによって発生します。' },
  { question: 'このツールを使用して数式をWordやNotionに貼り付けることはできますか？', answer: 'はい。「PNG画像をダウンロード」を使用して、レンダリングされた数式の高解像度画像を直接ダウンロードできます。また、「Markdownをコピー」を使用してMarkdownエディタ用のコードブロックを取得できます。' }
];

const howToItems = [
  { name: 'LaTeX数式を入力する', text: '左側のエディタに有効なLaTeX数式を入力します。入力するとリアルタイムでレンダリングされます。' },
  { name: '表示モードを選択する', text: '独立した数式の場合はブロック表示を、テキスト内に埋め込む場合はインライン表示を選択します。' },
  { name: 'フォントサイズを調整する', text: 'フォントサイズスライダーを使用して、プレビューのサイズを変更します。' },
  { name: '好みの形式でエクスポートする', text: '「PNG画像をダウンロード」をクリックして画像を取得するか、「Markdownをコピー」または「LaTeXコードをコピー」をクリックします。' }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text
  }))
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' }
};

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'LaTeX数式レンダラー',
    inputLabel: 'LaTeX数式',
    inputPlaceholder: '例: \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'ブロック表示',
    inlineModeLabel: 'インライン表示',
    fontSizeLabel: 'フォントサイズ',
    downloadPngButton: 'PNG画像をダウンロード',
    copyMarkdownButton: 'Markdownをコピー',
    copyLatexButton: 'LaTeXコードをコピー',
    resetButton: 'リセット',
    previewTitle: 'ライブプレビュー',
    copiedToast: 'クリップボードにコピーしました',
    errorLabel: '構文エラー',
    emptyPreviewHint: '上にLaTeXを入力すると、ここにレンダリングされた数式が表示されます。',
    faqTitle: 'よくある質問',
    bibliographyTitle: '参考文献とリソース'
  },
  seo: [
    { type: 'title', text: 'ブラウザで数学の数式を記述してレンダリングする方法', level: 2 },
    { type: 'paragraph', html: 'LaTeXは、世界中の大学、ジャーナル、研究者によって使用されている科学および数学の組版の標準です。しかし、ほとんどのLaTeX環境では複雑なインストールが必要です。このツールは、セットアップなしでブラウザ上で高速なKaTeXを使用して数式を瞬時にレンダリングします。' },
    { type: 'title', text: 'KaTeXとは？ブラウザレンダリングに最適な理由', level: 3 },
    { type: 'paragraph', html: 'KaTeXは、Khan Academyによって作成されたオープンソースのJavaScriptライブラリで、ブラウザ上で驚異的な速度と正確さでLaTeX数式をレンダリングします。完全にクライアント側でレンダリングするため、リアルタイムのインタラクティブツールに最適です。' },
    { type: 'paragraph', html: 'KaTeXは、あらゆるサイズで完全にスケーリングするクリーンでアクセシブルなHTMLおよびSVG出力を生成します。' },
    { type: 'title', text: '学生と研究者のための一般的なユースケース', level: 3 },
    { type: 'list', items: [
      '課題を提出する前に、教科書や講義ノートの数式をレンダリングしてLaTeX構文を確認する。',
      '数式をPNG画像としてダウンロードし、Word、Googleドキュメント、Notionに直接貼り付ける。',
      'LaTeX数式をMarkdownコードブロックに変換して、ドキュメントやGitHub READMEで使用する。',
      'Overleafで作成した論文に数式を含める前に、プレビューする。'
    ] },
    { type: 'title', text: '重要なLaTeX数学コマンドのリファレンス', level: 3 },
    { type: 'paragraph', html: 'よく使用されるコマンドには、分数の\\frac{a}{b}、平方根の\\sqrt{x}、総和の\\sum、積分の\\intなどがあります。' },
    { type: 'title', text: 'ブロック表示 vs インライン表示：それぞれの使用場面', level: 3 },
    { type: 'paragraph', html: 'ブロック表示は数式を独自の中央揃えの行に配置し、インライン表示は数式を現在のテキスト行内に収まるように縮小します。' },
    { type: 'tip', html: '構文エラーのデバッグに関するヒント：LaTeXでは、すべての開始括弧に対応する終了括弧が必要です。' },
    { type: 'title', text: '数式のエクスポート：PNG vs Markdown vs LaTeXソース', level: 3 },
    { type: 'paragraph', html: 'PNGエクスポートは、ブラウザのCanvas APIを使用してKaTeXからのSVG出力を高解像度画像としてラスタライズします。' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
