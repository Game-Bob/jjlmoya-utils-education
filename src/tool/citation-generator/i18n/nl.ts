import type { ToolLocaleContent } from '../../../types';

const slug = 'citatiegenerator';
const title = 'Citatiegenerator' as const;
const description = 'Maak automatische bronvermeldingen in APA-, MLA- en Vancouver-formaten met permanente opslag.' as const;
const faqTitle = 'Veelgestelde Vragen' as const;
const bibliographyTitle = 'Bibliografie' as const;

const ui = {
    format: 'Formaat',
    book: 'Boek',
    website: 'Website',
    article: 'Artikel',
    publicationYear: 'Jaar van publicatie',
    authors: 'Auteurs (Achternaam, Initialen)',
    title: 'Titel',
    publisher: 'Uitgever',
    locationUrl: 'Locatie / URL',
    preview: 'Voorbeeld',
    saveToList: 'Opslaan in mijn lijst',
    mySavedCitations: 'Mijn Opgeslagen Citaties',
    noSavedCitations: 'Je hebt geen opgeslagen citaties.',
    clickToCopy: 'Klik op de citatie om deze direct te kopiëren',
    apa: 'APA (7de druk)',
    mla: 'MLA (9de druk)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Citatiegenerator: Beheers APA, MLA en Vancouver', level: 2 },
    { type: 'paragraph', html: 'Het correct citeren van je bronnen is niet alleen een kwestie van academische ethiek; het is de basis voor het geven de geloofwaardigheid aan je werk en het vermijden van plagiaat. Onze tool stelt je in staat om automatische referenties te genereren in de meest gebruikte formaten ter wereld.' },
    { type: 'title', text: 'De Belangrijkste Citatiestijlen', level: 3 },
    { type: 'paragraph', html: 'Afhankelijk van je vakgebied moet je een specifiek formaat gebruiken. Dit is geen gril van professoren; elke stijl is ontworpen om de meest relevante informatie voor elke discipline prioriteit te geven.' },
    { type: 'title', text: 'APA (sociale wetenschappen)', level: 4 },
    { type: 'paragraph', html: 'Gemaakt door de <strong>American Psychological Association</strong>, richt het zich op de publicatiedatum om historische context te bieden aan onderzoek. Het is de standaard in de psychologie, pedagogiek en sociologie.' },
    { type: 'title', text: 'Vancouver (geneeskunde)', level: 4 },
    { type: 'paragraph', html: 'Het is een numeriek systeem waarbij bronnen worden geciteerd in volgorde van verschijnen. Het is het universele formaat in de biogeneeskunde en gezondheidswetenschappen, wat het lezen van teksten met meerdere referenties vergemakkelijkt.' },
    { type: 'title', text: 'Hoe citeer je een boek stap voor stap?', level: 3 },
    { type: 'paragraph', html: 'Hoewel onze tool dit automatiseert, helpt het kennen van debasiselementen je te identificeren welke informatie je moet verzamelen uit je fysieke of digitale bronnen.' },
    { type: 'list', items: ['<strong>Auteurs:</strong> Achternaam gevolgd door de initiaal van de voornaam.', '<strong>Jaar:</strong> Jaar van publicatie tussen haakjes of aan het einde, afhankelijk van de stijl.', '<strong>Titel:</strong> Moet cursief verschijnen voor boeken en volledige werken.', '<strong>Uitgever:</strong> Het bedrijf dat verantwoordelijk is voor het publiceren van het werk.', '<strong>URL:</strong> Voor digitale bronnen, de directe link of DOI voor een permanente locatie.'] },
    { type: 'title', text: 'Visuele Verschillen Tussen Formaten', level: 3 },
    { type: 'table', headers: ['Element', 'APA (7de)', 'MLA (9de)', 'Vancouver'], rows: [['Auteur', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Datum', '(2024)', '2024.', '2024.'], ['Titel', 'Cursief', 'Tussen aanhalingstekens', 'Normaal']] },
    { type: 'tip', html: 'Raadpleeg altijd de specifieke gids van je instelling. Hoewel APA een wereldwijde standaard is, hebben veel universiteiten kleine lokale variaties of vereisen ze het gebruik van een specifieke editie van de standaarden.' },
    { type: 'title', text: 'Academisch Plagiaat Vermijden', level: 3 },
    { type: 'paragraph', html: 'Plagiaat is niet altijd opzettelijk. Het komt vaak voor door onzorgvuldigheid bij het maken van aantekeningen of door niet te weten hoe je naar een idee moet verwijzen dat niet van jezelf is. Het gebruik van een citatiegenerator als deze zorgt ervoor dat elke auteur de eer krijgt die hij verdient, terwijl je academische integriteit wordt beschermd.' },
    { type: 'paragraph', html: 'Onthoud dat zelfs als je een idee in je eigen woorden parafraseert, je de bijbehorende citatie in de tekst en de referentie in de definitieve bibliografie moet opnemen.' },
];

const faq = [
    {
        question: 'Welke formaten ondersteunt de generator?',
        answer: 'Momenteel ondersteunt het APA (7de editie), MLA (9de editie) en Vancouver, de meest voorkomende formaten in de sociale wetenschappen, geesteswetenschappen en gezondheidszorg.',
    },
    {
        question: 'Kan ik mijn citaties opslaan?',
        answer: 'Ja, de generator slaat je geschiedenis automatisch op in de lokale opslag van je browser, zodat je deze later kunt raadplegen.',
    },
    {
        question: 'Wat is het verschil tussen APA en Vancouver?',
        answer: 'APA gebruikt het auteur-datum systeem (Perez, 2024), terwijl Vancouver een numeriek systeem gebruikt in volgorde van verschijnen in de tekst.',
    },
    {
        question: 'Is de citatiegenerator gratis?',
        answer: 'Volledig. Het is een gratis tool die is ontworpen om studenten en professionals te helpen bij het schrijven van hun academische werk.',
    },
] as const;

const howTo = [
    {
        name: 'Kies het brontype',
        text: 'Selecteer of je bron een boek, website of professioneel tijdschriftartikel is.',
    },
    {
        name: 'Vul de gegevens in',
        text: 'Voer de auteur, titel, jaar en uitgever of URL in. Hoe meer gegevens je invoert, hoe nauwkeuriger de citatie.',
    },
    {
        name: 'Kopiëren of opslaan',
        text: 'Kopieer de citatie direct met één klik of druk op "Opslaan in mijn lijst" om deze aan je permanente geschiedenis toe te voegen.',
    },
] as const;

const bibliography = [
    {
        name: 'APA Style Manual 7de editie',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'MLA Style Guide (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Vancouver-richtlijnen - ICJME',
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
