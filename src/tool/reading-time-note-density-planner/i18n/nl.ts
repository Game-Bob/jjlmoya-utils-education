import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'leestijd-notitiedichtheid-planner' as const;
const title = 'Leestijd en Notitiedichtheid Planner';
const description = 'Schat in hoe lang academisch lezen duurt inclusief het maken van notities, en verdeel de werklast in praktische studiesessies.';

const faqItems = [
  { question: 'Waarom heeft notities maken zoveel invloed op de leestijd?', answer: 'Academisch lezen is zelden alleen woorden scannen. Elke markering, samenvatting, vraag in de kantlijn of flashcard kost verwerkingstijd. Door de notitiedichtheid apart te plannen, voorkom je dat een optimistische pagina-per-uur schatting leidt tot nachtwerk vlak voor de deadline.' },
  { question: 'Wat is een goede schatting van pagina-per-uur?', answer: 'Voor dikke studieboeken is 15 tot 25 pagina\'s per uur gebruikelijk. Voor lichtere teksten is 30 tot 50 pagina\'s per uur realistisch. Als het materiaal formules, primaire bronnen of onbekend jargon bevat, begin dan lager en pas het aan na je eerste getimede studiesessie.' },
  { question: 'Hoe moet ik de notitiedichtheid kiezen?', answer: 'Reken op 1 tot 2 minuten per pagina voor basis markeren of een korte samenvatting, 3 tot 5 minuten per pagina voor Cornell-notities, en meer dan 5 minuten per pagina als je flashcards maakt, voorbeelden uitwerkt of een synthese schrijft.' },
  { question: 'Kan deze planner het rooster van de studiegids vervangen?', answer: 'Nee. Het helpt je de leeshoeveelheid om te zetten in benodigde tijd en sessies, maar deadlines, werkgroepen, practica en herhalingsperioden moeten nog steeds in je hoofdagenda gepland worden.' },
];

const howToItems = [
  { name: 'Voer het leespensum in', text: 'Voeg het aantal pagina\'s of vergelijkbare leeseenheden toe die je moet doornemen.' },
  { name: 'Stel beschikbare tijd in', text: 'Voer het totale aantal minuten in dat je realistisch kunt besteden voor de deadline.' },
  { name: 'Schat leessnelheid en notitiedichtheid in', text: 'Kies een snelheid in pagina\'s per uur en de gemiddelde notitietijd die je per pagina verwacht.' },
  { name: 'Verdeel in sessies', text: 'Stel het aantal sessies in om pagina\'s, minuten en notitielast per zitting te zien.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Te lezen pagina\'s',
    minutesLabel: 'Beschikbare minuten',
    speedLabel: 'Leessnelheid, pagina\'s/uur',
    densityLabel: 'Notitiedichtheid, minuten/pagina',
    sessionsLabel: 'Studiesessies',
    totalTimeLabel: 'Totale werklast',
    readingTimeLabel: 'Lezen',
    noteTimeLabel: 'Notities',
    coverageLabel: 'Tijdsdekking',
    pagesSessionLabel: 'Pagina\'s/sessie',
    minutesSessionLabel: 'Minuten/sessie',
    notesSessionLabel: 'Notitieminuten/sessie',
    controlsAriaLabel: 'Instellingen leesplan',
    minuteUnit: 'min',
    hourUnit: 'uur',
    faqTitle: 'Veelgestelde Vragen',
    bibliographyTitle: 'Referenties & Academische Bronnen',
    statusLabels: {
      comfortable: 'Haalbaar plan',
      tight: 'Krap maar mogelijk',
      overloaded: 'Rooster overbelast',
    },
    resetButton: 'Reset',
  },
  seo: [
    { type: 'title', text: 'Plan je leestijd op basis van notities, niet alleen op pagina\'s', level: 2 },
    { type: 'paragraph', html: 'Veel studenten schatten hun leestijd door pagina\'s te delen door een globale snelheid, en vergeten daarbij de grootste verborgen kostenpost: het maken van notities. Een hoofdstuk van veertig pagina\'s kan een taak van negentig minuten zijn als je het alleen doorneemt, of een taak van drie uur als je aantekeningen maakt, samenvat en flashcards maakt. Deze planner scheidt leessnelheid van notitiedichtheid zodat je planning de werkelijke academische taak weerspiegelt.' },
    { type: 'diagnostic', variant: 'info', title: 'Wanneer je leesplan waarschijnlijk te optimistisch is', html: '<ul><li>Je beschikbare tijd dekt alleen de pure leestijd, niet de notities of oefenvragen.</li><li>Je gebruikt dezelfde pagina-per-uur schatting voor romans, zware handboeken, wetenschappelijke artikelen en casussen.</li><li>Je sessies zijn langer dan je normale aandachtsspanne, waardoor de kwaliteit van de notities op de laatste pagina\'s daalt.</li><li>De deadline omvat ook andere vakken, maar het leesplan gaat ervan uit dat elke vrije minuut naar één vak gaat.</li></ul>' },
    { type: 'title', text: 'Een realistische leessnelheid kiezen', level: 3 },
    { type: 'table', headers: ['Type materiaal', 'Startsnelheid', 'Planningsadvies'], rows: [['Lichte herhaling of bekende inhoud', '40-60 pagina\'s/uur', 'Gebruik dit alleen als je de terminologie al beheerst en leest om op te frissen, niet om te leren.'], ['Standaard hoofdstuk uit handboek', '20-35 pagina\'s/uur', 'Verlaag de snelheid als het hoofdstuk rekenvoorbeelden, diagrammen of tussentijdse toetsen bevat.'], ['Complexe theorie, onderzoek of primaire bron', '8-20 pagina\'s/uur', 'Plan kortere sessies en neem een herhalingsblok op, omdat begrip meestal pas ontstaat na meerdere keren lezen.']] },
    { type: 'tip', html: '<strong>Kalibreer na de eerste sessie.</strong> Meet de tijd die nodig is voor de eerste tien pagina\'s inclusief notities. Als de calculator zegt dat het plan haalbaar is, maar de praktijktest het tegendeel bewijst, vertrouw dan op de praktijk en verlaag de snelheid.' },
    { type: 'title', text: 'Wat notitiedichtheid betekent', level: 3 },
    { type: 'paragraph', html: 'Notitiedichtheid is de gemiddelde tijd die nodig is om elke pagina te verwerken tijdens of na het lezen. Een eenvoudige aanpak is een kantlijnwoord en een markering. Een diepgaande aanpak omvat Cornell-notities, een korte samenvatting, een vragenlijst en drie flashcards. De juiste keuze hangt af van het type toetsing: multiple-choice heeft baat bij flashcards, essay-examens bij argumentatiemodellen en kwantitatieve vakken bij uitgewerkte opgaven.' },
    { type: 'comparative', title: 'Eenvoudige notities vs diepe verwerking', columns: 2, items: [{ title: 'Eenvoudige notities', description: 'Sneller klaar, handig voor verkennend lezen, maar je vergeet het sneller en het is later moeilijker te herhalen.', points: ['Het beste voor bekende onderwerpen', 'Lagere directe werklast', 'Minder effectief herhalingsmateriaal'] }, { title: 'Diepe verwerking', description: 'Kost meer tijd, maar is de beste methode ter voorbereiding op tentamens, werkgroepen en essays waar feiten nauwkeurig herinnerd moeten worden.', highlight: true, points: ['Aanbevolen voor tentamens', 'Hogere directe werklast', 'Zeer goed studiemateriaal'] }] },
    { type: 'summary', title: 'Een praktische planningsregel', items: ['Houd leessessies indien mogelijk onder de 75 minuten.', 'Als het maken van notities langer duurt dan het lezen zelf, splits de taak dan: lees eerst, synthetiseer later.', 'Laat de laatste sessie open voor consolidatie in plaats van tot de deadline nieuwe pagina\'s in te plannen.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
