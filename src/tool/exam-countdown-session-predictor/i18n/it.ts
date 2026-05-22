import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-italian' as const;
const title = 'Countdown Esami & Pianificatore Sessioni di Studio';
const description = 'Calcola il tuo ritmo di studio giornaliero esatto per arrivare preparato al giorno dell\'esame. Inserisci il materiale da studiare, imposta i giorni di riposo e genera un calendario di studio personalizzato.';

const faqItems = [
  { question: 'Perché è meglio studiare quotidianamente invece di fare sessioni intensive all\'ultimo minuto?', answer: 'Le ricerche scientifiche dimostrano che la pratica distribuita (dilazionare le sessioni di studio nel tempo) favorisce una ritenzione a lungo termine decisamente migliore e riduce in modo significativo l\'ansia da esame rispetto al tentativo di memorizzare tutto negli ultimi giorni.' },
  { question: 'A cosa serve il margine di ripasso?', answer: 'Il margine di ripasso riserva un numero specifico di giorni subito prima dell\'esame esclusivamente per il ripasso generale. Durante questo periodo il calcolatore non pianifica nuovo materiale, assicurandoti il tempo necessario per consolidare le tue conoscenze.' },
  { question: 'In che modo i giorni di riposo personalizzati influenzano il mio ritmo?', answer: 'Quando escludi un giorno dal calendario (come giorno libero settimanale o data specifica), il pianificatore ridistribuisce il materiale rimanente su tutti gli altri giorni di studio, aumentando leggermente il carico giornaliero per farti finire in tempo.' },
  { question: 'Posso reimpostare un giorno di riposo come giorno di studio?', answer: 'Sì. Puoi attivare o disattivare qualsiasi giorno nel calendario in tempo real convertendolo da riposo a studio, oppure rimuovere le date personalizzate dall\'elenco per ricalcolare istantaneamente il ritmo.' },
];

const howToItems = [
  { name: 'Inserisci la data dell\'esame', text: 'Seleziona la data del tuo prossimo esame nel selettore del calendario.' },
  { name: 'Indica il materiale totale', text: 'Inserisci la quantità di materiale da studiare, ad esempio il numero di pagine, capitoli o esercizi.' },
  { name: 'Imposta la pianificazione e il margine', text: 'Scegli i tuoi giorni di riposo settimanali e configura un margine per il ripasso finale.' },
  { name: 'Regola e monitora', text: 'Modifica i singoli giorni direttamente nel calendario per trasformarli in giorni di riposo personalizzati in base ai tuoi impegni.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Pianificatore Studio & Countdown',
    examDateLabel: 'Data dell\'esame',
    materialLabel: 'Materiale Totale (Pagine / Capitoli)',
    materialUnitLabel: 'Unità di misura',
    progressLabel: 'Completato finora',
    weeklyScheduleLabel: 'Giorni di studio settimanali',
    reviewBufferLabel: 'Margine di ripasso (Giorni)',
    excludedDatesLabel: 'Giorni di riposo personalizzati',
    dailyPaceLabel: 'Ritmo di studio giornaliero',
    daysLeftLabel: 'Giorni rimasti',
    studyDaysLabel: 'Giorni di studio',
    bufferDaysLabel: 'Giorni di margine',
    scheduleTitle: 'Il tuo calendario di studio personalizzato',
    resetButton: 'Reimposta valori predefiniti',
    addExclusionButton: 'Aggiungi giorno di riposo',
    daysOfWeek: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    dayTypes: {
      study: 'Giorno di studio',
      rest: 'Giorno di riposo',
      review: 'Margine di ripasso',
      exam: 'Giorno dell\'esame',
    },
    units: {
      pages: 'Pagine',
      chapters: 'Capitoli',
      exercises: 'Esercizi',
      modules: 'Moduli',
      topics: 'Argomenti',
    },
    noStudyDaysError: 'Non hai giorni di studio disponibili! Verifica la pianificazione settimanale e le impostazioni del margine di ripasso.',
    examInPastError: 'La data dell\'esame deve essere nel futuro.',
    noMaterialError: 'Inserisci una quantità di materiale superiore a zero.',
    scheduleTableHeader: {
      date: 'Data',
      day: 'Giorno',
      type: 'Stato',
      target: 'Obiettivo giornaliero',
      cumulative: 'Progresso complessivo',
      action: 'Azioni rapide',
    },
    markAsRest: 'Imposta come riposo',
    markAsStudy: 'Imposta come studio',
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Riferimenti & Risorse accademiche',
  },
  seo: [
    { type: 'title', text: 'Come organizzare le sessioni di studio per memorizzare al meglio', level: 2 },
    { type: 'paragraph', html: 'Preparare un esame non significa ridursi a studiare ore e ore la notte prima, ma saper distribuire correttamente il carico di lavoro. Gestire il ritmo in modo equilibrato è fondamentale per evitare l\'esaurimento cognitivo, migliorare il recupero delle informazioni e assicurarsi di coprire tutto il programma senza stress.' },
    { type: 'title', text: 'La scienza dell\'apprendimento distribuito e della ripetizione spaziata', level: 3 },
    { type: 'paragraph', html: 'Il nostro cervello apprende meglio quando le sessioni sono intervallate nel tempo. Distribuendo lo studio su più settimane, permetti alle connessioni neurali di consolidarsi in modo più forte. Questo metodo previene l\'affaticamento mentale e facilita il trasferimento dei concetti dalla memoria a breve termine a quella a lungo termine.' },
    { type: 'paragraph', html: 'Secondo la teoria della curva dell\'oblio di Ebbinghaus, tendiamo a dimenticare le nozioni acquisite a meno che non vengano ripassate attivamente. Gli intervalli di studio programmati agiscono come dei reset, rallentando l\'oblio e strutturando una comprensione concettuale profonda.' },
    { type: 'title', text: 'L\'importanza di un margine per il ripasso finale', level: 3 },
    { type: 'paragraph', html: 'Un errore molto comune è pianificare lo studio di nuovi argomenti fino al giorno prima del test. Tenere un margine dedicato (solitamente da 2 a 5 giorni) consente di svolgere simulazioni, rivedere schemi e concentrarsi sui punti deboli. Assicura inoltre di riposare a sufficienza per essere lucidi il giorno dell\'esame.' },
    { type: 'title', text: 'Il potere della pianificazione adattiva', level: 3 },
    { type: 'paragraph', html: 'I piani di studio rigidi falliscono spesso a causa degli imprevisti quotidiani. Se rimani indietro di qualche pagina, un piano fisso diventa subito obsoleto. Un calcolatore dinamico, invece, rimodula gli obiettivi quotidiani in tempo reale, azzerando le preoccupazioni per i piccoli ritardi.' },
    { type: 'list', items: [
      'Aggiorna periodicamente i tuoi progressi per mantenere accurati i calcoli.',
      'Sposta o aggiungi giorni di riposo per gestire eventuali impegni improvvisi.',
      'Mantieni un ritmo costante ed evita di dover recuperare grandi quantità di materiale all\'ultimo minuto.'
    ] },
    { type: 'title', text: 'Flessibilità: programmare i giorni di pausa', level: 3 },
    { type: 'paragraph', html: 'Il riposo non è un premio, ma una parte essenziale del processo di apprendimento. Inserendo nel piano i giorni di pausa eviti l\'affaticamento e permetti alla mente di ricaricarsi. Questo calcolatore ridistribuisce automaticamente il carico di studio sui restanti giorni.' },
    { type: 'tip', html: '<strong>Previeni gli imprevisti.</strong> Mantieni sempre almeno un giorno di riposo a settimana. Agirà come valvola di sicurezza: in caso di necessità o stanchezza, potrai utilizzarlo per recuperare senza compromettere il piano generale.' },
    { type: 'title', text: 'Come calcolare il ritmo di studio manualmente', level: 3 },
    { type: 'paragraph', html: 'Per calcolare il ritmo di studio giornaliero a mano puoi usare una formula matematica elementare. Sottrai il materiale già completato dal totale. Successivamente, conta i giorni che mancano all\'esame, escludendo i giorni di riposo e il margine di ripasso. Dividi infine il lavoro rimanente per i giorni di studio effettivi.' },
    { type: 'paragraph', html: 'Ad esempio, se hai da studiare 400 pagine, ne hai già completate 50, mancano 20 giorni all\'esame, prevedi 4 giorni di riposo e 2 di margine di ripasso: il carico residuo è di 350 pagine e i giorni utili sono 14. Il tuo ritmo ideale sarà di 350 diviso 14, cioè esattamente 25 pagine al giorno.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
