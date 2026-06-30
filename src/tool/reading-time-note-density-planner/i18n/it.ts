import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'pianificatore-tempo-lettura-densita-note' as const;
const title = 'Pianificatore di Tempo di Lettura e Densità delle Note';
const description = 'Stima quanto tempo richiederà la lettura accademica includendo la presa di note, quindi suddividi il carico di lavoro in sessioni di studio pratiche.';

const faqItems = [
  { question: 'Perché prendere note influisce così tanto sul tempo di lettura?', answer: 'La lettura accademica raramente consiste solo nello scorrere le parole. Ogni evidenziazione, riassunto, domanda a margine o flashcard richiede tempo di elaborazione. Pianificare la densità delle note separatamente evita che una stima ottimistica delle pagine all\'ora si trasformi in una nottata di studio.' },
  { question: 'Qual è una buona stima delle pagine all\'ora?', answer: 'Per manuali complessi, una media comune è da 15 a 25 pagine all\'ora. Per testi più leggeri, da 30 a 50 pagine all\'ora può essere realistico. Se il materiale presenta formule, fonti primarie o vocaboli sconosciuti, inizia con una stima più bassa e regolati dopo una prima sessione cronometrata.' },
  { question: 'Come dovrei scegliere la densità delle note?', answer: 'Prevedi da 1 a 2 minuti a pagina per una sottolineatura di base o uno schema rapido, da 3 a 5 minuti a pagina per gli appunti Cornell e più di 5 minuti a pagina se stai creando flashcard, risolvendo esempi pratici o scrivendo un paragrafo di sintesi.' },
  { question: 'Questo pianificatore può sostituire il programma del corso?', answer: 'No. Ti aiuta a tradurre il volume di lettura in ore di studio e sessioni concrete, ma le scadenze, i seminari, i laboratori e i periodi di ripasso devono comunque essere inseriti nel tuo calendario principale.' },
];

const howToItems = [
  { name: 'Inserisci il carico di lettura', text: 'Aggiungi il numero di pagine o unità equivalenti che devi completare.' },
  { name: 'Imposta il tempo disponibile', text: 'Inserisci i minuti totali che puoi dedicare realisticamente prima della scadenza.' },
  { name: 'Stima la velocità e la densità delle note', text: 'Scegli una velocità in pagine all\'ora e i minuti medi di presa appunti previsti per pagina.' },
  { name: 'Dividi in sessioni', text: 'Imposta il numero di sessioni per vedere pagine, minuti e carico di note per singolo incontro.' },
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

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Pagine da leggere',
    minutesLabel: 'Minuti disponibili',
    speedLabel: 'Velocità di lettura, pagine/ora',
    densityLabel: 'Densità note, minuti/pagina',
    sessionsLabel: 'Sessioni di studio',
    totalTimeLabel: 'Carico di lavoro totale',
    readingTimeLabel: 'Lettura',
    noteTimeLabel: 'Note',
    coverageLabel: 'Copertura del tempo',
    pagesSessionLabel: 'Pagine/sessione',
    minutesSessionLabel: 'Minuti/sessione',
    notesSessionLabel: 'Minuti di note/sessione',
    controlsAriaLabel: 'Controlli del piano di lettura',
    minuteUnit: 'min',
    hourUnit: 'h',
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti e Risorse Accademiche',
    statusLabels: {
      comfortable: 'Piano sostenibile',
      tight: 'Stretto ma fattibile',
      overloaded: 'Orario sovraccarico',
    },
    resetButton: 'Reinizializza',
  },
  seo: [
    { type: 'title', text: 'Pianifica il tempo di lettura in base alle tue note e non solo alle pagine', level: 2 },
    { type: 'paragraph', html: 'Molti studenti calcolano il tempo di lettura dividendo le pagine per una velocità approssimativa, dimenticando il principale costo nascosto: la presa di note. Un capitolo di quaranta pagine può essere un compito da novanta minuti se lo si scorre rapidamente, o un compito da tre ore se si prende nota, si riassume e si creano schede di ripasso. Questo pianificatore separa la velocità di lettura dalla densità delle note in modo che la tua tabella di marcia rispecchi il reale lavoro accademico.' },
    { type: 'diagnostic', variant: 'info', title: 'Quando il tuo piano di lettura è probabilmente troppo ottimista', html: '<ul><li>Il tuo tempo disponibile copre solo i minuti di lettura pura, escludendo note o risoluzione di esercizi.</li><li>Usi la stessa velocità stimata di pagine all\'ora per romanzi, manuali di studio, articoli scientifici e casi legali.</li><li>Le tue sessioni sono più lunghe rispetto al tuo normale tempo di attenzione, riducendo la qualità degli appunti nelle ultime pagine.</li><li>La scadenza include altri compiti, ma il piano di lettura presume che ogni minuto libero appartenga a una singola materia.</li></ul>' },
    { type: 'title', text: 'Scegliere una velocità di pagine all\'ora realistica', level: 3 },
    { type: 'table', headers: ['Tipo di materiale', 'Velocità iniziale', 'Consiglio di pianificazione'], rows: [['Ripasso rapido o contenuto familiare', '40-60 pagine/ora', 'Usa questo valore solo se conosci già il vocabolario specialistico e leggi per ripassare, non per studiare da zero.'], ['Capitolo di manuale standard', '20-35 pagine/ora', 'Riduci la velocità se il capitolo include esempi svolti, diagrammi o domande di autoverifica.'], ['Teoria complessa, ricerca o fonte primaria', '8-20 pagine/ora', 'Pianifica sessioni più lente e aggiungi un blocco di riepilogo, poiché la comprensione di solito richiede riletture multiple.']] },
    { type: 'tip', html: '<strong>Calibra dopo la prima sessione.</strong> Cronometra il tempo impiegato per leggere e annotare le prime dieci pagine. Se il calcolatore indica che il piano è sostenibile ma la prova pratica dice il contrario, affidati alla sessione reale e riduci la velocità stimata.' },
    { type: 'title', text: 'Cosa significa densità delle note', level: 3 },
    { type: 'paragraph', html: 'La densità delle note è il tempo medio dedicato all\'elaborazione di ciascuna pagina durante o dopo la lettura. Un approccio a bassa densità potrebbe limitarsi a una parola chiave a margine e un\'evidenziazione. Un approccio ad alta densità prevede appunti Cornell, un breve riassunto, un elenco di domande e tre flashcard. La scelta dipende dal tipo di esame: i quiz a risposta multipla traggono beneficio dalle flashcard, le prove scritte da mappe argomentative, e le materie scientifiche da esercizi svolti.' },
    { type: 'comparative', title: 'Note semplici vs note approfondite', columns: 2, items: [{ title: 'Note semplici', description: 'Completamento più rapido, utile per una lettura preliminare, ma le informazioni si dimenticano prima ed è più difficile ripassarle in seguito.', points: ['Ideale per argomenti conosciuti', 'Carico di lavoro immediato basso', 'Supporto per il ripasso meno efficace'] }, { title: 'Note approfondite', description: 'Richiede più tempo, ma è il metodo migliore per preparare esami, seminari e scritti accademici dove è essenziale ricordare i dettagli.', highlight: true, points: ['Consigliato per gli esami', 'Carico di lavoro immediato elevato', 'Materiale di ripasso molto efficace'] }] },
    { type: 'summary', title: 'Una regola pratica di pianificazione', items: ['Mantieni le sessioni di lettura ordinarie sotto i 75 minuti, se possibile.', 'Se il tempo per gli appunti supera quello di lettura, dividi il compito in due fasi: leggi prima, sintetizza dopo.', 'Riserva l\'ultima sessione al consolidamento invece di assegnare nuove pagine fino alla data di scadenza.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
