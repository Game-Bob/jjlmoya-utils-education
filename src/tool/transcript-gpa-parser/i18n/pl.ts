import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'parser-wykazu-ocen-gpa' as const;
const title = 'Kalkulator i parser średniej ocen (GPA) z wykazu ocen';
const description = 'Oblicz natychmiast swoją skumulowaną średnią GPA i średnią ważoną ocen, wklejając skopiowany surowy tekst wykazu ocen z uczelni. Działa całkowicie offline.';

const faqItems = [
  {
    question: 'Jak działa automatyczne przetwarzanie tekstu?',
    answer: 'Narzędzie analizuje wklejony tekst linijka po linijce, dzieląc go na kolumny na podstawie spacji, tabulatorów lub znaków interpunkcyjnych. Następnie bada wartości, aby automatycznie ustalić, która kolumna zawiera nazwy przedmiotów, oceny i punkty ECTS.'
  },
  {
    question: 'Czy moje dane akademickie są bezpieczne?',
    answer: 'Tak, w pełni. Przetwarzanie danych i obliczanie średniej odbywa się całkowicie w Twojej przeglądarce na Twoim urządzeniu. Żadne dane nie są wysyłane na serwer, co zapewnia 100% prywatności Twojego wykazu ocen.'
  },
  {
    question: 'Co zrobić, jeśli kolumny zostały źle dopasowane?',
    answer: 'Możesz to łatwo poprawić. Każda kolumna w wykrytej tabeli posiada nagłówek z rozwijaną listą, z której możesz ręcznie wybrać, czy dana kolumna reprezentuje nazwę przedmiotu, ocenę, punkty ECTS, czy ma zostać zignorowana.'
  },
  {
    question: 'Czy aplikacja obsługuje oceny literowe i różne skale ocen?',
    answer: 'Tak, obsługuje zarówno standardowe oceny literowe (A, B, C, D, F), jak i skale liczbowe (0-10, 0-20, 0-100). Możesz ustawić maksymalną skalę, aby dopasować ją do systemu stosowanego na Twojej uczelni.'
  }
];

const howToItems = [
  {
    name: 'Skopiuj wykaz ocen',
    text: 'Wejdź do systemu swojej uczelni lub otwórz wykaz ocen, zaznacz tekst i go skopiuj.'
  },
  {
    name: 'Wklej tekst',
    text: 'Wklej skopiowany tekst w pole tekstowe w tym narzędziu.'
  },
  {
    name: 'Zweryfikuj i dopasuj kolumny',
    text: 'Sprawdź automatycznie wygenerowaną tabelę. W razie potrzeby dostosuj role kolumn za pomocą nagłówków.'
  },
  {
    name: 'Sprawdź swoją średnią',
    text: 'Twój obliczony GPA oraz łączna liczba punktów ECTS wyświetlą się natychmiast na dole strony.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Wklej tutaj swój wykaz ocen',
    pasteAreaPlaceholder: 'Wklej tekst skopiowany z platformy Moodle, Canvas lub strony z ocenami Twojej uczelni...',
    parsedTitle: 'Przetworzone dane z wykazu ocen',
    columnSelect: 'Dopasuj kolumnę',
    subjectName: 'Nazwa przedmiotu / kursu',
    grade: 'Ocena',
    credits: 'Punkty ECTS',
    ignore: 'Ignoruj',
    gpaResult: 'Średnia ocen (GPA)',
    totalCredits: 'Suma punktów ECTS',
    emptyState: 'Wklej dane swojego wykazu ocen powyżej, aby zobaczyć podgląd i edytować wiersze.',
    scaleLabel: 'Limit skali ocen',
    customScale: 'Maksymalna ocena w skali',
    exampleSubject: 'Analiza matematyczna I',
    newSubjectPlaceholder: 'Nowy przedmiot',
    clearBtn: 'Wyczyść tekst',
    errorFormat: 'Nie udało się wykryć wyraźnego podziału na kolumny. Spróbuj skopiować i wkleić tabelę lub listę.'
  },
  seo: [
    { type: 'title', text: 'Jak wczytać i obliczyć średnią GPA z dowolnego wykazu ocen', level: 2 },
    { type: 'paragraph', html: 'Obliczanie średniej ocen nie powinno wymagać ręcznego wpisywania kilkudziesięciu przedmiotów. To narzędzie wyodrębnia dane bezpośrednio ze skopiowanego surowego tekstu, by natychmiast obliczyć Twój GPA.' },
    { type: 'title', text: 'Dlaczego warto korzystać z parsera wykazu ocen?', level: 3 },
    { type: 'paragraph', html: 'Portale uczelniane często prezentują wykazy ocen w skomplikowanych tabelach HTML. Kopiując i wklejając je bezpośrednio do tego narzędzia, pozwalasz naszemu silnikowi automatycznie wyodrębnić przedmioty, oceny i punkty ECTS bez błędów w pisowni.' },
    { type: 'title', text: 'Bezpiecznie, prywatnie i szybko', level: 3 },
    { type: 'paragraph', html: 'Ponieważ silnik przetwarzający działa lokalnie w JavaScript, Twój wykaz ocen nigdy nie opuszcza przeglądarki. Możesz przetworzyć strony zawierające setki wierszy w ułamku sekundy.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
