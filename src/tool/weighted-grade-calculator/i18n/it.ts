import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'calcolatore-media-voti-ponderata';
const title = 'Calcolatore Media Voti Ponderata';
const description = 'Smetti di stressarti per la tua media! Calcola facilmente i voti del tuo corso e i voti finali. Inserisci semplicemente i tuoi compiti, esami e i relativi pesi per vedere a che punto sei.';

const faqItems = [
  { question: 'Cos\'è esattamente un voto ponderato?', answer: 'In molti corsi, non tutti i compiti hanno lo stesso valore. Un esame finale potrebbe valere il 40% del tuo voto, mentre i compiti a casa solo il 10%. Un voto ponderato tiene conto di queste differenze in modo da conoscere la tua vera posizione.' },
  { question: 'Dove posso trovare i pesi dei miei voti?', answer: 'Di solito, questi sono elencati nel programma del corso alla voce "Criteri di valutazione". I professori assegnano una percentuale a diverse categorie come partecipazione, quiz e progetti.' },
  { question: 'E se i miei compiti non arrivano ancora al 100%?', answer: 'Non preoccuparti! Il nostro calcolatore mostrerà un voto "proiettato" basato sul lavoro completato finora. Scala i tuoi punteggi correnti a un equivalente del 100%.' },
  { question: 'Posso usarlo per la mia media accademica?', answer: 'Assolutamente sì. Puoi trattare ogni corso come una "materia" e utilizzare i suoi crediti formativi come "peso" per trovare la tua media ponderata del semestre.' },
];

const howToItems = [
  { name: 'Elenca i tuoi compiti', text: 'Inserisci il nome dei tuoi esami, quiz o progetti. Mantieni tutto organizzato!' },
  { name: 'Inserisci i tuoi punteggi', text: 'Digita il voto che hai ricevuto per ogni elemento (solitamente su 10 o 100).' },
  { name: 'Aggiungi i pesi', text: 'Controlla il programma del corso e inserisci la percentuale con cui ogni elemento contribuisce al tuo voto finale.' },
  { name: 'Controlla il risultato', text: 'Guarda il tuo voto finale aggiornarsi istantaneamente. Nessun calcolo manuale richiesto!' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    addSubject: 'Aggiungi Elemento',
    subjects: 'Voti e Pesi',
    subjectName: 'Compito / Materia',
    grade: 'Voto',
    weight: 'Peso (%)',
    scale: 'Scala (es. 4.0, 10, 100)',
    finalGrade: 'Il Tuo Voto Attuale',
    removeSubject: 'Rimuovi',
    weightSum: 'Peso Totale',
    exampleSubject: 'Esame Finale',
    newSubjectPlaceholder: 'es. Midterm',
  },
  seo: [
    { type: 'title', text: 'Come Gestire i Tuoi Voti con un Calcolatore Ponderato', level: 2 },
    { type: 'paragraph', html: 'Ti sei mai sentito perso guardando una pila di voti? Non sei solo. Capire la tua <strong>media ponderata</strong> è il segreto per avere successo a scuola e all\'università.' },
    { type: 'title', text: 'Perché i Voti Ponderati sono Importanti', level: 3 },
    { type: 'paragraph', html: 'Una media semplice tratta ogni compito allo stesso modo. Ma nel mondo reale (e nel tuo programma), un quiz di 2 minuti non dovrebbe contare quanto una tesina di 20 pagine. I voti ponderati danno più "potere" alle cose importanti.' },
    { type: 'paragraph', html: 'Sia che tu stia calcolando la <strong>media del semestre</strong> o che stia solo cercando di capire se puoi saltare l\'ultimo compito facoltativo, la ponderazione è lo strumento di cui hai bisogno.' },
    { type: 'title', text: 'Calcola il Tuo Voto Finale in 3 Passaggi', level: 3 },
    { type: 'list', items: ['Trova il peso di ogni categoria nel tuo programma (es. Esami 50%, Compiti 20%).', 'Moltiplica il tuo punteggio per quel peso (es. voto 90 * 0,50 peso = 45 punti).', 'Somma tutti quei punti per ottenere la tua percentuale finale.'] },
    { type: 'title', text: 'Consiglio da Esperto: Il Gioco del "Cosa-succede-se"', level: 3 },
    { type: 'paragraph', html: 'Usa questo calcolatore per simulare diversi scenari. "Cosa succede se prendo 85 all\'esame finale?" o "Cosa succede se salto questo compito?" Vedere l\'impatto in tempo reale ti aiuta a dare priorità al tempo di studio dove conta davvero.' },
    { type: 'tip', html: '<strong>Niente panico.</strong> Se i tuoi pesi non arrivano ancora al 100%, il calcolatore proietterà quale sarà il tuo voto in base al lavoro corrente. È un ottimo modo per monitorare i progressi a metà semestre!' },
    { type: 'title', text: 'Aritmetica vs. Ponderata: La Vera Differenza', level: 3 },
    { type: 'paragraph', html: 'Una media aritmetica può essere pericolosamente fuorviante. Se hai un 100% in un piccolo quiz ma un 50% in un esame importante, una media semplice dice che hai il 75% (sufficiente). Ma se l\'esame vale il 90% del tuo voto, il tuo <strong>voto ponderato effettivo</strong> è più vicino a un 55% (insufficiente). Guarda sempre i pesi!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
