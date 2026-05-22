import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'analyseur-releve-notes-gpa' as const;
const title = 'Lecteur et Calculateur de GPA de Relevé de Notes';
const description = 'Calculez instantanément votre moyenne générale cumulée (GPA) et votre moyenne pondérée en copiant-collant le texte brut de votre relevé de notes universitaire. Fonctionne entièrement hors ligne.';

const faqItems = [
  {
    question: 'Comment fonctionne l\'analyse automatique ?',
    answer: 'L\'outil parcourt le texte collé ligne par ligne et le divise en colonnes selon les espaces, les tabulations ou la ponctuation. Il analyse ensuite les valeurs pour identifier automatiquement les colonnes correspondant aux noms des cours, aux notes et aux crédits.'
  },
  {
    question: 'Mes données académiques sont-elles sécurisées ?',
    answer: 'Oui, tout à fait. L\'analyse et les calculs de GPA s\'effectuent entièrement dans votre navigateur sur votre appareil. Aucune donnée n\'est envoyée à un serveur, garantissant la confidentialité absolue de votre relevé de notes.'
  },
  {
    question: 'Que faire si les colonnes ne sont pas correctement associées ?',
    answer: 'Vous pouvez facilement les ajuster. Chaque colonne du tableau détecté comporte un en-tête déroulant vous permettant de choisir manuellement si elle représente le nom du cours, la note, les crédits, ou si elle doit être ignorée.'
  },
  {
    question: 'Prend-il en charge les notes sous forme de lettres et différentes échelles ?',
    answer: 'Oui, il accepte les notes sous forme de lettres standard (A, B, C, D, F) ainsi que les échelles numériques (0-10, 0-20, 0-100). Vous pouvez configurer la valeur maximale de l\'échelle pour l\'adapter au système de votre université.'
  }
];

const howToItems = [
  {
    name: 'Copiez votre relevé',
    text: 'Accédez au portail de votre université ou à votre bulletin, sélectionnez le texte et copiez-le.'
  },
  {
    name: 'Collez le texte',
    text: 'Collez le texte copié dans la zone de saisie de l\'outil.'
  },
  {
    name: 'Vérifiez et associez',
    text: 'Examinez le tableau généré automatiquement. Si nécessaire, modifiez le rôle de chaque colonne à l\'aide des en-têtes.'
  },
  {
    name: 'Obtenez votre GPA',
    text: 'Visualisez instantanément votre moyenne générale calculée et le total de vos crédits au bas de la page.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Collez votre relevé de notes ici',
    pasteAreaPlaceholder: 'Collez le texte copié depuis Moodle, Canvas ou le portail de votre université...',
    parsedTitle: 'Données extraites du relevé',
    columnSelect: 'Associer la colonne',
    subjectName: 'Nom du cours / de la matière',
    grade: 'Note',
    credits: 'Crédits',
    ignore: 'Ignorer',
    gpaResult: 'GPA cumulé',
    totalCredits: 'Crédits totaux',
    emptyState: 'Collez les données de votre relevé ci-dessus pour prévisualiser et modifier les lignes ici.',
    scaleLabel: 'Limite de l\'échelle de notes',
    customScale: 'Note maximale de l\'échelle',
    exampleSubject: 'Calcul I',
    newSubjectPlaceholder: 'Nouveau cours',
    clearBtn: 'Effacer le texte',
    errorFormat: 'Impossible de détecter des colonnes claires. Essayez de copier-coller un format de tableau ou de liste.'
  },
  seo: [
    { type: 'title', text: 'Comment extraire et calculer le GPA à partir de n\'importe quel relevé de notes', level: 2 },
    { type: 'paragraph', html: 'Calculer votre moyenne académique ne devrait pas nécessiter de saisir manuellement des dizaines de cours. Cet outil extrait les données de n\'importe quel texte copié-collé pour calculer votre GPA.' },
    { type: 'title', text: 'Pourquoi utiliser un analyseur de relevé de notes ?', level: 3 },
    { type: 'paragraph', html: 'Les portails universitaires présentent souvent les bulletins de notes sous forme de tableaux HTML complexes. En les copiant et collant directement dans cet outil, notre moteur heuristique extrait instantanément les matières, les notes et les crédits, sans risque d\'erreur de saisie.' },
    { type: 'title', text: 'Sécurisé, privé et rapide', level: 3 },
    { type: 'paragraph', html: 'Puisque le moteur d\'analyse s\'exécute localement en JavaScript, vos données académiques ne quittent jamais votre navigateur. Vous pouvez analyser des pages de plusieurs centaines de lignes en quelques millisecondes.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
