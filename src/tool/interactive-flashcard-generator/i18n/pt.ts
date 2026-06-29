import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = 'Gerador de Flashcards Interativo e Cartões de Estudo';
const description = 'Melhore as suas sessões de estudo com lembrança ativa e repetição espaçada. Crie flashcards personalizados, estude com rotação 3D, avalie a dificuldade e exporte/importe baralhos.';

const faqItems = [
  { question: 'O que é lembrança ativa?', answer: 'A lembrança ativa é um princípio de aprendizagem que envolve testar a memória recuperando ativamente a informação, em vez de ler passivamente apontamentos.' },
  { question: 'Como funciona a repetição espaçada?', answer: 'A repetição espaçada é um método onde revê cartões difíceis frequentemente e cartões fáceis espaçadamente a intervalos crescentes de tempo para otimizar a retenção.' },
  { question: 'Como posso guardar os meus flashcards personalizados?', answer: 'Pode exportar o seu baralho como ficheiro JSON. Para voltar a estudar mais tarde, clique no botão de importar e carregue esse ficheiro.' },
  { question: 'Para que servem as classificações de Fácil, Médio e Difícil?', answer: 'Elas ajudam a categorizar o quão bem se lembrou do cartão. Num sistema Leitner completo, as classificações ajudam a direcionar revisões frequentes.' },
];

const howToItems = [
  { name: 'Criar Cartão', text: 'Insira a pergunta no campo da frente e a resposta no verso, depois clique em Adicionar Cartão.' },
  { name: 'Rever Baralho', text: 'Clique em qualquer cartão no visualizador para o virar e ver a resposta.' },
  { name: 'Avaliar Memória', text: 'Avalie a facilidade com que recordou a resposta utilizando os botões Fácil, Médio ou Difícil.' },
  { name: 'Guardar Sessão', text: 'Use o botão de exportar para descarregar o seu baralho personalizado para poder carregar mais tarde.' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: 'Criador de Flashcards',
    questionLabel: 'Frente (Pergunta)',
    answerLabel: 'Verso (Resposta)',
    addCard: 'Adicionar Cartão',
    questionPlaceholder: 'ex: Qual é a capital da França?',
    answerPlaceholder: 'ex: Paris',
    reviewMode: 'Sessão de Estudo',
    cardIndex: 'Cartão',
    flipCard: 'Clique para virar',
    nextCard: 'Seguinte',
    prevCard: 'Anterior',
    easy: 'Fácil',
    medium: 'Médio',
    hard: 'Difícil',
    resetSession: 'Reiniciar Progresso',
    importExport: 'Gestão de Baralho',
    importDeck: 'Importar JSON',
    exportDeck: 'Exportar JSON',
    exportSelected: 'Exportar Seleção',
    exportAll: 'Exportar Tudo',
    emptyDeckWarning: 'O seu baralho está vazio. Crie um cartão ou importe um baralho para começar a estudar.',
    sampleQuestion1: 'O que é lembrança ativa?',
    sampleAnswer1: 'Uma técnica de aprendizagem que envolve estimular ativamente a recuperação da memória durante o processo de aprendizagem.',
    sampleQuestion2: 'Quem formulou a hipótese da curva do esquecimento?',
    sampleAnswer2: 'Hermann Ebbinghaus, que estudou a natureza exponencial do esquecimento da informação ao longo do tempo.',
    aiPromptGenerator: 'Assistente de Flashcards IA',
    aiTopicsLabel: 'Insira os temas ou notas de exame',
    aiTopicsPlaceholder: 'ex: Exame de matemática cobrindo derivadas, integrais e limites...',
    generatePromptBtn: 'Gerar Prompt IA',
    aiPromptOutputLabel: 'Copie este prompt para ChatGPT/Gemini',
    copyPromptBtn: 'Copiar para a Área de Transferência',
    selectAll: 'Selecionar tudo',
    deleteCategory: 'Eliminar categoria',
    deleteConfirmMsg: 'Tem a certeza de que deseja eliminar a categoria e todos os seus cartões?',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    pasteJsonTitle: 'Colar JSON de Flashcards',
    pasteJsonPlaceholder: 'Cole o JSON gerado pela IA aqui...',
    importBtn: 'Importar',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Otimize a sua estratégia de estudo com lembrança ativa e repetição espaçada', level: 2 },
    { type: 'paragraph', html: 'Os flashcards são amplamente reconhecidos como uma das ferramentas mais eficazes para a memorização e retenção a longo prazo. Ao combinar a recuperação ativa com uma sessão estruturada, pode identificar os seus pontos fracos e estudar de forma mais eficiente.' },
    { type: 'title', text: 'Lembrança ativa frente a métodos de aprendizagem passivos', level: 3 },
    { type: 'paragraph', html: 'Muitos estudantes confiam em técnicas de revisão passiva como sublinhar texto ou ler apontamentos. A ciência cognitiva demonstra que o verdadeiro estudo e memorização ocorrem ao forçar o cérebro a recuperar a informação.' },
    { type: 'table', headers: ['Método de Estudo', 'Compromisso Cognitivo', 'Taxa de Retenção', 'Ideal para'], rows: [
      ['Flashcards Interativos', 'Alto (Lembrança Ativa)', 'Excelente', 'Vocabulário, fórmulas, conceitos chave, datas.'],
      ['Resumir textos', 'Médio (Síntese)', 'Moderado', 'Compreender narrativas complexas e argumentos.'],
      ['Reler apontamentos', 'Baixo (Revisão Passiva)', 'Pobre', 'Contacto inicial com materiais novos.'],
    ] },
    { type: 'title', text: 'Pros e contras do estudo baseado em flashcards', level: 3 },
    {
      type: 'proscons',
      title: 'Comparativa de benefícios e limitações dos flashcards',
      items: [
        { pro: 'Força a recuperação mental ativa em vez do reconhecimento passivo.', con: 'Pode levar bastante tempo a criá-los inicialmente.' },
        { pro: 'Identifica falhas de conhecimento imediatamente.', con: 'Não é ideal para compreender argumentos extremamente complexos.' },
        { pro: 'Muito portátil e personalizável para qualquer disciplina.', con: 'Requer disciplina regular de estudo para colher benefícios de repetição espaçada.' }
      ]
    },
    { type: 'title', text: 'Criação de flashcards com Inteligência Artificial', level: 3 },
    { type: 'paragraph', html: 'Criar baralhos manualmente pode ser aborrecido. Com o nosso <strong>Assistente IA</strong> integrado, converta apontamentos em baralhos prontos a importar. Descreva os temas, gere a prompt e use-a no modelo de IA de eleição (ChatGPT, Gemini, Claude) para obter o JSON correto.' },
    { type: 'title', text: 'Estudo em grupo: Exportação seletiva e fusão', level: 3 },
    { type: 'paragraph', html: 'Estudar em grupo é mais produtivo ao dividir tarefas. O gestor permite exportar apenas as categorias que deseja. Ao importar, o sistema realiza uma <strong>fusão (merge)</strong> sem sobrescrever dados do utilizador, protegendo o seu progresso.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
