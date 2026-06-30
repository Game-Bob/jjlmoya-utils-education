import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'concepteur-matrice-rubrique' as const;
const title = 'Concepteur de Grille d\'Évaluation';
const description = 'Créez des grilles d\'évaluation pondérées et modifiables avec des niveaux de réussite, une validation en direct de la pondération à 100 %, un export CSV et une mise en page prête pour l\'impression.';

const faqItems = [
  { question: 'Qu\'est-ce qu\'une grille d\'évaluation ?', answer: 'Une grille d\'évaluation est un tableau qui place les critères en lignes et les niveaux de réussite en colonnes. Chaque cellule décrit le travail attendu pour ce niveau, rendant la notation plus transparente et cohérente.' },
  { question: 'Pourquoi la pondération des critères doit-elle totaliser 100 % ?', answer: 'Un total de 100 % rend le modèle d\'évaluation explicite. Si le total est inférieur ou supérieur à 100 %, les étudiants et les évaluateurs ne peuvent pas comprendre clairement la contribution de chaque critère à la note finale.' },
  { question: 'Les étudiants peuvent-ils utiliser cet outil ?', answer: 'Oui. Les étudiants peuvent l\'utiliser pour décoder les attentes des devoirs, planifier leurs brouillons ou concevoir des listes d\'évaluation par les pairs avant de soumettre leur travail.' },
  { question: 'Quelles sont les options d\'exportation disponibles ?', answer: 'L\'exportation au format CSV est idéale pour les tableurs et l\'intégration dans les systèmes LMS (Moodle, etc.). Le bouton d\'impression ouvre l\'interface d\'impression du navigateur pour sauvegarder en PDF.' },
];

const howToItems = [
  { name: 'Modifier les critères', text: 'Cliquez sur le nom d\'un critère et remplacez-le par la compétence, le résultat attendu ou l\'exigence à évaluer.' },
  { name: 'Définir les coefficients', text: 'Ajustez chaque pourcentage jusqu\'à ce que la barre de pondération indique une grille équilibrée à 100 %.' },
  { name: 'Décrire les niveaux de réussite', text: 'Cliquez sur chaque cellule de description et décrivez les preuves observables pour ce niveau de performance.' },
  { name: 'Structurer selon vos besoins', text: 'Utilisez les boutons d\'ajout pour insérer des critères ou des niveaux supplémentaires, et supprimez les lignes ou colonnes superflues.' },
  { name: 'Exporter ou imprimer', text: 'Téléchargez un fichier CSV pour tableur ou utilisez l\'impression pour générer une version PDF propre.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Critère',
    weightHeader: 'Poids',
    levelSectionLabel: 'Niveaux de réussite',
    levelBadgePrefix: 'N',
    addCriterion: 'Ajouter un critère',
    addLevel: 'Ajouter un niveau',
    removeCriterion: 'Supprimer le critère',
    removeLevel: 'Supprimer le niveau',
    exportCsv: 'Exporter CSV',
    printRubric: 'Imprimer / PDF',
    csvFilename: 'matrice-evaluation.csv',
    pdfDocumentTitle: 'Grille d\'évaluation',
    pdfImageAlt: 'Grille d\'évaluation',
    confirmDeleteTitle: 'Supprimer ce critère ?',
    confirmDeleteText: 'Cela supprimera le critère ainsi que toutes les descriptions saisies pour ses niveaux de réussite.',
    cancelDelete: 'Annuler',
    confirmDelete: 'Supprimer le critère',
    totalWeight: 'Pondération totale',
    balanced: 'Équilibrée à exactement 100 %',
    under: 'Ajoutez des coefficients jusqu\'à atteindre 100 %',
    over: 'Réduisez les coefficients pour revenir à 100 %',
    emptyCell: 'Cliquez pour modifier',
    newCriterionTemplate: 'Critère {index}',
    newDescriptorTemplate: 'Description {index}.{level}',
    newLevelTemplate: 'Niveau {index}',
    defaultLevels: [
      { name: 'Excellent', score: 4 },
      { name: 'Compétence acquise', score: 3 },
      { name: 'En cours d\'acquisition', score: 2 },
      { name: 'Débutant', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Qualité de l\'argumentation',
        weight: 35,
        cells: [
          'Thèse claire avec un raisonnement nuancé',
          'Thèse claire avec un raisonnement adéquat',
          'Thèse présente mais irrégulière',
          'Thèse confuse ou absente',
        ],
      },
      {
        name: 'Utilisation des preuves',
        weight: 30,
        cells: [
          'Preuves précises et parfaitement intégrées',
          'Preuves soutenant la plupart des affirmations',
          'Preuves générales ou vaguement reliées',
          'Preuves absentes ou inexactes',
        ],
      },
      {
        name: 'Organisation',
        weight: 20,
        cells: [
          'La structure guide le lecteur avec fluidité',
          'La structure est logique',
          'La structure présente des lacunes ou des répétitions',
          'La structure est difficile à suivre',
        ],
      },
      {
        name: 'Style académique',
        weight: 15,
        cells: [
          'Style soigné et respect rigoureux des conventions',
          'Les erreurs mineures ne nuisent pas au sens',
          'Les erreurs fréquentes déconcentrent le lecteur',
          'Les erreurs rendent le sens confus',
        ],
      },
    ],
    faqTitle: 'Foire Aux Questions',
    bibliographyTitle: 'Références & Ressources académiques',
  },
  seo: [
    { type: 'title', text: 'Concevoir des grilles d\'évaluation utiles aux étudiants', level: 2 },
    { type: 'paragraph', html: 'Une grille d\'évaluation de qualité est bien plus qu\'une feuille de notation. C\'est une carte partagée des attentes. Les étudiants s\'y réfèrent pour comprendre les critères d\'excellence avant de rendre leur devoir, les enseignants l\'utilisent pour noter avec constance, et les correcteurs s\'appuient dessus pour formuler des retours précis. Ce concepteur rend la structure visible: les critères, coefficients, niveaux et descriptions sont réunis au sein d\'une même matrice éditable.' },
    { type: 'diagnostic', variant: 'warning', title: 'Quand réviser une grille d\'évaluation', html: '<ul><li>Plusieurs critères se chevauchent au point qu\'une même erreur est pénalisée plusieurs fois.</li><li>La somme des coefficients ne fait pas 100 %, rendant la note finale difficile à interpréter.</li><li>Les descriptions utilisent des adjectifs flous comme bon, faible ou excellent sans critères observables.</li><li>Il y a trop de niveaux pour que l\'évaluation reste fiable et discernable.</li></ul>' },
    { type: 'title', text: 'Choisir ses critères et coefficients', level: 3 },
    { type: 'table', headers: ['Élément de la grille', 'Bonne pratique', 'Erreur fréquente'], rows: [['Critères', 'Évaluer des compétences distinctes comme l\'argumentation, les preuves, la méthode, la rigueur ou la présentation.', 'Mélanger plusieurs compétences sur une même ligne brouille le retour d\'information.'], ['Coefficients', 'Faire correspondre le poids à la priorité d\'apprentissage et aux objectifs du devoir.', 'Attribuer le même poids à toutes les lignes même si certains objectifs comptent davantage.'], ['Niveaux', 'Limiter à 3 ou 5 niveaux distincts et faciles à évaluer.', 'Multiplier les niveaux avec d\'infimes nuances de vocabulaire.'], ['Descriptions', 'Décrire des faits ou éléments observables dans le travail de l\'étudiant.', 'Utiliser des jugements de valeur sans donner de piste concrète d\'amélioration.']] },
    { type: 'comparative', title: 'Grille analytique vs grille holistique', columns: 2, items: [{ title: 'Grille analytique', description: 'Sépare les performances en critères et coefficients distincts. Idéale pour des retours ciblés ou pour harmoniser la correction entre plusieurs enseignants.', highlight: true, points: ['Notation transparente', 'Retour d\'information précis', 'Parfait pour les devoirs complexes'] }, { title: 'Grille holistique', description: 'Propose une évaluation globale d\'un seul bloc. Plus rapide à appliquer, mais moins diagnostique pour la révision ou l\'évaluation par les pairs.', points: ['Correction rapide', 'Pratique pour un contrôle rapide', 'Retour d\'information moins détaillé'] }] },
    { type: 'tip', html: '<strong>Rédigez les descriptions à partir d\'éléments observables, pas d\'adjectifs.</strong> Au lieu de "excellente analyse", écrivez ce qu\'une excellente analyse accomplit: relie les preuves à la thèse principale, identifie les limites et justifie le choix des sources.' },
    { type: 'title', text: 'Comment valider une grille à coefficients', level: 3 },
    { type: 'paragraph', html: 'Les coefficients traduisent vos priorités d\'enseignement. Un critère pesant pour 40 % orientera le travail de l\'étudiant différemment d\'un critère valant 10 %. La validation de cet outil exige que la somme des coefficients fasse exactement 100 %. En dessous de 100 %, une partie de la note n\'est pas définie. Au-dessus de 100 %, l\'évaluation attribue trop de points, générant de la confusion.' },
    { type: 'summary', title: 'Méthode pratique de conception', items: ['Partez des objectifs d\'apprentissage avant de rédiger les lignes.', 'Limitez la matrice aux seuls critères qui impacteront réellement les retours.', 'Rédigez les descriptions dans un langage clair et observable.', 'Vérifiez la pondération à 100 % avant de partager la grille.', 'Exportez en CSV pour une utilisation sur tableur ou dans votre LMS.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
