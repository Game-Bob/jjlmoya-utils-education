import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'planejador-tempo-leitura-densidade-notas' as const;
const title = 'Planejador de Tempo de Leitura e Densidade de Notas';
const description = 'Estime quanto tempo sua leitura acadêmica levará incluindo a tomada de notas e divida o trabalho em sessões práticas de estudo.';

const faqItems = [
  { question: 'Por que a tomada de notas influencia tanto no tempo de leitura?', answer: 'A leitura acadêmica raramente é apenas passar os olhos pelas palavras. Cada marcação, resumo, pergunta nas margens ou cartão de estudo adiciona tempo de processamento. Planejar a densidade de notas separadamente evita que uma estimativa otimista de páginas por hora se transforme em acúmulo de matérias na véspera da entrega.' },
  { question: 'Qual é uma boa estimativa de páginas por hora?', answer: 'Para livros de texto densos, 15 a 25 páginas por hora é o padrão. Para leituras mais leves, 30 a 50 páginas por hora pode ser realista. Se o material contiver fórmulas, fontes primárias ou vocabulário desconhecido, comece com uma estimativa mais baixa e ajuste após cronometrar a primeira sessão.' },
  { question: 'Como devo escolher a densidade de notas?', answer: 'Considere de 1 a 2 minutos por página para marcações simples ou um sumário rápido, de 3 a 5 minutos por página para anotações Cornell e mais de 5 minutos por página quando estiver criando flashcards, resolvendo exercícios práticos ou redigindo parágrafos de síntese.' },
  { question: 'Este planejador substitui o cronograma da ementa das disciplinas?', answer: 'Não. Ele ajuda a converter a quantidade de leitura em tempo e sessões de estudo, mas os prazos, seminários, práticas e períodos de revisão ainda precisam ser organizados no seu calendário de rotina.' },
];

const howToItems = [
  { name: 'Insira a carga de leitura', text: 'Adicione a quantidade de páginas ou unidades equivalentes de leitura que precisa concluir.' },
  { name: 'Defina o tempo disponível', text: 'Insira o total de minutos que pode realisticamente dedicar antes da data limite.' },
  { name: 'Estime a velocidade e densidade de notas', text: 'Escolha uma velocidade em páginas por hora e o tempo médio esperado de anotação por página.' },
  { name: 'Divida em sessões', text: 'Defina o número de sessões para ver páginas, minutos e tempo de notas correspondentes a cada uma.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'BRL' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Páginas para ler',
    minutesLabel: 'Minutos disponíveis',
    speedLabel: 'Velocidade de leitura, páginas/hora',
    densityLabel: 'Densidade de notas, minutos/página',
    sessionsLabel: 'Sessões de estudo',
    totalTimeLabel: 'Carga de trabalho total',
    readingTimeLabel: 'Leitura',
    noteTimeLabel: 'Notas',
    coverageLabel: 'Cobertura de tempo',
    pagesSessionLabel: 'Páginas/sessão',
    minutesSessionLabel: 'Minutos/sessão',
    notesSessionLabel: 'Minutos de notas/sessão',
    controlsAriaLabel: 'Controles do plano de leitura',
    minuteUnit: 'min',
    hourUnit: 'h',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências e Recursos Acadêmicos',
    statusLabels: {
      comfortable: 'Plano viável',
      tight: 'Apertado mas possível',
      overloaded: 'Cronograma sobrecarregado',
    },
    resetButton: 'Reiniciar',
  },
  seo: [
    { type: 'title', text: 'Planeje o tempo de leitura com base em anotações e não apenas em páginas', level: 2 },
    { type: 'paragraph', html: 'Muitos estudantes calculam o tempo de leitura dividindo as páginas por uma velocidade média aproximada, esquecendo o maior custo oculto: a tomada de notas. Um capítulo de quarenta páginas pode ser uma tarefa de noventa minutos se for apenas lido por cima, ou uma tarefa de três horas se você anotar, resumir e formular perguntas de revisão. Este planejador separa a velocidade de leitura da densidade de notas para que sua rotina reflita a verdadeira atividade acadêmica.' },
    { type: 'diagnostic', variant: 'info', title: 'Quando seu plano de leitura é provavelmente otimista demais', html: '<ul><li>Seu tempo disponível cobre apenas os minutos de leitura pura, desconsiderando anotações ou resolução de problemas.</li><li>Você utiliza a mesma velocidade estimada de páginas por hora para romances, livros técnicos, artigos científicos e estudos de caso.</li><li>Suas sessões são mais longas do que seu tempo habitual de concentração, fazendo com que a qualidade das anotações das páginas finais caia.</li><li>O prazo limite inclui outras tarefas, mas o plano de leitura assume que cada minuto livre pertence a uma única disciplina.</li></ul>' },
    { type: 'title', text: 'Escolhendo uma velocidade de páginas por hora realista', level: 3 },
    { type: 'table', headers: ['Tipo de material', 'Velocidade inicial', 'Conselho de planejamento'], rows: [['Revisão rápida ou conteúdo familiar', '40-60 páginas/hora', 'Use apenas quando já domina o vocabulário e lê para refrescar a memória, não para fixação.'], ['Capítulo padrão de livro técnico', '20-35 páginas/hora', 'Reduza a velocidade se o capítulo incluir exemplos explicados, diagramas ou avaliações de fim de seção.'], ['Teoria densa, pesquisa ou fonte primária', '8-20 páginas/hora', 'Planeje sessões mais lentas e inclua um bloco de síntese, pois a compreensão geralmente exige releituras.']] },
    { type: 'tip', html: '<strong>Calibre após a primeira sessão.</strong> Cronometre o tempo de leitura e anotação das primeiras dez páginas. Se a calculadora apontar que o plano é viável, mas a sessão real mostrar o oposto, confie na prática e diminua a velocidade estimada.' },
    { type: 'title', text: 'O que significa a densidade de notas', level: 3 },
    { type: 'paragraph', html: 'A densidade de notas é o tempo médio gasto no processamento de cada página durante ou depois da leitura. Um método superficial envolve apenas uma palavra-chave na margem e um destaque em marca-texto. Um método aprofundado inclui notas Cornell, resumos, listas de perguntas e cartões de memória. A escolha correta depende da forma de avaliação: testes objetivos exigem cartões de revisão, exames de redação exigem diagramas de argumentos e matérias exatas exigem exercícios resolvidos.' },
    { type: 'comparative', title: 'Notas superficiais vs notas profundas', columns: 2, items: [{ title: 'Notas superficiais', description: 'Leitura concluída mais rápido, útil para varreduras preliminares, mas a informação é esquecida antes e fica mais difícil revisar depois.', points: ['Ideal para temas conhecidos', 'Menor carga de trabalho imediata', 'Material de revisão menos eficaz'] }, { title: 'Notas profundas', description: 'Consome mais tempo, mas é o melhor método para preparar exames, seminários e redações acadêmicas nas quais detalhes exatos precisam ser recordados.', highlight: true, points: ['Recomendado para avaliações', 'Maior carga de trabalho imediata', 'Excelente material de apoio'] }] },
    { type: 'summary', title: 'Uma regra prática de planejamento', items: ['Procure manter sessões normais de leitura abaixo dos 75 minutos.', 'Se as anotações demandarem mais tempo que a leitura pura, divida a tarefa: leia primeiro, sintetize depois.', 'Reserve a última sessão para consolidação, em vez de planejar novas páginas até a data limite.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
