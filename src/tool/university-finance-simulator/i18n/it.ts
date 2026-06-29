import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'simulatore-finanziario-universitario' as const;
const title = 'Simulatore Finanziario Universitario';
const description =
  'Modella il costo reale dell\'università, confronta gli scenari di borse di studio e proietta i pagamenti dei prestiti studenteschi con una cronologia visiva dell\'ammortamento e una tabella dettagliata.';

const faqItems = [
  {
    question: 'Cosa include questo simulatore nel costo totale?',
    answer:
      'Combina le tasse universitarie annuali, i costi di vita mensili, il numero di anni di studio e i mesi in cui prevedi di sostenere spese di soggiorno ogni anno accademico. Poi sottrae le borse di studio e qualsiasi contributo iniziale prima di calcolare il prestito.',
  },
  {
    question: 'Come viene calcolato il pagamento mensile del prestito studentesco?',
    answer:
      'Lo strumento utilizza la formula standard del prestito ammortizzabile. Converte il tasso di interesse annuale in un tasso mensile e distribuisce il rimborso sul numero di anni selezionato.',
  },
  {
    question: 'Posso usarlo per prestiti familiari a tasso zero o borse di studio a fondo perduto?',
    answer:
      'Sì. Imposta il TAN a 0 per simulare un piano di rimborso senza interessi. Puoi anche aumentare la borsa di studio o il contributo iniziale per riflettere aiuti, risparmi o supporto familiare.',
  },
  {
    question: 'Perché l\'importo preso in prestito differisce così tanto tra i profili?',
    answer:
      'I costi di soggiorno si accumulano rapidamente nel corso di più anni accademici. Un piano da pendolare e un piano con alloggio in campus possono generare debiti totali molto diversi, anche a parità di tasse scolastiche.',
  },
  {
    question: 'La data di fine rimborso include periodi di moratoria o piani basati sul reddito?',
    answer:
      'No. Questa versione assume che il rimborso inizi su un programma fisso normale con pagamenti mensili uguali. È ideale per la pianificazione di base, non per modellare ogni caso normativo particolare.',
  },
];

const howToItems = [
  {
    name: 'Imposta il tuo profilo di studio',
    text: 'Usa uno dei profili rapidi o sposta i cursori manualmente per riflettere le tasse scolastiche, i costi di vita e il pacchetto di borse di studio.',
  },
  {
    name: 'Regola le ipotesi di finanziamento',
    text: 'Scegli quanto puoi versare in anticipo, quindi imposta il TAN e gli anni di rimborso per rispecchiare le probabili condizioni del prestito.',
  },
  {
    name: 'Leggi il cruscotto finanziario',
    text: 'Le schede riassuntive mostrano il costo totale degli studi, il capitale preso in prestito, il pagamento mensile stimato e gli interessi totali per valutare la sostenibilità a colpo d\'occhio.',
  },
  {
    name: 'Ispeziona la curva di rimborso',
    text: 'Usa il grafico per vedere come evolvono anno dopo anno il saldo residuo, l\'importo totale pagato e gli interessi accumulati.',
  },
  {
    name: 'Apri la tabella di ammortamento',
    text: 'Espandi la tabella mensile se hai bisogno di un\'analisi dettagliata di capitale rispetto agli interessi per il budget o le discussioni in famiglia.',
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
    currency: 'Valuta',
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
    annualTuition: 'Tasse annuali',
    monthlyLivingCost: 'Costo della vita mensile',
    studyYears: 'Anni di studio',
    studyMonthsPerYear: 'Mesi di spese di soggiorno all\'anno',
    scholarshipPerYear: 'Borsa di studio all\'anno',
    upfrontContribution: 'Contributo iniziale',
    aprPercent: 'TAN',
    repaymentYears: 'Anni di rimborso',
    quickProfiles: 'Profili rapidi',
    commuterProfile: 'Pendolare',
    balancedProfile: 'Equilibrato',
    campusProfile: 'Vita in campus',
    stickerCost: 'Costo totale degli studi',
    borrowedPrincipal: 'Capitale preso in prestito',
    monthlyPayment: 'Rata mensile stimata',
    totalInterest: 'Interessi totali',
    projectionTitle: 'Proiezione del debito',
    scheduleTitle: 'Tabella di ammortamento mensile',
    chartBalance: 'Saldo residuo',
    chartPaid: 'Totale pagato',
    chartInterest: 'Interessi pagati',
    openSchedule: 'Apri tabella completa',
    closeSchedule: 'Nascondi tabella completa',
    monthColumn: 'Mese',
    paymentColumn: 'Rata',
    principalColumn: 'Capitale',
    interestColumn: 'Interesse',
    balanceColumn: 'Saldo',
    timelineLabel: 'Calendario debito zero',
    affordabilityHint:
      'Mantieni la rata mensile programmata in linea con le tue probabili entrate nette del primo anno, non solo con il tuo budget attuale da studente.',
    debtFreeLabel: 'Senza debiti dopo',
    scholarshipShare: 'Copertura borse di studio',
    livingShare: 'Quota spese di soggiorno',
    degreeCostLabel: 'Quota tasse scolastiche',
    blendedCost: 'Costo annuo medio',
    totalPaid: 'Totale rimborsato',
    averageYearlyCost: 'Costo medio all\'anno',
    plannerLabel: 'Pianificatore dei costi',
    resultsLabel: 'Prospettiva di finanziamento',
    assumptionsLabel: 'Condizioni del prestito',
    scheduleHint:
      'Dettaglio mese per mese di come ogni pagamento è suddiviso tra capitale e interessi.',
    noDebtNeeded: 'Nessun debito richiesto con la configurazione attuale',
    exactAmount: 'Importo esatto',
    monthWord: 'Mese',
    paymentWord: 'rata',
    principalWord: 'capitale',
    interestWord: 'interesse',
    remainingWord: 'residuo',
    perMonthSuffix: '/mese',
    yearsSuffix: 'anni',
    monthsSuffix: 'mesi',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Pianifica il costo reale dell\'università prima di chiedere un prestito', level: 2 },
    {
      type: 'summary',
      title: 'Per cosa è utile questo calcolatore del costo degli studi',
      items: [
        'Stimare il costo totale di una laurea, non solo la cifra delle tasse pubblicizzata.',
        'Confrontare scuole, scelte di alloggio e pacchetti di borse di studio sulla stessa base di debito.',
        'Vedere se un piano di rimborso sembra sostenibile prima di impegnarsi a chiedere un prestito.',
      ],
    },
    {
      type: 'paragraph',
      html: 'La brochure di un\'università di solito evidenzia una cifra: la retta scolastica. La realtà è più complessa. Potresti dover pagare anche per l\'alloggio, il cibo, i trasporti, i libri, l\'assicurazione e gli interessi sul denaro preso in prestito. Ecco perché un utile simulatore di prestiti studenteschi non dovrebbe fermarsi al prezzo di listino. Dovrebbe aiutarti a rispondere alla domanda più difficile: <em>quanto mi costerà questa decisione sull\'intera durata della laurea, quale debito rimarrà dopo gli aiuti e quale pressione finanziaria affronterò dopo la laurea?</em>',
    },
    { type: 'title', text: 'Decisioni che questo simulatore ti aiuta a prendere', level: 3 },
    {
      type: 'list',
      items: [
        'Se un pacchetto di borse di studio cambia davvero il risultato del debito o attenua solo il titolo promozionale.',
        'Se vivere nel campus, viaggiare da pendolari o condividere un appartamento offre il miglior compromesso a lungo termine.',
        'Se un termine di rimborso più lungo vale la pena per la rata mensile più bassa una volta presi in considerazione gli interessi totali.',
        'Se il programma di studio sembra ancora fattibile dopo aver incluso le spese di soggiorno, non solo le tasse scolastiche.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Usa questo simulatore prima di dire sì a una scuola',
      html: '<ul><li>Confronta due o tre offerte utilizzando le stesse ipotesi sui costi di soggiorno.</li><li>Metti alla prova uno scenario di borse di studio ottimista e uno più realistico.</li><li>Verifica se il pagamento mensile rimane accettabile se il debito aumenta o se il rimborso richiede più tempo.</li></ul>',
    },
    { type: 'title', text: 'Come leggere i risultati senza ingannare se stessi', level: 3 },
    {
      type: 'table',
      headers: ['Metrica', 'Cosa significa', 'Perché è importante'],
      rows: [
        ['Costo totale degli studi', 'Tasse scolastiche più spese di soggiorno per l\'intera durata della laurea', 'Questo è il budget reale che stai cercando di finanziare, non la cifra semplificata della brochure'],
        ['Capitale preso in prestito', 'Importo non coperto da borse di studio e contanti iniziali', 'Questo è il debito che ti accompagnerà nel rimborso e merita la massima attenzione'],
        ['Rata mensile stimata', 'Importo fisso basato su TAN e durata del rimborso', 'È il miglior indicatore rapido della pressione finanziaria post-laurea'],
        ['Interessi totali', 'Costo aggiuntivo pagato oltre alla cifra presa in prestito', 'Aiuta a capire se una rata mensile più bassa sta rendendo silenziosamente il prestito molto più costoso'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'variabili chiave da testare prima' },
        { value: '2', label: 'scenari da confrontare come minimo' },
        { value: '1', label: 'cifra di rata mensile da verificare in modo realistico' },
        { value: '0', label: 'affidamento esclusivo sulle sole tasse universitarie che dovresti accettare' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Termine più breve',
          description: 'Meglio quando il tuo flusso di cassa futuro sarà probabilmente abbastanza forte da assorbire un pagamento più elevato.',
          highlight: true,
          points: [
            'Rata mensile più alta',
            'Interessi totali più bassi',
            'Il debito scompare più velocemente',
          ],
        },
        {
          title: 'Termine più lungo',
          description: 'Meglio quando hai bisogno di respiro all\'inizio, ma solo se comprendi il costo aggiuntivo a lungo termine.',
          points: [
            'Rata mensile più bassa',
            'Interessi totali più alti',
            'Maggiore flessibilità ma costi a lungo termine più elevati',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Test di stress utile:</strong> riduci la borsa di studio, aumenta leggermente l\'affitto ed estendi il rimborso di qualche anno. Se il piano funziona solo nella versione più ottimistica, non è ancora un piano solido.',
    },
    { type: 'title', text: 'Un modo pratico per confrontare due scuole', level: 3 },
    {
      type: 'list',
      items: [
        'Inserisci prima le stesse ipotesi sul costo della vita per entrambe le scuole per non confrontare realtà diverse.',
        'Poi aggiorna solo le variabili che differiscono davvero: tasse scolastiche, borse di studio e probabile scelta dell\'alloggio.',
        'Concentrati sul capitale preso in prestito e sulla rata mensile prima di concentrarti sul prestigio o sul marchio.',
        'Se una delle due opzioni vince solo perché assumi costi di sussistenza insolitamente bassi, consideralo un segnale di avvertimento.',
      ],
    },
    {
      type: 'card',
      title: 'Cosa le famiglie spesso trascurano',
      html: 'Una scuola che sembra più economica sulle tasse può comunque generare più debito complessivo se i costi di vita sono strutturalmente più elevati o se il supporto delle borse di studio è meno stabile anno dopo anno.',
    },
    { type: 'title', text: 'Limiti di qualsiasi proiezione dei costi universitari', level: 3 },
    {
      type: 'proscons',
      title: 'Punti di forza e limiti',
      items: [
        {
          pro: 'Stima rapida per confrontare più opzioni di studio',
          con: 'Non modella moratorie, periodi di grazia o rimborso basato sul reddito',
        },
        {
          pro: 'Rende visibili i costi di soggiorno invece di nasconderli dietro le tasse scolastiche',
          con: 'Assume un TAN fisso e rate mensili fisse',
        },
        {
          pro: 'Mostra graficamente la traiettoria del debito invece di indicare solo un totale complessivo',
          con: 'Non tiene conto di tasse, inflazione o futuri cambiamenti salariali',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'TAN',
          definition: 'Tasso Annuo Nominale. Rappresenta il costo del prestito su base annua e viene convertito in un tasso mensile per i calcoli del rimborso.',
        },
        {
          term: 'Capitale',
          definition: 'L\'importo effettivamente preso in prestito dopo che le borse di studio e i contributi iniziali hanno ridotto il costo totale.',
        },
        {
          term: 'Ammortamento',
          definition: 'Il processo mensile di estinzione di un prestito tramite pagamenti regolari che coprono prima gli interessi e poi il capitale nel tempo.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Prossimo passo raccomandato',
      html: 'Usa questo simulatore per restringere la tua lista di opzioni, quindi convalida la scelta vincente con la lettera ufficiale di aiuto finanziario, la realtà dell\'alloggio e il reddito previsto all\'inizio della carriera prima di prendere l\'impegno finale.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
