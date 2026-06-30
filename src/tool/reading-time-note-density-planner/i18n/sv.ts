import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'planeringsverktyg-las-och-noteringstid' as const;
const title = 'Läs och noteringstidsplanerare';
const description = 'Uppskatta hur lång tid din akademiska läsning tar när anteckningar räknas med, och dela upp arbetet i praktiska studiepass.';

const faqItems = [
  { question: 'Varför påverkar anteckningar lästiden så mycket?', answer: 'Akademisk läsning handlar sällan om att bara ögna igenom ord. Varje understrykning, sammanfattning, marginalanteckning eller studiekort tar tid att bearbeta. Genom att planera noteringstiden separat undviker du att en optimistisk tidsuppskattning per sida leder till nattmangling.' },
  { question: 'Vad är en rimlig uppskattning av sidor per timme?', answer: 'För tunga läroböcker är 15 till 25 sidor per timme vanligt. För mer lättlästa texter kan 30 till 50 sidor per timme vara realistiskt. Om materialet innehåller formler, källtexter eller nya facktermer bör du börja lägre och justera efter ditt första klockade studiepass.' },
  { question: 'Hur ska jag välja noteringstid per sida?', answer: 'Räkna med 1 till 2 minuter per sida för enkla understrykningar eller en snabb sammanfattning, 3 till 5 minuter per sida för Cornell-anteckningar, och mer än 5 minuter per sida om du skapar studiekort, löser räkneexempel eller skriver längre sammanfattningar.' },
  { question: 'Kan den här planeraren ersätta schemat i kursplanen?', answer: 'Nej. Den hjälper dig att omvandla läsmängd till tid och studiepass, men inlämningar, seminarier, laborationer och repetitioner måste fortfarande läggas in i din vanliga kalender.' },
];

const howToItems = [
  { name: 'Ange läsmängd', text: 'Skriv in antalet sidor eller motsvarande mängd text du behöver läsa.' },
  { name: 'Ange tillgänglig tid', text: 'Skriv in det totala antalet minuter du realistiskt kan avsätta före deadline.' },
  { name: 'Uppskatta läshastighet och noteringstid', text: 'Välj en hastighet i sidor per timme och den genomsnittliga tid du räknar med att lägga på anteckningar per sida.' },
  { name: 'Dela upp i studiepass', text: 'Välj antal studiepass för att se sidor, minuter och anteckningstid för varje enskilt pass.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'SEK' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Sidor att läsa',
    minutesLabel: 'Tillgängliga minuter',
    speedLabel: 'Läshastighet, sidor/timme',
    densityLabel: 'Noteringstid, minuter/sida',
    sessionsLabel: 'Studiepass',
    totalTimeLabel: 'Total arbetsmängd',
    readingTimeLabel: 'Läsning',
    noteTimeLabel: 'Anteckningar',
    coverageLabel: 'Tidstäckning',
    pagesSessionLabel: 'Sidor/pass',
    minutesSessionLabel: 'Minuter/pass',
    notesSessionLabel: 'Noteringsminuter/pass',
    controlsAriaLabel: 'Inställningar för läsplanering',
    minuteUnit: 'min',
    hourUnit: 'tim',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser & Akademiska Resurser',
    statusLabels: {
      comfortable: 'Hållbar plan',
      tight: 'Knapp men möjlig',
      overloaded: 'Tidsplan överbelastad',
    },
    resetButton: 'Återställ',
  },
  seo: [
    { type: 'title', text: 'Planera din lästid efter anteckningar och inte bara sidor', level: 2 },
    { type: 'paragraph', html: 'Många studenter uppskattar lästid genom att dela sidor med en ungefärlig läshastighet, och glömmer då bort den största dolda kostnaden: anteckningarna. Ett kapitel på fyrtio sidor kan ta nittio minuter om du bara skumläser det, eller tre timmar om du antecknar, sammanfattar och skapar instuderingsfrågor. Den här planeraren skiljer på läshastighet och noteringstid så att din planering speglar det faktiska studiearbetet.' },
    { type: 'diagnostic', variant: 'info', title: 'När din läsplanering troligen är alltför optimistisk', html: '<ul><li>Din tillgängliga tid täcker bara ren läsning, inte anteckningar eller övningsuppgifter.</li><li>Du använder samma uppskattning av sidor per timme för skönlitteratur, läroböcker, vetenskapliga artiklar och rättsfall.</li><li>Dina pass är längre än din normala uppmärksamhetsspännvidd, vilket gör att kvaliteten på anteckningarna på de sista sidorna sjunker.</li><li>Din deadline inkluderar andra inlämningar, men läsplanen förutsätter att varje ledig minut kan läggas på ett enda ämne.</li></ul>' },
    { type: 'title', text: 'Att välja en realistisk läshastighet per timme', level: 3 },
    { type: 'table', headers: ['Typ av material', 'Startfart', 'Planeringsråd'], rows: [['Snabb repetition eller bekant innehåll', '40-60 sidor/timme', 'Använd endast om du redan behärskar facktermerna och läser för att friska upp minnet, inte för att lära in nytt.'], ['Standardkapitel i lärobok', '20-35 sidor/timme', 'Minska hastigheten om kapitlet innehåller räkneexempel, diagram eller sammanfattande frågor i slutet av avsnitten.'], ['Svår teoretisk text, forskningsartikel eller urkund', '8-20 sidor/timme', 'Planera in långsammare pass och lägg till tid för repetition, eftersom djup förståelse oftast kräver omläsning.']] },
    { type: 'tip', html: '<strong>Kalibrera efter första passet.</strong> Klocka hur lång tid det tar att läsa och anteckna de första tio sidorna. Om planeraren visar att schemat är hållbart men det praktiska testet visar motsatsen, lita på praktiken och sänk din uppskattade hastighet.' },
    { type: 'title', text: 'Vad som menas med noteringstid per sida', level: 3 },
    { type: 'paragraph', html: 'Noteringstid per sida är den genomsnittliga tid du lägger på att bearbeta informationen under eller efter läsningen. En enkel metod är att bara stryka under och skriva ett stödord i marginalen. En mer tidskrävande metod är Cornell-anteckningar, korta sammanfattningar, frågelistor eller studiekort. Rätt metod beror på examinationsform: flervalsfrågor gynnas av studiekort, uppsatsskrivande av argumentationsskisser, och beräkningsämnen av lösta uppgifter.' },
    { type: 'comparative', title: 'Enkla anteckningar vs djup bearbetning', columns: 2, items: [{ title: 'Enkla anteckningar', description: 'Går fortare att bli klar, användbart för översiktsläsning, men informationen glöms bort snabbare och det är svårare att repetera från dem senare.', points: ['Bäst för kända ämnesområden', 'Mindre arbetsinsats direkt', 'Sämre underlag för repetition'] }, { title: 'Djup bearbetning', description: 'Tar längre tid, men är den bästa metoden inför tentor, seminarier och uppsatser där faktauppgifter måste kommas ihåg exakt.', highlight: true, points: ['Rekommenderas inför tentor', 'Mer arbetsinsats direkt', 'Mycket bra studiematerial'] }] },
    { type: 'summary', title: 'En praktisk planeringsregel', items: ['Försök hålla vanliga läspass under 75 minuter.', 'Om anteckningarna tar mer tid än själva läsningen, dela upp uppgiften: läs först, sammanfatta senare.', 'Spara det sista passet till repetition istället för att lägga till nya sidor ända fram till deadline.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
