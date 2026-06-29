import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = 'Interaktiver Flashcard-Generator & Lerndeck';
const description = 'Usprawnij swoje sesje nauki dzięki aktywnemu przywoływaniu i powtórkom rozłożonym w czasie. Twórz własne fiszki, ucz się z obracaniem kart 3D i eksportuj/importuj talie.';

const faqItems = [
  { question: 'Co to jest aktywne przywoływanie?', answer: 'Aktywne przywoływanie to metoda nauki polegająca na testowaniu pamięci poprzez aktywne odpytywanie się, zamiast biernego czytania notatek.' },
  { question: 'Jak działają powtórki rozłożone w czasie?', answer: 'To technika, w której trudne fiszki powtarzasz częściej, a łatwe rzadziej, w coraz dłuższych odstępach czasu, aby zmaksymalizować zapamiętywanie.' },
  { question: 'Jak mogę zapisać moje fiszki?', answer: 'Możesz wyeksportować talię jako plik JSON. Aby wznowić naukę, po prostu zaimportuj ten plik za pomocą przycisku Importuj.' },
  { question: 'Co dają oceny Łatwe, Średnie i Trudne?', answer: 'Pozwalają one określić, jak dobrze pamiętasz dane hasło. W systemie Leitnera trudniejsze karty są wyświetlane częściej.' },
];

const howToItems = [
  { name: 'Utwórz fiszkę', text: 'Wpisz pytanie na przedniej stronie i odpowiedź na odwrocie, a następnie kliknij Dodaj Fiszki.' },
  { name: 'Przejrzyj talię', text: 'Kliknij na dowolną kartę w oknie podglądu, aby ją obrócić i zobaczyć odpowiedź.' },
  { name: 'Oceń pamięć', text: 'Oceń łatwość przypomnienia odpowiedzi za pomocą przycisków Łatwe, Średnie lub Trudne.' },
  { name: 'Zapisz sesję', text: 'Użyj przycisku Eksportuj, aby pobrać swoją talię i móc ją wczytać później.' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: 'Kreator Fiszki',
    questionLabel: 'Przód (Pytanie)',
    answerLabel: 'Tył (Odpowiedź)',
    addCard: 'Dodaj Fiszki',
    questionPlaceholder: 'np. Co jest stolicą Francji?',
    answerPlaceholder: 'np. Paryż',
    reviewMode: 'Sesja Nauki',
    cardIndex: 'Karta',
    flipCard: 'Kliknij, aby odwrócić',
    nextCard: 'Dalej',
    prevCard: 'Wstecz',
    easy: 'Łatwe',
    medium: 'Średnie',
    hard: 'Trudne',
    resetSession: 'Resetuj postęp',
    importExport: 'Zarządzanie talią',
    importDeck: 'Importuj JSON',
    exportDeck: 'Eksportuj JSON',
    exportSelected: 'Eksportuj wybrane',
    exportAll: 'Eksportuj wszystko',
    emptyDeckWarning: 'Twoja talia jest pusta. Utwórz kartę lub zaimportuj talię, aby rozpocząć naukę.',
    sampleQuestion1: 'Co to jest aktywne przywoływanie?',
    sampleAnswer1: 'Technika uczenia się polegająca na aktywnym stymulowaniu przywoływania pamięci podczas procesu uczenia się.',
    sampleQuestion2: 'Kto sformułował hipotezę krzywej zapominania?',
    sampleAnswer2: 'Hermann Ebbinghaus, który badał wykładniczy charakter zapominania informacji w czasie.',
    aiPromptGenerator: 'Asystent Fiszki AI',
    aiTopicsLabel: 'Wprowadź tematy egzaminu lub notatki',
    aiTopicsPlaceholder: 'np. Egzamin z matematyki obejmujący pochodne, całki i granice...',
    generatePromptBtn: 'Generuj prompt AI',
    aiPromptOutputLabel: 'Skopiuj ten prompt do ChatGPT/Gemini',
    copyPromptBtn: 'Skopiuj do schowka',
    selectAll: 'Zaznacz wszystko',
    deleteCategory: 'Usuń kategorię',
    deleteConfirmMsg: 'Czy na pewno chcesz usunąć tę kategorię i wszystkie jej karty?',
    cancel: 'Anuluj',
    delete: 'Usuń',
    pasteJsonTitle: 'Wklej JSON z fiszkami',
    pasteJsonPlaceholder: 'Wklej tutaj JSON wygenerowany przez AI...',
    importBtn: 'Importuj',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Zoptymalizuj naukę dzięki aktywnemu przywoływaniu pamięci i powtórkom', level: 2 },
    { type: 'paragraph', html: 'Fiszki są uznawane za jedną z najbardziej efektywnych metod zapamiętywania. Łącząc aktywne przywoływanie z oceną trudności, natychmiast wykrywasz luki w wiedzy.' },
    { type: 'title', text: 'Aktywne przywoływanie a pasywna nauka', level: 3 },
    { type: 'paragraph', html: 'Wielu uczniów ogranicza się do powtórnego czytania notatek. Nauka zachodzi jednak wtedy, gdy zmuszasz mózg do aktywnego odszukania odpowiedzi.' },
    { type: 'table', headers: ['Metoda Nauki', 'Zaangażowanie Poznawcze', 'Poziom Zapamiętania', 'Najlepsze dla'], rows: [
      ['Fiszki Interaktywne', 'Wysokie (Aktywne)', 'Doskonałe', 'Słownictwo, wzory, pojęcia, daty.'],
      ['Streszczanie tekstu', 'Średnie (Synteza)', 'Umiarkowane', 'Zrozumienie złożonych teorii.'],
      ['Rereading notatek', 'Niskie (Pasywne)', 'Słabe', 'Pierwszy kontakt z nowym materiałem.'],
    ] },
    { type: 'title', text: 'Zalety i wady nauki z fiszkami', level: 3 },
    {
      type: 'proscons',
      title: 'Porównanie korzyści i ograniczeń',
      items: [
        { pro: 'Wymusza aktywny wysiłek pamięciowy zamiast pasywnego rozpoznawania.', con: 'Wymaga czasu na przygotowanie na początku.' },
        { pro: 'Natychmiast wskazuje, czego jeszcze nie umiesz.', con: 'Mniej przydatne przy próbie zrozumienia bardzo zawiłych wywodów.' },
        { pro: 'Łatwe do dostosowania do każdego przedmiotu.', con: 'Działa najlepiej przy regularnej dyscyplinie powtórek.' }
      ]
    },
    { type: 'title', text: 'Tworzenie fiszek z pomocą Sztucznej Inteligencji', level: 3 },
    { type: 'paragraph', html: 'Ręczne wpisywanie bywa nużące. Dzięki <strong>asystentowi AI</strong> przekształcisz notatki w gotową talię. Wprowadź zagadnienia, wygeneruj prompt, wklej go do ChatGPT lub Gemini i zaimportuj otrzymany JSON.' },
    { type: 'title', text: 'Grupowa nauka: Eksport selektywny i scalanie', level: 3 },
    { type: 'paragraph', html: 'Uczenie się w grupie jest wydajniejsze przy podziale pracy. Możesz eksportować tylko wybrane kategorie. Podczas importu system **scala** (merge) nowe karty z istniejącą bazą kolegi, nie niszcząc jego postępów.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
