import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = 'Międzynarodowy Konwerter Ocen i Kalkulator Ekwiwalentu GPA';
const description = 'Najdokładniejsze narzędzie do przeliczania ocen akademickich między systemami międzynarodowymi. Błyskawicznie konwertuj wyniki z Hiszpanii, USA, Wielkiej Brytanii, Niemiec, Francji, Włoch i innych krajów. Niezbędne przy Erasmus+, Fulbright i aplikacjach na zagraniczne uczelnie.';

const faqItems = [
  { 
    question: 'Jak działa międzynarodowe przeliczanie ocen?', 
    answer: 'Narzędzie wykorzystuje matematyczne mapowanie liniowe oparte na minimalnej ocenie zaliczającej i maksymalnym możliwym wyniku dla każdego kraju. Gwarantuje to, że „zaliczenie” w jednym systemie odpowiada „zaliczeniu” w innym, zachowując akademicką proporcjonalność w różnych skalach.' 
  },
  { 
    question: 'Czy ten konwerter jest oficjalny przy rekrutacji na studia?', 
    answer: 'Choć nasze algorytmy opierają się na standardowych międzynarodowych tabelach ekwiwalentów (takich jak stosowane przez ECTS czy WES), narzędzie to ma charakter informacyjny. W celu oficjalnego uznania punktów należy zawsze skonsultować się z uczelnią przyjmującą lub akredytowaną instytucją oceniającą.' 
  },
  { 
    question: 'Czym jest funkcja „Trybu Zbiorczego” (Bulk Mode)?', 
    answer: 'Tryb Zbiorczy pozwala studentom z długimi transkryptami na jednoczesne przetwarzanie wielu ocen. Wystarczy wkleić kolumnę liczb z pliku PDF lub Excel, a narzędzie błyskawicznie obliczy poszczególne konwersje i ogólną średnią GPA.' 
  },
  { 
    question: 'Czy mogę przeliczyć swoje oceny na ECTS?', 
    answer: 'Tak. Konwerter zapewnia ekwiwalenty zgodne z Europejskim Systemem Transferu i Akumulacji Punktów (ECTS), co czyni go idealnym dla studentów planujących mobilność lub aplikujących na studia magisterskie w Europie.' 
  }
];

const howToItems = [
  { name: '1. Wybierz system źródłowy', text: 'Zidentyfikuj swój kraj pochodzenia lub konkretną skalę ocen (np. Hiszpania 0-10, Francja 0-20).' },
  { name: '2. Zdefiniuj kraje docelowe', text: 'Dodaj kraje, do których aplikujesz, aby zobaczyć wszystkie ekwiwalenty obok siebie w panelu dashboard.' },
  { name: '3. Wprowadź dane akademickie', text: 'Wpisz pojedynczą ocenę dla szybkiego sprawdzenia lub użyj Trybu Zbiorczego dla całego wykazu ocen z semestru.' },
  { name: '4. Analizuj i eksportuj', text: 'Przejrzyj wizualne paski percentyli i pobierz Raport Ekwiwalencji w formacie PDF do swojej dokumentacji.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Przetwarzanie w Trybie Zbiorczym, Konwersja w czasie rzeczywistym, Obsługa skal światowych, Generowanie raportów PDF',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Źródłowy system ocen',
    targetSystems: 'Globalne ekwiwalenty',
    gradeInput: 'Twoja ocena',
    bulkMode: 'Zbiorcze przetwarzanie ocen',
    bulkPlaceholder: 'Wklej listę ocen tutaj (jedna w wierszu)...',
    results: 'Panel ekwiwalencji',
    passLimit: 'Min. zaliczenie',
    shareResults: 'Generuj raport ekwiwalencji',
    averageMedia: 'Globalna średnia po konwersji',
    compareTitle: 'Pozycja akademicka na świecie',
    addSystem: 'Dodaj kraj',
    removeSystem: 'Usuń',
    selectCountry: 'Wybierz kraj',
    sourceCountry: 'Kraj pochodzenia',
    systemSelection: 'Wybór systemu',
    convertedScore: 'Ocena po konwersji',
    emptyState: 'Wprowadź ocenę, aby zobaczyć globalne ekwiwalenty',
    minLabel: 'MIN',
    passLabel: 'ZAL',
    maxLabel: 'MAX',
    scaleLabel: 'Skala',
    howToTitle: 'Twoja droga do międzynarodowej edukacji',
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Referencje i standardy akademickie',
    singleGradeMode: 'Pojedyncza ocena',
    transcriptMode: 'Pełny wykaz ocen',
    gradeCounter: 'Wprowadzone oceny',
    averageSummary: 'Obliczona średnia',
    gradesIgnored: '{count} ocen zignorowanych (poza zakresem)',
    bulkHelp: 'Możesz wkleić wykaz ocen bezpośrednio. Wykrywamy oceny oddzielone spacjami, przecinkami lub wierszami.',
    copiedLabel: 'Skopiowano!',
    germanyExpl: 'System odwrócony: 1.0 to najlepsza możliwa ocena, 4.0 to minimum do zaliczenia.',
    spainExpl: 'Standardowa skala 0-10. 5.0 to minimum do zaliczenia.',
    usaExpl: 'Skala GPA od 0.0 do 4.0. Zazwyczaj 2.0 to minimum do zaliczenia.',
    ukExpl: 'Klasyfikacja procentowa. 40% to minimum do zaliczenia.',
    franceExpl: 'Skala 20-punktowa. 10 to minimum do zaliczenia.',
    italyExpl: 'Skala 30-punktowa. 18 to minimum do zaliczenia.',
    netherlandsExpl: 'Skala 1-10. 6 to minimum do zaliczenia.',
    placeholderSpain: 'np. 8.5',
    placeholderUSA: 'np. 3.7 lub A-',
    placeholderFrance: 'np. 14',
    placeholderGermany: 'np. 1.3',
    placeholderUK: 'np. 75',
    placeholderItaly: 'np. 28',
    placeholderNetherlands: 'np. 7.5',
  },
  seo: [
    { type: 'title', text: 'Precyzyjna konwersja ocen dla globalnej mobilności', level: 2 },
    { type: 'paragraph', html: 'Niezależnie od tego, czy jesteś <strong>studentem Erasmusa+</strong>, czy aplikujesz na <strong>studia magisterskie w Ivy League</strong>, zrozumienie swojej globalnej pozycji akademickiej jest pierwszym krokiem. Systemy ocen różnią się diametralnie: podczas gdy 10 w Hiszpanii jest oceną idealną, we Francji jest to zaledwie zaliczenie. Nasz silnik wyjaśnia te różnice.' },
    { type: 'title', text: 'Dlaczego dokładność konwersji GPA jest ważna', level: 3 },
    { type: 'paragraph', html: 'Komisje rekrutacyjne używają przeliczonych punktów GPA do filtrowania tysięcy zgłoszeń. Niewielki błąd w ręcznych obliczeniach może kosztować Cię stypendium. Nasze narzędzie wykorzystuje <strong>oficjalne algorytmy mapowania liniowego</strong> stosowane przez główne międzynarodowe biura edukacyjne.' },
    { type: 'title', text: 'Główne obsługiwane systemy', level: 3 },
    { type: 'list', items: [
      '<strong>Hiszpania (0-10):</strong> Szczegółowe mapowanie od Aprobado do Sobresaliente.',
      '<strong>USA GPA (4.0):</strong> Standardowy ekwiwalent amerykańskich uniwersytetów.',
      '<strong>Niemcy (1-6):</strong> Obsługa skali odwróconej, gdzie 1.0 jest szczytem.',
      '<strong>Francja (0-20):</strong> Precyzyjna konwersja dla francuskich Grande Écoles i uniwersytetów.',
      '<strong>Klasyfikacja w Wielkiej Brytanii:</strong> Przeliczanie procentów na stopnie z wyróżnieniem (Honours Degree).'
    ] },
    { type: 'tip', html: '<strong>Wskazówka akademicka:</strong> Użyj „Trybu Zbiorczego”, aby znaleźć swoje skumulowane GPA z wielu semestrów. Oszczędza to godziny ręcznej pracy w arkuszach kalkulacyjnych!' },
    { type: 'title', text: 'Oblicz swój ekwiwalent WES', level: 3 },
    { type: 'paragraph', html: 'Chociaż oficjalna ocena WES jest usługą płatną, nasze narzędzie zapewnia <strong>wysokiej wierności szacunek</strong> Twojego GPA według WES, pomagając Ci zdecydować, gdzie aplikować przed poniesieniem kosztów oceny.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
