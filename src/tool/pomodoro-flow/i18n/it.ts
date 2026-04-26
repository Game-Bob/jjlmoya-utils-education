import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow';
const description = 'Domina la tua produttività con una gestione del tempo focalizzata sullo zen. Personalizza i cicli di lavoro/pausa, traccia le interruzioni e visualizza i tuoi modelli di concentrazione in tempo reale.';

const faqItems = [
  { question: 'Cos\'è la Tecnica Pomodoro?', answer: 'La Tecnica Pomodoro è un metodo di gestione del tempo che utilizza intervalli di lavoro focalizzati (solitamente 25 minuti) seguiti da brevi pause. Questo strumento la estende con cicli personalizzabili e analisi dettagliate.' },
  { question: 'Posso personalizzare le durate di lavoro/pausa?', answer: 'Sì! Scegli tra tre preset (Seme: 25/5, Albero: 50/10, Montagna: 90/15) o regola i tempi al volo con i pulsanti +5 e -5 minuti.' },
  { question: 'A cosa serve il tracciamento delle interruzioni?', answer: 'Ogni volta che clicchi sul pulsante della distrazione, lo strumento registra un\'interruzione. Questo aiuta a calcolare il tuo Focus Score e a identificare i modelli della tua concentrazione.' },
  { question: 'Come viene calcolato il Focus Score?', answer: 'Focus Score = ((Tempo di Lavoro - Interruzioni × 2) / Tempo di Lavoro) × 100. Questo tiene conto del costo cognitivo del cambio di contesto.' },
  { question: 'Posso esportare i dati della mia sessione?', answer: 'Sì. Puoi copiare il riepilogo della sessione come Markdown (ottimo per Notion/Obsidian) o condividere un riepilogo visivo sui social media.' },
];

const howToItems = [
  { name: 'Inserisci il tuo compito', text: 'Scrivi ciò su cui stai per lavorare. Questo aiuta a mantenere il contesto e l\'intenzione.' },
  { name: 'Scegli un ciclo', text: 'Scegli Seme (25/5) per compiti rapidi, Albero (50/10) per il lavoro standard o Montagna (90/15) per una concentrazione profonda.' },
  { name: 'Avvia e concentrati', text: 'Il timer inizia. Clicca sull\'anello per mettere in pausa. Usa +5/-5 per regolare se necessario. La barra del titolo mostra il tempo rimanente.' },
  { name: 'Traccia le interruzioni', text: 'Ti sei distratto? Clicca sul pulsante Allerta Distrazione. Lo strumento lo registra per calcolare il tuo Focus Score.' },
  { name: 'Rivedi il tuo raccolto', text: 'Dopo la sessione, guarda le tue statistiche: Focus Score, ripartizione dei compiti e heatmap mensile della tua produttività.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: 'Su cosa lavorerai?',
    selectCycle: 'Scegli il tuo ciclo di concentrazione',
    startButton: 'Inizia',
    seed: 'Seme',
    tree: 'Albero',
    mountain: 'Montagna',
    timer: 'Timer',
    pauseButton: 'Pausa',
    resumeButton: 'Riprendi',
    distractionButton: 'Allerta Distrazione',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Focus',
    breakTime: 'Pausa',
    sessionComplete: 'Sessione Completata',
    endSession: 'Termina Sessione',
    focusScore: 'Focus Score',
    totalTime: 'Tempo Totale',
    interruptions: 'Interruzioni',
    taskBreakdown: 'Ripartizione Compiti',
    monthlyHeatmap: 'Attività Mensile',
    copyMarkdown: 'Copia Markdown',
    shareImage: 'Condividi',
    wellnessMessage: 'Fai una pausa, te la sei meritata',
    sessionSummary: 'Riepilogo Sessione',
    newSession: 'Nuova Sessione',
    copied: 'Copiato!',
    unnamedTask: 'Compito senza nome',
    breakTimeNotification: 'È ora della pausa!',
    focusTimeNotification: 'È ora di concentrarsi!',
    interruptionsLabel: 'Interruzioni:',
    studySession: 'Sessione di Studio',
  },
  seo: [
    { type: 'title', text: 'Domina la Concentrazione con Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'La produttività non riguarda il lavorare di più, ma il lavorare in modo più intelligente. <strong>Pomodoro Flow</strong> combina la comprovata Tecnica Pomodoro con un design zen e analisi in tempo reale per aiutarti a capire <em>come</em> lavori meglio.' },
    { type: 'title', text: 'Perché il Pomodoro Funziona', level: 3 },
    { type: 'paragraph', html: 'Gli esseri umani non sono fatti per maratone di iper-concentrazione di 8 ore. Il nostro cervello funziona meglio in cicli di lavoro focalizzato seguiti da pause ristoratrici. La Tecnica Pomodoro trasforma questo in un semplice rituale: lavora intensamente per 25 minuti, fai una pausa di 5, ripeti.' },
    { type: 'paragraph', html: 'Ma ogni compito è diverso. Ecco perché Pomodoro Flow offre tre cicli: <strong>Seme</strong> per compiti rapidi (25/5), <strong>Albero</strong> per la routine quotidiana (50/10) e <strong>Montagna</strong> per sessioni di lavoro profondo (90/15).' },
    { type: 'title', text: 'Il Vero Potere: Tracciamento delle Interruzioni', level: 3 },
    { type: 'paragraph', html: 'Lavori per 50 minuti e pensi di aver dato il massimo. Ma ti sei distratto 5 volte? Ogni interruzione ti costa una "tassa" di cambio di contesto. Pomodoro Flow traccia tutto questo con un unico pulsante (Allerta Distrazione) e calcola il tuo <strong>Focus Score</strong> — una metrica reale della tua concentrazione.' },
    { type: 'paragraph', html: 'Con il tempo, vedrai quali compiti, momenti della giornata o ambienti ti permettono di raggiungere il tuo miglior focus. È lì che avviene il tuo lavoro di maggior valore.' },
    { type: 'title', text: 'Funzioni che non intralciano', level: 3 },
    { type: 'list', items: [
      'Design Zen-Tech: Modalità scura, glassmorphism e un timer centrato che diventa l\'unica cosa che vedi.',
      'Live Title Bar: La scheda del browser mostra il conto alla rovescia, così conosci il tempo a colpo d\'occhio.',
      'Timing Flessibile: Regola i tempi di lavoro/pausa al volo senza ricominciare.',
      'Esportazione Sessione: Copia il tuo riepilogo in Markdown o condividi un\'immagine sui social media.',
      'Heatmap Mensile: Guarda i tuoi modelli di produttività. Quali giorni sono i tuoi picchi di concentrazione?',
    ] },
    { type: 'title', text: 'La Psicologia dello "Stato di Flow"', level: 3 },
    { type: 'paragraph', html: 'Lo psicologo Mihaly Csikszentmihalyi definisce il <strong>flow</strong> come lo stato in cui la sfida incontra l\'abilità e il tempo scompare. Pomodoro Flow rimuove le distrazioni, imposta chiari confini temporali e ti dà un feedback immediato — le tre condizioni per lo stato di flow.' },
    { type: 'tip', html: '<strong>Pro Tip:</strong> Quando sei in flow, non interromperti. Se il timer suona ma sei a metà di un pensiero, premi riprendi e continua. Il bello del tracciamento delle interruzioni è che vedrai la differenza tra il caos esterno e il tuo slancio.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
