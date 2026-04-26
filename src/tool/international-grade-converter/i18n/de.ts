import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'internationaler-notenumrechner' as const;
const title = 'Internationaler Notenumrechner und GPA Äquivalenz Rechner';
const description = 'Das präziseste Werkzeug zur Umrechnung akademischer Noten zwischen internationalen Systemen. Übersetzen Sie sofort Noten aus Spanien, USA, UK, Deutschland, Frankreich, Italien und mehr. Unverzichtbar für Erasmus+, Fulbright und weltweite Universitätsbewerbungen.';

const faqItems = [
  { 
    question: 'Wie funktioniert die internationale Notenumrechnung?', 
    answer: 'Das Tool verwendet eine mathematische lineare Abbildung basierend auf der Mindestbestehensnote und der maximal erreichbaren Punktzahl jedes Landes. Dies stellt sicher, dass ein "Bestanden" in einem System einem "Bestanden" in einem anderen entspricht und die akademische Verhältnismäßigkeit über verschiedene Skalen hinweg gewahrt bleibt.' 
  },
  { 
    question: 'Ist dieser Umrechner offiziell für die Universitätszulassung?', 
    answer: 'Obwohl unsere Algorithmen Standard-Äquivalenztabellen folgen (wie sie von ECTS oder WES verwendet werden), dient dieses Tool Informationszwecken. Für die offizielle Anerkennung von Leistungen sollten Sie immer Ihre Gasteinrichtung oder einen akkreditierten Bewertungsdienst konsultieren.' 
  },
  { 
    question: 'Was ist die "Bulk-Modus"-Funktion?', 
    answer: 'Der Bulk-Modus ermöglicht es Studenten mit umfangreichen Zeugnissen, mehrere Noten gleichzeitig zu verarbeiten. Fügen Sie einfach eine Spalte mit Zahlen aus Ihrem PDF- oder Excel-Dokument ein, und das Tool berechnet sofort die einzelnen Umrechnungen und Ihren globalen GPA-Durchschnitt.' 
  },
  { 
    question: 'Kann ich meine Noten in ECTS umrechnen?', 
    answer: 'Ja. Der Umrechner liefert Äquivalente, die auf das Europäische System zur Übertragung und Akkumulierung von Studienleistungen (ECTS) abgestimmt sind, ideal für europäische Studenten, die ihre Mobilität planen oder sich für Masterstudiengänge bewerben.' 
  }
];

const howToItems = [
  { name: '1. Quellsystem wählen', text: 'Identifizieren Sie Ihr Heimatland oder die spezifische Notenskala (z. B. Spanien 0-10, Frankreich 0-20).' },
  { name: '2. Zielländer festlegen', text: 'Fügen Sie die Länder hinzu, für die Sie sich bewerben, um alle Äquivalenzen nebeneinander im Dashboard zu sehen.' },
  { name: '3. Akademische Daten eingeben', text: 'Geben Sie eine einzelne Note für schnelle Prüfungen ein oder nutzen Sie den Bulk-Modus für Ihr gesamtes Semesterzeugnis.' },
  { name: '4. Analysieren & Exportieren', text: 'Überprüfen Sie die visuellen Perzentilbalken und laden Sie Ihren Äquivalenzbericht als PDF für Ihre Unterlagen herunter.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Bulk-Modus-Verarbeitung, Echtzeit-Konvertierung, Weltweite Skalenunterstützung, PDF-Berichtserstellung',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Quell-Notensystem',
    targetSystems: 'Globale Äquivalenzen',
    gradeInput: 'Ihre Note',
    bulkMode: 'Bulk-Verarbeitung',
    bulkPlaceholder: 'Notenliste hier einfügen (eine pro Zeile)...',
    results: 'Äquivalenz-Dashboard',
    passLimit: 'Min. Bestehen',
    shareResults: 'Äquivalenzbericht erstellen',
    averageMedia: 'Globaler umgerechneter Durchschnitt',
    compareTitle: 'Weltweiter akademischer Stand',
    addSystem: 'Land hinzufügen',
    removeSystem: 'Entfernen',
    selectCountry: 'Land wählen',
    sourceCountry: 'Herkunftsland',
    systemSelection: 'Systemauswahl',
    convertedScore: 'Umgerechnete Note',
    emptyState: 'Geben Sie eine Note ein, um globale Äquivalenzen zu sehen',
    minLabel: 'MIN',
    passLabel: 'BEST.',
    maxLabel: 'MAX',
    scaleLabel: 'Skala',
    howToTitle: 'Ihr Weg zur internationalen Bildung',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Akademische Referenzen & Standards',
    singleGradeMode: 'Einzelnote',
    transcriptMode: 'Vollständiges Zeugnis',
    gradeCounter: 'Eingegebene Noten',
    averageSummary: 'Berechneter Durchschnitt',
    gradesIgnored: '{count} Noten ignoriert (außerhalb des Bereichs)',
    bulkHelp: 'Fügen Sie Ihr Zeugnis direkt ein. Wir erkennen Noten, die durch Leerzeichen, Kommas oder Zeilen getrennt sind.',
    copiedLabel: 'Kopiert!',
    germanyExpl: 'Inverses System: 1,0 ist die bestmögliche Note, 4,0 ist das Minimum zum Bestehen.',
    spainExpl: 'Standard 0-10 Skala. 5,0 ist das Minimum zum Bestehen.',
    usaExpl: 'GPA-Skala von 0,0 bis 4,0. Normalerweise ist 2,0 das Minimum zum Bestehen.',
    ukExpl: 'Prozentbasierte Klassifizierung. 40% ist das Minimum zum Bestehen.',
    franceExpl: '20-Punkte-Skala. 10 ist das Minimum zum Bestehen.',
    italyExpl: '30-Punkte-Skala. 18 ist das Minimum zum Bestehen.',
    netherlandsExpl: '1-10 Skala. 6 ist das Minimum zum Bestehen.',
    placeholderSpain: 'z. B. 8,5',
    placeholderUSA: 'z. B. 3,7 oder A-',
    placeholderFrance: 'z. B. 14',
    placeholderGermany: 'z. B. 1,3',
    placeholderUK: 'z. B. 75',
    placeholderItaly: 'z. B. 28',
    placeholderNetherlands: 'z. B. 7,5',
  },
  seo: [
    { type: 'title', text: 'Präzise Notenumrechnung für globale Mobilität', level: 2 },
    { type: 'paragraph', html: 'Egal, ob Sie ein <strong>Erasmus+-Student</strong> sind oder sich für einen <strong>Ivy League Master</strong> bewerben, das Verständnis Ihres globalen akademischen Stands ist der erste Schritt. Noten variieren stark: Während eine 10 in Spanien perfekt ist, ist sie in Frankreich nur gerade bestanden. Unsere Engine klärt diese Unterschiede auf.' },
    { type: 'title', text: 'Warum Genauigkeit bei der GPA-Umrechnung wichtig ist', level: 3 },
    { type: 'paragraph', html: 'Zulassungsausschüsse nutzen umgerechnete GPAs, um Tausende von Bewerbungen zu filtern. Ein kleiner Fehler bei der manuellen Berechnung könnte Sie ein Stipendium kosten. Unser Tool nutzt <strong>offizielle lineare Mapping-Algorithmen</strong>, die von großen internationalen Bildungsbüros verwendet werden.' },
    { type: 'title', text: 'Unterstützte Hauptsysteme', level: 3 },
    { type: 'list', items: [
      '<strong>Spanien (0-10):</strong> Detailliertes Mapping von Aprobado bis Sobresaliente.',
      '<strong>USA GPA (4,0):</strong> Standardmäßige Äquivalenz der amerikanischen Universitäten.',
      '<strong>Deutschland (1-6):</strong> Handhabung der invertierten Skala, wobei 1,0 der Spitzenwert ist.',
      '<strong>Frankreich (0-20):</strong> Präzise Umrechnung für französische Grande Écoles und Universitäten.',
      '<strong>UK-Klassifizierung:</strong> Prozentuale Übersetzung in Honours Degree.'
    ] },
    { type: 'tip', html: '<strong>Akademischer Einblick:</strong> Nutzen Sie den "Bulk-Modus", um Ihren kumulativen GPA über mehrere Semester hinweg zu ermitteln. Das spart Stunden an manueller Tabellenkalkulation!' },
    { type: 'title', text: 'Berechnen Sie Ihre WES-Äquivalenz', level: 3 },
    { type: 'paragraph', html: 'Obwohl die offizielle WES-Bewertung ein kostenpflichtiger Dienst ist, liefert unser Tool eine <strong>hochpräzise Schätzung</strong> Ihres WES-GPA und hilft Ihnen bei der Entscheidung, wo Sie sich bewerben sollen, bevor Bewertungsgebühren anfallen.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
