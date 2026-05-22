import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'cijferlijst-gpa-analyser' as const;
const title = 'Cijferlijst GPA parser & calculator';
const description = 'Bereken direct je cumulatieve GPA en gewogen gemiddelde door de onbewerkte tekst van je universitaire cijferlijst te kopiëren en te plakken. Werkt volledig offline.';

const faqItems = [
  {
    question: 'Hoe werkt het automatisch inlezen?',
    answer: 'Het scant de geplakte tekst regel voor regel en verdeelt deze in kolommen op basis van spaties, tabs of leestekens. Vervolgens worden de waarden geanalyseerd om automatisch te bepalen welke kolom vaknamen, cijfers en studiepunten bevat.'
  },
  {
    question: 'Zijn mijn academische gegevens veilig?',
    answer: 'Ja, absoluut. De verwerking en GPA-berekeningen worden volledig binnen de browser op je eigen apparaat uitgevoerd. Er worden geen gegevens naar een server verzonden, waardoor je cijferlijst 100% privé blijft.'
  },
  {
    question: 'Wat als de kolommen verkeerd zijn gekoppeld?',
    answer: 'Dit kun je eenvoudig aanpassen. Elke kolom in de herkende tabel heeft een dropdown-menu in de koptekst. Hier kun je handmatig selecteren of die kolom de vaknaam, het cijfer of de studiepunten bevat, of dat deze moet worden genegeerd.'
  },
  {
    question: 'Worden cijfers in letters en verschillende schalen ondersteund?',
    answer: 'Ja, er is ondersteuning voor zowel standaardschalen met letters (A, B, C, D, F) als numerieke schalen (0-10, 0-20, 0-100). Je kunt de maximale schaal configureren zodat deze aansluit op het systeem van jouw universiteit of hogeschool.'
  }
];

const howToItems = [
  {
    name: 'Kopieer je cijferlijst',
    text: 'Ga naar het portaal van je universiteit of je cijferoverzicht, selecteer de tekst en kopieer deze.'
  },
  {
    name: 'Plak de tekst',
    text: 'Plak de gekopieerde tekst in het tekstveld van deze tool.'
  },
  {
    name: 'Controleer en koppel',
    text: 'Controleer de automatisch gegenereerde tabel. Pas indien nodig de kolomrollen aan met behulp van de kopteksten.'
  },
  {
    name: 'Bekijk je GPA',
    text: 'Je ziet direct onderaan je berekende gewogen GPA en het totale aantal studiepunten.'
  }
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Plak hier je cijferlijst',
    pasteAreaPlaceholder: 'Plak hier de tekst die gekopieerd is uit Moodle, Canvas of de cijferpagina van je universiteit...',
    parsedTitle: 'Verwerkte cijferlijstgegevens',
    columnSelect: 'Kolom koppelen',
    subjectName: 'Naam van het vak',
    grade: 'Cijfer',
    credits: 'Studiepunten',
    ignore: 'Negeren',
    gpaResult: 'Cumulatief GPA',
    totalCredits: 'Totaal aantal studiepunten',
    emptyState: 'Plak hierboven je cijferlijstgegevens om hier een voorbeeld te bekijken en rijen aan te passen.',
    scaleLabel: 'Limiet van de cijferschaal',
    customScale: 'Maximale cijferschaal',
    exampleSubject: 'Calculus I',
    newSubjectPlaceholder: 'Nieuw vak',
    clearBtn: 'Tekst wissen',
    errorFormat: 'We konden geen duidelijke kolommen herkennen. Probeer een tabel- of lijstweergave te kopiëren en te plakken.'
  },
  seo: [
    { type: 'title', text: 'Hoe je de GPA inleest en berekent uit elke cijferlijst', level: 2 },
    { type: 'paragraph', html: 'Het berekenen van je studiegemiddelde zou niet moeten betekenen dat je handmatig tientallen vakken moet invoeren. Deze tool haalt gegevens uit gekopieerde onbewerkte tekst om direct je GPA te berekenen.' },
    { type: 'title', text: 'Waarom een cijferlijst-parser gebruiken?', level: 3 },
    { type: 'paragraph', html: 'Universitaire portalen tonen cijferlijsten vaak in complexe HTML-tabellen. Door deze rechtstreeks in deze tool te kopiëren en te plakken, kan onze intelligente verwerkingsmodule de vakken, cijfers en studiepunten direct en zonder typefouten extraheren.' },
    { type: 'title', text: 'Veilig, privé en snel', level: 3 },
    { type: 'paragraph', html: 'Doordat de verwerking lokaal in JavaScript draait, verlaten je studieresultaten je browser nooit. Je kunt pagina\'s met honderden regels in milliseconden verwerken.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
