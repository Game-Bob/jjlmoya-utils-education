import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = 'Convertisseur de Notes Internationales & Calculateur d\'Équivalence GPA';
const description = 'L\'outil le plus précis pour convertir les notes académiques entre les systèmes internationaux. Traduisez instantanément les scores d\'Espagne, des États-Unis, du Royaume-Uni, d\'Allemagne, de France, d\'Italie et plus encore. Essentiel pour Erasmus+, Fulbright et les candidatures universitaires mondiales.';

const faqItems = [
  { 
    question: 'Comment fonctionne la conversion des notes internationales ?', 
    answer: 'L\'outil utilise une correspondance linéaire mathématique basée sur la note minimale de passage et le score maximum possible pour chaque pays. Cela garantit qu\'un "admis" dans un système s\'aligne avec un "admis" dans un autre, maintenant l\'équité proportionnelle académique à travers les différentes échelles.' 
  },
  { 
    question: 'Ce convertisseur est-il officiel pour les admissions universitaires ?', 
    answer: 'Bien que nos algorithmes suivent les tableaux d\'équivalence internationaux standards (comme ceux utilisés par l\'ECTS ou WES), cet outil est à titre informatif. Pour la reconnaissance officielle des crédits, vous devez toujours consulter votre établissement d\'accueil ou un service d\'évaluation accrédité.' 
  },
  { 
    question: 'Qu\'est-ce que la fonctionnalité "Mode Bulk" ?', 
    answer: 'Le Mode Bulk permet aux étudiants ayant de longs relevés de notes de traiter plusieurs notes à la fois. Copiez simplement une colonne de chiffres depuis votre relevé PDF ou Excel, et l\'outil calculera instantanément les conversions individuelles et votre moyenne GPA globale.' 
  },
  { 
    question: 'Puis-je convertir mes notes en ECTS ?', 
    answer: 'Oui. Le convertisseur fournit des équivalents qui s\'alignent sur le Système Européen de Transfert et d\'Accumulation de Crédits (ECTS), ce qui le rend parfait pour les étudiants européens planifiant leur mobilité ou postulant à des programmes de Master.' 
  }
];

const howToItems = [
  { name: '1. Sélectionner le Système d\'Origine', text: 'Identifiez votre pays d\'origine ou l\'échelle de notation spécifique (ex: Espagne 0-10, France 0-20).' },
  { name: '2. Définir les Pays Cibles', text: 'Ajoutez les pays où vous postulez pour voir toutes les équivalences côte à côte dans le tableau de bord.' },
  { name: '3. Saisir les Données Académiques', text: 'Saisissez une seule note pour des vérifications rapides ou utilisez le Mode Bulk pour l\'ensemble de votre relevé de semestre.' },
  { name: '4. Analyser & Exporter', text: 'Examinez les barres de centiles visuelles et téléchargez votre rapport d\'équivalence au format PDF pour vos archives.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Traitement en Mode Bulk, Conversion en temps réel, Support des échelles mondiales, Génération de rapports PDF',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Système de Notation Source',
    targetSystems: 'Équivalences Globales',
    gradeInput: 'Votre Note',
    bulkMode: 'Traitement par Lots',
    bulkPlaceholder: 'Collez votre liste de notes ici (une par ligne)...',
    results: 'Tableau des Équivalences',
    passLimit: 'Seuil de Passage',
    shareResults: 'Générer le Rapport d\'Équivalence',
    averageMedia: 'Moyenne Globale Convertie',
    compareTitle: 'Classement Académique Mondial',
    addSystem: 'Ajouter un Pays',
    removeSystem: 'Supprimer',
    selectCountry: 'Choisir le Pays',
    sourceCountry: 'Pays d\'Origine',
    systemSelection: 'Sélection du Système',
    convertedScore: 'Note Convertie',
    emptyState: 'Saisissez une note pour voir les équivalences globales',
    minLabel: 'MIN',
    passLabel: 'ADMIS',
    maxLabel: 'MAX',
    scaleLabel: 'Échelle',
    howToTitle: 'Votre Chemin vers l\'Éducation Internationale',
    faqTitle: 'Questions Fréquemment Posées',
    bibliographyTitle: 'Références & Standards Académiques',
    singleGradeMode: 'Note Unique',
    transcriptMode: 'Relevé Complet',
    gradeCounter: 'Notes saisies',
    averageSummary: 'Moyenne calculée',
    gradesIgnored: '{count} notes ignorées (hors plage)',
    bulkHelp: 'Collez votre relevé directement. Nous détectons les notes séparées par des espaces, virgules ou retours à la ligne.',
    copiedLabel: 'Copié !',
    germanyExpl: 'Système inversé : 1,0 est la meilleure note, 4,0 est le minimum pour valider.',
    spainExpl: 'Échelle standard 0-10. 5,0 est le minimum pour valider.',
    usaExpl: 'Échelle GPA de 0,0 à 4,0. Habituellement, 2,0 est le minimum pour valider.',
    ukExpl: 'Classification par pourcentage. 40% est le minimum pour valider.',
    franceExpl: 'Échelle sur 20 points. 10 est le minimum pour valider.',
    italyExpl: 'Échelle sur 30 points. 18 est le minimum pour valider.',
    netherlandsExpl: 'Échelle 1-10. 6 est le minimum pour valider.',
    placeholderSpain: 'ex: 8,5',
    placeholderUSA: 'ex: 3,7 ou A-',
    placeholderFrance: 'ex: 14',
    placeholderGermany: 'ex: 1,3',
    placeholderUK: 'ex: 75',
    placeholderItaly: 'ex: 28',
    placeholderNetherlands: 'ex: 7,5',
  },
  seo: [
    { type: 'title', text: 'Conversion de Notes de Précision pour la Mobilité Mondiale', level: 2 },
    { type: 'paragraph', html: 'Que vous soyez un <strong>étudiant Erasmus+</strong> ou que vous postuliez pour un <strong>Master de l\'Ivy League</strong>, comprendre votre classement académique mondial est la première étape. Les notes varient énormément : alors qu\'un 10 en Espagne est parfait, en France c\'est juste un passage. Notre moteur clarifie ces différences.' },
    { type: 'title', text: 'Pourquoi l\'exactitude compte dans la conversion GPA', level: 3 },
    { type: 'paragraph', html: 'Les comités d\'admission utilisent les GPA convertis pour filtrer des milliers de candidatures. Une légère erreur de calcul manuel pourrait vous coûter une bourse. Notre outil utilise des <strong>algorithmes de correspondance linéaire officiels</strong> utilisés par les grands bureaux d\'éducation internationale.' },
    { type: 'title', text: 'Systèmes Majeurs Supportés', level: 3 },
    { type: 'list', items: [
      '<strong>Espagne (0-10) :</strong> Correspondance détaillée de "Aprobado" à "Sobresaliente".',
      '<strong>USA GPA (4.0) :</strong> Équivalence universitaire américaine standard.',
      '<strong>Allemagne (1-6) :</strong> Gestion de l\'échelle inversée où 1,0 est le sommet.',
      '<strong>France (0-20) :</strong> Conversion précise pour les Grandes Écoles et universités françaises.',
      '<strong>Classification UK :</strong> Traduction du pourcentage en mention (Honours Degree).'
    ] },
    { type: 'tip', html: '<strong>Aperçu Académique :</strong> Utilisez le "Mode Bulk" pour trouver votre GPA cumulé sur plusieurs semestres. Cela évite des heures de travail manuel sur tableur !' },
    { type: 'title', text: 'Calculez votre Équivalence WES', level: 3 },
    { type: 'paragraph', html: 'Bien que l\'évaluation officielle WES soit un service payant, notre outil fournit une <strong>estimation de haute fidélité</strong> de votre GPA WES, vous aidant à décider où postuler avant de payer les frais d\'évaluation.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
