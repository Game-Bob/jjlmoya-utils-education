import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-german' as const;
const title = 'Prüfungscountdown & Studienplaner';
const description = 'Berechnen Sie Ihr genaues tägliches Lerntempo, um perfekt vorbereitet in Ihre Prüfung zu gehen. Geben Sie Ihr Lernmaterial ein, legen Sie Pausentage fest und erstellen Sie einen maßgeschneiderten Lernkalender.';

const faqItems = [
  { question: 'Warum ist tägliches Lernen besser als Bulimielernen kurz vor der Prüfung?', answer: 'Wissenschaftliche Untersuchungen zeigen, dass verteiltes Lernen (das Aufteilen von Lerneinheiten über einen längeren Zeitraum) zu einer wesentlich besseren langfristigen Speicherung führt und die Prüfungsangst im Vergleich zum Lernen in letzter Sekunde drastisch reduziert.' },
  { question: 'Wozu dient der Wiederholungspuffer?', answer: 'Der Wiederholungspuffer reserviert eine bestimmte Anzahl von Tagen direkt vor der Prüfung ausschließlich für die Wiederholung des bereits gelernten Stoffs. Während dieser Tage wird kein neues Material eingeplant, sodass Sie Ihr Wissen festigen können.' },
  { question: 'Wie wirken sich benutzerdefinierte Ruhetage auf mein Lerntempo aus?', answer: 'Wenn Sie einen Tag ausschließen (sei es als wöchentlichen freien Tag oder als einzelnes Datum), verteilt der Planer das verbleibende Material auf die restlichen Lerntage. Dadurch erhöht sich Ihr tägliches Pensum leicht, damit Sie rechtzeitig fertig werden.' },
  { question: 'Kann ich einen Ruhetag wieder in einen Lerntag umwandeln?', answer: 'Ja. Sie können jeden Tag in Ihrem Kalender in Echtzeit zwischen Lernen und Ruhepause umschalten oder ausgeschlossene Daten aus der Liste entfernen, um den Plan sofort neu zu berechnen.' },
];

const howToItems = [
  { name: 'Geben Sie Ihr Prüfungsdatum ein', text: 'Wählen Sie das Datum Ihrer bevorstehenden Prüfung im Kalender aus.' },
  { name: 'Geben Sie das gesamte Lernmaterial ein', text: 'Tragen Sie die Menge des Lernstoffs ein, z. B. Seitenanzahl, Kapitel oder Aufgaben.' },
  { name: 'Planen Sie Arbeitszeiten und Puffer', text: 'Wählen Sie Ihre wöchentlichen Ruhetage und legen Sie einen Puffer für die Abschlusswiederholung fest.' },
  { name: 'Anpassen und Verfolgen', text: 'Schalten Sie einzelne Kalendertage direkt im Zeitplan als Ruhetage ein oder aus, um flexibel auf Änderungen zu reagieren.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Lernplaner & Countdown',
    examDateLabel: 'Prüfungsdatum',
    materialLabel: 'Gesamtmaterial (Seiten / Kapitel)',
    materialUnitLabel: 'Materialeinheit',
    progressLabel: 'Bereits erledigt',
    weeklyScheduleLabel: 'Wöchentliche Lerntage',
    reviewBufferLabel: 'Wiederholungspuffer (Tage)',
    excludedDatesLabel: 'Benutzerdefinierte Ruhetage',
    dailyPaceLabel: 'Tägliches Lerntempo',
    daysLeftLabel: 'Verbleibende Tage',
    studyDaysLabel: 'Lerntage',
    bufferDaysLabel: 'Puffertage',
    scheduleTitle: 'Ihr persönlicher Lernkalender',
    resetButton: 'Zurücksetzen',
    addExclusionButton: 'Ruhetag hinzufügen',
    daysOfWeek: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    dayTypes: {
      study: 'Lerntag',
      rest: 'Ruhetag',
      review: 'Wiederholungspuffer',
      exam: 'Prüfungstag',
    },
    units: {
      pages: 'Seiten',
      chapters: 'Kapitel',
      exercises: 'Aufgaben',
      modules: 'Module',
      topics: 'Themen',
    },
    noStudyDaysError: 'Sie haben keine verfügbaren Lerntage! Bitte überprüfen Sie Ihre wöchentlichen Einstellungen und den Wiederholungspuffer.',
    examInPastError: 'Das Prüfungsdatum muss in der Zukunft liegen.',
    noMaterialError: 'Bitte geben Sie eine Gesamtmenge an Material an, die größer als Null ist.',
    scheduleTableHeader: {
      date: 'Datum',
      day: 'Wochentag',
      type: 'Status',
      target: 'Tagesziel',
      cumulative: 'Gesamtfortschritt',
      action: 'Aktionen',
    },
    markAsRest: 'Als Ruhetag markieren',
    markAsStudy: 'Als Lerntag markieren',
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Literatur & Wissenschaftliche Ressourcen',
  },
  seo: [
    { type: 'title', text: 'Wie Sie Ihre Lerneinheiten für maximale Behaltensleistung planen', level: 2 },
    { type: 'paragraph', html: 'Bei der Prüfungsvorbereitung geht es weniger um die in der letzten Nacht verbrachten Stunden als vielmehr darum, wie Sie Ihr Arbeitspensum verteilen. Ein gleichmäßiges Tempo schützt vor kognitiver Überlastung, verbessert die Erinnerungsfähigkeit und stellt sicher, dass Sie den gesamten Stoff stressfrei bewältigen.' },
    { type: 'title', text: 'Die Wissenschaft des verteilten Lernens und der Spaced Repetition', level: 3 },
    { type: 'paragraph', html: 'Unser Gehirn lernt am besten durch zeitliche Abstände. Wenn Sie Lerneinheiten über mehrere Wochen verteilen, ermöglichen Sie Ihrem Gehirn, durch Konsolidierung stärkere neuronale Verbindungen aufzubauen. Diese verteilte Übung verhindert geistige Ermüdung und hilft dabei, Informationen vom Kurzzeit- in das Langzeitgedächtnis zu übertragen.' },
    { type: 'paragraph', html: 'Gemäß der Ebbinghausschen Vergessenskurve lässt unsere Gedächtnisleistung im Laufe der Zeit nach, sofern wir Informationen nicht aktiv wiederholen. Regelmäßige Intervalle wirken wie ein Zurücksetzen der Vergessenskurve und verankern Konzepte tief im Gedächtnis.' },
    { type: 'title', text: 'Einplanung eines Puffers für die Abschlusswiederholung', level: 3 },
    { type: 'paragraph', html: 'Ein häufiger Fehler ist es, bis zur letzten Minute neuen Stoff zu lernen. Ein dedizierter Wiederholungspuffer (üblicherweise 2 bis 5 Tage vor der Prüfung) gibt Ihnen Zeit für Probeklausuren, das Durchgehen von Zusammenfassungen und das Klären offener Fragen. Zudem sorgt er dafür, dass Sie vor der Prüfung ausreichend schlafen.' },
    { type: 'title', text: 'Die Vorteile einer adaptiven Lernplanung', level: 3 },
    { type: 'paragraph', html: 'Starre Lernpläne scheitern meistens an unvorhergesehenen Ereignissen. Wenn Sie einmal hinterherhinken, ist ein herkömmlicher Plan schnell veraltet. Ein adaptiver Rechner berechnet Ihr tägliches Pensum in Echtzeit neu, sodass kleine Rückschläge keine Panik auslösen.' },
    { type: 'list', items: [
      'Tragen Sie regelmäßig Ihren Fortschritt ein, um genaue Berechnungen zu gewährleisten.',
      'Passen Sie freie Tage an, falls Terminkonflikte auftreten.',
      'Halten Sie ein konstantes Tempo ein, statt große Rückstände an einem einzigen Tag aufholen zu wollen.'
    ] },
    { type: 'title', text: 'Flexibilität: Ruhetage bewusst einplanen', level: 3 },
    { type: 'paragraph', html: 'Erholung ist kein Luxus, sondern ein wesentlicher Teil des Lernprozesses. Durch geplante Ruhetage beugen Sie Erschöpfung vor. Dieser Rechner verteilt den verbleibenden Stoff automatisch auf die übrigen Tage.' },
    { type: 'tip', html: '<strong>Planen Sie Unvorhergesehenes ein.</strong> Lassen Sie mindestens einen Ruhetag pro Woche frei. Dieser dient als Puffer. Wenn Sie krank werden oder einen Notfall haben, können Sie diesen Tag nutzen, um aufzuholen, ohne den gesamten Plan zu gefährden.' },
    { type: 'title', text: 'So berechnen Sie Ihr Lerntempo manuell', level: 3 },
    { type: 'paragraph', html: 'Um Ihr tägliches Lerntempo manuell zu berechnen, nutzen Sie eine einfache mathematische Formel. Ermitteln Sie zunächst Ihr verbleibendes Arbeitspensum, indem Sie das bereits bearbeitete Material vom Gesamtziel abziehen. Zählen Sie die Tage bis zur Prüfung und ziehen Sie Ruhetage sowie den Wiederholungspuffer ab. Teilen Sie das verbleibende Material durch die Lerntage.' },
    { type: 'paragraph', html: 'Beispiel: Bei 400 Seiten Gesamtstoff, 50 bereits gelesenen Seiten, 20 Tagen bis zur Prüfung, 4 geplanten Ruhetagen und 2 Tagen Wiederholungspuffer beträgt das Restvolumen 350 Seiten und die Anzahl der Lerntage 14. Ihr tägliches Tempo liegt somit bei 350 geteilt durch 14, also exakt 25 Seiten pro Tag.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
