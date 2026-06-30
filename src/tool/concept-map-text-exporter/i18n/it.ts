import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'mappa-concettuale-testo' as const;
const title = 'Creatore di mappe concettuali';
const description = 'Trasforma le note con rientro in una mappa concettuale interattiva con nodi trascinabili, rami comprimibili, controlli di zoom ed esportazione in SVG o PNG.';

const faqItems = [
  { question: 'Che tipo di testo posso incollare nel generatore di mappe concettuali?', answer: 'Utilizza una struttura semplice: un\'idea per riga, con rientro per i sottoargomenti. Sono accettati elenchi puntati, numerati, tabulazioni e spazi, per cui le note copiate da documenti, riassunti di lezioni o app di studio possono essere convertite senza riformattazione manuale.' },
  { question: 'Come devo formattare il rientro per ottenere la mappa concettuale più pulita?', answer: 'Inserisci l\'argomento centrale nella prima riga, quindi fai rientrare le idee secondarie sotto di esso. Mantieni le idee dello stesso livello allineate allo stesso livello di rientro. Se un nodo appare sotto il genitore sbagliato, il livello di rientro è quasi sempre la cosa da correggere.' },
  { question: 'Posso spostare i nodi dopo che la mappa è stata generata?', answer: 'Sì. Trascina qualsiasi nodo sul canvas per migliorare la spaziatura, separare i rami densi o enfatizzare una relazione. Puoi anche spostare il canvas, ingrandire o rimpicciolire e ridurre i rami prima di esportare.' },
  { question: 'Qual è la differenza tra l\'esportazione SVG e PNG?', answer: 'L\'SVG è modificabile e si adatta perfettamente agli editor vettoriali, alle diapositive e ai documenti. Il PNG è un\'immagine fissa che è più facile da caricare su piattaforme scolastiche, messaggi, fogli di lavoro e schede di ripasso rapido.' },
  { question: 'Questo strumento deduce automaticamente i collegamenti incrociati?', answer: 'No. Costruisce una gerarchia dal rientro. Ciò mantiene l\'output prevedibile, ma i collegamenti laterali come cause, contrasti o cicli di feedback devono essere rivisti manualmente dopo l\'esportazione in SVG.' },
];

const howToItems = [
  { name: 'Incolla o scrivi una struttura', text: 'Inserisci un concetto per riga e fai rientrare le idee figlie sotto l\'argomento padre.' },
  { name: 'Controlla la struttura generata', text: 'Usa il canvas interattivo per verificare se la gerarchia corrisponde a come dovrebbe essere studiato l\'argomento.' },
  { name: 'Disponi il canvas', text: 'Trascina i nodi, comprimi i rami affollati e zooma finché il raggruppamento visivo non è chiaro.' },
  { name: 'Esporta per il materiale di studio', text: 'Scarica SVG per le modifiche o PNG per una condivisione rapida, fogli di lavoro e presentazioni.' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'Struttura con rientro',
    sampleButton: 'Carica esempio',
    clearButton: 'Cancella',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Ingrandisci',
    zoomOut: 'Rimpicciolisci',
    resetView: 'Reimposta vista',
    exportSvg: 'Esporta SVG',
    exportPng: 'Esporta PNG',
    collapseBranch: 'Comprimi ramo',
    expandBranch: 'Espandi ramo',
    emptyStateTitle: 'Nessun concetto ancora',
    emptyStateText: 'Scrivi un\'idea per riga e fai rientrare i sottoargomenti per creare la mappa.',
    nodeCount: 'concetti',
    depthCount: 'livelli',
    branchCount: 'collegamenti',
    levelPrefix: 'L',
    untitledNodeLabel: 'Senza titolo',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'mappa-concettuale.svg',
    pngFilename: 'mappa-concettuale.png',
    sampleOutline: `Progetto di ricerca
  Domanda
    Quale problema viene studiato?
    Chi è interessato?
  Prove
    Fonti primarie
    Articoli accademici
    Set di dati
  Metodo
    Piano di campionamento
    Fasi di analisi
  Conclusione
    Risultato principale
    Limitazioni
    Prossima domanda di ricerca`,
    faqTitle: 'Domande frequenti',
    bibliographyTitle: 'Riferimenti e risorse accademiche',
  },
  seo: [
    { type: 'title', text: 'Converti le note con rientro in una mappa concettuale', level: 2 },
    { type: 'paragraph', html: 'Una mappa concettuale è utile quando un argomento non è più solo un elenco di fatti. Mostra quali idee sono centrali, quali dettagli le supportano e dove uno studente potrebbe confondere categorie, esempi, cause e conseguenze. Questo generatore è progettato per le note che gli studenti hanno già: incolla una struttura con rientro, regola la gerarchia, quindi utilizza il canvas interattivo per disporre una mappa visiva pronta per lo studio.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'riga per concetto' }, { value: '2+', label: 'livelli di rientro supportati' }, { value: 'SVG', label: 'esportazione modificabile' }, { value: 'PNG', label: 'esportazione condivisibile' }] },
    { type: 'diagnostic', variant: 'info', title: 'Miglior formato di input per una mappatura accurata', html: '<ul><li>Inserisci l\'argomento principale nella sua riga in alto.</li><li>Fai rientrare i sottoargomenti sotto l\'idea che spiegano, supportano, definiscono o esemplificano.</li><li>Mantieni le idee dello stesso livello allineate allo stesso livello di rientro.</li><li>Usa elenchi puntati o numerati se preferisci; i marcatori comuni vengono rimossi automaticamente.</li><li>Mantieni le etichette dei nodi brevi e descrittive. Le spiegazioni complete appartengono alle tue note, non all\'interno di ogni nodo.</li></ul>' },
    { type: 'title', text: 'Come diagnosticare una mappa concettuale disordinata', level: 3 },
    { type: 'table', headers: ['Cosa vedi', 'Causa probabile', 'Come risolverlo'], rows: [['Un dettaglio appare sotto l\'argomento sbagliato', 'Il livello di rientro è troppo superficiale o troppo profondo.', 'Sposta la riga a sinistra o a destra finché non si trova sotto l\'idea padre corretta.'], ['La mappa è molto larga', 'Troppe idee sono collocate allo stesso livello.', 'Raggruppa gli elementi correlati sotto un nodo di categoria più chiaro.'], ['La mappa è difficile da studiare', 'Le etichette dei nodi sono scritte come frasi complete.', 'Accorcia le etichette in parole chiave o domande.'], ['Mancano relazioni importanti', 'La struttura è gerarchica ma l\'argomento ha collegamenti incrociati.', 'Esporta in SVG e aggiungi collegamenti laterali manualmente in un editor, se necessario.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Mappa concettuale', description: 'Ideale per mostrare le relazioni tra idee, prerequisiti, cause, prove e categorie.', highlight: true, points: ['Incentrata sulle relazioni', 'Ottima per il ripasso', 'Utile per spiegare un argomento a voce alta'] }, { title: 'Struttura', description: 'Ideale per note ordinate, struttura di saggi, sequenze di lezioni, procedure e materiale cronologico.', points: ['Rapida da scrivere', 'Facile da scansionare', 'Gestisce bene i dettagli lunghi'] }, { title: 'Mappa mentale', description: 'Ideale per il brainstorming di ampie associazioni prima che la struttura dell\'argomento sia completamente nota.', points: ['Esplorazione creativa', 'Raggruppamento libero', 'Gerarchia meno rigida'] }] },
    { type: 'tip', html: '<strong>Usa la compressione come strumento di rievocazione attiva.</strong> Comprimi un ramo, ripeti a memoria i dettagli nascosti, quindi espandilo per verificare cosa hai dimenticato. Questo trasforma la mappa da un diagramma passivo in uno stimolo per il ripasso.' },
    { type: 'title', text: 'Flussi di studio che beneficiano della mappatura visiva', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Ripasso per l\'esame', description: 'Costruisci la mappa attorno a probabili domande. I nodi padre dovrebbero essere prompt come cause, prove, limitazioni, definizioni o esempi.', highlight: true, points: ['Usa i rami compressi per ricordare', 'Mantieni le etichette brevi', 'Esporta in PNG per fogli di ripasso rapido'] }, { title: 'Pianificazione della ricerca', description: 'Usa la mappa per collegare una domanda di ricerca a prove, metodo, fonti, limitazioni e conclusioni.', points: ['Metti la domanda alla radice', 'Separa le prove dall\'interpretazione', 'Esporta in SVG per le modifiche'] }] },
    { type: 'message', title: 'Importante limitazione', html: 'Il rientro crea un albero, non una rete semantica completa. Se due idee appartengono a rami diversi ma si influenzano a vicenda, lo strumento non creerà quel collegamento incrociato. Tratta la mappa generata come una bozza pulita, quindi aggiungi collegamenti non gerarchici dopo l\'esportazione quando l\'argomento lo richiede.' },
    { type: 'title', text: 'Esportazione di mappe concettuali per diapositive, fogli di lavoro e editor', level: 3 },
    { type: 'paragraph', html: 'Scegli SVG quando desideri un diagramme modificabile da perfezionare in un editor vettoriale, uno strumento di presentazione o un flusso di lavoro di pubblicazione. Scegli PNG quando hai bisogno di un\'immagine affidabile per una piattaforma scolastica, un sistema di gestione dell\'apprendimento, un foglio di lavoro, una chat o una scheda di ripasso. Prima di esportare, disponi i nodi affollati, comprimi i dettagli opzionali e zooma finché la struttura delle relazioni non è leggibile alla dimensione in cui verrà utilizzata la mappa.' },
    { type: 'summary', title: 'Un flusso di lavoro pratico', items: ['Incolla una struttura approssimativa da note, bozze di IA o dispense del corso.', 'Correggi il rientro finché ogni idea figlia non si trova sotto il genitore corretto.', 'Accorcia le etichette in modo che i nodi rimangano leggibili nel canvas e nell\'immagine esportata.', 'Allontana i rami affollati trascinandoli e comprimi i dettagli non necessari nella versione finale.', 'Scarica SVG per ulteriori modifiche o PNG per la condivisione immediata.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
