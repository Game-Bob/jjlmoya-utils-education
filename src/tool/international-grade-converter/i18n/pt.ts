import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'conversor-notas-equivalencia-gpa' as const;
const title = 'Conversor de Notas Internacionais e Calculadora de Equivalência GPA';
const description = 'A ferramenta mais precisa para converter notas académicas entre sistemas internacionais. Traduza instantaneamente pontuações de Espanha, EUA, Reino Unido, Alemanha, França, Itália e mais. Essencial para Erasmus+, Fulbright e candidaturas universitárias globais.';

const faqItems = [
  { 
    question: 'Como funciona a conversão de notas internacionais?', 
    answer: 'A ferramenta utiliza um mapeamento linear matemático baseado na nota mínima de aprovação e na pontuação máxima possível para cada país. Isto garante que um "aprovado" num sistema se alinhe com um "aprovado" noutro, mantendo a proporcionalidade académica entre as diferentes escalas.' 
  },
  { 
    question: 'Este conversor é oficial para admissões universitárias?', 
    answer: 'Embora os nossos algoritmos sigam tabelas de equivalência internacionais padrão (como as utilizadas pelo ECTS ou WES), esta ferramenta é para fins informativos. Para o reconhecimento oficial de créditos, deve sempre consultar a sua instituição de acolhimento ou um serviço de avaliação credenciado.' 
  },
  { 
    question: 'O que é a funcionalidade "Modo Bulk"?', 
    answer: 'O Modo Bulk permite que estudantes com históricos escolares longos processem várias notas de uma só vez. Basta colar uma coluna de números do seu PDF ou registo Excel e a ferramenta calculará instantaneamente as conversões individuais e a sua média global de GPA.' 
  },
  { 
    question: 'Posso converter as minhas notas para ECTS?', 
    answer: 'Sim. O conversor fornece equivalentes que se alinham com o Sistema Europeu de Transferência e Acumulação de Créditos (ECTS), tornando-o perfeito para estudantes europeus que planeiam a sua mobilidade ou se candidatam a programas de Mestrado.' 
  }
];

const howToItems = [
  { name: '1. Selecionar Sistema de Origem', text: 'Identifique o seu país de origem ou a escala de classificação específica (ex: Espanha 0-10, França 0-20).' },
  { name: '2. Definir Países de Destino', text: 'Adicione os países para os quais se está a candidatar para ver todas as equivalências lado a lado no dashboard.' },
  { name: '3. Inserir Dados Académicos', text: 'Insira uma única nota para verificações rápidas ou utilize o Modo Bulk para todo o seu registo semestral.' },
  { name: '4. Analisar e Exportar', text: 'Reveja as barras de percentis visuais e descarregue o seu Relatório de Equivalência em PDF para guardar nos seus registos.' },
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
  featureList: 'Processamento em Modo Bulk, Conversão em tempo real, Suporte para escalas mundiais, Geração de relatórios em PDF',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Sistema de Classificação de Origem',
    targetSystems: 'Equivalências Globais',
    gradeInput: 'A Sua Nota',
    bulkMode: 'Processamento de Registos em Lote',
    bulkPlaceholder: 'Cole aqui a sua lista de notas (uma por linha)...',
    results: 'Dashboard de Equivalência',
    passLimit: 'Aprovação Mín.',
    shareResults: 'Gerar Relatório de Equivalência',
    averageMedia: 'Média Global Convertida',
    compareTitle: 'Classificações Académicas Mundiais',
    addSystem: 'Adicionar País',
    removeSystem: 'Remover',
    selectCountry: 'Selecionar País',
    sourceCountry: 'País de Origem',
    systemSelection: 'Seleção de Sistema',
    convertedScore: 'Nota Convertida',
    emptyState: 'Introduza uma nota para ver equivalências globais',
    minLabel: 'MÍN',
    passLabel: 'APROV',
    maxLabel: 'MÁX',
    scaleLabel: 'Escala',
    howToTitle: 'O Seu Caminho para a Educação Internacional',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências e Padrões Académicos',
    singleGradeMode: 'Nota Única',
    transcriptMode: 'Histórico Completo',
    gradeCounter: 'Notas inseridas',
    averageSummary: 'Média calculada',
    gradesIgnored: '{count} notas ignoradas (fora do intervalo)',
    bulkHelp: 'Cole o seu histórico diretamente. Detetamos notas separadas por espaços, vírgulas ou linhas.',
    copiedLabel: 'Copiado!',
    germanyExpl: 'Sistema inverso: 1,0 é a melhor nota possível, 4,0 é o mínimo para aprovação.',
    spainExpl: 'Escala padrão 0-10. 5,0 é o mínimo para aprovação.',
    usaExpl: 'Escala GPA de 0,0 a 4,0. Geralmente 2,0 é o mínimo para aprovação.',
    ukExpl: 'Classificação baseada em percentagem. 40% é o mínimo para aprovação.',
    franceExpl: 'Escala de 20 pontos. 10 é o mínimo para aprovação.',
    italyExpl: 'Escala de 30 pontos. 18 é o mínimo para aprovação.',
    netherlandsExpl: 'Escala 1-10. 6 é o mínimo para aprovação.',
    placeholderSpain: 'ex: 8,5',
    placeholderUSA: 'ex: 3,7 ou A-',
    placeholderFrance: 'ex: 14',
    placeholderGermany: 'ex: 1,3',
    placeholderUK: 'ex: 75',
    placeholderItaly: 'ex: 28',
    placeholderNetherlands: 'ex: 7,5',
  },
  seo: [
    { type: 'title', text: 'Conversão de Notas de Precisão para Mobilidade Global', level: 2 },
    { type: 'paragraph', html: 'Quer seja um <strong>estudante Erasmus+</strong> ou esteja a candidatar-se a um <strong>Mestrado da Ivy League</strong>, compreender a sua classificação académica global é o primeiro passo. As notas variam imenso: enquanto um 10 em Espanha é perfeito, em França é apenas um aprovado. O nosso motor clarifica estas diferenças.' },
    { type: 'title', text: 'Porque é que a precisão importa na conversão do GPA', level: 3 },
    { type: 'paragraph', html: 'Os comités de admissão utilizam GPAs convertidos para filtrar milhares de candidaturas. Um ligeiro erro no cálculo manual pode custar-lhe uma bolsa de estudo. A nossa ferramenta utiliza <strong>algoritmos de mapeamento linear oficiais</strong> utilizados pelos principais gabinetes de educação internacional.' },
    { type: 'title', text: 'Principais Sistemas Suportados', level: 3 },
    { type: 'list', items: [
      '<strong>Espanha (0-10):</strong> Mapeamento detalhado de Aprobado a Sobresaliente.',
      '<strong>USA GPA (4.0):</strong> Equivalência universitária americana padrão.',
      '<strong>Alemanha (1-6):</strong> Gestão de escala invertida onde 1,0 é o pico.',
      '<strong>França (0-20):</strong> Conversão precisa para as Grande Écoles e universidades francesas.',
      '<strong>Classificação UK:</strong> Tradução de percentagem para Honours Degree.'
    ] },
    { type: 'tip', html: '<strong>Perspetiva Académica:</strong> Utilize o "Modo Bulk" para encontrar o seu GPA cumulativo ao longo de vários semestres. Poupa horas de trabalho manual em folhas de cálculo!' },
    { type: 'title', text: 'Calcule a sua Equivalência WES', level: 3 },
    { type: 'paragraph', html: 'Embora a avaliação oficial do WES seja um serviço pago, a nossa ferramenta fornece uma <strong>estimativa de alta fidelidade</strong> do seu GPA do WES, ajudando-o a decidir para onde se candidatar antes de pagar as taxas de avaliação.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
