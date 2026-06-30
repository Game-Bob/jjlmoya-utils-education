import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'carte-conceptuelle-texte' as const;
const title = 'Générateur de carte conceptuelle';
const description = 'Transformez des notes avec retrait en une carte conceptuelle interactive avec des nœuds déplaçables, des branches rétractables, des commandes de zoom et une exportation au format SVG ou PNG.';

const faqItems = [
  { question: 'Quel type de texte puis-je coller dans le générateur de carte conceptuelle ?', answer: 'Utilisez un plan simple: une idée par ligne, avec des retraits pour les sous-thèmes. Les puces, listes numérotées, tabulations et espaces sont acceptés, de sorte que les notes copiées à partir de documents, de résumés de cours ou d\'applications d\'étude peuvent généralement être converties sans reformatage manuel.' },
  { question: 'Comment dois-je formater le retrait pour obtenir la carte conceptuelle la plus claire ?', answer: 'Placez le sujet central sur la première ligne, puis indentez les idées de soutien en dessous. Gardez les idées de même niveau alignées au même niveau de retrait. Si un nœud apparaît sous le mauvais parent, le niveau de retrait est presque toujours le problème à corriger.' },
  { question: 'Puis-je déplacer les nœuds après la génération de la carte ?', answer: 'Oui. Faites glisser n\'importe quel nœud sur le canevas pour améliorer l\'espacement, séparer les branches denses ou souligner une relation. Vous pouvez également faire défiler le canevas, zoomer ou dézoomer, et réduire les branches avant d\'exporter.' },
  { question: 'Quelle est la différence entre l\'exportation SVG et PNG ?', answer: 'Le format SVG est modifiable et s\'adapte proprement dans les éditeurs vectoriels, les diapositives et les documents. Le format PNG est une image fixe plus facile à télécharger sur les plateformes scolaires, les messages, les fiches de travail et les jeux de révision rapide.' },
  { question: 'Cet outil déduit-il automatiquement les liens croisés ?', answer: 'Non. Il construit une hiérarchie à partir des retraits. Cela permet de garder le résultat prévisible, mais les liens latéraux tels que les causes, les contrastes ou les boucles de rétroaction doivent être examinés manuellement après l\'exportation SVG.' },
];

const howToItems = [
  { name: 'Coller ou écrire un plan', text: 'Saisissez un concept par ligne et indentez les idées enfants sous leur sujet parent.' },
  { name: 'Vérifier la structure générée', text: 'Utilisez le canevas interactif pour vérifier si la hiérarchie correspond à la structure d\'apprentissage du sujet.' },
  { name: 'Organiser le canevas', text: 'Faites glisser les nœuds, réduisez les branches encombrées et zoomez jusqu\'à ce que le regroupement visuel soit clair.' },
  { name: 'Exporter le matériel d\'étude', text: 'Téléchargez au format SVG pour édition ou PNG pour un partage rapide, des fiches de travail et des diaporamas.' },
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
    inputLabel: 'Plan avec retrait',
    sampleButton: 'Charger l\'exemple',
    clearButton: 'Effacer',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Zoom avant',
    zoomOut: 'Zoom arrière',
    resetView: 'Réinitialiser la vue',
    exportSvg: 'Exporter en SVG',
    exportPng: 'Exporter en PNG',
    collapseBranch: 'Réduire la branche',
    expandBranch: 'Développer la branche',
    emptyStateTitle: 'Aucun concept pour l\'instant',
    emptyStateText: 'Écrivez une idée par ligne et indentez les sous-thèmes pour construire la carte.',
    nodeCount: 'concepts',
    depthCount: 'niveaux',
    branchCount: 'liens',
    levelPrefix: 'N',
    untitledNodeLabel: 'Sans titre',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'carte-conceptuelle.svg',
    pngFilename: 'carte-conceptuelle.png',
    sampleOutline: `Projet de recherche
  Question
    Quel problème est étudié ?
    Qui est concerné ?
  Preuves
    Sources primaires
    Articles académiques
    Jeu de données
  Méthode
    Plan d'échantillonnage
    Étapes d'analyse
  Conclusion
    Résultat principal
    Limites
    Prochaine question de recherche`,
    faqTitle: 'Questions fréquentes',
    bibliographyTitle: 'Références et ressources académiques',
  },
  seo: [
    { type: 'title', text: 'Convertir des notes avec retraits en carte conceptuelle', level: 2 },
    { type: 'paragraph', html: 'Une carte conceptuelle est utile lorsqu\'un sujet n\'est plus une simple liste de faits. Elle montre quelles idées sont centrales, quels détails les soutiennent et où un apprenant peut confondre les catégories, les exemples, les causes et les conséquences. Ce générateur est conçu pour les notes que les étudiants possèdent déjà: collez un plan indenté, ajustez la hiérarchie, puis utilisez le canevas interactif pour organiser une carte visuelle prête pour l\'étude.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'ligne par concept' }, { value: '2+', label: 'niveaux de retrait supportés' }, { value: 'SVG', label: 'exportation modifiable' }, { value: 'PNG', label: 'exportation partageable' }] },
    { type: 'diagnostic', variant: 'info', title: 'Meilleur format de saisie pour une cartographie précise', html: '<ul><li>Placez le sujet principal sur sa propre ligne tout en haut.</li><li>Indentez les sous-thèmes sous l\'idée qu\'ils expliquent, soutiennent, définissent ou illustrent.</li><li>Gardez les idées sœurs alignées sur la même profondeur de retrait.</li><li>Utilisez des puces ou des listes numérotées si vous le souhaitez ; les marqueurs de liste courants sont supprimés automatiquement.</li><li>Gardez les étiquettes des nœuds courtes et descriptives. Les explications complètes ont leur place dans vos notes, pas à l\'intérieur de chaque nœud.</li></ul>' },
    { type: 'title', text: 'Comment diagnostiquer une carte conceptuelle désordonnée', level: 3 },
    { type: 'table', headers: ['Ce que vous voyez', 'Cause probable', 'Comment y remédier'], rows: [['Un détail apparaît sous le mauvais sujet', 'Le niveau de retrait est trop superficiel ou trop profond.', 'Déplacez la ligne vers la gauche ou la droite jusqu\'à ce qu\'elle se trouve sous la bonne idée parente.'], ['La carte est très large', 'Trop d\'idées sont placées au même niveau.', 'Regroupez les éléments similaires sous un nœud de catégorie plus clair.'], ['La carte est difficile à étudier', 'Les étiquettes des nœuds sont écrites sous forme de phrases complètes.', 'Raccourcissez les étiquettes avec des mots-clés ou des questions.'], ['Des relations importantes manquent', 'Le plan est hiérarchique mais le sujet comporte des liens croisés.', 'Exportez au format SVG et ajoutez manuellement des liens latéraux dans un éditeur si nécessaire.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Carte conceptuelle', description: 'Idéale pour montrer les relations entre les idées, les prérequis, les causes, les preuves et les catégories.', highlight: true, points: ['Axée sur les relations', 'Idéale pour les révisions', 'Utile pour expliquer un sujet à haute voix'] }, { title: 'Plan', description: 'Idéal pour les notes ordonnées, la structure d\'essais, les séquences de cours, les procédures et le matériel chronologique.', points: ['Rapide à rédrire', 'Facile à parcourir', 'Gère bien les détails longs'] }, { title: 'Carte mentale', description: 'Idéale pour le remue-méninges de larges associations avant que la structure du sujet ne soit pleinement connue.', points: ['Exploration créative', 'Regroupement libre', 'Hiérarchie moins stricte'] }] },
    { type: 'tip', html: '<strong>Utilisez la réduction comme un outil de rappel actif.</strong> Réduisez une branche, récitez les détails masqués de mémoire, puis développez-la pour vérifier ce que vous avez manqué. Cela transforme la carte d\'un schéma passif en un outil de révision interactif.' },
    { type: 'title', text: 'Flux d\'étude qui bénéficient de la cartographie visuelle', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Révision d\'examen', description: 'Construisez la carte autour des questions probables. Les nœuds parents doivent être des invites telles que les causes, les preuves, les limites, les définitions ou les exemples.', highlight: true, points: ['Utiliser les branches réduites pour le rappel', 'Garder les étiquettes courtes', 'Exporter en PNG pour des fiches de révision rapide'] }, { title: 'Planification de recherche', description: 'Utilisez la carte pour relier une question de recherche aux preuves, à la méthode, aux sources, aux limites et aux conclusions.', points: ['Mettre la question à la racine', 'Séparer les preuves de l\'interprétation', 'Exporter en SVG pour édition'] }] },
    { type: 'message', title: 'Limite importante', html: 'Le retrait crée un arbre, pas un réseau sémantique complet. Si deux idées appartiennent à des branches différentes mais s\'influencent mutuellement, l\'outil ne créera pas ce lien croisé. Traitez la carte générée comme un premier brouillon propre, puis ajoutez des liens non hiérarchiques après exportation lorsque le sujet l\'exige.' },
    { type: 'title', text: 'Exporter des cartes conceptuelles pour des diapositives, fiches et éditeurs', level: 3 },
    { type: 'paragraph', html: 'Choisissez le format SVG lorsque vous souhaitez un diagramme modifiable pouvant être affiné dans un éditeur vectoriel, un outil de présentation ou un flux de publication. Choisissez le format PNG lorsque vous avez besoin d\'une image fiable pour une plateforme scolaire, un système de gestion de l\'apprentissage, une fiche de travail, un chat ou un jeu de révision. Avant d\'exporter, organisez les nœuds encombrés, réduisez les détails facultatifs et zoomez jusqu\'à ce que la structure des relations soit lisible à la taille finale d\'utilisation.' },
    { type: 'summary', title: 'Un flux de travail pratique', items: ['Collez un plan approximatif à partir de notes, de brouillons d\'IA ou d\'un polycopié de cours.', 'Corrigez le retrait jusqu\'à ce que chaque idée enfant soit placée sous le bon parent.', 'Raccourcissez les étiquettes pour que les nœuds restent lisibles dans le canevas et l\'image exportée.', 'Séparez les branches encombrées en les faisant glisser et réduisez les détails superflus pour la version finale.', 'Téléchargez le fichier SVG pour d\'autres modifications ou le PNG pour un partage immédiat.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
