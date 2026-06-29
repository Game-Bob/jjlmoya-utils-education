import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'simulateur-financement-universitaire' as const;
const title = 'Simulateur de Financement Universitaire';
const description =
  'Modélisez le coût réel des études supérieures, comparez les scénarios de bourses et projetez les remboursements de prêts étudiants avec un calendrier de remboursement visuel et un tableau d\'amortissement.';

const faqItems = [
  {
    question: 'Qu\'inclut ce simulateur dans le coût total ?',
    answer:
      'Il combine les frais de scolarité annuels, les frais de subsistance mensuels, le nombre d\'années d\'études et les mois où vous prévoyez de payer vos frais de subsistance chaque année universitaire. Ensuite, il soustrait les bourses et toute contribution initiale avant de calculer le prêt.',
  },
  {
    question: 'Comment est calculé le remboursement mensuel du prêt étudiant ?',
    answer:
      'L\'outil utilise la formule standard du prêt amortissable. Il convertit le taux d\'intérêt annuel en un taux mensuel et répartit le remboursement sur le nombre d\'années sélectionné.',
  },
  {
    question: 'Puis-je l\'utiliser pour des prêts familiaux à taux zéro ou des subventions ?',
    answer:
      'Oui. Réglez le taux d\'intérêt annuel sur 0 pour simuler un plan de remboursement sans intérêt. Vous pouvez également augmenter la bourse ou la contribution initiale pour refléter les subventions, l\'épargne ou le soutien familial.',
  },
  {
    question: 'Pourquoi le montant emprunté diffère-t-il autant selon les profils ?',
    answer:
      'Les frais de subsistance s\'accumulent rapidement sur plusieurs années universitaires. Un profil d\'étudiant vivant chez ses parents et un profil vivant sur le campus peuvent générer des charges de dette très différentes, même si les frais de scolarité restent identiques.',
  },
  {
    question: 'La date de fin de remboursement inclut-elle le différé d\'amortissement ou les remboursements liés aux revenus ?',
    answer:
      'Non. Cette version suppose que le remboursement commence selon un calendrier fixe normal avec des mensualités égales. Elle est idéale pour une planification de base, pas pour modéliser tous les cas particuliers réglementaires.',
  },
];

const howToItems = [
  {
    name: 'Définissez votre profil d\'études',
    text: 'Utilisez l\'un des profils rapides ou déplacez les curseurs manuellement pour refléter vos frais de scolarité, vos frais de subsistance et votre bourse.',
  },
  {
    name: 'Ajustez les hypothèses de financement',
    text: 'Choisissez le montant que vous pouvez verser initialement, puis définissez le taux d\'intérêt annuel et les années de remboursement pour correspondre aux conditions probables de votre prêt.',
  },
  {
    name: 'Lisez le tableau de bord financier',
    text: 'Les cartes de résumé affichent votre coût total brut, le capital emprunté, le paiement mensuel estimé et le total des intérêts pour évaluer la viabilité d\'un coup d\'œil.',
  },
  {
    name: 'Inspectez la courbe de remboursement',
    text: 'Utilisez le graphique pour voir comment évoluent le solde restant, le montant total payé et les intérêts cumulés année après année.',
  },
  {
    name: 'Ouvrez le tableau d\'amortissement',
    text: 'Développez le tableau mensuel si vous avez besoin d\'une analyse détaillée du capital par rapport aux intérêts pour votre budget ou les discussions familiales.',
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
    currency: 'Devise',
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
    annualTuition: 'Frais de scolarité annuels',
    monthlyLivingCost: 'Frais de subsistance mensuels',
    studyYears: 'Années d\'études',
    studyMonthsPerYear: 'Mois de frais de subsistance par an',
    scholarshipPerYear: 'Bourse par an',
    upfrontContribution: 'Contribution initiale',
    aprPercent: 'Taux d\'intérêt annuel',
    repaymentYears: 'Années de remboursement',
    quickProfiles: 'Profils rapides',
    commuterProfile: 'Externe (chez les parents)',
    balancedProfile: 'Équilibré',
    campusProfile: 'Vie sur le campus',
    stickerCost: 'Coût total des études',
    borrowedPrincipal: 'Capital emprunté',
    monthlyPayment: 'Paiement mensuel estimé',
    totalInterest: 'Intérêts totaux',
    projectionTitle: 'Projection de la dette',
    scheduleTitle: 'Tableau d\'amortissement mensuel',
    chartBalance: 'Solde restant',
    chartPaid: 'Total payé',
    chartInterest: 'Intérêts payés',
    openSchedule: 'Ouvrir le tableau complet',
    closeSchedule: 'Masquer le tableau complet',
    monthColumn: 'Mois',
    paymentColumn: 'Paiement',
    principalColumn: 'Capital',
    interestColumn: 'Intérêt',
    balanceColumn: 'Solde',
    timelineLabel: 'Calendrier de remboursement complet',
    affordabilityHint:
      'Gardez votre paiement mensuel projeté en adéquation avec vos revenus nets probables de première année, et pas seulement avec votre budget étudiant actuel.',
    debtFreeLabel: 'Libéré des dettes après',
    scholarshipShare: 'Part des bourses',
    livingShare: 'Part des frais de subsistance',
    degreeCostLabel: 'Part des frais de scolarité',
    blendedCost: 'Coût annuel moyen',
    totalPaid: 'Total remboursé',
    averageYearlyCost: 'Coût moyen par an',
    plannerLabel: 'Planificateur de coûts',
    resultsLabel: 'Perspectives de financement',
    assumptionsLabel: 'Hypothèses du prêt',
    scheduleHint:
      'Détail mois par mois de la répartition de chaque paiement entre capital et intérêts.',
    noDebtNeeded: 'Aucune dette nécessaire avec la configuration actuelle',
    exactAmount: 'Montant exact',
    monthWord: 'Mois',
    paymentWord: 'paiement',
    principalWord: 'capital',
    interestWord: 'intérêt',
    remainingWord: 'restant',
    perMonthSuffix: '/mois',
    yearsSuffix: 'ans',
    monthsSuffix: 'mois',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Planifiez le coût réel de l\'université avant d\'emprunter', level: 2 },
    {
      type: 'summary',
      title: 'À quoi sert ce calculateur de coût des études supérieures',
      items: [
        'Estimer le coût total d\'un diplôme, et pas seulement le montant officiel des frais de scolarité.',
        'Comparer les établissements, les choix de logement et les bourses d\'études sur la même base de dette.',
        'Vérifier si un plan de remboursement vous semble gérable avant de vous engager à emprunter.',
      ],
    },
    {
      type: 'paragraph',
      html: 'La brochure d\'une université met généralement en avant un seul chiffre: les frais de scolarité. La réalité est plus complexe. Vous devez également payer pour le logement, la nourriture, les transports, les livres, l\'assurance et les intérêts sur l\'argent emprunté. C\'est pourquoi un simulateur de prêt étudiant utile ne doit pas s\'arrêter au prix catalogue. Il doit vous aider à répondre à la question la plus difficile: <em>combien cette décision me coûtera-t-elle sur l\'ensemble de mon cursus, quelle dette restera-t-il après les aides, et à quelle pression de remboursement serai-je confronté après l\'obtention de mon diplôme ?</em>',
    },
    { type: 'title', text: 'Décisions que ce simulateur vous aide à prendre', level: 3 },
    {
      type: 'list',
      items: [
        'Si une bourse d\'études change réellement le niveau d\'endettement ou si elle ne fait qu\'adoucir le titre marketing.',
        'Si la vie sur le campus, le trajet quotidien depuis chez vos parents ou la colocation offre le compromis le plus sain à long terme.',
        'Si une durée de remboursement plus longue vaut la peine pour une mensualité plus faible une fois que l\'intérêt total est pris en compte.',
        'Si le programme reste viable après avoir inclus les frais de subsistance, et pas seulement les frais de scolarité.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Utilisez ceci avant d\'accepter une offre d\'établissement',
      html: '<ul><li>Comparez deux ou trois offres en utilisant les mêmes hypothèses de frais de subsistance.</li><li>Testez un scénario de bourse optimiste et un scénario de bourse plus réaliste.</li><li>Vérifiez si la mensualité reste acceptable si le montant emprunté augmente ou si le remboursement prend plus de temps.</li></ul>',
    },
    { type: 'title', text: 'Comment lire les résultats sans se voiler la face', level: 3 },
    {
      type: 'table',
      headers: ['Indicateur', 'Ce que cela signifie', 'Pourquoi c\'est important'],
      rows: [
        ['Coût total des études', 'Frais de scolarité plus frais de subsistance sur toute la durée du diplôme', 'C\'est le budget réel que vous essayez de financer, et non le chiffre simplifié de la brochure'],
        ['Capital emprunté', 'Montant restant non couvert après les bourses et l\'apport initial', 'C\'est la dette qui vous suivra lors du remboursement et qui mérite la plus grande attention'],
        ['Paiement mensuel estimé', 'Montant de remboursement fixe basé sur le taux et la durée du remboursement', 'C\'est le meilleur indicateur rapide de la pression financière post-diplôme'],
        ['Intérêts totaux', 'Coût supplémentaire payé en plus du montant emprunté', 'Cela vous permet de voir si une mensualité plus faible rend discrètement le prêt beaucoup plus cher'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'variables clés à tester en priorité' },
        { value: '2', label: 'scénarios à comparer au minimum' },
        { value: '1', label: 'mensualité estimée à valider de manière réaliste' },
        { value: '0', label: 'dépendance exclusive aux seuls frais de scolarité' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Durée plus courte',
          description: 'Préférable si vos flux de trésorerie futurs sont susceptibles d\'être assez solides pour absorber un paiement plus élevé.',
          highlight: true,
          points: [
            'Mensualité plus élevée',
            'Intérêts totaux plus bas',
            'La dette disparaît plus vite',
          ],
        },
        {
          title: 'Durée plus longue',
          description: 'Préférable si vous avez besoin d\'air au début, mais seulement si vous comprenez le coût supplémentaire à long terme.',
          points: [
            'Mensualité plus faible',
            'Intérêts totaux plus élevés',
            'Plus de flexibilité mais plus de coûts à long terme',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Test de résistance utile:</strong> réduisez la bourse, augmentez légèrement le loyer et prolongez le remboursement de quelques années. Si le plan ne fonctionne que dans la version la plus optimiste, ce n\'est pas encore un plan solide.',
    },
    { type: 'title', text: 'Un moyen pratique de comparer deux établissements', level: 3 },
    {
      type: 'list',
      items: [
        'Saisissez d\'abord les mêmes hypothèses de frais de subsistance pour les deux écoles afin de ne pas comparer des réalités différentes.',
        'Ensuite, ne mettez à jour que les variables qui diffèrent réellement: frais de scolarité, bourse et choix de logement probable.',
        'Concentrez-vous sur le capital emprunté et le paiement mensuel avant de vous soucier du prestige ou de l\'image de marque.',
        'Si une option l\'emporte uniquement parce que vous supposez des frais de subsistance anormalement bas, considérez cela comme un signal d\'alarme.',
      ],
    },
    {
      type: 'card',
      title: 'Ce que les familles oublient souvent',
      html: 'Un établissement qui semble moins cher en frais de scolarité peut tout de même engendrer plus de dettes au total si les frais de subsistance y sont structurellement plus élevés ou si le soutien financier est moins stable d\'une année sur l\'autre.',
    },
    { type: 'title', text: 'Limites de toute projection de coûts universitaires', level: 3 },
    {
      type: 'proscons',
      title: 'Forces et limites',
      items: [
        {
          pro: 'Estimation rapide pour comparer plusieurs options d\'études',
          con: 'Ne modélise pas le différé, les périodes de grâce ou le remboursement lié aux revenus',
        },
        {
          pro: 'Rend les frais de subsistance visibles au lieu de les cacher derrière la scolarité',
          con: 'Suppose un taux d\'intérêt fixe et un paiement mensuel fixe',
        },
        {
          pro: 'Montre la trajectoire de la dette de manière visuelle au lieu de ne donner qu\'un total brut',
          con: 'Ne prend pas en compte les impôts, l\'inflation ou les futurs changements de salaire',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Taux d\'intérêt annuel',
          definition: 'Représente le coût annuel de l\'emprunt, converti en taux mensuel pour le calcul des remboursements.',
        },
        {
          term: 'Capital',
          definition: 'Le montant réellement emprunté une fois que les bourses et les apports initiaux ont réduit le coût total.',
        },
        {
          term: 'Amortissement',
          definition: 'Le processus mensuel de remboursement d\'un prêt par des paiements réguliers qui courent d\'abord les intérêts puis le capital au fil du temps.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Prochaine étape recommandée',
      html: 'Utilisez ce simulateur pour affiner votre liste de choix, puis validez le gagnant par rapport à la lettre d\'aide financière réelle, à la réalité du logement et au revenu attendu en début de carrière dans votre domaine avant de vous engager définitivement.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
