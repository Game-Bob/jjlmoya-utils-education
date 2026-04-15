import type { ToolLocaleContent } from '../../../types';

const slug = 'gerador-de-citacoes';
const title = 'Gerador de Citações' as const;
const description = 'Crie referências automáticas nos formatos APA, MLA e Vancouver com armazenamento persistente.' as const;
const faqTitle = 'Perguntas Frequentes' as const;
const bibliographyTitle = 'Bibliografia' as const;

const ui = {
    format: 'Formato',
    book: 'Livro',
    website: 'Site',
    article: 'Artigo',
    publicationYear: 'Ano de publicação',
    authors: 'Autores (Apelido, Iniciais)',
    title: 'Título',
    publisher: 'Editora',
    locationUrl: 'Localização / URL',
    preview: 'Prévia',
    saveToList: 'Guardar na minha lista',
    mySavedCitations: 'Minhas Citações Guardadas',
    noSavedCitations: 'Não tem citações guardadas.',
    clickToCopy: 'Clique na citação para copiá-la diretamente',
    apa: 'APA (7ª ed.)',
    mla: 'MLA (9ª ed.)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Gerador de Citações: Domine APA, MLA e Vancouver', level: 2 },
    { type: 'paragraph', html: 'Citar corretamente as suas fontes não é apenas uma questão de ética académica; é a base para dar credibilidade ao seu trabalho e evitar o plágio. A nossa ferramenta permite gerar referências automáticas nos formatos mais utilizados no mundo.' },
    { type: 'title', text: 'Os Estilos de Citação mais Importantes', level: 3 },
    { type: 'paragraph', html: 'Dependendo da sua área de estudo, ser-lhe-á exigido um formato específico. Não é um capricho dos professores; cada estilo é desenhado para priorizar a informação mais relevante para cada disciplina.' },
    { type: 'title', text: 'APA (ciências sociais)', level: 4 },
    { type: 'paragraph', html: 'Criado pela <strong>American Psychological Association</strong>, foca-se na data de publicação para dar contexto histórico à investigação. É o padrão em Psicologia, Educação e Sociologia.' },
    { type: 'title', text: 'Vancouver (medicina)', level: 4 },
    { type: 'paragraph', html: 'É um sistema numérico onde as fontes são citadas por ordem de aparecimento. É o formato universal na biomedicina e ciências da saúde, facilitando a leitura di textos com múltiplas referências.' },
    { type: 'title', text: 'Como citar um livro passo a passo?', level: 3 },
    { type: 'paragraph', html: 'Embora a nossa ferramenta automatize este processo, conhecer os elementos básicos ajudá-lo-á a identificar que informação precisa de recolher das suas fontes físicas ou digitais.' },
    { type: 'list', items: ['<strong>Autores:</strong> Apelido seguido da inicial do primeiro nome.', '<strong>Ano:</strong> Ano de publicação entre parênteses ou no final, dependendo do estilo.', '<strong>Título:</strong> Deve aparecer em itálico para livros e obras completas.', '<strong>Editora:</strong> A empresa responsável pela publicação da obra.', '<strong>URL:</strong> Para fontes digitais, o link direto ou DOI para localização permanente.'] },
    { type: 'title', text: 'Diferenças Visuais Entre Formatos', level: 3 },
    { type: 'table', headers: ['Elemento', 'APA (7ª)', 'MLA (9ª)', 'Vancouver'], rows: [['Autor', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Data', '(2024)', '2024.', '2024.'], ['Título', 'Em itálico', 'Entre aspas', 'Normal']] },
    { type: 'tip', html: 'Consulte sempre o guia específico da sua instituição. Embora o APA seja um padrão global, muitas universidades têm pequenas variações locais ou exigem o uso de uma edição específica das normas.' },
    { type: 'title', text: 'Evitar o Plágio Académico', level: 3 },
    { type: 'paragraph', html: 'O plágio nem sempre é intencional. Ocorre frequentemente por descuido ao tirar notas ou por não saber como referenciar uma ideia que não é sua. Usar um gerador de citações como este garante que cada autor recebe o crédito que merece, enquanto protege a sua integridade académica.' },
    { type: 'paragraph', html: 'Lembre-se que mesmo que parafraseie uma ideia pelas suas próprias palavras, deve incluir a citação correspondente no texto e a sua referência na bibliografia final.' },
];

const faq = [
    {
        question: 'Quais formatos o gerador suporta?',
        answer: 'Atualmente suporta APA (7ª edição), MLA (9ª edição) e Vancouver, que são os formatos mais comuns em ciências sociais, humanidades e saúde.',
    },
    {
        question: 'Posso guardar as minhas citações?',
        answer: 'Sim, o gerador guarda automaticamente o seu histórico no armazenamento local do seu navegador para que possa consultá-lo mais tarde.',
    },
    {
        question: 'Qual é a diferença entre APA e Vancouver?',
        answer: 'O APA utiliza o sistema autor-data (Perez, 2024), enquanto o Vancouver utiliza um sistema numérico por ordem de aparecimento no texto.',
    },
    {
        question: 'O gerador de citações é gratuito?',
        answer: 'Completamente. É uma ferramenta gratuita desenhada para ajudar estudantes e profissionais na redação dos seus trabalhos académicos.',
    },
] as const;

const howTo = [
    {
        name: 'Escolha o tipo de fonte',
        text: 'Selecione se a sua fonte é um livro, um site ou um artigo de revista profissional.',
    },
    {
        name: 'Complete os dados',
        text: 'Introduza o autor, título, ano e editora ou URL. Quanto mais dados introduzir, mais precisa será a citação.',
    },
    {
        name: 'Copie ou guarde',
        text: 'Copie a citação diretamente com um clique ou pressione "Guardar na minha lista" para adicioná-la ao seu histórico persistente.',
    },
] as const;

const bibliography = [
    {
        name: 'Manual de Estilo APA 7ª Edição',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'Guia de Estilo MLA (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Diretrizes de Vancouver - ICJME',
        url: 'https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html',
    },
] as const;

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
} as const;

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item.name,
        text: item.text,
    })),
} as const;

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'EducationalApplication',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
} as const;

const schemas = [faqSchema, howToSchema, appSchema] as const;

export const content = {
    slug,
    title,
    description,
    faqTitle,
    bibliographyTitle,
    ui,
    seo,
    faq,
    howTo,
    bibliography,
    schemas,
} as const satisfies ToolLocaleContent;
