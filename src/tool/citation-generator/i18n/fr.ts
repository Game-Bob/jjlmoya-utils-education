import type { ToolLocaleContent } from '../../../types';

const slug = 'generateur-citations-bibliographiques' as const;
const title = 'Générateur de Citations Bibliographiques' as const;
const description = 'Créez automatiquement des références aux formats APA, MLA et Vancouver avec sauvegarde persistante.' as const;
const faqTitle = 'Questions Fréquemment Posées' as const;
const bibliographyTitle = 'Bibliographie' as const;

const ui = {
    format: 'Format',
    book: 'Livre',
    website: 'Site web',
    article: 'Article',
    publicationYear: 'Année de publication',
    authors: 'Auteurs (Nom, Initiales)',
    title: 'Titre',
    publisher: 'Éditeur',
    locationUrl: 'Ville / URL',
    preview: 'Aperçu',
    saveToList: 'Ajouter à ma liste',
    mySavedCitations: 'Mes Citations Enregistrées',
    noSavedCitations: 'Vous n\'avez aucune citation enregistrée.',
    clickToCopy: 'Cliquez sur la citation pour la copier directement',
    apa: 'APA (7e édition)',
    mla: 'MLA (9e édition)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Générateur de Citations Bibliographiques: Maîtrisez APA, MLA et Vancouver', level: 2 },
    { type: 'paragraph', html: 'Citer correctement vos sources n\'est pas seulement une question d\'éthique académique; c\'est la base pour donner de la crédibilité à votre travail et éviter le plagiat. Notre outil vous permet de générer automatiquement des références aux formats les plus utilisés au monde.' },
    { type: 'title', text: 'Les Styles de Citation les Plus Importants', level: 3 },
    { type: 'paragraph', html: 'Selon votre domaine d\'études, vous devrez utiliser un format spécifique. Ce n\'est pas un caprice des professeurs; chaque style est conçu pour prioriser les informations les plus pertinentes pour chaque discipline.' },
    { type: 'title', text: 'APA (sciences sociales)', level: 4 },
    { type: 'paragraph', html: 'Créé par l\'<strong>American Psychological Association</strong>, il se concentre sur la date de publication pour fournir un contexte historique à la recherche. C\'est la norme en Psychologie, Éducation et Sociologie.' },
    { type: 'title', text: 'Vancouver (médecine)', level: 4 },
    { type: 'paragraph', html: 'C\'est un système numérique où les sources sont citées dans l\'ordre d\'apparition. C\'est le format universel en biomédecine et sciences de la santé, facilitant la lecture de textes avec plusieurs références.' },
    { type: 'title', text: 'Comment citer un livre étape par étape?', level: 3 },
    { type: 'paragraph', html: 'Bien que notre outil automatise cela, connaître les éléments de base vous aidera à identifier les informations que vous devez collecter de vos sources physiques ou numériques.' },
    { type: 'list', items: ['<strong>Auteurs:</strong> Nom de famille suivi de l\'initiale du prénom.', '<strong>Année:</strong> Année de publication entre parenthèses ou à la fin selon le style.', '<strong>Titre:</strong> Doit apparaître en italique pour les livres et les œuvres complètes.', '<strong>Éditeur:</strong> L\'entreprise responsable de la publication de l\'œuvre.', '<strong>URL:</strong> Pour les sources numériques, le lien direct ou le DOI pour localisation permanente.'] },
    { type: 'title', text: 'Différences Visuelles Entre les Formats', level: 3 },
    { type: 'table', headers: ['Élément', 'APA (7e)', 'MLA (9e)', 'Vancouver'], rows: [['Auteur', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Date', '(2024)', '2024.', '2024.'], ['Titre', 'En italique', 'Entre guillemets', 'Normal']] },
    { type: 'tip', html: 'Consultez toujours le guide spécifique de votre institution. Bien que l\'APA soit une norme mondiale, de nombreuses universités ont des variations locales mineures ou exigent l\'utilisation d\'une édition spécifique des normes.' },
    { type: 'title', text: 'Éviter le Plagiat Académique', level: 3 },
    { type: 'paragraph', html: 'Le plagiat n\'est pas toujours intentionnel. Cela se produit souvent par manque d\'attention lors de la prise de notes ou par ignorance de la façon de référencer une idée qui n\'est pas la vôtre. L\'utilisation d\'un générateur de citations comme celui-ci garantit que chaque auteur reçoit le crédit qu\'il mérite, tout en protégeant votre intégrité académique.' },
    { type: 'paragraph', html: 'N\'oubliez pas que même si vous paraphrasez une idée avec vos propres mots, vous devez inclure la citation correspondante dans le texte et sa référence dans la bibliographie finale.' },
];

const faq = [
    {
        question: 'Quels formats le générateur supporte-t-il?',
        answer: 'Actuellement, il supporte APA (7e édition), MLA (9e édition) et Vancouver, qui sont les formats les plus courants en sciences sociales, sciences humaines et santé.',
    },
    {
        question: 'Puis-je enregistrer mes citations?',
        answer: 'Oui, le générateur enregistre automatiquement votre historique dans le stockage local de votre navigateur pour que vous puissiez le consulter plus tard.',
    },
    {
        question: 'Quelle est la différence entre APA et Vancouver?',
        answer: 'APA utilise le système auteur-date (Perez, 2024), tandis que Vancouver utilise un système numérique dans l\'ordre d\'apparition dans le texte.',
    },
    {
        question: 'Le générateur de citations est-il gratuit?',
        answer: 'Complètement. C\'est un outil gratuit conçu pour aider les étudiants et professionnels à écrire leurs travaux académiques.',
    },
] as const;

const howTo = [
    {
        name: 'Choisissez le type de source',
        text: 'Sélectionnez si votre source est un livre, un site web ou un article de revue professionnelle.',
    },
    {
        name: 'Complétez les données',
        text: 'Entrez l\'auteur, le titre, l\'année et l\'éditeur ou l\'URL. Plus vous entrez de données, plus la citation sera précise.',
    },
    {
        name: 'Copier ou enregistrer',
        text: 'Copiez la citation directement en un clic ou appuyez sur "Ajouter à ma liste" pour l\'ajouter à votre historique persistant.',
    },
] as const;

const bibliography = [
    {
        name: 'Manuel de Style APA 7e Édition',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'Guide de Style MLA (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Directives Vancouver - ICJME',
        url: 'https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html',
    },
] as const;

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
} as const;

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item.name,
        text: item.text,
    })),
} as const;

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'EducationalApplication',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
} as const;

const schemas = [faqSchema, howToSchema, appSchema] as const;

export const content = {
    slug,
    title,
    description,
    faqTitle,
    bibliographyTitle,
    ui,
    seo,
    faq,
    howTo,
    bibliography,
    schemas,
} as const satisfies ToolLocaleContent;
