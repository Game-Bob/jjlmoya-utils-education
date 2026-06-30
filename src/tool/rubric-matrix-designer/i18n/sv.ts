import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'rubrik-matris-designer' as const;
const title = 'Rubrik Matris Designer';
const description = 'Skapa redigerbara viktade bedömningsmatriser (rubrics) med måluppfyllelserivåer, direktvalidering av 100 % viktning, CSV-export och en utskriftsvänlig layout.';

const faqItems = [
  { question: 'Vad är en rubrikmatris?', answer: 'En rubrikmatris är ett bedömningsrutnät som placerar kriterier i rader och måluppfyllelserivåer i kolumner. Varje cell beskriver hur prestationen ser ut på den nivån, vilket gör betygssättningen mer transparent och konsekvent.' },
  { question: 'Varför ska kriteriernas viktning sammanlagt bli 100 %?', answer: 'En total på 100 % gör betygssättningsmodellen tydlig. Om totalen är under eller över 100 % kan studenter och bedömare inte tolka hur mycket varje kriterium bidrar till slutbetyget.' },
  { question: 'Kan studenter använda detta verktyg?', answer: 'Ja. Studenter kan använda det för att förstå förväntningarna på uppgifter, planera utkast eller skapa checklistor för kamratbedömning före inlämning.' },
  { question: 'Vilka exportalternativ ingår?', answer: 'CSV-exporten är användbar för kalkylblad och LMS-konfiguration. Utskriftsknappen öppnar webbläsarens utskriftsflöde, där du kan spara som PDF med operativsystemets utskriftsdialog.' },
];

const howToItems = [
  { name: 'Redigera kriterierna', text: 'Klicka på valfritt kriteriumnamn och ersätt det med den färdighet, det resultat eller det krav du vill bedöma.' },
  { name: 'Ställ in viktningen', text: 'Justera varje procent tills viktfältet visar en balanserad matris på exakt 100 %.' },
  { name: 'Beskriv måluppfyllelserivåerna', text: 'Klicka i varje beskrivningscell och skriv observerbara bevis för den nivån av prestation.' },
  { name: 'Anpassa strukturen efter behov', text: 'Använd lägg till-knapparna för att skapa extra kriterier eller nivåer, och ta bort rader eller kolumner som inte behövs.' },
  { name: 'Exportera eller skriv ut', text: 'Ladda ner en CSV-fil för kalkylblad eller använd utskrift för att skapa en ren PDF-version.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Kriterium',
    weightHeader: 'Vikt',
    levelSectionLabel: 'Måluppfyllelserivåer',
    levelBadgePrefix: 'N',
    addCriterion: 'Lägg till kriterium',
    addLevel: 'Lägg till nivå',
    removeCriterion: 'Ta bort kriterium',
    removeLevel: 'Ta bort nivå',
    exportCsv: 'Exportera CSV',
    printRubric: 'Skriv ut / PDF',
    csvFilename: 'bedomningsmatris.csv',
    pdfDocumentTitle: 'Bedömningsmatris',
    pdfImageAlt: 'Bedömningsmatris',
    confirmDeleteTitle: 'Ta bort kriteriet?',
    confirmDeleteText: 'Detta tar bort kriteriet och alla beskrivningar som skrivits för dess nivåer.',
    cancelDelete: 'Avbryt',
    confirmDelete: 'Ta bort kriterium',
    totalWeight: 'Total viktning',
    balanced: 'Balanserad på exakt 100 %',
    under: 'Lägg till vikt tills matrisen når 100 %',
    over: 'Minska vikten tills matrisen återgår till 100 %',
    emptyCell: 'Klicka för att redigera',
    newCriterionTemplate: 'Kriterium {index}',
    newDescriptorTemplate: 'Beskrivning {index}.{level}',
    newLevelTemplate: 'Nivå {index}',
    defaultLevels: [
      { name: 'Utmärkt', score: 4 },
      { name: 'Godtagbar', score: 3 },
      { name: 'Under utveckling', score: 2 },
      { name: 'Nybörjare', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Argumentationens kvalitet',
        weight: 35,
        cells: [
          'Tydligt påstående med nyanserat resonemang',
          'Tydligt påstående med adekvat resonemang',
          'Påståendet finns men är ojämnt',
          'Påståendet är otydligt eller saknas',
        ],
      },
      {
        name: 'Användning av bevis',
        weight: 30,
        cells: [
          'Bevisen är exakta och väl integrerade',
          'Bevisen stöder de flesta påståenden',
          'Bevisen är generella eller löst kopplade',
          'Bevis saknas eller är felaktiga',
        ],
      },
      {
        name: 'Struktur',
        weight: 20,
        cells: [
          'Strukturen vägleder läsaren smidigt',
          'Strukturen är logisk',
          'Strukturen har luckor eller upprepningar',
          'Strukturen är svår att följa',
        ],
      },
      {
        name: 'Akademisk stil',
        weight: 15,
        cells: [
          'Polerad stil och exakt följsamhet till konventioner',
          'Mindre fel hindrar inte förståelsen',
          'Frekventa fel distraherar läsaren',
          'Fel gör innebörden otydlig',
        ],
      },
    ],
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser & Akademiska resurser',
  },
  seo: [
    { type: 'title', text: 'Utforma bedömningsmatriser som studenter faktiskt kan använda', level: 2 },
    { type: 'paragraph', html: 'En stark bedömningsmatris är mer än ett betygssättningsblad. Det är en gemensam karta över förväntningar. Studenter använder den för att förstå vad kvalitet innebär innan de lämnar in sitt arbete, lärare använder den för att bedöma mer konsekvent, och granskare använder den för att förklara feedback med mindre tvetydighet. Denna designer gör strukturen synlig: kriterier, vikter, nivåer och beskrivningar finns alla i en redigerbar matris.' },
    { type: 'diagnostic', variant: 'warning', title: 'När en matris behöver revideras', html: '<ul><li>Flera kriterier överlappar så mycket att samma misstag bestraffas två gånger.</li><li>Den totala vikten är inte lika med 100 %, vilket gör slutbetyget svårt att tolka.</li><li>Beskrivningar använder vaga ord som bra, svag eller utmärkt utan observerbara bevis.</li><li>Det finns för många nivåer för att bedömare ska kunna skilja dem åt på ett tillförlitligt sätt.</li></ul>' },
    { type: 'title', text: 'Att välja kriterier och vikter', level: 3 },
    { type: 'table', headers: ['Matriselement', 'God praxis', 'Vanligt problem'], rows: [['Kriterier', 'Bedöm distinkta färdigheter eller resultat såsom argumentation, bevis, metod, noggrannhet eller presentation.', 'Att blanda flera färdigheter i en rad gör feedbacken otydlig.'], ['Vikter', 'Matcha vikten mot undervisningens prioritering och uppgiftens syfte.', 'Att ge samma vikt till varje rad även när vissa resultat spelar större roll.'], ['Nivåer', 'Använd 3 till 5 nivåer som bedömare kan skilja åt konsekvent.', 'Att lägga till många nivåer med minimala skillnader i ordval.'], ['Beskrivningar', 'Beskriv observerbara bevis i studentens arbete.', 'Att använda etiketter som låter värderande men som inte vägleder förbättring.']] },
    { type: 'comparative', title: 'Analytiska kontra holistiska matriser', columns: 2, items: [{ title: 'Analytisk matris', description: 'Delar upp prestationen i separata kriterier och vikter. Bäst när studenter behöver riktad feedback eller när flera bedömare måste samordnas.', highlight: true, points: ['Transparent bedömning', 'Specifik feedback', 'Fungerar bra för komplexa uppgifter'] }, { title: 'Holistisk matris', description: 'Ger ett enda övergripande omdöme. Snabbare att använda, men mindre användbar för revidering eller kamratbedömning.', points: ['Snabbare bedömning', 'Användbar för snabba kontroller', 'Mindre detaljerad feedback'] }] },
    { type: 'tip', html: '<strong>Skriv beskrivningar utifrån bevis, inte adjektiv.</strong> Istället för "utmärkt analys", skriv vad en utmärkt analys gör: kopplar bevis till påståendet, adresserar begränsningar och förklarar varför bevisen är viktiga.' },
    { type: 'title', text: 'Hur man validerar en viktad matris', level: 3 },
    { type: 'paragraph', html: 'Vikter kommunicerar prioritet. Ett kriterium värt 40 % formar studentens insats annorlunda än ett värt 10 %. Den levande totalen i detta verktyg är avsiktligt strikt: matrisen är balanserad först när summan är exakt 100 %. Om totalen är under 100 % är en del av betyget odefinierad. Om den är över 100 % lovar modellen för många poäng och skapar förvirring.' },
    { type: 'summary', title: 'Ett praktiskt arbetsflöde för matriser', items: ['Börja med lärandemålen innan du skriver raderna.', 'Begränsa matrisen till kriterier som faktiskt kommer att påverka feedbacken.', 'Skriv utkast till beskrivningar på ett enkelt, observerbart språk.', 'Kontrollera 100 % viktning innan du delar matrisen.', 'Exportera till CSV när du behöver kalkylblad eller LMS-konfiguration.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
