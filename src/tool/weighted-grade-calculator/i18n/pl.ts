import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'kalkulator-sredniej-waznej-i-wyniku-koncowego';
const title = 'Kalkulator Średniej Ważnej i Wyniku Końcowego';
const description = 'Przestań stresować się swoimi ocenami! Łatwo obliczaj wyniki z kursów i oceny końcowe. Po prostu wprowadź swoje zadania, egzaminy i ich wagi, aby zobaczyć, na czym stoisz.';

const faqItems = [
  { question: 'Czym dokładnie jest ocena ważona?', answer: 'W wielu kursach nie wszystkie zadania są równe. Egzamin końcowy może być wart 40% Twojej oceny, podczas gdy praca domowa tylko 10%. Ocena ważona uwzględnia te różnice, dzięki czemu znasz swoją prawdziwą pozycję.' },
  { question: 'Gdzie mogę znaleźć wagi moich ocen?', answer: 'Zazwyczaj są one wymienione w sylabusie kursu w sekcji "Zasady oceniania" lub "Ocenianie". Profesorowie przypisują wartość procentową do różnych kategorii, takich jak aktywność, sprawdziany i projekty.' },
  { question: 'Co jeśli moje zadania nie sumują się jeszcze do 100%?', answer: 'Bez obaw! Nasz kalkulator pokaże Ci ocenę "prognozowaną" na podstawie dotychczas wykonanej pracy. Przeskaluje on Twoje aktualne wyniki do ekwiwalentu 100%.' },
  { question: 'Czy mogę użyć tego do obliczenia średniej ocen (GPA)?', answer: 'Absolutnie. Możesz potraktować każdy kurs jako "przedmiot" i użyć jego punktów ECTS lub liczby godzin jako "wagi", aby znaleźć swoją ważoną średnią semestralną.' },
];

const howToItems = [
  { name: 'Wypisz swoje zadania', text: 'Wprowadź nazwy swoich egzaminów, sprawdzianów lub projektów. Zachowaj porządek!' },
  { name: 'Wprowadź swoje wyniki', text: 'Wpisz ocenę, którą otrzymałeś za każdy element (zazwyczaj w skali do 10 lub 100).' },
  { name: 'Dodaj wagi', text: 'Sprawdź swój sylabus i wprowadź procent, jaki każdy element wnosi do Twojej końcowej oceny.' },
  { name: 'Sprawdź swój wynik', text: 'Obserwuj, jak Twoja ocena końcowa aktualizuje się natychmiast. Nie wymaga to ręcznych obliczeń!' },
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
  faqTitle: 'Nadal masz pytania?',
  bibliographyTitle: 'Dowiedz się więcej',
  ui: {
    addSubject: 'Dodaj Element',
    subjects: 'Oceny i Wagi',
    subjectName: 'Zadanie / Przedmiot',
    grade: 'Ocena',
    weight: 'Waga (%)',
    scale: 'Skala (np. 4.0, 10, 100)',
    finalGrade: 'Twoja Aktualna Ocena',
    removeSubject: 'Usuń',
    weightSum: 'Suma Wag',
    exampleSubject: 'Egzamin Końcowy',
    newSubjectPlaceholder: 'np. Kolokwium',
  },
  seo: [
    { type: 'title', text: 'Jak zapanować nad swoimi ocenami dzięki kalkulatorowi wagowemu', level: 2 },
    { type: 'paragraph', html: 'Czy kiedykolwiek czułeś się zagubiony, patrząc na stos swoich ocen? Nie jesteś sam. Zrozumienie swojej <strong>średniej ważonej</strong> to klucz do sukcesu w szkole średniej i na studiach.' },
    { type: 'title', text: 'Dlaczego oceny ważone są ważne', level: 3 },
    { type: 'paragraph', html: 'Zwykła średnia traktuje każde zadanie tak samo. Ale w prawdziwym świecie (i w Twoim sylabusie) 2-minutowy quiz nie powinien liczyć się tak samo jak 20-stronicowa praca semestralna. Oceny ważone dają większą "moc" tym ważniejszym elementom.' },
    { type: 'paragraph', html: 'Niezależnie od tego, czy obliczasz swój <strong>semestralny wskaźnik ocen</strong>, czy po prostu chcesz sprawdzić, czy możesz odpuścić sobie ostatnie opcjonalne zadanie, ważenie jest narzędziem, którego potrzebujesz.' },
    { type: 'title', text: 'Oblicz swoją ocenę końcową w 3 krokach', level: 3 },
    { type: 'list', items: ['Znajdź wagę każdej kategorii w swoim sylabusie (np. Egzaminy 50%, Prace domowe 20%).', 'Pomnóż swój wynik przez tę wagę (np. wynik 90 * waga 0,50 = 45 punktów).', 'Zsumuj wszystkie te punkty, aby otrzymać końcowy procent.'] },
    { type: 'title', text: 'Pro Tip: Gra w "Co by było, gdyby"', level: 3 },
    { type: 'paragraph', html: 'Używaj tego kalkulatora do symulowania różnych scenariuszy. "Co jeśli dostanę 85 z egzaminu końcowego?" lub "Co jeśli ominę tę pracę domową?" Przeglądanie wpływu w czasie rzeczywistym pomaga priorytetyzować czas na naukę tam, gdzie faktycznie przynosi to najlepsze rezultaty.' },
    { type: 'tip', html: '<strong>Nie panikuj.</strong> Jeśli Twoje wagi nie sumują się jeszcze do 100%, kalkulator prognozuje, jak będzie wyglądać Twoja ocena na podstawie obecnej pracy. To świetny sposób na śledzenie postępów w połowie semestru!' },
    { type: 'title', text: 'Arytmetyczna vs Ważona: Prawdziwa różnica', level: 3 },
    { type: 'paragraph', html: 'Średnia arytmetyczna może być niebezpiecznie myląca. Jeśli masz 100% z małego quizu, ale 50% z ważnego egzaminu, prosta średnia mówi, że masz 75% (ocena pozytywna). Ale jeśli egzamin jest wart 90% Twojej oceny, Twoja <strong>faktyczna ocena ważona</strong> jest bliższa 55% (ocena negatywna). Zawsze patrz na wagi!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    { name: 'Zrozumienie średniej ważonej (Wikipedia)', url: 'https://pl.wikipedia.org/wiki/%C5%9Arednia_wa%C5%BCona' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
