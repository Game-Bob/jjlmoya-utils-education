import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'latex-formula-renderer' as const;
const title = 'LaTeX Formula Renderer';
const description = 'Render LaTeX math expressions instantly in your browser. Type any formula and copy the result as a PNG image, a Markdown code block, or raw LaTeX source - no server needed.';

const faqItems = [
  { question: 'What is LaTeX and why do students use it?', answer: 'LaTeX is a typesetting language widely used in mathematics, physics, engineering, and economics for writing professional-quality equations. Unlike Word or Google Docs, LaTeX lets you write complex formulas like integrals, matrices, and Greek symbols with precise control over formatting.' },
  { question: 'Do I need to install anything to use this renderer?', answer: 'No. This tool runs entirely in your browser using KaTeX, an open-source JavaScript library. There is no server, no login, and no installation required. Your expressions never leave your device.' },
  { question: 'What is the difference between Block and Inline mode?', answer: 'Block mode (also called Display mode) renders the formula on its own centered line, which is ideal for standalone equations. Inline mode renders the formula within the flow of text, at a smaller size, which is useful for embedding symbols inside a sentence.' },
  { question: 'Why is my formula showing a syntax error?', answer: 'LaTeX syntax errors most commonly occur from unmatched braces (e.g., writing \\frac{1 without the closing brace), misspelled command names (e.g., \\Frac instead of \\frac), or unsupported commands. Check that all curly braces are balanced and that you are using standard KaTeX-supported commands.' },
  { question: 'Can I use this tool to paste formulas into Word or Notion?', answer: 'Yes. Use "Download PNG" to download a high-resolution image of the rendered formula directly for use in Word, Google Docs, or Notion. Use "Copy Markdown" to get a fenced LaTeX code block ready for Markdown editors that support LaTeX rendering.' },
];

const howToItems = [
  { name: 'Type your LaTeX expression', text: 'Enter any valid LaTeX math expression in the editor on the left. The formula renders in real-time as you type.' },
  { name: 'Choose a rendering mode', text: 'Select Block mode for a centered standalone equation, or Inline mode for a compact formula suitable for embedding within text.' },
  { name: 'Adjust the font size', text: 'Use the font size slider to scale the preview up or down to match the size you need for your document.' },
  { name: 'Export in your preferred format', text: 'Click "Download PNG" to get an image, "Copy Markdown" for a LaTeX code block, or "Copy LaTeX" to copy the raw source expression.' },
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

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'LaTeX Formula Renderer',
    inputLabel: 'LaTeX Expression',
    inputPlaceholder: 'e.g. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Block',
    inlineModeLabel: 'Inline',
    fontSizeLabel: 'Font Size',
    downloadPngButton: 'Download PNG',
    copyMarkdownButton: 'Copy Markdown',
    copyLatexButton: 'Copy LaTeX',
    resetButton: 'Reset',
    previewTitle: 'Live Preview',
    copiedToast: 'Copied to clipboard',
    errorLabel: 'Syntax error',
    emptyPreviewHint: 'Start typing LaTeX above to see the rendered formula here.',
    faqTitle: 'Frequently Asked Questions',
    bibliographyTitle: 'References & Resources',
  },
  seo: [
    { type: 'title', text: 'How to Write and Render Mathematical Formulas in Your Browser', level: 2 },
    { type: 'paragraph', html: 'LaTeX is the standard for scientific and mathematical typesetting, used by universities, journals, and researchers worldwide. But most LaTeX environments require complex installations. This tool renders LaTeX formulas instantly in your browser using KaTeX - one of the fastest math rendering engines available - with zero setup.' },
    { type: 'title', text: 'What is KaTeX and Why is it the Best Choice for Browser Rendering?', level: 3 },
    { type: 'paragraph', html: 'KaTeX is an open-source JavaScript library created by Khan Academy that renders LaTeX math expressions in the browser with remarkable speed and accuracy. Unlike alternatives that require server-side processing or produce inconsistent output across platforms, KaTeX renders entirely client-side, making it ideal for real-time interactive tools.' },
    { type: 'paragraph', html: 'KaTeX produces clean, accessible HTML and SVG output that scales perfectly at any size. Its output is indistinguishable from professionally typeset mathematics, covering thousands of LaTeX commands including integrals, summations, matrices, Greek letters, and custom operators.' },
    { type: 'title', text: 'Common Use Cases for Students and Researchers', level: 3 },
    { type: 'list', items: [
      'Render equations from textbooks or lecture notes to verify your LaTeX syntax before submitting assignments.',
      'Download formulas as PNG images for pasting directly into Word, Google Docs, Notion, or presentation slides.',
      'Convert LaTeX expressions to Markdown code blocks for documentation, GitHub READMEs, or Jupyter notebooks.',
      'Preview how a formula will look before including it in a paper written with Overleaf or a local TeX distribution.',
    ] },
    { type: 'title', text: 'Essential LaTeX Math Commands Reference', level: 3 },
    { type: 'paragraph', html: 'The most commonly used LaTeX commands include: <strong>\\frac{a}{b}</strong> for fractions, <strong>\\sqrt{x}</strong> for square roots, <strong>\\sum_{i=1}^{n}</strong> for summations, <strong>\\int_a^b</strong> for integrals, <strong>\\lim_{x \\to 0}</strong> for limits, and Greek letters such as <strong>\\alpha</strong>, <strong>\\beta</strong>, <strong>\\theta</strong>, and <strong>\\Omega</strong>. Superscripts use the caret (x^2) and subscripts use the underscore (x_i).' },
    { type: 'title', text: 'Block Mode vs Inline Mode: When to Use Each', level: 3 },
    { type: 'paragraph', html: 'Block mode (Display mode) centers the formula on its own line and renders it at a larger scale, which is the standard presentation for standalone equations in academic papers and textbooks. Inline mode shrinks the formula to fit within the current line of text, which is appropriate for embedding short expressions like variables or simple operations within a paragraph.' },
    { type: 'tip', html: '<strong>Quick tip for debugging syntax errors:</strong> In LaTeX, every opening brace must have a matching closing brace. If the error message says "Expected \'}\' but got end of input", count the curly braces in your expression - you are likely missing a closing one.' },
    { type: 'title', text: 'Exporting Formulas: PNG vs Markdown vs LaTeX Source', level: 3 },
    { type: 'paragraph', html: 'The PNG export uses the browser Canvas API to rasterize the SVG output from KaTeX at double resolution (2x scale), producing a crisp transparent-background image suitable for high-DPI displays and print. The Markdown export wraps your LaTeX expression in a fenced code block tagged as <strong>latex</strong>, which is rendered by platforms like GitHub, Jupyter, and most modern Markdown editors that support math extensions.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
