import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'fluxo-pomodoro' as const;
const title = 'Pomodoro Flow';
const description = 'Domine a sua produtividade com uma gestão de tempo focada no zen. Personalize os ciclos de trabalho/pausa, acompanhe as interrupções e visualize os seus padrões de concentração em tempo real.';

const faqItems = [
  { question: 'O que é a Técnica Pomodoro?', answer: 'A Técnica Pomodoro é um método de gestão de tempo que utiliza intervalos de trabalho focados (normalmente 25 minutos) seguidos de pausas curtas. Esta ferramenta expande-a com ciclos personalizáveis e análises detalhadas.' },
  { question: 'Posso personalizar as durações de trabalho/pausa?', answer: 'Sim! Escolha entre três predefinições (Semente: 25/5, Árvore: 50/10, Montanha: 90/15) ou ajuste os tempos na hora com os botões +5 e -5 minutos.' },
  { question: 'O que faz o acompanhamento de interrupções?', answer: 'Sempre que clicar no botão de distração, a ferramenta regista uma interrupção. Isto ajuda a calcular o seu Focus Score e a identificar padrões na sua concentração.' },
  { question: 'Como é calculado o Focus Score?', answer: 'Focus Score = ((Tempo de Trabalho - Interrupções × 2) / Tempo de Trabalho) × 100. Isto contabiliza o custo cognitivo da mudança de contexto.' },
  { question: 'Posso exportar os dados da minha sessão?', answer: 'Sim. Pode copiar o resumo da sua sessão como Markdown (ótimo para Notion/Obsidian) ou partilhar um resumo visual nas redes sociais.' },
];

const howToItems = [
  { name: 'Introduza a sua tarefa', text: 'Escreva no que vai trabalhar. Isto ajuda a manter o contexto e a intenção.' },
  { name: 'Escolha um ciclo', text: 'Escolha Semente (25/5) para tarefas rápidas, Árvore (50/10) para trabalho padrão ou Montanha (90/15) para concentração profunda.' },
  { name: 'Comece e concentre-se', text: 'O temporizador começa. Clique no anel para pausar. Use +5/-5 para ajustar, se necessário. A barra de título mostra o tempo restante.' },
  { name: 'Acompanhe as interrupções', text: 'Distraiu-se? Clique no botão Alerta de Distração. A ferramenta regista isto para calcular o seu Focus Score.' },
  { name: 'Reveja a sua colheita', text: 'Após a sua sessão, veja as suas estatísticas: Focus Score, detalhe das tarefas e mapa de calor mensal da sua produtividade.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: 'Em que vai trabalhar?',
    selectCycle: 'Escolha o seu ciclo de foco',
    startButton: 'Começar',
    seed: 'Semente',
    tree: 'Árvore',
    mountain: 'Montanha',
    timer: 'Temporizador',
    pauseButton: 'Pausa',
    resumeButton: 'Retomar',
    distractionButton: 'Alerta de Distração',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Foco',
    breakTime: 'Pausa',
    sessionComplete: 'Sessão Concluída',
    endSession: 'Terminar Sessão',
    focusScore: 'Focus Score',
    totalTime: 'Tempo Total',
    interruptions: 'Interrupções',
    taskBreakdown: 'Detalhe das Tarefas',
    monthlyHeatmap: 'Atividade Mensal',
    copyMarkdown: 'Copiar Markdown',
    shareImage: 'Partilhar',
    wellnessMessage: 'Faça uma pausa, você merece',
    sessionSummary: 'Resumo da Sessão',
    newSession: 'Nova Sessão',
    copied: 'Copiado!',
    unnamedTask: 'Tarefa sem nome',
    breakTimeNotification: 'Hora da pausa!',
    focusTimeNotification: 'Hora de focar!',
    interruptionsLabel: 'Interruções:',
    studySession: 'Sessão de Estudo',
  },
  seo: [
    { type: 'title', text: 'Domine o Foco com o Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'Produtividade não é trabalhar mais — é trabalhar de forma mais inteligente. O <strong>Pomodoro Flow</strong> combina a comprovada Técnica Pomodoro com um design focado no zen e análises em tempo real para o ajudar a compreender <em>como</em> trabalha melhor.' },
    { type: 'title', text: 'Por que o Pomodoro Funciona', level: 3 },
    { type: 'paragraph', html: 'Os seres humanos não foram feitos para maratonas de 8 horas de hiperfoco. Os nossos cérebros funcionam melhor em ciclos de trabalho focado seguidos de pausas restauradoras. A Técnica Pomodoro transforma isto num ritual simples: trabalhe intensamente durante 25 minutos, faça uma pausa de 5, repita.' },
    { type: 'paragraph', html: 'Mas cada tarefa é diferente. É por isso que o Pomodoro Flow oferece três ciclos: <strong>Semente</strong> para tarefas rápidas (25/5), <strong>Árvore</strong> para o seu dia a dia (50/10) e <strong>Montanha</strong> para sessões de trabalho profundo (90/15).' },
    { type: 'title', text: 'O Verdadeiro Poder: Acompanhamento de Interrupções', level: 3 },
    { type: 'paragraph', html: 'Você trabalha durante 50 minutos e acha que arrasou. Mas distraiu-se 5 vezes? Cada interrupção custa-lhe uma taxa de mudança de contexto. O Pomodoro Flow acompanha isto com um único botão (Alerta de Distração) e calcula o seu <strong>Focus Score</strong> — uma métrica real da sua concentração.' },
    { type: 'paragraph', html: 'Com o tempo, verá quais tarefas, momentos do dia ou ambientes lhe permitem alcançar o seu melhor foco. É aí que o seu trabalho de maior impacto acontece.' },
    { type: 'title', text: 'Funcionalidades que não o Atrapalham', level: 3 },
    { type: 'list', items: [
      'Design Zen-Tech: Modo escuro, glassmorphism e um temporizador centrado que se torna a única coisa que vê.',
      'Barra de Título ao Vivo: O separador do seu navegador mostra a contagem decrescente, para que saiba o tempo num relance.',
      'Timing Flexível: Ajuste os tempos de trabalho/pausa na hora sem reiniciar.',
      'Exportação de Sessão: Copie o seu resumo como Markdown ou partilhe uma imagem nas redes sociais.',
      'Mapa de Calor Mensual: Veja os seus padrões de produtividade. Quais os dias em que o seu foco atinge o pico?',
    ] },
    { type: 'title', text: 'A Psicologia do "Estado de Flow"', level: 3 },
    { type: 'paragraph', html: 'O psicólogo Mihaly Csikszentmihalyi define <strong>flow</strong> como o estado onde o desafio encontra a habilidade, e o tempo desaparece. O Pomodoro Flow remove distrações, define limites de tempo claros e dá-lhe feedback imediato — as três condições para o estado de flow.' },
    { type: 'tip', html: '<strong>Pro Tip:</strong> Quando estiver em flow, não se interrompa. Se o temporizador tocar mas estiver a meio de um raciocínio, clique em retomar e continue. A beleza de acompanhar as interrupções é que verá a diferença entre o caos externo e o seu próprio impulso.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
