import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'planer-czasu-czytania-i-gestosci-notatek' as const;
const title = 'Planer Czasu Czytania i Gęstości Notatek';
const description = 'Oszacuj czas potrzebny na czytanie akademickie wraz z robieniem notatek, a następnie podziel pracę na praktyczne sesje nauki.';

const faqItems = [
  { question: 'Dlaczego robienie notatek tak bardzo wpływa na czas czytania?', answer: 'Czytanie akademickie to rzadko tylko skanowanie słów. Każde zakreślenie, podsumowanie, pytanie na marginesie czy fiszka wymaga dodatkowego czasu na przetworzenie informacji. Oddzielne planowanie gęstości notatek zapobiega sytuacji, w której zbyt optymistyczne szacowanie stron na godzinę kończy się zarywaniem nocy.' },
  { question: 'Jaki jest optymalny szacunek liczby stron na godzinę?', answer: 'W przypadku trudnych podręczników akademickich standardem jest 15 do 25 stron na godzinę. Przy lżejszych tekstach realne może być 30 do 50 stron na godzinę. Jeśli materiał zawiera wzory, źródła pierwotne lub nowe słownictwo, zacznij od niższych szacunków i dostosuj je po pierwszej zmierzonej sesji.' },
  { question: 'Jak dobrać gęstość notatek?', answer: 'Przeznacz 1 do 2 minut na stronę na podstawowe zakreślenia lub krótki konspekt, 3 do 5 minut na stronę na notatki metodą Cornella, a ponad 5 minut na stronę, jeśli tworzysz fiszki, rozwiązujesz zadania lub piszesz podsumowanie.' },
  { question: 'Czy ten planer może zastąpić harmonogram z sylabusa?', answer: 'Nie. Pomaga on przełożyć liczbę stron na czas i sesje nauki, ale terminy oddawania prac, seminaria, laboratoria i powtórki muszą nadal znajdować się w Twoim głównym kalendarzu.' },
];

const howToItems = [
  { name: 'Wpisz ilość materiału', text: 'Podaj liczbę stron lub równoważnych jednostek tekstu, które musisz przeczytać.' },
  { name: 'Ustaw dostępny czas', text: 'Wpisz całkowitą liczbę minut, jaką możesz przeznaczyć na naukę przed terminem.' },
  { name: 'Oszacuj prędkość i gęstość notatek', text: 'Wybierz prędkość czytania w stronach na godzinę oraz średni czas robienia notatek na stronę.' },
  { name: 'Podziel na sesje', text: 'Ustaw liczbę sesji, aby sprawdzić liczbę stron, minuty oraz czas notatek przypadający na jedno posiedzenie.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'PLN' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Strony do przeczytania',
    minutesLabel: 'Dostępne minuty',
    speedLabel: 'Prędkość czytania, strony/godzina',
    densityLabel: 'Gęstość notatek, minuty/strona',
    sessionsLabel: 'Sesje nauki',
    totalTimeLabel: 'Całkowity nakład pracy',
    readingTimeLabel: 'Czytanie',
    noteTimeLabel: 'Notatki',
    coverageLabel: 'Pokrycie czasu',
    pagesSessionLabel: 'Strony/sesja',
    minutesSessionLabel: 'Minuty/sesja',
    notesSessionLabel: 'Minuty notatek/sesja',
    controlsAriaLabel: 'Ustawienia planu czytania',
    minuteUnit: 'min',
    hourUnit: 'godz.',
    faqTitle: 'Często Zadawane Pytania',
    bibliographyTitle: 'Bibliografia i Zasoby Akademickie',
    statusLabels: {
      comfortable: 'Realny plan',
      tight: 'Napięty, ale możliwy',
      overloaded: 'Harmonogram przeładowany',
    },
    resetButton: 'Resetuj',
  },
  seo: [
    { type: 'title', text: 'Planuj czas czytania w oparciu o notatki, a nie tylko strony', level: 2 },
    { type: 'paragraph', html: 'Wielu studentów szacuje czas nauki, dzieląc liczbę stron przez średnią prędkość czytania, zapominając o największym ukrytym koszcie: robieniu notatek. Rozdział mający czterdzieści stron może zająć dziewięćdziesiąt minut, jeśli go tylko przejrzysz, lub trzy godziny, jeśli robisz notatki, streszczasz i tworzysz pytania kontrolne. Ten planer rozdziela prędkość czytania od czasu robienia notatek, dzięki czemu Twój grafik odzwierciedla rzeczywiste zadanie akademickie.' },
    { type: 'diagnostic', variant: 'info', title: 'Kiedy Twój plan czytania jest prawdopodobnie zbyt optymistyczny', html: '<ul><li>Twój dostępny czas obejmuje wyłącznie minuty samego czytania, z pominięciem robienia notatek czy rozwiązywania zadań.</li><li>Stosujesz ten sam szacunek stron na godzinę do powieści, podręczników naukowych, artykułów akademickich i analiz prawnych.</li><li>Twoje sesje są dłuższe niż czas, w którym potrafisz utrzymać koncentrację, przez co notatki z ostatnich stron są gorszej jakości.</li><li>Termin końcowy obejmuje inne przedmioty, ale plan czytania zakłada, że każda wolna minuta należy do jednych zajęć.</li></ul>' },
    { type: 'title', text: 'Jak dobrać realistyczną prędkość stron na godzinę', level: 3 },
    { type: 'table', headers: ['Typ materiału', 'Prędkość początkowa', 'Wskazówka planowania'], rows: [['Szybka powtórka lub znany temat', '40-60 stron/godzina', 'Używaj tylko wtedy, gdy znasz już terminologię i czytasz w celu odświeżenia wiedzy, a nie jej opanowania.'], ['Standardowy rozdział podręcznika', '20-35 stron/godzina', 'Zmniejsz prędkość, jeśli rozdział zawiera przykłady krok po kroku, wykresy lub pytania kontrolne na końcu sekcji.'], ['Trudna teoria, badania lub źródła pierwotne', '8-20 stron/godzina', 'Zaplanuj wolniejsze sesje i dodaj czas na powtórkę, ponieważ zrozumienie wymaga zazwyczaj kilkukrotnego przeczytania.']] },
    { type: 'tip', html: '<strong>Skalibruj plan po pierwszej sesji.</strong> Zmierz czas przeczytania i zanotowania pierwszych dziesięciu stron. Jeśli kalkulator wskazuje, że plan jest realny, ale sesja próbna pokazuje co innego, zaufaj praktyce i zmniejsz prędkość szacunkową.' },
    { type: 'title', text: 'Co oznacza gęstość notatek', level: 3 },
    { type: 'paragraph', html: 'Gęstość notatek to średni czas poświęcony na przetworzenie każdej strony podczas czytania lub po jego zakończeniu. Proste podejście to jedno słowo kluczowe na marginesie i zakreślenie. Podejście pogłębione obejmuje notatki metodą Cornella, krótkie streszczenie, listę pytań i trzy fiszki. Wybór zależy od formy zaliczenia: testy wielokrotnego wyboru wymagają fiszek, egzaminy pisemne struktur argumentów, a przedmioty ścisłe rozwiązanych zadań.' },
    { type: 'comparative', title: 'Proste notatki vs głębokie przetwarzanie', columns: 2, items: [{ title: 'Proste notatki', description: 'Szybsze ukończenie, przydatne do wstępnego zapoznania się z tekstem, ale informacje szybko się zapomina i trudniej z nich powtarzać.', points: ['Najlepsze do znanych tematów', 'Mniejszy natychmiastowy nakład pracy', 'Słabszy materiał do powtórek'] }, { title: 'Głębokie przetwarzanie', description: 'Wymaga więcej czasu, ale to najlepsza metoda przygotowania do egzaminów, seminariów i prac pisemnych, gdzie fakty muszą być dokładnie zapamiętane.', highlight: true, points: ['Zalecane przed egzaminami', 'Większy natychmiastowy nakład pracy', 'Doskonałe materiały do nauki'] }] },
    { type: 'summary', title: 'Praktyczna zasada planowania', items: ['Staraj się, aby sesje czytania trwały krócej niż 75 minut.', 'Jeśli czas robienia notatek przekracza czas czytania, podziel zadanie: najpierw przeczytaj, potem syntetyzuj.', 'Zarezerwuj ostatnią sesję na utrwalenie wiedzy, zamiast dokładać nowe strony aż do samego terminu.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
