import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow';
const description = 'Meistern Sie Ihre Produktivität mit zen-fokussiertem Zeitmanagement. Passen Sie Arbeits- und Pausenzyklen an, erfassen Sie Unterbrechungen und visualisieren Sie Ihre Konzentrationsmuster in Echtzeit.';

const faqItems = [
  { question: 'Was ist die Pomodoro-Technik?', answer: 'Die Pomodoro-Technik ist eine Zeitmanagement-Methode, die fokussierte Arbeitsintervalle (meist 25 Minuten) gefolgt von kurzen Pausen nutzt. Dieses Tool erweitert sie um anpassbare Zyklen und detaillierte Analysen.' },
  { question: 'Kann ich die Arbeits- und Pausendauer anpassen?', answer: 'Ja! Wählen Sie aus drei Voreinstellungen (Samen: 25/5, Baum: 50/10, Berg: 90/15) oder passen Sie die Zeiten spontan mit +5 und -5 Minuten Tasten an.' },
  { question: 'Was bewirkt die Erfassung von Unterbrechungen?', answer: 'Jedes Mal, wenn Sie auf die Ablenkungstaste klicken, zeichnet das Tool eine Unterbrechung auf. Dies hilft bei der Berechnung Ihres Fokus-Scores und der Identifizierung von Mustern in Ihrer Konzentration.' },
  { question: 'Wie wird der Fokus-Score berechnet?', answer: 'Fokus-Score = ((Arbeitszeit - Unterbrechungen × 2) / Arbeitszeit) × 100. Dies berücksichtigt die kognitiven Kosten des Kontextwechsels.' },
  { question: 'Kann ich meine Sitzungsdaten exportieren?', answer: 'Ja. Sie können Ihre Sitzungszusammenfassung als Markdown kopieren (ideal für Notion/Obsidian) oder eine visuelle Zusammenfassung in sozialen Medien teilen.' },
];

const howToItems = [
  { name: 'Aufgabe eingeben', text: 'Geben Sie ein, woran Sie arbeiten werden. Dies hilft, Kontext und Absicht zu wahren.' },
  { name: 'Zyklus wählen', text: 'Wählen Sie Samen (25/5) für schnelle Aufgaben, Baum (50/10) für Standardarbeit oder Berg (90/15) für tiefen Fokus.' },
  { name: 'Starten und fokussieren', text: 'Der Timer beginnt. Klicken Sie auf den Ring zum Pausieren. Nutzen Sie +5/-5 zur Anpassung. Die Titelleiste zeigt die verbleibende Zeit.' },
  { name: 'Unterbrechungen erfassen', text: 'Abgelenkt? Klicken Sie auf die Taste "Ablenkungs-Alarm". Das Tool zeichnet dies auf, um Ihren Fokus-Score zu berechnen.' },
  { name: 'Ergebnisse prüfen', text: 'Nach Ihrer Sitzung sehen Sie Ihre Statistiken: Fokus-Score, Aufgabenaufschlüsselung und monatliche Heatmap Ihrer Produktivität.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: 'Woran werden Sie arbeiten?',
    selectCycle: 'Wählen Sie Ihren Fokus-Zyklus',
    startButton: 'Start',
    seed: 'Samen',
    tree: 'Baum',
    mountain: 'Berg',
    timer: 'Timer',
    pauseButton: 'Pause',
    resumeButton: 'Fortsetzen',
    distractionButton: 'Ablenkungs-Alarm',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Fokus',
    breakTime: 'Pause',
    sessionComplete: 'Sitzung abgeschlossen',
    endSession: 'Sitzung beenden',
    focusScore: 'Fokus-Score',
    totalTime: 'Gesamtzeit',
    interruptions: 'Unterbrechungen',
    taskBreakdown: 'Aufgabenaufschlüsselung',
    monthlyHeatmap: 'Monatliche Aktivität',
    copyMarkdown: 'Markdown kopieren',
    shareImage: 'Teilen',
    wellnessMessage: 'Machen Sie eine Pause, Sie haben es sich verdient',
    sessionSummary: 'Sitzungszusammenfassung',
    newSession: 'Neue Sitzung',
    copied: 'Kopiert!',
    unnamedTask: 'Unbenannte Aufgabe',
    breakTimeNotification: 'Pausenzeit!',
    focusTimeNotification: 'Zeit zu fokussieren!',
    interruptionsLabel: 'Unterbrechungen:',
    studySession: 'Lernsitzung',
  },
  seo: [
    { type: 'title', text: 'Meistern Sie den Fokus mit Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'Bei Produktivität geht es nicht darum, härter zu arbeiten – sondern klüger. <strong>Pomodoro Flow</strong> kombiniert die bewährte Pomodoro-Technik mit Zen-fokussiertem Design und Echtzeit-Analysen, um Ihnen zu helfen zu verstehen, <em>wie</em> Sie am besten arbeiten.' },
    { type: 'title', text: 'Warum Pomodoro funktioniert', level: 3 },
    { type: 'paragraph', html: 'Menschen sind nicht für 8-stündige Hyperfokus-Marathons gemacht. Unsere Gehirne funktionieren am besten in Zyklen aus fokussierter Arbeit gefolgt von erholsamen Pausen. Die Pomodoro-Technik macht daraus ein einfaches Ritual: 25 Minuten intensiv arbeiten, 5 Minuten Pause, wiederholen.' },
    { type: 'paragraph', html: 'Aber jede Aufgabe ist anders. Deshalb bietet Pomodoro Flow drei Zyklen: <strong>Samen</strong> für schnelle Aufgaben (25/5), <strong>Baum</strong> für Ihren Alltag (50/10) und <strong>Berg</strong> für Deep-Work-Sitzungen (90/15).' },
    { type: 'title', text: 'Die wahre Kraft: Erfassung von Unterbrechungen', level: 3 },
    { type: 'paragraph', html: 'Sie arbeiten 50 Minuten lang und denken, Sie hätten es geschafft. Aber wurden Sie 5 Mal abgelenkt? Jede Unterbrechung kostet Sie kognitive Energie durch Kontextwechsel. Pomodoro Flow erfasst dies mit einer einzigen Taste (Ablenkungs-Alarm) und berechnet Ihren <strong>Fokus-Score</strong> – eine reale Kennzahl für Ihre Konzentration.' },
    { type: 'paragraph', html: 'Mit der Zeit werden Sie sehen, welche Aufgaben, Tageszeiten oder Umgebungen Ihnen den besten Fokus ermöglichen. Dort findet Ihre wertvollste Arbeit statt.' },
    { type: 'title', text: 'Funktionen, die Ihnen nicht im Weg stehen', level: 3 },
    { type: 'list', items: [
      'Zen-Tech Design: Dunkelmodus, Glassmorphismus und ein zentrierter Timer, der zum Einzigen wird, was Sie sehen.',
      'Live-Titelleiste: Ihr Browser-Tab zeigt den Countdown, sodass Sie die Zeit auf einen Blick kennen.',
      'Flexible Zeitplanung: Passen Sie Arbeits-/Pausenzeiten spontan an, ohne neu zu starten.',
      'Sitzungsexport: Kopieren Sie Ihre Zusammenfassung als Markdown oder teilen Sie ein Bild in sozialen Medien.',
      'Monatliche Heatmap: Sehen Sie Ihre Produktivitätsmuster. Welche Tage sind Ihre Spitzenfokustage?',
    ] },
    { type: 'title', text: 'Die Psychologie des "Flow-Zustands"', level: 3 },
    { type: 'paragraph', html: 'Der Psychologe Mihaly Csikszentmihalyi definiert <strong>Flow</strong> als den Zustand, in dem Herausforderung auf Können trifft und die Zeit verschwindet. Pomodoro Flow entfernt Ablenkungen, setzt klare Zeitgrenzen und gibt Ihnen sofortiges Feedback – die drei Bedingungen für den Flow-Zustand.' },
    { type: 'tip', html: '<strong>Pro-Tipp:</strong> Wenn Sie im Flow sind, unterbrechen Sie sich nicht selbst. Wenn der Timer abläuft, Sie aber mitten in einem Gedanken sind, klicken Sie auf Fortsetzen und machen Sie weiter. Das Schöne an der Erfassung von Unterbrechungen ist, dass Sie den Unterschied zwischen externem Chaos und Ihrem eigenen Schwung sehen werden.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
