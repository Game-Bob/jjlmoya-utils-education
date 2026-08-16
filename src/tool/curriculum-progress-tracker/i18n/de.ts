import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'rechner-fuer-studienfortschritt-und-voraussichtliche-abschlussnote' as const;
const title = 'Rechner für Studienfortschritt und voraussichtliche Abschlussnote';
const description = 'Organisieren Sie Ihr Studium Semester für Semester, verfolgen Sie Ihre tatsächliche sowie prognostizierte Durchschnittsnote und simulieren Sie erforderliche Noten.';

const faqItems = [
  {
    question: 'Wie beginne ich mit der Studienplanung?',
    answer: 'Fügen Sie einfach Semester hinzu und tragen Sie Ihre Module direkt in der Übersicht ein. Sie können Credit Points festlegen, den Status festlegen und Noten eintragen.',
  },
  {
    question: 'Was ist der Unterschied zwischen tatsächlicher und prognostizierter Durchschnittsnote?',
    answer: 'Die tatsächliche Note berücksichtigt nur abgeschlossene Module. Die prognostizierte Note berechnet Ihren Gesamtschnitt unter Einbeziehung laufender und geplanter Module.',
  },
  {
    question: 'Was zeigt der Indikator für die erforderliche Note an?',
    answer: 'Er berechnet den genauen Notendurchschnitt, den Sie in allen verbleibenden Modulen erzielen müssen, um Ihre gewünschte Zielnote zu erreichen.',
  },
  {
    question: 'Sind meine Daten sicher?',
    answer: 'Ja. Alle Daten verbleiben lokal in Ihrem Webbrowser und werden nicht auf Server übertragen. Sie können Ihren Plan als JSON-Datei exportieren.',
  },
];

const howToItems = [
  { name: 'Ziele festlegen', text: 'Tragen Sie die für den Abschluss erforderlichen Credit Points und Ihre Zielnote oben im Planer ein.' },
  { name: 'Module eintragen', text: 'Erstellen Sie Semester und listen Sie Ihre Module mit den entsprechenden Credit Points auf.' },
  { name: 'Noten aktualisieren', text: 'Wechseln Sie den Status Ihrer Fächer zwischen Bestanden, In Arbeit und Geplant und tragen Sie Noten ein.' },
  { name: 'Erforderlichen Schnitt berechnen', text: 'Nutzen Sie die Analyse, um den in den kommenden Semestern benötigten Schnitt zu ermitteln.' },
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

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: 'Name des Studiengangs',
    graduationCreditsLabel: 'Erforderliche Credit Points (Gesamt)',
    targetGpaLabel: 'Zielnote',
    realGpaLabel: 'Tatsächliche Note',
    projectedGpaLabel: 'Prognostizierte Note',
    creditsCompletedLabel: 'Erreichte Credit Points',
    requiredGradeLabel: 'Erforderliche Note (Verbleibend)',
    addSemesterButton: 'Semester hinzufügen',
    addCourseButton: 'Modul hinzufügen',
    exportPlanButton: 'Plan exportieren',
    importPlanButton: 'Plan importieren',
    semesterNamePlaceholder: 'Semestername (z. B. 1. Fachsemester)',
    courseNamePlaceholder: 'Modulname',
    creditsPlaceholder: 'CP',
    gradePlaceholder: 'Note',
    statusCompleted: 'Bestanden',
    statusInProgress: 'In Arbeit',
    statusPlanned: 'Geplant',
    importError: 'Der Studienplan konnte nicht importiert werden. Bitte überprüfen Sie das Dateiformat.',
    uploadHint: 'Alle Daten werden lokal in Ihrem Browser gespeichert. Import und Export erfolgen vollständig auf Ihrem Gerät.',
    statusMessageSuccess: 'Sie sind auf dem besten Weg, Ihre Zielnote zu erreichen.',
    statusMessageWarning: 'Sie müssen in den verbleibenden Modulen einen Schnitt von {grade} oder besser erreichen, um Ihre Zielnote zu erzielen.',
    statusMessageImpossible: 'Es ist mathematisch unmöglich, Ihre Zielnote mit den aktuellen Einstellungen zu erreichen.',
    degreeNamePlaceholder: 'z. B. BSc Informatik',
    deleteSemesterLabel: 'Semester löschen',
    deleteCourseLabel: 'Modul löschen',
    semesterTitleTemplate: 'Semester {num}',
  },
  seo: [
    { type: 'title', text: 'Wie Sie Ihren Studienfortschritt und Notendurchschnitt vorausschauend simulieren', level: 2 },
    { type: 'paragraph', html: 'Die vorausschauende Planung Ihres Studiums hilft Ihnen dabei, wichtige Durchschnittsnoten für Stipendien oder Masterstudiengänge zu sichern. Modulieren Sie zukünftige Semester und ermitteln Sie den genauen Schnitt, den Sie in den verbleibenden Prüfungen benötigen.' },
    { type: 'summary', title: 'Wichtige Kennzahlen zur Studienorganisation', items: [
      'Visualisieren Sie das Verhältnis erreichter Credit Points zur Gesamtsumme.',
      'Planen Sie zukünftige Notenszenarien, um den Einfluss einzelner Prüfungen zu bewerten.',
      'Errechnen Sie rechtzeitig Gegenmaßnahmen bei drohendem Unterschreiten von Zielnoten.',
    ] },
    {
      type: 'proscons',
      title: 'Vorteile und Grenzen des Notensimulators',
      items: [
        {
          pro: 'Erleichtert die strategische Prüfungsplanung für kommende Semester.',
          con: 'Die Genauigkeit der Prognosen hängt von der Realität Ihrer Notenannahmen ab.',
        },
        {
          pro: 'Bestimmt exakt die verbleibende Leistungskurve zur Erreichung der Zielnote.',
          con: 'Berücksichtigt keine universitätsspezifischen Härtefall- oder Freiversuchsregelungen.',
        },
      ],
    },
    { type: 'paragraph', html: 'Lege zuerst die erforderliche Gesamtzahl an Credits fest und verteile die verbleibenden Kurse auf realistische Semester.' },
    { type: 'paragraph', html: 'Erfasste Credits zeigen deinen tatsächlichen Fortschritt, geplante Kurse dienen nur der Simulation zukünftiger Ergebnisse.' },
    { type: 'paragraph', html: 'Die voraussichtliche Durchschnittsnote hängt von den eingegebenen Schätzungen für offene Kurse ab.' },
    { type: 'paragraph', html: 'Vergleiche mehrere Annahmen, statt eine einzige erwartete Note als sicher zu betrachten.' },
    { type: 'paragraph', html: 'Die erforderliche Note zeigt, welche Leistung in den verbleibenden Kursen für dein Ziel nötig wäre.' },
    { type: 'paragraph', html: 'Ein leichteres Semester kann die Regelmäßigkeit verbessern, während ein voller Plan Credits schneller sammelt.' },
    { type: 'paragraph', html: 'Bewerte jede Planung zusammen mit deiner verfügbaren Zeit und dem tatsächlichen Arbeitsaufwand der Kurse.' },
    { type: 'paragraph', html: 'Exportiere den Plan vor größeren Änderungen, damit du frühere Szenarien später vergleichen kannst.' },
    { type: 'paragraph', html: 'Nutze Statuswerte für abgeschlossene, laufende und geplante Kurse, damit die Simulation verständlich bleibt.' },
    { type: 'paragraph', html: 'Die Berechnung ist eine allgemeine Orientierung und ersetzt keine Studienberatung deiner Hochschule.' },
    { type: 'paragraph', html: 'Prüfe insbesondere Gewichtungen, Ausgleichsregeln und Anforderungen für Auszeichnungen in deiner Prüfungsordnung.' },
    { type: 'paragraph', html: 'Speichere deine Eingaben lokal und aktualisiere sie nach jedem offiziell veröffentlichten Ergebnis.' },
    { type: 'paragraph', html: 'Ein realistischer Plan hilft dir, Fortschritt zu messen und frühzeitig Unterstützung zu suchen.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
