import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'stundenplan-optimierer' as const;
const title = 'Stundenplanoptimierer';
const description = 'Erstellen Sie einen visuellen wöchentlichen Stundenplan, markieren Sie Fächer farblich, erkennen Sie Überschneidungen und exportieren Sie Ihren Plan als .ics-Kalenderdatei.';

const faqItems = [
  {
    question: 'Wie funktioniert die Erkennung von Überschneidungen?',
    answer: 'Jeder Kursblock hat einen Wochentag, eine Startzeit und eine Dauer. Das Tool vergleicht jeden Block miteinander und markiert sie, wenn sie am selben Tag liegen und sich ihre Zeitbereiche überschneiden.'
  },
  {
    question: 'Kann ich Kurse direkt im Kalender verschieben?',
    answer: 'Ja. Ziehen Sie einen Kursblock per Drag-and-Drop in eine andere Tagesspalte, um eine neue Wochenaufteilung zu testen. Der Konfliktstatus wird sofort nach dem Verschieben aktualisiert.'
  },
  {
    question: 'Was beinhaltet der .ics-Export?',
    answer: 'Der Export erstellt eine Standard-iCalendar-Datei, in der jeder Kurs als Ereignis mit Fach, Raum, Start- und Endzeit eingetragen ist. Sie können diese Datei in die meisten Kalender-Apps importieren.'
  },
  {
    question: 'Warum sollte ich Fächer farblich kennzeichnen?',
    answer: 'Farben machen einen dichten Stundenplan übersichtlicher. Verwenden Sie unterschiedliche Farben für Labore, Vorlesungen, Seminare oder lernintensive Fächer, damit Konflikte und stressige Tage schneller auffallen.'
  }
];

const howToItems = [
  { name: 'Kursdetails eingeben', text: 'Geben Sie Fach, Raum, Tag, Startzeit, Dauer und Farbe ein.' },
  { name: 'Blöcke im Wochenraster platzieren', text: 'Nutzen Sie die generierten Blöcke, um zu sehen, wie jeder Kurs in Ihren wöchentlichen Stundenplan passt.' },
  { name: 'Konflikte lösen', text: 'Achten Sie auf hervorgehobene Konfliktblöcke und verschieben oder bearbeiten Sie Kurse, bis die Konfliktanzeige leer ist.' },
  { name: 'Kalender exportieren', text: 'Laden Sie die .ics-Datei herunter und importieren Sie sie in Google Kalender, Apple Kalender, Outlook oder eine andere Kalender-App.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Fach',
    roomLabel: 'Raum',
    dayLabel: 'Tag',
    startLabel: 'Startzeit',
    durationLabel: 'Dauer',
    colorLabel: 'Farbe',
    addClass: 'Kurs hinzufügen',
    saveClass: 'Kurs speichern',
    newClass: 'Neuer Kurs',
    exportICS: 'Exportieren (.ics)',
    conflictLabel: 'Stundenplankonflikte',
    noConflicts: 'Keine Überschneidungen erkannt',
    removeLabel: 'Kurs entfernen',
    editHint: 'Wählen Sie einen Kurs aus, um ihn zu bearbeiten, oder ziehen Sie ihn auf einen anderen Tag/Uhrzeit.',
    weekendDaysLabel: 'Wochenendtage',
    saturdayLabel: 'Samstag',
    sundayLabel: 'Sonntag',
    weekDayLabels: ['Mo', 'Di', 'Mi', 'Do', 'Fr'],
    weekendDayShortLabels: ['Sa', 'So'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 Std.', '2 Std.', '3 Std.'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Analysis',
    defaultRoom: 'Raum 204',
    defaultNewSubject: 'Neuer Kurs',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Analysis', room: 'Raum 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Literaturwissenschaft', room: 'Labor B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Physik', room: 'Auditorium', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'stundenplan.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'Überschneidung',
    overlapPlural: 'Überschneidungen',
    detectedLabel: 'erkannt',
    classEditorAriaLabel: 'Kurs-Editor',
    weeklyScheduleAriaLabel: 'Wochenplan',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Literaturhinweise & Kalender-Standards',
  },
  seo: [
    { type: 'title', text: 'So erstellen Sie einen wöchentlichen Stundenplan, der wirklich funktioniert', level: 2 },
    { type: 'paragraph', html: 'Ein guter Stundenplan listet nicht nur Kurse auf. Er zeigt Ihnen, an welchen Tagen Sie überlastet sind, welche Tage fragmentiert sind und ob sich Pflichtveranstaltungen überschneiden. Ein visueller Stundenplan-Optimierer macht diese Probleme sichtbar, bevor sie zu verpassten Vorlesungen, Hektik oder Fehlern bei der Kurswahl führen.' },
    { type: 'summary', title: 'Was Sie vor der Finalisierung des Stundenplans prüfen sollten', items: [
      'Keine zwei Pflichtkurse überschneiden sich am selben Tag.',
      'Samstag und Sonntag können für Bildungseinrichtungen mit Wochenendunterricht aktiviert werden.',
      'Labore, Seminare und Vorlesungen nutzen unterschiedliche Farben zur schnellen Orientierung.',
      'Anspruchsvolle Fächer werden nicht direkt nacheinander ohne Pause geplant.',
      'Der finale Stundenplan lässt sich in Ihre alltägliche Kalender-App exportieren.'
    ] },
    { type: 'title', text: 'Warum visuelle Raster besser sind als einfache Listen', level: 3 },
    { type: 'paragraph', html: 'Einfache Kurslisten verbergen den Zeitdruck, weil sie jede Veranstaltung isoliert betrachten. Ein Raster zeigt die Dichte der Woche sofort an. Sie sehen direkt, ob der Montag zu viele Unterrichtsstunden hat, ob eine Vorlesung ein Labor blockiert, ob ein Samstagskurs den Wochenrhythmus stört oder ob Raumwechsel zu Hektik führen.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Kursliste', description: 'Gut für Registrierungscodes, ungeeignet zur Einschätzung des wöchentlichen Pensums.' },
      { title: 'Wochenraster', description: 'Ideal, um Rhythmus, Lücken und Konflikte auf einen Blick zu verstehen.', highlight: true },
      { title: 'Reine Kalender App', description: 'Nützlich nach der Planung, aber unpraktisch zum Experimentieren mit Alternativen.' }
    ] },
    { type: 'title', text: 'Wie die Überschneidungserkennung funktioniert', level: 3 },
    { type: 'paragraph', html: 'Zwei Kurse kollidieren, wenn sie am selben Tag liegen und ihre Zeitbereiche sich überschneiden. Zum Beispiel überschneidet sich eine Vorlesung von 10:00 bis 12:00 Uhr mit einem Seminar von 11:00 bis 13:00 Uhr, da beide die Stunde ab 11:00 Uhr beanspruchen. Das Tool vergleicht jeden Block mit allen anderen und markiert die Konflikte.' },
    { type: 'table', headers: ['Kurs A', 'Kurs B', 'Ergebnis'], rows: [
      ['Montag 09:00-11:00', 'Montag 11:00-13:00', 'Keine Überschneidung, da der eine Kurs endet, wenn der andere beginnt.'],
      ['Dienstag 10:00-12:00', 'Dienstag 11:00-13:00', 'Überschneidung, da sich die Zeitbereiche schneiden.'],
      ['Mittwoch 09:00-11:00', 'Donnerstag 09:00-11:00', 'Keine Überschneidung, da es verschiedene Tage sind.']
    ] },
    { type: 'title', text: 'Farben als Signal für die Studienplanung nutzen', level: 3 },
    { type: 'paragraph', html: 'Farbe dient nicht nur der Dekoration. Sie kann Kursart, Schwierigkeitsgrad, Campus-Standort oder den nötigen Energieaufwand codieren. Eine konsistente Farbpalette macht den Stundenplan im stressigen Alltag lesbarer, insbesondere beim Vergleichen alternativer Belegungen während der Einschreibung.' },
    { type: 'tip', html: '<strong>Halten Sie Farbcodes konsistent.</strong> Verwenden Sie beispielsweise eine Farbgruppe für Laborübungen, eine andere für Vorlesungen und eine Warnfarbe für Kurse, die längere Anfahrtswege erfordern.' },
    { type: 'title', text: 'Export in Kalender-Apps', level: 3 },
    { type: 'paragraph', html: 'Das .ics-Format ist das Standardformat für den iCalendar-Austausch. Durch das Exportieren können Sie Ihre Kurse in Google Kalender, Apple Kalender, Outlook und viele universitäre Kalendersysteme übertragen. Nach dem Import können Sie Erinnerungen, Fahrtzeiten, Serienregeln und persönliche Lernzeiten ergänzen.' },
    { type: 'diagnostic', variant: 'warning', title: 'Vor dem Importieren prüfen', html: 'Stellen Sie sicher, dass das Startdatum der Woche mit der Woche übereinstimmt, in die Sie importieren möchten, prüfen Sie die Zeitzonen in Ihrer Kalender-App und vergewissern Sie sich, dass importierte Termine nicht bereits vorhandene Kalenderfeeds duplizieren.' },
    { type: 'title', text: 'Ein praktischer Workflow für die Kurswahl', level: 3 },
    { type: 'list', items: [
      'Tragen Sie Pflichtkurse zuerst ein und lösen Sie dortige Konflikte, bevor Sie Wahlfächer hinzufügen.',
      'Aktivieren Sie Samstag oder Sonntag, wenn Ihr Stundenplan Wochenendkurse enthält.',
      'Nutzen Sie Farben, um Vorlesungen, Labore, Seminare und Selbststudium zu trennen.',
      'Verschieben Sie Blöcke zwischen den Tagen, um Belegungsalternativen schnell zu vergleichen.',
      'Lassen Sie sichtbare Pausen für Mahlzeiten, Fahrtzeiten und Erholung.',
      'Exportieren Sie erst, wenn das Konflikt-Panel keine Fehler mehr anzeigt.'
    ] },
    { type: 'message', title: 'Planung ist ein iterativer Prozess', html: 'Betrachten Sie die erste Version als Entwurf. Der beste Stundenplan entsteht meist, nachdem Sie Konflikte geprüft, Formate verglichen und geschaut haben, ob der wöchentliche Rhythmus im Alltag tragbar ist.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
