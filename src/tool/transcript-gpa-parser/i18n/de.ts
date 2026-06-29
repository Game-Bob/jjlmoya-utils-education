import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'leistungsnachweis-gpa-parser' as const;
const title = 'Notenspiegel GPA Parser & Rechner';
const description = 'Berechnen Sie Ihren Notendurchschnitt (GPA) und Ihre gewichtete Durchschnittsnote sofort, indem Sie den Text Ihres Notenspiegels einfach kopieren und einfügen. Funktioniert komplett offline.';

const faqItems = [
  {
    question: 'Wie funktioniert das automatische Einlesen?',
    answer: 'Der eingefügte Text wird Zeile für Zeile gescannt und anhand von Leerzeichen, Tabulatoren oder Satzzeichen in Spalten unterteilt. Anschließend werden die Werte analysiert, um automatisch zu erkennen, welche Spalte Fächernamen, Noten und Credits enthält.'
  },
  {
    question: 'Sind meine akademischen Daten sicher?',
    answer: 'Ja, absolut. Das Einlesen und die GPA-Berechnung laufen vollständig in Ihrem Browser auf Ihrem Gerät ab. Es werden keine Daten an einen Server gesendet, sodass Ihr Notenspiegel zu 100 % privat bleibt.'
  },
  {
    question: 'Was passiert, wenn die Spalten falsch zugeordnet werden?',
    answer: 'Das können Sie ganz einfach anpassen. Jede Spalte in der erkannten Tabelle hat eine Dropdown-Auswahl im Header. Dort können Sie manuell festlegen, ob diese Spalte für den Kursnamen, die Note, die Credits steht oder ignoriert werden soll.'
  },
  {
    question: 'Werden auch Buchstabennoten und verschiedene Notensysteme unterstützt?',
    answer: 'Ja, es werden sowohl klassische Buchstabennoten (A, B, C, D, F) als auch numerische Notenskalen (0-10, 0-20, 0-100) unterstützt. Sie können die maximale Skala passend zum System Ihrer Hochschule einstellen.'
  }
];

const howToItems = [
  {
    name: 'Notenspiegel kopieren',
    text: 'Rufen Sie Ihr Hochschulportal oder Ihre Notenübersicht auf, markieren Sie den Text und kopieren Sie ihn.'
  },
  {
    name: 'Text einfügen',
    text: 'Fügen Sie den kopierten Text in das Eingabefeld dieses Tools ein.'
  },
  {
    name: 'Prüfen und zuordnen',
    text: 'Prüfen Sie die automatisch generierte Tabelle. Passen Sie bei Bedarf die Spaltenzuordnungen über die Header an.'
  },
  {
    name: 'Notenschnitt erhalten',
    text: 'Sehen Sie Ihren berechneten gewichteten GPA und die Gesamt-Credits direkt unten ein.'
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
    pasteAreaLabel: 'Fügen Sie Ihren Notenspiegel hier ein',
    pasteAreaPlaceholder: 'Fügen Sie hier den aus Moodle, Canvas oder der Notenübersicht Ihrer Universität kopierten Text ein...',
    parsedTitle: 'Eingelesene Notendaten',
    columnSelect: 'Spalte zuordnen',
    subjectName: 'Kurs-/Fachname',
    grade: 'Note',
    credits: 'Credits',
    ignore: 'Ignorieren',
    gpaResult: 'Gesamt-GPA',
    totalCredits: 'Gesamt-Credits',
    emptyState: 'Fügen Sie oben Ihre Notendaten ein, um Zeilen hier in der Vorschau anzuzeigen und zu bearbeiten.',
    scaleLabel: 'Grenze des Notensystems',
    customScale: 'Maximalwert des Notensystems',
    exampleSubject: 'Analysis I',
    newSubjectPlaceholder: 'Neuer Kurs',
    clearBtn: 'Text löschen',
    errorFormat: 'Es konnten keine eindeutigen Spalten erkannt werden. Versuchen Sie, ein Tabellen- oder Listenformat zu kopieren und einzufügen.'
  },
  seo: [
    { type: 'title', text: 'Wie Sie Ihren GPA aus jedem Notenspiegel einlesen und berechnen', level: 2 },
    { type: 'paragraph', html: 'Das Berechnen Ihres Notendurchschnitts sollte nicht das mühsame manuelle Eintippen Dutzender Kurse erfordern. Dieses Tool extrahiert die Daten aus jedem kopierten Rohtext, um Ihren GPA direkt zu berechnen.' },
    { type: 'title', text: 'Warum ein Tool zum Einlesen von Notenspiegeln nutzen?', level: 3 },
    { type: 'paragraph', html: 'Hochschulportale stellen Notenspiegel oft in komplexen HTML-Tabellen dar. Durch direktes Kopieren und Einfügen in dieses Tool kann unsere Erkennungsfunktion Kurse, Noten und Credits sofort und ohne Tippfehler auslesen.' },
    { type: 'title', text: 'Sicher, privat und schnell', level: 3 },
    { type: 'paragraph', html: 'Da die Erkennung lokal in JavaScript läuft, verlässt Ihr Leistungsnachweis niemals Ihren Browser. Sie können Seiten mit Hunderten von Zeilen in Millisekunden einlesen.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
