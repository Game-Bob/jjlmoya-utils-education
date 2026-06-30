import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'rubrik-matrix-designer' as const;
const title = 'Rubrik Matrix Designer';
const description = 'Erstellen Sie bearbeitbare, gewichtete Bewertungsrubriken mit Leistungsstufen, Live-Validierung der 100%-Gewichtung, CSV-Export und einem druckfertigen Layout.';

const faqItems = [
  { question: 'Was ist eine Rubrik-Matrix?', answer: 'Eine Rubrik-Matrix ist ein Bewertungsgitter, das Kriterien in Zeilen und Leistungsstufen in Spalten anordnet. Jede Zelle beschreibt, wie die Leistung auf dieser Stufe aussieht, was die Benotung transparenter und konsistenter macht.' },
  { question: 'Warum müssen die Kriteriengewichte genau 100 % ergeben?', answer: 'Ein Gesamtwert von 100 % macht das Bewertungsmodell explizit. Liegt der Gesamtwert unter oder über 100 %, können Studierende und Bewertende nicht klar nachvollziehen, wie viel jedes Kriterium zur Endnote beiträgt.' },
  { question: 'Können Studierende dieses Tool nutzen?', answer: 'Ja. Studierende können es nutzen, um die Erwartungen an Aufgaben zu analysieren, Entwürfe zu planen oder Peer-Review-Checklisten vor der Abgabe zu erstellen.' },
  { question: 'Welche Exportoptionen sind enthalten?', answer: 'Der CSV-Export ist nützlich für Tabellenkalkulationen und die Einrichtung im LMS. Die Druckschaltfläche öffnet den Druckdialog des Browsers, in dem Sie über den Systemdruckdialog als PDF speichern können.' },
];

const howToItems = [
  { name: 'Kriterien bearbeiten', text: 'Klicken Sie auf den Namen eines Kriteriums und ersetzen Sie ihn durch die Fähigkeit, das Ergebnis oder die Anforderung, die Sie bewerten möchten.' },
  { name: 'Gewichtung festlegen', text: 'Passen Sie die Prozentsätze an, bis die Live-Gewichtungsleiste eine ausgeglichene Rubrik von 100 % anzeigt.' },
  { name: 'Leistungsstufen beschreiben', text: 'Klicken Sie in jede Zelle für Beschreibungen und formulieren Sie beobachtbare Nachweise für diese Leistungsstufe.' },
  { name: 'Struktur anpassen', text: 'Verwenden Sie die Hinzufügen-Schaltflächen, um zusätzliche Kriterien oder Leistungsstufen zu erstellen, und entfernen Sie nicht benötigte Zeilen oder Spalten.' },
  { name: 'Exportieren oder Drucken', text: 'Laden Sie eine CSV-Datei für Tabellenkalkulationen herunter oder nutzen Sie die Druckfunktion, um eine saubere PDF-Version zu erstellen.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Kriterium',
    weightHeader: 'Gewichtung',
    levelSectionLabel: 'Leistungsstufen',
    levelBadgePrefix: 'S',
    addCriterion: 'Kriterium hinzufügen',
    addLevel: 'Stufe hinzufügen',
    removeCriterion: 'Kriterium entfernen',
    removeLevel: 'Stufe entfernen',
    exportCsv: 'CSV exportieren',
    printRubric: 'Drucken / PDF',
    csvFilename: 'bewertungsrubrik.csv',
    pdfDocumentTitle: 'Bewertungsrubrik',
    pdfImageAlt: 'Bewertungsrubrik',
    confirmDeleteTitle: 'Kriterium löschen?',
    confirmDeleteText: 'Dadurch werden das Kriterium und alle für seine Leistungsstufen geschriebenen Beschreibungen gelöscht.',
    cancelDelete: 'Abbrechen',
    confirmDelete: 'Kriterium löschen',
    totalWeight: 'Gesamtgewichtung',
    balanced: 'Ausgeglichen bei genau 100%',
    under: 'Erhöhen Sie die Gewichtung, bis 100 % erreicht sind',
    over: 'Reduzieren Sie die Gewichtung, bis wieder genau 100 % erreicht sind',
    emptyCell: 'Klicken zum Bearbeiten',
    newCriterionTemplate: 'Kriterium {index}',
    newDescriptorTemplate: 'Beschreibung {index}.{level}',
    newLevelTemplate: 'Stufe {index}',
    defaultLevels: [
      { name: 'Exzellent', score: 4 },
      { name: 'Kompetent', score: 3 },
      { name: 'In Entwicklung', score: 2 },
      { name: 'Anfänger', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Qualität der Argumentation',
        weight: 35,
        cells: [
          'Klare These mit differenzierter Begründung',
          'Klare These mit angemessener Begründung',
          'These vorhanden, aber uneinheitlich',
          'These unklar oder fehlt',
        ],
      },
      {
        name: 'Verwendung von Belegen',
        weight: 30,
        cells: [
          'Belege sind präzise und integriert',
          'Belege stützen die meisten Behauptungen',
          'Belege sind allgemein oder lose verknüpft',
          'Belege fehlen oder sind ungenau',
        ],
      },
      {
        name: 'Organisation',
        weight: 20,
        cells: [
          'Struktur führt den Leser flüssig durch den Text',
          'Struktur ist logisch',
          'Struktur weist Lücken oder Wiederholungen auf',
          'Struktur ist schwer nachzuvollziehen',
        ],
      },
      {
        name: 'Akademischer Stil',
        weight: 15,
        cells: [
          'Ausgefeilter Stil und präzise Einhaltung von Konventionen',
          'Kleinere Fehler beeinträchtigen das Verständnis nicht',
          'Häufige Fehler lenken den Leser ab',
          'Fehler machen den Sinn unklar',
        ],
      },
    ],
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Literaturhinweise & Ressourcen',
  },
  seo: [
    { type: 'title', text: 'Bewertungsrubriken gestalten, die Studierende tatsächlich nutzen können', level: 2 },
    { type: 'paragraph', html: 'Eine gute Bewertungsrubrik ist mehr als nur ein Benotungsblatt. Sie ist ein gemeinsamer Wegweiser für Erwartungen. Studierende nutzen sie, um vor der Abgabe zu verstehen, wie Qualität aussieht, Lehrende nutzen sie für eine konsistentere Benotung, und Prüfende nutzen sie, um Feedback klarer zu begründen. Dieser Designer macht die Struktur sichtbar: Kriterien, Gewichtungen, Leistungsstufen und Beschreibungen befinden sich alle in einer bearbeitbaren Matrix.' },
    { type: 'diagnostic', variant: 'warning', title: 'Wann eine Rubrik überarbeitet werden muss', html: '<ul><li>Mehrere Kriterien überschneiden sich so stark, dass derselbe Fehler doppelt bestraft wird.</li><li>Die Gesamtgewichtung ergibt nicht 100 %, was die Interpretation der Endnote erschwert.</li><li>Beschreibungen verwenden vage Wörter wie gut, schwach oder hervorragend ohne beobachtbare Kriterien.</li><li>Es gibt zu viele Stufen, als dass Bewertende sie zuverlässig unterscheiden könnten.</li></ul>' },
    { type: 'title', text: 'Auswahl von Kriterien und Gewichtungen', level: 3 },
    { type: 'table', headers: ['Rubrik-Element', 'Gute Praxis', 'Häufiges Problem'], rows: [['Kriterien', 'Bewerten Sie eindeutige Fähigkeiten oder Ergebnisse wie Argumentation, Belege, Methode, Genauigkeit oder Präsentation.', 'Das Mischen mehrerer Fähigkeiten in einer Zeile macht das Feedback unklar.'], ['Gewichtungen', 'Passen Sie das Gewicht an die Priorität des Lernziels und den Zweck der Aufgabe an.', 'Gleiche Gewichtung für jede Zeile, selbst wenn manche Ergebnisse wichtiger sind.'], ['Stufen', 'Verwenden Sie 3 bis 5 Stufen, die Bewertende konsistent unterscheiden können.', 'Zu viele Stufen mit minimalen Formulierungsunterschieden.'], ['Beschreibungen', 'Beschreiben Sie beobachtbare Nachweise in der Arbeit der Studierenden.', 'Verwendung von Etiketten, die bewertend klingen, aber keine Anleitung zur Verbesserung bieten.']] },
    { type: 'comparative', title: 'Analytische vs. ganzheitliche Rubriken', columns: 2, items: [{ title: 'Analytische Rubrik', description: 'Teilt die Leistung in separate Kriterien und Gewichtungen auf. Am besten geeignet, wenn Studierende gezieltes Feedback benötigen oder sich mehrere Bewertende abstimmen müssen.', highlight: true, points: ['Transparente Bewertung', 'Spezifisches Feedback', 'Funktioniert gut bei komplexen Aufgaben'] }, { title: 'Ganzheitliche Rubrik', description: 'Gibt ein einzelnes Gesamturteil ab. Schneller anzuwenden, aber weniger diagnostisch für Überarbeitungen oder Peer-Reviews.', points: ['Schnellere Bewertung', 'Nützlich für schnelle Überprüfungen', 'Weniger detailliertes Feedback'] }] },
    { type: 'tip', html: '<strong>Formulieren Sie Beschreibungen anhand von Nachweisen, nicht anhand von Adjektiven.</strong> Schreiben Sie statt "hervorragende Analyse", was eine hervorragende Analyse auszeichnet: verknüpft Belege mit der These, geht auf Einschränkungen ein und erklärt, warum die Belege wichtig sind.' },
    { type: 'title', text: 'So validieren Sie eine gewichtete Rubrik', level: 3 },
    { type: 'paragraph', html: 'Gewichtungen kommunizieren Prioritäten. Ein Kriterium, das 40 % wert ist, lenkt die Anstrengung der Studierenden anders als eines, das 10 % wert ist. Die Live-Gesamtsumme in diesem Tool ist bewusst streng: Die Rubrik ist nur ausgeglichen, wenn die Summe genau 100 % ergibt. Liegt sie unter 100 %, bleibt ein Teil der Note undefiniert. Liegt sie über 100 %, verspricht das Modell zu viele Punkte und stiftet Verwirrung.' },
    { type: 'summary', title: 'Ein praktischer Arbeitsablauf für Rubriken', items: ['Beginnen Sie mit den Lernergebnissen, bevor Sie Zeilen schreiben.', 'Beschränken Sie die Matrix auf Kriterien, die sich tatsächlich auf das Feedback auswirken.', 'Entwerfen Sie Beschreibungen in einfacher, beobachtbarer Sprache.', 'Überprüfen Sie die 100%-Gewichtung, bevor Sie die Rubrik teilen.', 'Exportieren Sie als CSV, wenn Sie ein Tabellenblatt oder ein LMS einrichten müssen.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
