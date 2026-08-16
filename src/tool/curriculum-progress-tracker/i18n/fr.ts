import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'calculateur-de-progression-de-credits-et-de-note-moyenne-previsionnelle' as const;
const title = 'Calculateur de Progression de Crédits et de Note Moyenne Prévisionnelle';
const description = 'Organisez votre diplôme semestre par semestre, suivez votre moyenne réelle et prévisionnelle, et simulez la moyenne requise pour les matières restantes.';

const faqItems = [
  {
    question: 'Comment puis-je commencer à planifier mon diplôme ?',
    answer: 'Ajoutez simplement des semestres et saisissez vos cours directement sur le tableau de bord. Vous pouvez configurer le nombre de crédits, sélectionner le statut de chaque matière et saisir vos notes.',
  },
  {
    question: 'Quelle est la différence entre la moyenne réelle et la moyenne prévisionnelle ?',
    answer: 'La moyenne réelle est calculée à partir des cours terminés et validés. La moyenne prévisionnelle prend en compte vos notes prévues pour les matières en cours et planifiées afin d\'estimer votre moyenne finale.',
  },
  {
    question: 'Que montre l\'indicateur de note requise ?',
    answer: 'Il calcule la note moyenne exacte que vous devez obtenir dans l\'ensemble des matières restantes (en cours ou planifiées) pour atteindre votre note moyenne globale cible.',
  },
  {
    question: 'Mes données universitaires sont-elles sécurisées ?',
    answer: 'Oui. Toutes les données sont stockées localement dans votre navigateur internet. Aucune donnée n\'est envoyée à des serveurs externes. Vous pouvez exporter votre plan en format JSON.',
  },
];

const howToItems = [
  { name: 'Configurer vos objectifs', text: 'Définissez votre objectif de crédits de diplôme et votre moyenne cible en haut du tableau de bord.' },
  { name: 'Créer votre cursus', text: 'Ajoutez des semestres et listez vos matières avec leurs crédits respectifs selon votre programme.' },
  { name: 'Mettre à jour les notes et statuts', text: 'Basculez le statut des cours entre Validé, En Cours et Planifié, et saisissez vos notes obtenues.' },
  { name: 'Analyser les moyennes nécessaires', text: 'Consultez l\'analyseur pour connaître la note moyenne exacte requise lors des semestres futurs.' },
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

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: 'Nom du Diplôme',
    graduationCreditsLabel: 'Objectif de Crédits de Diplôme',
    targetGpaLabel: 'Moyenne Cible',
    realGpaLabel: 'Moyenne Réelle',
    projectedGpaLabel: 'Moyenne Prévisionnelle',
    creditsCompletedLabel: 'Crédits Validés',
    requiredGradeLabel: 'Moyenne Requise (Restante)',
    addSemesterButton: 'Ajouter un Semestre',
    addCourseButton: 'Ajouter un Cours',
    exportPlanButton: 'Exporter le Plan',
    importPlanButton: 'Importer un Plan',
    semesterNamePlaceholder: 'Nom du semestre (ex. Automne Année 1)',
    courseNamePlaceholder: 'Titre du cours',
    creditsPlaceholder: 'Crédits',
    gradePlaceholder: 'Note',
    statusCompleted: 'Validé',
    statusInProgress: 'En Cours',
    statusPlanned: 'Planifié',
    importError: 'Le plan d\'études n\'a pas pu être importé. Veuillez vérifier le format du fichier.',
    uploadHint: 'Toutes les données sont stockées localement dans votre navigateur. Les processus d\'importation et d\'exportation sont effectués sur votre appareil.',
    statusMessageSuccess: 'Vous êtes sur la bonne voie pour atteindre votre moyenne cible.',
    statusMessageWarning: 'Vous devez obtenir une moyenne de {grade} ou plus dans les matières restantes pour atteindre votre objectif.',
    statusMessageImpossible: 'Il est mathématiquement impossible d\'atteindre votre moyenne cible avec la configuration actuelle de vos cours.',
    degreeNamePlaceholder: 'ex. Licence en Informatique',
    deleteSemesterLabel: 'Supprimer le Semestre',
    deleteCourseLabel: 'Supprimer le Cours',
    semesterTitleTemplate: 'Semestre {num}',
  },
  seo: [
    { type: 'title', text: 'Comment planifier vos crédits universitaires et estimer votre moyenne de diplôme', level: 2 },
    { type: 'paragraph', html: 'La planification d\'un parcours universitaire nécessite des outils dynamiques pour suivre l\'évolution de vos résultats. Ce calculateur vous permet de simuler des moyennes prévisionnelles et de comprendre l\'impact des matières restantes sur vos objectifs.' },
    { type: 'summary', title: 'Indicateurs principaux à suivre chaque semestre', items: [
      'Visualisez l\'écart entre vos crédits validés et les exigences de diplomation.',
      'Distinguez vos notes officielles des estimations hypothétiques.',
      'Identifiez la moyenne minimale à maintenir pour atteindre une mention.',
    ] },
    {
      type: 'proscons',
      title: 'Avantages et limites du simulateur de moyenne',
      items: [
        {
          pro: 'Permet de planifier les futurs semestres de manière proactive.',
          con: 'Les prévisions dépendent entièrement des notes estimées saisies.',
        },
        {
          pro: 'Calcule précisément les notes cibles nécessaires pour valider une mention.',
          con: 'Ne prend pas en compte les règles spécifiques de compensation de votre université.',
        },
      ],
    },
    { type: 'title', text: 'Commencez par fixer un objectif de crédits', level: 2 },
    { type: 'paragraph', html: 'Saisissez le nombre de crédits nécessaires au diplôme et répartissez les cours restants par semestre. Cette vue rend la charge de travail visible avant toute inscription.' },
    { type: 'title', text: 'Distinguez les crédits validés et prévus', level: 2 },
    { type: 'paragraph', html: 'Les crédits validés décrivent votre progression réelle. Les cours planifiés servent uniquement à simuler les scénarios futurs et ne modifient pas votre moyenne officielle.' },
    { type: 'title', text: 'Utilisez la moyenne prévisionnelle avec prudence', level: 2 },
    { type: 'paragraph', html: 'La moyenne prévisionnelle dépend des notes que vous saisissez pour les cours restants. Testez plusieurs hypothèses plutôt que de considérer une seule estimation comme certaine.' },
    { type: 'title', text: 'Analysez la note minimale requise', level: 2 },
    { type: 'paragraph', html: 'Si votre objectif semble lointain, observez la note moyenne nécessaire dans les cours restants. Vous pourrez alors ajuster la charge de crédits ou demander conseil à votre établissement.' },
    { type: 'title', text: 'Comparez plusieurs plans de semestre', level: 2 },
    { type: 'paragraph', html: 'Un semestre plus léger peut améliorer la régularité des résultats. Une charge plus élevée accélère la progression, mais les deux scénarios doivent être comparés avec des notes réalistes.' },
    { type: 'title', text: 'Gardez un historique de vos décisions', level: 2 },
    { type: 'paragraph', html: 'Exportez votre plan avant une modification importante. Vous pourrez revenir à une version précédente et expliquer clairement vos choix académiques.' },
    { type: 'paragraph', html: 'Le calculateur fournit une simulation générale. Les règles de compensation, de pondération et de mention peuvent varier selon le diplôme et doivent être confirmées auprès de votre université.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
