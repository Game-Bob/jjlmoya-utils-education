import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'renderizador-equacoes-latex' as const;
const title = 'Renderizador de Equações LaTeX';
const description = 'Renderize expressões matemáticas em LaTeX instantaneamente no navegador. Digite qualquer fórmula e copie o resultado como PNG, Markdown ou LaTeX.';

const faqItems = [
  { question: 'O que é LaTeX e por que os estudantes o utilizam?', answer: 'O LaTeX é uma linguagem de composição amplamente utilizada em matemática, física e engenharia para escrever equações de qualidade profissional. Diferente do Word, oferece controle preciso sobre a formatação.' },
  { question: 'Preciso instalar algo para usar este renderizador?', answer: 'Não. Esta ferramenta funciona inteiramente no seu navegador usando KaTeX, uma biblioteca JavaScript de código aberto. Não há necessidade de servidor ou cadastro.' },
  { question: 'Qual é a diferença entre o modo Bloco e Em Linha?', answer: 'O modo Bloco (Display mode) renderiza a fórmula em sua própria linha centralizada. O modo Em Linha (Inline mode) renderiza a fórmula dentro do texto em tamanho reduzido.' },
  { question: 'Por que minha fórmula exibe um erro de sintaxe?', answer: 'Erros de sintaxe ocorrem geralmente devido a chaves não fechadas, erros de digitação nos comandos ou operadores não suportados.' },
  { question: 'Posso usar esta ferramenta para colar fórmulas no Word ou Notion?', answer: 'Sim. Utilize "Baixar PNG" para obter uma imagem de alta resolução ou "Copiar Markdown" para obter um bloco de código pronto.' }
];

const howToItems = [
  { name: 'Digite a sua expressão LaTeX', text: 'Insira qualquer expressão matemática válida no editor. O resultado é renderizado em tempo real.' },
  { name: 'Escolha o modo de renderização', text: 'Selecione o modo Bloco para uma equação centralizada ou Em Linha para integrar a fórmula ao texto.' },
  { name: 'Ajuste o tamanho da fonte', text: 'Use o controle deslizante para aumentar ou diminuir a escala da imagem de visualização.' },
  { name: 'Exporte no seu formato preferido', text: 'Clique em "Baixar PNG", "Copiar Markdown" ou "Copiar LaTeX" para obter o resultado desejado.' }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text
  }))
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' }
};

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Renderizador de Equações LaTeX',
    inputLabel: 'Expressão LaTeX',
    inputPlaceholder: 'ex. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Bloco',
    inlineModeLabel: 'Em linha',
    fontSizeLabel: 'Tamanho da fonte',
    downloadPngButton: 'Baixar PNG',
    copyMarkdownButton: 'Copiar Markdown',
    copyLatexButton: 'Copiar LaTeX',
    resetButton: 'Reiniciar',
    previewTitle: 'Visualização ao vivo',
    copiedToast: 'Copiado para a área de transferência',
    errorLabel: 'Erro de sintaxe',
    emptyPreviewHint: 'Comece a digitar LaTeX acima para ver a fórmula renderizada aqui.',
    faqTitle: 'Perguntas Frequentes',
    bibliographyTitle: 'Referências e Recursos'
  },
  seo: [
    { type: 'title', text: 'Como escrever e renderizar fórmulas matemáticas no seu navegador', level: 2 },
    { type: 'paragraph', html: 'O LaTeX é o padrão para tipografia científica e matemática. Esta ferramenta renderiza fórmulas instantaneamente usando KaTeX sem qualquer instalação.' },
    { type: 'title', text: 'O que é KaTeX e por que é a melhor escolha para o navegador?', level: 3 },
    { type: 'paragraph', html: 'O KaTeX é uma biblioteca JavaScript criada pela Khan Academy que exibe fórmulas LaTeX de forma extremamente rápida no lado do cliente.' },
    { type: 'paragraph', html: 'Gera código HTML e SVG limpo que se adapta perfeitamente a qualquer dimensão.' },
    { type: 'title', text: 'Casos de uso comuns para estudantes e pesquisadores', level: 3 },
    { type: 'list', items: [
      'Verificar a sintaxe LaTeX antes de entregar seus trabalhos acadêmicos.',
      'Baixar fórmulas como imagens transparentes PNG para Word ou Notion.',
      'Converter expressões para blocos de código Markdown para GitHub ou Jupyter.',
      'Visualizar fórmulas antes de adicioná-las aos seus projetos no Overleaf.'
    ] },
    { type: 'title', text: 'Referência dos comandos matemáticos essenciais do LaTeX', level: 3 },
    { type: 'paragraph', html: 'Os comandos mais comuns incluem frações, raízes, somatórios e integrais.' },
    { type: 'title', text: 'Modo Bloco vs Em Linha: quando usar cada um', level: 3 },
    { type: 'paragraph', html: 'O modo Bloco centraliza a fórmula em uma linha dedicada, enquanto o modo Em Linha a insere diretamente na frase.' },
    { type: 'tip', html: 'Dica rápida de depuração: certifique-se de que cada chave aberta tenha a correspondente chave fechada.' },
    { type: 'title', text: 'Exportar fórmulas: PNG vs Markdown vs LaTeX', level: 3 },
    { type: 'paragraph', html: 'A exportação PNG utiliza o Canvas API do navegador para obter uma imagem transparente de alta qualidade.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
