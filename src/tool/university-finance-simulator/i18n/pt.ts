import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'simulador-financiamento-universitario' as const;
const title = 'Simulador de Financiamento Universitário';
const description =
  'Modele o custo real da faculdade, compare cenários de bolsas de estudo e projete os pagamentos de empréstimos estudantis com uma linha do tempo visual de amortização e uma tabela detalhada.';

const faqItems = [
  {
    question: 'O que este simulador inclui no custo total?',
    answer:
      'Combina a mensalidade anual, os custos de vida mensais, o número de anos de estudo e os meses em que espera pagar despesas de subsistência em cada ano letivo. Depois subtrai as bolsas de estudo e qualquer contribuição inicial antes de calcular o empréstimo.',
  },
  {
    question: 'Como é calculado o pagamento mensal do empréstimo estudantil?',
    answer:
      'A ferramenta utiliza a fórmula padrão de empréstimo amortizável. Converte a taxa de juros anual em uma taxa mensal e distribui o reembolso ao longo do número de anos selecionado.',
  },
  {
    question: 'Posso usá-lo para empréstimos familiares sem juros ou subsídios?',
    answer:
      'Sim. Defina a taxa de juros para 0 para simular um plano de pagamento sem juros. Também pode aumentar a bolsa ou a contribuição inicial para refletir subsídios, poupanças ou apoio familiar.',
  },
  {
    question: 'Por que o valor emprestado difere tanto entre perfis?',
    answer:
      'Os custos de vida acumulam-se rapidamente ao longo de vários anos letivos. Um plano de estudante que vive com a família e um plano de alojamento no campus podem gerar cargas de dívida muito diferentes, mesmo quando a mensalidade é a mesma.',
  },
  {
    question: 'A data de finalização do pagamento inclui períodos de carência ou planos baseados na renda?',
    answer:
      'Não. Esta versão assume que o reembolso começa num calendário fixo normal com pagamentos mensais iguais. É ideal para planejamento básico, não para modelar todos os casos específicos das políticas de crédito.',
  },
];

const howToItems = [
  {
    name: 'Defina o seu perfil de estudo',
    text: 'Use um dos perfis rápidos ou mova os controles deslizantes manualmente para refletir a sua mensalidade, custos de vida e pacote de bolsas de estudo.',
  },
  {
    name: 'Ajuste as premissas de financiamento',
    text: 'Escolha quanto pode pagar inicialmente, depois defina a taxa de juros anual e os anos de reembolso para refletir as condições prováveis do seu empréstimo.',
  },
  {
    name: 'Leia o painel financeiro',
    text: 'As janelas de resumo mostram o custo total bruto, o capital emprestado, o pagamento mensal estimado e o total de juros para avaliar a viabilidade rapidamente.',
  },
  {
    name: 'Inspecione a curva de reembolso',
    text: 'Use o gráfico para ver como evoluem ano a ano o saldo devedor, o valor total pago e os juros acumulados.',
  },
  {
    name: 'Abra a tabela de amortização',
    text: 'Expanda a tabela mensal se precisar de uma análise detalhada de amortização de capital vs juros para orçamento ou discussões familiares.',
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
    currency: 'Moeda',
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
    annualTuition: 'Mensalidade anual',
    monthlyLivingCost: 'Custo de vida mensal',
    studyYears: 'Annos de estudo',
    studyMonthsPerYear: 'Meses de custos de vida por ano',
    scholarshipPerYear: 'Bolsa de estudo por ano',
    upfrontContribution: 'Contribuição inicial',
    aprPercent: 'Taxa de juros anual',
    repaymentYears: 'Anos de reembolso',
    quickProfiles: 'Perfis rápidos',
    commuterProfile: 'Estudante local (vive com a família)',
    balancedProfile: 'Equilibrado',
    campusProfile: 'Alojamento no campus',
    stickerCost: 'Custo total de estudo',
    borrowedPrincipal: 'Capital emprestado',
    monthlyPayment: 'Pagamento mensal estimado',
    totalInterest: 'Total de juros',
    projectionTitle: 'Projeção de dívida',
    scheduleTitle: 'Tabela de amortização mensal',
    chartBalance: 'Saldo devedor',
    chartPaid: 'Total pago',
    chartInterest: 'Juros pagos',
    openSchedule: 'Abrir tabela completa',
    closeSchedule: 'Ocultar tabela completa',
    monthColumn: 'Mês',
    paymentColumn: 'Pagamento',
    principalColumn: 'Capital',
    interestColumn: 'Juros',
    balanceColumn: 'Saldo',
    timelineLabel: 'Cronograma de quitação da dívida',
    affordabilityHint:
      'Mantenha o seu pagamento mensal projetado em linha com a sua renda líquida provável do primeiro ano, não apenas com o seu orçamento estudantil atual.',
    debtFreeLabel: 'Livre de dívidas após',
    scholarshipShare: 'Cobertura de bolsas',
    livingShare: 'Proporção de custos de vida',
    degreeCostLabel: 'Proporção de mensalidades',
    blendedCost: 'Custo anual médio',
    totalPaid: 'Total reembolsado',
    averageYearlyCost: 'Custo médio por ano',
    plannerLabel: 'Planejador de custos',
    resultsLabel: 'Perspectiva de financiamento',
    assumptionsLabel: 'Premissas do empréstimo',
    scheduleHint:
      'Detalhe mês a mês de como cada pagamento é dividido entre capital e juros.',
    noDebtNeeded: 'Nenhuma dívida necessária com a configuração atual',
    exactAmount: 'Valor exato',
    monthWord: 'Mês',
    paymentWord: 'pagamento',
    principalWord: 'capital',
    interestWord: 'juros',
    remainingWord: 'restante',
    perMonthSuffix: '/mês',
    yearsSuffix: 'anos',
    monthsSuffix: 'meses',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Planeje o Custo Real da Faculdade Antes de Tomar Empréstimos', level: 2 },
    {
      type: 'summary',
      title: 'Para que este simulador de custo universitário é útil',
      items: [
        'Estimar o custo total de um curso, não apenas a mensalidade divulgada.',
        'Comparar instituições, opções de moradia e pacotes de bolsas com a mesma base de endividamento.',
        'Avaliar se um plano de pagamento parece viável antes de se comprometer com um empréstimo.',
      ],
    },
    {
      type: 'paragraph',
      html: 'O folheto de uma faculdade costuma destacar apenas um número: a matrícula. A vida real é mais complexa. Também deve pagar moradia, alimentação, transporte, livros, seguros e juros sobre o valor emprestado. É por isso que um simulador útil de empréstimos estudantis não deve se limitar ao preço de tabela. Deve ajudá-lo a responder à pergunta mais difícil: <em>quanto esta decisão me custará ao longo de todo o curso, qual dívida restará após a ajuda e que tipo de pressão financeira enfrentarei após a formatura?</em>',
    },
    { type: 'title', text: 'Decisões que este simulador ajuda a tomar', level: 3 },
    {
      type: 'list',
      items: [
        'Se um pacote de bolsas realmente altera o saldo final da dívida ou apenas suaviza o anúncio de marketing.',
        'Se morar no campus, viajar diariamente ou compartilhar alojamento oferece o equilíbrio de longo prazo mais saudável.',
        'Se um prazo de reembolso maior vale a pena pelo pagamento mensal menor, uma vez considerando o juro total.',
        'Se o programa continua viável após incluir os custos de vida, e não apenas a mensalidade.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Use isso antes de dizer sim a uma instituição',
      html: '<ul><li>Compare duas ou três ofertas usando as mesmas premissas de custo de vida.</li><li>Teste um cenário de bolsas de estudo otimista e outro realista.</li><li>Verifique se o pagamento mensal ainda parece aceitável se a dívida aumentar ou o reembolso demorar mais.</li></ul>',
    },
    { type: 'title', text: 'Como ler os resultados sem se enganar', level: 3 },
    {
      type: 'table',
      headers: ['Métrica', 'O que significa', 'Por que importa'],
      rows: [
        ['Custo total de estudo', 'Mensalidade mais custos de vida ao longo de todo o curso', 'Este é o orçamento real que você está tentando financiar, não o número simplificado do folheto'],
        ['Capital emprestado', 'Valor que ainda resta cobrir após bolsas e dinheiro inicial', 'Esta é a dívida que o acompanhará no reembolso e merece a maior atenção'],
        ['Pagamento mensal estimado', 'Valor fixo de reembolso baseado na taxa e na duração do reembolso', 'É o melhor indicador rápido de pressão financeira pós-formatura'],
        ['Total de juros', 'Custo extra pago além do valor emprestado', 'Ajuda a ver se um pagamento mensal menor está silenciosamente tornando o empréstimo muito mais caro'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'variáveis principais para testar sob estresse primeiro' },
        { value: '2', label: 'cenários a comparar no mínimo' },
        { value: '1', label: 'valor de pagamento mensal para testar a viabilidade' },
        { value: '0', label: 'confiança exclusiva apenas nas mensalidades você deve aceitar' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Prazo menor',
          description: 'Melhor quando seu fluxo de caixa futuro for forte o suficiente para absorver uma parcela maior.',
          highlight: true,
          points: [
            'Pagamento mensal mais alto',
            'Menor total de juros',
            'Dívida quitada mais rápido',
          ],
        },
        {
          title: 'Prazo maior',
          description: 'Melhor quando precisa de fôlego no início, mas apenas se compreender o custo adicional de longo prazo.',
          points: [
            'Pagamento mensal baixo',
            'Maior total de juros',
            'Mais flexibilidade, mas maior custo a longo prazo',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Teste de estresse útil:</strong> reduza a bolsa, aumente o aluguel levemente e estenda o reembolso por alguns anos. Se o plano só funciona na versão mais otimista, ainda não é um plano robusto.',
    },
    { type: 'title', text: 'Uma forma prática de comparar duas instituições', level: 3 },
    {
      type: 'list',
      items: [
        'Insira as mesmas premissas de custo de vida para ambas as instituições primeiro para não comparar realidades diferentes.',
        'Depois, atualize apenas as variáveis que diferem de verdade: mensalidade, bolsa de estudos e provável moradia.',
        'Concentre-se no capital emprestado e no pagamento mensal antes de se concentrar em prestígio ou marca.',
        'Se uma opção só ganha porque você assume custos de vida invulgarmente baratos, encare isso como um sinal de alerta.',
      ],
    },
    {
      type: 'card',
      title: 'O que as famílias costumam perder',
      html: 'Uma escola que parece mais barata na mensalidade pode gerar <strong>mais dívida no geral</strong> se os custos de vida forem estruturalmente mais altos ou se o apoio das bolsas for menos estável de ano para ano.',
    },
    { type: 'title', text: 'Limites de qualquer projeção de custos universitários', level: 3 },
    {
      type: 'proscons',
      title: 'Pontos fortes e limites',
      items: [
        {
          pro: 'Estimativa rápida para comparar várias opções de estudo',
          con: 'Não modela carências, moratórias ou reembolso baseado na renda',
        },
        {
          pro: 'Torna os custos de vida visíveis em vez de os ocultar atrás da mensalidade',
          con: 'Assume uma taxa de juros fixa e pagamento mensal fixo',
        },
        {
          pro: 'Mostra a trajetória da dívida visualmente em vez de apenas reportar o total de cabeçalho',
          con: 'Não considera impostos, inflação ou mudanças salariais futuras',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Taxa de juros',
          definition: 'Custo anual do empréstimo convertido em taxa mensal para os cálculos de reembolso.',
        },
        {
          term: 'Capital',
          definition: 'O valor realmente emprestado após as bolsas de estudos e os pagamentos iniciais reduzirem o custo total.',
        },
        {
          term: 'Amortização',
          definition: 'O processo mensal de pagamento de uma dívida através de prestações regulares que cobrem os juros primeiro e o capital ao longo do tempo.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Próximo passo recomendado',
      html: 'Use este simulador para restringir sua lista, depois valide a opção vencedora com a carta oficial de auxílio financeiro, a realidade da moradia e a renda inicial esperada para o seu campo antes de tomar a decisão final.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
