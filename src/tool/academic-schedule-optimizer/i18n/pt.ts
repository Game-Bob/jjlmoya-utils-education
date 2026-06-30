import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'otimizador-horario-academico' as const;
const title = 'Otimizador de Horário Acadêmico';
const description = 'Monte um cronograma de aulas semanal visual, organize disciplinas por cores, identifique conflitos de horários e exporte sua grade como um arquivo .ics de calendário.';

const faqItems = [
  {
    question: 'Como funciona o detector de conflitos?',
    answer: 'Cada bloco de aula possui dia, horário de início e duração. A ferramenta compara todos os blocos e avisa quando dois ou mais compartilham o mesmo dia e seus intervalos de tempo se sobrepõem.'
  },
  {
    question: 'Posso mover as aulas diretamente no calendário?',
    answer: 'Sim. Arraste um bloco de aula para a coluna de outro dia para testar uma nova distribuição semanal. O status de conflitos é atualizado imediatamente após a mudança.'
  },
  {
    question: 'O que o arquivo de exportação .ics inclui?',
    answer: 'A exportação cria um arquivo padrão iCalendar com cada aula configurada como um evento contendo disciplina, sala, horário de início e de término. Você pode importá-lo na maioria dos aplicativos de calendário.'
  },
  {
    question: 'Por que devo definir cores para as disciplinas?',
    answer: 'As cores ajudam na leitura rápida de uma grade densa. Use tons diferentes para laboratórios, aulas expositivas, seminários ou matérias difíceis para que os conflitos e os dias mais cheios se destaquem rapidamente.'
  }
];

const howToItems = [
  { name: 'Adicionar detalhes da aula', text: 'Insira a disciplina, sala, dia, horário de início, duração e cor.' },
  { name: 'Posicionar blocos na grade semanal', text: 'Use os blocos gerados para visualizar como cada aula se encaixa no seu planejamento.' },
  { name: 'Resolver conflitos', text: 'Procure por blocos de conflito destacados e mova ou edite as sessões até que o painel de alertas fique limpo.' },
  { name: 'Exportar seu calendário', text: 'Baixe o arquivo .ics e importe-o no Google Calendar, Apple Calendar, Outlook ou outro aplicativo.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Disciplina',
    roomLabel: 'Sala',
    dayLabel: 'Dia',
    startLabel: 'Início',
    durationLabel: 'Duração',
    colorLabel: 'Cor',
    addClass: 'Adicionar aula',
    saveClass: 'Salvar aula',
    newClass: 'Nova aula',
    exportICS: 'Exportar .ics',
    conflictLabel: 'Conflitos de horário',
    noConflicts: 'Nenhuma sobreposição detectada',
    removeLabel: 'Remover aula',
    editHint: 'Selecione uma aula para editar, ou arraste-a para outro dia e horário.',
    weekendDaysLabel: 'Dias de fim de semana',
    saturdayLabel: 'Sábado',
    sundayLabel: 'Domingo',
    weekDayLabels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    weekendDayShortLabels: ['Sáb', 'Dom'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 h', '2 h', '3 h'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Cálculo',
    defaultRoom: 'Sala 204',
    defaultNewSubject: 'Nova aula',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Cálculo', room: 'Sala 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Literatura', room: 'Laboratório B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Física', room: 'Auditório', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'horario-academico.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'sobreposição',
    overlapPlural: 'sobreposições',
    detectedLabel: 'detectada(s)',
    classEditorAriaLabel: 'Editor de aula',
    weeklyScheduleAriaLabel: 'Horário semanal',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências e Padrões de Calendário',
  },
  seo: [
    { type: 'title', text: 'Como montar uma grade de horários acadêmica semanal que funcione de verdade', level: 2 },
    { type: 'paragraph', html: 'Uma boa grade de horários faz mais do que listar matérias. Ela mostra onde a sua semana está sobrecarregada, quais dias estão fragmentados e se duas matérias obrigatórias se chocam. Um otimizador visual ajuda a antecipar esses problemas antes que resultem em faltas, correria ou perda de prazos de matrícula.' },
    { type: 'summary', title: 'O que verificar antes de fechar sua grade', items: [
      'Nenhuma aula obrigatória se sobrepõe no mesmo dia.',
      'Sábado e domingo ativados caso sua instituição de ensino utilize finais de semana.',
      'Laboratórios, palestras e seminários com cores diferentes para fácil identificação.',
      'Disciplinas pesadas distribuídas de forma a permitir períodos de descanso.',
      'Exportação da grade final para o seu aplicativo de calendário de preferência.'
    ] },
    { type: 'title', text: 'Por que grades visuais superam listas simples', level: 3 },
    { type: 'paragraph', html: 'Listas em texto ocultam o cansaço porque separam cada matéria do contexto da semana. Uma grade revela a densidade de imediato. Fica visível se a segunda-feira tem horas demais, se uma aula prática bloqueia um laboratório, se uma aula no sábado altera o ritmo da semana ou se salas distantes criam problemas de locomoção.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Lista de disciplinas', description: 'Útil para códigos de matrícula, fraca para entender o desgaste semanal.' },
      { title: 'Grade semanal', description: 'Excelente para visualizar o ritmo, janelas livres e conflitos em um único lugar.', highlight: true },
      { title: 'Apenas aplicativo de calendário', description: 'Bom após o planejamento pronto, mas lento para testar combinações alternativas.' }
    ] },
    { type: 'title', text: 'Como funciona a detecção de sobreposição', level: 3 },
    { type: 'paragraph', html: 'Duas aulas entram em conflito quando ocorrem no mesmo dia e seus intervalos de tempo se cruzam. Por exemplo, uma aula das 10:00 às 12:00 sobrepõe-se a um seminário das 11:00 às 13:00 porque ambos ocupam o intervalo das 11:00. O otimizador analisa cada bloco em relação aos outros e sinaliza a colisão.' },
    { type: 'table', headers: ['Aula A', 'Aula B', 'Resultado'], rows: [
      ['Segunda-feira 09:00-11:00', 'Segunda-feira 11:00-13:00', 'Sem sobreposição, pois uma termina no momento em que a outra começa.'],
      ['Terça-feira 10:00-12:00', 'Terça-feira 11:00-13:00', 'Sobreposição porque os horários se interceptam.'],
      ['Quarta-feira 09:00-11:00', 'Quinta-feira 09:00-11:00', 'Sem sobreposição porque os dias são diferentes.']
    ] },
    { type: 'title', text: 'Usando cores como sinalizador de planejamento acadêmico', level: 3 },
    { type: 'paragraph', html: 'A cor não é apenas decoração. Ela pode representar a natureza da disciplina, nível de complexidade, localização ou nível de atenção exigido. Uma paleta estável facilita o entendimento do horário em momentos de pressa, como na hora da matrícula.' },
    { type: 'tip', html: '<strong>Mantenha as definições de cores consistentes.</strong> Por exemplo, use um tom para laboratórios, outro para palestras e um tom de alerta para sessões que exigem maior deslocamento ou estudo prévio.' },
    { type: 'title', text: 'Exportando para aplicativos de calendário', level: 3 },
    { type: 'paragraph', html: 'O formato .ics é o padrão universal para troca de calendários (iCalendar). Exportar sua grade acadêmica permite importar as aulas em serviços como Google Calendar, Apple Calendar, Outlook e ferramentas institucionais. Após a importação, você poderá definir lembretes, tempos de viagem, regras de repetição e blocos de estudo pessoal.' },
    { type: 'diagnostic', variant: 'warning', title: 'Antes de importar', html: 'Confirme se a data de início da semana selecionada é a correta, valide os fusos horários no seu app de calendário e verifique se as aulas importadas não duplicam programações já existentes.' },
    { type: 'title', text: 'Um fluxo de trabalho prático para matrícula em disciplinas', level: 3 },
    { type: 'list', items: [
      'Adicione primeiro as matérias obrigatórias e resolva conflitos graves antes das eletivas.',
      'Habilite sábado ou domingo se houver aulas programadas para o fim de semana.',
      'Use cores para distinguir aulas teóricas, laboratórios, seminários e estudo autodidata.',
      'Arraste blocos de aulas entre os dias para comparar turmas e alternativas rapidamente.',
      'Deixe intervalos livres para refeições, locomoção e descanso.',
      'Exporte apenas quando o painel de conflitos estiver totalmente limpo.'
    ] },
    { type: 'message', title: 'O planejamento é iterativo', html: 'Trate seu primeiro desenho como um rascunho. A grade ideal geralmente surge após testar alternativas, comparar formatos e garantir que o ritmo da sua rotina seja sustentável.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
