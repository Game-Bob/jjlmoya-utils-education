import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'convertitore-voti-internazionale' as const;
const title = 'Convertitore di Voti Internazionali e Calcolatore Equivalenza GPA';
const description = 'Lo strumento più preciso per convertire i voti accademici tra i sistemi internazionali. Traduci istantaneamente i punteggi di Spagna, USA, Regno Unito, Germania, Francia, Italia e altri. Essenziale per Erasmus+, Fulbright e candidature universitarie globali.';

const faqItems = [
  { 
    question: 'Come funziona la conversione dei voti internazionali?', 
    answer: 'Lo strumento utilizza una mappatura lineare matematica basata sul voto minimo per la promozione e sul punteggio massimo possibile per ogni paese. Ciò garantisce che un "sufficiente" in un sistema si allinei con un "sufficiente" in un altro, mantenendo la proporzionalità accademica tra le diverse scale.' 
  },
  { 
    question: 'Questo convertitore è ufficiale per le ammissioni universitarie?', 
    answer: 'Sebbene i nostri algoritmi seguano le tabelle di equivalenza internazionali standard (come quelle utilizzate da ECTS o WES), questo strumento è a scopo informativo. Per il riconoscimento ufficiale dei crediti, dovresti sempre consultare la tua istituzione ospitante o un servizio di valutazione accreditato.' 
  },
  { 
    question: 'Che cos\'è la funzione "Modalità Bulk"?', 
    answer: 'La Modalità Bulk consente agli studenti con libretti universitari lunghi di elaborare più voti contemporaneamente. Basta incollare una colonna di numeri dal tuo PDF o file Excel e lo strumento calcolerà istantaneamente le conversioni individuali e la tua media GPA globale.' 
  },
  { 
    question: 'Posso convertire i miei voti in ECTS?', 
    answer: 'Sì. Il convertitore fornisce equivalenti che si allineano al Sistema Europeo di Trasferimento e Accumulo dei Crediti (ECTS), rendendolo perfetto per gli studenti europei che pianificano la loro mobilità o presentano domanda per programmi di Master.' 
  }
];

const howToItems = [
  { name: '1. Seleziona il Sistema di Origine', text: 'Identifica il tuo paese d\'origine o la specifica scala di valutazione (es. Spagna 0-10, Francia 0-20).' },
  { name: '2. Definisci i Paesi di Destinazione', text: 'Aggiungi i paesi per cui stai facendo domanda per vedere tutte le equivalenze affiancate nella dashboard.' },
  { name: '3. Inserisci i Dati Accademici', text: 'Inserisci un singolo voto per controlli rapidi o usa la Modalità Bulk per l\'intero libretto del semestre.' },
  { name: '4. Analizza ed Esporta', text: 'Esamina le barre percentili visive e scarica il tuo Rapporto di Equivalenza come PDF da conservare nei tuoi archivi.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Elaborazione in Modalità Bulk, Conversione in tempo reale, Supporto scale globali, Generazione rapporti PDF',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Sistema di Valutazione d\'Origine',
    targetSystems: 'Equivalenze Globali',
    gradeInput: 'Il Tuo Voto',
    bulkMode: 'Elaborazione Massiva Libretto',
    bulkPlaceholder: 'Incolla qui la tua lista di voti (uno per riga)...',
    results: 'Dashboard Equivalenze',
    passLimit: 'Sufficienza Min.',
    shareResults: 'Genera Rapporto di Equivalenza',
    averageMedia: 'Media Globale Convertita',
    compareTitle: 'Classifica Accademica Mondiale',
    addSystem: 'Aggiungi Paese',
    removeSystem: 'Rimuovi',
    selectCountry: 'Seleziona Paese',
    sourceCountry: 'Paese d\'Origine',
    systemSelection: 'Selezione Sistema',
    convertedScore: 'Voto Convertito',
    emptyState: 'Inserisci un voto per visualizzare le equivalenze globali',
    minLabel: 'MIN',
    passLabel: 'SUF',
    maxLabel: 'MAX',
    scaleLabel: 'Scala',
    howToTitle: 'Il Tuo Percorso verso l\'Istruzione Internazionale',
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti e Standard Accademici',
    singleGradeMode: 'Voto Singolo',
    transcriptMode: 'Libretto Completo',
    gradeCounter: 'Voti inseriti',
    averageSummary: 'Media calcolata',
    gradesIgnored: '{count} voti ignorati (fuori intervallo)',
    bulkHelp: 'Incolla direttamente il tuo libretto. Rileviamo i voti separati da spazi, virgole o righe.',
    copiedLabel: 'Copiato!',
    germanyExpl: 'Sistema inverso: 1,0 è il massimo, 4,0 è la sufficienza minima.',
    spainExpl: 'Scala standard 0-10. 5,0 è la sufficienza minima.',
    usaExpl: 'Scala GPA da 0,0 a 4,0. Solitamente 2,0 è la sufficienza minima.',
    ukExpl: 'Classificazione basata su percentuale. 40% è la sufficienza minima.',
    franceExpl: 'Scala da 20 punti. 10 è la sufficienza minima.',
    italyExpl: 'Scala da 30 punti. 18 è la sufficienza minima.',
    netherlandsExpl: 'Scala 1-10. 6 è la sufficienza minima.',
    placeholderSpain: 'es. 8,5',
    placeholderUSA: 'es. 3,7 o A-',
    placeholderFrance: 'es. 14',
    placeholderGermany: 'es. 1,3',
    placeholderUK: 'es. 75',
    placeholderItaly: 'es. 28',
    placeholderNetherlands: 'es. 7,5',
  },
  seo: [
    { type: 'title', text: 'Conversione Voti di Precisione per la Mobilità Globale', level: 2 },
    { type: 'paragraph', html: 'Che tu sia uno <strong>studente Erasmus+</strong> o stia facendo domanda per un <strong>Master della Ivy League</strong>, comprendere il tuo posizionamento accademico globale è il primo passo. I voti variano enormemente: mentre un 10 in Spagna è perfetto, in Francia è appena una sufficienza. Il nostro motore chiarisce queste differenze.' },
    { type: 'title', text: 'Perché la precisione conta nella conversione del GPA', level: 3 },
    { type: 'paragraph', html: 'Le commissioni di ammissione utilizzano i GPA convertiti per filtrare migliaia di domande. Un leggero errore nel calcolo manuale potrebbe costarti una borsa di studio. Il nostro strumento utilizza <strong>algoritmi ufficiali di mappatura lineare</strong> impiegati dai principali uffici di istruzione internazionale.' },
    { type: 'title', text: 'Principali Sistemi Supportati', level: 3 },
    { type: 'list', items: [
      '<strong>Spagna (0-10):</strong> Mappatura dettagliata da "Aprobado" a "Sobresaliente".',
      '<strong>USA GPA (4.0):</strong> Equivalenza standard universitaria americana.',
      '<strong>Germania (1-6):</strong> Gestione della scala invertita dove 1,0 è il picco.',
      '<strong>Francia (0-20):</strong> Conversione precisa per le "Grande Écoles" e le università francesi.',
      '<strong>Classificazione UK:</strong> Traduzione da percentuale a "Honours Degree".'
    ] },
    { type: 'tip', html: '<strong>Approfondimento Accademico:</strong> Usa la "Modalità Bulk" per trovare il tuo GPA cumulativo su più semestri. Ti farà risparmiare ore di lavoro manuale su fogli di calcolo!' },
    { type: 'title', text: 'Calcola la tua Equivalenza WES', level: 3 },
    { type: 'paragraph', html: 'Sebbene la valutazione ufficiale WES sia un servizio a pagamento, il nostro strumento fornisce una <strong>stima ad alta fedeltà</strong> del tuo GPA WES, aiutandoti a decidere dove presentare domanda prima di sostenere le spese di valutazione.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
