import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'kreator-macierzy-rubryk' as const;
const title = 'Kreator Macierzy Rubryk';
const description = 'Twórz edytowalne, ważone rubryki oceny z poziomami osiągnięć, walidacją wagi na żywo do 100%, eksportem do CSV i układem gotowym do druku.';

const faqItems = [
  { question: 'Co to jest macierz rubryk?', answer: 'Macierz rubryk to siatka oceny, która umieszcza kryteria w wierszach, a poziomy osiągnięć w kolumnach. Każda komórka opisuje, jak wygląda wykonanie zadania na danym poziomie, co czyni ocenianie bardziej przejrzystym i spójnym.' },
  { question: 'Dlaczego wagi kryteriów muszą sumować się do 100%?', answer: 'Suma 100% sprawia, że model oceniania jest jednoznaczny. Jeśli suma jest mniejsza lub większa niż 100%, studenci i oceniający nie mogą jasne określić, w jakim stopniu każde kryterium wpływa na wynik końcowy.' },
  { question: 'Czy studenci mogą korzystać z tego narzędzia?', answer: 'Tak. Studenci mogą go używać, aby dokładnie zrozumieć oczekiwania dotyczące zadań, planować wersje robocze lub tworzyć listy kontrolne do oceny koleżeńskiej przed przesłaniem pracy.' },
  { question: 'Jakie opcje eksportu są dostępne?', answer: 'Eksport do CSV jest przydatny do arkuszy kalkulacyjnych i konfiguracji w systemach LMS. Przycisk drukowania otwiera okno drukowania przeglądarki, w którym można zapisać plik jako PDF za pomocą systemowego okna dialogowego drukowania.' },
];

const howToItems = [
  { name: 'Edycja kryteriów', text: 'Kliknij nazwę dowolnego kryterium i zastąp ją umiejętnością, efektem uczenia się lub wymaganiem, które chcesz ocenić.' },
  { name: 'Ustawienie wag', text: 'Dostosuj każdy procent, aż pasek wag na żywo wskaże zrównoważoną rubrykę o wartości dokładnie 100%.' },
  { name: 'Opis poziomów osiągnięć', text: 'Kliknij w każdą komórkę opisu i wpisz obserwowalne dowody dla danego poziomu wykonania.' },
  { name: 'Dodawanie struktury w razie potrzeby', text: 'Użyj przycisków dodawania, aby utworzyć dodatkowe kryteria lub poziomy osiągnięć, oraz usuń wiersze lub kolumny, które nie są przydatne.' },
  { name: 'Eksport lub wydruk', text: 'Pobierz plik CSV dla arkuszy kalkulacyjnych lub użyj opcji drukowania, aby utworzyć czystą wersję PDF.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Kryterium',
    weightHeader: 'Waga',
    levelSectionLabel: 'Poziomy osiągnięć',
    levelBadgePrefix: 'P',
    addCriterion: 'Dodaj kryterium',
    addLevel: 'Dodaj poziom',
    removeCriterion: 'Usuń kryterium',
    removeLevel: 'Usuń poziom',
    exportCsv: 'Eksportuj CSV',
    printRubric: 'Drukuj / PDF',
    csvFilename: 'macierz-rubryk.csv',
    pdfDocumentTitle: 'Macierz rubryk',
    pdfImageAlt: 'Macierz rubryk',
    confirmDeleteTitle: 'Usunąć to kryterium?',
    confirmDeleteText: 'Spowoduje to usunięcie kryterium i wszystkich opisów wpisanych dla jego poziomów osiągnięć.',
    cancelDelete: 'Anuluj',
    confirmDelete: 'Usuń kryterium',
    totalWeight: 'Waga całkowita',
    balanced: 'Zrównoważone na poziomie dokładnie 100%',
    under: 'Dodaj wagi, aż rubryka osiągnie 100%',
    over: 'Zmniejsz wagi, aż rubryka powróci do 100%',
    emptyCell: 'Kliknij, aby edytować',
    newCriterionTemplate: 'Kryterium {index}',
    newDescriptorTemplate: 'Opis {index}.{level}',
    newLevelTemplate: 'Poziom {index}',
    defaultLevels: [
      { name: 'Wzorowy', score: 4 },
      { name: 'Zaawansowany', score: 3 },
      { name: 'Rozwijający się', score: 2 },
      { name: 'Początkujący', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Jakość argumentacji',
        weight: 35,
        cells: [
          'Jasna teza z wieloaspektowym uzasadnieniem',
          'Jasna teza z odpowiednim uzasadnieniem',
          'Teza jest obecna, ale niespójna',
          'Teza jest niejasna lub jej brakuje',
        ],
      },
      {
        name: 'Użycie dowodów',
        weight: 30,
        cells: [
          'Dowody są precyzyjne i zintegrowane',
          'Dowody wspierają większość twierdzeń',
          'Dowody są ogólne lub luźno powiązane',
          'Dowody są nieobecne lub błędne',
        ],
      },
      {
        name: 'Organizacja',
        weight: 20,
        cells: [
          'Struktura płynnie prowadzi czytelnika',
          'Struktura jest logiczna',
          'Struktura ma luki lub powtórzenia',
          'Struktura jest trudna do śledzenia',
        ],
      },
      {
        name: 'Styl akademicki',
        weight: 15,
        cells: [
          'Dopracowany styl i precyzyjne przestrzeganie reguł',
          'Drobne błędy nie zakłócają przekazu',
          'Częste błędy rozpraszają czytelnika',
          'Błędy sprawiają, że sens staje się niejasny',
        ],
      },
    ],
    faqTitle: 'Często zadawane pytania',
    bibliographyTitle: 'Bibliografia i zasoby akademickie',
  },
  seo: [
    { type: 'title', text: 'Projektowanie rubryk oceniania, z których studenci mogą rzeczywiście korzystać', level: 2 },
    { type: 'paragraph', html: 'Solidna rubryka oceniania to coś więcej niż arkusz ocen. To wspólna mapa oczekiwań. Studenci używają jej, aby zrozumieć, jak wygląda wysoka jakość przed oddaniem pracy, nauczyciele używają jej do bardziej spójnego oceniania, a recenzenci do wyjaśniania informacji zwrotnych przy mniejszej niejednoznaczności. Ten kreator sprawia, że struktura staje się widoczna: kryteria, wagi, poziomy osiągnięć i opisy znajdują się w jednej edytowalnej macierzy.' },
    { type: 'diagnostic', variant: 'warning', title: 'Kiedy rubryka wymaga rewizji', html: '<ul><li>Kilka kryteriów nakłada się na siebie w tak dużym stopniu, że ten sam błąd jest karany dwukrotnie.</li><li>Suma wag nie wynosi 100%, co utrudnia interpretację oceny końcowej.</li><li>Opisy używają ogólnych słów, takich jak dobry, słaby lub doskonały, bez podania obserwowalnych dowodów.</li><li>Poziomów jest zbyt wiele, by oceniający mogli je wiarygodnie rozróżnić.</li></ul>' },
    { type: 'title', text: 'Wybór kryteriów i wag', level: 3 },
    { type: 'table', headers: ['Element rubryki', 'Dobra praktyka', 'Typowy problem'], rows: [['Kryteria', 'Oceń odrębne umiejętności lub efekty, takie jak argumentacja, dowody, metoda, dokładność lub prezentacja.', 'Mieszanie wielu umiejętności w jednym wierszu sprawia, że informacja zwrotna jest niejasna.'], ['Wagi', 'Dopasuj wagę do priorytetu dydaktycznego i celu zadania.', 'Nadawanie równej wagi każdemu wierszowi, nawet jeśli niektóre efekty są ważniejsze.'], ['Poziomy', 'Użyj od 3 do 5 poziomów, które oceniający mogą spójnie rozróżnić.', 'Dodawanie wielu poziomów z minimalnymi różnicami w sformułowaniach.'], ['Opisy', 'Opisz obserwowalne dowody w pracy studenta.', 'Używanie etykiet wartościujących, które nie pomagają w poprawie pracy.']] },
    { type: 'comparative', title: 'Rubryki analityczne a holistyczne', columns: 2, items: [{ title: 'Rubryka analityczna', description: 'Dzieli wykonanie zadania na osobne kryteria i wagi. Najlepsza, gdy studenci potrzebują szczegółowej informacji zwrotnej lub gdy wielu oceniających musi ujednolicić oceny.', highlight: true, points: ['Przejrzyste ocenianie', 'Szczegółowa informacja zwrotna', 'Dobrze sprawdza się przy złożonych zadaniach'] }, { title: 'Rubryka holistyczna', description: 'Daje jedną ogólną ocenę. Szybsza w zastosowaniu, ale mniej pomocna w diagnostyce błędów przy poprawie pracy lub ocenie koleżeńskiej.', points: ['Szybsze ocenianie', 'Przydatna do szybkich kontroli', 'Mniej szczegółowa informacja zwrotna'] }] },
    { type: 'tip', html: '<strong>Twórz opisy na podstawie dowodów, a nie przymiotników.</strong> Zamiast pisać "doskonała analiza", opisz, co robi doskonała analiza: łączy dowody z tezą, odnosi się do ograniczeń i wyjaśnia znaczenie dowodów.' },
    { type: 'title', text: 'Jak zweryfikować ważoną rubrykę', level: 3 },
    { type: 'paragraph', html: 'Wagi komunikują priorytety. Kryterium o wadze 40% kształtuje wysiłek studenta inaczej niż kryterium o wadze 10%. Sumowanie na żywo w tym narzędziu jest celowo rygorystyczne: rubryka jest zrównoważona tylko wtedy, gdy suma wynosi dokładnie 100%. Jeśli suma jest mniejsza niż 100%, część oceny pozostaje niezdefiniowana. Jeśli przekracza 100%, model obiecuje zbyt wiele punktów i wprowadza chaos.' },
    { type: 'summary', title: 'Praktyczny proces pracy z rubrykami', items: ['Zacznij od efektów uczenia się przed rozpisaniem wierszy.', 'Ogranicz macierz do kryteriów, które rzeczywiście wpływają na informację zwrotną.', 'Sformułuj opisy w prostym, obserwowalnym języku.', 'Sprawdź, czy wagi sumują się do 100% przed udostępnieniem rubryki.', 'Eksportuj do CSV, gdy potrzebujesz konfiguracji w arkuszu kalkulacyjnym lub LMS.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
