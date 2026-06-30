import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'mapa-pojecciowa-tekst' as const;
const title = 'Kreator map pojęciowych';
const description = 'Przekształcaj notatki z wcięciami w interaktywną mapę pojęciową z przeciąganymi węzłami, zwijanymi gałęziami, sterowaniem powiększeniem oraz eksportem do formatów SVG lub PNG.';

const faqItems = [
  { question: 'Jaki rodzaj tekstu mogę wkleić do generatora map pojęciowych?', answer: 'Użyj prostego konspektu: jedna myśl w każdym wierszu, z wcięciem dla podtematów. Akceptowane są punkty, listy numerowane, tabulacje i spacje, więc notatki skopiowane z dokumentów, streszczeń wykładów lub aplikacji do nauki można zazwyczaj przekonwertować bez ręcznego ponownego formatowania.' },
  { question: 'Jak sformatować wcięcia, aby uzyskać najbardziej przejrzystą mapę pojęciową?', answer: 'Umieść temat główny w pierwszym wierszu, a następnie zrób wcięcia dla powiązanych myśli poniżej. Utrzymuj myśli na tym samym poziomie hierarchii na tej samej głębokości wcięcia. Jeśli węzeł pojawi się pod niewłaściwym rodzicem, poziom wcięcia jest prawie zawsze rzeczą, którą należy poprawić.' },
  { question: 'Czy mogę przesuwać węzły po wygenerowaniu mapy?', answer: 'Tak. Przeciągaj dowolne węzły na obszarze roboczym, aby poprawić rozmieszczenie, rozdzielić gęste gałęzie lub podkreślić relację. Możesz także przesuwać cały obszar, powiększać lub pomniejszać oraz zwijać gałęzie przed eksportem.' },
  { question: 'Jaka jest różnica między eksportem SVG a PNG?', answer: 'Format SVG jest edytowalny i skaluje się bez utraty jakości w edytorach wektorowych, prezentacjach i dokumentach. PNG to stały obraz, który łatwiej przesłać na platformy szkolne, w wiadomościach, arkuszach pracy czy szybkich zestawach do powtórek.' },
  { question: 'Czy to narzędzie automatycznie wykrywa połączenia krzyżowe?', answer: 'Nie. Buduje hierarchię na podstawie wcięć. Dzięki temu wynik jest przewidywalny, ale połączenia boczne, takie jak przyczyny, kontrasty czy pętle sprzężenia zwrotnego, należy przeanalizować ręcznie po eksporcie do SVG.' },
];

const howToItems = [
  { name: 'Wklej lub napisz konspekt', text: 'Wpisz jedno pojęcie na wiersz i zrób wcięcie dla powiązanych myśli pod ich tematem nadrzędnym.' },
  { name: 'Sprawdź wygenerowaną strukturę', text: 'Użyj interaktywnego obszaru roboczego, aby sprawdzić, czy hierarchia odpowiada temu, jak należy uczyć się danego tematu.' },
  { name: 'Uporządkuj obszar roboczy', text: 'Przeciągaj węzły, zwijaj zatłoczone gałęzie i powiększaj, aż układ wizualny będzie wyraźny.' },
  { name: 'Eksportuj materiały do nauki', text: 'Pobierz SVG do edycji lub PNG do szybkiego udostępniania, arkuszy pracy i prezentacji.' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'Konspekt z wcięciami',
    sampleButton: 'Wczytaj przykład',
    clearButton: 'Wyczyść',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Powiększ',
    zoomOut: 'Pomniejsz',
    resetView: 'Resetuj widok',
    exportSvg: 'Eksportuj SVG',
    exportPng: 'Eksportuj PNG',
    collapseBranch: 'Zwiń gałąź',
    expandBranch: 'Rozwiń gałąź',
    emptyStateTitle: 'Brak pojęć',
    emptyStateText: 'Wpisz jedno pojęcie na wiersz i zastosuj wcięcia dla podtematów, aby zbudować mapę.',
    nodeCount: 'pojęcia',
    depthCount: 'poziomy',
    branchCount: 'połączenia',
    levelPrefix: 'P',
    untitledNodeLabel: 'Bez tytułu',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'mapa-pojęciowa.svg',
    pngFilename: 'mapa-pojęciowa.png',
    sampleOutline: `Projekt badawczy
  Pytanie
    Jaki problem jest badany?
    Kogo on dotyczy?
  Dowody
    Źródła pierwotne
    Artykuły naukowe
    Zbiór danych
  Metoda
    Plan pobierania próbek
    Kroki analizy
  Wniosek
    Główne odkrycie
    Ograniczenia
    Kolejne pytanie badawcze`,
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i zasoby naukowe',
  },
  seo: [
    { type: 'title', text: 'Zamień notatki z wcięciami w mapę pojęciową', level: 2 },
    { type: 'paragraph', html: 'Mapa pojęciowa jest przydatna, gdy temat przestaje być tylko listą faktów. Pokazuje, które myśli są kluczowe, jakie szczegóły je wspierają oraz gdzie uczeń może mylić kategorie, przykłady, przyczyny i skutki. Ten generator jest przeznaczony dla notatek, które uczniowie już mają: wklej konspekt z wcięciami, dostosuj hierarchię, a następnie użyj interaktywnego obszaru roboczego, aby ułożyć gotową do nauki wizualną mapę.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'wiersz na pojęcie' }, { value: '2+', label: 'obsługiwane poziomy wcięć' }, { value: 'SVG', label: 'edytowalny eksport' }, { value: 'PNG', label: 'eksport do udostępnienia' }] },
    { type: 'diagnostic', variant: 'info', title: 'Najlepszy format wejściowy dla dokładnego odwzorowania', html: '<ul><li>Umieść główny temat we własnym wierszu na samej górze.</li><li>Zrób wcięcia dla podtematów pod pojęciem, które wyjaśniają, wspierają, definiują lub ilustrują.</li><li>Trzymaj elementy na tym samym poziomie hierarchii na tej samej głębokości wcięcia.</li><li>Używaj punktów lub list numerowanych, jeśli chcesz; typowe znaczniki list są usuwane automatycznie.</li><li>Etykiety węzłów powinny być krótkie i opisowe. Pełne wyjaśnienia powinny znajdować się w notatkach, a nie w każdym węźle.</li></ul>' },
    { type: 'title', text: 'Jak zdiagnozować nieuporządkowaną mapę pojęciową', level: 3 },
    { type: 'table', headers: ['Co widzisz', 'Prawdopodobna przyczyna', 'Jak to naprawić'], rows: [['Szczegół pojawia się pod niewłaściwym tematem', 'Poziom wcięcia jest zbyt płytki lub zbyt głęboki.', 'Przesuń wiersz w lewo lub w prawo, aż znajdzie się pod właściwym pojęciem nadrzędnym.'], ['Mapa jest bardzo szeroka', 'Zbyt wiele myśli znajduje się na tym samym poziomie.', 'Pogrupuj powiązane elementy pod bardziej przejrzystym węzłem kategorii.'], ['Mapa jest trudna do nauki', 'Etykiety węzłów są napisane jako pełne zdania.', 'Skróć etykiety do słów kluczowych, twierdzeń lub pytań.'], ['Brakuje ważnych relacji', 'Konspekt jest hierarchiczny, ale temat ma połączenia krzyżowe.', 'Wyeksportuj SVG i w razie potrzeby dodaj połączenia boczne ręcznie w edytorze.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Mapa pojęciowa', description: 'Najlepsza do pokazywania relacji między myślami, wymagń wstępnych, przyczyn, dowodów i kategorii.', highlight: true, points: ['Skupiona na relacjach', 'Dobra do powtórek', 'Pomocna przy wyjaśnianiu tematu na głos'] }, { title: 'Konspekt', description: 'Najlepszy do uporządkowanych notatek, struktury wypracowań, kolejności wykładów, procedur i materiałów chronologicznych.', points: ['Szybki do napisania', 'Łatwy do przeglądania', 'Dobrze radzi sobie z długimi szczegółami'] }, { title: 'Mapa myśli', description: 'Najlepsza do burzy mózgów i szerokich skojarzeń, zanim w pełni pozna się strukturę tematu.', points: ['Kreatywna eksploracja', 'Luźne grupowanie', 'Mniej rygorystyczna hierarchia'] }] },
    { type: 'tip', html: '<strong>Użyj zwijania jako narzędzia do aktywnego przypominania.</strong> Zwiń gałąź, powiedz z pamięci ukryte szczegóły, a następnie rozwiń ją, aby sprawdzić, co pominięto. Zamienia to mapę z biernego diagramu w aktywne narzędzie do nauki.' },
    { type: 'title', text: 'Procesy nauki, które zyskują na wizualnym mapowaniu', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Powtórka do egzaminu', description: 'Zbuduj mapę wokół prawdopodobnych pytań. Węzły nadrzędne powinny być wskazówkami, takimi jak przyczyny, dowody, ograniczenia, definicje lub przykłady.', highlight: true, points: ['Używaj zwiniętych gałęzi do przypominania', 'Dbaj o krótkie etykiety', 'Ersportuj PNG dla szybkich kart powtórzeniowych'] }, { title: 'Planowanie badań', description: 'Użyj mapy, aby połączyć pytanie badawcze z dowodami, metodą, źródłami, ograniczeniami i wnioskami.', points: ['Umieść pytanie u źródła', 'Oddziel dowody od interpretacji', 'Eksportuj SVG do edycji'] }] },
    { type: 'message', title: 'Ważne ograniczenie', html: 'Wcięcia tworzą drzewo, a nie pełną sieć semantyczną. Jeśli dwie myśli należą do różnych gałęzi, ale wciąż wpływają na siebie, narzędzie nie stworzy tego połączenia krzyżowego automatycznie. Potraktuj wygenerowaną mapę jako czysty pierwszy szkic, a następnie dodaj niehierarchiczne połączenia po eksporcie, gdy wymaga tego temat.' },
    { type: 'title', text: 'Eksportowanie map pojęciowych do prezentacji, arkuszy i edytorów', level: 3 },
    { type: 'paragraph', html: 'Wybierz SVG, jeśli chcesz uzyskać edytowalny diagram, który można dopracować w edytorze wektorowym, narzędziu do prezentacji lub procesie wydawniczym. Wybierz PNG, gdy potrzebujesz niezawodnego obrazu na platformę szkolną, do systemu zarządzania nauczaniem, arkusza pracy, czatu lub talii powtórzeniowej. Przed eksportem uporządkuj zatłoczone węzły, zwiń opcjonalne szczegóły i powiększ obszar, aż struktura relacji będzie czytelna w rozmiarze docelowym.' },
    { type: 'summary', title: 'Praktyczny przebieg pracy', items: ['Wklej zgrubny konspekt z notatek, szkiców AI lub skryptów wykładu.', 'Popraw wcięcia, aż każda podrzędna myśl znajdzie się pod właściwym rodzicem.', 'Skróć etykiety, aby węzły pozostały czytelne na obszarze roboczym i wyeksportowanym obrazie.', 'Rozsuń zatłoczone gałęzie i zwiń szczegóły, które nie są potrzebne w wersji ostatecznej.', 'Pobierz SVG do dalszej edycji lub PNG do natychmiastowego udostępnienia.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
