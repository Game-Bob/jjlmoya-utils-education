import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-french' as const;
const title = 'Compte à rebours et planificateur de sessions d\'examen';
const description = 'Calculez votre rythme d\'étude quotidien exact pour arriver prêt le jour de l\'examen. Saisissez le volume de vos cours, définissez vos jours de repos et générez un calendrier d\'étude personnalisé.';

const faqItems = [
  { question: 'Pourquoi est-il préférable d\'étudier quotidiennement plutôt que de tout réviser au dernier moment ?', answer: 'Les études scientifiques montrent que la pratique distribuée (le fait d\'espacer les sessions d\'apprentissage dans le temps) favorise une meilleure mémorisation à long terme et réduit considérablement le stress lié aux examens par rapport au bachotage de dernière minute.' },
  { question: 'À quoi sert la marge de révision ?', answer: 'La marge de révision réserve un nombre spécifique de jours juste avant l\'échéance pour des révisions globales. Le planificateur ne programme aucun nouveau contenu durant cette période, vous laissant le temps de consolider vos acquis.' },
  { question: 'Comment les jours de repos personnalisés influencent-ils mon rythme ?', answer: 'Lorsque vous désactivez un jour, le planificateur redistribue automatiquement la charge de travail restante sur les autres jours d\'étude actifs. Cela augmente légèrement votre objectif quotidien pour vous garantir de finir à temps.' },
  { question: 'Puis-je retransformer un jour de repos en jour d\'étude ?', answer: 'Oui. Vous pouvez modifier le statut de n\'importe quel jour entre repos et étude en temps réel sur votre calendrier, ou supprimer des dates exclues de la liste pour recalculer instantanément.' },
];

const howToItems = [
  { name: 'Saisissez la date de votre examen', text: 'Sélectionnez la date de votre épreuve finale dans le sélecteur de calendrier.' },
  { name: 'Indiquez le volume total de travail', text: 'Entrez le nombre total de pages, de chapitres ou de modules à étudier.' },
  { name: 'Définissez votre planning et votre marge', text: 'Choisissez vos jours de repos hebdomadaires et configurez une marge de révision finale.' },
  { name: 'Ajustez et suivez vos progrès', text: 'Basculez des jours individuels en repos directement sur votre calendrier pour adapter le planning à vos imprévus.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Compte à rebours & Planificateur d\'études',
    examDateLabel: 'Date de l\'examen',
    materialLabel: 'Volume total (Pages / Chapitres)',
    materialUnitLabel: 'Unité de contenu',
    progressLabel: 'Déjà complété',
    weeklyScheduleLabel: 'Jours d\'étude hebdomadaires',
    reviewBufferLabel: 'Marge de révision (Jours)',
    excludedDatesLabel: 'Jours de repos personnalisés',
    dailyPaceLabel: 'Rythme d\'étude quotidien',
    daysLeftLabel: 'Jours restants',
    studyDaysLabel: 'Jours d\'étude',
    bufferDaysLabel: 'Jours de marge',
    scheduleTitle: 'Votre calendrier d\'étude personnalisé',
    resetButton: 'Réinitialiser',
    addExclusionButton: 'Ajouter un jour de repos',
    daysOfWeek: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayTypes: {
      study: 'Jour d\'étude',
      rest: 'Jour de repos',
      review: 'Marge de révision',
      exam: 'Jour de l\'examen',
    },
    units: {
      pages: 'Pages',
      chapters: 'Chapitres',
      exercises: 'Exercices',
      modules: 'Modules',
      topics: 'Sujets',
    },
    noStudyDaysError: 'Vous n\'avez aucun jour d\'étude disponible ! Vérifiez votre planning hebdomadaire et votre marge de révision.',
    examInPastError: 'La date de l\'examen doit être dans le futur.',
    noMaterialError: 'Veuillez saisir un volume de travail supérieur à zéro.',
    scheduleTableHeader: {
      date: 'Date',
      day: 'Jour',
      type: 'Statut',
      target: 'Objectif quotidien',
      cumulative: 'Progression globale',
      action: 'Actions',
    },
    markAsRest: 'Marquer comme repos',
    markAsStudy: 'Marquer comme étude',
    faqTitle: 'Foire Aux Questions',
    bibliographyTitle: 'Références & Ressources académiques',
  },
  seo: [
    { type: 'title', text: 'Comment planifier vos sessions d\'étude pour une mémorisation maximale', level: 2 },
    { type: 'paragraph', html: 'Préparer un examen ne se résume pas à accumuler les heures de révision la veille des épreuves, mais consiste plutôt à répartir méthodiquement votre charge de travail. Adopter un rythme régulier est indispensable pour éviter la fatigue cognitive, améliorer l\'ancrage des connaissances et s\'assurer de couvrir tout le programme sans paniquer.' },
    { type: 'title', text: 'La science de l\'apprentissage distribué et de la répétition espacée', level: 3 },
    { type: 'paragraph', html: 'Notre cerveau assimile mieux les informations lorsqu\'elles sont espacées dans le temps. En répartissant vos révisions sur plusieurs semaines, vous permettez à votre cerveau de consolider les connexions neuronales. La répétition espacée prévient la fatigue intellectuelle et favorise le transfert des données de la mémoire à court terme vers la mémoire à long terme.' },
    { type: 'paragraph', html: 'D\'après les travaux d\'Ebbinghaus sur la courbe de l\'oubli, la force d\'un souvenir décline naturellement si nous ne le sollicitons pas régulièrement. Les révisions planifiées à intervalles réguliers agissent comme des rappels indispensables pour rafraîchir l\'information et ancrer les concepts en profondeur.' },
    { type: 'title', text: 'Prévoir une marge pour les révisions finales', level: 3 },
    { type: 'paragraph', html: 'Une erreur classique consiste à assimiler de nouvelles notions jusqu\'au dernier moment. Réserver une marge spécifique de révision (généralement 2 à 5 jours avant l\'examen) vous permet de faire des examens blancs, de relire vos fiches de synthèse et de combler vos lacunes. C\'est également un excellent moyen de vous reposer pour être pleinement performant le jour J.' },
    { type: 'title', text: 'L\'importance de la planification adaptative', level: 3 },
    { type: 'paragraph', html: 'Les plannings rigides échouent souvent face aux imprévus du quotidien. Si vous prenez du retard, un planning classique devient obsolète et décourageant. Un outil de calcul adaptatif recalcule vos besoins quotidiens en temps réel, neutralisant le stress lié aux ajustements de parcours.' },
    { type: 'list', items: [
      'Indiquez régulièrement vos progrès pour maintenir la précision des calculs.',
      'Ajustez vos jours de repos en cas de conflits d\'agenda inattendus.',
      'Privilégiez la régularité plutôt que d\'essayer de compenser de gros retards en une seule journée.'
    ] },
    { type: 'title', text: 'Flexibilité : intégrer des jours de repos', level: 3 },
    { type: 'paragraph', html: 'Le repos ne doit pas être vu comme une récompense, mais comme une phase intégrante de l\'apprentissage. En programmant consciemment des jours de relâche dans votre calendrier, vous préservez votre motivation. Ce planificateur adapte automatiquement le volume d\'étude pour les jours restants.' },
    { type: 'tip', html: '<strong>Prévoyez l\'imprévu.</strong> Laissez toujours au moins un jour de repos par semaine. Ce jour sert de soupape de sécurité pour rattraper un éventuel retard dû à une fatigue ou une urgence, sans bousculer tout votre calendrier.' },
    { type: 'title', text: 'Comment calculer manuellement son rythme d\'étude', level: 3 },
    { type: 'paragraph', html: 'Pour calculer votre rythme d\'étude quotidien manuellement, appliquez une formule mathématique simple. D\'abord, soustrayez la part déjà étudiée du volume total de travail pour connaître la charge restante. Comptez ensuite le nombre de jours qui vous séparent de l\'examen, puis soustrayez vos jours de repos et votre marge de révision. Enfin, divisez votre charge restante par le nombre de jours d\'étude disponibles.' },
    { type: 'paragraph', html: 'Par exemple, si vous devez étudier 400 pages, que vous en avez déjà complété 50, qu\'il vous reste 20 jours avant l\'examen, que vous prévoyez 4 jours de repos et 2 jours de marge : votre charge restante est de 350 pages et vos jours d\'étude effectifs sont au nombre de 14. Votre rythme quotidien sera de 350 divisé par 14, soit exactement 25 pages par jour.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
