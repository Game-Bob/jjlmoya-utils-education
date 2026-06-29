import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'visualizzatore-formule-latex' as const;
const title = 'Visualizzatore Formule LaTeX';
const description = 'Visualizza istantaneamente espressioni matematiche LaTeX nel tuo browser. Scrivi qualsiasi formula e copia il risultato come immagine PNG, blocco di codice Markdown o sorgente LaTeX.';

const faqItems = [
  { question: 'Cos\'è LaTeX e perché gli studenti lo usano?', answer: 'LaTeX è un linguaggio di composizione ampiamente utilizzato in matematica, fisica e ingegneria per scrivere equazioni di qualità professionale. A differenza di Word, permette di scrivere formule complesse con controllo preciso sulla formattazione.' },
  { question: 'Devo installare qualcosa per usare questo visualizzatore?', answer: 'No. Questo strumento funziona interamente nel tuo browser grazie a KaTeX, una libreria JavaScript open source. Non è richiesto alcun server, login o installazione.' },
  { question: 'Qual è la differenza tra la modalità Blocco e In linea?', answer: 'La modalità Blocco (Display mode) renderizza la formula su una riga separata e centrata. La modalità In linea (Inline mode) la inserisce all\'interno del testo a una dimensione ridotta.' },
  { question: 'Perché la mia formula mostra un errore di sintassi?', answer: 'Gli errori di sintassi in LaTeX si verificano comunemente a causa di parentesi graffe non chiuse, nomi di comandi errati o operatori non supportati.' },
  { question: 'Posso usare questo strumento per incollare formule in Word o Notion?', answer: 'Sì. Usa "Scarica PNG" per ottenere un\'immagine ad alta risoluzione direttamente o "Copia Markdown" per un blocco di codice LaTeX pronto all\'uso.' }
];

const howToItems = [
  { name: 'Scrivi la tua espressione LaTeX', text: 'Inserisci qualsiasi espressione matematica LaTeX valida nell\'editor a sinistra. La formula viene renderizzata in tempo reale.' },
  { name: 'Scegli la modalità di rendering', text: 'Seleziona la modalità Blocco per un\'equazione centrata indipendente o In linea per una formula compatta da inserire nel testo.' },
  { name: 'Regola la dimensione del carattere', text: 'Usa il cursore della dimensione del carattere per ridimensionare l\'anteprima.' },
  { name: 'Esporta nel formato preferito', text: 'Clicca su "Scarica PNG" per ottenere un\'immagine, "Copia Markdown" per il codice o "Copia LaTeX" per l\'espressione sorgente.' }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text
  }))
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' }
};

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Visualizzatore Formule LaTeX',
    inputLabel: 'Espressione LaTeX',
    inputPlaceholder: 'es. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Blocco',
    inlineModeLabel: 'In linea',
    fontSizeLabel: 'Dimensione Carattere',
    downloadPngButton: 'Scarica PNG',
    copyMarkdownButton: 'Copia Markdown',
    copyLatexButton: 'Copia LaTeX',
    resetButton: 'Reinizializza',
    previewTitle: 'Anteprima in Tempo Reale',
    copiedToast: 'Copiato negli appunti',
    errorLabel: 'Errore di sintassi',
    emptyPreviewHint: 'Inizia a scrivere LaTeX sopra per vedere la formula qui.',
    faqTitle: 'Domande Frequenti',
    bibliographyTitle: 'Riferimenti e Risorse'
  },
  seo: [
    { type: 'title', text: 'Come scrivere e visualizzare formule matematiche nel browser', level: 2 },
    { type: 'paragraph', html: 'LaTeX è lo standard per la composizione tipografica scientifica e matematica. Questo strumento renderizza le formule all\'istante usando KaTeX senza installazione.' },
    { type: 'title', text: 'Cos\'è KaTeX e perché è la scelta migliore per il browser?', level: 3 },
    { type: 'paragraph', html: 'KaTeX è una libreria JavaScript creata da Khan Academy che visualizza formule LaTeX nel browser in modo estremamente veloce e accurato.' },
    { type: 'paragraph', html: 'Genera codice HTML e SVG pulito che si adatta a qualsiasi dimensione.' },
    { type: 'title', text: 'Casi d\'uso comuni per studenti e ricercatori', level: 3 },
    { type: 'list', items: [
      'Verificare la sintassi LaTeX delle formule prima di consegnare i compiti.',
      'Scaricare formule come PNG da incollare in Word o Notion.',
      'Convertire espressioni in blocchi di codice Markdown per GitHub o Jupyter.',
      'Visualizzare in anteprima le formule prima di inserirle in Overleaf.'
    ] },
    { type: 'title', text: 'Riferimento dei comandi matematici LaTeX essenziali', level: 3 },
    { type: 'paragraph', html: 'I comandi più comuni includono frazioni, radici, sommatorie e integrali.' },
    { type: 'title', text: 'Modalità Blocco vs In linea: quando usare ciascuna', level: 3 },
    { type: 'paragraph', html: 'La modalità Blocco centra la formula su una riga dedicata, mentre la modalità In linea la integra nel testo.' },
    { type: 'tip', html: 'Suggerimento rapido di debug: ogni parentesi graffa aperta deve avere la corrispettiva parentesi chiusa.' },
    { type: 'title', text: 'Esportare Formule: PNG vs Markdown vs LaTeX', level: 3 },
    { type: 'paragraph', html: 'L\'esportazione PNG genera un\'immagine trasparente nitida ad alta risoluzione.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
