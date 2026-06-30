import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'rubriek-matrix-ontwerper' as const;
const title = 'Rubriek Matrix Ontwerper';
const description = 'Maak bewerkbare, gewogen beoordelingsrubrieken met prestatieniveaus, live validatie van de 100%-weging, CSV-export en een afdrukklare lay-out.';

const faqItems = [
  { question: 'Wat is een rubriek-matrix?', answer: 'Een rubriek-matrix is een beoordelingsraster dat criteria in rijen en prestatieniveaus in kolommen plaatst. Elke cel beschrijft hoe de prestatie op dat niveau eruitziet, wat het nakijken transparanter en consequenter maakt.' },
  { question: 'Waarom moeten de gewichten van de criteria precies 100% zijn?', answer: 'Een totaal van 100% maakt het beoordelingsmodel expliciet. Als het totaal onder of boven 100% ligt, kunnen studenten en beoordelaars niet duidelijk interpreteren hoeveel elk criterium bijdraagt aan de eindscore.' },
  { question: 'Kunnen studenten deze tool gebruiken?', answer: 'Ja. Studenten kunnen de tool gebruiken om de verwachtingen van opdrachten te analyseren, concepten te plannen of peer-review-checklists op te stellen vóór de inlevering.' },
  { question: 'Welke exportopties zijn inbegrepen?', answer: 'De CSV-export is handig voor spreadsheets en de configuratie in een LMS. De knop afdrukken opent het afdrukscherm van de browser, waar u via de systeeminstellingen als PDF kunt opslaan.' },
];

const howToItems = [
  { name: 'Criteria bewerken', text: 'Klik op de naam van een criterium en vervang deze door de vaardigheid, het resultaat of de vereiste die u wilt beoordelen.' },
  { name: 'Gewichten instellen', text: 'Pas de percentages aan tot de voortgangsbalk een uitgebalanceerde rubriek van 100% aangeeft.' },
  { name: 'Prestatieniveaus beschrijven', text: 'Klik in elke cel voor beschrijvingen en noteer waarneembaar bewijs voor dat prestatieniveau.' },
  { name: 'Structuur aanpassen', text: 'Gebruik de knoppen om extra criteria of prestatieniveaus toe te voegen, en verwijder rijen of kolommen die niet nuttig zijn.' },
  { name: 'Exporteren of afdrukken', text: 'Download een CSV-bestand voor spreadsheets of gebruik de printfunctie om een nette PDF-versie te maken.' },
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
    criterionHeader: 'Criterium',
    weightHeader: 'Gewicht',
    levelSectionLabel: 'Prestatieniveaus',
    levelBadgePrefix: 'N',
    addCriterion: 'Criterium toevoegen',
    addLevel: 'Niveau toevoegen',
    removeCriterion: 'Criterium verwijderen',
    removeLevel: 'Niveau verwijderen',
    exportCsv: 'CSV exporteren',
    printRubric: 'Afdrukken / PDF',
    csvFilename: 'beoordelingsrubriek.csv',
    pdfDocumentTitle: 'Beoordelingsrubriek',
    pdfImageAlt: 'Beoordelingsrubriek',
    confirmDeleteTitle: 'Criterium verwijderen?',
    confirmDeleteText: 'Dit verwijdert het criterium en alle beschrijvingen die voor de prestatieniveaus zijn ingevoerd.',
    cancelDelete: 'Annuleren',
    confirmDelete: 'Criterium verwijderen',
    totalWeight: 'Totale weging',
    balanced: 'Precies in balans op 100%',
    under: 'Voeg gewicht toe tot de rubriek 100% bereikt',
    over: 'Verlaag het gewicht tot de rubriek terug is op 100%',
    emptyCell: 'Klik om te bewerken',
    newCriterionTemplate: 'Criterium {index}',
    newDescriptorTemplate: 'Beschrijving {index}.{level}',
    newLevelTemplate: 'Niveau {index}',
    defaultLevels: [
      { name: 'Uitstekend', score: 4 },
      { name: 'Vaardig', score: 3 },
      { name: 'In ontwikkeling', score: 2 },
      { name: 'Beginner', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Kwaliteit van de argumentatie',
        weight: 35,
        cells: [
          'Heldere stelling met genuanceerde onderbouwing',
          'Heldere stelling met voldoende onderbouwing',
          'Stelling is aanwezig maar inconsistent',
          'Stelling is onduidelijk of ontbreekt',
        ],
      },
      {
        name: 'Gebruik van bewijs',
        weight: 30,
        cells: [
          'Bewijs is nauwkeurig en geïntegreerd',
          'Bewijs ondersteunt de meeste beweringen',
          'Bewijs is algemeen of vaag verbonden',
          'Bewijs ontbreekt of is onjuist',
        ],
      },
      {
        name: 'Organisatie',
        weight: 20,
        cells: [
          'De opbouw leidt de lezer soepel door de tekst',
          'De opbouw is logisch',
          'De opbouw vertoont gaten of herhaling',
          'De opbouw is moeilijk te volgen',
        ],
      },
      {
        name: 'Academische stijl',
        weight: 15,
        cells: [
          'Verzorgde stijl en nauwkeurige naleving van conventies',
          'Kleine fouten verstoren de betekenis niet',
          'Veelvuldige fouten leiden de lezer af',
          'Fouten maken de betekenis onduidelijk',
        ],
      },
    ],
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Literatuur & Academische bronnen',
  },
  seo: [
    { type: 'title', text: 'Beoordelingsrubrieken ontwerpen die studenten echt kunnen gebruiken', level: 2 },
    { type: 'paragraph', html: 'Een sterke beoordelingsrubriek is meer dan een nakijkblad. Het is een gedeelde kaart met verwachtingen. Studenten gebruiken het om te begrijpen wat kwaliteit inhoudt voordat ze werk inleveren, docenten gebruiken het om consistenter te beoordelen en reviewers gebruiken het om feedback duidelijker toe te lichten. Deze ontwerper maakt de structuur zichtbaar: criteria, gewichten, prestatieniveaus en beschrijvingen bevinden zich allemaal in één bewerkbare matrix.' },
    { type: 'diagnostic', variant: 'warning', title: 'Wanneer een rubriek herzien moet worden', html: '<ul><li>Verschillende criteria overlappen elkaar zo sterk dat dezelfde fout dubbel wordt bestraft.</li><li>De totale weging is niet gelijk aan 100%, waardoor het eindcijfer lastig te interpreteren is.</li><li>Beschrijvingen gebruiken vage woorden zoals goed, zwak of uitstekend zonder waarneembaar bewijs.</li><li>Er zijn te veel niveaus voor beoordelaars om betrouwbaar te kunnen onderscheiden.</li></ul>' },
    { type: 'title', text: 'Criteria en gewichten kiezen', level: 3 },
    { type: 'table', headers: ['Rubriek-element', 'Goede praktijk', 'Veelvoorkomend probleem'], rows: [['Criteria', 'Beoordeel afzonderlijke vaardigheden of resultaten zoals argumentatie, bewijsvoering, methode, nauwkeurigheid of presentatie.', 'Het mengen van meerdere vaardigheden in één rij maakt feedback onduidelijk.'], ['Gewichten', 'Laat het gewicht aansluiten bij de prioriteit van de lesstof en het doel van de opdracht.', 'Elke rij hetzelfde gewicht geven, ook al zijn sommige resultaten belangrijker.'], ['Niveaus', 'Gebruik 3 tot 5 niveaus die beoordelaars consistent kunnen onderscheiden.', 'Te veel niveaus toevoegen met minieme verschillen in verwoording.'], ['Beschrijvingen', 'Beschrijf waarneembaar bewijs in het werk van de student.', 'Labels gebruiken die beoordelend klinken maar de student niet helpen bij het verbeteren.']] },
    { type: 'comparative', title: 'Analytische versus holistische rubrieken', columns: 2, items: [{ title: 'Analytische rubriek', description: 'Verdeelt de prestatie in afzonderlijke criteria en gewichten. Het meest geschikt wanneer studenten gerichte feedback nodig hebben of wanneer meerdere beoordelaars op één lijn moeten zitten.', highlight: true, points: ['Transparante beoordeling', 'Specifieke feedback', 'Werkt goed bij complexe opdrachten'] }, { title: 'Holistische rubriek', description: 'Geeft één algehele beoordeling. Sneller toe te passen, maar minder bruikbaar als diagnose voor herziening of peer review.', points: ['Snellere beoordeling', 'Handig voor snelle controles', 'Minder gedetailleerde feedback'] }] },
    { type: 'tip', html: '<strong>Schrijf beschrijvingen op basis van bewijs, niet op basis van bijvoeglijke naamwoorden.</strong> Schrijf in plaats van "uitstekende analyse" wat een uitstekende analyse doet: verbindt bewijs met de stelling, benoemt beperkingen en legt uit waarom het bewijs ertoe doet.' },
    { type: 'title', text: 'Hoe een gewogen rubriek te valideren', level: 3 },
    { type: 'paragraph', html: 'Gewichten communiceren prioriteit. Een criterium dat voor 40% meetelt, stuurt de inspanning van een student anders dan een criterium van 10%. De live-berekening in deze tool is bewust strikt: de rubriek is alleen in balans als de som exact 100% is. Indien het totaal onder 100% ligt, is een deel van het cijfer ongedefinieerd. Ligt het daarboven, dan belooft het model te veel punten en ontstaat er verwarring.' },
    { type: 'summary', title: 'Een praktische werkwijze voor rubrieken', items: ['Begin met de leerdoelen voordat u rijen gaat schrijven.', 'Beperk de matrix tot criteria die daadwerkelijk de feedback beïnvloeden.', 'Formuleer beschrijvingen in duidelijke, waarneembare taal.', 'Controleer de weging van 100% voordat u de rubriek deelt.', 'Exporteer naar CSV als u een spreadsheet of LMS wilt configureren.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
