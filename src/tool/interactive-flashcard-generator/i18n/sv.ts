import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = 'Interaktiv Flashcard Generator & Studie-deck';
const description = 'Förbättra dina studier med aktivt minne och spridda repetitioner. Skapa anpassade flashcards, studera med 3D-kortvändningar och exportera/importera däck.';

const faqItems = [
  { question: 'Vad är aktivt minne?', answer: 'Aktivt minne är en inlärningsprincip som innebär att du testar ditt minne genom att aktivt återkalla information, snarare än att bara läsa igenom anteckningar passivt.' },
  { question: 'Hur fungerar spridda repetitioner?', answer: 'Spridda repetitioner är en metod där du repeterar svåra kort oftare och lätta kort mer sällan över ökande tidsintervall för att optimera minnesbehållningen.' },
  { question: 'Hur sparar jag mina flashcards?', answer: 'Du kan exportera ditt deck som en JSON-fil. För att fortsätta studera senare klickar du på knappen Importera och laddar upp filen.' },
  { question: 'Vad gör poängen Lätt, Medium och Svårt?', answer: 'De hjälper dig att kategorisera hur väl du kom ihåg kortet. I ett Leitner-system repeteras svåra kort oftare för att stärka minnesspåren.' },
];

const howToItems = [
  { name: 'Skapa kort', text: 'Skriv in frågan på framsidan och svaret eller förklaringen på baksidan, och klicka sedan på Lägg till kort.' },
  { name: 'Repetera decket', text: 'Klicka på ett kort i visaren för att vända på det och se svaret.' },
  { name: 'Utvärdera minnet', text: 'Bedöm hur lätt du kom ihåg svaret med knapparna Lätt, Medium eller Svårt.' },
  { name: 'Spara sessionen', text: 'Använd knappen Exportera för att ladda ner ditt anpassade deck så att du kan läsa in det igen senare.' },
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
    cardCreator: 'Skapa Flashcards',
    questionLabel: 'Framsida (Fråga)',
    answerLabel: 'Baksida (Svar)',
    addCard: 'Lägg till kort',
    questionPlaceholder: 't.ex., Vad är huvudstaden i Frankrike?',
    answerPlaceholder: 't.ex., Paris',
    reviewMode: 'Studiesession',
    cardIndex: 'Kort',
    flipCard: 'Klicka för att vända',
    nextCard: 'Nästa',
    prevCard: 'Föregående',
    easy: 'Lätt',
    medium: 'Medium',
    hard: 'Svårt',
    resetSession: 'Återställ framsteg',
    importExport: 'Hantera deck',
    importDeck: 'Importera JSON',
    exportDeck: 'Exportera JSON',
    exportSelected: 'Exportera valda',
    exportAll: 'Exportera alla',
    emptyDeckWarning: 'Ditt deck is tomt. Skapa ett kort eller importera ett deck för att börja studera.',
    sampleQuestion1: 'Vad är aktivt minne?',
    sampleAnswer1: 'En inlärningsteknik som innebär att man aktivt stimulerar minneshämtning under inlärningsprocessen.',
    sampleQuestion2: 'Vem formulerade glömskekurvans hypotes?',
    sampleAnswer2: 'Hermann Ebbinghaus, som studerade den exponentiella karaktären hos att glömma information över tid.',
    aiPromptGenerator: 'AI Flashcard Assistent',
    aiTopicsLabel: 'Ange dina examensämnen eller anteckningar',
    aiTopicsPlaceholder: 't.ex., Matteprov som täcker derivator, integraler och gränsvärden...',
    generatePromptBtn: 'Generera AI-prompt',
    aiPromptOutputLabel: 'Kopiera denna prompt till ChatGPT/Gemini',
    copyPromptBtn: 'Kopiera till urklipp',
    selectAll: 'Välj alla',
    deleteCategory: 'Ta bort kategori',
    deleteConfirmMsg: 'Är du säker på att du vill ta bort den här kategorin och alla dess kort?',
    cancel: 'Avbryt',
    delete: 'Ta bort',
    pasteJsonTitle: 'Klistra in Flashcard-JSON',
    pasteJsonPlaceholder: 'Klistra in JSON genererad av AI här...',
    importBtn: 'Importera',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Optimera ditt lärande med aktivt minne och spridda repetitioner', level: 2 },
    { type: 'paragraph', html: 'Flashcards hjälper dig att behålla kunskaper under en längre tid. Genom att kombinera aktivt återkallande med strukturerad utvärdering kan du stänga kunskapsluckor effektivt.' },
    { type: 'title', text: 'Aktivt återkallande mot passiv inlärning', level: 3 },
    { type: 'paragraph', html: 'Många studenter nöjer sig med att läsa om texter. Kognitionsvetenskap visar att sant lärande sker när du tvingar hjärnan att aktivt hämta informationen.' },
    { type: 'table', headers: ['Studiemetod', 'Kognitivt Engagemang', 'Behållningsgrad', 'Bäst lämpad för'], rows: [
      ['Interaktiva Flashcards', 'Högt (Aktivt)', 'Utmärkt', 'Glosor, formler, nyckelbegrepp, datum.'],
      ['Sammanfatta text', 'Mellan (Syntes)', 'Måttlig', 'Förståelse av komplexa sammanhang.'],
      ['Läsa om anteckningar', 'Lågt (Passivt)', 'Dålig', 'Första kontakt med nytt material.'],
    ] },
    { type: 'title', text: 'Fördelar och nackdelar med flashcards', level: 3 },
    {
      type: 'proscons',
      title: 'Jämförelse av fördelar och begränsningar',
      items: [
        { pro: 'Tvingar fram aktiv minneshämtning istället för passiv igenkänning.', con: 'Det kan ta tid att skapa korten i början.' },
        { pro: 'Identifierar omedelbart exakta kunskapsluckor.', con: 'Mindre lämpligt för djup förståelse av mycket komplexa teorier.' },
        { pro: 'Flexibelt och anpassningsbart för alla ämnen.', con: 'Kräver regelbunden studiedisplin för optimal effekt.' }
      ]
    },
    { type: 'title', text: 'Skapa flashcards med hjälp av AI', level: 3 },
    { type: 'paragraph', html: 'Att manuellt skriva kort kan vara tidskrävande. Med vår <strong>AI-assistent</strong> omvandlar du snabbt anteckningar till JSON-filer. Ange ämnen, kopiera prompten till ChatGPT eller Gemini och importera resultatet.' },
    { type: 'title', text: 'Samstudera: Selektiv delning och sammanslagning', level: 3 },
    { type: 'paragraph', html: 'Att studera i grupp blir mer produktivt när man delar upp arbetet. Exportera endast de valda kategorierna. Vid import **slås** (merge) nya kort samman med din klasskamrats befintliga deck utan att radera hens historik.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
