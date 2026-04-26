import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow';
const description = 'Maîtrisez votre productivité avec une gestion du temps centrée sur le zen. Personnalisez vos cycles de travail et de pause, suivez les interruptions et visualisez vos schémas de concentration en temps réel.';

const faqItems = [
  { question: 'Qu\'est-ce que la Technique Pomodoro ?', answer: 'La Technique Pomodoro est une méthode de gestion du temps qui utilise des intervalles de travail focalisés (généralement 25 minutes) suivis de courtes pauses. Cet outil l\'étend avec des cycles personnalisables et des analyses détaillées.' },
  { question: 'Puis-je personnaliser les durées de travail/pause ?', answer: 'Oui ! Choisissez parmi trois préréglages (Graine : 25/5, Arbre : 50/10, Montagne : 90/15) ou ajustez les temps à la volée avec les boutons +5 et -5 minutes.' },
  { question: 'À quoi sert le suivi des interruptions ?', answer: 'Chaque fois que vous cliquez sur le bouton de distraction, l\'outil enregistre une interruption. Cela aide à calculer votre score de concentration et à identifier les schémas de votre concentration.' },
  { question: 'Comment est calculé le Score de Concentration ?', answer: 'Score de Concentration = ((Temps de Travail - Interruptions × 2) / Temps de Travail) × 100. Cela prend en compte le coût cognitif du changement de contexte.' },
  { question: 'Puis-je exporter mes données de session ?', answer: 'Oui. Vous pouvez copier le résumé de votre session au format Markdown (idéal pour Notion/Obsidian) ou partager un résumé visuel sur les réseaux sociaux.' },
];

const howToItems = [
  { name: 'Saisir votre tâche', text: 'Tapez ce sur quoi vous allez travailler. Cela aide à maintenir le contexte et l\'intention.' },
  { name: 'Choisir un cycle', text: 'Choisissez Graine (25/5) pour les tâches rapides, Arbre (50/10) pour le travail standard, ou Montagne (90/15) pour une concentration profonde.' },
  { name: 'Démarrer et se concentrer', text: 'Le minuteur commence. Cliquez sur l\'anneau pour mettre en pause. Utilisez +5/-5 pour ajuster si nécessaire. La barre de titre affiche le temps restant.' },
  { name: 'Suivre les interruptions', text: 'Vous êtes distrait ? Cliquez sur le bouton Alerte Distraction. L\'outil l\'enregistre pour calculer votre Score de Concentration.' },
  { name: 'Analyser votre récolte', text: 'Après votre session, consultez vos statistiques : Score de Concentration, ventilation des tâches et carte thermique mensuelle de votre productivité.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: 'Sur quoi allez-vous travailler ?',
    selectCycle: 'Choisissez votre cycle de concentration',
    startButton: 'Démarrer',
    seed: 'Graine',
    tree: 'Arbre',
    mountain: 'Montagne',
    timer: 'Minuteur',
    pauseButton: 'Pause',
    resumeButton: 'Reprendre',
    distractionButton: 'Alerte Distraction',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Concentration',
    breakTime: 'Pause',
    sessionComplete: 'Session Terminée',
    endSession: 'Terminer la Session',
    focusScore: 'Score de Concentration',
    totalTime: 'Temps Total',
    interruptions: 'Interruptions',
    taskBreakdown: 'Ventilation des Tâches',
    monthlyHeatmap: 'Activité Mensuelle',
    copyMarkdown: 'Copier Markdown',
    shareImage: 'Partager',
    wellnessMessage: 'Faites une pause, vous l\'avez méritée',
    sessionSummary: 'Résumé de la Session',
    newSession: 'Nouvelle Session',
    copied: 'Copié !',
    unnamedTask: 'Tâche sans nom',
    breakTimeNotification: 'C\'est l\'heure de la pause !',
    focusTimeNotification: 'C\'est l\'heure de se concentrer !',
    interruptionsLabel: 'Interruptions :',
    studySession: 'Session d\'Étude',
  },
  seo: [
    { type: 'title', text: 'Maîtrisez la Concentration avec Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'La productivité ne consiste pas à travailler plus dur — il s\'agit de travailler plus intelligemment. <strong>Pomodoro Flow</strong> combine la technique Pomodoro éprouvée avec un design zen et des analyses en temps réel pour vous aider à comprendre <em>comment</em> vous travaillez le mieux.' },
    { type: 'title', text: 'Pourquoi Pomodoro Fonctionne', level: 3 },
    { type: 'paragraph', html: 'Les humains ne sont pas faits pour des marathons d\'hyper-concentration de 8 heures. Nos cerveaux fonctionnent mieux par cycles de travail focalisé suivis de pauses réparatrices. La technique Pomodoro transforme cela en un rituel simple : travaillez intensément pendant 25 minutes, faites une pause de 5 minutes, recommencez.' },
    { type: 'paragraph', html: 'Mais chaque tâche est différente. C\'est pourquoi Pomodoro Flow propose trois cycles : <strong>Graine</strong> pour les tâches rapides (25/5), <strong>Arbre</strong> pour votre routine quotidienne (50/10), et <strong>Montagne</strong> pour les sessions de travail profond (90/15).' },
    { type: 'title', text: 'Le Vrai Pouvoir : Le Suivi des Interruptions', level: 3 },
    { type: 'paragraph', html: 'Vous travaillez pendant 50 minutes et pensez avoir assuré. Mais avez-vous été distrait 5 fois ? Chaque interruption vous coûte une taxe de changement de contexte. Pomodoro Flow suit cela avec un seul bouton (Alerte Distraction) et calcule votre <strong>Score de Concentration</strong> — une mesure réelle de votre concentration.' },
    { type: 'paragraph', html: 'Au fil du temps, vous verrez quelles tâches, moments de la journée ou environnements vous permettent d\'atteindre votre meilleure concentration. C\'est là que se fait votre travail le plus impactant.' },
    { type: 'title', text: 'Des Fonctionnalités qui ne vous Gênent Pas', level: 3 },
    { type: 'list', items: [
      'Design Zen-Tech : Mode sombre, glassmorphism et un minuteur centré qui devient la seule chose que vous voyez.',
      'Barre de Titre en Direct : L\'onglet de votre navigateur affiche le compte à rebours, pour que vous connaissiez le temps d\'un coup d\'œil.',
      'Timing Flexible : Ajustez les temps de travail/pause à la volée sans redémarrer.',
      'Export de Session : Copiez votre résumé en Markdown ou partagez une image sur les réseaux sociaux.',
      'Carte Thermique Mensuelle : Visualisez vos schémas de productivité. Quels sont vos jours de concentration maximale ?',
    ] },
    { type: 'title', text: 'La Psychologie de l\'"État de Flow"', level: 3 },
    { type: 'paragraph', html: 'Le psychologue Mihaly Csikszentmihalyi définit le <strong>flow</strong> comme l\'état où le défi rencontre la compétence, et où le temps disparaît. Pomodoro Flow élimine les distractions, fixe des limites de temps claires et vous donne un feedback immédiat — les trois conditions de l\'état de flow.' },
    { type: 'tip', html: '<strong>Conseil Pro :</strong> Quand vous êtes en flow, ne vous interrompez pas. Si le minuteur sonne mais que vous êtes en pleine réflexion, appuyez sur reprendre et continuez. La beauté du suivi des interruptions est que vous verrez la différence entre le chaos externe et votre propre élan.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
