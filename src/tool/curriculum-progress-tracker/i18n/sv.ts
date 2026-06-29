import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'kalkylator-for-studieresultat-och-prognostiserat-betygssnitt' as const;
const title = 'Kalkylator för studieresultat och prognostiserat betygssnitt';
const description = 'Organisera din utbildning termin för termin, spåra ditt faktiska och prognostiserade betygssnitt, och simulera nödvändiga betyg.';

const faqItems = [
  {
    question: 'Hur börjar jag planera mina studier?',
    answer: 'Lägg bara till terminer och fyll i dina kurser direkt i verktyget. Du kan ange poäng, välja status för varje kurs och registrera betyg.',
  },
  {
    question: 'Vad är skillnaden mellan faktiskt och prognostiserat betygssnitt?',
    answer: 'Det faktiska snittet beräknas enbart på avslutade kurser med registrerade betyg. Det prognostiserade snittet inkluderar pågående och framtida kurser.',
  },
  {
    question: 'Vad visar indikatorn för nödvändigt betyg?',
    answer: 'Den beräknar det exakta genomsnittliga betyg du måste uppnå i alla återstående kurser för att nå ditt övergripande målbetyg.',
  },
  {
    question: 'Är mina uppgifter säkra?',
    answer: 'Ja. All data sparas lokalt i din webbläsare. Ingen information skickas till externa servrar. Du kan exportera din plan som en JSON-fil.',
  },
];

const howToItems = [
  { name: 'Ställ in mål', text: 'Ange det totala antalet högskolepoäng som krävs för examen och ditt målbetyg högst upp.' },
  { name: 'Skapa studieplanen', text: 'Lägg till terminer och lista dina kurser med tillhörande högskolepoäng.' },
  { name: 'Uppdatera betyg och status', text: 'Ändra kursstatus mellan Avslutad, Pågående och Planerad samt fyll i betyg.' },
  { name: 'Analysera krav', text: 'Se vilket genomsnittsbetyg som krävs i kommande terminer för att nå ditt mål.' },
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
    degreeNameLabel: 'Utbildningsnamn',
    graduationCreditsLabel: 'Högskolepoäng för examen',
    targetGpaLabel: 'Målbetyg',
    realGpaLabel: 'Faktiskt betygssnitt',
    projectedGpaLabel: 'Prognostiserat snitt',
    creditsCompletedLabel: 'Avklarade poäng',
    requiredGradeLabel: 'Krävt betyg (Återstående)',
    addSemesterButton: 'Lägg till termin',
    addCourseButton: 'Lägg till kurs',
    exportPlanButton: 'Exportera plan',
    importPlanButton: 'Importera plan',
    semesterNamePlaceholder: 'Terminsnamn (t.ex. Höst År 1)',
    courseNamePlaceholder: 'Kursnamn',
    creditsPlaceholder: 'HP',
    gradePlaceholder: 'Betyg',
    statusCompleted: 'Avslutad',
    statusInProgress: 'Pågående',
    statusPlanned: 'Planerad',
    importError: 'Studieplanen kunde inte importeras. Kontrollera filformatet.',
    uploadHint: 'All data sparas lokalt i din webbläsare. Import och export sker helt på din egen enhet.',
    statusMessageSuccess: 'Du är på god väg att nå ditt målbetyg.',
    statusMessageWarning: 'Du behöver uppnå ett snitt på {grade} eller högre i återstående kurser för att nå ditt målbetyg.',
    statusMessageImpossible: 'Det är matematiskt omöjligt att nå ditt målbetyg med dina nuvarande kursinställningar.',
    degreeNamePlaceholder: 't.ex. Kandidatexamen i datavetenskap',
    deleteSemesterLabel: 'Radera termin',
    deleteCourseLabel: 'Radera kurs',
    semesterTitleTemplate: 'Termin {num}',
  },
  seo: [
    { type: 'title', text: 'Hur du prognostiserar dina betyg och högskolepoäng inför examen', level: 2 },
    { type: 'paragraph', html: 'Planera din akademiska bana med precision. Det här verktyget låter dig visualisera framsteg, simulera olika betygsscenarier och förbereda kommande terminer strategiskt.' },
    { type: 'summary', title: 'Viktiga nyckeltal att följa varje termin', items: [
      'Se förhållandet mellan avklarade poäng och examenskraven.',
      'Särskilj dina bekräftade betyg från hypotetiska antaganden.',
      'Beräkna det genomsnittsbetyg som krävs för framtida kurser.',
    ] },
    {
      type: 'proscons',
      title: 'Fördelar och begränsningar med betygssimulatorn',
      items: [
        {
          pro: 'Underlättar proaktiv planering av kommande terminer.',
          con: 'Prognosernas tillförlitlighet beror helt på realismen i dina betygssimuleringar.',
        },
        {
          pro: 'Visar tydligt vilka studieresultat som krävs för att uppnå dina mål.',
          con: 'Tar inte hänsyn till lokala regler för betygskomplettering vid ditt lärosäte.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
