import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'gewichteter-notenrechner-abschlussnoten-rechner';
const title = 'Gewichteter Notenrechner & Abschlussnoten Rechner';
const description = 'Hören Sie auf, sich um Ihren Notendurchschnitt zu sorgen! Berechnen Sie ganz einfach Ihre Kursnoten und Abschlussnoten. Geben Sie einfach Ihre Hausaufgaben, Prüfungen und deren Gewichtung ein, um zu sehen, wo Sie stehen.';

const faqItems = [
  { question: 'Was genau ist eine gewichtete Note?', answer: 'In vielen Kursen sind nicht alle Leistungen gleich viel wert. Eine Abschlussprüfung kann zum Beispiel 40 % Ihrer Note ausmachen, während Hausaufgaben nur 10 % zählen. Eine gewichtete Note berücksichtigt diese Unterschiede, damit Sie Ihren tatsächlichen Leistungsstand kennen.' },
  { question: 'Wo finde ich meine Notengewichtungen?', answer: 'In der Regel sind diese in Ihrem Kurslehrplan unter "Notengebung" oder "Bewertung" aufgeführt. Professoren weisen verschiedenen Kategorien wie Mitarbeit, Tests und Projekten einen Prozentsatz zu.' },
  { question: 'Was ist, wenn meine Leistungen noch nicht 100 % ergeben?', answer: 'Keine Sorge! Unser Rechner zeigt Ihnen eine "prognostizierte" Note basierend auf den Leistungen an, die Sie bisher erbracht haben. Er rechnet Ihre aktuellen Ergebnisse auf ein 100 %-Äquivalent hoch.' },
  { question: 'Kann ich dies für meinen Notendurchschnitt (GPA) verwenden?', answer: 'Absolut. Sie können jeden Kurs als "Fach" behandeln und seine Credit-Stunden als "Gewichtung" verwenden, um Ihren gewichteten Semesterdurchschnitt zu ermitteln.' },
];

const howToItems = [
  { name: 'Listen Sie Ihre Leistungen auf', text: 'Geben Sie die Namen Ihrer Prüfungen, Tests oder Projekte ein. Bleiben Sie organisiert!' },
  { name: 'Geben Sie Ihre Ergebnisse ein', text: 'Tippen Sie die Note ein, die Sie für jedes Element erhalten haben (normalerweise von 10 oder 100).' },
  { name: 'Fügen Sie die Gewichtungen hinzu', text: 'Prüfen Sie Ihren Lehrplan und geben Sie den Prozentsatz ein, den jedes Element zu Ihrer Abschlussnote beiträgt.' },
  { name: 'Überprüfen Sie Ihr Ergebnis', text: 'Beobachten Sie, wie sich Ihre Abschlussnote sofort aktualisiert. Kein manuelles Rechnen erforderlich!' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Haben Sie noch Fragen?',
  bibliographyTitle: 'Mehr erfahren',
  ui: {
    addSubject: 'Element hinzufügen',
    subjects: 'Noten & Gewichtungen',
    subjectName: 'Aufgabe / Fach',
    grade: 'Note',
    weight: 'Gewichtung (%)',
    scale: 'Skala (z. B. 4.0, 10, 100)',
    finalGrade: 'Ihre aktuelle Note',
    removeSubject: 'Entfernen',
    weightSum: 'Gesamtgewichtung',
    exampleSubject: 'Abschlussprüfung',
    newSubjectPlaceholder: 'z. B. Zwischenprüfung',
  },
  seo: [
    { type: 'title', text: 'Meistern Sie Ihre Noten mit einem gewichteten Rechner', level: 2 },
    { type: 'paragraph', html: 'Haben Sie sich jemals verloren gefühlt, als Sie auf einen Haufen Noten geblickt haben? Sie sind nicht allein. Das Verständnis Ihres <strong>gewichteten Durchschnitts</strong> ist das Geheimnis, um in der Schule und im Studium am Ball zu bleiben.' },
    { type: 'title', text: 'Warum gewichtete Noten wichtig sind', level: 3 },
    { type: 'paragraph', html: 'Ein einfacher Durchschnitt behandelt jede Aufgabe gleich. Aber in der realen Welt (und in Ihrem Lehrplan) sollte ein 2-Minuten-Test nicht so viel zählen wie eine 20-seitige Hausarbeit. Gewichtete Noten geben den wichtigen Dingen mehr "Gewicht".' },
    { type: 'paragraph', html: 'Egal, ob Sie Ihren <strong>Semester-Notendurchschnitt</strong> berechnen oder nur sehen wollen, ob Sie die letzte optionale Aufgabe auslassen können, die Gewichtung ist das Werkzeug, das Sie brauchen.' },
    { type: 'title', text: 'Berechnen Sie Ihre Abschlussnote in 3 Schritten', level: 3 },
    { type: 'list', items: ['Finden Sie die Gewichtung jeder Kategorie in Ihrem Lehrplan (z. B. Prüfungen 50 %, Hausaufgaben 20 %).', 'Multiplizieren Sie Ihr Ergebnis mit dieser Gewichtung (z. B. 90 Punkte * 0,50 Gewichtung = 45 Punkte).', 'Addieren Sie all diese Punkte, um Ihren Endprozentsatz zu erhalten.'] },
    { type: 'title', text: 'Profi-Tipp: Das "Was-wäre-wenn"-Spiel', level: 3 },
    { type: 'paragraph', html: 'Nutzen Sie diesen Rechner, um verschiedene Szenarien zu simulieren. "Was passiert, wenn ich eine 85 in der Abschlussprüfung bekomme?" oder "Was ist, wenn ich diese Hausaufgabe verpasse?" Die Auswirkungen in Echtzeit zu sehen, hilft Ihnen, Ihre Lernzeit dort zu priorisieren, wo sie wirklich etwas bewirkt.' },
    { type: 'tip', html: '<strong>Keine Panik.</strong> Wenn Ihre Gewichtungen noch nicht 100 % ergeben, berechnet der Rechner eine Prognose Ihrer Note basierend auf der aktuellen Arbeit. Das ist eine großartige Möglichkeit, den Fortschritt während des Semesters zu verfolgen!' },
    { type: 'title', text: 'Arithmetisch vs. Gewichtete: Der reale Unterschied', level: 3 },
    { type: 'paragraph', html: 'Ein arithmetisches Mittel kann gefährlich irreführend sein. Wenn Sie 100 % in einem kleinen Kurztest haben, aber nur 50 % in einer wichtigen Prüfung, sagt ein einfacher Durchschnitt, dass Sie 75 % (bestanden) haben. Wenn die Prüfung aber 90 % Ihrer Note ausmacht, liegt Ihre <strong>tatsächliche gewichtete Note</strong> näher bei 55 % (nicht bestanden). Achten Sie immer auf die Gewichtungen!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    { name: 'Gewichtetes Mittel verstehen (Wikipedia)', url: 'https://de.wikipedia.org/wiki/Gewichtetes_Arithmetisches_Mittel' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
