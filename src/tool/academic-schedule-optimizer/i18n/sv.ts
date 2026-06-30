import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'schema-optimerare' as const;
const title = 'Schemaoptimerare för studier';
const description = 'Skapa ett visuellt veckoschema för dina lektioner, färgkoda ämnen, upptäck krockar i schemat och exportera ditt schema som en .ics-kalenderfil.';

const faqItems = [
  {
    question: 'Hur fungerar krockdetektorn?',
    answer: 'Varje lektionsblock har en tilldelad dag, starttid och längd. Verktyget jämför varje block med varandra och markerar dem om de ligger på samma dag och deras tidsintervall överlappar.'
  },
  {
    question: 'Kan jag flytta lektioner direkt i kalendern?',
    answer: 'Ja. Dra ett lektionsblock till kolumnen för en annan dag för att testa en ny veckolayout. Krockstatusen uppdateras direkt efter att du har släppt blocket.'
  },
  {
    question: 'Vad ingår i .ics-exporten?',
    answer: 'Exporten skapar en standard iCalendar-fil där varje lektion är inlagd som en händelse med ämne, sal, starttid och sluttid. Du kan importera den till de flesta kalenderappar.'
  },
  {
    question: 'Varför ska jag färgkoda ämnen?',
    answer: 'Färger gör ett tätt schema lättare att läsa av. Använd olika färger för laborationer, föreläsningar, seminarier eller krävande ämnen så att krockar och intensiva dagar syns direkt.'
  }
];

const howToItems = [
  { name: 'Lägg till lektionsdetaljer', text: 'Ange ämne, sal, dag, starttid, längd och färg.' },
  { name: 'Placera block i veckorutnätet', text: 'Använd de skapade blocken för att se hur varje lektion passar in i ditt veckoschema.' },
  { name: 'Lös krockar', text: 'Leta efter markerade krockblock och flytta eller redigera lektionerna tills panelen för krockar är tom.' },
  { name: 'Exportera din kalender', text: 'Ladda ner .ics-filen och importera den till Google Kalender, Apple Kalender, Outlook eller en annan kalenderapp.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Ämne',
    roomLabel: 'Sal',
    dayLabel: 'Dag',
    startLabel: 'Starttid',
    durationLabel: 'Längd',
    colorLabel: 'Färg',
    addClass: 'Lägg till lektion',
    saveClass: 'Spara lektion',
    newClass: 'Ny lektion',
    exportICS: 'Exportera .ics',
    conflictLabel: 'Schemakrockar',
    noConflicts: 'Inga överlappningar upptäckta',
    removeLabel: 'Ta bort lektion',
    editHint: 'Välj en lektion för att redigera den, eller dra den till en annan dag och tid.',
    weekendDaysLabel: 'Helgdagar',
    saturdayLabel: 'Lördag',
    sundayLabel: 'Söndag',
    weekDayLabels: ['Mån', 'Tis', 'Ons', 'Tor', 'Fre'],
    weekendDayShortLabels: ['Lör', 'Sön'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 tim', '2 tim', '3 tim'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Analys',
    defaultRoom: 'Sal 204',
    defaultNewSubject: 'Ny lektion',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Analys', room: 'Sal 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Litteratur', room: 'Lab B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Fysik', room: 'Aula', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'studieschema.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'krock',
    overlapPlural: 'krockar',
    detectedLabel: 'upptäckt(a)',
    classEditorAriaLabel: 'Lektionsredigerare',
    weeklyScheduleAriaLabel: 'Veckoschema',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser & Kalenderstandarder',
  },
  seo: [
    { type: 'title', text: 'Så skapar du ett veckoschema för studier som faktiskt fungerar', level: 2 },
    { type: 'paragraph', html: 'Ett bra schema gör mer än att bara lista lektioner. Det visar var din vecka är överbelastad, vilka dagar som är splittrade av håltimmar och om obligatoriska föreläsningar krockar. En visuell schemaoptimerare gör dessa problem synliga innan de leder till missade lektioner, stress eller felaktiga val vid kursregistreringen.' },
    { type: 'summary', title: 'Vad du bör kontrollera innan du fastställer ditt schema', items: [
      'Att inga obligatoriska lektioner överlappar på samma dag.',
      'Aktivera lördag och söndag om din skola har lektioner på helger.',
      'Använd olika färger för laborationer, föreläsningar och seminarier för snabb översikt.',
      'Undvik att lägga krävande ämnen direkt efter varandra utan återhämtningstid.',
      'Exportera det färdiga schemat till din vanliga kalenderapp.'
    ] },
    { type: 'title', text: 'Varför visuella rutnät är bättre än enkla listor', level: 3 },
    { type: 'paragraph', html: 'Enkla kurslistor döljer tidsbrist eftersom de separerar varje lektion från resten av veckan. Ett rutnät visar tätheten direkt. Du kan se om måndagen har för många schemalagda timmar, om en föreläsning blockerar en laboration, om helgkurser ändrar veckans rytm och om täta salbyten skapar stress.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Kurslista', description: 'Bra för registreringskoder, men ger dålig överblick över veckans belastning.' },
      { title: 'Veckorutnät', description: 'Bäst för att förstå rytm, håltimmar och krockar på ett överskådligt sätt.', highlight: true },
      { title: 'Endast kalenderapp', description: 'Användbar efter planering, men långsammare när du vill testa olika alternativ.' }
    ] },
    { type: 'title', text: 'Hur krockdetektering fungerar', level: 3 },
    { type: 'paragraph', html: 'Två lektioner krockar när de ligger på samma dag och deras tidsintervall överlappar. Till exempel överlappar en föreläsning mellan 10:00 och 12:00 med ett seminarium mellan 11:00 och 13:00, eftersom båda upptar timmen mellan 11 och 12. Verktyget kontrollerar varje block mot alla andra och markerar båda sidor av en krock.' },
    { type: 'table', headers: ['Lektion A', 'Lektion B', 'Resultat'], rows: [
      ['Måndag 09:00-11:00', 'Måndag 11:00-13:00', 'Ingen krock eftersom den ena slutar när den andra börjar.'],
      ['Tisdag 10:00-12:00', 'Tisdag 11:00-13:00', 'Krock eftersom tidsintervallen överlappar varandra.'],
      ['Onsdag 09:00-11:00', 'Torsdag 09:00-11:00', 'Ingen krock eftersom det är olika dagar.']
    ] },
    { type: 'title', text: 'Använd färgkodning som planeringsverktyg', level: 3 },
    { type: 'paragraph', html: 'Färg är inte bara dekoration. Den kan visa typ av lektion, svårighetsgrad, campus eller energinivå. Ett konsekvent färgschema gör schemat lättare att läsa av under stress, särskilt när du jämför olika studiealternativ under kursregistreringen.' },
    { type: 'tip', html: '<strong>Håll färgkodningen konsekvent.</strong> Använd till exempel en färg för laborationer, en annan för föreläsningar och en varningsfärg för lektioner som kräver längre resor eller mycket förberedelse.' },
    { type: 'title', text: 'Exportera till kalenderappar', level: 3 },
    { type: 'paragraph', html: '.ics-formatet är standarden för att utbyta kalenderinformation (iCalendar). Genom att exportera ditt schema kan du importera dina lektioner till Google Kalender, Apple Kalender, Outlook och många andra kalendersystem. Efter importen kan du lägga till påminnelser, restid, upprepningar och egna studiepass.' },
    { type: 'diagnostic', variant: 'warning', title: 'Före import', html: 'Kontrollera att veckans startdatum stämmer med veckan du vill importera till, granska tidszonerna i din kalenderapp och se till att de importerade lektionerna inte skapar dubbletter av befintliga scheman.' },
    { type: 'title', text: 'Ett praktiskt arbetsflöde för kursregistrering', level: 3 },
    { type: 'list', items: [
      'Lägg till obligatoriska kurser först och lös stora krockar innan du lägger till valbara ämnen.',
      'Aktivera lördag eller söndag om din skola har helgundervisning.',
      'Använd färg för att skilja på föreläsningar, laborationer, seminarier och självstudier.',
      'Dra block mellan dagar för att snabbt jämföra olika schemaalternativ.',
      'Lämna utrymme för måltider, restid och återhämtning.',
      'Exporteera först när panelen för schemakrockar är helt tom.'
    ] },
    { type: 'message', title: 'Planering är en process', html: 'Se den första versionen som ett utkast. Det bästa schemat växer oftast fram efter att du har testat olika krockar, jämfört lektionsformat och kontrollerat att veckans rytm känns hållbar.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
