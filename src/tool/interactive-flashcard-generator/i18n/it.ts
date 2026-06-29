import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'generatore-interattivo-di-flashcard' as const;
const title = 'Generatore di Flashcard Interattivo & Mazzo di Studio';
const description = 'Migliora le tue sessioni di studio con il richiamo attivo e la ripetizione spaziata. Crea flashcard personalizzate, studia con rotazioni 3D, valuta la difficoltà ed esporta/importa i mazzi.';

const faqItems = [
  { question: 'Cos\'è il richiamo attivo?', answer: 'Il richiamo attivo è un principio di apprendimento che consiste nel testare la memoria recuperando attivamente le informazioni, piuttosto che rileggendo o rivedendo passivamente gli appunti.' },
  { question: 'Come funziona la ripetizione spaziata?', answer: 'La ripetizione spaziata è un metodo in cui rivedi le carte difficili più frequentemente e le carte facili meno frequentemente a intervalli di tempo crescenti per ottimizzare la ritenzione.' },
  { question: 'Come posso salvare le mie flashcard personalizzate?', answer: 'Puoi esportare il tuo mazo come file JSON. Per riprendere lo studio in un secondo momento, fai clic sul pulsante Importa e carica quel file.' },
  { question: 'Cosa fanno i punteggi Facile, Medio e Difficile?', answer: 'Ti aiutano a categorizzare quanto bene hai ricordato la carta. In un sistema Leitner completo, le carte categorizzate come Difficile vengono riviste più spesso per rafforzare i percorsi neurali.' },
];

const howToItems = [
  { name: 'Crea una Carta', text: 'Inserisci la domanda o il concetto nel campo Fronte e la risposta o la spiegazione nel campo Retro, quindi fai clic su Aggiungi Carta.' },
  { name: 'Ripassa il Mazzo', text: 'Fai clic su qualsiasi carta nel visualizzatore per girarla e rivelare la risposta.' },
  { name: 'Valuta la tua Memoria', text: 'Valuta quanto facilmente hai ricordato la risposta utilizzando i pulsanti Facile, Medio o Difficile.' },
  { name: 'Salva la Sessione', text: 'Usa il pulsante Esporta per scaricare il tuo mazzo personalizzato in modo da poterlo ricaricare in seguito.' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: 'Creatore di Flashcard',
    questionLabel: 'Fronte (Domanda)',
    answerLabel: 'Retro (Risposta)',
    addCard: 'Aggiungi Carta',
    questionPlaceholder: 'es., Qual è la capitale della Francia ?',
    answerPlaceholder: 'es., Parigi',
    reviewMode: 'Sessione di Studio',
    cardIndex: 'Carta',
    flipCard: 'Clicca per girare',
    nextCard: 'Successivo',
    prevCard: 'Precedente',
    easy: 'Facile',
    medium: 'Medio',
    hard: 'Difficile',
    resetSession: 'Reimposta Progresso',
    importExport: 'Gestione del Mazzo',
    importDeck: 'Importa JSON',
    exportDeck: 'Esporta JSON',
    exportSelected: 'Esporta Selezionati',
    exportAll: 'Esporta Tutto',
    emptyDeckWarning: 'Il tuo mazzo è vuoto. Crea una carta o importa un mazzo per iniziare a studiare.',
    sampleQuestion1: 'Cos\'è il richiamo attivo?',
    sampleAnswer1: 'Una tecnica di apprendimento che prevede la stimolazione attiva del recupero della memoria durante il processo di apprendimento.',
    sampleQuestion2: 'Chi ha formulato l\'ipotesi della curva dell\'oblio?',
    sampleAnswer2: 'Hermann Ebbinghaus, che ha studiato la natura esponenziale dell\'oblio delle informazioni nel tempo.',
    aiPromptGenerator: 'Assistente Flashcard IA',
    aiTopicsLabel: 'Inserisci gli argomenti dell\'esame o gli appunti',
    aiTopicsPlaceholder: 'es., Esame di matematica che copre derivate, integrali e limiti...',
    generatePromptBtn: 'Genera Prompt IA',
    aiPromptOutputLabel: 'Copia questo prompt in ChatGPT/Gemini',
    copyPromptBtn: 'Copia negli Appunti',
    selectAll: 'Seleziona Tutto',
    deleteCategory: 'Elimina Categoria',
    deleteConfirmMsg: 'Sei sicuro di voler eliminare questa categoria e tutte le sue carte?',
    cancel: 'Annulla',
    delete: 'Elimina',
    pasteJsonTitle: 'Incolla JSON Flashcard',
    pasteJsonPlaceholder: 'Incolla qui il JSON generato dall\'IA...',
    importBtn: 'Importa',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Ottimizza la tua strategia di studio con il richiamo attivo e la ripetizione spaziata', level: 2 },
    { type: 'paragraph', html: 'Le flashcard sono ampiamente riconosciute come uno degli strumenti più efficaci per la memorizzazione e la ritenzione a lungo termine. Combinando il recupero attivo con un flusso di autovalutazione strutturato, puoi identificare le tue lacune, ripassare in modo efficiente e trattenere le informazioni molto più a lungo rispetto ai metodi di studio passivi.' },
    { type: 'title', text: 'Richiamo attivo vs. Metodi di studio passivi', level: 3 },
    { type: 'paragraph', html: 'Molti studenti si affidano a tecniche di revisione passiva come evidenziare il testo o rileggere i libri di testo. Anche se questi metodi sembrano produttivi, la scienza cognitiva dimostra che creano un\'illusione di competenza. Il vero apprendimento avviene quando costringi il tuo cervello a recuperare le informazioni.' },
    { type: 'table', headers: ['Metodo di Studio', 'Coinvolgimento Cognitivo', 'Tasso di Ritenzione', 'Ideale per'], rows: [
      ['Flashcard Interattive', 'Alto (Richiamo Attivo)', 'Eccellente', 'Vocabolario, formule, concetti chiave, date.'],
      ['Riassumere il testo', 'Medio (Sintesi)', 'Moderato', 'Comprendere narrazioni e argomentazioni complesse.'],
      ['Rileggere gli appunti', 'Basso (Revisione Passiva)', 'Scarso', 'Contatto iniziale con nuovi materiali.'],
    ] },
    { type: 'title', text: 'I pro e i contro dell\'apprendimento basato su flashcard', level: 3 },
    {
      type: 'proscons',
      title: 'Confronto tra vantaggi e limitazioni delle flashcard',
      items: [
        { pro: 'Forza il recupero mentale attivo invece del riconoscimento passivo.', con: 'La creazione iniziale può richiedere molto tempo.' },
        { pro: 'Identifica immediatamente le lacune di conoscenza precise.', con: 'Non è l\'ideale per una comprensione profonda di argomenti altamente complessi.' },
        { pro: 'Altamente portatile e personalizzabile per qualsiasi materia o esame.', con: 'Richiede disciplina di studio regolare per beneficiare della ripetizione spaziata.' }
      ]
    },
    { type: 'title', text: 'Come scrivere mazzi di studio efficaci', level: 3 },
    { type: 'tip', html: '<strong>Regola dell\'Uno:</strong> Ogni flashcard deve testare esattamente una domanda o un concetto. Evita di scrivere paragrafi sul retro. Se una carta è troppo complessa, scomponila in tre o quattro carte più piccole.' },
    { type: 'title', text: 'Termini chiave e metodologie', level: 3 },
    { type: 'glossary', items: [
      { term: 'Richiamo Attivo', definition: 'Il processo di verifica attiva della memoria attraverso il recupero delle risposte, che rafforza i percorsi neurali.' },
      { term: 'Ripetizione Spaziata', definition: 'Una tecnica di apprendimento in cui le carte vengono riviste a intervalli di tempo crescenti per prevenire l\'oblio.' },
      { term: 'Sistema Leitner', definition: 'Un metodo di raggruppamento delle flashcard in scatole basato sulla cronologia delle revisioni, dando priorità alle carte più difficili.' },
      { term: 'Curva dell\'Oblio', definition: 'La rappresentazione matematica del tasso esponenziale con cui le informazioni vengono dimenticate dopo l\'apprendimento iniziale.' },
    ] },
    { type: 'title', text: 'Creazione di flashcard tramite Intelligenza Artificiale', level: 3 },
    { type: 'paragraph', html: 'Creare mazzi di studio manualmente può essere noioso. Con il nostro <strong>Assistente Flashcard IA</strong> integrato, puoi trasformare istantaneamente appunti o schemi in mazzi pronti per l\'importazione. Descrivi i tuoi argomenti, fai clic su "Genera Prompt IA", copia le istruzioni e incollale in qualsiasi modello IA (come ChatGPT, Gemini o Claude) per ottenere la struttura JSON esatta.' },
    { type: 'title', text: 'Studio collaborativo flessibile: Condivisione selettiva e fusione', level: 3 },
    { type: 'paragraph', html: 'Studiare in gruppo è più produttivo quando ci si divide il lavoro. Il nostro gestore ti consente di esportare solo le categorie che scegli. Quando un compagno importa il tuo file, il sistema **riunisce** (merge) dinamicamente le nuove categorie e carte con il suo mazzo locale invece di sovrascriverlo, evitando la perdita della cronologia di studio.' },
    { type: 'title', text: 'Riepilogo delle migliori pratiche', level: 3 },
    { type: 'summary', title: 'Riepilogo delle migliori pratiche', items: [
      'Crea categorie personalizzate per organizzare i mazzi per esami o moduli specifici.',
      'Rivedi le tue carte ogni giorno o settimana, contrassegnandole accuratamente come Facile, Medio o Difficile.',
      'Esporta e salva regolarmente i tuoi mazzi per evitare di perdere i progressi.',
      'Condividi i mazzi esportati con i compagni di classe per collaborare alla preparazione dell\'esame.'
    ] }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
