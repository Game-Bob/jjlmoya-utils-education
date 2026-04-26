import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'calculadora-de-notas-pesadas-e-media-final';
const title = 'Calculadora de Notas Pesadas e Média Final';
const description = 'Pare de se preocupar com o seu GPA! Calcule facilmente as suas notas do curso e as suas médias finais. Basta introduzir os seus trabalhos, exames e os seus pesos para ver em que ponto se encontra.';

const faqItems = [
  { question: 'O que é exactamente uma nota pesada?', answer: 'Em muitos cursos, nem todos os trabalhos valem o mesmo. Um exame final pode valer 40% da sua nota, enquanto os trabalhos de casa valem apenas 10%. Uma nota pesada tem em conta estas diferenças para que saiba a sua posição real.' },
  { question: 'Onde posso encontrar os pesos das minhas notas?', answer: 'Normalmente, estes estão listados no programa do curso sob "Política de Avaliação" ou "Avaliação". Os professores atribuem uma percentagem a diferentes categorias como participação, testes e projectos.' },
  { question: 'E se os meus trabalhos ainda não somarem 100%?', answer: 'Não se preocupe! A nossa calculadora mostrará uma nota "projectada" com base no trabalho que completou até agora. Ela escala as suas pontuações actuais para um equivalente de 100%.' },
  { question: 'Posso usar isto para a minha média de curso?', answer: 'Com certeza. Pode tratar cada disciplina como um "item" e usar as suas horas de crédito como o "peso" para encontrar a sua média pesada do semestre.' },
];

const howToItems = [
  { name: 'Liste os seus trabalhos', text: 'Introduza o nome dos seus exames, testes ou projectos. Mantenha-se organizado!' },
  { name: 'Introduza as suas notas', text: 'Escreva a nota que recebeu para cada item (geralmente de 0 a 10 ou 100).' },
  { name: 'Adicione os pesos', text: 'Verifique o seu programa e introduza a percentagem que cada item contribui para a sua nota final.' },
  { name: 'Verifique o seu resultado', text: 'Veja a sua nota final ser actualizada instantaneamente. Sem necessidade de cálculos manuais!' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    addSubject: 'Adicionar Item',
    subjects: 'Notas e Pesos',
    subjectName: 'Trabalho / Disciplina',
    grade: 'Nota',
    weight: 'Peso (%)',
    scale: 'Escala (ex: 4.0, 10, 100)',
    finalGrade: 'A Sua Nota Actual',
    removeSubject: 'Remover',
    weightSum: 'Peso Total',
    exampleSubject: 'Exame Final',
    newSubjectPlaceholder: 'ex: Teste Intermédio',
  },
  seo: [
    { type: 'title', text: 'Como Dominar as Suas Notas com uma Calculadora Pesada', level: 2 },
    { type: 'paragraph', html: 'Já se sentiu perdido ao olhar para uma pilha de notas? Não está sozinho. Compreender a sua <strong>média pesada</strong> é o segredo para se manter à frente na escola secundária e na faculdade.' },
    { type: 'title', text: 'Porque é que as Notas Pesadas Importam', level: 3 },
    { type: 'paragraph', html: 'Uma média simples trata todos os trabalhos do mesmo modo. Mas no mundo real (e no seu programa), um pequeno teste de 2 minutos não deve contar tanto como um trabalho final de 20 páginas. As notas pesadas dão mais "poder" ao que é importante.' },
    { type: 'paragraph', html: 'Quer esteja a calcular o seu <strong>GPA do semestre</strong> ou apenas a tentar ver se pode saltar o último trabalho opcional, a ponderação é a ferramenta de que precisa.' },
    { type: 'title', text: 'Calcule a Sua Nota Final em 3 Passos', level: 3 },
    { type: 'list', items: ['Encontre o peso de cada categoria no seu programa (ex: Exames 50%, Trabalhos de Casa 20%).', 'Multiplique a sua nota por esse peso (ex: nota 90 * 0,50 peso = 45 pontos).', 'Some todos esses pontos para obter a sua percentagem final.'] },
    { type: 'title', text: 'Dica de Especialista: O Jogo do "E se"', level: 3 },
    { type: 'paragraph', html: 'Use esta calculadora para simular diferentes cenários. "E se eu tirar 85 no exame final?" ou "E se eu falhar este trabalho de casa?" Ver o impacto em tempo real ajuda-o a priorizar o seu tempo de estudo onde ele realmente faz a diferença.' },
    { type: 'tip', html: '<strong>Não entre em pânico.</strong> Se os seus pesos ainda não somarem 100%, a calculadora projectará como será a sua nota com base no trabalho actual. É uma excelente forma de acompanhar o progresso a meio do semestre!' },
    { type: 'title', text: 'Aritmética vs. Pesada: A Diferença Real', level: 3 },
    { type: 'paragraph', html: 'Uma média aritmética pode ser perigosamente enganadora. Se tiver 100% num pequeno teste mas 50% num exame importante, uma média simples diz que tem 75% (positivo). Mas se o exame valer 90% da sua nota, a sua <strong>nota pesada real</strong> está mais próxima dos 55% (negativo). Olhe sempre para os pesos!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
