import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'ottimizzatore-orario-scolastico' as const;
const title = 'Ottimizzatore di Orario Scolastico';
const description = 'Crea un orario scolastico settimanale visivo, organizza le materie per colore, rileva le sovrapposizioni ed esporta il tuo calendario in formato .ics.';

const faqItems = [
  {
    question: 'Come funziona il rilevatore di sovrapposizioni?',
    answer: 'Ogni blocco di lezione ha un giorno, un\'ora di inizio e una durata. Lo strumento confronta ciascuna coppia di blocchi e li segnala quando condividono lo stesso giorno e i loro intervalli di tempo si intersecano.'
  },
  {
    question: 'Posso spostare le lezioni direttamente sul calendario?',
    answer: 'Sì. Trascina un blocco di lezione sulla colonna di un altro giorno per testare una nuova disposizione settimanale. Lo stato del conflitto si aggiorna immediatamente dopo lo spostamento.'
  },
  {
    question: 'Cosa include l\'esportazione .ics?',
    answer: 'L\'esportazione crea un file iCalendar standard con ciascuna lezione come evento, inclusa la materia, l\'aula, l\'ora di inizio e di fine. Puoi importarlo in molte applicazioni di calendario.'
  },
  {
    question: 'Perché dovrei codificare le materie con i colori?',
    answer: 'I colori rendono più leggibile un orario fitto. Usa colori diversi per laboratori, lezioni teoriche, seminari o materie ad alto impegno, in modo che i conflitti e i giorni intensi risaltino prima.'
  }
];

const howToItems = [
  { name: 'Aggiungi dettagli lezione', text: 'Inserisci materia, aula, giorno, ora di inizio, durata e colore.' },
  { name: 'Posiziona i blocchi sulla griglia', text: 'Usa i blocchi generati per vedere come ogni lezione si inserisce nel tuo orario settimanale.' },
  { name: 'Risolvi le sovrapposizioni', text: 'Cerca i blocchi di conflitto evidenziati, quindi sposta o modifica le lezioni finché il pannello dei conflitti non è vuoto.' },
  { name: 'Esporta il tuo calendario', text: 'Scarica il file .ics e importalo in Google Calendar, Apple Calendar, Outlook o altre app.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Materia',
    roomLabel: 'Aula',
    dayLabel: 'Giorno',
    startLabel: 'Inizio',
    durationLabel: 'Durata',
    colorLabel: 'Colore',
    addClass: 'Aggiungi lezione',
    saveClass: 'Salva lezione',
    newClass: 'Nuova lezione',
    exportICS: 'Esporta .ics',
    conflictLabel: 'Conflitti di orario',
    noConflicts: 'Nessuna sovrapposizione rilevata',
    removeLabel: 'Rimuovi lezione',
    editHint: 'Seleziona una lezione per modificarla, o trascinala in un altro giorno e ora.',
    weekendDaysLabel: 'Giorni del fine settimana',
    saturdayLabel: 'Sabato',
    sundayLabel: 'Domenica',
    weekDayLabels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven'],
    weekendDayShortLabels: ['Sab', 'Dom'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 h', '2 h', '3 h'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Analisi',
    defaultRoom: 'Aula 204',
    defaultNewSubject: 'Nuova lezione',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Analisi', room: 'Aula 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Letteratura', room: 'Lab B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Fisica', room: 'Aula Magna', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'orario-scolastico.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'sovrapposizione',
    overlapPlural: 'sovrapposizioni',
    detectedLabel: 'rilevata/e',
    classEditorAriaLabel: 'Editor delle lezioni',
    weeklyScheduleAriaLabel: 'Orario settimanale',
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti e Standard del Calendario',
  },
  seo: [
    { type: 'title', text: 'Come strutturare un orario scolastico settimanale che funzioni davvero', level: 2 },
    { type: 'paragraph', html: 'Un buon orario fa molto più che elencare le materie. Ti mostra dove la tua settimana è sovraccarica, quali giorni sono frammentati e se due lezioni richieste entrano in collisione. Un ottimizzatore visivo rende visibili questi problemi prima che si trasformino in lezioni perse, corse o scelte di registrazione impossibili.' },
    { type: 'summary', title: 'Cosa controllare prima di definire l\'orario', items: [
      'Nessuna lezione obbligatoria si sovrappone nello stesso giorno.',
      'Sabato e domenica possono essere abilitati per gli istituti che offrono lezioni nel fine settimana.',
      'Laboratori, seminari e lezioni usano colori distinti per una rapida consultazione.',
      'Materie complesse non sono accumulate consecutivamente senza pause.',
      'L\'orario finale può essere esportato nella tua normale applicazione di calendario.'
    ] },
    { type: 'title', text: 'Perché la griglia visiva è superiore alle liste di testo', level: 3 },
    { type: 'paragraph', html: 'Le semplici liste dei corsi nascondono la pressione del tempo perché separano ogni lezione dal resto della settimana. Una griglia rivela immediatamente la densità. Puoi vedere se il lunedì ha troppe ore, se una lezione teorica blocca un laboratorio, se le lezioni del sabato modificano il ritmo della settimana o se i trasferimenti tra aule creano attrito.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Lista corsi', description: 'Buona per i codici di iscrizione, meno efficace per comprendere il carico di lavoro settimanale.' },
      { title: 'Griglia settimanale', description: 'Ideale per comprendere il ritmo, gli spazi vuoti e i conflitti a colpo d\'occhio.', highlight: true },
      { title: 'Solo app calendario', description: 'Utile dopo la pianificazione, ma lenta per sperimentare più alternative.' }
    ] },
    { type: 'title', text: 'Come funziona il rilevamento delle sovrapposizioni', level: 3 },
    { type: 'paragraph', html: 'Due lezioni entrano in conflitto quando si svolgono nello stesso giorno e i loro intervalli di tempo si intersecano. Ad esempio, una lezione dalle 10:00 alle 12:00 si sovrappone a un seminario dalle 11:00 alle 13:00 perché entrambi occupano l\'ora delle 11:00. Lo strumento controlla ogni blocco rispetto a tutti gli altri ed evidenzia i conflitti.' },
    { type: 'table', headers: ['Lezione A', 'Lezione B', 'Risultato'], rows: [
      ['Lunedì 09:00-11:00', 'Lunedì 11:00-13:00', 'Nessuna sovrapposizione poiché una termina quando inizia l\'altra.'],
      ['Martedì 10:00-12:00', 'Martedì 11:00-13:00', 'Sovrapposizione poiché gli intervalli temporali si intersecano.'],
      ['Mercoledì 09:00-11:00', 'Giovedì 09:00-11:00', 'Nessuna sovrapposizione in quanto i giorni sono diversi.']
    ] },
    { type: 'title', text: 'Utilizzare il colore come segnale di pianificazione accademica', level: 3 },
    { type: 'paragraph', html: 'Il colore non è solo decorazione. Può codificare il tipo di lezione, la difficoltà, l\'edificio o il livello di energia richiesto. Una tavolozza coerente rende l\'orario più leggibile sotto pressione, specialmente durante i periodi di immatricolazione.' },
    { type: 'tip', html: '<strong>Mantieni costanti i significati dei colori.</strong> Ad esempio, usa una famiglia di colori per i laboratori, un\'altra per le lezioni teoriche e un colore di avviso per le lezioni che richiedono spostamenti o molta preparazione.' },
    { type: 'title', text: 'Esportare l\'orario nelle app di calendario', level: 3 },
    { type: 'paragraph', html: 'Il formato .ics è lo standard internazionale di interscambio iCalendar. Esportare l\'orario ti consente di importare le lezioni in Google Calendar, Apple Calendar, Outlook e molti sistemi scolastici. Dopo l\'importazione, puoi aggiungere promemoria, tempi di viaggio, regole di ricorrenza e blocchi di studio personale.' },
    { type: 'diagnostic', variant: 'warning', title: 'Prima di importare', html: 'Verifica che la data di inizio corrisponda alla settimana corretta, controlla i fusi orari all\'interno dell\'app calendario e conferma che gli eventi importati non duplichino i feed di calendario già esistenti.' },
    { type: 'title', text: 'Un flusso di lavoro pratico per l\'iscrizione ai corsi', level: 3 },
    { type: 'list', items: [
      'Aggiungi prima le lezioni obbligatorie e risolvi i conflitti prima di inserire quelle facoltative.',
      'Abilita il sabato o la domenica se la tua scuola prevede lezioni nei fine settimana.',
      'Usa i colori per distinguere lezioni teoriche, laboratori, seminari e studio autonomo.',
      'Trascina i blocchi tra i giorni per confrontare rapidamente le alternative.',
      'Lascia spazi liberi visibili per i pasti, il tempo di viaggio e le pause.',
      'Esporta solo dopo aver ripulito completamente il pannello dei conflitti.'
    ] },
    { type: 'message', title: 'La pianificazione è iterativa', html: 'Considera la prima versione come una bozza. Il miglior orario emerge solitamente dopo aver testato i conflitti, confrontato i formati e verificato se il ritmo settimanale è sostenibile.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
