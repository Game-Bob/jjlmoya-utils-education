import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'studievoortgang-en-prognose-gemiddelde-calculator' as const;
const title = 'Studievoortgang en Prognose Gemiddelde Calculator';
const description = 'Organiseer je studie semester per semester, volg je actuele en verwachte gemiddelde, en bereken de vereiste cijfers voor de resterende vakken.';

const faqItems = [
  {
    question: 'Hoe begin ik met het plannen van mijn studie?',
    answer: 'Voeg semesters toe en voer je vakken rechtstreeks in op het dashboard. Je kunt de studiepunten instellen, de status van elk vak selecteren en cijfers registreren.',
  },
  {
    question: 'Wat is het verschil tussen het actuele en het verwachte gemiddelde?',
    answer: 'Het actuele gemiddelde is gebaseerd op afgeronde vakken met definitieve cijfers. Het verwachte gemiddelde berekent de eindscore inclusief lopende en geplande vakken met verwachte resultaten.',
  },
  {
    question: 'Wat toont de indicator voor het vereiste cijfer?',
    answer: 'Het berekent het exacte gemiddelde cijfer dat je moet behalen voor alle resterende vakken om je gewenste gemiddelde te bereiken.',
  },
  {
    question: 'Worden mijn gegevens veilig bewaard?',
    answer: 'Ja. Alle gegevens blijven lokaal in je browser. Er worden geen gegevens naar servers verzonden. Je kunt je studieplan exporteren als een JSON-bestand.',
  },
];

const howToItems = [
  { name: 'Stel doelen in', text: 'Voer de totale benodigde studiepunten en je gewenste gemiddelde in aan de bovenkant van het dashboard.' },
  { name: 'Bouw je curriculum op', text: 'Voeg semesters toe en noteer je vakken met hun officiële studiepunten.' },
  { name: 'Werk cijfers en statussen bij', text: 'Wissel vakstatussen tussen Voltooid, Bezig en Gepland en voer behaalde cijfers in.' },
  { name: 'Analyseer vereiste scores', text: 'Bekijk de indicator om te zien welk gemiddelde je in de komende semesters moet behalen.' },
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

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: 'Naam van de Opleiding',
    graduationCreditsLabel: 'Totaal Benodigde Studiepunten',
    targetGpaLabel: 'Doel Gemiddelde',
    realGpaLabel: 'Actueel Gemiddelde',
    projectedGpaLabel: 'Verwacht Gemiddelde',
    creditsCompletedLabel: 'Behaalde Studiepunten',
    requiredGradeLabel: 'Vereist Cijfer (Resterend)',
    addSemesterButton: 'Semester toevoegen',
    addCourseButton: 'Vak toevoegen',
    exportPlanButton: 'Plan exporteren',
    importPlanButton: 'Plan importeren',
    semesterNamePlaceholder: 'Semesternaam (bijv. Herfst Jaar 1)',
    courseNamePlaceholder: 'Naam van het vak',
    creditsPlaceholder: 'EC',
    gradePlaceholder: 'Cijfer',
    statusCompleted: 'Voltooid',
    statusInProgress: 'Bezig',
    statusPlanned: 'Gepland',
    importError: 'Het studieplan kon niet worden geïmporteerd. Controleer de bestandsstructuur.',
    uploadHint: 'Alle gegevens worden opgeslagen in je browser. Importeren en exporteren gebeurt volledig op je eigen apparaat.',
    statusMessageSuccess: 'Je ligt op schema om je doelgemiddelde te behalen.',
    statusMessageWarning: 'Je moet gemiddeld een {grade} of hoger behalen voor de resterende vakken om je doel te bereiken.',
    statusMessageImpossible: 'Het is wiskundig onmogelijk om je doelgemiddelde te behalen met de huidige instellingen van je vakken.',
    degreeNamePlaceholder: 'bijv. BSc Informatica',
    deleteSemesterLabel: 'Semester verwijderen',
    deleteCourseLabel: 'Vak verwijderen',
    semesterTitleTemplate: 'Semester {num}',
  },
  seo: [
    { type: 'title', text: 'Hoe je studievoortgang en verwacht gemiddelde berekent', level: 2 },
    { type: 'paragraph', html: 'Met dit hulpmiddel simuleer je je toekomstige studieresultaten en studiepunten om strategisch te plannen voor toelatingseisen of beurzen.' },
    { type: 'summary', title: 'Belangrijkste studie indicatoren om bij te houden', items: [
      'Visualiseer de verhouding tussen behaalde en vereiste studiepunten.',
      'Plan cijfersimulaties om de impact van komende toetsen te evalueren.',
      'Bereken welk gemiddelde nodig is om ondergrenzen te vermijden.',
    ] },
    {
      type: 'proscons',
      title: 'Voordelen en beperkingen van de simulator',
      items: [
        {
          pro: 'Helpt je semesters proactief in te richten.',
          con: 'De berekeningen zijn afhankelijk van de realiteitszin van je ingevoerde cijfers.',
        },
        {
          pro: 'Toont exact welk resultaat nodig is om je doel te halen.',
          con: 'Houdt geen rekening met compensatieregelingen van je onderwijsinstelling.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
