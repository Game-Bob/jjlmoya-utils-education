import type { ToolLocaleContent } from '../../../types';

const slug = 'generatore-di-citazioni';
const title = 'Generatore di Citazioni' as const;
const description = 'Crea riferimenti automatici nei formati APA, MLA e Vancouver con archiviazione persistente.' as const;
const faqTitle = 'Domande Frequenti' as const;
const bibliographyTitle = 'Bibliografia' as const;

const ui = {
    format: 'Formato',
    book: 'Libro',
    website: 'Sito Web',
    article: 'Articolo',
    publicationYear: 'Anno di pubblicazione',
    authors: 'Autori (Cognome, Iniziali)',
    title: 'Titolo',
    publisher: 'Editore',
    locationUrl: 'Luogo / URL',
    preview: 'Anteprima',
    saveToList: 'Salva nella mia lista',
    mySavedCitations: 'Le mie citazioni salvate',
    noSavedCitations: 'Non hai citazioni salvate.',
    clickToCopy: 'Clicca sulla citazione per copiarla direttamente',
    apa: 'APA (7ª ed.)',
    mla: 'MLA (9ª ed.)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Generatore di Citazioni: Padroneggia APA, MLA e Vancouver', level: 2 },
    { type: 'paragraph', html: 'Citare correttamente le fonti non è solo una questione di etica accademica; è la base per dare credibilità al proprio lavoro ed evitare il plagio. Il nostro strumento ti consente di generare riferimenti automatici nei formati più utilizzati al mondo.' },
    { type: 'title', text: 'Gli Stili di Citazione più Importanti', level: 3 },
    { type: 'paragraph', html: 'A seconda del tuo campo di studi, ti verrà richiesto di utilizzare un formato specifico. Non è un capriccio dei professori; ogni stile è progettato per dare priorità alle informazioni più rilevanti per ogni disciplina.' },
    { type: 'title', text: 'APA (scienze sociali)', level: 4 },
    { type: 'paragraph', html: 'Creato dall\'<strong>American Psychological Association</strong>, si concentra sulla data di pubblicazione per fornire un contesto storico alla ricerca. È lo standard in Psicologia, Educazione e Sociologia.' },
    { type: 'title', text: 'Vancouver (medicina)', level: 4 },
    { type: 'paragraph', html: 'È un sistema numerico in cui le fonti vengono citate in ordine di apparizione. È il formato universale nella biomedicina e nelle scienze della salute, facilitando la lettura di testi con riferimenti multipli.' },
    { type: 'title', text: 'Come citare un libro passo dopo passo?', level: 3 },
    { type: 'paragraph', html: 'Sebbene il nostro strumento automatizzi questo processo, conoscere gli elementi di base ti aiuterà a identificare quali informazioni devi raccogliere dalle tue fonti fisiche o digitali.' },
    { type: 'list', items: ['<strong>Autori:</strong> Cognome seguito dall\'iniziale del nome.', '<strong>Anno:</strong> Anno di pubblicazione tra parentesi o alla fine a seconda dello stile.', '<strong>Titolo:</strong> Deve apparire in corsivo per i libri e le opere complete.', '<strong>Editore:</strong> La società responsabile della pubblicazione dell\'opera.', '<strong>URL:</strong> Per le fonti digitali, il link diretto o DOI per la posizione permanente.'] },
    { type: 'title', text: 'Differenze Visive tra i Formati', level: 3 },
    { type: 'table', headers: ['Elemento', 'APA (7ª)', 'MLA (9ª)', 'Vancouver'], rows: [['Autore', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Data', '(2024)', '2024.', '2024.'], ['Titolo', 'In corsivo', 'Tra virgolette', 'Normale']] },
    { type: 'tip', html: 'Consulta sempre la guida specifica della tua istituzione. Sebbene l\'APA sia uno standard globale, molte università presentano piccole variazioni locali o richiedono l\'uso di una specifica edizione degli standard.' },
    { type: 'title', text: 'Evitare il Plagio Accademico', level: 3 },
    { type: 'paragraph', html: 'Il plagio non è sempre intenzionale. Spesso si verifica per disattenzione nel prendere appunti o per non sapere come fare riferimento a un\'idea che non è la propria. L\'uso di un generatore di citazioni come questo garantisce che ogni autore riceva il merito che merita, proteggendo al contempo la tua integrità accademica.' },
    { type: 'paragraph', html: 'Ricorda che anche se parafrasi un\'idea con parole tue, devi includere la citazione corrispondente nel testo e il suo riferimento nella bibliografia finale.' },
];

const faq = [
    {
        question: 'Quali formati supporta il generatore?',
        answer: 'Attualmente supporta APA (7ª edizione), MLA (9ª edizione) e Vancouver, che sono i formati più comuni nelle scienze sociali, umanistiche e della salute.',
    },
    {
        question: 'Posso salvare le mie citazioni?',
        answer: 'Sì, il generatore salva automaticamente la cronologia nella memoria locale del browser in modo da poterla consultare in seguito.',
    },
    {
        question: 'Qual è la differenza tra APA e Vancouver?',
        answer: 'L\'APA utilizza il sistema autore-data (Perez, 2024), mentre il Vancouver utilizza un sistema numerico in ordine di apparizione nel testo.',
    },
    {
        question: 'Il generatore di citazioni è gratuito?',
        answer: 'Completamente. È uno strumento gratuito progettato per aiutare studenti e professionisti nella stesura dei loro lavori accademici.',
    },
] as const;

const howTo = [
    {
        name: 'Scegli il tipo di fonte',
        text: 'Seleziona se la tua fonte è un libro, un sito web o un articolo di una rivista professionale.',
    },
    {
        name: 'Completa i dati',
        text: 'Inserisci autore, titolo, anno ed editore o URL. Più dati inserisci, più accurata sarà la citazione.',
    },
    {
        name: 'Copia o salva',
        text: 'Copia la citazione direttamente con un clic o premi "Salva nella mia lista" per aggiungerla alla tua cronologia persistente.',
    },
] as const;

const bibliography = [
    {
        name: 'Manuale di stile APA 7ª edizione',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'Guida allo stile MLA (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Linee guida Vancouver - ICJME',
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
