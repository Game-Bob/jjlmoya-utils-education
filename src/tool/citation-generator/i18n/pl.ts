import type { ToolLocaleContent } from '../../../types';

const slug = 'generator-cytowan';
const title = 'Generator Cytowań' as const;
const description = 'Twórz automatyczne odniesienia w formatach APA, MLA i Vancouver z trwałym zapisem.' as const;
const faqTitle = 'Najczęściej Zadawane Pytania' as const;
const bibliographyTitle = 'Bibliografia' as const;

const ui = {
    format: 'Format',
    book: 'Książka',
    website: 'Strona internetowa',
    article: 'Artykuł',
    publicationYear: 'Rok publikacji',
    authors: 'Autorzy (Nazwisko, Inicjały)',
    title: 'Tytuł',
    publisher: 'Wydawca',
    locationUrl: 'Lokalizacja / URL',
    preview: 'Podgląd',
    saveToList: 'Zapisz na mojej liście',
    mySavedCitations: 'Moje Zapisane Cytowania',
    noSavedCitations: 'Nie masz zapisanych cytowań.',
    clickToCopy: 'Kliknij na cytowanie, aby je skopiować bezpośrednio',
    apa: 'APA (wyd. 7)',
    mla: 'MLA (wyd. 9)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Generator Cytowań: Opanuj APA, MLA i Vancouver', level: 2 },
    { type: 'paragraph', html: 'Poprawne cytowanie źródeł to nie tylko kwestia etyki akademickiej; to podstawa nadania wiarygodności Twojej pracy i uniknięcia plagiatu. Nasze narzędzie pozwala na generowanie automatycznych odniesień w najczęściej używanych formatach na świecie.' },
    { type: 'title', text: 'Najważniejsze Style Cytowania', level: 3 },
    { type: 'paragraph', html: 'W zależności od Twojej dziedziny nauki, będziesz musiał użyć konkretnego formatu. To nie kaprys profesorów; każdy styl został zaprojektowany tak, aby priorytetowo traktować najbardziej istotne informacje dla danej dyscypliny.' },
    { type: 'title', text: 'APA (nauki społeczne)', level: 4 },
    { type: 'paragraph', html: 'Stworzony przez <strong>American Psychological Association</strong>, koncentruje się na dacie publikacji, aby zapewnić kontekst historyczny badaniom. Jest to standard w psychologii, pedagogice i socjologii.' },
    { type: 'title', text: 'Vancouver (medycyna)', level: 4 },
    { type: 'paragraph', html: 'Jest to system numeryczny, w którym źródła są cytowane w kolejności pojawiania się. Jest to uniwersalny format w biomedycynie i naukach o zdrowiu, ułatwiający czytanie tekstów z wieloma odniesieniami.' },
    { type: 'title', text: 'Jak cytować książkę krok po kroku?', level: 3 },
    { type: 'paragraph', html: 'Chociaż nasze narzędzie automatyzuje ten proces, znajomość podstawowych elementów pomoże Ci zidentyfikować, jakie informacje musisz zebrać ze swoich źródeł fizycznych lub cyfrowych.' },
    { type: 'list', items: ['<strong>Autorzy:</strong> Nazwisko, a następnie inicjał imienia.', '<strong>Rok:</strong> Rok publikacji w nawiasach lub na końcu, w zależności od stylu.', '<strong>Tytuł:</strong> Powinien być zapisany kursywą w przypadku książek i dzieł kompletnych.', '<strong>Wydawca:</strong> Firma odpowiedzialna za wydanie dzieła.', '<strong>URL:</strong> W przypadku źródeł cyfrowych, bezpośredni link lub DOI dla stałej lokalizacji.'] },
    { type: 'title', text: 'Różnice Wizualne Pomiędzy Formatami', level: 3 },
    { type: 'table', headers: ['Element', 'APA (7)', 'MLA (9)', 'Vancouver'], rows: [['Autor', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Data', '(2024)', '2024.', '2024.'], ['Tytuł', 'Kursywą', 'W cudzysłowie', 'Normalnie']] },
    { type: 'tip', html: 'Zawsze sprawdzaj konkretny poradnik swojej instytucji. Chociaż APA jest standardem globalnym, wiele uniwersytetów stosuje niewielkie lokalne wariacje lub wymaga użycia konkretnego wydania standardów.' },
    { type: 'title', text: 'Unikanie Plagiatu Akademickiego', level: 3 },
    { type: 'paragraph', html: 'Plagiat nie zawsze jest zamierzony. Często zdarza się z powodu niedbalstwa w robieniu notatek lub niewiedzy, jak odnieść się do pomysłu, który nie jest Twój. Korzystanie z generatora cytowań, takiego jak ten, gwarantuje, że każdy autor otrzyma należne mu uznanie, chroniąc jednocześnie Twoją rzetelność akademicką.' },
    { type: 'paragraph', html: 'Pamiętaj, że nawet jeśli parafrazujesz pomysł własnymi słowami, musisz dołączyć odpowiednie cytowanie w tekście oraz odniesienie w bibliografii końcowej.' },
];

const faq = [
    {
        question: 'Jakie formaty obsługuje generator?',
        answer: 'Obecnie obsługuje APA (wydanie 7), MLA (wydanie 9) oraz Vancouver, które są najczęstszymi formatami w naukach społecznych, humanistycznych i medycznych.',
    },
    {
        question: 'Czy mogę zapisać moje cytowania?',
        answer: 'Tak, generator automatycznie zapisuje historię w lokalnej pamięci Twojej przeglądarki, dzięki czemu możesz do niej wrócić później.',
    },
    {
        question: 'Jaka jest różnica między APA a Vancouver?',
        answer: 'APA wykorzystuje system autor-data (Perez, 2024), podczas gdy Vancouver używa systemu numerycznego zgodnie z kolejnością pojawiania się w tekście.',
    },
    {
        question: 'Czy generator cytowań jest bezpłatny?',
        answer: 'Całkowicie. Jest to darmowe narzędzie zaprojektowane, aby pomagać studentom i profesjonalistom w pisaniu ich prac akademickich.',
    },
] as const;

const howTo = [
    {
        name: 'Wybierz typ źródła',
        text: 'Wybierz, czy Twoim źródłem jest książka, strona internetowa czy artykuł w czasopiśmie naukowym.',
    },
    {
        name: 'Uzupełnij dane',
        text: 'Wprowadź autora, tytuł, rok oraz wydawcę lub adres URL. Im więcej danych wprowadzisz, tym dokładniejsze będzie cytowanie.',
    },
    {
        name: 'Skopiuj lub zapisz',
        text: 'Skopiuj cytowanie bezpośrednio jednym kliknięciem lub naciśnij "Zapisz na mojej liście", aby dodać je do swojej trwałej historii.',
    },
] as const;

const bibliography = [
    {
        name: 'Podręcznik stylu APA wydanie 7',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'Przewodnik po stylu MLA (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Wytyczne Vancouver - ICJME',
        url: 'https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html',
    },
] as const;

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
} as const;

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item.name,
        text: item.text,
    })),
} as const;

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'EducationalApplication',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
} as const;

const schemas = [faqSchema, howToSchema, appSchema] as const;

export const content = {
    slug,
    title,
    description,
    faqTitle,
    bibliographyTitle,
    ui,
    seo,
    faq,
    howTo,
    bibliography,
    schemas,
} as const satisfies ToolLocaleContent;
