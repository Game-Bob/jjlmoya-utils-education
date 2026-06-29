import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'calculadora-de-progresso-de-creditos-e-media-final-projetada' as const;
const title = 'Calculadora de Progresso de Créditos e Média Final Projetada';
const description = 'Organize o seu curso semestre a semestre, monitorize a sua média real e simulada, e calcule a nota média necessária nas disciplinas restantes.';

const faqItems = [
  {
    question: 'Como posso começar a planejar a minha graduação?',
    answer: 'Basta adicionar semestres e inserir as suas disciplinas diretamente no painel. Pode configurar os créditos, selecionar o estado de cada disciplina e registar as notas.',
  },
  {
    question: 'Qual é a diferença entre a Média Real e a Média Projetada?',
    answer: 'A Média Real baseia-se unicamente nas disciplinas concluídas e com nota oficial lançada. A Média Projetada simula a média final incluindo as disciplinas em curso e planeadas.',
  },
  {
    question: 'O que indica a nota necessária para as disciplinas restantes?',
    answer: 'Calcula a média exata que precisa de obter nas disciplinas que faltam cursar para alcançar o seu objetivo geral de nota média final.',
  },
  {
    question: 'Os meus dados estão guardados em segurança?',
    answer: 'Sim. Todos os dados permanecem localmente no seu navegador. Nenhuma informação é submetida para servidores. Pode exportar o seu plano em formato JSON.',
  },
];

const howToItems = [
  { name: 'Definir objetivos', text: 'Insira o objetivo total de créditos e a média de conclusão pretendida na parte superior do painel.' },
  { name: 'Construir o currículo', text: 'Adicione semestres e liste as suas disciplinas com os respetivos créditos oficiais.' },
  { name: 'Atualizar notas e estados', text: 'Altere o estado das disciplinas entre Concluída, Em Curso e Planeada, registando as notas obtidas.' },
  { name: 'Avaliar médias necessárias', text: 'Verifique no analisador a média exata que precisa de manter nos semestres futuros.' },
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

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: 'Nome do Curso',
    graduationCreditsLabel: 'Créditos Necessários para Conclusão',
    targetGpaLabel: 'Média Objetivo',
    realGpaLabel: 'Média Real',
    projectedGpaLabel: 'Média Projetada',
    creditsCompletedLabel: 'Créditos Concluídos',
    requiredGradeLabel: 'Média Requerida (Restante)',
    addSemesterButton: 'Adicionar Semestre',
    addCourseButton: 'Adicionar Disciplina',
    exportPlanButton: 'Exportar Plano',
    importPlanButton: 'Importar Plano',
    semesterNamePlaceholder: 'Nome do semestre (ex. Outono Ano 1)',
    courseNamePlaceholder: 'Nome da disciplina',
    creditsPlaceholder: 'Créditos',
    gradePlaceholder: 'Nota',
    statusCompleted: 'Concluída',
    statusInProgress: 'Em Curso',
    statusPlanned: 'Planeada',
    importError: 'Não foi possível importar o plano de estudos. Verifique o formato do arquivo.',
    uploadHint: 'Todos os dados são guardados no seu navegador. Os processos de importação e exportação ocorrem inteiramente no seu dispositivo.',
    statusMessageSuccess: 'Está no caminho certo para atingir a sua média objetivo.',
    statusMessageWarning: 'Precisa de obter uma média de {grade} ou superior nas disciplinas restantes para alcançar o seu objetivo.',
    statusMessageImpossible: 'É matematicamente impossível atingir a sua média objetivo com a configuração atual das disciplinas.',
    degreeNamePlaceholder: 'ex. Licenciatura em Informática',
    deleteSemesterLabel: 'Eliminar Semestre',
    deleteCourseLabel: 'Eliminar Disciplina',
    semesterTitleTemplate: 'Semestre {num}',
  },
  seo: [
    { type: 'title', text: 'Como simular o seu percurso académico e média final de licenciatura', level: 2 },
    { type: 'paragraph', html: 'Acompanhar o seu progresso no ensino superior requer planeamento estratégico. Este simulador permite prever a sua média final e calcular as exigências para os exames que ainda faltam realizar.' },
    { type: 'summary', title: 'Métricas cruciais para monitorizar em cada período', items: [
      'Compare os créditos concluídos com o total exigido para obter o diploma.',
      'Diferencie notas obtidas de projeções e cenários futuros.',
      'Identifique a nota média necessária para renovar bolsas ou alcançar méritos.',
    ] },
    {
      type: 'proscons',
      title: 'Vantagens e limitações do simulador',
      items: [
        {
          pro: 'Auxilia na planificação de semestres futuros de forma proativa.',
          con: 'A exatidão da simulação depende diretamente das notas projetadas inseridas.',
        },
        {
          pro: 'Determina metas claras de estudo com base em dados numéricos.',
          con: 'Não considera políticas específicas de melhoria de nota de cada instituição.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
