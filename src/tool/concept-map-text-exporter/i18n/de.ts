import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'konzept-map-text-exporter' as const;
const title = 'Konzept Map Text Exporter';
const description = 'Verwandeln Sie eingerückte Notizen in eine interaktive Konzept-Map mit ziehbaren Knoten, einklappbaren Zweigen, Zoom-Steuerung und SVG- oder PNG-Export.';

const faqItems = [
  { question: 'Welche Art von Text kann ich in den Konzept-Map-Generator einfügen?', answer: 'Verwenden Sie eine einfache Gliederung: eine Idee pro Zeile, mit Einrückung für Unterthemen. Aufzählungszeichen, nummerierte Listen, Tabulatoren und Leerzeichen werden akzeptiert, sodass aus Dokumenten, Vorlesungszusammenfassungen oder Lern-Apps kopierte Notizen normalerweise ohne manuelles Umformatieren konvertiert werden können.' },
  { question: 'Wie sollte ich die Einrückung für die sauberste Konzept-Map formatieren?', answer: 'Platzieren Sie das Hauptthema in die erste Zeile und rücken Sie die unterstützenden Ideen darunter ein. Halten Sie gleichrangige Ideen auf der gleichen Einrückungsebene ausgerichtet. Wenn ein Knoten unter dem falschen übergeordneten Knoten erscheint, ist fast immer die Einrückungsebene das Problem.' },
  { question: 'Kann ich Knoten verschieben, nachdem die Map generiert wurde?', answer: 'Ja. Ziehen Sie einen beliebigen Knoten auf der Arbeitsfläche, um den Abstand zu verbessern, dichte Zweige zu trennen oder eine Beziehung hervorzuheben. Sie können die Arbeitsfläche auch verschieben, vergrößern oder verkleinern und Zweige einklappen, bevor Sie sie exportieren.' },
  { question: 'Was ist der Unterschied zwischen SVG- und PNG-Export?', answer: 'SVG ist editierbar und lässt sich in Vektoreditoren, Folien und Dokumenten sauber skalieren. PNG ist ein festes Bild, das sich einfacher auf Unterrichtsplattformen, in Nachrichten, Arbeitsblätter und schnelle Wiederholungsstapel hochladen lässt.' },
  { question: 'Erkennt dieses Tool Querverbindungen automatisch?', answer: 'Nein. Es erstellt eine Hierarchie basierend auf Einrückungen. Das hält das Ergebnis vorhersehbar, aber seitliche Verbindungen wie Ursachen, Kontraste oder Rückkopplungsschleifen sollten nach dem SVG-Export manuell überprüft werden.' },
];

const howToItems = [
  { name: 'Gliederung einfügen oder schreiben', text: 'Geben Sie ein concept pro Zeile ein und rücken Sie untergeordnete Ideen unter ihrem übergeordneten Thema ein.' },
  { name: 'Generierte Struktur überprüfen', text: 'Nutzen Sie die interaktive Arbeitsfläche, um zu prüfen, ob die Hierarchie dem Lernstoff entspricht.' },
  { name: 'Arbeitsfläche anordnen', text: 'Ziehen Sie Knoten, klappen Sie überfüllte Zweige ein und zoomen Sie, bis die visuelle Gruppierung klar ist.' },
  { name: 'Für Lernmaterial exportieren', text: 'Laden Sie SVG zur Bearbeitung oder PNG zum schnellen Teilen, für Arbeitsblätter und Präsentationen herunter.' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'Eingerückte Gliederung',
    sampleButton: 'Beispiel laden',
    clearButton: 'Löschen',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Vergrößern',
    zoomOut: 'Verkleinern',
    resetView: 'Ansicht zurücksetzen',
    exportSvg: 'SVG exportieren',
    exportPng: 'PNG exportieren',
    collapseBranch: 'Zweig einklappen',
    expandBranch: 'Zweig ausklappen',
    emptyStateTitle: 'Noch keine Konzepte',
    emptyStateText: 'Schreiben Sie eine Idee pro Zeile und rücken Sie Unterthemen ein, um die Map zu erstellen.',
    nodeCount: 'Konzepte',
    depthCount: 'Ebenen',
    branchCount: 'Verbindungen',
    levelPrefix: 'E',
    untitledNodeLabel: 'Unbenannt',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'konzept-map.svg',
    pngFilename: 'konzept-map.png',
    sampleOutline: `Forschungsprojekt
  Frage
    Welches Problem wird untersucht?
    Wer ist betroffen?
  Belege
    Primärquellen
    Wissenschaftliche Artikel
    Datensatz
  Methode
    Stichprobenplan
    Analyseschritte
  Schlussfolgerung
    Hauptergebnis
    Einschränkungen
    Nächste Forschungsfrage`,
    faqTitle: 'Häufig gestellte Fragen',
    bibliographyTitle: 'Literaturhinweise & wissenschaftliche Ressourcen',
  },
  seo: [
    { type: 'title', text: 'Eingerückte Notizen in eine Konzept Map umwandeln', level: 2 },
    { type: 'paragraph', html: 'Eine Konzept-Map ist nützlich, wenn ein Thema nicht mehr nur eine Liste von Fakten ist. Sie zeigt, welche Ideen zentral sind, welche Details sie unterstützen und wo ein Lernender möglicherweise Kategorien, Beispiele, Ursachen und Folgen verwechselt. Dieser Generator wurde für Notizen entwickelt, die Schüler bereits haben: Fügen Sie eine eingerückte Gliederung ein, passen Sie die Hierarchie an und verwenden Sie die interaktive Arbeitsfläche, um eine lernbereite visuelle Map zu erstellen.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'Zeile pro Konzept' }, { value: '2+', label: 'Einrückungsebenen unterstützt' }, { value: 'SVG', label: 'editierbarer Export' }, { value: 'PNG', label: 'teilbarer Export' }] },
    { type: 'diagnostic', variant: 'info', title: 'Bestes Eingabeformat für genaue Zuordnung', html: '<ul><li>Platzieren Sie das Hauptthema in eine eigene Zeile ganz oben.</li><li>Rücken Sie Unterthemen unter die Idee ein, die sie erklären, unterstützen, definieren oder veranschaulichen.</li><li>Halten Sie gleichrangige Ideen auf der gleichen Einrückungsebene ausgerichtet.</li><li>Verwenden Sie Aufzählungszeichen oder nummerierte Listen, wenn Sie möchten; gängige Listenmarker werden automatisch entfernt.</li><li>Halten Sie die Beschriftungen der Knoten kurz und aussagekräftig. Ausführliche Erklärungen gehören in Ihre Notizen, nicht in jeden einzelnen Knoten.</li></ul>' },
    { type: 'title', text: 'Fehlerbehebung bei einer unübersichtlichen Konzept Map', level: 3 },
    { type: 'table', headers: ['Was Sie sehen', 'Wahrscheinliche Ursache', 'Wie man es behebt'], rows: [['Ein Detail erscheint unter dem falschen Thema', 'Die Einrückungsebene ist zu flach oder zu tief.', 'Verschieben Sie die Zeile nach links oder rechts, bis sie unter der richtigen übergeordneten Idee liegt.'], ['Die Map ist sehr breit', 'Zu viele Ideen sind auf derselben Ebene platziert.', 'Gruppieren Sie verwandte Geschwisterelemente unter einem klareren Kategorieknoten.'], ['Die Map ist schwer zu lernen', 'Knotenbeschriftungen sind als ganze Sätze geschrieben.', 'Kürzen Sie Beschriftungen auf Schlüsselwörter, Behauptungen oder Fragen.'], ['Wichtige Beziehungen fehlen', 'Die Gliederung ist hierarchisch, aber das Thema weist Querverbindungen auf.', 'Exportieren Sie SVG und fügen Sie bei Bedarf seitliche Verbindungen manuell in einem Editor hinzu.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Konzept Map', description: 'Am besten geeignet, um Beziehungen zwischen Ideen, Voraussetzungen, Ursachen, Belegen und Kategorien aufzuzeigen.', highlight: true, points: ['Beziehungsorientiert', 'Gut zur Wiederholung', 'Nützlich, um ein Thema laut zu erklären'] }, { title: 'Gliederung', description: 'Am besten geeignet für geordnete Notizen, Aufsatzstrukturen, Vorlesungsreihenfolgen, Verfahren und chronologisches Material.', points: ['Schnell zu schreiben', 'Einfach zu scannen', 'Bietet Platz für viele Details'] }, { title: 'Mind Map', description: 'Am besten geeignet für das Brainstorming breiter Assoziationen, bevor die Struktur des Themas vollständig bekannt ist.', points: ['Kreative Erkundung', 'Lose Gruppierung', 'Weniger strenge Hierarchie'] }] },
    { type: 'tip', html: '<strong>Nutzen Sie das Einklappen als Werkzeug zur aktiven Wiederholung.</strong> Klappen Sie einen Zweig ein, sagen Sie die verborgenen Details aus dem Gedächtnis auf und klappen Sie ihn dann aus, um zu überprüfen, was Sie vergessen haben. Dadurch wird die Map von einem passiven Diagramm zu einer aktiven Abfragehilfe.' },
    { type: 'title', text: 'Lernabläufe, die von der visuellen Darstellung profitieren', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Prüfungsvorbereitung', description: 'Bauen Sie die Map um wahrscheinliche Fragen herum auf. Übergeordnete Knoten sollten Impulse wie Ursachen, Belege, Einschränkungen, Definitionen oder Beispiele sein.', highlight: true, points: ['Eingeklappte Zweige zur Wiederholung nutzen', 'Beschriftungen kurz halten', 'PNG exportieren für schnelle Wiederholungsblätter'] }, { title: 'Forschungsplanung', description: 'Nutzen Sie die Map, um eine Forschungsfrage mit Belegen, Methoden, Quellen, Einschränkungen und Schlussfolgerungen zu verbinden.', points: ['Die Frage an die Wurzel setzen', 'Belege von Interpretation trennen', 'SVG zur Bearbeitung exportieren'] }] },
    { type: 'message', title: 'Wichtige Einschränkung', html: 'Die Einrückung erstellt einen Baum, kein vollständiges semantisches Netzwerk. Wenn zwei Ideen zu unterschiedlichen Zweigen gehören, sich aber dennoch gegenseitig beeinflussen, wird das Tool diese Querverbindung nicht automatisch erstellen. Behandeln Sie die generierte Map als sauberen ersten Entwurf und fügen Sie nach dem Export nicht-hierarchische Verbindungen hinzu, wenn das Thema dies erfordert.' },
    { type: 'title', text: 'Exportieren von Konzept-Maps für Folien, Arbeitsblätter und Editoren', level: 3 },
    { type: 'paragraph', html: 'Wählen Sie SVG, wenn Sie ein bearbeitbares Diagramm wünschen, das in einem Vektoreditor, Präsentationswerkzeug oder Publikationsworkflow verfeinert werden kann. Wählen Sie PNG, wenn Sie ein zuverlässiges Bild für eine Unterrichtsplattform, ein Lernmanagementsystem, ein Arbeitsblatt, einen Chat oder einen Wiederholungsstapel benötigen. Ordnen Sie vor dem Export überfüllte Knoten an, klappen Sie optionale Details ein und zoomen Sie, bis die Beziehungsstruktur bei der gewünschten Ausgabegröße gut lesbar ist.' },
    { type: 'summary', title: 'Ein praktischer Arbeitsablauf', items: ['Fügen Sie eine grobe Gliederung aus Notizen, KI-Entwürfen oder einem Handout ein.', 'Korrigieren Sie die Einrückung, bis jede untergeordnete Idee unter dem richtigen übergeordneten Element liegt.', 'Kürzen Sie die Beschriftungen, damit die Knoten auf der Arbeitsfläche und im exportierten Bild lesbar bleiben.', 'Ziehen Sie überfüllte Zweige auseinander und klappen Sie Details ein, die in der endgültigen Version nicht benötigt werden.', 'Laden Sie SVG zur weiteren Bearbeitung oder PNG zur sofortigen Freigabe herunter.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
