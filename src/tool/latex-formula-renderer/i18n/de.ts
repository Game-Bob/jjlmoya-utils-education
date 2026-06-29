import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'latex-formel-renderer' as const;
const title = 'LaTeX Formel Renderer';
const description = 'Rendern Sie LaTeX-Formeln sofort im Browser. Geben Sie eine mathematische Formel ein und kopieren Sie das Ergebnis als PNG-Bild, Markdown-Codeblock oder LaTeX-Quellcode.';

const faqItems = [
  { question: 'Was ist LaTeX und warum wird es von Studenten genutzt?', answer: 'LaTeX ist eine Schriftsatzsprache, die in der Mathematik, Physik, Informatik und den Wirtschaftswissenschaften verwendet wird, um professionelle Formeln darzustellen. Anders als in Word lässt sich das Layout exakt steuern.' },
  { question: 'Muss ich eine Software installieren, um diesen Renderer zu nutzen?', answer: 'Nein. Dieses Tool läuft vollständig im Browser unter Verwendung der schnellen JavaScript-Bibliothek KaTeX. Es ist keine Installation oder Registrierung erforderlich.' },
  { question: 'Was ist der Unterschied zwischen Block- und Inline-Modus?', answer: 'Der Block-Modus rendert die Formel zentriert in einer eigenen Zeile (ideal für alleinstehende Gleichungen). Der Inline-Modus bettet die Formel direkt im Fließtext ein.' },
  { question: 'Warum zeigt meine Formel einen Syntaxfehler an?', answer: 'Syntaxfehler entstehen meist durch nicht geschlossene geschweifte Klammern, Tippfehler bei Befehlen oder nicht unterstützte Operatoren.' },
  { question: 'Kann ich die Formeln in Word oder Notion einfügen?', answer: 'Ja. Nutzen Sie "PNG herunterladen" für ein hochauflösendes Bild oder "Markdown kopieren" für einen fertigen LaTeX-Codeblock.' }
];

const howToItems = [
  { name: 'LaTeX-Formel eingeben', text: 'Tragen Sie die gewünschte mathematische Formel im Editor ein. Die Vorschau aktualisiert sich in Echtzeit.' },
  { name: 'Render-Modus wählen', text: 'Nutzen Sie den Block-Modus für ein separates Gleichungselement oder den Inline-Modus für Textflüsse.' },
  { name: 'Schriftgröße anpassen', text: 'Skalieren Sie die Vorschau mithilfe des Schiebereglers auf die gewünschte Größe.' },
  { name: 'Ergebnis exportieren', text: 'Klicken Sie auf "PNG herunterladen", "Markdown kopieren" oder "LaTeX kopieren", um das Ergebnis zu sichern.' }
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
    title: 'LaTeX Formel Renderer',
    inputLabel: 'LaTeX-Formel',
    inputPlaceholder: 'z.B. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Block',
    inlineModeLabel: 'Inline',
    fontSizeLabel: 'Schriftgröße',
    downloadPngButton: 'PNG herunterladen',
    copyMarkdownButton: 'Markdown kopieren',
    copyLatexButton: 'LaTeX kopieren',
    resetButton: 'Zurücksetzen',
    previewTitle: 'Live-Vorschau',
    copiedToast: 'In Zwischenablage kopiert',
    errorLabel: 'Syntaxfehler',
    emptyPreviewHint: 'Geben Sie oben LaTeX-Code ein, um die gerenderte Formel zu sehen.',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Literatur und Ressourcen'
  },
  seo: [
    { type: 'title', text: 'Wie man mathematische Formeln im Browser schreibt und anzeigt', level: 2 },
    { type: 'paragraph', html: 'LaTeX ist der Standard für wissenschaftliche Arbeiten. Mit diesem Tool können Sie Formeln mithilfe von KaTeX ohne Einrichtung sofort rendern.' },
    { type: 'title', text: 'Was ist KaTeX und warum ist es die beste Wahl für das Web?', level: 3 },
    { type: 'paragraph', html: 'KaTeX ist eine von der Khan Academy entwickelte JavaScript-Bibliothek, die LaTeX-Formeln clientseitig extrem schnell und präzise darstellt.' },
    { type: 'paragraph', html: 'Sie erzeugt sauberen HTML- und SVG-Code, der sich stufenlos skalieren lässt.' },
    { type: 'title', text: 'Typische Anwendungsfälle für Studenten und Forscher', level: 3 },
    { type: 'list', items: [
      'LaTeX-Syntax von Lehrbuchaufgaben überprüfen.',
      'Formeln als transparente PNG-Bilder für Word oder Notion exportieren.',
      'LaTeX-Ausdrücke in Markdown-Codeblöcke für GitHub oder Jupyter umwandeln.',
      'Formeln testen, bevor sie in Overleaf-Dokumente eingefügt werden.'
    ] },
    { type: 'title', text: 'Übersicht der wichtigsten mathematischen LaTeX-Befehle', level: 3 },
    { type: 'paragraph', html: 'Zu den grundlegenden Befehlen gehören Brüche, Wurzeln, Summenzeichen und Integrale.' },
    { type: 'title', text: 'Block-Modus vs. Inline-Modus: Wann nutzt man welchen?', level: 3 },
    { type: 'paragraph', html: 'Der Block-Modus zeigt Formeln zentriert in einer neuen Zeile, während der Inline-Modus sie platzsparend im Fließtext unterbringt.' },
    { type: 'tip', html: 'Tipp zur Fehlersuche: Jede geöffnete Klammer benötigt zwingend eine schließende Klammer.' },
    { type: 'title', text: 'Export-Formate im Vergleich: PNG, Markdown und LaTeX', level: 3 },
    { type: 'paragraph', html: 'Der PNG-Export nutzt das Canvas-Element des Browsers, um eine scharfe Bilddatei mit transparentem Hintergrund zu erstellen.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
