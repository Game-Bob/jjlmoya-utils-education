import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'latex-formule-weergave' as const;
const title = 'LaTeX Formule Weergave';
const description = 'Render LaTeX wiskundige formules direct in uw browser. Typ een formule en kopieer het resultaat als PNG, Markdown of LaTeX.';

const faqItems = [
  { question: 'Wat is LaTeX en waarom gebruiken studenten het?', answer: 'LaTeX is een opmaaktaal die veel wordt gebruikt in de wiskunde, natuurkunde en techniek om professionele formules te schrijven. In tegenstelling tot Word geeft LaTeX u exacte controle over de opmaak.' },
  { question: 'Moet ik iets installeren om dit te gebruiken?', answer: 'Nee. Deze tool draait volledig in uw browser via KaTeX, een snelle JavaScript-bibliotheek. Er is geen installatie of registratie vereist.' },
  { question: 'Wat is het verschil tussen Block- en Inline-modus?', answer: 'De Block-modus toont de formule gecentreerd op een eigen regel. De Inline-modus past de formule aan binnen de tekstlijn op een kleiner formaat.' },
  { question: 'Waarom toont mijn formule een syntaxfout?', answer: 'Syntaxfouten ontstaan meestal door niet-overeenkomende accolades, typefouten in commando\'s of niet-ondersteunde operatoren.' },
  { question: 'Kan ik formules kopiëren naar Word of Notion?', answer: 'Ja. Gebruik "PNG downloaden" voor een scherpe afbeelding met transparante achtergrond of "Markdown kopiëren" voor een LaTeX-codeblok.' }
];

const howToItems = [
  { name: 'Typ uw LaTeX-formule', text: 'Voer een geldige LaTeX-formule in. De weergave wordt in realtime bijgewerkt.' },
  { name: 'Kies een weergavemodus', text: 'Kies de Block-modus voor een aparte gecentreerde vergelijking of Inline-modus voor in de tekst.' },
  { name: 'Pas de lettergrootte aan', text: 'Gebruik de schuifregelaar om de weergave te vergroten of verkleinen.' },
  { name: 'Exporteer het resultaat', text: 'Klik op "PNG downloaden", "Markdown kopiëren" of "LaTeX kopiëren" om uw formule op te slaan.' }
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
    title: 'LaTeX Formule Weergave',
    inputLabel: 'LaTeX-formule',
    inputPlaceholder: 'bijv. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Block',
    inlineModeLabel: 'Inline',
    fontSizeLabel: 'Lettergrootte',
    downloadPngButton: 'PNG downloaden',
    copyMarkdownButton: 'Markdown kopiëren',
    copyLatexButton: 'LaTeX kopiëren',
    resetButton: 'Reset',
    previewTitle: 'Live-weergave',
    copiedToast: 'Gekopieerd naar klembord',
    errorLabel: 'Syntaxfout',
    emptyPreviewHint: 'Typ hierboven LaTeX-code om de formule te zien.',
    faqTitle: 'Veelgestelde Vragen',
    bibliographyTitle: 'Referenties & Bronnen'
  },
  seo: [
    { type: 'title', text: 'Hoe schrijf en toon je wiskundige formules in de browser', level: 2 },
    { type: 'paragraph', html: 'LaTeX is de standaard voor wetenschappelijke documenten. Deze tool rendert formules direct via KaTeX zonder dat er installaties nodig zijn.' },
    { type: 'title', text: 'Wat is KaTeX en waarom is het de beste keuze voor het web?', level: 3 },
    { type: 'paragraph', html: 'KaTeX is een door Khan Academy gemaakte JavaScript-bibliotheek die wiskundige formules op de client-side zeer snel en nauwkeurig toont.' },
    { type: 'paragraph', html: 'Het genereert schone HTML en SVG die op elke grootte scherp blijft.' },
    { type: 'title', text: 'Veelvoorkomende toepassingen voor studenten en onderzoekers', level: 3 },
    { type: 'list', items: [
      'De LaTeX-syntax controleren voordat u opdrachten inlevert.',
      'Formules als afbeelding downloaden voor Word of Notion.',
      'Formules omzetten in Markdown-blokken voor GitHub of Jupyter.',
      'Formules testen voordat u ze toevoegt aan een Overleaf-document.'
    ] },
    { type: 'title', text: 'Overzicht van de belangrijkste LaTeX wiskunde commando\'s', level: 3 },
    { type: 'paragraph', html: 'De belangrijkste commando\'s omvatten breuken, wortels, sommaties en integralen.' },
    { type: 'title', text: 'Block-modus vs. Inline-modus: wanneer te gebruiken', level: 3 },
    { type: 'paragraph', html: 'De Block-modus centreert de formule op een nieuwe regel, de Inline-modus voegt de formule in de tekstlijn in.' },
    { type: 'tip', html: 'Foutopsporingstip: elke geopende accolade moet een bijbehorende sluitaccolade hebben.' },
    { type: 'title', text: 'Formules exporteren: PNG, Markdown en LaTeX', level: 3 },
    { type: 'paragraph', html: 'De PNG-export gebruikt de Canvas API van de browser om een scherpe transparante afbeelding te maken.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
