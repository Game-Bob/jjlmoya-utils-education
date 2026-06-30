import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'konceptkarta-text' as const;
const title = 'Konceptkartskapare';
const description = 'Omvandla indragna anteckningar till en interaktiv konceptkarta med dragbara noder, döljbara grenar, zoomkontroller och export till SVG eller PNG.';

const faqItems = [
  { question: 'Vilken typ av text kan jag klistra in i konceptkartsgeneratorn?', answer: 'Använd en enkel disposition: en idé per rad, med indrag för underämnen. Punktlistor, numrerade listor, tabbar och mellanslag accepteras, så anteckningar kopierade från dokument, föreläsningssammanfattningar eller studieappar kan vanligtvis konverteras utan manuell omformatering.' },
  { question: 'Hur ska jag formatera indraget för att få den renaste konceptkartan?', answer: 'Placera det centrala ämnet på första raden och gör sedan indrag för stödjande idéer under det. Håll idéer på samma nivå justerade på samma indragsdjup. Om en nod hamnar under fel förälder är det nästan alltid indragsnivån som behöver korrigeras.' },
  { question: 'Kan jag flytta noder efter att kartan har genererats?', answer: 'Ja. Dra valfri nod på ritytan för att förbättra avståndet, separera täta grenar eller betona en relation. Du kan också panorera ritytan, zooma in eller ut och dölja grenar innan du exporterar.' },
  { question: 'Vad är skillnaden mellan SVG- och PNG-export?', answer: 'SVG är redigerbart och skalar rent i vektorredigerare, presentationer och dokument. PNG är en statisk bild som är lättare att ladda upp till klassrumsplattformar, meddelanden, arbetsblad och snabbrevisionskort.' },
  { question: 'Identifierar det här verktyget korslänkar automatiskt?', answer: 'Nej. Det bygger en hierarki utifrån indrag. Det gör resultatet förutsägbart, men sidolänkar som orsaker, kontraster eller återkopplingsslingor bör granskas manuellt efter SVG-export.' },
];

const howToItems = [
  { name: 'Klistra in eller skriv en disposition', text: 'Ange ett koncept per rad och gör indrag för underordnade idéer under deras överordnade ämne.' },
  { name: 'Granska den genererade strukturen', text: 'Använd den interaktiva ritytan för att kontrollera om hierarkin stämmer överens med hur ämnet ska studeras.' },
  { name: 'Ordna ritytan', text: 'Dra noder, dölj trånga grenar och zooma tills den visuella grupperingen är tydlig.' },
  { name: 'Exportera för studiematerial', text: 'Ladda ner SVG för redigering eller PNG för snabb delning, arbetsblad och presentationer.' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'Indragen disposition',
    sampleButton: 'Ladda exempel',
    clearButton: 'Rensa',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Zooma in',
    zoomOut: 'Zooma ut',
    resetView: 'Återställ vy',
    exportSvg: 'Exportera SVG',
    exportPng: 'Exportera PNG',
    collapseBranch: 'Dölj gren',
    expandBranch: 'Visa gren',
    emptyStateTitle: 'Inga koncept ännu',
    emptyStateText: 'Skriv en idé per rad och gör indrag för underämnen för att bygga kartan.',
    nodeCount: 'koncept',
    depthCount: 'nivåer',
    branchCount: 'länkar',
    levelPrefix: 'N',
    untitledNodeLabel: 'Namnlös',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'konceptkarta.svg',
    pngFilename: 'konceptkarta.png',
    sampleOutline: `Forskningsprojekt
  Fråga
    Vilket problem undersöks?
    Vem påverkas?
  Evidens
    Primärkällor
    Akademiska artiklar
    Datamängd
  Metod
    Urvalsplan
    Analyssteg
  Slutsats
    Huvudresultat
    Begränsningar
    Nästa forskningsfråga`,
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser & akademiska resurser',
  },
  seo: [
    { type: 'title', text: 'Omvandla indragna anteckningar till en konceptkarta', level: 2 },
    { type: 'paragraph', html: 'En konceptkarta är användbar när ett ämne inte längre bara är en lista med fakta. Den visar vilka idéer som är centrala, vilka detaljer som stöder dem och var en student kan förväxla kategorier, exempel, orsaker och konsekvenser. Den här generatorn är utformad för anteckningar som studenter redan har: klistra in en indragen disposition, justera hierarkin och använda sedan den interaktiva ritytan för att ordna en studieklar visuel karta.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'rad per koncept' }, { value: '2+', label: 'indragsnivåer som stöds' }, { value: 'SVG', label: 'redigerbar export' }, { value: 'PNG', label: 'delbar export' }] },
    { type: 'diagnostic', variant: 'info', title: 'Bästa inmatningsformat för exakt kartläggning', html: '<ul><li>Placera huvudämnet på en egen rad längst upp.</li><li>Gör indrag for underämnen under den idé de förklarar, stöder, definierar eller exemplifierar.</li><li>Håll idéer på samma nivå justerade på samma indragsdjup.</li><li>Använd punkter eller numrerade listor om du vill; vanliga listmarkörer tas bort automatiskt.</li><li>Håll nodetiketter korta och beskrivande. Fullständiga förklaringar hör hemma i dina anteckningar, inte inuti varje nod.</li></ul>' },
    { type: 'title', text: 'Hur man diagnostiserar en rörig konceptkarta', level: 3 },
    { type: 'table', headers: ['Vad du ser', 'Trolig orsak', 'Hur man åtgärdar det'], rows: [['En detalj visas under fel ämne', 'Indragsnivån är för grund eller för djup.', 'Flytta raden till vänster eller höger tills den ligger under rätt överordnad idé.'], ['Kartan är mycket bred', 'För många idéer är placerade på samma nivå.', 'Gruppera relaterade syskon under en tydligare kategorinod.'], ['Kartan är svår att studera', 'Nodetiketter är skrivna som fullständiga meningar.', 'Korta ner etiketterna till nyckelord, påståenden eller frågeställningar.'], ['Viktiga relationer saknas', 'Dispositionen är hierarkisk men ämnet har korslänkar.', 'Exporta SVG och lägg till sidolänkar manuellt i en redigerare om det behövs.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Konceptkarta', description: 'Bäst för att visa relationer mellan idéer, förutsättningar, orsaker, evidens och kategorier.', highlight: true, points: ['Relationsfokuserad', 'Bra för repetition', 'Användbar för att förklara ett ämne högt'] }, { title: 'Disposition', description: 'Bäst för ordnade anteckningar, uppsatsstruktur, föreläsningssekvenser, procedurer och kronologiskt material.', points: ['Snabb att skriva', 'Lätt att skanna', 'Hanterar långa detaljer väl'] }, { title: 'Tankekarta', description: 'Bäst för att brainstorma breda associationer innan ämnets struktur är helt känd.', points: ['Kreativt utforskande', 'Lös gruppering', 'Mindre strikt hierarki'] }] },
    { type: 'tip', html: '<strong>Använd dölj-funktionen som ett verktyg för aktiv återkallelse.</strong> Dölj en gren, säg de dolda detaljerna ur minnet, och visa den sedan igen för att kontrollera vad du missade. Detta förvandlar kartan från ett passivt diagram till en aktiv repetitionsfråga.' },
    { type: 'title', text: 'Studieflöden som drar nytta av visuell kartläggning', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Tentamensrepetition', description: 'Bygg kartan runt troliga frågor. Överordnade noder bör vara uppmaningar som orsaker, evidens, begränsningar, definitioner of exempel.', highlight: true, points: ['Använd dolda grenar för återkallelse', 'Håll etiketterna korta', 'Exportera PNG för snabba repetitionsblad'] }, { title: 'Forskningsplanering', description: 'Använd kartan för att koppla en forskningsfråga till evidens, metod, källor, begränsningar och slutsatser.', points: ['Placera frågan vid roten', 'Separera evidens från tolkning', 'Exportera SVG för redigering'] }] },
    { type: 'message', title: 'Viktig begränsning', html: 'Indrag skapar ett träd, inte ett fullständigt semantiskt nätverk. Om två idéer tillhör olika grenar men ändå påverkar varandra, kommer verktyget inte att uppfinna den korslänken själv. Behandla den genererade kartan som ett rent första utkast, och lägg till icke-hierarkiska länkar efter export när ämnet kräver det.' },
    { type: 'title', text: 'Exportera konceptkartor för presentationer, arbetsblad och redigerare', level: 3 },
    { type: 'paragraph', html: 'Välj SVG när du vill ha ett redigerbart diagram som kan förfinas i en vektorredigerare, presentationsverktyg eller publiceringsflöde. Välj PNG när du behöver en tillförlitlig bild för en klassrumsplattform, lärplattform, arbetsblad, chatt eller repetitionskort. Innan du exporterar bör du ordna trånga noder, dölja valfria detaljer och zooma tills relationsstrukturen är läsbar i den storlek kartan kommer att användas.' },
    { type: 'summary', title: 'Ett praktiskt arbetsflöde', items: ['Klistra in en grov disposition från anteckningar, AI-utkast eller ett kursblad.', 'Korrigera indraget tills varje underordnad idé ligger under rätt överordnad rad.', 'Korta ner etiketterna så att noderna förblir läsbara på ritytan och den exporterade bilden.', 'Dra isär trånga grenar och dölj detaljer som inte behövs i den slutliga versionen.', 'Ladda ner SVG for vidare redigering eller PNG för omedelbar delning.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
