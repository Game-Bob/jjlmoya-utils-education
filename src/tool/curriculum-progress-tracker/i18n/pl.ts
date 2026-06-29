import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'kalkulator-postepu-studiow-i-prognozowanej-sredniej-ocen' as const;
const title = 'Kalkulator postępu studiów i prognozowanej średniej ocen';
const description = 'Organizuj swoje studia semestr po semestrze, śledź swoją rzeczywistą i prognozowaną średnią ocen oraz symuluj wymagane oceny.';

const faqItems = [
  {
    question: 'Jak zacząć planowanie studiów?',
    answer: 'Po prostu dodaj semestry i wprowadź przedmioty bezpośrednio w panelu. Możesz określić punkty ECTS, status przedmiotu oraz oceny.',
  },
  {
    question: 'Czym różni się średnia rzeczywista od prognozowanej?',
    answer: 'Średnia rzeczywista uwzględnia wyłącznie przedmioty zakończone z wpisaną oceną. Średnia prognozowana uwzględnia przedmioty w toku i planowane z przewidywanymi ocenami.',
  },
  {
    question: 'Co oznacza wskaźnik wymaganej oceny?',
    answer: 'Oblicza dokładną średnią ocen, jaką musisz uzyskać z pozostałych przedmiotów, aby osiągnąć swój cel średniej końcowej.',
  },
  {
    question: 'Czy moje dane są bezpieczne?',
    answer: 'Tak. Wszystkie dane są przechowywane lokalnie w przeglądarce i nie są wysyłane na serwer. Możesz wyeksportować plan jako plik JSON.',
  },
];

const howToItems = [
  { name: 'Ustaw cele', text: 'Wprowadź docelową liczbę punktów ECTS oraz planowaną średnią ocen na górze panelu.' },
  { name: 'Zbuduj plan studiów', text: 'Dodaj semestry i wypisz swoje przedmioty wraz z przypisanymi im punktami ECTS.' },
  { name: 'Aktualizuj oceny i statusy', text: 'Zmieniaj statusy przedmiotów między Zaliczony, W Toku i Planowany, wpisując oceny.' },
  { name: 'Analizuj wymagane oceny', text: 'Sprawdź wskaźnik, aby dowiedzieć się, jaką średnią musisz utrzymać w przyszłości.' },
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
    degreeNameLabel: 'Nazwa Kierunku Studiów',
    graduationCreditsLabel: 'Docelowe Punkty ECTS',
    targetGpaLabel: 'Docelowa Średnia Ocen',
    realGpaLabel: 'Średnia Rzeczywista',
    projectedGpaLabel: 'Średnia Prognozowana',
    creditsCompletedLabel: 'Zdobyte Punkty ECTS',
    requiredGradeLabel: 'Wymagana Ocena (Pozostałe)',
    addSemesterButton: 'Dodaj Semestr',
    addCourseButton: 'Dodaj Przedmiot',
    exportPlanButton: 'Eksportuj Plan',
    importPlanButton: 'Importuj Plan',
    semesterNamePlaceholder: 'Nazwa semestru (np. Semestr 1)',
    courseNamePlaceholder: 'Nazwa przedmiotu',
    creditsPlaceholder: 'ECTS',
    gradePlaceholder: 'Ocena',
    statusCompleted: 'Zaliczony',
    statusInProgress: 'W Toku',
    statusPlanned: 'Planowany',
    importError: 'Nie można zaimportować planu studiów. Sprawdź format pliku.',
    uploadHint: 'Wszystkie dane są zapisywane w przeglądarce. Eksport i import odbywają się w pełni lokalnie na Twoim urządzeniu.',
    statusMessageSuccess: 'Jesteś na dobrej drodze do osiągnięcia docelowej średniej.',
    statusMessageWarning: 'Musisz uzyskać średnią {grade} lub wyższą z pozostałych przedmiotów, aby osiągnąć cel.',
    statusMessageImpossible: 'Osiągnięcie docelowej średniej przy obecnych ustawieniach przedmiotów jest matematycznie niemożliwe.',
    degreeNamePlaceholder: 'np. Informatyka',
    deleteSemesterLabel: 'Usuń Semestr',
    deleteCourseLabel: 'Usuń Przedmiot',
    semesterTitleTemplate: 'Semestr {num}',
  },
  seo: [
    { type: 'title', text: 'Jak kontrolować postępy na studiach i szacować średnią ocen', level: 2 },
    { type: 'paragraph', html: 'Zarządzanie postępem na studiach wymaga dobrego planowania. Ten symulator pozwala przewidzieć Twoją końcową średnią oraz obliczyć cele dla pozostałych egzaminów.' },
    { type: 'summary', title: 'Najważniejsze wskaźniki akademickie do śledzenia', items: [
      'Porównaj zdobyte punkty ECTS z wymaganiami programu.',
      'Oddziel rzeczywiste oceny od planowanych symulacji.',
      'Oblicz minimalną średnią niezbędną do zachowania stypendium naukowego.',
    ] },
    {
      type: 'proscons',
      title: 'Zalety i ograniczenia symulatora studiów',
      items: [
        {
          pro: 'Umożliwia proaktywne planowanie kolejnych semestrów.',
          con: 'Prognozy zależą od wpisanych przez Ciebie zakładanych ocen.',
        },
        {
          pro: 'Wskazuje dokładne cele ocen niezbędne do osiągnięcia wyniku.',
          con: 'Nie uwzględnia automatycznie specyficznych reguł warunków lub powtórzeń na uczelni.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
