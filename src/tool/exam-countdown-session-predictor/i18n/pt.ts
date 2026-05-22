import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-portuguese' as const;
const title = 'Contagem Regressiva e Planeador de Sessões de Exame';
const description = 'Calcule o seu ritmo diário exato de estudo para chegar ao dia do exame totalmente preparado. Insira a quantidade de matéria, defina os dias de descanso e gere um calendário personalizado.';

const faqItems = [
  { question: 'Por que é melhor estudar diariamente em vez de acumular tudo na véspera?', answer: 'Estudos científicos comprovam que a prática distribuída (espaçar as sessões de estudo ao longo do tempo) resulta numa retenção a longo prazo muito superior e reduz significativamente a ansiedade antes dos testes, em comparação com estudar tudo à última hora.' },
  { question: 'Para que serve a margem de revisão?', answer: 'A margem de revisão reserva um número específico de dias imediatamente antes do exame apenas para revisão geral. O planeador não agenda matéria nova nesses dias, garantindo tempo para consolidar os seus conhecimentos.' },
  { question: 'Como os dias de descanso personalizados afetam o meu ritmo?', answer: 'Ao excluir um dia (seja como folga semanal fixa ou data específica), a calculadora redistribui a matéria restante pelos outros dias de estudo ativos, aumentando ligeiramente a meta diária para garantir que termina a tempo.' },
  { question: 'Posso alterar um dia de descanso de volta para dia de estudo?', answer: 'Sim. Pode alternar qualquer dia no calendário em tempo real entre descanso e estudo, ou remover datas excluídas da lista para recalcular o plano instantaneamente.' },
];

const howToItems = [
  { name: 'Insira a data do exame', text: 'Selecione a data da sua prova no seletor de calendário.' },
  { name: 'Indique o total de matéria', text: 'Introduza o volume de estudo necessário, como páginas, capítulos ou exercícios.' },
  { name: 'Configure o horário e a margem', text: 'Escolha os seus dias de descanso semanais e defina uma margem para a revisão final.' },
  { name: 'Ajuste e acompanhe', text: 'Altere dias individuais diretamente no calendário para criar dias de descanso à medida das suas necessidades diárias.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Planeador de Estudo & Contagem Regressiva',
    examDateLabel: 'Data do Exame',
    materialLabel: 'Matéria Total (Páginas / Capítulos)',
    materialUnitLabel: 'Unidade de medida',
    progressLabel: 'Concluído até agora',
    weeklyScheduleLabel: 'Dias de estudo semanais',
    reviewBufferLabel: 'Margem de Revisão (Dias)',
    excludedDatesLabel: 'Dias de descanso personalizados',
    dailyPaceLabel: 'Ritmo de estudo diário',
    daysLeftLabel: 'Dias restantes',
    studyDaysLabel: 'Dias de estudo',
    bufferDaysLabel: 'Dias de margem',
    scheduleTitle: 'O seu calendário de estudo personalizado',
    resetButton: 'Restaurar padrões',
    addExclusionButton: 'Adicionar dia de descanso',
    daysOfWeek: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    dayTypes: {
      study: 'Dia de estudo',
      rest: 'Dia de descanso',
      review: 'Margem de revisão',
      exam: 'Dia do exame',
    },
    units: {
      pages: 'Páginas',
      chapters: 'Capítulos',
      exercises: 'Exercícios',
      modules: 'Módulos',
      topics: 'Temas',
    },
    noStudyDaysError: 'Não tem dias de estudo disponíveis! Verifique o seu horário semanal e as definições da margem de revisão.',
    examInPastError: 'A data do exame deve ser no futuro.',
    noMaterialError: 'Introduza um volume de matéria superior a zero.',
    scheduleTableHeader: {
      date: 'Data',
      day: 'Dia',
      type: 'Estado',
      target: 'Meta diária',
      cumulative: 'Progresso global',
      action: 'Ações rápidas',
    },
    markAsRest: 'Marcar como descanso',
    markAsStudy: 'Marcar como estudo',
    faqTitle: 'Perguntas frequentes',
    bibliographyTitle: 'Referências & Recursos académicos',
  },
  seo: [
    { type: 'title', text: 'Como planear as suas sessões de estudo para máxima retenção', level: 2 },
    { type: 'paragraph', html: 'Preparar um exame envolve menos as horas de estudo na véspera e mais a forma como distribui a sua carga de trabalho. Manter um ritmo equilibrado é fundamental para evitar a fadiga cognitiva, melhorar a retenção da informação e cobrir a matéria toda sem pânico.' },
    { type: 'title', text: 'A ciência do estudo espaçado e da repetição espaçada', level: 3 },
    { type: 'paragraph', html: 'O nosso cérebro aprende melhor através do espaçamento. Ao distribuir as sessões de estudo ao longo de várias semanas, permite que o cérebro crie ligações neuronais mais robustas por meio da consolidação. A prática distribuída reduz o cansaço mental e facilita a transferência de conhecimento da memória de curto prazo para a de longo prazo.' },
    { type: 'paragraph', html: 'De acordo com a Curva do Esquecimento de Ebbinghaus, perdemos a força da memória com o tempo, a menos que façamos revisões ativas. Os intervalos de revisão servem para reiniciar esse processo, abrandando o esquecimento e consolidando a compreensão teórica.' },
    { type: 'title', text: 'A importância de reservar uma margem de revisão', level: 3 },
    { type: 'paragraph', html: 'Um erro habitual é planear estudar matéria nova até ao último momento. Ter uma margem dedicada (normalmente 2 a 5 dias antes da data do exame) permite realizar testes de simulação, reler resumos e focar-se nos pontos fracos. Também garante que descansa o suficiente antes da prova.' },
    { type: 'title', text: 'O valor da calendarização adaptativa', level: 3 },
    { type: 'paragraph', html: 'Os planos de estudo fixos falham porque a vida é imprevisível. Se se atrasar algumas páginas, o plano antigo fica desatualizado. Esta calculadora adaptativa recalcula as metas diárias em tempo real, eliminando a ansiedade perante imprevistos.' },
    { type: 'list', items: [
      'Introduza os seus progressos regularmente para manter o plano preciso.',
      'Ajuste os dias de folga caso surjam compromissos inesperados.',
      'Mantenha um ritmo diário estável em vez de tentar recuperar atrasos significativos num só dia.'
    ] },
    { type: 'title', text: 'Flexibilidade: incluir dias de descanso', level: 3 },
    { type: 'paragraph', html: 'O descanso não é um prémio, mas sim uma etapa indispensável no processo de aprendizagem. Ao planear dias de pausa no calendário, previne o esgotamento. O sistema redistribui automaticamente a matéria necessária pelos dias restantes.' },
    { type: 'tip', html: '<strong>Planeie a pensar nos imprevistos.</strong> Deixe pelo menos um dia livre por semana como margem de segurança. Se adoecer ou tiver um compromisso urgente, poderá usar esse dia para recuperar sem comprometer a sua meta geral.' },
    { type: 'title', text: 'Como calcular o seu ritmo de estudo manualmente', level: 3 },
    { type: 'paragraph', html: 'Para obter o seu objetivo diário de forma manual, utilize uma fórmula aritmética simples. Subtraia a matéria já concluída ao total de matéria para saber o que falta estudar. De seguida, conte os dias totais até ao exame e subtraia os dias de descanso planeados e a margem de revisão. Por fim, divida a matéria em falta pelos dias de estudo disponíveis.' },
    { type: 'paragraph', html: 'Por exemplo, se tem 400 páginas para estudar, já completou 50, faltam 20 dias para o exame, planeou 4 dias de descanso e 2 dias de margem: a sua matéria em falta é de 350 páginas e os dias de estudo efetivos são 14. O seu ritmo diário será 350 a dividir por 14, o que dá exatamente 25 páginas por dia.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
