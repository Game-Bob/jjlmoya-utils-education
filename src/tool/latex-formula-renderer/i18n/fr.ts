import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'rendu-formules-latex' as const;
const title = 'Rendu de Formules LaTeX';
const description = 'Affichez instantanément des expressions mathématiques LaTeX dans votre navigateur. Saisissez votre formule et copiez le résultat sous forme d\'image PNG, de bloc Markdown ou de code LaTeX.';

const faqItems = [
  { question: 'Qu\'est-ce que LaTeX et pourquoi les étudiants l\'utilisent-ils ?', answer: 'LaTeX est un langage de description de documents largement utilisé en mathématiques, physique et ingénierie pour rédiger des équations professionnelles. Contrairement à Word, il offre un contrôle parfait sur la mise en forme.' },
  { question: 'Dois-je installer quelque chose pour utiliser ce moteur ?', answer: 'Non. Cet outil fonctionne entièrement dans votre navigateur grâce à KaTeX, une bibliothèque JavaScript ultra-rapide. Aucun serveur ni installation requis.' },
  { question: 'Quelle est la différence entre le mode Bloc et En ligne ?', answer: 'Le mode Bloc affiche la formule centrée sur sa propre ligne. Le mode En ligne l\'intègre directement dans le texte à une taille légèrement réduite.' },
  { question: 'Pourquoi ma formule affiche-t-elle une erreur de syntaxe ?', answer: 'Cela provient généralement d\'une accolade non fermée, d\'une commande mal orthographiée ou d\'un opérateur non pris en charge.' },
  { question: 'Puis-je utiliser cet outil pour coller des formules dans Word ou Notion ?', answer: 'Oui. Utilisez "Télécharger PNG" pour obtenir une image haute résolution, ou "Copier Markdown" pour insérer le bloc de code correspondant.' }
];

const howToItems = [
  { name: 'Saisissez votre expression LaTeX', text: 'Entrez une expression LaTeX valide dans l\'éditeur. Le rendu s\'effectue en temps réel.' },
  { name: 'Choisissez un mode de rendu', text: 'Sélectionnez le mode Bloc pour une équation centrée ou le mode En ligne pour l\'intégrer au texte.' },
  { name: 'Ajustez la taille de la police', text: 'Utilisez le curseur pour agrandir ou rétrécir l\'aperçu selon vos besoins.' },
  { name: 'Exportez dans le format souhaité', text: 'Cliquez sur "Télécharger PNG", "Copier Markdown" ou "Copier LaTeX" pour récupérer votre travail.' }
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
    title: 'Rendu de Formules LaTeX',
    inputLabel: 'Expression LaTeX',
    inputPlaceholder: 'ex. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Bloc',
    inlineModeLabel: 'En ligne',
    fontSizeLabel: 'Taille de police',
    downloadPngButton: 'Télécharger PNG',
    copyMarkdownButton: 'Copier Markdown',
    copyLatexButton: 'Copier LaTeX',
    resetButton: 'Réinitialiser',
    previewTitle: 'Aperçu en direct',
    copiedToast: 'Copié dans le presse-papiers',
    errorLabel: 'Erreur de syntaxe',
    emptyPreviewHint: 'Saisissez du code LaTeX ci-dessus pour afficher la formule.',
    faqTitle: 'Foire Aux Questions',
    bibliographyTitle: 'Références et Ressources'
  },
  seo: [
    { type: 'title', text: 'Comment écrire et afficher des formules mathématiques dans son navigateur', level: 2 },
    { type: 'paragraph', html: 'LaTeX est la référence absolue pour la mise en forme de documents scientifiques et mathématiques. Cet outil affiche vos formules instantanément à l\'aide de KaTeX, sans aucune installation préalable.' },
    { type: 'title', text: 'Qu\'est-ce que KaTeX et pourquoi est-ce la solution idéale pour le web ?', level: 3 },
    { type: 'paragraph', html: 'KaTeX est une bibliothèque JavaScript développée par Khan Academy. Elle convertit le code LaTeX côté client de manière extrêmement rapide et fidèle.' },
    { type: 'paragraph', html: 'KaTeX produit un balisage HTML et SVG propre et accessible qui conserve sa netteté à toutes les résolutions.' },
    { type: 'title', text: 'Cas d\'usage fréquents pour les étudiants et chercheurs', level: 3 },
    { type: 'list', items: [
      'Valider la syntaxe LaTeX de vos équations avant de soumettre vos travaux universitaires.',
      'Exporter des formules sous forme d\'images transparentes PNG pour Word, Docs ou Notion.',
      'Convertir des formules en blocs de code Markdown pour GitHub ou Jupyter.',
      'Prévisualiser vos formules avant de les intégrer à un document rédigé avec Overleaf.'
    ] },
    { type: 'title', text: 'Rappel des commandes mathématiques LaTeX indispensables', level: 3 },
    { type: 'paragraph', html: 'Les commandes fondamentales incluent les fractions, les racines carrées, les sommes et les intégrales.' },
    { type: 'title', text: 'Mode Bloc vs Mode En ligne: Quand choisir l\'un ou l\'autre ?', level: 3 },
    { type: 'paragraph', html: 'Le mode Bloc centre la formule sur sa propre ligne, tandis que le mode En ligne l\'insère directement dans la phrase.' },
    { type: 'tip', html: 'Astuce de débogage: chaque accolade ouvrante doit obligatoirement avoir une accolade fermante.' },
    { type: 'title', text: 'Exportations possibles: PNG, Markdown et LaTeX brut', level: 3 },
    { type: 'paragraph', html: 'L\'export PNG utilise l\'API Canvas pour générer un rendu net avec fond transparent.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
