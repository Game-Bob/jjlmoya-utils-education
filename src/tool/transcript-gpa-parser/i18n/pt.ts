import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'analisador-historico-academico-gpa' as const;
const title = 'Leitor e Calculador de GPA de Histórico Escolar';
const description = 'Calcule instantaneamente o seu GPA acumulado e a média ponderada copiando e colando o texto bruto do seu histórico escolar universitário. Funciona de forma totalmente offline.';

const faqItems = [
  {
    question: 'Como funciona o processamento automático?',
    answer: 'O analisador lê o texto colado linha por linha, dividindo-o em colunas com base em espaços, tabulações ou pontuação. Em seguida, avalia os valores para identificar automaticamente qual coluna contém os nomes das disciplinas, notas e créditos.'
  },
  {
    question: 'Os meus dados académicos estão seguros?',
    answer: 'Sim, totalmente. Tanto o processamento como os cálculos de GPA são executados diretamente no navegador do seu dispositivo. Nenhum dado é enviado para qualquer servidor, mantendo o seu histórico escolar 100% privado.'
  },
  {
    question: 'E se as colunas forem identificadas incorretamente?',
    answer: 'Pode ajustá-las facilmente. Cada coluna da tabela detetada tem um menu suspenso no cabeçalho onde pode selecionar manualmente se essa coluna representa o nome da disciplina, nota, créditos ou se deve ser ignorada.'
  },
  {
    question: 'Suporta notas por letras e diferentes escalas?',
    answer: 'Sim, suporta notas padrão em formato de letra (A, B, C, D, F) bem como escalas numéricas (0-10, 0-20, 0-100). Pode configurar o limite máximo da escala para corresponder ao sistema da sua universidade.'
  }
];

const howToItems = [
  {
    name: 'Copie o seu histórico',
    text: 'Aceda ao portal da sua universidade ou folha de notas, selecione o texto e copie-o.'
  },
  {
    name: 'Cole o texto',
    text: 'Cole o texto copiado na área de texto desta ferramenta.'
  },
  {
    name: 'Verifique e associe',
    text: 'Reveja a tabela gerada automaticamente. Se necessário, ajuste a função de cada coluna nos cabeçalhos.'
  },
  {
    name: 'Obtenha o seu GPA',
    text: 'Visualize instantaneamente o seu GPA ponderado calculado e o total de créditos no final da página.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Cole o seu histórico escolar aqui',
    pasteAreaPlaceholder: 'Cole o texto copiado do Moodle, Canvas ou da página de histórico escolar da sua universidade...',
    parsedTitle: 'Dados do histórico processados',
    columnSelect: 'Associar coluna',
    subjectName: 'Nome da disciplina',
    grade: 'Nota',
    credits: 'Créditos',
    ignore: 'Ignorar',
    gpaResult: 'GPA acumulado',
    totalCredits: 'Total de créditos',
    emptyState: 'Cole os dados do seu histórico acima para pré-visualizar e editar as linhas aqui.',
    scaleLabel: 'Limite da escala de notas',
    customScale: 'Escala de nota máxima',
    exampleSubject: 'Cálculo I',
    newSubjectPlaceholder: 'Nova disciplina',
    clearBtn: 'Limpar texto',
    errorFormat: 'Não conseguimos detetar colunas claras. Tente copiar e colar um formato de tabela ou lista.'
  },
  seo: [
    { type: 'title', text: 'Como extrair e calcular o GPA a partir de qualquer histórico escolar', level: 2 },
    { type: 'paragraph', html: 'Calcular a sua média académica não deveria exigir a introdução manual de dezenas de disciplinas. Esta ferramenta extrai dados de qualquer texto copiado e colado para calcular o seu GPA.' },
    { type: 'title', text: 'Por que usar um analisador de histórico escolar?', level: 3 },
    { type: 'paragraph', html: 'Os portais universitários costumam apresentar os relatórios de notas em tabelas HTML complexas. Ao copiar e colar diretamente nesta ferramenta, o nosso motor heurístico extrai instantaneamente as disciplinas, notas e créditos sem erros de dactilografia.' },
    { type: 'title', text: 'Seguro, privado e rápido', level: 3 },
    { type: 'paragraph', html: 'Como o motor de processamento corre localmente em JavaScript, o seu registo académico nunca sai do seu navegador. Pode processar páginas com centenas de linhas em milissegundos.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
