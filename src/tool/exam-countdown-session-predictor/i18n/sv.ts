import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-swedish' as const;
const title = 'Nedräkning till tenta & Studieplanerare';
const description = 'Beräkna ditt exakta dagliga studietempo för att komma helt förberedd till tentadagen. Ange mängden studiematerial, ställ in vilodagar och skapa en anpassad studiekalender.';

const faqItems = [
  { question: 'Varför är det bättre att plugga lite varje dag än att panikplugga sista natten?', answer: 'Forskning visar att utspritt lärande (att sprida ut studietillfällena över tid) ger betydligt bättre långtidsminne och minskar tentamensångest avsevärt jämfört med att försöka pressa in allt under de sista dagarna.' },
  { question: 'Vad används repetitionspufferten till?', answer: 'Repetitionspufferten reserverar ett visst antal dagar precis före tentan enbart för repetition. Planeraren lägger inte in något nytt material under dessa dagar, vilket ger dig tid att befästa dina kunskaper.' },
  { question: 'Hur påverkar anpassade vilodagar mitt studietempo?', answer: 'När du väljer bort en dag (antingen som en återkommande ledig dag eller ett specifikt datum) fördelar planeraren det återstående materialet på de andra studiedagarna. Det höjer ditt dagliga mål något så att du fortfarande blir klar i tid.' },
  { question: 'Kan jag ändra tillbaka en vilodag till en studiedag?', answer: 'Ja. Du kan växla valfri dag i din kalender i realtid mellan vilodag och studiedag, eller ta bort specifika undantagna datum från listan för att räkna om tempot direkt.' },
];

const howToItems = [
  { name: 'Ange ditt tentadatum', text: 'Välj datumet för din kommande tenta i kalenderväljaren.' },
  { name: 'Fyll i allt material', text: 'Ange hur mycket material du ska studera, till exempel antal sidor, kapitel eller uppgifter.' },
  { name: 'Ställ in schema och repetitionspuffert', text: 'Välj dina återkommande vilodagar och ställ in en repetitionspuffert för slutrepetition.' },
  { name: 'Justera och följ upp', text: 'Växla enskilda kalenderdagar till vilodagar direkt i din tidslinje för att anpassa studierna efter ditt vardagsliv.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Studieplanerare & Nedräkning',
    examDateLabel: 'Tentadatum',
    materialLabel: 'Totalt material (Sidor / Kapitel)',
    materialUnitLabel: 'Mätenhet',
    progressLabel: 'Avklarat hittills',
    weeklyScheduleLabel: 'Studiedagar per vecka',
    reviewBufferLabel: 'Repetitionspuffert (Dagar)',
    excludedDatesLabel: 'Anpassade vilodagar',
    dailyPaceLabel: 'Dagligt studietempo',
    daysLeftLabel: 'Dagar kvar',
    studyDaysLabel: 'Studiedagar',
    bufferDaysLabel: 'Bufferdagar',
    scheduleTitle: 'Din anpassade studiekalender',
    resetButton: 'Återställ till standard',
    addExclusionButton: 'Lägg till vilodag',
    daysOfWeek: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
    dayTypes: {
      study: 'Studiedag',
      rest: 'Vilodag',
      review: 'Repetitionspuffert',
      exam: 'Tentadag',
    },
    units: {
      pages: 'Sidor',
      chapters: 'Kapitel',
      exercises: 'Uppgifter',
      modules: 'Moduler',
      topics: 'Ämnen',
    },
    noStudyDaysError: 'Du har inga tillgängliga studiedagar! Kontrollera ditt veckoschema och inställningarna för repetitionspufferten.',
    examInPastError: 'Tentadatumet måste vara i framtiden.',
    noMaterialError: 'Ange en total mängd material som är större än noll.',
    scheduleTableHeader: {
      date: 'Datum',
      day: 'Dag',
      type: 'Status',
      target: 'Dagligt mål',
      cumulative: 'Ackumulerat framsteg',
      action: 'Snabbval',
    },
    markAsRest: 'Markera som vilodag',
    markAsStudy: 'Markera som studiedag',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser & Akademiska resurser',
  },
  seo: [
    { type: 'title', text: 'Så planerar du dina studietillfällen för bästa minnesretention', level: 2 },
    { type: 'paragraph', html: 'Att förbereda sig för en tenta handlar mindre om timmarna du lägger ner sista natten och mer om hur du fördelar ditt arbete. Att hålla ett jämnt tempo är avgörande för att undvika kognitiv utmattning, förbättra minneshämtningen och se till att du går igenom allt material utan panik.' },
    { type: 'title', text: 'Vetenskapen bakom utspritt lärande och Spaced Repetition', level: 3 },
    { type: 'paragraph', html: 'Vår hjärna lär sig bäst genom spridning i tid. När du delar upp dina studier över flera veckor ger du hjärnan möjlighet att bygga starkare kopplingar genom konsolidering. Metoden motverkar mental trötthet och underlättar överföringen av kunskap från korttidsminnet till långtidsminnet.' },
    { type: 'paragraph', html: 'Enligt Ebbinghaus glömskekurva försämras minnet över tid om vi inte repeterar aktivt. Planerade repetitionstillfällen fungerar som en återställning som bromsar glömskan och ger djupare begreppsförståelse.' },
    { type: 'title', text: 'Vikten av en repetitionspuffert före provet', level: 3 },
    { type: 'paragraph', html: 'Ett vanligt misstag är att planera in nytt material ända fram till sista dagen. En särskild repetitionspuffert (vanligtvis 2 till 5 dagar före provet) ger dig tid att göra övningstentor, läsa sammanfattningar och åtgärda kunskapsluckor. Det gör också att du kan sova ordentligt inför provdagen.' },
    { type: 'title', text: 'Fördelarna med en anpassningsbar studieplan', level: 3 },
    { type: 'paragraph', html: 'Fasta studieplaner spricker nästan alltid eftersom livet är oförutsägbart. Om du hamnar efter med några sidor blir en statisk plan direkt inaktuell. En dynamisk kalkylator räknar om ditt dagliga behov i realtid, vilket tar bort stressen vid mindre bakslag.' },
    { type: 'list', items: [
      'Ange dina framsteg regelbundet för att hålla beräkningarna exakta.',
      'Justera dina lediga dagar om det uppstår oväntade krockar i din kalender.',
      'Håll ett stabilt tempo istället för att försöka ta igen stora eftersläpningar under en enskild dag.'
    ] },
    { type: 'title', text: 'Flexibilitet: Planera in vilodagar medvetet', level: 3 },
    { type: 'paragraph', html: 'Vila är ingen belöning, det är en viktig del av inlärningsprocessen. Genom att planera in vilodagar förebygger du utmattning. Planeraren fördelar automatiskt det återstående materialet på de dagar du har kvar.' },
    { type: 'tip', html: '<strong>Planera för det oväntade.</strong> Lägg alltid in minst en vilodag i veckan. Den fungerar som en säkerhetsventil. Om du blir sjuk eller får förhinder kan du använda den dagen till att komma ikapp utan att hela schemat spricker.' },
    { type: 'title', text: 'Så beräknar du ditt studietempo manuellt', level: 3 },
    { type: 'paragraph', html: 'För att beräkna ditt dagliga studietempo manuellt använder du en enkel matematisk formel. Ta reda på ditt återstående arbete genom att dra av det du redan läst från det totala målet. Räkna sedan antalet dagar kvar till tentan och dra bort dina vilodagar och repetitionspufferten. Dela till sist det återstående arbetet med antalet studiedagar.' },
    { type: 'paragraph', html: 'Exempel: Om du har 400 sidor att studera, har läst 50 sidor, har 20 dagar kvar till tentan, planerar 4 vilodagar och vill ha 2 dagars repetitionspuffert: då är ditt återstående arbete 350 sidor och antalet studiedagar 14. Ditt dagliga tempo blir 350 delat med 14, vilket är exakt 25 sidor om dagen.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
