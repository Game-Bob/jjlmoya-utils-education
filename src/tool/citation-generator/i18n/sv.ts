import type { ToolLocaleContent } from '../../../types';

const slug = 'citeringsgenerator';
const title = 'Citeringsgenerator' as const;
const description = 'Skapa automatiska referenser i formaten APA, MLA och Vancouver med permanent lagring.' as const;
const faqTitle = 'Vanliga frågor' as const;
const bibliographyTitle = 'Bibliografi' as const;

const ui = {
    format: 'Format',
    book: 'Bok',
    website: 'Webbplats',
    article: 'Artikel',
    publicationYear: 'Publiceringsår',
    authors: 'Författare (Efternamn, Initialer)',
    title: 'Titel',
    publisher: 'Förlag',
    locationUrl: 'Plats / URL',
    preview: 'Förhandsgranskning',
    saveToList: 'Spara till min lista',
    mySavedCitations: 'Mina sparade citeringar',
    noSavedCitations: 'Du har inga sparade citeringar.',
    clickToCopy: 'Klicka på citeringen för att kopiera den direkt',
    apa: 'APA (7:e uppl.)',
    mla: 'MLA (9:e uppl.)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Citeringsgenerator: Bemästra APA, MLA och Vancouver', level: 2 },
    { type: 'paragraph', html: 'Att citera dina källor korrekt är inte bara en fråga om akademisk etik; det är grunden för att ge ditt arbete trovärdighet och undvika plagiat. Vårt verktyg låter dig generera automatiska referenser i de mest använda formaten i världen.' },
    { type: 'title', text: 'De viktigaste citeringsstilarna', level: 3 },
    { type: 'paragraph', html: 'Beroende på ditt studieområde kommer du att behöva använda ett specifikt format. Det är inte ett infall från professorer; varje stil är utformad för att prioritera den mest relevanta informationen för varje disciplin.' },
    { type: 'title', text: 'APA (samhällsvetenskap)', level: 4 },
    { type: 'paragraph', html: 'Skapad av <strong>American Psychological Association</strong>, den fokuserar på publiceringsdatum för att ge historisk kontext till forskning. Det är standard inom psykologi, pedagogik och sociologi.' },
    { type: 'title', text: 'Vancouver (medicin)', level: 4 },
    { type: 'paragraph', html: 'Det är ett numeriskt system där källor citeras i den ordning de förekommer. Det är det universella formatet inom biomedicin och hälsovetenskap, vilket underlättar läsning av texter med flera referenser.' },
    { type: 'title', text: 'Hur citerar man en bok steg för steg?', level: 3 },
    { type: 'paragraph', html: 'Även om vårt verktyg automatiserar detta, kommer kunskap om grundelementen att hjälpa dig att identifiera vilken information du behöver samla in från dina fysiska eller digitala källor.' },
    { type: 'list', items: ['<strong>Författare:</strong> Efternamn följt av förnamnets initial.', '<strong>År:</strong> Publiceringsår inom parentes eller i slutet beroende på stil.', '<strong>Titel:</strong> Ska visas i kursiv stil för böcker och kompletta verk.', '<strong>Förlag:</strong> Företaget som ansvarar för att publicera verket.', '<strong>URL:</strong> För digitala källor, direktlänken eller DOI för permanent plats.'] },
    { type: 'title', text: 'Visuella skillnader mellan format', level: 3 },
    { type: 'table', headers: ['Element', 'APA (7:e)', 'MLA (9:e)', 'Vancouver'], rows: [['Författare', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Datum', '(2024)', '2024.', '2024.'], ['Titel', 'I kursiv stil', 'Inom citattecken', 'Normal']] },
    { type: 'tip', html: 'Konsultera alltid din institutions specifika guide. Även om APA är en global standard, har många universitet små lokala variationer eller kräver användning av en specifik upplaga av standarderna.' },
    { type: 'title', text: 'Undvika akademiskt plagiat', level: 3 },
    { type: 'paragraph', html: 'Plagiat är inte alltid avsiktligt. Det uppstår ofta på grund av slarv vid anteckningstagande eller att man inte vet hur man refererar till en idé som inte är ens egen. Att använda en citeringsgenerator som denna säkerställer att varje författare får det erkännande de förtjänar, samtidigt som din akademiska integritet skyddas.' },
    { type: 'paragraph', html: 'Kom ihåg att även om du parafraserar en idé med dina egna ord, måste du inkludera motsvarande citering i texten och dess referens i den slutliga bibliografin.' },
];

const faq = [
    {
        question: 'Vilka format stöder generatorn?',
        answer: 'För närvarande stöder den APA (7:e upplagan), MLA (9:e upplagan) och Vancouver, som är de vanligaste formaten inom samhällsvetenskap, humaniora och hälsa.',
    },
    {
        question: 'Kan jag spara mina citeringar?',
        answer: 'Ja, generatorn sparar automatiskt din historik i din webbläsares lokala lagring så att du kan konsultera den senare.',
    },
    {
        question: 'Vad är skillnaden mellan APA och Vancouver?',
        answer: 'APA använder systemet författare-datum (Perez, 2024), medan Vancouver använder ett numeriskt system i den ordning de förekommer i texten.',
    },
    {
        question: 'Är citeringsgeneratorn gratis?',
        answer: 'Helt och hållet. Det är ett gratis verktyg utformat för att hjälpa studenter och yrkesverksamma att skriva sina akademiska arbeten.',
    },
] as const;

const howTo = [
    {
        name: 'Välj källtyp',
        text: 'Välj om din källa är en bok, webbplats eller en professionell tidskriftsartikel.',
    },
    {
        name: 'Fyll i data',
        text: 'Ange författare, titel, år och förlag eller URL. Ju mer data du anger, desto mer exakt blir citeringen.',
    },
    {
        name: 'Kopiera eller spara',
        text: 'Kopiera citeringen direkt med ett klick eller tryck på "Spara till min lista" för att lägga till den i din permanenta historik.',
    },
] as const;

const bibliography = [
    {
        name: 'APA Style Manual 7:e upplagan',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'MLA Style Guide (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Vancouver-riktlinjer - ICJME',
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
