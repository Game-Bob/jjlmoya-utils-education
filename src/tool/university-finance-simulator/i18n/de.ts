import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'studienfinanzierungs-simulator' as const;
const title = 'Studienfinanzierungs Simulator';
const description =
  'Modellieren Sie die tatsächlichen Kosten für das Studium, vergleichen Sie Stipendien-Szenarien und prognostizieren Sie die monatlichen Raten von Studienkrediten mit einem Tilgungsplan und einer Tilgungstabelle.';

const faqItems = [
  {
    question: 'Was beinhaltet dieser Simulator in den Gesamtkosten?',
    answer:
      'Er kombiniert die jährlichen Studiengebühren, die monatlichen Lebenshaltungskosten, die Anzahl der Studienjahre und die Monate, in denen Sie voraussichtlich Lebenshaltungskosten pro Studienjahr zahlen. Anschließend werden Stipendien und etwaige Eigenleistungen abgezogen, bevor das Darlehen berechnet wird.',
  },
  {
    question: 'Wie wird die monatliche Rate des Studienkredits berechnet?',
    answer:
      'Das Tool verwendet die Standardformel für Tilgungsdarlehen. Es rechnet den Jahreszins in einen monatlichen Zinssatz um und verteilt die Tilgung auf die ausgewählte Anzahl von Jahren.',
  },
  {
    question: 'Kann ich den Simulator für zinslose Familiendarlehen oder Zuschüsse nutzen?',
    answer:
      'Ja. Setzen Sie den Zinssatz auf 0, um einen zinslosen Tilgungsplan zu simulieren. Sie können auch das Stipendium oder die Eigenleistung erhöhen, um Zuschüsse, Ersparnisse oder finanzielle Unterstützung durch die Familie abzubilden.',
  },
  {
    question: 'Warum unterscheidet sich der geliehene Betrag je nach Profil so stark?',
    answer:
      'Die Lebenshaltungskosten summieren sich über mehrere Studienjahre schnell auf. Ein Profil für Pendler und eines für das Wohnen auf dem Campus können sehr unterschiedliche Schuldenlasten erzeugen, selbst wenn die Studiengebühren gleich bleiben.',
  },
  {
    question: 'Berücksichtigt das Zieldatum für die Schuldenfreiheit Stundungen oder einkommensabhängige Rückzahlungspläne?',
    answer:
      'Nein. Diese Version geht davon aus, dass die Rückzahlung nach einem normalen festen Plan mit gleichen monatlichen Raten beginnt. Sie ist ideal für eine grundlegende Planung, nicht für die Modellierung jeder rechtlichen Ausnahme.',
  },
];

const howToItems = [
  {
    name: 'Studienprofil festlegen',
    text: 'Nutzen Sie eines der Schnellprofile oder verschieben Sie die Regler manuell, um Ihre Studiengebühren, Lebenshaltungskosten und Stipendien anzugeben.',
  },
  {
    name: 'Finanzierungsannahmen anpassen',
    text: 'Wählen Sie, wie viel Sie im Voraus bezahlen können, und legen Sie den Jahreszins sowie die Rückzahlungsjahre fest, um die wahrscheinlichen Kreditbedingungen abzubilden.',
  },
  {
    name: 'Dashboard ablesen',
    text: 'Die Zusammenfassungskarten zeigen Ihre Gesamtkosten, die Kreditsumme, die geschätzte monatliche Rate und die Gesamtzinsen auf einen glance.',
  },
  {
    name: 'Tilgungsverlauf prüfen',
    text: 'Nutzen Sie das Diagramm, um zu sehen, wie sich Restschuld, gezahlter Gesamtbetrag und kumulierte Zinsen Jahr für Jahr entwickeln.',
  },
  {
    name: 'Tilgungstabelle öffnen',
    text: 'Klappen Sie die monatliche Tabelle aus, wenn Sie eine detaillierte Aufschlüsselung von Tilgung und Zinsen für Ihr Budget benötigen.',
  },
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
  applicationCategory: 'FinanceApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<UniversityFinanceSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    currency: 'Währung',
    usdSymbol: '$',
    eurSymbol: '€',
    gbpSymbol: '£',
    jpySymbol: '¥',
    rubSymbol: '₽',
    inrSymbol: '₹',
    cnySymbol: '¥',
    krwSymbol: '₩',
    brlSymbol: 'R$',
    mxnSymbol: 'Mex$',
    chfSymbol: '₣',
    usd: 'USD',
    eur: 'EUR',
    gbp: 'GBP',
    jpy: 'JPY',
    rub: 'RUB',
    inr: 'INR',
    cny: 'CNY',
    krw: 'KRW',
    brl: 'BRL',
    mxn: 'MXN',
    chf: 'CHF',
    annualTuition: 'Jährliche Studiengebühren',
    monthlyLivingCost: 'Monatliche Lebenshaltungskosten',
    studyYears: 'Studienjahre',
    studyMonthsPerYear: 'Monate mit Lebenshaltungskosten pro Jahr',
    scholarshipPerYear: 'Stipendium pro Jahr',
    upfrontContribution: 'Eigenleistung',
    aprPercent: 'Jahreszins',
    repaymentYears: 'Rückzahlungsjahre',
    quickProfiles: 'Schnellprofile',
    commuterProfile: 'Pendler',
    balancedProfile: 'Ausgewogen',
    campusProfile: 'Wohnheim / Campus',
    stickerCost: 'Gesamte Studienkosten',
    borrowedPrincipal: 'Kreditsumme',
    monthlyPayment: 'Geschätzte monatliche Rate',
    totalInterest: 'Gesamtzinsen',
    projectionTitle: 'Schuldenprognose',
    scheduleTitle: 'Monatlicher Tilgungsplan',
    chartBalance: 'Restschuld',
    chartPaid: 'Gesamt gezahlt',
    chartInterest: 'Gezahlte Zinsen',
    openSchedule: 'Gesamten Plan anzeigen',
    closeSchedule: 'Gesamten Plan ausblenden',
    monthColumn: 'Monat',
    paymentColumn: 'Zahlung',
    principalColumn: 'Tilgung',
    interestColumn: 'Zins',
    balanceColumn: 'Restschuld',
    timelineLabel: 'Schuldenfrei-Zeitplan',
    affordabilityHint:
      'Halten Sie Ihre prognostizierte monatliche Rate im Einklang mit Ihrem voraussichtlichen Nettoeinkommen im ersten Berufsjahr, nicht nur mit Ihrem aktuellen Studentenbudget.',
    debtFreeLabel: 'Schuldenfrei nach',
    scholarshipShare: 'Stipendien-Anteil',
    livingShare: 'Lebenshaltungs-Anteil',
    degreeCostLabel: 'Gebühren-Anteil',
    blendedCost: 'Durchschnittliche jährliche Kosten',
    totalPaid: 'Zurückgezahlter Gesamtbetrag',
    averageYearlyCost: 'Durchschnittliche Kosten pro Jahr',
    plannerLabel: 'Kostenplaner',
    resultsLabel: 'Finanzierungsaussicht',
    assumptionsLabel: 'Kreditannahmen',
    scheduleHint:
      'Monatliche Detailansicht, wie sich jede Zahlung auf Tilgung und Zinsen aufteilt.',
    noDebtNeeded: 'Keine Kredite bei den aktuellen Einstellungen nötig',
    exactAmount: 'Genaue Summe',
    monthWord: 'Monat',
    paymentWord: 'Rate',
    principalWord: 'Tilgung',
    interestWord: 'Zinsen',
    remainingWord: 'verbleibend',
    perMonthSuffix: '/Monat',
    yearsSuffix: 'Jahre',
    monthsSuffix: 'Monate',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Planen Sie die echten Kosten des Studiums vor der Kreditaufnahme', level: 2 },
    {
      type: 'summary',
      title: 'Wozu dieser Studienkostenrechner nützlich ist',
      items: [
        'Schätzen Sie die Gesamtkosten eines Studiums ab, nicht nur die angegebenen Studiengebühren.',
        'Vergleichen Sie Hochschulen, Wohnmöglichkeiten und Stipendien auf derselben Schuldenbasis.',
        'Sehen Sie, ob ein Rückzahlungsplan machbar erscheint, bevor Sie sich zur Kreditaufnahme verpflichten.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Eine Broschüre der Universität hebt meistens nur eine Zahl hervor: die Studiengebühren. Die Realität ist komplexer. Sie zahlen auch für Unterkunft, Verpflegung, Transport, Bücher, Versicherungen und Zinsen für geliehenes Geld. Deshalb sollte ein nützlicher Studienkredit-Simulator nicht beim Listenpreis haltmachen. Er sollte Ihnen helfen, die schwierigere Frage zu beantworten: <em>Was wird mich diese Entscheidung über das gesamte Studium hinweg kosten, wie viele Schulden verbleiben nach Abzug der Hilfe und welcher Rückzahlungsdruck kommt nach dem Abschluss auf mich zu?</em>',
    },
    { type: 'title', text: 'Entscheidungen, bei denen dieser Simulator hilft', level: 3 },
    {
      type: 'list',
      items: [
        'Ob ein Stipendium das Endergebnis der Verschuldung wirklich verändert oder nur die Marketing-Überschrift abschwächt.',
        'Ob das Wohnen auf dem Campus, das Pendeln oder eine WG langfristig den besten Kompromiss darstellt.',
        'Ob eine längere Laufzeit die niedrigere Monatsrate wert ist, wenn man die Gesamtzinsen berücksichtigt.',
        'Ob das Studium inklusive Lebenshaltungskosten und nicht nur der Studiengebühren noch finanzierbar erscheint.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Nutzen Sie dies, bevor Sie einer Hochschule zusagen',
      html: '<ul><li>Vergleichen Sie zwei oder drei Angebote unter denselben Annahmen für Lebenshaltungskosten.</li><li>Testen Sie ein optimistisches und ein realistisches Stipendien-Szenario.</li><li>Prüfen Sie, ob die monatliche Rate akzeptabel bleibt, wenn die Schulden steigen oder die Rückzahlung länger dauert.</li></ul>',
    },
    { type: 'title', text: 'Wie Sie die Ergebnisse ehrlich analysieren', level: 3 },
    {
      type: 'table',
      headers: ['Kennzahl', 'Bedeutung', 'Warum es wichtig ist'],
      rows: [
        ['Gesamte Studienkosten', 'Studiengebühren plus Lebenshaltungskosten über die gesamte Studiendauer', 'Das ist das tatsächliche Budget, das Sie finanzieren müssen, nicht die vereinfachte Zahl aus der Broschüre'],
        ['Kreditsumme', 'Der ungedeckte Betrag nach Abzug von Stipendien und Eigenkapital', 'Das sind die Schulden, die Sie zurückzahlen müssen und die die meiste Aufmerksamkeit verdienen'],
        ['Geschätzte monatliche Rate', 'Feste Rückzahlungsrate basierend auf Zinssatz und Laufzeit', 'Der beste schnelle Richtwert für die finanzielle Belastung nach dem Studium'],
        ['Gesamtzinsen', 'Zusätzliche Kosten, die über den geliehenen Betrag hinaus gezahlt werden', 'Zeigt Ihnen, ob eine niedrigere Monatsrate den Kredit auf lange Sicht deutlich teurer macht'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'Kernvariablen, die zuerst geprüft werden sollten' },
        { value: '2', label: 'Szenarien, die mindestens verglichen werden sollten' },
        { value: '1', label: 'monatliche Rate zur realistischen Plausibilitätsprüfung' },
        { value: '0', label: 'Verlass allein auf Studiengebühren, den Sie akzeptieren sollten' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Kürzere Laufzeit',
          description: 'Besser, wenn Ihr zukünftiges Einkommen voraussichtlich hoch genug ist, um eine höhere Monatsrate zu tragen.',
          highlight: true,
          points: [
            'Höhere monatliche Rate',
            'Niedrigere Gesamtzinsen',
            'Schulden sind schneller abbezahlt',
          ],
        },
        {
          title: 'Längere Laufzeit',
          description: 'Besser, wenn Sie anfangs mehr finanziellen Spielraum benötigen, aber nur, wenn Sie die zusätzlichen langfristigen Kosten verstehen.',
          points: [
            'Niedrigere monatliche Rate',
            'Höhere Gesamtzinsen',
            'Mehr Flexibilität, aber höhere Gesamtkosten',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Nützlicher Stresstest:</strong> Reduzieren Sie das Stipendium, erhöhen Sie die Miete leicht und verlängern Sie die Rückzahlung um einige Jahre. Wenn der Plan nur im optimistischsten Szenario aufgeht, ist er noch nicht solide genug.',
    },
    { type: 'title', text: 'Praktischer Vergleich zweier Hochschulen', level: 3 },
    {
      type: 'list',
      items: [
        'Tragen Sie für beide Hochschulen zuerst dieselben Lebenshaltungskosten ein, um nicht Äpfel mit Birnen zu vergleichen.',
        'Aktualisieren Sie dann nur die Variablen, die sich wirklich unterscheiden: Studiengebühren, Stipendien und Wohnoptionen.',
        'Konzentrieren Sie sich auf Kreditsumme und Monatsrate, bevor Sie auf Prestige oder Image achten.',
        'Wenn eine Option nur gewinnt, weil Sie unrealistisch günstige Lebenshaltungskosten annehmen, betrachten Sie das als Warnsignal.',
      ],
    },
    {
      type: 'card',
      title: 'Was Familien oft übersehen',
      html: 'Eine Hochschule, die bei den Studiengebühren günstiger erscheint, kann insgesamt dennoch zu mehr Schulden führen, wenn die Lebenshaltungskosten vor Ort strukturbedingt höher sind oder die Stipendienförderung nicht über alle Jahre hinweg stabil bleibt.',
    },
    { type: 'title', text: 'Grenzen von Studienkostenprognosen', level: 3 },
    {
      type: 'proscons',
      title: 'Stärken und Grenzen',
      items: [
        {
          pro: 'Schnelle Schätzung zum Vergleich verschiedener Studienoptionen',
          con: 'Berücksichtigt keine Stundungen, Karenzzeiten oder einkommensabhängige Rückzahlungen',
        },
        {
          pro: 'Macht Lebenshaltungskosten sichtbar, statt sie hinter den Studiengebühren zu verstecken',
          con: 'Geht von einem festen Zinssatz und einer festen Monatsrate aus',
        },
        {
          pro: 'Zeigt den Tilgungsverlauf visuell auf, statt nur eine Gesamtsumme zu nennen',
          con: 'Berücksichtigt keine Steuern, Inflation oder künftige Gehaltsänderungen',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Jahreszins',
          definition: 'Effektiver Jahreszins. Repräsentiert die jährlichen Kreditkosten und wird für die Tilgungsrechnung in einen monatlichen Zinssatz umgerechnet.',
        },
        {
          term: 'Kreditsumme',
          definition: 'Der tatsächlich geliehene Betrag, nachdem Stipendien und Eigenleistungen die Gesamtkosten reduziert haben.',
        },
        {
          term: 'Tilgung',
          definition: 'Der monatliche Prozess der Rückzahlung eines Kredits durch regelmäßige Raten, die zuerst Zinsen decken und im Laufe der Zeit die Restschuld verringern.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Nächster Schritt empfohlen',
      html: 'Nutzen Sie diesen Simulator, um Ihre Auswahl einzugrenzen, und gleichen Sie das Ergebnis dann mit dem tatsächlichen Finanzierungsbescheid, der Wohnungsrealität und dem erwarteten Einstiegsgehalt in Ihrem Fachbereich ab, bevor Sie sich endgültig verpflichten.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
