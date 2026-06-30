import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'optymalizator-planu-zajec' as const;
const title = 'Optymalizator Planu Zajęć';
const description = 'Stwórz wizualny tygodniowy plan zajęć, oznacz przedmioty kolorami, wykrywaj nakładające się godziny i eksportuj swój harmonogram jako plik kalendarza .ics.';

const faqItems = [
  {
    question: 'Jak działa wykrywacz konfliktów?',
    answer: 'Każdy blok zajęć ma przypisany dzień, godzinę rozpoczęcia oraz czas trwania. Narzędzie porównuje każdą parę bloków i oznacza je, jeśli odbywają się tego samego dnia, a ich przedziały czasowe się nakładają.'
  },
  {
    question: 'Czy mogę przesuwać zajęcia bezpośrednio w kalendarzu?',
    answer: 'Tak. Przeciągnij blok zajęć do kolumny innego dnia, aby przetestować nowy układ tygodniowy. Stan konfliktów zaktualizuje się automatycznie natychmiast po przeniesieniu.'
  },
  {
    question: 'Co zawiera eksport do pliku .ics?',
    answer: 'Eksport tworzy standardowy plik iCalendar, w którym każde zajęcia są zapisane jako wydarzenie zawierające nazwę przedmiotu, salę, godzinę rozpoczęcia i zakończenia. Możesz go zaimportować do większości aplikacji kalendarza.'
  },
  {
    question: 'Dlaczego warto oznaczać przedmioty kolorami?',
    answer: 'Kolory ułatwiają szybkie skanowanie gęstego planu zajęć. Użyj różnych kolorów dla laboratoriów, wykładów, seminariów lub wymagających przedmiotów, aby konflikty i najbardziej obciążone dni były od razu widoczne.'
  }
];

const howToItems = [
  { name: 'Dodaj szczegóły zajęć', text: 'Wpisz przedmiot, salę, dzień, godzinę rozpoczęcia, czas trwania oraz kolor.' },
  { name: 'Umieść bloki na siatce tygodnia', text: 'Użyj wygenerowanych bloków, aby zobaczyć, jak poszczególne zajęcia wpisują się w Twój tygodniowy plan.' },
  { name: 'Rozwiąż konflikty', text: 'Znajdź podświetlone bloki konfliktów, a następnie przesuń lub edytuj zajęcia, aż panel konfliktów będzie czysty.' },
  { name: 'Wyeksportuj swój kalendarz', text: 'Pobierz plik .ics i zaimportuj go do Google Calendar, Apple Calendar, Outlooka lub innej aplikacji.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Przedmiot',
    roomLabel: 'Sala',
    dayLabel: 'Dzień',
    startLabel: 'Początek',
    durationLabel: 'Czas trwania',
    colorLabel: 'Kolor',
    addClass: 'Dodaj zajęcia',
    saveClass: 'Zapisz zajęcia',
    newClass: 'Nowe zajęcia',
    exportICS: 'Eksportuj .ics',
    conflictLabel: 'Konflikty w planie',
    noConflicts: 'Nie wykryto nakładających się zajęć',
    removeLabel: 'Usuń zajęcia',
    editHint: 'Zaznacz zajęcia, aby je edytować, lub przeciągnij na inny dzień i godzinę.',
    weekendDaysLabel: 'Dni weekendowe',
    saturdayLabel: 'Sobota',
    sundayLabel: 'Niedziela',
    weekDayLabels: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt'],
    weekendDayShortLabels: ['Sob', 'Niedz'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 godz.', '2 godz.', '3 godz.'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Analiza matematyczna',
    defaultRoom: 'Sala 204',
    defaultNewSubject: 'Nowe zajęcia',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Analiza matematyczna', room: 'Sala 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Literatura', room: 'Laboratorium B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Fizyka', room: 'Aula', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'plan-zajec.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'konflikt',
    overlapPlural: 'konflikty',
    detectedLabel: 'wykryto',
    classEditorAriaLabel: 'Edytor zajęć',
    weeklyScheduleAriaLabel: 'Tygodniowy plan zajęć',
    faqTitle: 'Często Zadawane Pytania',
    bibliographyTitle: 'Bibliografia i Standardy Kalendarza',
  },
  seo: [
    { type: 'title', text: 'Jak ułożyć tygodniowy plan zajęć, który naprawdę działa', level: 2 },
    { type: 'paragraph', html: 'Dobry plan zajęć to coś więcej niż zwykła lista przedmiotów. Pokazuje, w które dni masz najwięcej pracy, które dni są poszatkowane okienkami i czy dwa obowiązkowe przedmioty ze sobą nie kolidują. Wizualny optymalizator planu zajęć pozwala dostrzec te problemy, zanim skończą się one opuszczeniem wykładu, pośpiechem czy problemami z rejestracją.' },
    { type: 'summary', title: 'Co sprawdzić przed ostatecznym zatwierdzeniem planu', items: [
      'Czy żadne dwa obowiązkowe przedmioty nie nakładają się tego samego dnia.',
      'Możliwość włączenia soboty i niedzieli dla uczelni prowadzących zajęcia w weekendy.',
      'Użycie różnych kolorów dla laboratoriów, seminariów i wykładów w celu szybkiej orientacji.',
      'Unikanie planowania trudnych przedmiotów pod rząd bez przerw na odpoczynek.',
      'Możliwość wyeksportowania gotowego planu zajęć do Twojej codziennej aplikacji kalendarza.'
    ] },
    { type: 'title', text: 'Dlaczego wizualna siatka wygrywa ze zwykłymi listami', level: 3 },
    { type: 'paragraph', html: 'Zwykłe listy przedmiotów maskują presję czasu, ponieważ oddzielają każde zajęcia od reszty tygodnia. Siatka natychmiast ujawnia intensywność planu. Widzisz, czy poniedziałek ma zbyt wiele godzin kontaktowych, czy wykład blokuje laboratorium, czy sobotnie zajęcia zmieniają rytm tygodnia oraz czy przemieszczanie się między salami nie powoduje ukrytych problemów.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Lista kursów', description: 'Dobra do kodów rejestracyjnych, słaba do oceny tygodniowego obciążenia.' },
      { title: 'Siatka tygodniowa', description: 'Najlepsza do zrozumienia rytmu, okienek i konfliktów na pierwszy rzut oka.', highlight: true },
      { title: 'Tylko aplikacja kalendarza', description: 'Przydatna po zaplanowaniu, ale wolniejsza przy testowaniu wielu alternatyw.' }
    ] },
    { type: 'title', text: 'Jak działa wykrywanie nakładających się zajęć', level: 3 },
    { type: 'paragraph', html: 'Dwa przedmioty kolidują ze sobą, gdy odbywają się tego samego dnia, a ich przedziały czasowe się przecinają. Na przykład wykład w godzinach 10:00-12:00 nakłada się na seminarium w godzinach 11:00-13:00, ponieważ oba zajmują godzinę 11:00. Narzędzie sprawdza każdy blok pod kątem wszystkich pozostałych i zaznacza kolizje z obu stron.' },
    { type: 'table', headers: ['Zajęcia A', 'Zajęcia B', 'Wynik'], rows: [
      ['Poniedziałek 09:00-11:00', 'Poniedziałek 11:00-13:00', 'Brak konfliktu, ponieważ jedne kończą się w momencie rozpoczęcia drugich.'],
      ['Wtorek 10:00-12:00', 'Wtorek 11:00-13:00', 'Konflikt, ponieważ przedziały czasowe się przecinają.'],
      ['Środa 09:00-11:00', 'Czwartek 09:00-11:00', 'Brak konfliktu, ponieważ dni są różne.']
    ] },
    { type: 'title', text: 'Wykorzystanie kolorów jako sygnału w planowaniu nauki', level: 3 },
    { type: 'paragraph', html: 'Kolor to nie tylko dekoracja. Może kodować typ zajęć, trudność przedmiotu, lokalizację kampusu lub poziom energii. Spójna paleta ułatwia odczytywanie planu w pośpiechu, szczególnie podczas porównywania alternatywnych grup w trakcie rejestracji.' },
    { type: 'tip', html: '<strong>Zachowaj spójność znaczenia kolorów.</strong> Na przykład użyj jednej grupy kolorów dla laboratoriów, innej dla wykładów, a ostrzegawczego koloru dla zajęć wymagających dojazdu lub dużego przygotowania.' },
    { type: 'title', text: 'Eksportowanie do aplikacji kalendarza', level: 3 },
    { type: 'paragraph', html: 'Format .ics to standardowy format wymiany danych iCalendar. Eksportowanie planu pozwala na zaimportowanie zajęć do Google Calendar, Apple Calendar, Outlooka i wielu uczelnianych systemów. Po imporcie możesz dodać przypomnienia, czas dojazdu, reguły cykliczności i własne bloki na naukę.' },
    { type: 'diagnostic', variant: 'warning', title: 'Przed importem', html: 'Upewnij się, że data rozpoczęcia tygodnia zgadza się z tygodniem, do którego chcesz zaimportować dane, sprawdź strefy czasowe w aplikacji kalendarza i upewnij się, że importowane wydarzenia nie dublują istniejących planów.' },
    { type: 'title', text: 'Praktyczny schemat działania podczas rejestracji na zajęcia', level: 3 },
    { type: 'list', items: [
      'Najpierw dodaj przedmioty obowiązkowe i rozwiąż ich konflikty przed dodaniem przedmiotów obieralnych.',
      'Włącz sobotę lub niedzielę, jeśli Twój plan uczelniany obejmuje zajęcia weekendowe.',
      'Użyj kolorów do oddzielenia wykładów, laboratoriów, seminariów i nauki własnej.',
      'Przeciągaj bloki między dniami, aby szybko porównać alternatywne grupy.',
      'Zostaw widoczne przerwy na posiłki, dojazdy i odpoczynek.',
      'Wyeksportuj plan dopiero wtedy, gdy panel konfliktów będzie całkowicie czysty.'
    ] },
    { type: 'message', title: 'Planowanie to proces iteracyjny', html: 'Potraktuj pierwszą wersję jako szkic. Najlepszy plan zajęć powstaje zazwyczaj po przetestowaniu konfliktów, porównaniu grup i sprawdzeniu, czy tygodniowy rytm jest możliwy do utrzymania.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
