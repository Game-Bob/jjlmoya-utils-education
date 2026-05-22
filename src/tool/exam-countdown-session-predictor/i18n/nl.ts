import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-dutch' as const;
const title = 'Examen Countdown & Studieplanner';
const description = 'Bereken uw exacte dagelijkse studietempo om optimaal voorbereid aan uw examen te beginnen. Voer uw studiestof in, stel rustdagen in en genereer een persoonlijke studiekalender.';

const faqItems = [
  { question: 'Waarom is dagelijks studeren beter dan alles op het laatste moment leren?', answer: 'Wetenschappelijk onderzoek toont aan dat verspreid leren (studiemomenten spreiden over een langere periode) leidt tot een veel betere retentie op de lange termijn en de examenstress aanzienlijk vermindert in vergelijking met stampen in de laatste dagen.' },
  { question: 'Waarvoor dient de herhalingsbuffer?', answer: 'De herhalingsbuffer reserveert een specifiek aantal dagen vlak voor het examen uitsluitend voor algemene herhaling. De planner plant tijdens deze dagen geen nieuwe stof in, zodat u de tijd heeft om uw kennis te consolideren.' },
  { question: 'Welke invloed hebben aangepaste rustdagen op mijn studietempo?', answer: 'Wanneer u een dag uitsluit (als wekelijkse rustdag of specifieke datum), verdeelt de planner de resterende stof over de overige studiedagen. Hierdoor stijgt uw dagelijkse doelstelling iets, zodat u alsnog op tijd klaar bent.' },
  { question: 'Kan ik een rustdag weer veranderen in een studiedag?', answer: 'Ja. U kunt elke dag in uw kalender in real-time omschakelen tussen rust en studie, of uitgesloten datums uit de lijst verwijderen om het schema direct opnieuw te berekenen.' },
];

const howToItems = [
  { name: 'Voer uw examendatum in', text: 'Selecteer de datum van uw komende examen in de kalender.' },
  { name: 'Voer uw totale studiestof in', text: 'Vul de hoeveelheid stof in die u moet studeren, zoals het aantal pagina\'s, hoofdstukken of opdrachten.' },
  { name: 'Stel uw schema en buffer in', text: 'Kies uw wekelijkse rustdagen en stel een buffer in voor de eindherhaling.' },
  { name: 'Pas aan en volg uw voortgang', text: 'Schakel individuele dagen direct in uw kalender om naar rustdagen om het schema aan te passen aan uw dagelijks leven.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Studieplanner & Countdown',
    examDateLabel: 'Examendatum',
    materialLabel: 'Totale studiestof (Pagina\'s / Hoofdstukken)',
    materialUnitLabel: 'Eenheid studiestof',
    progressLabel: 'Al voltooid',
    weeklyScheduleLabel: 'Wekelijkse studiedagen',
    reviewBufferLabel: 'Herhalingsbuffer (Dagen)',
    excludedDatesLabel: 'Aangepaste rustdagen',
    dailyPaceLabel: 'Dagelijks studietempo',
    daysLeftLabel: 'Dagen over',
    studyDaysLabel: 'Studiedagen',
    bufferDaysLabel: 'Bufferdagen',
    scheduleTitle: 'Uw persoonlijke studiekalender',
    resetButton: 'Standaardwaarden herstellen',
    addExclusionButton: 'Rustdag toevoegen',
    daysOfWeek: ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'],
    dayTypes: {
      study: 'Studiedag',
      rest: 'Rustdag',
      review: 'Herhalingsbuffer',
      exam: 'Examendag',
    },
    units: {
      pages: 'Pagina\'s',
      chapters: 'Hoofdstukken',
      exercises: 'Opdrachten',
      modules: 'Modules',
      topics: 'Onderwerpen',
    },
    noStudyDaysError: 'U heeft geen beschikbare studiedagen! Controleer uw wekelijkse schema en herhalingsbuffer.',
    examInPastError: 'De examendatum moet in de toekomst liggen.',
    noMaterialError: 'Voer een hoeveelheid studiestof in die groter is dan nul.',
    scheduleTableHeader: {
      date: 'Datum',
      day: 'Dag',
      type: 'Status',
      target: 'Dagelijks doel',
      cumulative: 'Totale voortgang',
      action: 'Snelle acties',
    },
    markAsRest: 'Markeer als rustdag',
    markAsStudy: 'Markeer als studiedag',
    faqTitle: 'Veelgestelde vragen',
    bibliographyTitle: 'Literatuur & Academische bronnen',
  },
  seo: [
    { type: 'title', text: 'Hoe u uw studiemomenten plant voor een maximale retentie', level: 2 },
    { type: 'paragraph', html: 'Terbereiding op een examen gaat minder over de uren die u de avond van tevoren maakt, en meer over hoe u uw studielast verdeelt. Jezelf doseren is cruciaal om cognitieve burn-out te voorkomen, uw geheugen te verbeteren en ervoor te zorgen dat u alle benodigde stof zonder paniek doorneemt.' },
    { type: 'title', text: 'De wetenschap achter gespreid leren en herhaling', level: 3 },
    { type: 'paragraph', html: 'Onze hersenen leren het best door spreiding. Wanneer u studiemomenten over meerdere weken verdeelt, stelt u uw hersenen in staat om via consolidatie sterkere neurale verbindingen op te bouwen. Gespreide herhaling voorkomt mentale vermoeidheid en helpt informatie over te dragen van het kortetermijngeheugen naar het langetermijngeheugen.' },
    { type: 'paragraph', html: 'Volgens de vergeetcurve van Ebbinghaus neemt onze geheugensterkte in de loop van de tijd af, tenzij we de informatie actief herhalen. Geplande intervallen werken als een reset, waardoor het vergeten wordt vertraagd en er een diep conceptueel begrip ontstaat.' },
    { type: 'title', text: 'Een buffer instellen voor de eindherhaling', level: 3 },
    { type: 'paragraph', html: 'Een veelgemaakte fout is om tot het allerlaatste moment nieuwe stof te bestuderen. Een specifieke herhalingsbuffer (meestal 2 tot 5 dagen voor de test) geeft u de ruimte om oefenexamens te maken, samenvattingen door te nemen en zwakke plekken aan te pakken. Het zorgt er ook voor dat u voldoende slaapt.' },
    { type: 'title', text: 'De kracht van een adaptieve studieplanning', level: 3 },
    { type: 'paragraph', html: 'Statische studieplannen mislukken bijna altijd omdat het leven onvoorspelbaar is. Als u een paar pagina\'s achterloopt, is een vast schema direct verouderd. Een adaptieve calculator berekent uw dagelijkse doelen in real-time opnieuw, waardoor de stress van kleine tegenslagen verdwijnt.' },
    { type: 'list', items: [
      'Voer regelmatig uw voortgang in om de berekeningen nauwkeurig te houden.',
      'Pas uw rustdagen aan als er onverwachte conflicten in uw agenda ontstaan.',
      'Houd een constant tempo aan in plaats van te proberen grote achterstanden op één dag in te halen.'
    ] },
    { type: 'title', text: 'Flexibiliteit: bewust rustdagen inplannen', level: 3 },
    { type: 'paragraph', html: 'Rust is geen beloning, maar een essentieel onderdeel van het leerproces. Door bewust rustdagen in uw kalender op te nemen, voorkomt u oververmoeidheid. Deze planner verdeelt de resterende stof automatisch over de overblijvende dagen.' },
    { type: 'tip', html: '<strong>Houd rekening met het onverwachte.</strong> Plan altijd minstens één wekelijkse rustdag in. Dit dient als veiligheidsklep. Mocht u ziek worden of een noodgeval hebben, dan kunt u die dag gebruiken om in te halen zonder achter te raken op uw hoofdschema.' },
    { type: 'title', text: 'Hoe u uw studietempo handmatig berekent', level: 3 },
    { type: 'paragraph', html: 'Om uw dagelijkse studiedoel handmatig te berekenen, kunt u een eenvoudige wiskundige formule gebruiken. Bepaal eerst uw resterende werklast door uw voltooide pagina\'s of hoofdstukken af te trekken van het totaal. Tel vervolgens het aantal dagen tot uw examen en trek daar uw rustdagen en herhalingsbuffer van af. Deel tot slot de resterende werklast door de beschikbare studiedagen.' },
    { type: 'paragraph', html: 'Bijvoorbeeld: als u 400 pagina\'s moet studeren, er 50 heeft afgerond, nog 20 dagen heeft tot het examen, 4 rustdagen plant en een herhalingsbuffer van 2 dagen wilt: dan is uw resterende werklast 350 pagina\'s en zijn uw studiedagen 14. Uw dagelijkse tempo is 350 gedeeld door 14, wat exact gelijk is aan 25 pagina\'s per dag.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
