import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'financieel-simulator-universiteit' as const;
const title = 'Financieel Simulator voor de Universiteit';
const description =
  'Modelleer de werkelijke kosten van studeren aan de universiteit, vergelijk scholarship-scenario\'s en projecteer studieleningbetalingen met een visuele aflossingstijdlijn en aflossingstabel.';

const faqItems = [
  {
    question: 'Wat omvat deze simulator in de totale kosten?',
    answer:
      'Het combineert jaarlijks collegegeld, maandelijkse kosten voor levensonderhoud, het aantal studiejaren en de maanden dat u verwacht levensonderhoudskosten te betalen per academisch jaar. Vervolgens worden beurzen en eventuele eigen bijdragen afgetrokken voordat de lening wordt berekend.',
  },
  {
    question: 'Hoe wordt de maandelijkse studieleningbetaling berekend?',
    answer:
      'De tool maakt gebruik van de standaard formule voor annuïteitenleningen. Het zet het jaarlijkse rentepercentage om in een maandelijks tarief en spreidt de aflossing over het geselecteerde aantal jaren.',
  },
  {
    question: 'Kan ik het gebruiken voor renteloze familieleningen of subsidies?',
    answer:
      'Ja. Stel de rente in op 0 om een renteloos aflossingsplan te simuleren. U kunt ook de beurs of de eigen bijdrage verhogen om subsidies, spaargeld of gezinsondersteuning weer te geven.',
  },
  {
    question: 'Waarom verschilt het geleende bedrag zo sterk per profiel?',
    answer:
      'Kosten voor levensonderhoud lopen snel op over meerdere studiejaren. Een thuiswonend studieplan en een op-kamers-studieplan kunnen zeer verschillende schuldenlasten opleveren, zelfs als het collegegeld hetzelfde blijft.',
  },
  {
    question: 'Bevat de datum waarop u schuldenvrij bent uitstel of inkomensafhankelijke regelingen?',
    answer:
      'Nee. Deze versie veronderstelt dat de aflossing begint volgens een normaal vast schema met gelijke maandelijkse termijnen. Dit is ideaal voor basisplanning, niet voor het modelleren van elke beleidsuitzondering.',
  },
];

const howToItems = [
  {
    name: 'Stel uw studieprofiel in',
    text: 'Gebruik een van de snelle profielen of verplaats de schuifregelaars handmatig om uw collegegeld, kosten voor levensonderhoud en beurspakket weer te geven.',
  },
  {
    name: 'Pas de financieringsvoorwaarden aan',
    text: 'Kies hoeveel u vooraf kunt betalen, stel vervolgens het rentepercentage en de aflossingsjaren in om uw waarschijnlijke leningsvoorwaarden te weerspiegelen.',
  },
  {
    name: 'Lees het financiële dashboard',
    text: 'De samenvattingstegels tonen in één oogopslag uw volledige bruto studiekosten, geleend kapitaal, geschatte maandelijkse betaling en totale rente.',
  },
  {
    name: 'Inspecteer de aflossingscurve',
    text: 'Gebruik de grafiek om te zien hoe het resterende saldo, het totale betaalde bedrag en de gecumuleerde rente zich jaar na jaar ontwikkelen.',
  },
  {
    name: 'Open de aflossingstabel',
    text: 'Klap de maandelijkse tabel uit als u een gedetailleerde analyse van hoofdsom versus rente nodig heeft voor budgettering of gezinsdiscussies.',
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
    annualTuition: 'Jaarlijks collegegeld',
    monthlyLivingCost: 'Maandelijkse kosten voor levensonderhoud',
    studyYears: 'Studiejaren',
    studyMonthsPerYear: 'Maanden met kosten voor levensonderhoud per jaar',
    scholarshipPerYear: 'Beurs per jaar',
    upfrontContribution: 'Eigen bijdrage vooraf',
    aprPercent: 'Rentepercentage',
    repaymentYears: 'Aflossingsjaren',
    quickProfiles: 'Snelle profielen',
    commuterProfile: 'Thuiswonend',
    balancedProfile: 'Uitgebalanceerd',
    campusProfile: 'Op kamers / Campus',
    stickerCost: 'Totale studiekosten',
    borrowedPrincipal: 'Geleend kapitaal',
    monthlyPayment: 'Geschatte maandelijkse betaling',
    totalInterest: 'Totale rente',
    projectionTitle: 'Schuldenprojectie',
    scheduleTitle: 'Maandelijks aflossingsschema',
    chartBalance: 'Resterend saldo',
    chartPaid: 'Totaal betaald',
    chartInterest: 'Betaalde rente',
    openSchedule: 'Volledig schema openen',
    closeSchedule: 'Volledig schema verbergen',
    monthColumn: 'Maand',
    paymentColumn: 'Betaling',
    principalColumn: 'Hoofdsom',
    interestColumn: 'Rente',
    balanceColumn: 'Saldo',
    timelineLabel: 'Tijdlijn schuldenvrij',
    affordabilityHint:
      'Houd uw geprojecteerde maandelijkse betaling in lijn met uw waarschijnlijke netto-inkomen in het eerste jaar, en niet alleen met uw huidige studentenbudget.',
    debtFreeLabel: 'Schuldenvrij na',
    scholarshipShare: 'Beursdekking',
    livingShare: 'Aandeel kosten levensonderhoud',
    degreeCostLabel: 'Aandeel collegegeld',
    blendedCost: 'Gemiddelde jaarlijkse kosten',
    totalPaid: 'Totaal terugbetaald',
    averageYearlyCost: 'Gemiddelde kosten per jaar',
    plannerLabel: 'Kostenplanner',
    resultsLabel: 'Financieringsvooruitzichten',
    assumptionsLabel: 'Leningvoorwaarden',
    scheduleHint:
      'Maand-tot-maand details over hoe elke betaling is verdeeld over hoofdsom en rente.',
    noDebtNeeded: 'Geen schuld nodig met de huidige instellingen',
    exactAmount: 'Exact bedrag',
    monthWord: 'Maand',
    paymentWord: 'betaling',
    principalWord: 'hoofdsom',
    interestWord: 'rente',
    remainingWord: 'resterend',
    perMonthSuffix: '/maand',
    yearsSuffix: 'jaar',
    monthsSuffix: 'maanden',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Plan de werkelijke kosten van studeren voordat u leent', level: 2 },
    {
      type: 'summary',
      title: 'Waarvoor deze studiekostencalculator nuttig is',
      items: [
        'Schat de volledige kosten van een opleiding in, niet alleen het geadverteerde collegegeld.',
        'Vergelijk scholen, huisvestingskeuzes en beurspakketten op dezelfde schuldenbasis.',
        'Zie of een aflossingsplan haalbaar aanvoelt voordat u zich committeert aan lenen.',
      ],
    },
    {
      type: 'paragraph',
      html: 'De brochure van een universiteit belicht meestal één getal: collegegeld. De realiteit is ingewikkelder. U betaalt wellicht ook voor huisvesting, eten, vervoer, boeken, verzekeringen en rente op geleend geld. Daarom moet een nuttige studielening simulator niet stoppen bij de catalogusprijs. Het moet u helpen de moeilijkere vraag te beantwoorden: <em>wat kost deze beslissing mij over de hele opleiding, hoeveel schuld blijft er over na steun, en met wat voor afbetalingsdruk krijg ik te maken na het afstuderen?</em>',
    },
    { type: 'title', text: 'Beslissingen die deze simulator u helpt te nemen', level: 3 },
    {
      type: 'list',
      items: [
        'Of een beurspakket het schuldenresultaat echt verandert of alleen de marketingkop verzacht.',
        'Of op kamers wonen, pendelen of het delen van accommodatie op de lange termijn de gezondste balans oplevert.',
        'Of een langere aflossingstermijn de lagere maandelijkse betaling waard is als de totale rente in aanmerking wordt genomen.',
        'Of de opleiding er nog steeds levensvatbaar uitziet nadat u de kosten voor levensonderhoud hebt meegerekend, en niet alleen het collegegeld.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gebruik dit voordat u ja zegt tegen een universiteit',
      html: '<ul><li>Vergelijk twee of drie aanbiedingen met dezelfde aannames voor levensonderhoud.</li><li>Test een optimistisch en een realistischer beursscenario.</li><li>Controleer of de maandelijkse betaling acceptabel blijft als de schulden stijgen of de aflossing langer duurt.</li></ul>',
    },
    { type: 'title', text: 'Hoe de resultaten te lezen zonder uzelf voor de gek te houden', level: 3 },
    {
      type: 'table',
      headers: ['Parameter', 'Wat het betekent', 'Waarom het belangrijk is'],
      rows: [
        ['Totale studiekosten', 'Collegegeld plus kosten voor levensonderhoud over de volledige opleidingsduur', 'Dit is het echte budget dat u probeert te financieren, niet het vereenvoudigde getal uit de brochure'],
        ['Geleend kapitaal', 'Bedrag dat nog ongedekt is na beurzen en eigen bijdrage vooraf', 'Dit is de schuld die u volgt bij de aflossing en verdient de meeste aandacht'],
        ['Geschat maandbedrag', 'Vast aflossingsbedrag op basis van rente en aflossingsduur', 'Dit is de beste snelle indicator voor de financiële druk na het afstuderen'],
        ['Totale rente', 'Extra kosten betaald bovenop het geleende bedrag', 'Dit helpt u te zien of een lagere maandelijkse betaling stilletjes een veel duurdere lening wordt'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'kernvariabelen om eerst te stresstesten' },
        { value: '2', label: 'scenario\'s om minimaal te vergelijken' },
        { value: '1', label: 'maandelijks betalingsbedrag om te controleren op haalbaarheid' },
        { value: '0', label: 'blind vertrouwen op alleen collegegeld dat u mag accepteren' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kortere termijn',
          description: 'Beter wanneer uw toekomstige kasstroom waarschijnlijk sterk genoeg is om een hogere betaling op te vangen.',
          highlight: true,
          points: [
            'Hogere maandelijkse betaling',
            'Lagere totale rente',
            'Schuld verdwijnt sneller',
          ],
        },
        {
          title: 'Langere termijn',
          description: 'Beter als u in het begin ademruimte nodig heeft, maar alleen als u de extra kosten op de lange termijn begrijpt.',
          points: [
            'Lagere maandelijkse betaling',
            'Hogere totale rente',
            'Meer flexibiliteit maar hogere kosten op lange termijn',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Handige stresstest:</strong> verlaag de beurs, verhoog de huur iets en verleng de aflossing met een paar jaar. Als het plan alleen werkt in de meest optimistische versie, is het nog geen robuust plan.',
    },
    { type: 'title', text: 'Een praktische manier om twee scholen te vergelijken', level: 3 },
    {
      type: 'list',
      items: [
        'Voer eerst dezelfde aannames voor levensonderhoud in voor beide scholen, zodat u geen verschillende realiteiten vergelijkt.',
        'Werk vervolgens alleen de variabelen bij die echt verschillen: collegegeld, beurs en waarschijnlijke huisvestingskeuze.',
        'Richt u op geleend kapitaal en maandelijkse betaling voordat u zich richt op prestige of branding.',
        'Als één optie alleen wint omdat u uitgaat van ongewoon goedkope kosten voor levensonderhoud, beschouw dat dan als een waarschuwingsvlag.',
      ],
    },
    {
      type: 'card',
      title: 'Wat gezinnen vaak missen',
      html: 'Een school die goedkoper lijkt op het gebied van collegegeld kan in totaal toch meer schulden veroorzaken als de kosten voor levensonderhoud structureel hoger zijn of de beurssteun van jaar tot jaar minder stabiel is.',
    },
    { type: 'title', text: 'Grenzen van elke studiekostenprojectie', level: 3 },
    {
      type: 'proscons',
      title: 'Sterke punten en limieten',
      items: [
        {
          pro: 'Snelle basisschatting voor het vergelijken van meerdere studieopties',
          con: 'Modelleert geen uitstel, aflossingsvrije perioden of inkomensafhankelijke aflossing',
        },
        {
          pro: 'Maakt kosten voor levensonderhoud zichtbaar in plaats van ze te verbergen achter collegegeld',
          con: 'Veronderstelt een vaste rente en een vaste maandelijkse betaling',
        },
        {
          pro: 'Toont het verloop van de schuld visueel in plaats van alleen een hoofdtotaal te rapporteren',
          con: 'Houdt geen rekening met belastingen, inflatie of toekomstige salariswijzigingen',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Rente',
          definition: 'Jaarlijks rentepercentage. Het vertegenwoordigt de jaarlijkse leenkosten en wordt omgezet in een maandelijks tarief voor aflossingsberekeningen.',
        },
        {
          term: 'Hoofdsom',
          definition: 'Het daadwerkelijk geleende bedrag nadat beurzen en eigen bijdragen vooraf de totale kosten hebben verlaagd.',
        },
        {
          term: 'Aflossing',
          definition: 'Het maandelijks afbetalen van een lening door middel van regelmatige betalingen die in de loop van de tijd eerst de rente en daarna de hoofdsom dekken.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Beste volgende stap',
      html: 'Gebruik deze simulator om uw shortlist te verkleinen en valideer de winnaar vervolgens met de feitelijke financiële hulpbrief, de realiteit van de huisvesting en het verwachte startsalaris in uw vakgebied voordat u de definitieve beslissing neemt.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
