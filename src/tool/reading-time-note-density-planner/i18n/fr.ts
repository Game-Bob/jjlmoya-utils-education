import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'planificateur-temps-lecture-densite-notes' as const;
const title = 'Planificateur de Temps de Lecture et Densité de Notes';
const description = 'Estimez le temps nécessaire pour vos lectures académiques en incluant la prise de notes, puis répartissez le travail en sessions d\'étude.';

const faqItems = [
  { question: 'Pourquoi la prise de notes influence-t-elle autant le temps de lecture ?', answer: 'La lecture académique ne se résume pas à survoler des mots. Chaque surbrillance, résumé, question en marge ou fiche de révision ajoute du temps de traitement. Planifier la densité des notes séparément évite qu\'une estimation optimiste de pages par heure ne se transforme en retard la veille de l\'examen.' },
  { question: 'Quelle est une bonne estimation du nombre de pages par heure ?', answer: 'Pour des manuels denses, 15 à 25 pages par heure est une moyenne courante. Pour des textes plus légers, 30 à 50 pages par heure est réaliste. Si le document contient des formules, des sources primaires ou du vocabulaire inconnu, commencez plus bas et ajustez après une première session chronométrée.' },
  { question: 'Comment choisir la densité des notes ?', answer: 'Prévoyez 1 à 2 minutes par page pour un surlignage de base ou un plan rapide, 3 à 5 minutes par page pour des notes de type Cornell, et plus de 5 minutes par page si vous créez des fiches de révision, résolvez des exemples ou rédigez un paragraphe de synthèse.' },
  { question: 'Ce planificateur peut-il remplacer le calendrier de la brochure de cours ?', answer: 'Non. Il convertit la quantité de lecture en temps de travail et en nombre de sessions, mais les dates limites, séminaires, travaux pratiques et périodes de révision doivent toujours être placés sur votre calendrier principal.' },
];

const howToItems = [
  { name: 'Saisir la charge de lecture', text: 'Ajoutez le nombre de pages ou d\'unités de lecture équivalentes que vous devez terminer.' },
  { name: 'Définir le temps disponible', text: 'Entrez le nombre total de minutes que vous pouvez raisonnablement consacrer avant la date limite.' },
  { name: 'Estimer la vitesse et la densité', text: 'Choisissez une vitesse en pages par heure et le temps moyen de prise de notes estimé par page.' },
  { name: 'Diviser en sessions', text: 'Indiquez le nombre de sessions pour voir le nombre de pages, de minutes et de notes pour chaque séance.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Pages à lire',
    minutesLabel: 'Minutes disponibles',
    speedLabel: 'Vitesse de lecture, pages/heure',
    densityLabel: 'Densité de notes, minutes/page',
    sessionsLabel: 'Sessions d\'étude',
    totalTimeLabel: 'Charge de travail totale',
    readingTimeLabel: 'Lecture',
    noteTimeLabel: 'Notes',
    coverageLabel: 'Couverture temporelle',
    pagesSessionLabel: 'Pages/session',
    minutesSessionLabel: 'Minutes/session',
    notesSessionLabel: 'Minutes de notes/session',
    controlsAriaLabel: 'Contrôles du plan de lecture',
    minuteUnit: 'min',
    hourUnit: 'h',
    faqTitle: 'Foire Aux Questions',
    bibliographyTitle: 'Références & Ressources Académiques',
    statusLabels: {
      comfortable: 'Planning viable',
      tight: 'Serré mais faisable',
      overloaded: 'Emploi du temps surchargé',
    },
    resetButton: 'Réinitialiser',
  },
  seo: [
    { type: 'title', text: 'Planifiez votre temps en fonction de vos notes et pas seulement des pages', level: 2 },
    { type: 'paragraph', html: 'Beaucoup d\'étudiants estiment leur temps de lecture en divisant le nombre de pages par leur vitesse habituelle, oubliant le principal coût caché: la prise de notes. Un chapitre de quarante pages peut se lire en quatre-vingt-dix minutes si vous le survolez, mais demandera trois heures si vous annotez, résumez et créez des questions de révision. Ce planificateur sépare la vitesse de lecture de la densité des notes pour que votre organisation reflète la réalité du travail.' },
    { type: 'diagnostic', variant: 'info', title: 'Quand votre plan de lecture est probablement trop optimiste', html: '<ul><li>Votre temps disponible ne couvre que les minutes de lecture pure, sans inclure les notes ou la résolution de problèmes.</li><li>Vous utilisez la même vitesse estimée de pages par heure pour des romans, des manuels denses, des articles scientifiques et des études de cas.</li><li>Vos sessions durent plus longtemps que votre capacité d\'attention habituelle, ce qui diminue la qualité de vos notes sur la fin.</li><li>Votre date limite englobe d\'autres travaux, mais le plan de lecture suppose que chaque minute libre appartient à une seule matière.</li></ul>' },
    { type: 'title', text: 'Choisir une vitesse de lecture réaliste', level: 3 },
    { type: 'table', headers: ['Type de document', 'Vitesse de départ', 'Conseil de planification'], rows: [['Simple survol ou contenu familier', '40-60 pages/heure', 'À utiliser uniquement si vous maîtrisez déjà le vocabulaire et que vous lisez pour réviser, pas pour apprendre.'], ['Chapitre de manuel classique', '20-35 pages/heure', 'Réduisez la vitesse si le chapitre comporte des exemples détaillés, des graphiques ou des questions d\'auto-évaluation.'], ['Théorie complexe, recherche ou source primaire', '8-20 pages/heure', 'Planifiez des sessions plus lentes et prévoyez un bloc de synthèse car la compréhension nécessite souvent plusieurs lectures.']] },
    { type: 'tip', html: '<strong>Étalonnez après la première session.</strong> Chronométrez le temps nécessaire pour lire et annoter les dix premières pages. Si le calculateur indique que le planning est confortable mais que la séance réelle montre le contraire, faites confiance à la pratique et réduisez votre estimation de vitesse.' },
    { type: 'title', text: 'Qu\'est-ce que la densité des notes', level: 3 },
    { type: 'paragraph', html: 'La densité des notes représente le temps moyen passé à traiter chaque page pendant ou après sa lecture. Une approche superficielle consiste à surligner et écrire un mot dans la marge. Une approche approfondie inclut la rédaction de résumés, de notes Cornell, de questions ou de fiches de révision. Le choix dépend du type d\'évaluation: les QCM nécessitent des fiches de mémorisation, les examens rédigés des structures d\'arguments, et les matières quantitatives la résolution de problèmes.' },
    { type: 'comparative', title: 'Notes simples vs notes approfondies', columns: 2, items: [{ title: 'Notes simples', description: 'Permet de terminer plus vite et convient aux lectures exploratoires, mais l\'information s\'oublie plus vite et est plus difficile à réviser par la suite.', points: ['Idéal pour les sujets connus', 'Charge de travail immédiate faible', 'Support de révision moins efficace'] }, { title: 'Notes approfondies', description: 'Demande plus de temps, mais reste la meilleure méthode pour préparer des examens, des séminaires et des travaux écrits nécessitant une mémorisation précise.', highlight: true, points: ['Recommandé pour les examens', 'Charge de travail immédiate élevée', 'Excellent matériel de révision'] }] },
    { type: 'summary', title: 'Une règle pratique d\'organisation', items: ['Essayez de limiter les sessions ordinaires de lecture à moins de 75 minutes.', 'Si le temps de prise de notes dépasse le temps de lecture, divisez le travail: lisez d\'abord, synthétisez ensuite.', 'Réservez la dernière session pour consolider vos connaissances plutôt que d\'ajouter de nouvelles lectures jusqu\'au dernier moment.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
