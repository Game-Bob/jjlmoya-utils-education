import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'analizzatore-carriera-accademica-gpa' as const;
const title = 'Lettore e Calcolatore di GPA del Libretto Universitario';
const description = 'Calcola all\'istante la tua media ponderata e il GPA cumulativo copiando e incollando il testo del tuo libretto universitario o storico esami. Funziona completamente offline.';

const faqItems = [
  {
    question: 'Come funziona l\'analisi automatica?',
    answer: 'L\'algoritmo analizza il testo incollato riga per riga, dividendolo in colonne in base a spazi, tabulazioni o punteggiatura. In seguito, valuta i dati per identificare automaticamente quale colonna contiene i nomi degli esami, i voti e i crediti.'
  },
  {
    question: 'I miei dati accademici sono al sicuro?',
    answer: 'Sì, del tutto. L\'analisi e il calcolo del GPA avvengono interamente all\'interno del tuo browser sul tuo dispositivo. Nessun dato viene inviato a server esterni, garantendo la totale riservatezza della tua carriera accademica.'
  },
  {
    question: 'Cosa succede se le colonne vengono associate in modo errato?',
    answer: 'Puoi correggerle facilmente. Ciascuna colonna della tabella rilevata include un menu a discesa nell\'intestazione dal quale puoi selezionare manualmente se rappresenta il Nome dell\'Esame, il Voto, i Crediti o se deve essere Ignorata.'
  },
  {
    question: 'Supporta i voti in lettere e diverse scale di valutazione?',
    answer: 'Sì, supporta sia i voti standard in lettere (A, B, C, D, F) sia le scale numeriche (0-10, 0-20, 0-100). Puoi configurare il limite massimo della scala in base al sistema in uso nella tua università.'
  }
];

const howToItems = [
  {
    name: 'Copia il tuo libretto',
    text: 'Accedi al portale della tua università o alla pagina dei voti, seleziona il testo e copialo.'
  },
  {
    name: 'Incolla il testo',
    text: 'Incolla il testo copiato nell\'apposita area di inserimento dello strumento.'
  },
  {
    name: 'Verifica e associa',
    text: 'Esamina la tabella generata in automatico. Se necessario, correggi il ruolo delle colonne usando le intestazioni.'
  },
  {
    name: 'Calcola il tuo GPA',
    text: 'Visualizza all\'istante il calcolo della tua media ponderata e dei crediti totali in fondo alla pagina.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Incolla qui il tuo libretto universitario',
    pasteAreaPlaceholder: 'Incolla il testo copiato da Moodle, Canvas o dal portale studenti della tua università...',
    parsedTitle: 'Dati estratti dal libretto',
    columnSelect: 'Associa colonna',
    subjectName: 'Nome Corso/Materia',
    grade: 'Voto',
    credits: 'Crediti (CFU)',
    ignore: 'Ignora',
    gpaResult: 'GPA cumulativo',
    totalCredits: 'Crediti totali',
    emptyState: 'Incolla i dati del tuo libretto qui sopra per visualizzare l\'anteprima e modificare le righe.',
    scaleLabel: 'Limite scala di valutazione',
    customScale: 'Voto massimo della scala',
    exampleSubject: 'Analisi Matematica I',
    newSubjectPlaceholder: 'Nuovo corso',
    clearBtn: 'Cancella testo',
    errorFormat: 'Impossibile rilevare colonne chiare. Prova a copiare e incollare una tabella o un formato ad elenco.'
  },
  seo: [
    { type: 'title', text: 'Come estrarre e calcolare la media e il GPA da qualsiasi libretto', level: 2 },
    { type: 'paragraph', html: 'Calcolare la tua media accademica non dovrebbe richiedere l\'inserimento manuale di decine di esami. Questo strumento estrae i dati da qualsiasi testo copiato e incollato per calcolare il tuo GPA.' },
    { type: 'title', text: 'Perché usare un estrattore di libretto universitario?', level: 3 },
    { type: 'paragraph', html: 'I portali universitari spesso formattano lo storico dei voti in complesse tabelle HTML. Copiandole e incollandole direttamente in questo strumento, il nostro motore euristico rileva ed estrae all\'istante esami, voti e crediti senza errori di digitazione.' },
    { type: 'title', text: 'Sicuro, privato e veloce', level: 3 },
    { type: 'paragraph', html: 'Dato che il motore di analisi viene eseguito localmente in JavaScript, la tua carriera accademica non lascia mai il tuo browser. Puoi elaborare documenti di centinaia di righe in pochi millisecondi.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
