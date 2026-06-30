import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'lesezeit-notizendichte-planer' as const;
const title = 'Lesezeit und Notizendichte Planer';
const description = 'Schätzen Sie die benötigte Lesezeit für wissenschaftliche Texte inklusive Notizen und teilen Sie die Arbeit in praktische Lerneinheiten auf.';

const faqItems = [
  { question: 'Warum beeinflusst das Mitschreiben die Lesezeit so stark?', answer: 'Wissenschaftliches Lesen ist selten nur ein reines Überfliegen von Wörtern. Jede Markierung, Zusammenfassung, Frage am Rand oder Lernkarte benötigt Verarbeitungszeit. Wenn Sie die Notizendichte separat planen, verhindern Sie, dass eine optimistische Seiten-pro-Stunde-Schätzung zu Nachtschichten führt.' },
  { question: 'Was ist eine gute Seiten-pro-Stunde-Schätzung?', answer: 'Bei dichten Lehrbüchern sind 15 bis 25 Seiten pro Stunde üblich. Bei leichteren Texten können 30 bis 50 Seiten pro Stunde realistisch sein. Wenn das Material Formeln, Primärquellen oder unbekanntes Vokabular enthält, fangen Sie niedriger an und passen Sie den Wert nach der ersten gestoppten Einheit an.' },
  { question: 'Wie sollte ich die Notizendichte wählen?', answer: 'Planen Sie 1 bis 2 Minuten pro Seite für einfaches Markieren oder eine kurze Gliederung ein, 3 bis 5 Minuten pro Seite für Cornell-Notizen und mehr als 5 Minuten pro Seite, wenn Sie Lernkarten erstellen, Beispiele lösen oder Zusammenfassungen schreiben.' },
  { question: 'Kann dieser Planer den Lehrplan ersetzen?', answer: 'Nein. Er hilft Ihnen, das Lesepensum in Zeit und Einheiten umzurechnen, aber Abgabetermine, Seminare, Übungen und Wiederholungsphasen müssen weiterhin in Ihrem Hauptkalender eingetragen werden.' },
];

const howToItems = [
  { name: 'Lesepensum eingeben', text: 'Tragen Sie die Anzahl der Seiten oder die entsprechenden Lese-Einheiten ein, die Sie lesen müssen.' },
  { name: 'Verfügbare Zeit festlegen', text: 'Geben Sie die gesamte Zeit in Minuten ein, die Sie bis zum Abgabetermin erübrigen können.' },
  { name: 'Geschwindigkeit und Dichte schätzen', text: 'Wählen Sie eine Lesegeschwindigkeit in Seiten pro Stunde und die durchschnittliche Notizenzeit pro Seite.' },
  { name: 'In Einheiten aufteilen', text: 'Legen Sie die Anzahl der Lerneinheiten fest, um Seiten, Minuten und Notizenzeit pro Einheit zu sehen.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Zu lesende Seiten',
    minutesLabel: 'Verfügbare Minuten',
    speedLabel: 'Lesegeschwindigkeit, Seiten/Stunde',
    densityLabel: 'Notizendichte, Minuten/Seite',
    sessionsLabel: 'Lerneinheiten',
    totalTimeLabel: 'Gesamtaufwand',
    readingTimeLabel: 'Lesen',
    noteTimeLabel: 'Notizen',
    coverageLabel: 'Zeitabdeckung',
    pagesSessionLabel: 'Seiten/Einheit',
    minutesSessionLabel: 'Minuten/Einheit',
    notesSessionLabel: 'Notizen-Minuten/Einheit',
    controlsAriaLabel: 'Einstellungen für den Leseplan',
    minuteUnit: 'Min.',
    hourUnit: 'Std.',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Referenzen & Wissenschaftliche Ressourcen',
    statusLabels: {
      comfortable: 'Planbar',
      tight: 'Knapp aber machbar',
      overloaded: 'Zeitplan überlastet',
    },
    resetButton: 'Zurücksetzen',
  },
  seo: [
    { type: 'title', text: 'Planen Sie die Lesezeit mit Notizen, nicht nur mit Seiten', level: 2 },
    { type: 'paragraph', html: 'Viele Studenten schätzen das Lesen ein, indem sie die Seiten durch eine ungefähre Geschwindigkeit teilen, und vergessen dabei den größten versteckten Aufwand: die Notizen. Ein Kapitel mit vierzig Seiten kann eine 90-Minuten-Aufgabe sein, wenn Sie es nur überfliegen, oder eine dreistündige Aufgabe, wenn Sie Randnotizen machen, zusammenfassen und Lernkarten erstellen. Dieser Planer trennt die Lesegeschwindigkeit von der Notizendichte, damit Ihr Zeitplan die tatsächliche akademische Aufgabe widerspiegelt.' },
    { type: 'diagnostic', variant: 'info', title: 'Wann Ihr Leseplan wahrscheinlich zu optimistisch ist', html: '<ul><li>Ihre verfügbare Zeit deckt nur die reinen Leseminuten ab, nicht aber Notizen oder Übungsaufgaben.</li><li>Sie verwenden dieselbe Seiten-pro-Stunde-Schätzung für Romane, Fachbücher, Forschungsarbeiten und Fallstudien.</li><li>Ihre Lerneinheiten sind länger als Ihre übliche Aufmerksamkeitsspanne, weshalb die Notizen auf den letzten Seiten qualitativ schlechter werden.</li><li>Die Deadline beinhaltet andere Hausarbeiten, aber der Leseplan setzt voraus, dass jede freie Minute einem Fach gehört.</li></ul>' },
    { type: 'title', text: 'Eine realistische Seiten-pro-Stunde-Geschwindigkeit wählen', level: 3 },
    { type: 'table', headers: ['Materialtyp', 'Startgeschwindigkeit', 'Planungshinweis'], rows: [['Leichte Wiederholung oder bekannter Inhalt', '40-60 Seiten/Stunde', 'Verwenden Sie dies nur, wenn Sie das Fachvokabular bereits beherrschen und den Inhalt auffrischen, nicht neu erlernen.'], ['Standardkapitel im Lehrbuch', '20-35 Seiten/Stunde', 'Verringern Sie die Geschwindigkeit, wenn das Kapitel Rechenbeispiele, Diagramme oder Verständnisprüfungen enthält.'], ['Dichte Theorie, Forschung oder Primärquelle', '8-20 Seiten/Stunde', 'Planen Sie langsamere Einheiten und planen Sie Pufferzeiten ein, da das Verständnis meist erst nach mehrmaligem Lesen einsetzt.']] },
    { type: 'tip', html: '<strong>Kalibrieren Sie nach der ersten Einheit.</strong> Messen Sie die Zeit für die ersten zehn Seiten inklusive Notizen. Wenn der Rechner sagt, dass der Plan machbar ist, die gestoppte Einheit jedoch das Gegenteil zeigt, vertrauen Sie der gestoppten Zeit und verringern Sie Ihre Geschwindigkeit.' },
    { type: 'title', text: 'Was Notizendichte bedeutet', level: 3 },
    { type: 'paragraph', html: 'Die Notizendichte ist die durchschnittliche Zeit, die für die Bearbeitung jeder Seite während oder nach dem Lesen aufgewendet wird. Ein einfacher Ansatz bedeutet vielleicht ein Randkeyword und eine Markierung. Ein intensiver Ansatz umfasst Cornell-Notizen, eine kurze Zusammenfassung, eine Frageliste und drei Lernkarten. Die Wahl hängt von der Prüfungsform ab: Multiple-Choice-Tests erfordern Abfragekarten, Klausuren mit freien Fragen Argumentationsskizzen und quantitative Fächer gelöste Übungsaufgaben.' },
    { type: 'comparative', title: 'Einfache Notizen vs tiefe Bearbeitung', columns: 2, items: [{ title: 'Einfache Notizen', description: 'Schnellere Fertigstellung, nützlich für einen ersten Überblick, aber man vergisst es schneller und es ist später schwerer zu wiederholen.', points: ['Bestens für bekannte Themen', 'Geringerer unmittelbarer Aufwand', 'Schwächere Wiederholungsbasis'] }, { title: 'Tiefe Bearbeitung', description: 'Langsamere Fertigstellung, besser für die Klausurvorbereitung, Seminare und schriftliche Arbeiten, bei denen Belege genau erinnert werden müssen.', highlight: true, points: ['Empfohlen bei Prüfungen', 'Höherer unmittelbarer Aufwand', 'Sehr gutes Material zum Lernen'] }] },
    { type: 'summary', title: 'Eine praktische Planungsregel', items: ['Halten Sie Lese-Einheiten nach Möglichkeit unter 75 Minuten.', 'Wenn die Notizenzeit die Lesezeit überschreitet, teilen Sie die Aufgabe in zwei Phasen: zuerst lesen, später strukturieren.', 'Lassen Sie die letzte Lerneinheit für die Festigung frei, anstatt bis zum Abgabetermin neue Seiten einzuplanen.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
