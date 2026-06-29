import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactieve-flashcard-generator' as const;
const title = 'Interactieve Flashcards Generator & Studiedeck';
const description = 'Verbeter uw studiesessies met actieve herinnering en gespreide herhaling. Maak aangepaste flashcards, studeer met 3D-kaartflips en exporteer/importeer decks.';

const faqItems = [
  { question: 'Wat is actieve herinnering?', answer: 'Actieve herinnering is een leerprincipe waarbij je je geheugen test door actief informatie op te roepen, in plaats van passief aantekeningen te herlezen.' },
  { question: 'Hoe werkt gespreide herhaling?', answer: 'Gespreide herhaling is een methode waarbij je moeilijke kaarten vaker en makkelijke kaarten minder vaak herhaalt over toenemende tijdsintervallen om retentie te optimaliseren.' },
  { question: 'Hoe kan ik mijn flashcards opslaan?', answer: 'U kunt uw deck exporteren als een JSON-bestand. Om later verder te studeren, uploadt u dit bestand via de knop Importeren.' },
  { question: 'Wat doen de Easy, Medium en Hard scores?', answer: 'Ze helpen u te bepalen hoe goed u de kaart onthouden heeft. In een Leitner-systeem worden moeilijke kaarten vaker herhaald.' },
];

const howToItems = [
  { name: 'Kaart maken', text: 'Voer de vraag in op de voorkant en het antwoord op de achterkant, en klik op Kaart toevoegen.' },
  { name: 'Deck bekijken', text: 'Klik op een kaart in de viewer om deze om te draaien en het antwoord te zien.' },
  { name: 'Geheugen beoordelen', text: 'Beoordeel hoe makkelijk u het antwoord herinnerde met de knoppen Makkelijk, Gemiddeld of Moeilijk.' },
  { name: 'Sessie opslaan', text: 'Gebruik de knop Exporteren om uw deck te downloaden zodat u het later weer kunt laden.' },
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
    cardCreator: 'Flashcards Maker',
    questionLabel: 'Voorkant (Vraag)',
    answerLabel: 'Achterkant (Antwoord)',
    addCard: 'Kaart toevoegen',
    questionPlaceholder: 'bijv., Wat is de hoofdstad van Frankrijk?',
    answerPlaceholder: 'bijv., Parijs',
    reviewMode: 'Studiesessie',
    cardIndex: 'Kaart',
    flipCard: 'Klik om om te draaien',
    nextCard: 'Volgende',
    prevCard: 'Vorige',
    easy: 'Makkelijk',
    medium: 'Gemiddeld',
    hard: 'Moeilijk',
    resetSession: 'Voortgang resetten',
    importExport: 'Deckbeheer',
    importDeck: 'JSON importeren',
    exportDeck: 'JSON exporteren',
    exportSelected: 'Selectie exporteren',
    exportAll: 'Alles exporteren',
    emptyDeckWarning: 'Uw deck is leeg. Maak een kaart of importeer een deck om te beginnen met studeren.',
    sampleQuestion1: 'Wat is actieve herinnering?',
    sampleAnswer1: 'Een leertechniek waarbij het geheugen tijdens het leerproces actief wordt gestimuleerd.',
    sampleQuestion2: 'Wie formuleerde de vergeetcurve-hypothese?',
    sampleAnswer2: 'Hermann Ebbinghaus, die het exponentiële karakter van het vergeten van informatie in de loop van de tijd bestudeerde.',
    aiPromptGenerator: 'AI Flashcard-assistent',
    aiTopicsLabel: 'Voer uw examenonderwerpen of notities in',
    aiTopicsPlaceholder: 'bijv., Wiskunde-examen over afgeleiden, integralen en limieten...',
    generatePromptBtn: 'AI-prompt genereren',
    aiPromptOutputLabel: 'Kopieer deze prompt naar ChatGPT/Gemini',
    copyPromptBtn: 'Kopiëren naar klembord',
    selectAll: 'Alles selecteren',
    deleteCategory: 'Categorie verwijderen',
    deleteConfirmMsg: 'Weet u zeker dat u deze categorie en alle bijbehorende kaarten wilt verwijderen?',
    cancel: 'Annuleren',
    delete: 'Verwijderen',
    pasteJsonTitle: 'Flashcard-JSON plakken',
    pasteJsonPlaceholder: 'Plak hier de door AI gegenereerde JSON...',
    importBtn: 'Importeren',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Optimaliseer uw studiestrategie met actieve herinnering en herhaling', level: 2 },
    { type: 'paragraph', html: 'Flashcards zijn erkend als een van de meest effectieve hulpmiddelen voor langetermijnbehoud van kennis. Door actieve herinnering te combineren met gestructureerd scoren, kunt u zwakke plekken snel identificeren.' },
    { type: 'title', text: 'Actieve herinnering versus passief leren', level: 3 },
    { type: 'paragraph', html: 'Veel studenten herlezen simpelweg hun boeken. Cognitieve wetenschap toont aan dat echt leren pas gebeurt wanneer u uw hersenen dwingt om informatie actief op te halen.' },
    { type: 'table', headers: ['Studiemethode', 'Cognitieve Betrokkenheid', 'Retentiegraad', 'Best geschikt voor'], rows: [
      ['Interactieve Flashcards', 'Hoog (Actief)', 'Uitstekend', 'Vocabulaire, formules, concepten, data.'],
      ['Samenvattingen schrijven', 'Medium (Synthese)', 'Matig', 'Begrijpen van complexe structuren.'],
      ['Aantekeningen herlezen', 'Laag (Passief)', 'Slecht', 'Eerste kennismaking met nieuwe stof.'],
    ] },
    { type: 'title', text: 'Voor- en nadelen van studeren met flashcards', level: 3 },
    {
      type: 'proscons',
      title: 'Vergelijking van voordelen en beperkingen',
      items: [
        { pro: 'Dwingt tot actieve mentale herinnering in plaats van passieve herkenning.', con: 'Het maken van kaarten kan aanvankelijk veel tijd kosten.' },
        { pro: 'Identificeert direct specifieke kennislacunes.', con: 'Minder geschikt voor diepgaande complexe theorieën.' },
        { pro: 'Zeer draagbaar en aanpasbaar voor elk vak.', con: 'Vereist regelmatige studiediscipline voor maximaal effect.' }
      ]
    },
    { type: 'title', text: 'Flashcards maken met behulp van AI', level: 3 },
    { type: 'paragraph', html: 'Het handmatig maken van decks kan tijdrovend zijn. Met onze <strong>AI-assistent</strong> zet u examenstof direct om in JSON-decks. Voer uw onderwerpen in, kopieer de prompt en plak deze in ChatGPT of Gemini om het JSON-bestand te genereren.' },
    { type: 'title', text: 'Samen studeren: Selectief delen en samenvoegen', level: 3 },
    { type: 'paragraph', html: 'Samen studeren is productiever door taken te verdelen. Onze beheerder laat u alleen de gewenste categorieën exporteren. Bij het importeren worden nieuwe kaarten **samengevoegd** (merge) zonder de bestaande geschiedenis van uw klasgenoot te wissen.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
