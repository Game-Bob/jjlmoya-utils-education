import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'criador-matriz-rubrica' as const;
const title = 'Criador de Matriz de Rubricas';
const description = 'Crie rubricas de avaliação ponderadas e editáveis com níveis de desempenho, validação ao vivo de peso total de 100%, exportação para CSV e layout pronto para impressão.';

const faqItems = [
  { question: 'O que é uma matriz de rubrica?', answer: 'Uma matriz de rubrica é uma grade de avaliação que organiza os critérios em linhas e os níveis de desempenho em colunas. Cada célula descreve como é o desempenho nesse nível, tornando a avaliação mais transparente e consistente.' },
  { question: 'Por que os pesos dos critérios devem somar 100%?', answer: 'Um total de 100% torna o modelo de avaliação explícito. Se o total estiver abaixo ou acima de 100%, os estudantes e avaliadores não conseguem interpretar claramente quanto cada critério contribui para a pontuação final.' },
  { question: 'Os estudantes podem utilizar esta ferramenta?', answer: 'Sim. Os estudantes podem usá-la para compreender melhor as expectativas das tarefas, planejar rascunhos ou criar listas de verificação para avaliação por pares antes da entrega.' },
  { question: 'Que opções de exportação estão incluídas?', answer: 'A exportação para CSV é útil para planilhas e configuração em sistemas LMS. O botão de impressão abre o fluxo de impressão do navegador, onde você pode salvar como PDF usando o diálogo de impressão do sistema operacional.' },
];

const howToItems = [
  { name: 'Editar os critérios', text: 'Clique no nome de qualquer critério e substitua-o pela habilidade, resultado ou requisito que deseja avaliar.' },
  { name: 'Definir os pesos', text: 'Ajuste cada porcentagem até que a barra de peso em tempo real mostre uma rubrica equilibrada em 100%.' },
  { name: 'Descrever os níveis de desempenho', text: 'Clique em cada célula descritiva e escreva evidências observáveis para esse nível de desempenho.' },
  { name: 'Adicionar estrutura quando necessário', text: 'Utilize os botões de adicionar para criar critérios ou níveis de desempenho adicionais, e remova as linhas ou colunas que não forem úteis.' },
  { name: 'Exportar ou imprimir', text: 'Baixe um arquivo CSV para planilhas ou utilize a opção de imprimir para criar uma versão PDF limpa.' },
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
    criterionHeader: 'Critério',
    weightHeader: 'Peso',
    levelSectionLabel: 'Níveis de desempenho',
    levelBadgePrefix: 'N',
    addCriterion: 'Adicionar critério',
    addLevel: 'Adicionar nível',
    removeCriterion: 'Remover critério',
    removeLevel: 'Remover nível',
    exportCsv: 'Exportar CSV',
    printRubric: 'Imprimir / PDF',
    csvFilename: 'matriz-rubrica.csv',
    pdfDocumentTitle: 'Matriz de rubrica',
    pdfImageAlt: 'Matriz de rubrica',
    confirmDeleteTitle: 'Eliminar este critério?',
    confirmDeleteText: 'Isto removerá o critério e todos os descritores escritos para os seus níveis de desempenho.',
    cancelDelete: 'Cancelar',
    confirmDelete: 'Eliminar critério',
    totalWeight: 'Ponderação total',
    balanced: 'Equilibrado exatamente em 100%',
    under: 'Adicione peso até que a rubrica atinja 100%',
    over: 'Reduza o peso até que a rubrica volte a 100%',
    emptyCell: 'Clique para editar',
    newCriterionTemplate: 'Critério {index}',
    newDescriptorTemplate: 'Descritor {index}.{level}',
    newLevelTemplate: 'Nível {index}',
    defaultLevels: [
      { name: 'Excelente', score: 4 },
      { name: 'Proficiente', score: 3 },
      { name: 'Em desenvolvimento', score: 2 },
      { name: 'Inicial', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Qualidade do argumento',
        weight: 35,
        cells: [
          'Afirmação clara com raciocínio detalhado',
          'Afirmação clara com raciocínio adequado',
          'A afirmação está presente, mas é irregular',
          'A afirmação é confusa ou está ausente',
        ],
      },
      {
        name: 'Uso de evidências',
        weight: 30,
        cells: [
          'A evidência é precisa e integrada',
          'A evidência apoia a maioria das afirmações',
          'A evidência é geral ou fracamente conectada',
          'A evidência está ausente ou é incorreta',
        ],
      },
      {
        name: 'Organização',
        weight: 20,
        cells: [
          'A estrutura guia o leitor com fluidez',
          'A estrutura é lógica',
          'A estrutura tem lacunas ou repetições',
          'A estrutura é difícil de seguir',
        ],
      },
      {
        name: 'Estilo académico',
        weight: 15,
        cells: [
          'Estilo polido e convenções precisas',
          'Erros menores não impedem a compreensão',
          'Erros frequentes distraem o leitor',
          'Erros tornam o significado confuso',
        ],
      },
    ],
    faqTitle: 'Perguntas frequentes',
    bibliographyTitle: 'Referências e recursos académicos',
  },
  seo: [
    { type: 'title', text: 'Desenhe rubricas que os estudantes realmente possam utilizar', level: 2 },
    { type: 'paragraph', html: 'Uma rubrica de avaliação sólida é mais do que uma folha de notas. É um mapa partilhado de expectativas. Os estudantes usam-na para compreender como é a qualidade antes de entregar o trabalho, os professores usam-na para classificar de forma mais consistente e os revisores usam-na para explicar os comentários com menos ambiguidade. Este criador torna a estrutura visível: critérios, pesos, níveis de desempenho e descritores estão todos numa matriz editável.' },
    { type: 'diagnostic', variant: 'warning', title: 'Quando uma rubrica precisa de revisão', html: '<ul><li>Vários critérios sobrepõem-se tanto que o mesmo erro é penalizado duas vezes.</li><li>O peso total não é igual a 100%, dificultando a interpretação da nota final.</li><li>Os descritores utilizam palavras vagas como bom, fraco ou excelente sem evidência observável.</li><li>Existem demasiados níveis para que os avaliadores os distingam de forma fiável.</li></ul>' },
    { type: 'title', text: 'Escolha de critérios e pesos', level: 3 },
    { type: 'table', headers: ['Elemento da rubrica', 'Boa prática', 'Problema comum'], rows: [['Critérios', 'Avaliar competências ou resultados distintos, como argumento, evidência, método, precisão ou apresentação.', 'Misturar várias competências numa única linha torna o feedback confuso.'], ['Pesos', 'Fazer corresponder o peso à prioridade de aprendizagem e ao propósito da tarefa.', 'Dar o mesmo peso a cada linha, mesmo quando alguns resultados importam mais.'], ['Níveis', 'Usar de 3 a 5 níveis que os avaliadores consigam distinguir de forma consistente.', 'Adicionar demasiados níveis com diferenças de redação mínimas.'], ['Descritores', 'Descrever a evidência observável no trabalho do estudante.', 'Utilizar etiquetas que soam a avaliação, mas não guiam a revisão.']] },
    { type: 'comparative', title: 'Rubricas analíticas vs holísticas', columns: 2, items: [{ title: 'Rubrica analítica', description: 'Divide o desempenho em critérios e pesos separados. É melhor quando os estudantes precisam de feedback direcionado ou quando vários avaliadores devem alinhar-se.', highlight: true, points: ['Classificação transparente', 'Feedback específico', 'Funciona bem para tarefas complexas'] }, { title: 'Rubrica holística', description: 'Oferece um único julgamento global. É mais rápida de aplicar, mas menos diagnóstica para revisão ou avaliação por pares.', points: ['Avaliação mais rápida', 'Útil para verificações rápidas', 'Feedback menos detalhado'] }] },
    { type: 'tip', html: '<strong>Escreva descritores baseados em evidências, não em adjetivos.</strong> Em vez de "análise excelente", descreva o que faz uma análise excelente: liga a evidência à afirmação, aborda as limitações e explica por que a evidência é importante.' },
    { type: 'title', text: 'Como validar uma rubrica ponderada', level: 3 },
    { type: 'paragraph', html: 'Os pesos comunicam prioridades. Um critério que vale 40% orienta o esforço do estudante de forma diferente do que um que vale 10%. O total em tempo real desta ferramenta é intencionalmente rigoroso: a rubrica está equilibrada apenas quando a soma é exatamente 100%. Se o total for inferior a 100%, uma parte da classificação fica indefinida. Se superar 100%, o modelo promete pontos a mais e cria confusão.' },
    { type: 'summary', title: 'Um fluxo de trabalho prático para rubricas', items: ['Comece com os resultados de aprendizagem antes de escrever as linhas.', 'Limite a matriz aos critérios que realmente afetarão o feedback.', 'Redija os descritores em linguagem simples e observável.', 'Verifique a ponderação em 100% antes de partilhar a rubrica.', 'Exporte para CSV quando precisar de configurar uma planilha ou LMS.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
