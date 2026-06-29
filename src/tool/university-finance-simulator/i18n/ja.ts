import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'university-finance-simulator' as const;
const title = '大学進学資金シミュレーター';
const description =
  '大学進学の本当のコストをモデル化し、奨学金シナリオを比較し、ビジュアルな返済スケジュールとアモルティゼーションテーブル（元利均等返済表）で学生ローンの返済を予測します。';

const faqItems = [
  {
    question: 'このシミュレーターは総コストに何を含んでいますか？',
    answer:
      '年間の授業料、月々の生活費、在学年数、および各学年に生活費を支払うと予想される月数を組み合わせます。そこから奨学金と事前の自己資金を差し引いてローン借入額を計算します。',
  },
  {
    question: '学生ローンの毎月の返済額はどのように計算されますか？',
    answer:
      'このツールは、標準的な元利均等返済のローン計算式を使用します。年利を月利に換算し、選択した返済年数に返済を分散させます。',
  },
  {
    question: '親族からの無利子ローンや給付型奨学金（助成金）にも使用できますか？',
    answer:
      'はい。年利を0に設定して、無利子の返済計画をシミュレートします。また、奨学金や事前の自己資金を増やして、助成金、貯蓄、または家族からの支援を反映させることもできます。',
  },
  {
    question: 'なぜプロファイルによって借入額がこれほど大きく異なるのですか？',
    answer:
      '生活費は複数年の在学期間を通じて急速に累積します。自宅通学のプランとキャンパス内居住のプランでは、授業料が同じであっても、最終的な負債額が大きく異なる可能性があります。',
  },
  {
    question: '返済完了日には、猶予期間や所得連動型返済プランが含まれていますか？',
    answer:
      'いいえ。このバージョンでは、均等な月々の支払いで通常の固定スケジュールに従って返済が開始されると想定しています。すべての例外ケースをモデル化するものではなく、基準となる計画を作成するのに最適です。',
  },
];

const howToItems = [
  {
    name: '学習プロファイルを設定する',
    text: 'クイックプロファイルのいずれかを使用するか、スライダーを手動で動かして、授業料、生活費、および奨学金パッケージを反映させます。',
  },
  {
    name: '資金調達の前提条件を調整する',
    text: '事前に支払うことができる自己資金を選択し、年利と返済年数を設定して、想定されるローン条件を反映させます。',
  },
  {
    name: '財務ダッシュボードを確認する',
    text: '概要タイルには、総額の学費、借入元金、毎月の推定返済額、および利息総額が表示され、手軽に返済の実現可能性を評価できます。',
  },
  {
    name: '返済曲線を検証する',
    text: 'グラフを使用して、ローン残高、支払総額、および支払利息の累計が年ごとにどのように推移するかを確認します。',
  },
  {
    name: '返済表を開く',
    text: '予算の策定や家族との話し合いにおいて、元金と利息のより詳細な分析が必要な場合は、月々のテーブルを展開します。',
  },
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
  applicationCategory: 'FinanceApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<UniversityFinanceSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    currency: '通貨',
    usdSymbol: '$',
    eurSymbol: '€',
    gbpSymbol: '£',
    jpySymbol: '¥',
    rubSymbol: '₽',
    inrSymbol: '₹',
    cnySymbol: '¥',
    krwSymbol: '₩',
    brlSymbol: 'R$',
    mxnSymbol: 'Mex$',
    chfSymbol: '₣',
    usd: 'USD',
    eur: 'EUR',
    gbp: 'GBP',
    jpy: 'JPY',
    rub: 'RUB',
    inr: 'INR',
    cny: 'CNY',
    krw: 'KRW',
    brl: 'BRL',
    mxn: 'MXN',
    chf: 'CHF',
    annualTuition: '年間授業料',
    monthlyLivingCost: '月々の生活費',
    studyYears: '在学年数',
    studyMonthsPerYear: '年間の生活費発生月数',
    scholarshipPerYear: '年間の奨学金',
    upfrontContribution: '事前の自己資金',
    aprPercent: '年利',
    repaymentYears: '返済年数',
    quickProfiles: 'クイックプロファイル',
    commuterProfile: '自宅通学',
    balancedProfile: 'バランス',
    campusProfile: 'キャンパスライフ（下宿）',
    stickerCost: '総進学コスト',
    borrowedPrincipal: '借入元金',
    monthlyPayment: '推定月々返済額',
    totalInterest: '利息総額',
    projectionTitle: '負債プロジェクション',
    scheduleTitle: '月々返済スケジュール',
    chartBalance: 'ローン残高',
    chartPaid: '支払総額',
    chartInterest: '支払利息',
    openSchedule: 'スケジュール全体を開く',
    closeSchedule: 'スケジュール全体を隠す',
    monthColumn: '月',
    paymentColumn: '返済額',
    principalColumn: '元金',
    interestColumn: '利息',
    balanceColumn: '残高',
    timelineLabel: '完済までのタイムライン',
    affordabilityHint:
      '毎月の予想返済額は、現在の学生用予算だけでなく、卒業後初年度の推定手取り収入に見合っているかを確認してください。',
    debtFreeLabel: '完済までの期間',
    scholarshipShare: '奨学金の比率',
    livingShare: '生活費の比率',
    degreeCostLabel: '授業料の比率',
    blendedCost: '平均年間コスト',
    totalPaid: '返済総額',
    averageYearlyCost: '年平均コスト',
    plannerLabel: 'コストプランナー',
    resultsLabel: '資金調達の見通し',
    assumptionsLabel: 'ローン前提条件',
    scheduleHint:
      '各返済額が元金と利息にどのように分割されるかの月次詳細。',
    noDebtNeeded: '現在の設定では借入は不要です',
    exactAmount: '正確な金額',
    monthWord: '月',
    paymentWord: '返済額',
    principalWord: '元金',
    interestWord: '利息',
    remainingWord: '残高',
    perMonthSuffix: '/月',
    yearsSuffix: '年',
    monthsSuffix: 'ヶ月',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'ローンを借りる前に大学進学の本当のコストを計画する', level: 2 },
    {
      type: 'summary',
      title: 'この大学コスト計算ツールが役立つ理由',
      items: [
        '公表されている授業料だけでなく、学位取得に必要な全コストを推定します。',
        '同じ負債ベースで、大学、居住の選択肢、および奨学金パッケージを比較します。',
        'ローンを借りる前に、返済計画が現実的であるかどうかを確認します。',
      ],
    },
    {
      type: 'paragraph',
      html: '大学のパンフレットは通常、一つの数字（授業料）を強調しています。しかし実際の生活はもっと複雑です。住居費、食費、交通費、書籍代、保険料、研究用教材、そして借入金の利息も支払う必要があります。だからこそ、役に立つ学生ローンシミュレーターは、パンフレットの価格だけで終わるべきではありません。それは、<em>「この決定は学位取得までに総額でいくらかかるのか」「援助の後にいくらの負債が残るのか」「卒業後にどのような返済負担に直面するのか」という、より難しい問いに答える手助けをします。</em>',
    },
    { type: 'title', text: 'このシミュレーターで下せる意思決定', level: 3 },
    {
      type: 'list',
      items: [
        '奨学金パッケージが本当に負債の結果を変えるのか、それともマーケティングのキャッチコピーを和らげるだけなのか。',
        'キャンパス内での生活、自宅からの通学、あるいはシェアハウスが、長期的に最も健全な選択肢であるかどうか。',
        '利息の総額を考慮した上で、月々の返済額を下げるために返済期間を延ばす価値があるかどうか。',
        '授業料だけでなく生活費を含めた場合でも、そのプログラムがまだ現実的であるかどうか。',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '進学先を決める前にこれを利用してください',
      html: '<ul><li>同じ生活費の前提条件を使用して、2つまたは3つのオファーを比較します。</li><li>最良のケースとより現実的な奨学金シナリオをテストします。</li><li>借入額が増えたり返済期間が長くなったりした場合でも、月々の返済額が許容範囲内であるかを確認します。</li></ul>',
    },
    { type: 'title', text: '自分を欺かずに結果を読み解く方法', level: 3 },
    {
      type: 'table',
      headers: ['指標', 'その意味', 'なぜ重要か'],
      rows: [
        ['総進学コスト', '学位取得期間中の授業料と生活費の合計', 'これはパンフレットの簡略化された数字ではなく、資金を調達しようとしている本当の予算です'],
        ['借入元金', '奨学金と事前の自己資金の後に残る未カバーの金額', 'これは返済段階まであなたを追ってくる負債であり、最も注意を払うべきものです'],
        ['推定月々返済額', '年利と返済期間に基づく固定返済額', '卒業後の財政的圧力を測る最も簡単な指標です'],
        ['利息総額', '借入元金に加えて支払う追加コスト', '月々の返済額を下げることで、ローン全体が密かにどれほど高価になっているかを確認するのに役立ちます'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'まずストレステストをすべき主要なインプット' },
        { value: '2', label: '最低限比較すべきシナリオ' },
        { value: '1', label: '現実味を確認すべき月々返済額' },
        { value: '0', label: '受け入れてはならない授業料のみへの依存度' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: '短期返済',
          description: '将来のキャッシュフローが、より高額な支払いを吸収するのに十分であると予想される場合に適しています。',
          highlight: true,
          points: [
            '高い月々返済額',
            '低い利息総額',
            '負債が早く消える',
          ],
        },
        {
          title: '長期返済',
          description: '初期段階で資金に余裕が必要な場合に適していますが、長期的な追加コストを理解している必要があります。',
          points: [
            '低い月々返済額',
            '高い利息総額',
            '柔軟性は高いが長期的なコストが増加',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>有用なストレステスト：</strong>奨学金を減らし、家賃を少し上げ、返済期間を数年延ばします。最も楽観的なバージョンでしか計画が機能しない場合、それはまだ強固な計画ではありません。',
    },
    { type: 'title', text: '2つの大学を比較する実践的な方法', level: 3 },
    {
      type: 'list',
      items: [
        'まず、両方の大学に対して同じ生活費の前提条件を入力し、異なる現実を比較しないようにします。',
        '次に、授業料、奨学金、および居住の選択肢など、真に異なる変数のみを更新します。',
        '知名度やブランドに惑わされる前に、借入元金と月々の返済額に焦点を当てます。',
        '一方の選択肢が、異常に安い生活費を前提としているためだけに有利になっている場合は、警告の兆候として捉えてください。',
      ],
    },
    {
      type: 'card',
      title: '家族が見落としがちなこと',
      html: '授業料が安く見える大学 resignation でも、その地域の生活費が構造的に高かったり、奨学金のサポートが年によって不安定であったりする場合、総額でより多くの負債を生み出す可能性があります。',
    },
    { type: 'title', text: '大学コスト予測の限界', level: 3 },
    {
      type: 'proscons',
      title: '強みと限界',
      items: [
        {
          pro: '複数の進学先を比較するための迅速な基本推定',
          con: '返済猶予、据置期間、所得連動型返済はモデル化されません',
        },
        {
          pro: '生活費を授業料の裏に隠さずに可視化する',
          con: '固定年利および固定の月々返済額を想定',
        },
        {
          pro: '単に合計総額を報告するだけでなく、負債の推移を視覚的に表示',
          con: '税金、インフレ、将来の昇給は考慮されません',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: '年利',
          definition: '年間の借入コストを示し、返済額計算のために月利に換算されます。',
        },
        {
          term: '借入元金',
          definition: '奨学金や事前の自己資金によって総コストが軽減された後、実際に借り入れる金額。',
        },
        {
          term: 'アモルティゼーション',
          definition: '定期的な返済（最初に利息、徐々に元金を返済）を通じてローンを完済していく月々のプロセス。',
        },
      ],
    },
    {
      type: 'message',
      title: '推奨される次のステップ',
      html: 'このシミュレーターを使用して選択肢を絞り込み、最終的な契約をする前に、実際の支援決定通知書、住居の現状、およびその分野での卒業生の予想初期収入に照らし合わせて勝者を検証してください。',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
