import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'calculateur-de-moyenne-coefficients';
const title = 'Calculateur de Moyenne & Coefficients';
const description = 'Arrête de te prendre la tête avec tes notes ! Calcule ta moyenne générale ou par matière en un clin d\'œil. Idéal pour le lycée (Bac) ou la fac.';

const faqItems = [
  { question: 'C\'est quoi exactement une moyenne pondérée ?', answer: 'C\'est une moyenne où chaque note ne compte pas de la même façon. Par exemple, un gros examen en fin d\'année peut avoir un coefficient 5, alors qu\'un petit test en classe n\'a qu\'un coefficient 1. Cette calculatrice fait le calcul pour toi.' },
  { question: 'Où trouver les coefficients de mes matières ?', answer: 'Généralement, ils sont indiqués sur ton carnet de bord, le site de ton école (Pronote, ENT) ou dans le descriptif de ton cursus (pour la fac).' },
  { question: 'Que faire si mes coefficients ne font pas 100% ?', answer: 'Pas de panique ! La calculatrice va faire une "projection". Elle calcule ta moyenne sur la base des notes que tu as déjà rentrées, comme si c\'était le total actuel.' },
  { question: 'Est-ce que ça marche pour le contrôle continu du Bac ?', answer: 'Absolument ! Tu peux entrer chaque matière avec son coefficient officiel pour voir où tu en es de ton diplôme avant même les épreuves finales.' },
];

const howToItems = [
  { name: 'Liste tes notes', text: 'Entre le nom de tes matières ou de tes DS (Devoirs Surveillés).' },
  { name: 'Indique tes résultats', text: 'Tape la note que tu as obtenue (sur 10, 20 ou peu importe).' },
  { name: 'Entre les coefficients', text: 'Ajoute l\'importance de chaque note en pourcentage ou en valeur relative.' },
  { name: 'Regarde le résultat', text: 'Ta moyenne se met à jour instantanément. Plus besoin de sortir la calculette !' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Des questions ?',
  bibliographyTitle: 'En savoir plus',
  ui: {
    addSubject: 'Ajouter une note',
    subjects: 'Notes & Coefficients',
    subjectName: 'Matière / Évaluation',
    grade: 'Note',
    weight: 'Coeff (%)',
    scale: 'Barème (ex: 10, 20, 4.0)',
    finalGrade: 'Ta Moyenne Actuelle',
    removeSubject: 'Supprimer',
    weightSum: 'Total des Coeffs',
    exampleSubject: 'Examen Final',
    newSubjectPlaceholder: 'ex: Partiel de Janvier',
  },
  seo: [
    { type: 'title', text: 'Comment calculer sa moyenne avec coefficients sans se tromper', level: 2 },
    { type: 'paragraph', html: 'Tu te demandes si tu vas avoir ton année ? On est tous passés par là. Comprendre comment fonctionne ta <strong>moyenne pondérée</strong> est essentiel pour ne plus stresser devant ses notes.' },
    { type: 'title', text: 'Pourquoi les coefficients sont tes meilleurs amis (ou pas)', level: 3 },
    { type: 'paragraph', html: 'Dans le système scolaire français, que ce soit au collège, au lycée ou à l\'université, chaque épreuve a son importance. Un 18/20 sur un petit exposé, c\'est cool, mais si l\'examen final coeff 10 est raté, la moyenne chute vite. C\'est ça, la magie (parfois cruelle) des coefficients.' },
    { type: 'paragraph', html: 'Que tu calcules tes points pour le <strong>Brevet</strong>, le <strong>Baccalauréat</strong> ou tes crédits <strong>ECTS</strong> à la fac, cette calculatrice est ton meilleur allié.' },
    { type: 'title', text: '3 étapes pour calculer ta moyenne', level: 3 },
    { type: 'list', items: ['Regarde le coefficient de chaque évaluation (ex: DM coeff 1, Partiel coeff 4).', 'Multiplie ta note par son coefficient.', 'Divise la somme totale par la somme des coefficients.'] },
    { type: 'title', text: 'Astuce : Joue au jeu du "Et si ?"', level: 3 },
    { type: 'paragraph', html: 'Utilise cet outil pour simuler tes futurs résultats. "Et si j\'ai 12 au prochain DS de maths ?" Visualiser l\'impact direct sur ta moyenne générale te permet de mieux cibler tes révisions là où ça compte vraiment.' },
    { type: 'tip', html: '<strong>Petit conseil :</strong> Si tes coefficients ne font pas encore 100%, pas de souci. L\'outil calcule automatiquement ta moyenne actuelle sur ce qui est déjà fait. C\'est parfait pour suivre ton évolution tout au long du semestre !' },
    { type: 'title', text: 'Moyenne Arithmétique vs Moyenne Coefficientée', level: 3 },
    { type: 'paragraph', html: 'La moyenne simple peut être trompeuse. Si tu as 20 sur un petit test (coeff 1) et 8 sur un gros examen (coeff 9), ta moyenne simple serait de 14. Mais ta <strong>vraie moyenne</strong> n\'est que de 9,2. C\'est pour ça qu\'il faut toujours prendre en compte le poids de chaque épreuve !' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    { name: 'Moyenne pondérée (Wikipedia)', url: 'https://fr.wikipedia.org/wiki/Moyenne_pond%C3%A9r%C3%A9e' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
