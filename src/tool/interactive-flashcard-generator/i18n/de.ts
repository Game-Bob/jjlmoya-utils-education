import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = 'Interaktiver Flashcard-Generator & Lerndeck';
const description = 'Steigern Sie Ihre Lernsitzungen mit aktivem Abrufen und verteilter Wiederholung. Erstellen Sie personalisierte Karteikarten, lernen Sie mit 3D-Kartenwendungen, bewerten Sie die Schwierigkeit und exportieren/importieren Sie Decks.';

const faqItems = [
  { question: 'Was ist aktives Abrufen?', answer: 'Aktives Abrufen ist ein Lernprinzip, bei dem Sie Ihr Gedächtnis testen, indem Sie Informationen aktiv abrufen, anstatt Notizen passiv zu lesen oder zu überprüfen.' },
  { question: 'Wie funktioniert die verteilte Wiederholung?', answer: 'Die verteilte Wiederholung ist eine Methode, bei der Sie schwierige Karten häufiger und einfache Karten seltener über zunehmende Zeitintervalle wiederholen, um die Merkfähigkeit zu optimieren.' },
  { question: 'Wie kann ich meine personalisierten Karteikarten speichern?', answer: 'Sie können Ihr Deck als JSON-Datei exportieren. Um das Lernen später fortzusetzen, klicken Sie einfach auf die Schaltfläche Importieren und laden Sie diese Datei hoch.' },
  { question: 'Was bewirken die Bewertungen Einfach, Mittel und Schwer?', answer: 'Sie helfen Ihnen zu kategorisieren, wie gut Sie sich an die Karte erinnert haben. In einem Leitner-System werden als Schwer eingestufte Karten häufiger wiederholt, um die neuronalen Pfade zu stärken.' },
];

const howToItems = [
  { name: 'Karte erstellen', text: 'Geben Sie die Frage oder das Konzept in das Feld Vorderseite und die Antwort oder Erklärung in das Feld Rückseite ein, und klicken Sie dann auf Karte hinzufügen.' },
  { name: 'Deck überprüfen', text: 'Klicken Sie auf eine beliebige Karte im Betrachter, um sie umzudrehen und die Antwort anzuzeigen.' },
  { name: 'Gedächtnis bewerten', text: 'Beurteilen Sie mit den Schaltflächen Einfach, Mittel oder Schwer, wie leicht Sie sich an die Antwort erinnert haben.' },
  { name: 'Lernsitzung speichern', text: 'Verwenden Sie die Schaltfläche Exportieren, um Ihr benutzerdefiniertes Deck herunterzuladen, damit Sie es später wieder laden können.' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: 'Karteikarten-Ersteller',
    questionLabel: 'Vorderseite (Frage)',
    answerLabel: 'Rückseite (Antwort)',
    addCard: 'Karte hinzufügen',
    questionPlaceholder: 'z.B., Was ist die Hauptstadt von Frankreich?',
    answerPlaceholder: 'z.B., Paris',
    reviewMode: 'Lernsitzung',
    cardIndex: 'Karte',
    flipCard: 'Klicken zum Wenden',
    nextCard: 'Weiter',
    prevCard: 'Zurück',
    easy: 'Einfach',
    medium: 'Mittel',
    hard: 'Schwer',
    resetSession: 'Fortschritt zurücksetzen',
    importExport: 'Deck-Verwaltung',
    importDeck: 'JSON importieren',
    exportDeck: 'JSON exportieren',
    exportSelected: 'Auswahl exportieren',
    exportAll: 'Alles exportieren',
    emptyDeckWarning: 'Ihr Deck ist leer. Erstellen Sie eine Karte oder importieren Sie ein Deck, um mit dem Lernen zu beginnen.',
    sampleQuestion1: 'Was ist aktives Abrufen?',
    sampleAnswer1: 'Eine Lerntechnik, bei der das Gedächtnis während des Lernprozesses aktiv stimuliert wird.',
    sampleQuestion2: 'Wer hat die Vergessenskurve formuliert?',
    sampleAnswer2: 'Hermann Ebbinghaus, der die exponentielle Natur des Vergessens von Informationen untersuchte.',
    aiPromptGenerator: 'KI-Karteikarten-Assistent',
    aiTopicsLabel: 'Geben Sie Ihre Prüfungsthemen oder Notizen ein',
    aiTopicsPlaceholder: 'z.B., Matheprüfung über Ableitungen, Integrale und Grenzwerte...',
    generatePromptBtn: 'KI-Prompt generieren',
    aiPromptOutputLabel: 'Kopieren Sie diesen Prompt in ChatGPT/Gemini',
    copyPromptBtn: 'In Zwischenablage kopieren',
    selectAll: 'Alles auswählen',
    deleteCategory: 'Kategorie löschen',
    deleteConfirmMsg: 'Sind Sie sicher, dass Sie diese Kategorie und alle ihre Karten löschen möchten?',
    cancel: 'Abbrechen',
    delete: 'Löschen',
    pasteJsonTitle: 'Flashcard-JSON einfügen',
    pasteJsonPlaceholder: 'Fügen Sie hier das von der KI generierte JSON ein...',
    importBtn: 'Importieren',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Optimieren Sie Ihre Lernstrategie mit aktivem Abrufen und verteilter Wiederholung', level: 2 },
    { type: 'paragraph', html: 'Karteikarten sind weithin als eines der effektivsten Werkzeuge für das Einprägen und die langfristige Merkfähigkeit anerkannt. Durch die Kombination von aktivem Abrufen mit einem strukturierten Bewertungsablauf können Sie Ihre Schwachstellen genau identifizieren, effizient wiederholen und Informationen weitaus länger behalten als mit passiven Lernmethoden.' },
    { type: 'title', text: 'Aktives Abrufen vs. Passive Lernmethoden', level: 3 },
    { type: 'paragraph', html: 'Viele Schüler verlassen sich auf passive Wiederholungstechniken wie das Markieren von Texten oder das erneute Lesen von Lehrbüchern. Während sich diese Methoden produktiv anfühlen, zeigt die Kognitionswissenschaft, dass sie eine Illusion von Kompetenz erzeugen. Echtes Lernen findet statt, wenn Sie Ihr Gehirn zwingen, die Informationen abzurufen.' },
    { type: 'table', headers: ['Lernmethode', 'Kognitives Engagement', 'Behaltensrate', 'Am besten geeignet für'], rows: [
      ['Interaktive Karteikarten', 'Hoch (Aktives Abrufen)', 'Exzellent', 'Vokabeln, Formeln, Schlüsselkonzepte, Daten.'],
      ['Zusammenfassender Text', 'Mittel (Synthese)', 'Moderat', 'Verständnis komplexer Erzählungen und Argumente.'],
      ['Notizen nochmals lesen', 'Niedrig (Passives Wiederholen)', 'Schlecht', 'Erstkontakt mit neuen Materialien.'],
    ] },
    { type: 'title', text: 'Vor- und Nachteile des karteikartenbasierten Lernens', level: 3 },
    {
      type: 'proscons',
      title: 'Vergleich der Vorteile und Einschränkungen von Karteikarten',
      items: [
        { pro: 'Erzwingt das aktive mentale Abrufen anstelle des passiven Erkennens.', con: 'Die Erstellung kann anfangs zeitaufwändig sein.' },
        { pro: 'Identifiziert sofort genaue Wissenslücken.', con: 'Nicht ideal für das tiefe Verständnis hochkomplexer Argumente.' },
        { pro: 'Sehr portabel und anpassbar für jedes Fach oder jede Prüfung.', con: 'Erfordert regelmäßige Lerndisziplin, um die Vorteile der verteilten Wiederholung zu nutzen.' }
      ]
    },
    { type: 'title', text: 'Wie man effektive Lerndecks schreibt', level: 3 },
    { type: 'tip', html: '<strong>Regel von Eins:</strong> Jede Karteikarte sollte genau eine Frage oder ein Konzept testen. Vermeiden Sie es, Absätze auf der Rückseite zu schreiben. Wenn eine Karte zu komplex ist, teilen Sie sie in drei oder vier kleinere, mundgerechte Karten auf.' },
    { type: 'title', text: 'Schlüsselbegriffe und Methodiken', level: 3 },
    { type: 'glossary', items: [
      { term: 'Aktives Abrufen', definition: 'Der Prozess des aktiven Testens Ihres Gedächtnisses durch das Abrufen von Antworten, wodurch die neuronalen Pfade gestärkt werden.' },
      { term: 'Verteilte Wiederholung', definition: 'Eine Lerntechnik, bei der Karten in zunehmenden Zeitintervallen überprüft werden, um das Vergessen zu verhindern.' },
      { term: 'Leitner-System', definition: 'Eine Methode zur Gruppierung von Karteikarten in Boxen basierend auf dem Überprüfungsverlauf, wobei schwierigere Karten Priorität erhalten.' },
      { term: 'Vergessenskurve', definition: 'Die mathematische Darstellung der exponentiellen Rate, mit der Informationen nach dem ersten Lernen vergessen werden.' },
    ] },
    { type: 'title', text: 'KI-gestützte Karteikartenerstellung', level: 3 },
    { type: 'paragraph', html: 'Das manuelle Erstellen von Lerndecks kann mühsam sein. Mit unserem integrierten <strong>KI-Karteikarten-Assistenten</strong> können Sie einfache Lehrplanotizen oder Lehrbuchumrisse sofort in importierbare Lerndecks umwandeln. Beschreiben Sie einfach Ihre Prüfungsthemen, klicken Sie auf "KI-Prompt generieren", kopieren Sie die generierten Anweisungen und fügen Sie sie in ein beliebiges KI-Modell (wie ChatGPT, Gemini oder Claude) ein.' },
    { type: 'title', text: 'Flexibles gemeinsames Lernen: Selektives Teilen und Zusammenführen', level: 3 },
    { type: 'paragraph', html: 'Das Lernen in Gruppen ist produktiver, wenn man sich die Arbeit teilt. Unser Deck-Manager ermöglicht es Ihnen, nur die von Ihnen ausgewählten Kategorien zu exportieren. Wenn ein Mitschüler Ihre Datei importiert, fügt das System die neuen Kategorien und Karten dynamisch mit dem vorhandenen lokalen Deck <strong>zusammen</strong>, anstatt die Daten zu überschreiben, was den Verlust des Lernverlaufs verhindert.' },
    { type: 'title', text: 'Zusammenfassung der bewährten Praktiken', level: 3 },
    { type: 'summary', title: 'Zusammenfassung der bewährten Praktiken', items: [
      'Erstellen Sie benutzerdefinierte Kategorien, um Lerndecks für bestimmte Prüfungen oder Module zu organisieren.',
      'Überprüfen Sie Ihre Karten täglich oder wöchentlich und markieren Sie sie genau als Einfach, Mittel oder Schwer.',
      'Exportieren und sichern Sie Ihre Decks regelmäßig, um keinen Fortschritt zu verlieren.',
      'Teilen Sie exportierte Decks mit Mitschülern, um gemeinsam für Prüfungen zu lernen.'
    ] }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
