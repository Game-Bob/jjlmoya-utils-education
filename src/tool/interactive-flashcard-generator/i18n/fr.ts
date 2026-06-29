import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = 'Générateur de Flashcards Interactif & Deck d\'Étude';
const description = 'Optimisez votre apprentissage grâce au rappel actif et à la répétition espacée. Créez des cartes personnalisées, étudiez avec des retournements 3D, notez la difficulté et exportez/importez vos decks.';

const faqItems = [
  { question: 'Qu\'est-ce que le rappel actif ?', answer: 'Le rappel actif est un principe d\'apprentissage qui consiste à tester votre mémoire en récupérant activement les informations, plutôt qu\'en relisant passivement vos notes.' },
  { question: 'Comment fonctionne la répétition espacée ?', answer: 'La répétition espacée consiste à réviser les cartes difficiles plus fréquemment et les cartes faciles moins fréquemment, avec des intervalles de temps croissants pour consolider la rétention.' },
  { question: 'Comment sauvegarder mes flashcards personnalisées ?', answer: 'Vous pouvez exporter votre deck sous forme de fichier JSON. Pour reprendre vos révisions plus tard, cliquez simplement sur le bouton d\'importation et chargez ce fichier.' },
  { question: 'À quoi servent les scores Facile, Moyen et Difficile ?', answer: 'Ils vous aident à catégoriser votre niveau de rappel. Dans un système Leitner, les cartes marquées comme Difficile sont révisées plus souvent pour renforcer les connexions neuronales.' },
];

const howToItems = [
  { name: 'Créer une carte', text: 'Saisissez la question ou le concept dans le champ Recto (Question) et la réponse ou l\'explication dans le champ Verso (Réponse), puis cliquez sur Ajouter une carte.' },
  { name: 'Réviser le deck', text: 'Cliquez sur n\'importe quelle carte dans le visualiseur pour la retourner et révéler la réponse.' },
  { name: 'Évaluer votre mémoire', text: 'Évaluez la facilité avec laquelle vous avez retrouvé la réponse à l\'aide des boutons Facile, Moyen ou Difficile.' },
  { name: 'Sauvegarder votre session', text: 'Utilisez le bouton d\'exportation pour télécharger votre deck personnalisé afin de pouvoir le recharger plus tard.' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: 'Créateur de Flashcards',
    questionLabel: 'Recto (Question)',
    answerLabel: 'Verso (Réponse)',
    addCard: 'Ajouter une carte',
    questionPlaceholder: 'ex., Quelle est la capitale de la France ?',
    answerPlaceholder: 'ex., Paris',
    reviewMode: 'Session d\'Étude',
    cardIndex: 'Carte',
    flipCard: 'Cliquer pour retourner',
    nextCard: 'Suivant',
    prevCard: 'Précédent',
    easy: 'Facile',
    medium: 'Moyen',
    hard: 'Difficile',
    resetSession: 'Réinitialiser le progrès',
    importExport: 'Gestion du Deck',
    importDeck: 'Importer JSON',
    exportDeck: 'Exporter JSON',
    exportSelected: 'Exporter la sélection',
    exportAll: 'Exporter tout',
    emptyDeckWarning: 'Votre deck est vide. Créez une carte ou importez un deck pour commencer à étudier.',
    sampleQuestion1: 'Qu\'est-ce que le rappel actif ?',
    sampleAnswer1: 'Une technique d\'apprentissage qui consiste à stimuler activement la récupération de la mémoire pendant le processus d\'apprentissage.',
    sampleQuestion2: 'Qui a formulé l\'hypothèse de la courbe de l\'oubli ?',
    sampleAnswer2: 'Hermann Ebbinghaus, qui a étudié la nature exponentielle de l\'oubli d\'informations au fil du temps.',
    aiPromptGenerator: 'Assistant Flashcards IA',
    aiTopicsLabel: 'Entrez vos sujets d\'examen ou notes',
    aiTopicsPlaceholder: 'ex., Examen de maths couvrant les dérivées, intégrales et limites...',
    generatePromptBtn: 'Générer le Prompt IA',
    aiPromptOutputLabel: 'Copiez ce prompt dans ChatGPT/Gemini',
    copyPromptBtn: 'Copier dans le presse-papiers',
    selectAll: 'Tout sélectionner',
    deleteCategory: 'Supprimer la catégorie',
    deleteConfirmMsg: 'Êtes-vous sûr de vouloir supprimer cette catégorie et toutes ses cartes ?',
    cancel: 'Annuler',
    delete: 'Supprimer',
    pasteJsonTitle: 'Coller le JSON des Flashcards',
    pasteJsonPlaceholder: 'Collez le JSON généré par l\'IA ici...',
    importBtn: 'Importer',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Optimisez votre stratégie d\'étude avec le rappel actif et la répétition espacée', level: 2 },
    { type: 'paragraph', html: 'Les flashcards sont largement reconnues comme l\'un des outils les plus efficaces pour la mémorisation et la rétention à long terme. En combinant la récupération active avec une évaluation structurée, vous pouvez cibler vos lacunes et réviser de manière optimale.' },
    { type: 'title', text: 'Rappel actif vs. Apprentissage passif', level: 3 },
    { type: 'paragraph', html: 'De nombreux étudiants se limitent à relire leurs cours ou surligner des textes. Cependant, la science cognitive démontre que la véritable mémorisation s\'effectue lorsque le cerveau fait l\'effort de récupérer l\'information.' },
    { type: 'table', headers: ['Méthode d\'Étude', 'Engagement Cognitif', 'Taux de Rétention', 'Idéal pour'], rows: [
      ['Flashcards Interactives', 'Élevé (Rappel Actif)', 'Excellent', 'Vocabulaire, formules, concepts clés, dates.'],
      ['Résumer le cours', 'Moyen (Synthèse)', 'Modéré', 'Compréhension globale des concepts et arguments.'],
      ['Relire ses notes', 'Faible (Révision Passive)', 'Médiocre', 'Premier contact avec de nouvelles matières.'],
    ] },
    { type: 'title', text: 'Avantages et limites de l\'apprentissage par flashcards', level: 3 },
    { type: 'proscons', title: 'Comparatif des bénéfices et limitations', items: [
      { pro: 'Force la récupération mentale active plutôt que la simple reconnaissance.', con: 'Peut être long à créer initialement.' },
      { pro: 'Met en évidence immédiatement les lacunes de connaissances.', con: 'Moins adapté pour la compréhension de théories extrêmement complexes.' },
      { pro: 'Très flexible et personnalisable pour tout sujet d\'examen.', con: 'Nécessite de la régularité pour bénéficier de la répétition espacée.' }
    ] },
    { type: 'title', text: 'Création de flashcards par Intelligence Artificielle', level: 3 },
    { type: 'paragraph', html: 'Créer manuellement vos decks peut être laborieux. Notre <strong>Assistant Flashcards IA</strong> vous permet de convertir instantanément vos notes de cours en paquets prêts à être importés. Saisissez vos sujets, générez le prompt et utilisez-le sur le modèle d\'IA de votre choix (ChatGPT, Gemini, Claude) pour recevoir la structure JSON adéquate.' },
    { type: 'title', text: 'Partage collaboratif : Exportation sélective et fusion', level: 3 },
    { type: 'paragraph', html: 'Réviser en groupe permet de diviser la charge de travail. Notre gestionnaire vous permet de n\'exporter que certaines catégories. Lors de l\'importation par un camarade, le système <strong>fusionne</strong> dynamiquement les nouvelles cartes sans écraser ses données existantes, protégeant ainsi son historique.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
