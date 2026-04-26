import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = 'Internationell betygskonverterare & GPA-kalkylator';
const description = 'Det mest exakta verktyget för att konvertera akademiska betyg mellan internationella system. Översätt direkt betyg från Spanien, USA, Storbritannien, Tyskland, Frankrike, Italien och mer. Oumbärligt för Erasmus+, Fulbright och globala universitetsansökningar.';

const faqItems = [
  { 
    question: 'Hur fungerar internationell betygskonvertering?', 
    answer: 'Verktyget använder en matematisk linjär mappning baserad på lägsta godkända betyg och högsta möjliga poäng för varje land. Detta säkerställer att ett "godkänt" i ett system motsvarar ett "godkänt" i ett annat, vilket bibehåller akademisk proportionell rättvisa över olika skalor.' 
  },
  { 
    question: 'Är denna konverterare officiell för universitetsantagning?', 
    answer: 'Även om våra algoritmer följer internationella standardtabeller för ekvivalens (som de som används av ECTS eller WES), är detta verktyg endast avsett för informationssyfte. För officiellt erkännande av poäng bör du alltid rådfråga din mottagande institution eller en ackrediterad utvärderingstjänst.' 
  },
  { 
    question: 'Vad är funktionen "Bulk Mode"?', 
    answer: 'Bulk Mode gör det möjligt för studenter med långa betygskopior att bearbeta flera betyg samtidigt. Klistra helt enkelt in en kolumn med siffror från din PDF- eller Excel-fil, så beräknar verktyget omedelbart individuella konverteringar och ditt globala genomsnittliga GPA.' 
  },
  { 
    question: 'Kan jag konvertera mina betyg till ECTS?', 
    answer: 'Ja. Konverteraren ger motsvarigheter som ligger i linje med European Credit Transfer and Accumulation System (ECTS), vilket gör den perfekt för europeiska studenter som planerar sin mobilitet eller ansöker till masterprogram.' 
  }
];

const howToItems = [
  { name: '1. Välj ursprungssystem', text: 'Identifiera ditt hemland eller den specifika betygsskalan (t.ex. Spanien 0-10, Frankrike 0-20).' },
  { name: '2. Definiera målländer', text: 'Lägg till de länder där du ansöker för att se alla motsvarigheter sida vid sida i instrumentpanelen.' },
  { name: '3. Ange akademiska data', text: 'Ange ett enstaka betyg för snabb kontroll eller använd Bulk Mode för hela din semesterlista.' },
  { name: '4. Analysera & Exportera', text: 'Granska de visuella percentilstaplarna och ladda ner din ekvivalensrapport som PDF för din dokumentation.' },
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
  featureList: 'Bulk Mode-bearbetning, Realtidskonvertering, Stöd för globala skalor, PDF-rapportgenerering',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Ursprungligt betygssystem',
    targetSystems: 'Globala motsvarigheter',
    gradeInput: 'Ditt betyg',
    bulkMode: 'Mängdbearbetning av betyg',
    bulkPlaceholder: 'Klistra in din betygslista här (ett per rad)...',
    results: 'Ekvivalenspanel',
    passLimit: 'Min. Godkänt',
    shareResults: 'Generera ekvivalensrapport',
    averageMedia: 'Globalt konverterat genomsnitt',
    compareTitle: 'Global akademisk ställning',
    addSystem: 'Lägg till land',
    removeSystem: 'Ta bort',
    selectCountry: 'Välj land',
    sourceCountry: 'Ursprungsland',
    systemSelection: 'Systemval',
    convertedScore: 'Konverterat poäng',
    emptyState: 'Ange ett betyg för att se globala motsvarigheter',
    minLabel: 'MIN',
    passLabel: 'GODK',
    maxLabel: 'MAX',
    scaleLabel: 'Skala',
    howToTitle: 'Din väg till internationell utbildning',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Akademiska referenser & standarder',
    singleGradeMode: 'Enstaka betyg',
    transcriptMode: 'Fullständigt betyg utdrag',
    gradeCounter: 'Inmatade betyg',
    averageSummary: 'Beräknat genomsnitt',
    gradesIgnored: '{count} betyg ignorerades (utanför intervallet)',
    bulkHelp: 'Du kan klistra in ditt betygsutdrag direkt. Vi upptäcker betyg separerade med mellanslag, kommatecken eller rader.',
    copiedLabel: 'Kopierat!',
    germanyExpl: 'Omvänt system: 1.0 är bästa möjliga, 4.0 är lägsta godkänt.',
    spainExpl: 'Standard 0-10 skala. 5.0 är lägsta godkänt.',
    usaExpl: 'GPA-skala från 0.0 till 4.0. Vanligtvis är 2.0 lägsta godkänt.',
    ukExpl: 'Procentbaserad klassificering. 40 % är lägsta godkänt.',
    franceExpl: '20-gradig skala. 10 är lägsta godkänt.',
    italyExpl: '30-gradig skala. 18 är lägsta godkänt.',
    netherlandsExpl: '1-10 skala. 6 är lägsta godkänt.',
    placeholderSpain: 't.ex. 8.5',
    placeholderUSA: 't.ex. 3.7 eller A-',
    placeholderFrance: 't.ex. 14',
    placeholderGermany: 't.ex. 1.3',
    placeholderUK: 't.ex. 75',
    placeholderItaly: 't.ex. 28',
    placeholderNetherlands: 't.ex. 7.5',
  },
  seo: [
    { type: 'title', text: 'Exakt betygskonvertering för global mobilitet', level: 2 },
    { type: 'paragraph', html: 'Oavsett om du är en <strong>Erasmus+-student</strong> eller ansöker till en <strong>Ivy League Master</strong>, är förståelsen för din globala akademiska ställning det första steget. Betyg varierar kraftigt: medan en 10 i Spanien är perfekt, är det i Frankrike bara ett godkänt. Vår motor klargör dessa skillnader.' },
    { type: 'title', text: 'Varför noggrannhet är viktigt vid GPA-konvertering', level: 3 },
    { type: 'paragraph', html: 'Antagningsnämnder använder konverterade GPA för att filtrera tusentals ansökningar. Ett litet fel vid manuell beräkning kan kosta dig ett stipendium. Vårt verktyg använder <strong>officiella algoritmer för linjär mappning</strong> som används av stora internationella utbildningsbyråer.' },
    { type: 'title', text: 'Viktiga system som stöds', level: 3 },
    { type: 'list', items: [
      '<strong>Spanien (0-10):</strong> Detaljerad mappning från Aprobado till Sobresaliente.',
      '<strong>USA GPA (4.0):</strong> Standardmässig amerikansk universitetsekvivalens.',
      '<strong>Tyskland (1-6):</strong> Hantering av omvänd skala där 1.0 är toppen.',
      '<strong>Frankrike (0-20):</strong> Exakt konvertering för franska Grande Écoles och universitet.',
      '<strong>Brittisk klassificering:</strong> Översättning av procent till Honours Degree.'
    ] },
    { type: 'tip', html: '<strong>Akademisk insikt:</strong> Använd "Bulk Mode" för att hitta ditt kumulativa GPA över flera terminer. Det sparar timmar av manuellt arbete i kalkylblad!' },
    { type: 'title', text: 'Beräkna din WES-ekvivalens', level: 3 },
    { type: 'paragraph', html: 'Även om en officiell WES-utvärdering är en betaltjänst, ger vårt verktyg en <strong>högkvalitativ uppskattning</strong> av ditt WES GPA, vilket hjälper dig att bestämma var du ska ansöka innan du betalar utvärderingsavgifter.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
