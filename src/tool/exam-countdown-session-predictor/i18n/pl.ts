import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-polish' as const;
const title = 'Odliczanie do Egzaminu i Planer Sesji Nauki';
const description = 'Oblicz swoje dokładne dzienne tempo nauki, aby podejść do egzaminu w pełni przygotowanym. Wpisz ilość materiału, ustaw dni wolne i wygeneruj spersonalizowany kalendarz nauki.';

const faqItems = [
  { question: 'Dlaczego codzienna nauka jest lepsza niż zarywanie nocy tuż przed egzaminem?', answer: 'Badania naukowe wykazują, że nauka rozłożona w czasie (rozmieszczenie sesji nauki na przestrzeni dni lub tygodni) prowadzi do znacznie lepszego zapamiętywania informacji na dłużej i zdecydowanie zmniejsza stres egzaminacyjny w porównaniu z wkuwaniem wszystkiego na ostatnią chwilę.' },
  { question: 'Do czego służy bufor na powtórki?', answer: 'Bufor na powtórki rezerwuje określoną liczbę dni bezpośrednio przed egzaminem wyłącznie na powtórzenie materiału. W te dni planer nie wyznacza nowej partii materiału do nauki, co pozwala spokojnie utrwalić wiedzę.' },
  { question: 'Jak niestandardowe dni wolne wpływają na moje tempo nauki?', answer: 'Gdy wykluczysz dany dzień z nauki (jako stały dzień wolny w tygodniu lub konkretną datę), planer automatycznie rozłoży pozostały materiał na inne dostępne dni nauki, nieznacznie zwiększając dzienny cel, abyś zdążył na czas.' },
  { question: 'Czy mogę zmienić dzień wolny z powrotem na dzień nauki?', answer: 'Tak. Możesz w czasie rzeczywistym przełączać dowolny dzień w swoim kalendarzu między statusem dnia nauki a dniem wolnym lub usuwać wykluczone daty z listy, aby natychmiast przeliczyć plan.' },
];

const howToItems = [
  { name: 'Wpisz datę egzaminu', text: 'Wybierz datę swojego nadchodzącego egzaminu w polu kalendarza.' },
  { name: 'Wprowadź całkowitą ilość materiału', text: 'Wpisz objętość materiału do opanowania, np. liczbę stron, rozdziałów lub zadań.' },
  { name: 'Ustaw harmonogram i bufor', text: 'Wybierz swoje stałe dni wolne w tygodniu i określ bufor na powtórki końcowe.' },
  { name: 'Dostosuj i monitoruj', text: 'Przełączaj pojedyncze dni bezpośrednio w swoim kalendarzu na dni wolne, dopasowując naukę do codziennych planów.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Planer Nauki i Odliczanie',
    examDateLabel: 'Data egzaminu',
    materialLabel: 'Cały materiał (Strony / Rozdziały)',
    materialUnitLabel: 'Jednostka materiału',
    progressLabel: 'Już opanowane',
    weeklyScheduleLabel: 'Dni nauki w tygodniu',
    reviewBufferLabel: 'Bufor na powtórki (Dni)',
    excludedDatesLabel: 'Niestandardowe dni wolne',
    dailyPaceLabel: 'Dzienne tempo nauki',
    daysLeftLabel: 'Dni do egzaminu',
    studyDaysLabel: 'Dni nauki',
    bufferDaysLabel: 'Dni bufora',
    scheduleTitle: 'Twój spersonalizowany kalendarz nauki',
    resetButton: 'Przywróć domyślne',
    addExclusionButton: 'Dodaj dzień wolny',
    daysOfWeek: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
    dayTypes: {
      study: 'Dzień nauki',
      rest: 'Dzień wolny',
      review: 'Bufor na powtórki',
      exam: 'Dzień egzaminu',
    },
    units: {
      pages: 'Strony',
      chapters: 'Rozdziały',
      exercises: 'Zadania',
      modules: 'Moduły',
      topics: 'Tematy',
    },
    noStudyDaysError: 'Nie masz dostępnych dni na naukę! Sprawdź harmonogram tygodniowy i ustawienia bufora.',
    examInPastError: 'Data egzaminu musi znajdować się w przyszłości.',
    noMaterialError: 'Wprowadź ilość materiału większą niż zero.',
    scheduleTableHeader: {
      date: 'Data',
      day: 'Dzień',
      type: 'Status',
      target: 'Dzienny cel',
      cumulative: 'Postęp całkowity',
      action: 'Szybkie akcje',
    },
    markAsRest: 'Oznacz jako wolne',
    markAsStudy: 'Oznacz jako naukę',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i Źródła akademickie',
  },
  seo: [
    { type: 'title', text: 'Jak zaplanować naukę, aby zapamiętać jak najwięcej', level: 2 },
    { type: 'paragraph', html: 'Przygotowanie do egzaminu to nie kwestia zarywania nocy tuż przed testem, ale umiejętnego rozłożenia pracy. Równomierne dawkowanie materiału jest kluczowe, aby uniknąć zmęczenia psychicznego, poprawić trwałość pamięci i bez paniki opanować cały materiał.' },
    { type: 'title', text: 'Naukowe podstawy nauki rozłożonej w czasie i powtórek', level: 3 },
    { type: 'paragraph', html: 'Nasz mózg uczy się najlepiej, gdy sesje są przedzielone przerwami. Rozkładając naukę na kilka tygodni, dajesz umysłowi czas na konsolidację śladów pamięciowych i budowanie silniejszych połączeń neuronowych. Taki proces zapobiega znużeniu i ułatwia przenoszenie informacji z pamięci krótkotrwałej do długoterminowej.' },
    { type: 'paragraph', html: 'Zgodnie z krzywą zapominania Ebbinghausa poziom zapamiętania informacji spada wraz z upływem czasu, chyba że aktywnie powtarzamy materiał. Planowane interwały działają jak reset krzywej, spowalniając zapominanie i budując głębokie rozumienie pojęć.' },
    { type: 'title', text: 'Dlaczego warto zaplanować bufor na powtórki końcowe', level: 3 },
    { type: 'paragraph', html: 'Częstym błędem jest uczenie się nowych rzeczy do samego końca. Dedykowany bufor na powtórki (zazwyczaj 2 do 5 dni przed egzaminem) pozwala pisać próbne testy, przeglądać notatki i uzupełniać braki. Daje też czas na odpoczynek, co jest kluczowe dla sprawności intelektualnej w dniu egzaminu.' },
    { type: 'title', text: 'Zalety elastycznego planowania nauki', level: 3 },
    { type: 'paragraph', html: 'Sztywne plany nauki rzadko się sprawdzają, bo życie bywa nieprzewidywalne. Wystarczy jeden zaległy dzień, by dotychczasowy plan stał się nieaktualny. Nasz kalkulator na bieżąco dostosowuje dzienne tempo nauki, co pozwala uniknąć stresu związanego z drobnymi opóźnieniami.' },
    { type: 'list', items: [
      'Regularnie wprowadzaj swoje postępy, by obliczenia były dokładne.',
      'Modyfikuj dni wolne w kalendarzu, reagując na nieprzewidziane wydarzenia.',
      'Dbaj o stabilne tempo zamiast nadrabiać duże zaległości w jeden dzień.'
    ] },
    { type: 'title', text: 'Elastyczność: świadome planowanie odpoczynku', level: 3 },
    { type: 'paragraph', html: 'Odpoczynek nie jest nagrodą, lecz nieodłącznym elementem procesu nauki. Planując dni wolne w kalendarzu, chronisz się przed wypaleniem. Kalkulator automatycznie rozłoży materiał na pozostałe dni.' },
    { type: 'tip', html: '<strong>Planuj z myślą o niespodziankach.</strong> Zostaw przynajmniej jeden dzień wolny w tygodniu jako bufor bezpieczeństwa. W razie choroby lub nagłych spraw wykorzystasz go na nadrobienie zaległości bez burzenia całego planu.' },
    { type: 'title', text: 'Jak samodzielnie obliczyć tempo nauki', level: 3 },
    { type: 'paragraph', html: 'Aby ręcznie wyliczyć dzienny cel, zastosuj proste działanie. Najpierw odejmij przerobiony materiał od całości. Następnie policz dni pozostałe do egzaminu, po czym odejmij od nich dni wolne i bufor na powtórki. Na koniec podziel pozostały materiał przez liczbę faktycznych dni nauki.' },
    { type: 'paragraph', html: 'Przykład: Jeśli masz do nauki 400 stron, przeczytałeś już 50, do egzaminu zostało 20 dni, planujesz 4 dni wolne i 2 dni bufora: Twój pozostały materiał to 350 stron, a dni nauki to 14. Dziennie musisz opanować 350 podzielone przez 14, czyli dokładnie 25 stron.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
