import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'latex-formel-renderare' as const;
const title = 'LaTeX Formel Renderare';
const description = 'Rendera LaTeX-matematik direkt i din webbläsare. Skriv in valfri formel och kopiera resultatet som PNG-bild, Markdown eller rå LaTeX.';

const faqItems = [
  { question: 'Vad är LaTeX och varför används det av studenter?', answer: 'LaTeX är ett typsättningssystem som används inom matematik, fysik och datavetenskap för att skapa professionella formler. Det ger exakt kontroll över formateringen.' },
  { question: 'Måste jag installera något program?', answer: 'Nej. Det här verktyget körs helt i din webbläsare med hjälp av KaTeX, ett snabbt JavaScript-bibliotek. Ingen installation eller registrering behövs.' },
  { question: 'Vad är skillnaden mellan block- och inlinelayout?', answer: 'Block-läget visar formeln centrerad på en egen rad, perfekt för fristående ekvationer. Inline-läget infogar formeln direkt i textflödet i en mindre storlek.' },
  { question: 'Varför visar min formel ett syntaxfel?', answer: 'Syntaxfel beror oftast på obalanserade klammerparenteser, felstavade kommandon eller funktioner som inte stöds.' },
  { question: 'Kan jag klistra in formler i Word eller Notion?', answer: 'Ja. Använd "Ladda ner PNG" för en högupplöst bild eller "Kopiera Markdown" för att få ett färdigt kodblock.' }
];

const howToItems = [
  { name: 'Skriv din LaTeX-formel', text: 'Ange valfri giltig LaTeX-formel i editorn. Formeln uppdateras i realtid medan du skriver.' },
  { name: 'Välj visningsläge', text: 'Välj block-läge för en fristående ekvation eller inline-läge för att integrera formeln i löpande text.' },
  { name: 'Justera teckensnittsstorlek', text: 'Använd skjutreglaget för att förstora eller förminska förhandsgranskningen.' },
  { name: 'Exportera i önskat format', text: 'Klicka på "Ladda ner PNG" för en bild, "Kopiera Markdown" för kod eller "Kopiera LaTeX" för råkod.' }
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
    title: 'LaTeX Formel Renderare',
    inputLabel: 'LaTeX-formel',
    inputPlaceholder: 't.ex. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Block',
    inlineModeLabel: 'Inline',
    fontSizeLabel: 'Teckenstorlek',
    downloadPngButton: 'Ladda ner PNG',
    copyMarkdownButton: 'Kopiera Markdown',
    copyLatexButton: 'Kopiera LaTeX',
    resetButton: 'Återställ',
    previewTitle: 'Förhandsgranskning',
    copiedToast: 'Kopierat till urklipp',
    errorLabel: 'Syntaxfel',
    emptyPreviewHint: 'Skriv in LaTeX ovan för att se den renderade formeln här.',
    faqTitle: 'Vanliga frågor',
    bibliographyTitle: 'Referenser och Resurser'
  },
  seo: [
    { type: 'title', text: 'Hur du skriver och visar matematiska formler i din webbläsare', level: 2 },
    { type: 'paragraph', html: 'LaTeX är standarden för vetenskapliga publikationer. Detta verktyg visar formler direkt via KaTeX utan att du behöver installera någonting.' },
    { type: 'title', text: 'Vad är KaTeX och varför är det bäst för webben?', level: 3 },
    { type: 'paragraph', html: 'KaTeX är ett JavaScript-bibliotek utvecklat av Khan Academy som visar formler mycket snabbt och korrekt på klientsidan.' },
    { type: 'paragraph', html: 'Det genererar ren HTML- och SVG-kod som skalar perfekt till valfri storlek.' },
    { type: 'title', text: 'Vanliga användningsområden för studenter och forskare', level: 3 },
    { type: 'list', items: [
      'Kontrollera LaTeX-syntax innan du lämnar in hemuppgifter.',
      'Ladda ner formler som transparenta PNG-bilder för Word eller Notion.',
      'Konvertera uttryck till Markdown-kodblock för GitHub eller Jupyter.',
      'Testa formler innan du infogar dem i Overleaf-dokument.'
    ] },
    { type: 'title', text: 'Översikt över viktiga matematiska LaTeX-kommandon', level: 3 },
    { type: 'paragraph', html: 'De mest använda kommandona inkluderar bråk, kvadratrötter, summor och integraler.' },
    { type: 'title', text: 'Block- vs. Inline-läge: När använder man vad?', level: 3 },
    { type: 'paragraph', html: 'Block-läget centrerar formeln på en ny rad, medan inline-läget infogar den löpande i texten.' },
    { type: 'tip', html: 'Felsökningstips: Varje startparentes måste ha en matchande slutparentes.' },
    { type: 'title', text: 'Exportera formler: PNG, Markdown och LaTeX', level: 3 },
    { type: 'paragraph', html: 'PNG-exporten använder webbläsarens Canvas API för att skapa en högupplöst bild med transparent bakgrund.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
