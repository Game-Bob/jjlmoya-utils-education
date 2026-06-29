import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'finansieringskalkylator-for-universitet' as const;
const title = 'Finansieringskalkylator för Universitet';
const description =
  'Modellera den faktiska kostnaden för högskolestudier, jämför stipendiescenarier och projicera återbetalning av studentlån med en visuell tidslinje och amorteringstabell.';

const faqItems = [
  {
    question: 'Vad inkluderar denna simulator i den totala kostnaden?',
    answer:
      'Den kombinerar den årliga studieavgiften, månatliga levnadskostnader, antal studieår och det antal månader per läsår som du förväntas betala för dina levnadskostnader. Därefter drar den av stipendier och eventuella egna insatser innan lånet beräknas.',
  },
  {
    question: 'Hur beräknas den månatliga återbetalningen av studentlånet?',
    answer:
      'Verktyget använder standardformeln för ett amorteringslån. Det omvandlar den årliga räntan till en månadsränta och fördelar återbetalningen över det valda antalet år.',
  },
  {
    question: 'Kan jag använda den för räntefria familjelån eller bidrag?',
    answer:
      'Ja. Sätt räntan till 0 för att simulera en räntefri avbetalningsplan. Du kan också öka stipendiet eller den egna insatsen för att inkludera bidrag, sparande eller familjestöd.',
  },
  {
    question: 'Varför skiljer sig lånebeloppet så mycket mellan olika profiler?',
    answer:
      'Levnadskostnader ackumuleras snabbt över flera läsår. En kalkyl för en student som bor kvar hemma och en för en student som bor på campus kan ge mycket olika skuldnivåer, även om studieavgiften är densamma.',
  },
  {
    question: 'Inkluderar slutdatumet för återbetalning anstånd eller inkomstbeprövade planer?',
    answer:
      'Nej. Denna version antar att återbetalningen startar enligt en normal fast plan med lika stora månatliga inbetalningar. Den är idealisk för grundläggande planering, inte för att modellera alla specifika undantagsregler.',
  },
];

const howToItems = [
  {
    name: 'Ställ in din studieprofil',
    text: 'Använd en av snabbprofilerna eller flytta reglagen manuellt för att ange studieavgifter, levnadskostnader och stipendiepaket.',
  },
  {
    name: 'Justera finansieringsantaganden',
    text: 'Välj hur mycket du kan betala direkt, ställ sedan in räntan och återbetalningsåren för att spegla dina troliga lånevillkor.',
  },
  {
    name: 'Läs av den finansiella översikten',
    text: 'Sammanfattningskorten visar din totala bruttokostnad, lånat kapital, uppskattad månadskostnad och total ränta för att ge en snabb överblick av ekonomin.',
  },
  {
    name: 'Granska återbetalningskurvan',
    text: 'Använd diagrammet för att se hur resterande skuld, totalt betalat belopp och ackumulerad ränta utvecklas år för år.',
  },
  {
    name: 'Öppna amorteringstabellen',
    text: 'Expandera den månatliga tabellen när du behöver en detaljerad analys av kapital kontra ränta för budgetering eller familjediskussioner.',
  },
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
  applicationCategory: 'FinanceApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<UniversityFinanceSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    currency: 'Valuta',
    usdSymbol: '$',
    eurSymbol: '€',
    gbpSymbol: '£',
    jpySymbol: '¥',
    rubSymbol: '₽',
    inrSymbol: '₹',
    cnySymbol: '¥',
    krwSymbol: '₩',
    brlSymbol: 'R$',
    mxnSymbol: 'Mex$',
    chfSymbol: '₣',
    usd: 'USD',
    eur: 'EUR',
    gbp: 'GBP',
    jpy: 'JPY',
    rub: 'RUB',
    inr: 'INR',
    cny: 'CNY',
    krw: 'KRW',
    brl: 'BRL',
    mxn: 'MXN',
    chf: 'CHF',
    annualTuition: 'Årlig studieavgift',
    monthlyLivingCost: 'Månatlig levnadskostnad',
    studyYears: 'Studieår',
    studyMonthsPerYear: 'Månader med levnadskostnader per år',
    scholarshipPerYear: 'Stipendium per år',
    upfrontContribution: 'Egen insats',
    aprPercent: 'Årlig ränta',
    repaymentYears: 'Återbetalningsår',
    quickProfiles: 'Snabbprofiler',
    commuterProfile: 'Bo kvar hemma',
    balancedProfile: 'Balanserad',
    campusProfile: 'Bo på campus',
    stickerCost: 'Total studiekostnad',
    borrowedPrincipal: 'Lånat kapital',
    monthlyPayment: 'Uppskattad månadskostnad',
    totalInterest: 'Total ränta',
    projectionTitle: 'Skuldprognos',
    scheduleTitle: 'Månatlig amorteringsplan',
    chartBalance: 'Resterande skuld',
    chartPaid: 'Totalt betalat',
    chartInterest: 'Betald ränta',
    openSchedule: 'Öppna hela planen',
    closeSchedule: 'Dölj hela planen',
    monthColumn: 'Månad',
    paymentColumn: 'Betalning',
    principalColumn: 'Kapital',
    interestColumn: 'Ränta',
    balanceColumn: 'Balans',
    timelineLabel: 'Tidslinje för skuldfrihet',
    affordabilityHint:
      'Håll din prognostiserade månadskostnad i linje med din troliga nettoinkomst under det första året efter examen, inte bara med din nuvarande studentbudget.',
    debtFreeLabel: 'Skuldfri efter',
    scholarshipShare: 'Stipendietäckning',
    livingShare: 'Andel levnadskostnader',
    degreeCostLabel: 'Andel studieavgifter',
    blendedCost: 'Genomsnittlig årlig kostnad',
    totalPaid: 'Totalt återbetalat',
    averageYearlyCost: 'Genomsnittlig kostnad per år',
    plannerLabel: 'Kostnadsplanerare',
    resultsLabel: 'Finansieringsutsikter',
    assumptionsLabel: 'Låneantaganden',
    scheduleHint:
      'Detaljer månad för månad om hur varje betalning delas upp mellan kapital och ränta.',
    noDebtNeeded: 'Inga lån behövs med nuvarande inställningar',
    exactAmount: 'Exakt belopp',
    monthWord: 'Månad',
    paymentWord: 'betalning',
    principalWord: 'kapital',
    interestWord: 'ränta',
    remainingWord: 'återstående',
    perMonthSuffix: '/mån.',
    yearsSuffix: 'år',
    monthsSuffix: 'månader',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Planera högskolans verkliga kostnad innan du lånar', level: 2 },
    {
      type: 'summary',
      title: 'Vad den här studiekostnadskalkylatorn är användbar för',
      items: [
        'Uppskatta hela kostnaden för en utbildning, inte bara den annonserade studieavgiften.',
        'Jämföra skolor, boendealternativ och stipendiepaket på samma skuldbas.',
        'Se om en återbetalningsplan känns hanterbar innan du bestämmer dig för att låna.',
      ],
    },
    {
      type: 'paragraph',
      html: 'En universitetsbroschyr lyfter vanligtvis fram en siffra: studieavgiften. Verkligheten är mer komplex. Du betalar troligen också för boende, mat, transport, böcker, försäkringar och ränta på lånade pengar. Det är därför en användbar studentlånesimulator inte bara bör stanna vid studieavgiften. Den bör hjälpa dig att svara på den svårare frågan: <em>vad kommer detta beslut att kosta mig över hela utbildningen, hur mycket skuld kommer att finnas kvar efter stöd, och vilken typ av återbetalningspress kommer jag att möta efter examen?</em>',
    },
    { type: 'title', text: 'Beslut som denna simulator hjälper dig att fatta', level: 3 },
    {
      type: 'list',
      items: [
        'Huruvida ett stipendiepaket verkligen förändrar skulden i slutändan eller bara snyggar till marknadsföringen.',
        'Om att bo på campus, pendla eller dela boende ger den sundaste långsiktiga kompromissen.',
        'Om en längre återbetalningstid är värd den lägre månadskostnaden när den totala räntan tas med i beräkningen.',
        'Om utbildningen fortfarande ser genomförbar ut efter att du har räknat med levnadskostnader, inte bara studieavgifter.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Använd detta innan du tackar ja till en skola',
      html: '<ul><li>Jämför två eller three erbjudanden med samma levnadskostnadsantaganden.</li><li>Testa ett optimistiskt och ett mer realistiskt stipendiescenario.</li><li>Kontrollera om månadskostnaden fortfarande känns acceptabel om skulden stiger eller återbetalningen tar längre tid.</li></ul>',
    },
    { type: 'title', text: 'Hur du läser resultaten utan att lura dig själv', level: 3 },
    {
      type: 'table',
      headers: ['Mått', 'Vad det betyder', 'Varför det är viktigt'],
      rows: [
        ['Total studiekostnad', 'Studieavgift plus levnadskostnader över hela utbildningen', 'Detta är den verkliga budgeten du försöker finansiera, inte den förenklade siffran i broschyren'],
        ['Lånat kapital', 'Beloppet som fortfarande är odekorerat efter stipendier och egen insats', 'Detta är skulden som följer med dig in i återbetalningen och förtjänar mest uppmärksamhet'],
        ['Uppskattad månadskostnad', 'Fast återbetalningsbelopp baserat på ränta och återbetalningtid', 'Detta är den bästa snabba indikatorn på ekonomisk press efter examen'],
        ['Total ränta', 'Extra kostnad som betalas utöver det lånade beloppet', 'Hjälper dig att se om en lägre månadskostnad i tysthet innebär ett mycket dyrare lån'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'nyckelvariabler att stresstesta först' },
        { value: '2', label: 'scenarier värda att jämföra som minimum' },
        { value: '1', label: 'månadskostnad att kontrollera för rimlighet' },
        { value: '0', label: 'tillit enbart till studieavgiften som du bör acceptera' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kortare sikt',
          description: 'Bättre när ditt framtida kassaflöde sannolikt är tillräckligt starkt för att absorbera en högre betalning.',
          highlight: true,
          points: [
            'Högre månadskostnad',
            'Lägre total ränta',
            'Skulden försvinner snabbare',
          ],
        },
        {
          title: 'Längre sikt',
          description: 'Bättre när du behöver andrum i början, men bara om du förstår den extra långsiktiga kostnaden.',
          points: [
            'Lägre månadskostnad',
            'Högre total ränta',
            'Mer flexibilitet men högre långsiktig kostnad',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Användbart stresstest:</strong> sänk stipendiet, höj hyran något och förläng återbetalningen med några år. Om planen bara fungerar i den mest optimistiska versionen är det inte a robust plan ännu.',
    },
    { type: 'title', text: 'Ett praktiskt sätt att jämföra två skolor', level: 3 },
    {
      type: 'list',
      items: [
        'Ange samma levnadskostnadsantaganden för båda skolor först så att du inte jämför olika verkligheter.',
        'Uppdatera sedan bara de variabler som verkligen skiljer sig åt: studieavgift, stipendium och troligt boendealternativ.',
        'Fokusera på lånat kapital och månadskostnad innan du fokuserar på prestige eller varumärke.',
        'Om ett alternativ bara vinner för att du antar ovanligt billiga levnadskostnader, se det som en varningsflagga.',
      ],
    },
    {
      type: 'card',
      title: 'Vad familjer ofta missar',
      html: 'En skola som ser billigare ut på studieavgiften kan ändå leda till mer skuld totalt sett om levnadskostnaderna är strukturellt högre eller om stipendiestödet är mindre stabilt från år till år.',
    },
    { type: 'title', text: 'Begränsningar med alla studiekostnadsprognoser', level: 3 },
    {
      type: 'proscons',
      title: 'Styrkor och begränsningar',
      items: [
        {
          pro: 'Snabb basuppskattning för att jämföra flera studiealternativ',
          con: 'Modellerar inte uppskov, amorteringsfria perioder eller inkomstbeprövad återbetalning',
        },
        {
          pro: 'Gör levnadskostnaderna synliga istället för att dölja dem bakom studieavgiften',
          con: 'Antar en fast ränta och fast månadsbetalning',
        },
        {
          pro: 'Visar skuldens bana visuellt istället för att bara rapportera en rubriktotal',
          con: 'Tar inte hänsyn till skatter, inflation eller framtida löneförändringar',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ränta',
          definition: 'Årlig räntesats. Den representerar den årliga lånekostnaden och omvandlas till en månatlig ränta för återbetalningsberäkningar.',
        },
        {
          term: 'Kapital',
          definition: 'Beloppet som faktiskt lånats efter att stipendier och egna insatser minskat den totala kostnaden.',
        },
        {
          term: 'Amortering',
          definition: 'Den månatliga processen att betala av ett lån genom regelbundna betalningar som täcker ränta först och kapital över tid.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Bästa nästa steg',
      html: 'Använd den här simulatorn för att begränsa din lista, och validera sedan vinnaren mot det faktiska finansiella stödbeskedet, boendeverkligheten och den förväntade ingångslönen inom ditt område innan du fattar det slutgiltiga beslutet.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
