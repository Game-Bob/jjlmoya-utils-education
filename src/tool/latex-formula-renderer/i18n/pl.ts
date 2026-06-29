import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'renderowanie-wzory-latex' as const;
const title = 'Renderowanie Wzorów LaTeX';
const description = 'Renderuj wyrażenia matematyczne LaTeX natychmiast w przeglądarce. Wpisz dowolny wzór i skopiuj wynik jako obraz PNG, blok kodu Markdown lub kod źródłowy LaTeX.';

const faqItems = [
  { question: 'Co to jest LaTeX i dlaczego studenci go używają?', answer: 'LaTeX to język składu tekstu używany w matematyce, fizyce i inżynierii do tworzenia profesjonalnych równań. Daje pełną kontrolę nad formatowaniem w przeciwieństwie do tradycyjnych edytorów.' },
  { question: 'Czy muszę coś instalować, aby korzystać z tego narzędzia?', answer: 'Nie. Narzędzie działa w przeglądarce przy użyciu KaTeX - szybkiej biblioteki JavaScript. Nie wymaga logowania ani instalacji.' },
  { question: 'Jaka jest różnica między trybem blokowym a liniowym?', answer: 'Tryb blokowy (Display mode) umieszcza wzór w osobnej, wyśrodkowanej linii. Tryb liniowy (Inline mode) wpasowuje wzór wewnątrz tekstu w mniejszym rozmiarze.' },
  { question: 'Dlaczego mój wzór pokazuje błąd składni?', answer: 'Błędy składni najczęściej wynikają z niedomkniętych nawiasów klamrowych, literówek w poleceniach lub użycia nieobsługiwanych poleceń.' },
  { question: 'Czy mogę wklejać wzory do programu Word lub Notion?', answer: 'Tak. Użyj "Pobierz PNG", aby pobrać obraz o wysokiej rozdzielczości lub "Kopiuj Markdown" dla gotowego bloku kodu.' }
];

const howToItems = [
  { name: 'Wpisz wyrażenie LaTeX', text: 'Wprowadź poprawne wyrażenie LaTeX w edytorze. Wzór renderuje się w czasie rzeczywistym.' },
  { name: 'Wybierz tryb renderowania', text: 'Wybierz tryb blokowy dla osobnego równania lub liniowy do wbudowania w tekst.' },
  { name: 'Dostosuj rozmiar czcionki', text: 'Użyj suwaka rozmiaru czcionki, aby odpowiednio powiększyć lub pomniejszyć podgląd.' },
  { name: 'Eksportuj w wybranym formacie', text: 'Kliknij "Pobierz PNG", "Kopiuj Markdown" lub "Kopiuj LaTeX", aby zapisać swoją pracę.' }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text
  }))
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' }
};

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Renderowanie Wzorów LaTeX',
    inputLabel: 'Wyrażenie LaTeX',
    inputPlaceholder: 'np. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Blokowy',
    inlineModeLabel: 'Liniowy',
    fontSizeLabel: 'Rozmiar czcionki',
    downloadPngButton: 'Pobierz PNG',
    copyMarkdownButton: 'Kopiuj Markdown',
    copyLatexButton: 'Kopiuj LaTeX',
    resetButton: 'Resetuj',
    previewTitle: 'Podgląd na żywo',
    copiedToast: 'Skopiowano do schowka',
    errorLabel: 'Błąd składni',
    emptyPreviewHint: 'Zacznij pisać kod LaTeX powyżej, aby zobaczyć wyrenderowany wzór.',
    faqTitle: 'Najczęściej Zadawane Pytania',
    bibliographyTitle: 'Bibliografia i Źródła'
  },
  seo: [
    { type: 'title', text: 'Jak pisać i renderować wzory matematyczne w przeglądarce', level: 2 },
    { type: 'paragraph', html: 'LaTeX to standard w składzie publikacji naukowych. To narzędzie renderuje wzory natychmiast za pomocą biblioteki KaTeX bez potrzeby instalacji.' },
    { type: 'title', text: 'Co to jest KaTeX i dlaczego jest najlepszym wyborem dla sieci?', level: 3 },
    { type: 'paragraph', html: 'KaTeX to biblioteka JavaScript stworzona przez Khan Academy, renderująca wyrażenia LaTeX po stronie klienta niezwykle szybko i dokładnie.' },
    { type: 'paragraph', html: 'Generuje czysty kod HTML i SVG, który świetnie skaluje się do każdego rozmiaru.' },
    { type: 'title', text: 'Typowe zastosowania dla studentów i naukowców', level: 3 },
    { type: 'list', items: [
      'Sprawdzanie składni LaTeX przed wysłaniem zadań.',
      'Pobieranie wzorów jako obrazy PNG do wklejenia w Wordzie lub Notion.',
      'Konwersja wyrażeń na bloki kodu Markdown do GitHub lub Jupyter.',
      'Podgląd wzorów przed wstawieniem ich do projektu w Overleaf.'
    ] },
    { type: 'title', text: 'Ściągawka z podstawowych poleceń matematycznych LaTeX', level: 3 },
    { type: 'paragraph', html: 'Najważniejsze polecenia obejmują ułamki, pierwiastki, sumy oraz całki.' },
    { type: 'title', text: 'Tryb blokowy a liniowy: kiedy używać którego', level: 3 },
    { type: 'paragraph', html: 'Tryb blokowy wyśrodkowuje wzór w nowej linii, natomiast tryb liniowy wstawia go bezpośrednio w zdaniu.' },
    { type: 'tip', html: 'Wskazówka dotycząca debugowania: każdy nawias klamrowy otwierający musi mieć swój odpowiednik zamykający.' },
    { type: 'title', text: 'Eksportowanie wzorów: PNG, Markdown oraz źródło LaTeX', level: 3 },
    { type: 'paragraph', html: 'Eksport do PNG wykorzystuje Canvas API w przeglądarce do wygenerowania ostrego obrazu z przezroczystym tłem.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
