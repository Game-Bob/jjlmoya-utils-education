import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'studieomdome-gpa-analyser' as const;
const title = 'GPA parser & räknare för studieutdrag';
const description = 'Beräkna ditt sammanlagda GPA och viktade betygssnitt direkt genom att kopiera och klistra in den oredigerade texten från ditt studieutdrag. Fungerar helt offline.';

const faqItems = [
  {
    question: 'Hur fungerar den automatiska inläsningen?',
    answer: 'Den skannar den inklistrade texten rad för rad och delar upp den i kolumner baserat på mellanslag, tabulatorer eller skiljetecken. Därefter analyseras värdena för att automatiskt identifiera vilken kolumn som innehåller kursnamn, betyg och högskolepoäng.'
  },
  {
    question: 'Är mina studieuppgifter säkra?',
    answer: 'Ja, helt och hållet. Inläsningen och GPA-beräkningarna sker helt lokalt i webbläsaren på din enhet. Ingen data skickas till någon server, vilket håller ditt studieutdrag 100 % privat.'
  },
  {
    question: 'Vad händer om kolumnerna matchas felaktigt?',
    answer: 'Det kan du enkelt justera själv. Varje kolumn i den identifierade tabellen har en rullgardinsmeny i rubriken där du manuellt kan välja om kolumnen representerar kursnamn, betyg, högskolepoäng eller ska ignoreras.'
  },
  {
    question: 'Stöder den bokstavsbetyg och olika betygsskalor?',
    answer: 'Ja, den stöder både standardiserade bokstavsbetyg (A, B, C, D, F) och numeriska skalor (0-10, 0-20, 0-100). Du kan konfigurera den maximala skalan så att den matchar din högskolas system.'
  }
];

const howToItems = [
  {
    name: 'Kopiera ditt studieutdrag',
    text: 'Gå till din studentportal eller betygssida, markera texten och kopiera den.'
  },
  {
    name: 'Klistra in texten',
    text: 'Klistra in den kopierade texten i textfältet i detta verktyg.'
  },
  {
    name: 'Kontrollera och matcha',
    text: 'Granska den automatiskt genererade tabellen. Justera kolumnernas roller med hjälp av rubrikerna vid behov.'
  },
  {
    name: 'Se ditt GPA',
    text: 'Se ditt beräknade viktade GPA och dina totala högskolepoäng direkt längst ner.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Klistra in ditt studieutdrag här',
    pasteAreaPlaceholder: 'Klistra in text kopierad från Moodle, Canvas eller universitetets betygssida...',
    parsedTitle: 'Inlästa betygsuppgifter',
    columnSelect: 'Matcha kolumn',
    subjectName: 'Kurs-/ämnesnamn',
    grade: 'Betyg',
    credits: 'Högskolepoäng',
    ignore: 'Ignorera',
    gpaResult: 'Sammanlagt GPA',
    totalCredits: 'Totala högskolepoäng',
    emptyState: 'Klistra in dina betygsuppgifter ovan för att förhandsgranska och redigera rader här.',
    scaleLabel: 'Betygsskalans gräns',
    customScale: 'Maximal betygsskala',
    exampleSubject: 'Envariabelanalys',
    newSubjectPlaceholder: 'Ny kurs',
    clearBtn: 'Rensa text',
    errorFormat: 'Det gick inte att identifiera några tydliga kolumner. Försök att kopiera och klistra in en tabell eller ett listformat.'
  },
  seo: [
    { type: 'title', text: 'Så här läser du in och beräknar GPA från ett studieutdrag', level: 2 },
    { type: 'paragraph', html: 'Att beräkna ditt betygssnitt ska inte kräva att du manuellt matar in dussintals kurser. Detta verktyg extraherar data från inklistrad råtext för att direkt beräkna ditt GPA.' },
    { type: 'title', text: 'Varför använda en automatisk inläsare för studieutdrag?', level: 3 },
    { type: 'paragraph', html: 'Universitetsportaler formaterar ofta betygsrapporter i komplexa HTML-tabeller. Genom att kopiera och klistra in dem direkt i det här verktyget kan vår motor automatiskt utvinna kurser, betyg och högskolepoäng direkt utan inmatningsfel.' },
    { type: 'title', text: 'Säkert, privat och snabbt', level: 3 },
    { type: 'paragraph', html: 'Eftersom inläsningsmotorn körs lokalt i JavaScript lämnar dina studieuppgifter aldrig webbläsaren. Du kan läsa in sidor med hundratals rader på några millisekunder.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
