import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'conceptmap-tekst-exporter' as const;
const title = 'Conceptmap tekst exporter';
const description = 'Zet ingesprongen notities om in een interactieve conceptmap met versleepbare knooppunten, inklapbare takken, zoomknoppen en SVG- of PNG-export.';

const faqItems = [
  { question: 'Welk soort tekst kan ik in de conceptmap-generator plakken?', answer: 'Gebruik een eenvoudige structuur: één idee per regel, met inspringen voor subonderwerpen. Opsommingstekens, genummerde lijsten, tabs en spaties worden geaccepteerd, dus notities die zijn gekopieerd uit documenten, college-samenvattingen of studie-apps kunnen meestal zonder handmatige herformattering worden omgezet.' },
  { question: 'Hoe moet ik het inspringen formatteren voor de meest overzichtelijke conceptmap?', answer: 'Plaats het hoofdonderwerp op de eerste regel en laat de ondersteunende ideeën eronder inspringen. Zorg ervoor dat ideeën op hetzelfde niveau op dezelfde inspringdiepte zijn uitgelijnd. Als een knooppunt onder het verkeerde bovenliggende niveau verschijnt, is het inspringniveau bijna altijd het probleem.' },
  { question: 'Kan ik knooppunten verplaatsen nadat de kaart is gegenereerd?', answer: 'Ja. Sleep een knooppunt op het canvas om de afstand te verbeteren, drukke takken te scheiden of een relatie te benadrukken. Je kunt ook het canvas verschuiven, in- of uitzoomen en takken inklappen voordat je exporteert.' },
  { question: 'Wat is het verschil tussen SVG- en PNG-export?', answer: 'SVG is bewerkbaar en schaalt haarscherp in vector-editors, presentaties en documenten. PNG is een vaste afbeelding die gemakkelijker te uploaden is naar klasomgevingen, berichten, werkbladen en snelle herhalingskaarten.' },
  { question: 'Bepaalt deze tool automatisch dwarsverbanden?', answer: 'Nee. Het bouwt een hiërarchie op basis van inspringen. Dit houdt de uitvoer voorspelbaar, maar zijdelingse verbanden zoals oorzaken, tegenstellingen of feedbackloops moeten na SVG-export handmatig worden toegevoegd.' },
];

const howToItems = [
  { name: 'Plak of schrijf een structuur', text: 'Voer één concept per regel in en laat onderliggende ideeën onder hun hoofdonderwerp inspringen.' },
  { name: 'Controleer de gegenereerde structuur', text: 'Gebruik het interactieve canvas om te controleren of de hiërarchie overeenkomt met hoe het onderwerp moet worden bestudeerd.' },
  { name: 'Richt het canvas in', text: 'Sleep knooppunten, klap overvolle takken in en zoom tot de visuele groepering duidelijk is.' },
  { name: 'Exporteer voor studiemateriaal', text: 'Download SVG voor bewerking of PNG voor snel delen, werkbladen en presentaties.' },
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
    inputLabel: 'Ingesprongen structuur',
    sampleButton: 'Voorbeeld laden',
    clearButton: 'Wissen',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Inzoomen',
    zoomOut: 'Uitzoomen',
    resetView: 'Weergave herstellen',
    exportSvg: 'Exporteer SVG',
    exportPng: 'Exporteer PNG',
    collapseBranch: 'Tak inklappen',
    expandBranch: 'Tak uitklappen',
    emptyStateTitle: 'Nog geen concepten',
    emptyStateText: 'Schrijf één idee per regel en laat subonderwerpen inspringen om de kaart op te bouwen.',
    nodeCount: 'concepten',
    depthCount: 'niveaus',
    branchCount: 'verbindingen',
    levelPrefix: 'N',
    untitledNodeLabel: 'Naamloos',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'conceptmap.svg',
    pngFilename: 'conceptmap.png',
    sampleOutline: `Onderzoeksproject
  Vraag
    Welk probleem wordt onderzocht?
    Wie is er getroffen?
  Bewijs
    Primaire bronnen
    Academische artikelen
    Dataset
  Methode
    Steekproefplan
    Analysestappen
  Conclusie
    Belangrijkste bevinding
    Beperkingen
    Volgende onderzoeksvraag`,
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Verwijzingen & academische bronnen',
  },
  seo: [
    { type: 'title', text: 'Zet ingesprongen notities om in een conceptmap', level: 2 },
    { type: 'paragraph', html: 'Een conceptmap is nuttig wanneer een onderwerp niet meer slechts een lijst met feiten is. Het laat zien welke ideeën centraal staan, welke details deze ondersteunen en waar een student categorieën, voorbeelden, oorzaken en gevolgen zou kunnen verwarren. Deze generator is ontworpen voor de notities die studenten al hebben: plak een ingesprongen structuur, pas de hiërarchie aan en gebruik het interactieve canvas om een studieklare visuele kaart te maken.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'regel per concept' }, { value: '2+', label: 'inspringniveaus ondersteund' }, { value: 'SVG', label: 'bewerkbare export' }, { value: 'PNG', label: 'deelbare export' }] },
    { type: 'diagnostic', variant: 'info', title: 'Beste invoerformaat voor een nauwkeurige kaart', html: '<ul><li>Plaats het hoofdonderwerp op een eigen regel bovenaan.</li><li>Laat subonderwerpen inspringen onder het idee dat ze uitleggen, ondersteunen, definiëren of illustreren.</li><li>Zorg ervoor dat ideeën op hetzelfde niveau op dezelfde inspringdiepte zijn uitgelijnd.</li><li>Gebruik opsommingstekens of genummerde lijsten als je wilt; veelvoorkomende tekens worden automatisch verwijderd.</li><li>Houd de labels kort en beschrijvend. Volledige uitleg hoort thuis in je notities, niet in elk knooppunt.</li></ul>' },
    { type: 'title', text: 'Een onoverzichtelijke conceptmap corrigeren', level: 3 },
    { type: 'table', headers: ['Wat je ziet', 'Waarschijnlijke oorzaak', 'Hoe op te lossen'], rows: [['Een detail verschijnt onder het verkeerde onderwerp', 'Het inspringniveau is te ondiep of te diep.', 'Verplaats de regel naar links of rechts tot deze onder het juiste ouderidee staat.'], ['De kaart is erg breed', 'Er staan te veel ideeën op hetzelfde niveau.', 'Groepeer verwante ideeën onder een duidelijker categorieknooppunt.'], ['De kaart leert lastig', 'Labels zijn geschreven als volledige zinnen.', 'Kort labels in tot trefwoorden of vragen.'], ['Belangrijke relaties ontbreken', 'De structuur is hiërarchisch maar het onderwerp heeft dwarsverbanden.', 'Exporteer naar SVG en voeg zijdelingse verbindingen handmatig toe in een editor indien nodig.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Conceptmap', description: 'Het beste voor het tonen van relaties tussen ideeën, vereisten, oorzaken, bewijzen en categorieën.', highlight: true, points: ['Relatiegericht', 'Goed voor herhaling', 'Nuttig om een onderwerp hardop uit te leggen'] }, { title: 'Structuur', description: 'Het beste voor geordende notities, essaystructuren, lesvolgordes, procedures en chronologisch materiaal.', points: ['Snel te schrijven', 'Gemakkelijk te scannen', 'Kan veel details aan'] }, { title: 'Mindmap', description: 'Het beste voor het brainstormen over brede associaties voordat de structuur van het onderwerp volledig bekend is.', points: ['Creatieve verkenning', 'Losse groepering', 'Minder strikte hiërarchie'] }] },
    { type: 'tip', html: '<strong>Gebruik inklappen als hulpmiddel voor actieve herinnering.</strong> Klap een tak in, noem de verborgen details uit je hoofd op en klap de tak weer uit om te controleren wat je hebt gemist. Dit verandert de kaart van een passief diagram in een actieve leertool.' },
    { type: 'title', text: 'Studiemethoden die profiteren van visuele kaarten', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Examenvoorbereiding', description: 'Bouw de kaart op rond waarschijnlijke vragen. Bovenliggende knooppunten moeten prompts zijn zoals oorzaken, bewijzen, beperkingen, definities of voorbeelden.', highlight: true, points: ['Gebruik ingeklapte takken voor herinnering', 'Houd labels kort', 'Exporteer PNG voor snelle herhalingsbladen'] }, { title: 'Onderzoeksplanning', description: 'Gebruik de kaart om een onderzoeksvraag te verbinden met bewijs, methode, bronnen, beperkingen en conclusies.', points: ['Zet de vraag aan de basis', 'Scheid bewijs van interpretatie', 'Exporteer SVG voor bewerking'] }] },
    { type: 'message', title: 'Belangrijke beperking', html: 'Inspringen creëert een boomstructuur, geen volledig semantisch netwerk. Als twee ideeën tot verschillende takken behoren maar elkaar toch beïnvloeden, zal de tool dat verband niet zelf leggen. Beschouw de gegenereerde kaart als een schone eerste opzet en voeg niet-hiërarchische verbanden toe na export als het onderwerp dat vereist.' },
    { type: 'title', text: 'Conceptmaps exporteren voor presentaties, werkbladen en editors', level: 3 },
    { type: 'paragraph', html: 'Kies SVG als je een bewerkbaar diagram wilt dat kan worden verfijnd in een vector-editor, presentatietool of publicatie-omgeving. Kies PNG als je een betrouwbare afbeelding nodig hebt voor een leeromgeving, werkblad, chat of herhalingskaart. Schik voor het exporteren drukke knooppunten, klap optionele details in en zoom tot de relatiestructuur goed leesbaar is op het formaat waarop de kaart gebruikt zal worden.' },
    { type: 'summary', title: 'Een praktische workflow', items: ['Plak een ruwe structuur uit notities, AI-ontwerpen of een hand-out.', 'Pas het inspringen aan tot elk onderliggend idee onder de juiste ouder staat.', 'Kort labels in zodat knooppunten leesbaar blijven op het canvas en in de geëxporteerde afbeelding.', 'Sleep drukke takken uit elkaar en klap details in die niet nodig zijn in de definitieve versie.', 'Download SVG voor verdere bewerking of PNG voor directe deling.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
