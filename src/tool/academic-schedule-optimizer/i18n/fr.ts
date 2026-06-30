import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'optimiseur-emploi-du-temps' as const;
const title = 'Optimiseur d\'Emploi du Temps Académique';
const description = 'Créez un emploi du temps hebdomadaire visuel, organisez vos cours par couleur, détectez les chevauchements et exportez votre calendrier au format .ics.';

const faqItems = [
  {
    question: 'Comment fonctionne le détecteur de conflits ?',
    answer: 'Chaque cours possède un jour, une heure de début et une durée. L\'outil compare chaque paire de cours et les signale s\'ils partagent le même jour et si leurs plages horaires se chevauchent.'
  },
  {
    question: 'Puis-je déplacer les cours directement sur le calendrier ?',
    answer: 'Oui. Glissez-déposez un bloc de cours dans la colonne d\'un autre jour pour tester une nouvelle configuration. Le statut des conflits est mis à jour immédiatement après le déplacement.'
  },
  {
    question: 'Que contient l\'exportation .ics ?',
    answer: 'L\'exportation génère un fichier iCalendar standard où chaque cours est un événement comprenant la matière, la salle, l\'heure de début et de fin. Vous pouvez l\'importer dans la plupart des applications de calendrier.'
  },
  {
    question: 'Pourquoi devrais-je attribuer des couleurs à mes cours ?',
    answer: 'Les couleurs facilitent la lecture rapide d\'un planning chargé. Utilisez des couleurs distinctes pour les travaux pratiques, les cours magistraux, les séminaires ou les matières difficiles pour repérer plus vite les conflits et les journées chargées.'
  }
];

const howToItems = [
  { name: 'Saisir les détails du cours', text: 'Entrez la matière, la salle, le jour, l\'heure de début, la durée et la couleur.' },
  { name: 'Placer les cours sur la grille', text: 'Utilisez les blocs générés pour visualiser comment chaque cours s\'intègre dans votre semaine.' },
  { name: 'Résoudre les conflits', text: 'Identifiez les blocs de conflit en surbrillance, puis déplacez ou modifiez les cours jusqu\'à ce que le panneau des conflits soit vide.' },
  { name: 'Exporter le calendrier', text: 'Téléchargez le fichier .ics et importez-le dans Google Calendar, Apple Calendar, Outlook ou autre application.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Matière',
    roomLabel: 'Salle',
    dayLabel: 'Jour',
    startLabel: 'Début',
    durationLabel: 'Durée',
    colorLabel: 'Couleur',
    addClass: 'Ajouter',
    saveClass: 'Enregistrer',
    newClass: 'Nouveau cours',
    exportICS: 'Exporter .ics',
    conflictLabel: 'Conflits d\'emploi du temps',
    noConflicts: 'Aucun chevauchement détecté',
    removeLabel: 'Supprimer le cours',
    editHint: 'Sélectionnez un cours pour le modifier, ou glissez-le vers un autre jour/horaire.',
    weekendDaysLabel: 'Jours de week-end',
    saturdayLabel: 'Samedi',
    sundayLabel: 'Dimanche',
    weekDayLabels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'],
    weekendDayShortLabels: ['Sam', 'Dim'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 h', '2 h', '3 h'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Calculus',
    defaultRoom: 'Salle 204',
    defaultNewSubject: 'Nouveau cours',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Calculus', room: 'Salle 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Littérature', room: 'Labo B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Physique', room: 'Amphithéâtre', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'emploi-du-temps.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'conflit',
    overlapPlural: 'conflits',
    detectedLabel: 'détecté(s)',
    classEditorAriaLabel: 'Éditeur de cours',
    weeklyScheduleAriaLabel: 'Emploi du temps hebdomadaire',
    faqTitle: 'Foire Aux Questions',
    bibliographyTitle: 'Références & Normes de Calendrier',
  },
  seo: [
    { type: 'title', text: 'Comment concevoir un emploi du temps académique hebdomadaire efficace', level: 2 },
    { type: 'paragraph', html: 'Un bon emploi du temps fait plus que lister des cours. Il montre les jours surchargés, les heures creuses inutiles et signale si deux sessions requises se chevauchent. Un outil d\'optimisation visuel rend ces problèmes évidents avant qu\'ils ne se traduisent par des cours manqués ou des impossibilités d\'inscription.' },
    { type: 'summary', title: 'Ce qu\'il faut vérifier avant de valider votre planning', items: [
      'Aucun cours obligatoire ne chevauche un autre le même jour.',
      'Le samedi et le dimanche sont activés si votre établissement propose des cours le week-end.',
      'Les TP, TD et cours magistraux possèdent des couleurs distinctes pour une lecture rapide.',
      'Les matières difficiles ne sont pas enchaînées sans temps de récupération.',
      'L\'emploi du temps final peut être exporté vers votre application de calendrier habituelle.'
    ] },
    { type: 'title', text: 'Pourquoi la grille visuelle surpasse les listes simples', level: 3 },
    { type: 'paragraph', html: 'Les listes de cours textuelles masquent la pression du temps car elles isolent chaque cours de son contexte hebdomadaire. Une grille révèle immédiatement la densité de vos journées. Vous voyez si votre lundi comporte trop d\'heures de cours, si un cours magistral bloque un TP, ou si des trajets d\'une salle à l\'autre posent problème.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Liste de cours', description: 'Utile pour les codes d\'inscription, insuffisante pour évaluer la charge hebdomadaire.' },
      { title: 'Grille hebdomadaire', description: 'Idéale pour comprendre le rythme, les pauses et repérer les conflits d\'un coup d\'œil.', highlight: true },
      { title: 'Calendrier habituel seul', description: 'Pratique pour le quotidien, mais fastidieux pour tester plusieurs alternatives.' }
    ] },
    { type: 'title', text: 'Fonctionnement de la détection de chevauchements', level: 3 },
    { type: 'paragraph', html: 'Deux cours entrent en conflit s\'ils se déroulent le même jour et que leurs créneaux horaires se croisent. Par exemple, un cours de 10h à 12h chevauche un séminaire de 11h à 13h car ils occupent tous deux le créneau de 11h. L\'outil compare chaque cours à tous les autres et met en surbrillance les zones de collision.' },
    { type: 'table', headers: ['Cours A', 'Cours B', 'Résultat'], rows: [
      ['Lundi 09:00-11:00', 'Lundi 11:00-13:00', 'Aucun chevauchement car l\'un commence quand l\'autre finit.'],
      ['Mardi 10:00-12:00', 'Mardi 11:00-13:00', 'Chevauchement car les plages horaires s\'intersectent.'],
      ['Mercredi 09:00-11:00', 'Jeudi 09:00-11:00', 'Aucun chevauchement car les jours sont différents.']
    ] },
    { type: 'title', text: 'L\'usage des couleurs comme signal de planification', level: 3 },
    { type: 'paragraph', html: 'La couleur n\'est pas seulement décorative. Elle peut indiquer le type de cours, sa difficulté, sa localisation géographique ou l\'énergie qu\'il demande. Une palette cohérente simplifie la lecture de votre emploi du temps sous pression, notamment lors de la phase d\'inscription.' },
    { type: 'tip', html: '<strong>Gardez une logique de couleur claire.</strong> Par exemple, utilisez une famille de couleurs pour les laboratoires, une autre pour les cours magistraux, et un code d\'alerte pour les cours nécessitant de longs trajets.' },
    { type: 'title', text: 'Exportation vers vos applications de calendrier', level: 3 },
    { type: 'paragraph', html: 'Le format .ics est le standard international pour l\'échange de calendriers. Exporter votre emploi du temps universitaire vous permet d\'intégrer vos cours dans Google Calendar, Apple Calendar, Outlook, etc. Une fois importés, vous pouvez y ajouter des rappels, vos temps de transport ou des créneaux d\'étude personnelle.' },
    { type: 'diagnostic', variant: 'warning', title: 'Avant d\'importer', html: 'Vérifiez que la date de début correspond bien à la semaine souhaitée, contrôlez les fuseaux horaires dans votre application cible, et assurez-vous que l\'importation ne crée pas de doublons.' },
    { type: 'title', text: 'Méthodologie pratique pour l\'inscription aux cours', level: 3 },
    { type: 'list', items: [
      'Ajoutez d\'abord les cours obligatoires et résolvez leurs conflits avant de planifier les options.',
      'Activez le samedi ou le dimanche si votre école propose des enseignements le week-end.',
      'Attribuez des couleurs pour différencier cours, TD, TP et travail personnel.',
      'Faites glisser les blocs d\'un jour à l\'autre pour tester rapidement des alternatives.',
      'Laissez des plages de pause pour les repas, les transports et les révisions.',
      'N\'exportez votre planning que lorsque le panneau de conflit est entièrement vert.'
    ] },
    { type: 'message', title: 'Planifier est un processus itératif', html: 'Considérez votre premier jet comme un brouillon. Le meilleur emploi du temps se dessine après avoir testé plusieurs combinaisons et évalué si le rythme de vie hebdomadaire reste tenable.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
