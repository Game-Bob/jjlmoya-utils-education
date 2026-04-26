import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = 'Internationale Cijferomzetter & GPA-equivalentiecalculator';
const description = 'De meest nauwkeurige tool voor het omzetten van academische cijfers tussen internationale systemen. Vertaal direct scores van Spanje, VS, VK, Duitsland, Frankrijk, Italië en meer. Essentieel voor Erasmus+, Fulbright en wereldwijde universitaire aanmeldingen.';

const faqItems = [
  { 
    question: 'Hoe werkt de internationale cijferomzetting?', 
    answer: 'De tool gebruikt een wiskundige lineaire mapping gebaseerd op het minimale voldoende cijfer en de maximaal mogelijke score voor elk land. Dit zorgt ervoor dat een "voldoende" in het ene systeem overeenkomt met een "voldoende" in het andere, waarbij de academische proportionele eerlijkheid tussen verschillende schalen behouden blijft.' 
  },
  { 
    question: 'Is deze omzetter officieel voor universitaire toelatingen?', 
    answer: 'Hoewel onze algoritmen standaard internationale equivalentietabellen volgen (zoals die gebruikt door ECTS of WES), is deze tool bedoeld ter informatie. Voor officiële erkenning van studiepunten dien je altijd contact op te nemen met je gastinstelling of een geaccrediteerde evaluatiedienst.' 
  },
  { 
    question: 'Wat is de "Bulk-modus"-functie?', 
    answer: 'Met de Bulk-modus kunnen studenten met lange cijferlijsten meerdere cijfers tegelijk verwerken. Plak simpelweg een kolom met getallen uit je PDF of Excel-bestand, en de tool berekent direct de individuele omzettingen en je wereldwijde gemiddelde GPA.' 
  },
  { 
    question: 'Kan ik mijn cijfers omzetten naar ECTS?', 
    answer: 'Ja. De omzetter biedt equivalenten die aansluiten bij het European Credit Transfer and Accumulation System (ECTS), waardoor het perfect is voor Europese studenten die hun mobiliteit plannen of zich aanmelden voor masterprogramma\'s.' 
  }
];

const howToItems = [
  { name: '1. Selecteer bronsysteem', text: 'Identificeer je land van herkomst of de specifieke cijferschaal (bijv. Spanje 0-10, Frankrijk 0-20).' },
  { name: '2. Definieer doellanden', text: 'Voeg de landen toe waar je solliciteert om alle equivalenties naast elkaar te zien in het dashboard.' },
  { name: '3. Voer academische gegevens in', text: 'Voer een enkel cijfer in voor snelle controles of gebruik de Bulk-modus voor je volledige semesterlijst.' },
  { name: '4. Analyseer & Exporteer', text: 'Bekijk de visuele percentielbalken en download je equivalentierapport als PDF voor je eigen administratie.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Bulk-modus verwerking, Realtime omzetting, Wereldwijde schaalondersteuning, PDF-rapportgeneratie',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Broncijfersysteem',
    targetSystems: 'Wereldwijde equivalenties',
    gradeInput: 'Jouw cijfer',
    bulkMode: 'Bulk-verwerking',
    bulkPlaceholder: 'Plak hier je cijferlijst (één per regel)...',
    results: 'Equivalentie-dashboard',
    passLimit: 'Min. Voldoende',
    shareResults: 'Equivalentierapport genereren',
    averageMedia: 'Wereldwijd omgezet gemiddelde',
    compareTitle: 'Wereldwijde academische status',
    addSystem: 'Land toevoegen',
    removeSystem: 'Verwijderen',
    selectCountry: 'Land selecteren',
    sourceCountry: 'Land van herkomst',
    systemSelection: 'Systeemselectie',
    convertedScore: 'Omgezet cijfer',
    emptyState: 'Voer een cijfer in om wereldwijde equivalenties te zien',
    minLabel: 'MIN',
    passLabel: 'VOL',
    maxLabel: 'MAX',
    scaleLabel: 'Schaal',
    howToTitle: 'Jouw pad naar internationaal onderwijs',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Academische referenties & standaarden',
    singleGradeMode: 'Enkel cijfer',
    transcriptMode: 'Volledige cijferlijst',
    gradeCounter: 'Ingevoerde cijfers',
    averageSummary: 'Berekend gemiddelde',
    gradesIgnored: '{count} cijfers genegeerd (buiten bereik)',
    bulkHelp: 'Je kunt je cijferlijst direct plakken. We detecteren cijfers gescheiden door spaties, komma\'s of regels.',
    copiedLabel: 'Gekopieerd!',
    germanyExpl: 'Omgekeerd systeem: 1,0 is het best mogelijke cijfer, 4,0 is de minimale voldoende.',
    spainExpl: 'Standaard 0-10 schaal. 5,0 is de minimale voldoende.',
    usaExpl: 'GPA-schaal van 0,0 tot 4,0. Meestal is 2,0 de minimale voldoende.',
    ukExpl: 'Classificatie op basis van percentage. 40% is de minimale voldoende.',
    franceExpl: '20-puntsschaal. 10 is de minimale voldoende.',
    italyExpl: '30-puntsschaal. 18 is de minimale voldoende.',
    netherlandsExpl: '1-10 schaal. 6 is de minimale voldoende.',
    placeholderSpain: 'bijv. 8,5',
    placeholderUSA: 'bijv. 3,7 of A-',
    placeholderFrance: 'bijv. 14',
    placeholderGermany: 'bijv. 1,3',
    placeholderUK: 'bijv. 75',
    placeholderItaly: 'bijv. 28',
    placeholderNetherlands: 'bijv. 7,5',
  },
  seo: [
    { type: 'title', text: 'Nauwkeurige cijferomzetting voor wereldwijde mobiliteit', level: 2 },
    { type: 'paragraph', html: 'Of je nu een <strong>Erasmus+ student</strong> bent of je aanmeldt voor een <strong>Ivy League Master</strong>, het begrijpen van je wereldwijde academische status is de eerste stap. Cijfers variëren enorm: waar een 10 in Spanje perfect is, is het in Frankrijk slechts een voldoende. Onze engine verduidelijkt deze verschillen.' },
    { type: 'title', text: 'Waarom nauwkeurigheid belangrijk is bij GPA-omzetting', level: 3 },
    { type: 'paragraph', html: 'Toelatingscommissies gebruiken omgezette GPA\'s om duizenden aanmeldingen te filteren. Een kleine fout in een handmatige berekening kan je een beurs kosten. Onze tool gebruikt <strong>officiële lineaire mapping-algoritmen</strong> die worden gebruikt door grote internationale onderwijsbureaus.' },
    { type: 'title', text: 'Belangrijkste ondersteunde systemen', level: 3 },
    { type: 'list', items: [
      '<strong>Spanje (0-10):</strong> Gedetailleerde mapping van Aprobado naar Sobresaliente.',
      '<strong>USA GPA (4,0):</strong> Standaard Amerikaanse universitaire equivalentie.',
      '<strong>Duitsland (1-6):</strong> Omgekeerde schaalverwerking waarbij 1,0 het hoogtepunt is.',
      '<strong>Frankrijk (0-20):</strong> Nauwkeurige omzetting voor Franse Grande Écoles en universiteiten.',
      '<strong>Britse classificatie:</strong> Vertaling van percentage naar Honours Degree.'
    ] },
    { type: 'tip', html: '<strong>Academisch inzicht:</strong> Gebruik de "Bulk-modus" om je cumulatieve GPA over meerdere semesters te vinden. Het bespaart uren aan handmatig werk in spreadsheets!' },
    { type: 'title', text: 'Bereken je WES-equivalentie', level: 3 },
    { type: 'paragraph', html: 'Hoewel een officiële WES-evaluatie een betaalde dienst is, biedt onze tool een <strong>zeer nauwkeurige schatting</strong> van je WES GPA, wat je helpt beslissen waar je je aanmeldt voordat je evaluatiekosten betaalt.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
