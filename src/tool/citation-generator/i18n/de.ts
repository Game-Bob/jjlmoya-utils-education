import type { ToolLocaleContent } from '../../../types';

const slug = 'zitiergenerator';
const title = 'Zitiergenerator' as const;
const description = 'Erstellen Sie automatische Referenzen im APA-, MLA- und Vancouver-Format mit dauerhafter Speicherung.' as const;
const faqTitle = 'Häufig gestellte Fragen' as const;
const bibliographyTitle = 'Bibliographie' as const;

const ui = {
    format: 'Format',
    book: 'Buch',
    website: 'Webseite',
    article: 'Artikel',
    publicationYear: 'Erscheinungsjahr',
    authors: 'Autoren (Nachname, Initialen)',
    title: 'Titel',
    publisher: 'Herausgeber',
    locationUrl: 'Ort / URL',
    preview: 'Vorschau',
    saveToList: 'In meiner Liste speichern',
    mySavedCitations: 'Meine gespeicherten Zitate',
    noSavedCitations: 'Sie haben keine gespeicherten Zitate.',
    clickToCopy: 'Klicken Sie auf das Zitat, um es direkt zu kopieren',
    apa: 'APA (7. Aufl.)',
    mla: 'MLA (9. Aufl.)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Zitiergenerator: Meistern Sie APA, MLA und Vancouver', level: 2 },
    { type: 'paragraph', html: 'Die korrekte Zitierung Ihrer Quellen ist nicht nur eine Frage der akademischen Ethik; sie ist die Grundlage dafür, Ihrer Arbeit Glaubwürdigkeit zu verleihen und Plagiate zu vermeiden. Unser Tool ermöglicht es Ihnen, automatische Referenzen in den weltweit am häufigsten verwendeten Formaten zu generieren.' },
    { type: 'title', text: 'Die wichtigsten Zitierstile', level: 3 },
    { type: 'paragraph', html: 'Abhängig von Ihrem Fachbereich müssen Sie ein bestimmtes Format verwenden. Das ist keine Laune von Professoren; jeder Stil ist darauf ausgelegt, die relevantesten Informationen für die jeweilige Disziplin zu priorisieren.' },
    { type: 'title', text: 'APA (Sozialwissenschaften)', level: 4 },
    { type: 'paragraph', html: 'Erstellt von der <strong>American Psychological Association</strong>, konzentriert es sich auf das Veröffentlichungsdatum, um Forschungsarbeiten einen historischen Kontext zu geben. Es ist der Standard in Psychologie, Pädagogik und Soziologie.' },
    { type: 'title', text: 'Vancouver (Medizin)', level: 4 },
    { type: 'paragraph', html: 'Es ist ein numerisches System, bei dem Quellen in der Reihenfolge ihres Erscheinens zitiert werden. Es ist das universelle Format in der Biomedizin und den Gesundheitswissenschaften und erleichtert das Lesen von Texten mit mehreren Referenzen.' },
    { type: 'title', text: 'Wie zitiert man ein Buch Schritt für Schritt?', level: 3 },
    { type: 'paragraph', html: 'Obwohl unser Tool dies automatisiert, hilft Ihnen die Kenntnis der Grundelemente dabei, die Informationen zu identifizieren, die Sie aus Ihren physischen oder digitalen Quellen sammeln müssen.' },
    { type: 'list', items: ['<strong>Autoren:</strong> Nachname gefolgt von der Initiale des Vornamens.', '<strong>Jahr:</strong> Erscheinungsjahr in Klammern oder am Ende, abhängig vom Stil.', '<strong>Titel:</strong> Sollte bei Büchern und vollständigen Werken kursiv erscheinen.', '<strong>Herausgeber:</strong> Das Unternehmen, das für die Veröffentlichung des Werks verantwortlich ist.', '<strong>URL:</strong> Bei digitalen Quellen der direkte Link oder DOI für dauerhaften Standort.'] },
    { type: 'title', text: 'Visuelle Unterschiede zwischen den Formaten', level: 3 },
    { type: 'table', headers: ['Element', 'APA (7.)', 'MLA (9.)', 'Vancouver'], rows: [['Autor', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Datum', '(2024)', '2024.', '2024.'], ['Titel', 'Kursiv', 'In Anführungszeichen', 'Normal']] },
    { type: 'tip', html: 'Konsultieren Sie immer den spezifischen Leitfaden Ihrer Institution. Obwohl APA ein globaler Standard ist, haben viele Universitäten kleine lokale Abweichungen oder verlangen die Verwendung einer bestimmten Ausgabe der Standards.' },
    { type: 'title', text: 'Akademische Plagiate vermeiden', level: 3 },
    { type: 'paragraph', html: 'Plagiate sind nicht immer beabsichtigt. Sie entstehen oft durch Unachtsamkeit beim Notieren oder Unkenntnis darüber, wie man eine Idee referenziert, die nicht die eigene ist. Die Verwendung eines Zitiergenerators wie diesem stellt sicher, dass jeder Autor die Anerkennung erhält, die er verdient, während Ihre akademische Integrität gewahrt bleibt.' },
    { type: 'paragraph', html: 'Denken Sie daran: Auch wenn Sie eine Idee in Ihren eigenen Worten paraphrasieren, müssen Sie das entsprechende Zitat im Text und die Referenz in der abschließenden Bibliographie angeben.' },
];

const faq = [
    {
        question: 'Welche Formate unterstützt der Generator?',
        answer: 'Derzeit unterstützt er APA (7. Auflage), MLA (9. Auflage) und Vancouver, die gängigsten Formate in den Sozial-, Geistes- und Gesundheitswissenschaften.',
    },
    {
        question: 'Kann ich meine Zitate speichern?',
        answer: 'Ja, der Generator speichert Ihren Verlauf automatisch im lokalen Speicher Ihres Browsers, sodass Sie ihn später wieder aufrufen können.',
    },
    {
        question: 'Was ist der Unterschied zwischen APA und Vancouver?',
        answer: 'APA verwendet das Autor-Datum-System (Perez, 2024), während Vancouver ein numerisches System in der Reihenfolge des Erscheinens im Text verwendet.',
    },
    {
        question: 'Ist der Zitiergenerator kostenlos?',
        answer: 'Vollständig. Es ist ein kostenloses Tool, das Studenten und Fachleuten beim Verfassen ihrer akademischen Arbeiten helfen soll.',
    },
] as const;

const howTo = [
    {
        name: 'Quellentyp wählen',
        text: 'Wählen Sie aus, ob Ihre Quelle ein Buch, eine Webseite oder ein Fachzeitschriftenartikel ist.',
    },
    {
        name: 'Daten vervollständigen',
        text: 'Geben Sie Autor, Titel, Jahr und Herausgeber oder URL ein. Je mehr Daten Sie eingeben, desto genauer ist das Zitat.',
    },
    {
        name: 'Kopieren oder speichern',
        text: 'Kopieren Sie das Zitat mit einem Klick direkt oder drücken Sie auf "In meiner Liste speichern", um es Ihrem dauerhaften Verlauf hinzuzufügen.',
    },
] as const;

const bibliography = [
    {
        name: 'APA Style Manual 7. Auflage',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'MLA Style Guide (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Vancouver-Richtlinien - ICJME',
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
