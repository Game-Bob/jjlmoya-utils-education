import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'gewogen-cijfer-eindscore-calculator';
const title = 'Gewogen Cijfer & Eindscore Calculator';
const description = 'Stop met stressen over je gemiddelde! Bereken eenvoudig je cursuscijfers en eindresultaten. Voer gewoon je opdrachten, examens en hun weging in om te zien waar je staat.';

const faqItems = [
  { question: 'Wat is een gewogen cijfer precies?', answer: 'In veel cursussen zijn niet alle opdrachten gelijk. Een eindexamen kan 40% van je cijfer waard zijn, terwijl huiswerk slechts 10% telt. Een gewogen cijfer houdt rekening met deze verschillen, zodat je je ware positie kent.' },
  { question: 'Waar kan ik de weging van mijn cijfers vinden?', answer: 'Meestal staan deze vermeld in je cursushandleiding onder "Beoordelingsbeleid" of "Toetsing". Docenten kennen een percentage toe aan verschillende categorieën zoals participatie, quizzen en projecten.' },
  { question: 'Wat als mijn opdrachten nog niet tot 100% optellen?', answer: 'Geen zorgen! Onze calculator toont een "geprojecteerd" cijfer op basis van het werk dat je tot nu toe hebt voltooid. Het schaalt je huidige scores naar een 100% equivalent.' },
  { question: 'Kan ik dit gebruiken voor mijn GPA?', answer: 'Absoluut. Je kunt elke cursus als een "vak" behandelen en de studiepunten gebruiken als de "weging" om je gewogen semestergemiddelde te vinden.' },
];

const howToItems = [
  { name: 'Lijst je opdrachten op', text: 'Voer de naam van je examens, quizzen of projecten in. Houd het georganiseerd!' },
  { name: 'Voer je scores in', text: 'Typ het cijfer in dat je voor elk item hebt ontvangen (meestal op 10 of 100).' },
  { name: 'Voeg de weging toe', text: 'Controleer je handleiding en voer het percentage in dat elk item bijdraagt aan je eindcijfer.' },
  { name: 'Controleer je resultaat', text: 'Bekijk hoe je eindcijfer direct wordt bijgewerkt. Geen handmatig rekenwerk nodig!' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    addSubject: 'Item Toevoegen',
    subjects: 'Cijfers & Weging',
    subjectName: 'Opdracht / Vak',
    grade: 'Cijfer',
    weight: 'Weging (%)',
    scale: 'Schaal (bijv. 4.0, 10, 100)',
    finalGrade: 'Je Huidige Cijfer',
    removeSubject: 'Verwijderen',
    weightSum: 'Totale Weging',
    exampleSubject: 'Eindexamen',
    newSubjectPlaceholder: 'bijv. Tussentijdse toets',
  },
  seo: [
    { type: 'title', text: 'Hoe je Je Cijfers Beheerst met een Gewogen Calculator', level: 2 },
    { type: 'paragraph', html: 'Heb je je ooit verloren gevoeld bij het kijken naar een stapel cijfers? Je bent niet de enige. Inzicht in je <strong>gewogen gemiddelde</strong> is het geheim om voorop te blijven in de middelbare school en het hoger onderwijs.' },
    { type: 'title', text: 'Waarom Gewogen Cijfers Belangrijk Zijn', level: 3 },
    { type: 'paragraph', html: 'Een eenvoudig gemiddelde behandelt elke opdracht hetzelfde. Maar in de echte wereld (en in je handleiding) zou een kleine quiz van 2 minuten niet even zwaar mogen tellen als een paper van 20 pagina\'s. Gewogen cijfers geven meer "kracht" aan de belangrijke dingen.' },
    { type: 'paragraph', html: 'Of je nu je <strong>semester-GPA</strong> berekent of gewoon wilt zien of je de laatste optionele opdracht kunt overslaan, weging is de tool die je nodig hebt.' },
    { type: 'title', text: 'Bereken je Eindcijfer in 3 Stappen', level: 3 },
    { type: 'list', items: ['Vind de weging van elke categorie in je handleiding (bijv. Examens 50%, Huiswerk 20%).', 'Vermenigvuldig je score met die weging (bijv. 90 score * 0,50 weging = 45 punten).', 'Tel al die punten bij elkaar op om je eindpercentage te krijgen.'] },
    { type: 'title', text: 'Pro Tip: Het "Wat-Als" Spel', level: 3 },
    { type: 'paragraph', html: 'Gebruik deze calculator om verschillende scenario\'s te simuleren. "Wat als ik een 85 haal voor het eindexamen?" of "Wat als ik dit huiswerk mis?" Het in realtime zien van de impact helpt je om je studietijd daar prioriteit te geven waar het echt een verschil maakt.' },
    { type: 'tip', html: '<strong>Raak niet in paniek.</strong> Als je wegingen nog niet tot 100% optellen, zal de calculator projecteren hoe je cijfer eruitziet op basis van je huidige werk. Het is een geweldige manier om de voortgang halverwege het semester te volgen!' },
    { type: 'title', text: 'Rekenkundig vs. Gewogen: Het Echte Verschil', level: 3 },
    { type: 'paragraph', html: 'Een rekenkundig gemiddelde kan gevaarlijk misleidend zijn. Als je 100% haalt voor een kleine quiz maar 50% voor een groot examen, zegt een eenvoudig gemiddelde dat je een 75% hebt (voldoende). Maar als het examen 90% van je cijfer waard is, is je <strong>feitelijke gewogen cijfer</strong> dichter bij een 55% (onvoldoende). Kijk altijd naar de wegingen!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
