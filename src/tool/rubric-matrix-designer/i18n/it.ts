import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'creatore-matrice-rubrica' as const;
const title = 'Creatore di Matrici di Rubriche';
const description = 'Crea rubriche di valutazione ponderate e modificabili con livelli di competenza, convalida in tempo reale del peso al 100%, esportazione in CSV e layout pronto per la stampa.';

const faqItems = [
  { question: 'Che cos\'è una matrice di rubrica?', answer: 'Una matrice di rubrica è una griglia di valutazione che posiziona i criteri nelle righe e i livelli di competenza nelle colonne. Ogni cella descrive come si presenta la prestazione a quel livello, rendendo la valutazione più trasparente e coerente.' },
  { question: 'Perché i pesi dei criteri devono sommare il 100%?', answer: 'Un totale del 100% rende esplicito il modello di valutazione. Se il totale è inferiore o superiore al 100%, gli studenti e i valutatori non possono interpretare chiaramente quanto ciascun criterio contribuisca al punteggio finale.' },
  { question: 'Gli studenti possono usare questo strumento?', answer: 'Sì. Gli studenti possono utilizzarlo per comprendere a fondo i requisiti dei compiti, pianificare le bozze o creare liste di controllo per la valutazione tra pari prima della consegna.' },
  { question: 'Quali opzioni di esportazione sono incluse?', answer: 'L\'esportazione in CSV è utile per i fogli di calcolo e la configurazione nei sistemi LMS. Il pulsante di stampa apre il flusso di stampa del browser, dove è possibile salvare come PDF utilizzando la finestra di dialogo di stampa del sistema operativo.' },
];

const howToItems = [
  { name: 'Modifica i criteri', text: 'Fai clic sul nome di qualsiasi criterio e sostituiscilo con l\'abilità, il risultato o il requisito che desideri valutare.' },
  { name: 'Imposta i pesi', text: 'Regola ogni percentuale finché la barra del peso in tempo reale non segnala una rubrica bilanciata al 100%.' },
  { name: 'Descrivi i livelli di competenza', text: 'Fai clic all\'interno di ciascuna cella descrittiva e scrivi prove osservabili per quel livello di prestazione.' },
  { name: 'Aggiungi struttura quando necessario', text: 'Usa i pulsanti di aggiunta per creare criteri o livelli di competenza extra, e rimuovi le righe o le colonne che non sono utili.' },
  { name: 'Esporta o stampa', text: 'Scarica un file CSV per i fogli di calcolo o usa la stampa per creare una versione PDF pulita.' },
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
  applicationCategory: 'EducationalApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Criterio',
    weightHeader: 'Peso',
    levelSectionLabel: 'Livelli di competenza',
    levelBadgePrefix: 'L',
    addCriterion: 'Aggiungi criterio',
    addLevel: 'Aggiungi livello',
    removeCriterion: 'Rimuovi criterio',
    removeLevel: 'Rimuovi livello',
    exportCsv: 'Esporta CSV',
    printRubric: 'Stampa / PDF',
    csvFilename: 'matrice-rubrica.csv',
    pdfDocumentTitle: 'Matrice di rubrica',
    pdfImageAlt: 'Matrice di rubrica',
    confirmDeleteTitle: 'Eliminare questo criterio?',
    confirmDeleteText: 'Questo rimuoverà il criterio e tutti i descrittori scritti per i suoi livelli di competenza.',
    cancelDelete: 'Annulla',
    confirmDelete: 'Elimina criterio',
    totalWeight: 'Peso totale',
    balanced: 'Bilanciato esattamente al 100%',
    under: 'Aggiungi peso fino a quando la rubrica raggiunge il 100%',
    over: 'Riduci il peso fino a quando la rubrica torna al 100%',
    emptyCell: 'Clicca per modificare',
    newCriterionTemplate: 'Criterio {index}',
    newDescriptorTemplate: 'Descrittore {index}.{level}',
    newLevelTemplate: 'Livello {index}',
    defaultLevels: [
      { name: 'Eccellente', score: 4 },
      { name: 'Competente', score: 3 },
      { name: 'In via di sviluppo', score: 2 },
      { name: 'Iniziale', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Qualità dell\'argomentazione',
        weight: 35,
        cells: [
          'Tesi chiara con ragionamento sfaccettato',
          'Tesi chiara con ragionamento adeguato',
          'La tesi è presente ma non uniforme',
          'La tesi è poco chiara o mancante',
        ],
      },
      {
        name: 'Uso delle prove',
        weight: 30,
        cells: [
          'Le prove sono precise e integrate',
          'Le prove supportano la maggior parte delle affermazioni',
          'Le prove sono generiche o collegate in modo debole',
          'Le prove sono assenti o imprecise',
        ],
      },
      {
        name: 'Organizzazione',
        weight: 20,
        cells: [
          'La struttura guida il lettore in modo fluido',
          'La struttura è logica',
          'La struttura presenta lacune o ripetizioni',
          'La struttura è difficile da seguire',
        ],
      },
      {
        name: 'Stile accademico',
        weight: 15,
        cells: [
          'Stile curato ed esatta osservanza delle convenzioni',
          'Errori minori non compromettono il significato',
          'Errori frequenti distraggono il lettore',
          'Gli errori rendono il significato poco chiaro',
        ],
      },
    ],
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Riferimenti e risorse accademiche',
  },
  seo: [
    { type: 'title', text: 'Progettare rubriche che gli studenti possano effettivamente utilizzare', level: 2 },
    { type: 'paragraph', html: 'Una solida rubrica di valutazione è molto più di una scheda per i voti. È una mappa condivisa delle aspettative. Gli studenti la usano per capire come si presenta la qualità prima di consegnare il lavoro, i docenti la usano per valutare in modo più coerente e i revisori la usano per spiegare i feedback con meno ambiguità. Questo creatore rende visibile la struttura: criteri, pesi, livelli di competenza e descrittori risiedono tutti in una griglia modificabile.' },
    { type: 'diagnostic', variant: 'warning', title: 'Quando una rubrica ha bisogno di essere rivista', html: '<ul><li>Diversi criteri si sovrappongono a tal punto che lo stesso errore viene penalizzato due volte.</li><li>Il peso totale non è uguale al 100%, rendendo difficile interpretare il punteggio finale.</li><li>I descrittori utilizzano parole vaghe come buono, debole o eccellente senza prove osservabili.</li><li>Ci sono troppi livelli perché i valutatori possano distinguerli in modo affidabile.</li></ul>' },
    { type: 'title', text: 'Scelta dei criteri e dei pesi', level: 3 },
    { type: 'table', headers: ['Elemento della rubrica', 'Buona pratica', 'Problema comune'], rows: [['Criteri', 'Valutare abilità o risultati distinti come argomentazione, prove, metodo, accuratezza o presentazione.', 'Mescolare più abilità in una sola riga rende il feedback poco chiaro.'], ['Pesi', 'Abbinare il peso alla priorità didattica e allo scopo del compito.', 'Assegnare lo stesso peso a ogni riga anche quando alcuni risultati contano di più.'], ['Livelli', 'Utilizzare da 3 a 5 livelli che i valutatori possano distinguere in modo coerente.', 'Aggiungere molti livelli con minime differenze di formulazione.'], ['Descrittori', 'Descrivere prove osservabili nel lavoro dello studente.', 'Utilizzare etichette che suonano valutative ma non guidano la revision.']] },
    { type: 'comparative', title: 'Rubriche analitiche vs olistiche', columns: 2, items: [{ title: 'Rubrica analitica', description: 'Suddivide la prestazione in criteri e pesi separati. Ideale quando gli studenti hanno bisogno di un feedback mirato o quando più valutatori devono allinearsi.', highlight: true, points: ['Valutazione trasparente', 'Feedback specifico', 'Funziona bene per compiti complessi'] }, { title: 'Rubrica olistica', description: 'Fornisce un unico giudizio complessivo. Più rapida da applicare, ma meno diagnostica per la revisione o la valutazione tra pari.', points: ['Valutazione più rapida', 'Utile per verifiche rapide', 'Feedback meno dettagliato'] }] },
    { type: 'tip', html: '<strong>Scrivi i descrittori basandoti sulle prove, non sugli aggettivi.</strong> Invece di "analisi eccellente", scrivi ciò che fa un\'analisi eccellente: collega le prove alla tesi, affronta i limiti e spiega perché le prove sono importanti.' },
    { type: 'title', text: 'Come convalidare una rubrica ponderata', level: 3 },
    { type: 'paragraph', html: 'I pesi comunicano le priorità. Un criterio che vale il 40% orienta lo sforzo dello studente in modo diverso rispetto a uno che vale il 10%. Il totale in tempo reale in questo strumento è intenzionalmente rigoroso: la rubrica è bilanciata solo quando la somma è esattamente il 100%. Se il totale è inferiore al 100%, una parte del voto non è definita. Se supera il 100%, il modello promette punti in più e crea confusione.' },
    { type: 'summary', title: 'Un flusso di lavoro pratico per le rubriche', items: ['Inizia con i risultati di apprendimento prima di scrivere le righe.', 'Limita la matrice ai criteri che influenzeranno effettivamente il feedback.', 'Redigi i descrittori in un linguaggio semplice e osservabile.', 'Verifica la ponderazione al 100% prima di condividere la rubrica.', 'Esporta in CSV quando hai bisogno di configurare un foglio di calcolo o un LMS.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
