import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'mapa-conceitual-texto' as const;
const title = 'Criador de mapas conceituais';
const description = 'Transforme notas com recuo em um mapa conceitual interativo com nós arrastáveis, ramos recolhíveis, controles de zoom e exportação para SVG ou PNG.';

const faqItems = [
  { question: 'Que tipo de texto posso colar no gerador de mapas conceituais?', answer: 'Use uma estrutura simples: uma ideia por linha, com recuo para os subtemas. São aceitos tópicos, listas numeradas, tabulações e espaços, para que as notas copiadas de documentos, resumos de aulas ou aplicativos de estudo possam ser convertidas sem reformatação manual.' },
  { question: 'Como devo formatar o recuo para obter o mapa conceitual mais limpo?', answer: 'Coloque o tema central na primeira linha e, em seguida, recue as ideias de apoio abaixo dele. Mantenha as ideias do mesmo nível alinhadas com o mesmo recuo. Se um nó aparecer sob o pai errado, o nível de recuo quase sempre é o problema a ser corrigido.' },
  { question: 'Posso mover os nós após o mapa ser gerado?', answer: 'Sim. Arraste qualquer nó na tela para melhorar o espaçamento, separar ramos densos ou enfatizar uma relação. Você também pode deslocar a tela, aproximar ou afastar o zoom e recolher ramos antes de exportar.' },
  { question: 'Qual é a diferença entre a exportação SVG e PNG?', answer: 'O SVG é editável e se escala de forma limpa em editores vetoriais, slides e documentos. O PNG é uma imagem fixa que é mais fácil de enviar para plataformas de sala de aula, mensagens, planilhas e fichas de revisão rápida.' },
  { question: 'Esta ferramenta infere links cruzados automaticamente?', answer: 'Não. Ela constrói uma hierarquia a partir do recuo. Isso mantém o resultado previsível, mas links laterais, como causas, contrastes ou loops de feedback, devem ser revisados manualmente após a exportação do SVG.' },
];

const howToItems = [
  { name: 'Cole ou escreva um esquema', text: 'Insira um conceito por linha e recue as ideias filhas abaixo do tema principal correspondente.' },
  { name: 'Revise a estrutura gerada', text: 'Use a tela interativa para verificar se a hierarquia corresponde a como o tema deve ser estudado.' },
  { name: 'Organize a tela', text: 'Arraste os nós, recolha os ramos cheios e ajuste o zoom até que o agrupamento visual fique claro.' },
  { name: 'Exporte para material de estudo', text: 'Baixe SVG para editar ou PNG para compartilhamento rápido, planilhas e apresentações.' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'Esquema com recuo',
    sampleButton: 'Carregar exemplo',
    clearButton: 'Limpar',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Aproximar',
    zoomOut: 'Afastar',
    resetView: 'Restaurar visualização',
    exportSvg: 'Exportar SVG',
    exportPng: 'Exportar PNG',
    collapseBranch: 'Recolher ramo',
    expandBranch: 'Expandir ramo',
    emptyStateTitle: 'Nenhum conceito ainda',
    emptyStateText: 'Escreva uma ideia por linha e recue os subtemas para construir o mapa.',
    nodeCount: 'conceitos',
    depthCount: 'níveis',
    branchCount: 'links',
    levelPrefix: 'N',
    untitledNodeLabel: 'Sem título',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'mapa-conceitual.svg',
    pngFilename: 'mapa-conceitual.png',
    sampleOutline: `Projeto de pesquisa
  Pergunta
    Qual problema está sendo investigado?
    Quem é afetado?
  Evidência
    Fontes primárias
    Artigos acadêmicos
    Conjunto de dados
  Método
    Plano de amostragem
    Etapas de análise
  Conclusão
    Principal descoberta
    Limitações
    Próxima pergunta de pesquisa`,
    faqTitle: 'Perguntas frequentes',
    bibliographyTitle: 'Referências e recursos acadêmicos',
  },
  seo: [
    { type: 'title', text: 'Converta notas com recuo em um mapa conceitual', level: 2 },
    { type: 'paragraph', html: 'Um mapa conceitual é útil quando um tema deixa de ser apenas uma lista de fatos. Ele mostra quais ideias são centrais, quais detalhes as apoiam e onde o estudante pode confundir categorias, exemplos, causas e consequências. Este gerador foi projetado para as notas que os alunos já possuem: cole um esquema com recuo, ajuste a hierarquia e use a tela interativa para organizar um mapa visual pronto para estudo.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'linha por conceito' }, { value: '2+', label: 'níveis de recuo suportados' }, { value: 'SVG', label: 'exportação editável' }, { value: 'PNG', label: 'exportação compartilhável' }] },
    { type: 'diagnostic', variant: 'info', title: 'Melhor formato de entrada para mapeamento preciso', html: '<ul><li>Coloque o tema principal em sua própria linha no topo.</li><li>Recue os subtemas abaixo da ideia que eles explicam, apoiam, definem ou exemplificam.</li><li>Mantenha as ideias do mesmo nível alinhadas com o mesmo recuo.</li><li>Use tópicos ou listas numeradas se desejar; os marcadores de lista comuns são removidos automaticamente.</li><li>Mantenha as etiquetas dos nós curtas e descritivas. As explicações completas pertencem às suas notas, não dentro de cada nó.</li></ul>' },
    { type: 'title', text: 'Como diagnosticar um mapa conceitual desorganizado', level: 3 },
    { type: 'table', headers: ['O que você vê', 'Causa provável', 'Como corrigir'], rows: [['Um detalhe aparece sob o tema errado', 'O nível de recuo é muito raso ou muito profundo.', 'Mova a linha para a esquerda ou direita até que fique sob a ideia pai correta.'], ['O mapa é muito largo', 'Muitas ideias estão situadas no mesmo nível.', 'Agrupe os elementos relacionados sob um nó de categoria mais claro.'], ['O mapa é difícil de estudar', 'As etiquetas dos nós são escritas como frases completas.', 'Encurte as etiquetas para palavras-chave, afirmações ou perguntas.'], ['Faltam relações importantes', 'O esquema é hierárquico, mas o tema possui conexões cruzadas.', 'Exporte o SVG e adicione as conexões laterais manualmente em um editor se necessário.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Mapa conceitual', description: 'Ideal para mostrar relações entre ideias, pré-requisitos, causas, evidências e categorias.', highlight: true, points: ['Focado em relações', 'Bom para revisão', 'Útil para explicar um assunto em voz alta'] }, { title: 'Esquema', description: 'Ideal para notas ordenadas, estrutura de ensaios, sequências de aulas, procedimentos e material cronológico.', points: ['Rápido de escrever', 'Fácil de digitalizar', 'Lida bem com detalhes longos'] }, { title: 'Mapa mental', description: 'Ideal para brainstorming de associações amplas antes que a estrutura do tema seja totalmente conhecida.', points: ['Exploração creativa', 'Agrupamento livre', 'Hierarquia menos rígida'] }] },
    { type: 'tip', html: '<strong>Use o recolhimento como uma ferramenta de recordação ativa.</strong> Recolha um ramo, fale os detalhes ocultos de memória e, em seguida, expanda-o para verificar o que você esqueceu. Isso transforma o mapa de um diagrama passivo em um estímulo de revisão.' },
    { type: 'title', text: 'Fluxos de estudo que se beneficiam do mapeamento visual', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Revisão de exames', description: 'Construa o mapa em torno de possíveis perguntas. Os nós pais devem ser estímulos como causas, evidências, limitações, definições ou exemplos.', highlight: true, points: ['Use ramos recolhidos para recordar', 'Mantenha as etiquetas curtas', 'Exporte PNG para fichas de revisão rápida'] }, { title: 'Planejamento de pesquisa', description: 'Use o mapa para conectar uma pergunta de pesquisa a evidências, método, fontes, limitações e conclusões.', points: ['Coloque a pergunta na raiz', 'Separe a evidência da interpretação', 'Exporte SVG para edição'] }] },
    { type: 'message', title: 'Limitação importante', html: 'O recuo cria uma árvore, não uma rede semântica completa. Se duas ideias pertencem a ramos diferentes, mas ainda influenciam uma à outra, a ferramenta não inventará esse link cruzado. Trate o mapa gerado como um rascunho limpo e adicione links não hierárquicos após a exportação quando o tema exigir.' },
    { type: 'title', text: 'Exportação de mapas conceituais para slides, planilhas e editores', level: 3 },
    { type: 'paragraph', html: 'Escolha SVG quando desejar um diagrama editável que possa ser aprimorado em um editor vetorial, ferramenta de apresentação ou fluxo de publicação. Escolha PNG quando precisar de uma imagem confiável para uma plataforma escolar, sistema de gestão de aprendizagem, planilha, chat ou ficha de revisão. Antes de exportar, organize os nós cheios, recolha os detalhes opcionais e ajuste o zoom até que a estrutura de relacionamento seja legível no tamanho em que o mapa será usado.' },
    { type: 'summary', title: 'Um fluxo de trabalho prático', items: ['Cole um esquema rápido a partir de notas, rascunhos de IA ou folhetos de aula.', 'Corrija o recuo até que cada ideia filha fique sob o pai correto.', 'Encurte as etiquetas para que os nós continuem legíveis na tela e na imagem exportada.', 'Afaste os ramos cheios arrastando-os e recolha os detalhes que não são necessários na versão final.', 'Baixe o SVG para edição posterior ou o PNG para compartilhamento imediato.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
