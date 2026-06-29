import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'kalkulator-kosztow-studiow' as const;
const title = 'Kalkulator Kosztów Studiów';
const description =
  'Oblicz rzeczywisty koszt studiów, porównaj scenariusze stypendialne i prognozuj spłatę kredytu studenckiego z wizualnym harmonogramem spłaty oraz tabelą amortyzacji.';

const faqItems = [
  {
    question: 'Co ten kalkulator uwzględnia w całkowitym koszcie?',
    answer:
      'Łączy roczne czesne, miesięczne koszty utrzymania, liczbę lat studiów oraz liczbę miesięcy w roku akademickim, w których przewidujesz wydatki na utrzymanie. Następnie odejmuje stypendia i ewentualny wkład własny przed obliczeniem kwoty kredytu.',
  },
  {
    question: 'Jak obliczana jest miesięczna rata kredytu studenckiego?',
    answer:
      'Narzędzie korzysta ze standardowego wzoru na ratę kredytu amortyzowanego. Przelicza roczną stopę oprocentowania na stopę miesięczną i rozkłada spłatę na wybraną liczbę lat.',
  },
  {
    question: 'Czy mogę go użyć do symulacji nieoprocentowanych pożyczek rodzinnych lub dotacji?',
    answer:
      'Tak. Ustaw oprocentowanie roczne (APR) na 0, aby zasymulować plan spłaty bez odsetek. Możesz także zwiększyć stypendium lub wkład własny, aby uwzględnić dotacje, oszczędności lub wsparcie rodziny.',
  },
  {
    question: 'Dlaczego kwota pożyczki różni się tak bardzo między profilami?',
    answer:
      'Koszt utrzymania kumulują się szybko na przestrzeni kilku lat studiów. Profil studenta dojeżdżającego i profil studenta mieszkającego w akademiku mogą generować zupełnie inne obciążenia dłużne, nawet jeśli czesne jest takie samo.',
  },
  {
    question: 'Czy data spłaty uwzględnia karencję lub plany oparte na dochodach?',
    answer:
      'Nie. Ta wersja zakłada, że spłata rozpoczyna się według normalnego stałego harmonogramu z równymi ratami miesięcznymi. Jest idealna do podstawowego planowania, a nie do modelowania każdego wyjątku w przepisach.',
  },
];

const howToItems = [
  {
    name: 'Ustaw swój profil studiów',
    text: 'Użyj jednego z szybkich profili lub przesuń suwaki ręcznie, aby odzwierciedlić swoje czesne, koszty utrzymania i pakiet stypendialny.',
  },
  {
    name: 'Dostosuj założenia finansowania',
    text: 'Wybierz, ile możesz wpłacić na start, a następnie ustaw oprocentowanie oraz liczbę lat spłaty, aby odzwierciedlić prawdopodobne warunki kredytu.',
  },
  {
    name: 'Odczytaj panel finansowy',
    text: 'Kafle podsumowania pokazują pełny koszt wyjściowy studiów, pożyczony kapitał, szacowaną ratę miesięczną oraz sumę odsetek, co pozwala ocenić przystępność na pierwszy rzut oka.',
  },
  {
    name: 'Sprawdź krzywą spłaty',
    text: 'Użyj wykresu, aby zobaczyć, jak rok po roku zmienia się pozostałe saldo, całkowita wpłacona kwota oraz skumulowane odsetki.',
  },
  {
    name: 'Otwórz tabelę amortyzacji',
    text: 'Rozwiń tabelę miesięczną, jeśli potrzebujesz szczegółowej analizy podziału raty na kapitał i odsetki do celów budżetowych lub rozmów rodzinnych.',
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
    currency: 'Waluta',
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
    annualTuition: 'Roczne czesne',
    monthlyLivingCost: 'Miesięczny koszt utrzymania',
    studyYears: 'Lata studiów',
    studyMonthsPerYear: 'Miesiące kosztów utrzymania w roku',
    scholarshipPerYear: 'Stypendium roczne',
    upfrontContribution: 'Wkład własny na start',
    aprPercent: 'Oprocentowanie roczne (APR)',
    repaymentYears: 'Lata spłaty',
    quickProfiles: 'Szybkie profile',
    commuterProfile: 'Student dojeżdżający (z domu)',
    balancedProfile: 'Zrównoważony',
    campusProfile: 'Mieszkanie na kampusie',
    stickerCost: 'Pełny koszt studiów',
    borrowedPrincipal: 'Pożyczony kapitał',
    monthlyPayment: 'Szacowana rata miesięczna',
    totalInterest: 'Suma odsetek',
    projectionTitle: 'Prognoza zadłużenia',
    scheduleTitle: 'Miesięczny harmonogram amortyzacji',
    chartBalance: 'Pozostałe saldo',
    chartPaid: 'Suma wpłat',
    chartInterest: 'Zapłacone odsetki',
    openSchedule: 'Otwórz pełny harmonogram',
    closeSchedule: 'Ukryj pełny harmonogram',
    monthColumn: 'Miesiąc',
    paymentColumn: 'Rata',
    principalColumn: 'Kapitał',
    interestColumn: 'Odsetki',
    balanceColumn: 'Saldo',
    timelineLabel: 'Harmonogram spłaty zadłużenia',
    affordabilityHint:
      'Utrzymuj prognozowaną ratę miesięczną na poziomie zbliżonym do prawdopodobnych dochodów netto w pierwszym roku po studiach, a nie tylko obecnego budżetu studenckiego.',
    debtFreeLabel: 'Wolny od długu po',
    scholarshipShare: 'Pokrycie stypendialne',
    livingShare: 'Udział kosztów utrzymania',
    degreeCostLabel: 'Udział czesnego',
    blendedCost: 'Średni koszt roczny',
    totalPaid: 'Suma spłacona',
    averageYearlyCost: 'Średni koszt na rok',
    plannerLabel: 'Planer kosztów',
    resultsLabel: 'Perspektywa finansowania',
    assumptionsLabel: 'Założenia kredytowe',
    scheduleHint:
      'Szczegółowy podział każdej płatności na kapitał i odsetki w ujęciu miesięcznym.',
    noDebtNeeded: 'Brak potrzeby zadłużania przy obecnej konfiguracji',
    exactAmount: 'Dokładna kwota',
    monthWord: 'Miesiąc',
    paymentWord: 'rata',
    principalWord: 'kapitał',
    interestWord: 'odsetki',
    remainingWord: 'pozostało',
    perMonthSuffix: '/mies.',
    yearsSuffix: 'lat',
    monthsSuffix: 'miesięcy',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Zaplanuj rzeczywisty koszt studiów przed zaciągnięciem kredytu', level: 2 },
    {
      type: 'summary',
      title: 'W czym pomaga ten kalkulator kosztów studiów',
      items: [
        'Oszacować pełny koszt studiów, a nie tylko reklamowaną kwotę czesnego.',
        'Porównać uczelnie, opcje zakwaterowania i stypendia przy takich samych założeniach długu.',
        'Sprawdzić, czy plan spłaty wydaje się realny do udźwignięcia, zanim zdecydujesz się na pożyczkę.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Broszura uniwersytecka zwykle podkreśla jedną liczbę: czesne. Rzeczywistość bywa bardziej skomplikowana. Musisz także płacić za zakwaterowanie, wyżywienie, transport, książki, ubezpieczenie oraz odsetki od pożyczonych pieniędzy. Właśnie dlatego przydatny kalkulator kredytu studenckiego nie powinien kończyć się na cenie katalogowej studiów. Powinien pomóc Ci odpowiedzieć na trudniejsze pytanie: <em>ile ta decyzja będzie mnie kosztować w trakcie całych studiów, ile długu pozostanie po odliczeniu pomocy i z jakimi obciążeniami związanymi ze spłatą przyjdzie mi się zmierzyć po ukończeniu nauki?</em>',
    },
    { type: 'title', text: 'Decyzje, które ten kalkulator pomaga podjąć', level: 3 },
    {
      type: 'list',
      items: [
        'Czy pakiet stypendialny naprawdę zmienia ostateczny poziom zadłużenia, czy jedynie ładnie wygląda w materiałach marketingowych.',
        'Czy mieszkanie na kampusie, dojeżdżanie z domu rodzinnego czy wynajem pokoju daje najlepszy kompromis w dłuższej perspektywie.',
        'Czy dłuższy okres spłaty jest warty niższej raty miesięcznej, gdy weźmie się pod uwagę całkowity koszt odsetek.',
        'Czy dany kierunek studiów nadal wygląda na opłacalny po uwzględnieniu kosztów utrzymania, a nie tylko samego czesnego.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Użyj tego kalkulatora, zanim ostatecznie wybierzesz uczelnię',
      html: '<ul><li>Porównaj dwie lub trzy oferty przy tych samych założeniach kosztów utrzymania.</li><li>Przetestuj optymistyczny i bardziej realistyczny scenariusz stypendialny.</li><li>Sprawdź, czy miesięczna rata pozostaje na akceptowalnym poziomie, jeśli kwota kredytu wzrośnie lub spłata wydłuży się w czasie.</li></ul>',
    },
    { type: 'title', text: 'Jak czytać wyniki bez oszukiwania samego siebie', level: 3 },
    {
      type: 'table',
      headers: ['Wskaźnik', 'Co oznacza', 'Dlaczego to ważne'],
      rows: [
        ['Pełny koszt studiów', 'Czesne plus koszty utrzymania na przestrzeni całych studiów', 'To jest rzeczywisty budżet, który musisz sfinansować, a nie uproszczona liczba z broszury'],
        ['Pożyczony kapitał', 'Kwota pozostała do pokrycia po odliczeniu stypendiów i wkładu własnego', 'To jest dług, który będziesz musiał spłacić, i to na nim należy skupić największą uwagę'],
        ['Szacowana rata miesięczna', 'Stała kwota spłaty oparta na oprocentowaniu i okresie kredytowania', 'Najlepszy szybki wyznacznik obciążenia finansowego po ukończeniu studiów'],
        ['Suma odsetek', 'Dodatkowy koszt zapłacony ponad pożyczoną kwotę', 'Pozwala sprawdzić, czy niższa rata miesięczna nie oznacza po cichu znacznie droższego kredytu'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'kluczowe zmienne do przetestowania w pierwszej kolejności' },
        { value: '2', label: 'scenariusze do porównania jako absolutne minimum' },
        { value: '1', label: 'kwota raty miesięcznej do realistycznej weryfikacji' },
        { value: '0', label: 'opierania się wyłącznie na samym czesnem, co powinieneś zaakceptować' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Krótszy okres',
          description: 'Lepszy, gdy Twoje przyszłe dochody będą na tyle stabilne i wysokie, aby udźwignąć wyższą ratę.',
          highlight: true,
          points: [
            'Wyższa rata miesięczna',
            'Niższa suma odsetek',
            'Szybsze pozbycie się długu',
          ],
        },
        {
          title: 'Dłuższy okres',
          description: 'Lepszy, gdy potrzebujesz więcej swobody finansowej na starcie, ale tylko pod warunkiem, że rozumiesz dodatkowy koszt w długim okresie.',
          points: [
            'Niższa rata miesięczna',
            'Wyższa suma odsetek',
            'Większa elastyczność, ale większy koszt całkowity',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Przydatny test warunków skrajnych:</strong> obniż stypendium, podnieś nieco czynsz i wydłuż spłatę o kilka lat. Jeśli Twój plan działa tylko w najbardziej optymistycznej wersji, oznacza to, że nie jest jeszcze wystarczająco stabilny.',
    },
    { type: 'title', text: 'Praktyczny sposób na porównanie dwóch uczelni', level: 3 },
    {
      type: 'list',
      items: [
        'Najpierw wpisz te same założenia dotyczące kosztów utrzymania dla obu uczelni, aby nie porównywać różnych realiów.',
        'Następnie zaktualizuj tylko te zmienne, które faktycznie się różnią: czesne, stypendium oraz prawdopodobną opcję zakwaterowania.',
        'Skup się na pożyczonym kapitale oraz szacowanej racie, zanim zaczniesz patrzeć na prestiż czy markę uczelni.',
        'Jeśli jedna z opcji wygrywa tylko dlatego, że zakładasz nienaturalnie niskie koszty utrzymania, potraktuj to jako ostrzeżenie.',
      ],
    },
    {
      type: 'card',
      title: 'Co często umyka rodzinom',
      html: 'Uczelnia, która wydaje się tańsza pod względem czesnego, może ostatecznie doprowadzić do większego zadłużenia, jeśli koszty życia na miejscu są strukturalnie wyższe lub wsparcie stypendialne jest mniej stabilne z roku na rok.',
    },
    { type: 'title', text: 'Ograniczenia prognoz kosztów studiów', level: 3 },
    {
      type: 'proscons',
      title: 'Mocne strony i ograniczenia',
      items: [
        {
          pro: 'Szybki szacunek bazowy do porównania wielu opcji studiowania',
          con: 'Nie modeluje karencji w spłacie, okresów bezodsetkowych ani spłaty powiązanej z dochodem',
        },
        {
          pro: 'Uwypukla koszty utrzymania zamiast ukrywać je za samym czesnem',
          con: 'Zakłada stałe oprocentowanie i stałą ratę miesięczną',
        },
        {
          pro: 'Pokazuje wizualną ścieżkę spłaty długu zamiast informowania o jednej ogólnej sumie',
          con: 'Nie uwzględnia podatków, inflacji ani przyszłych zmian wynagrodzenia',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Oprocentowanie',
          definition: 'Roczna stopa oprocentowania (APR). Reprezentuje roczny koszt kredytu i jest przeliczana na stopę miesięczną do obliczeń spłaty.',
        },
        {
          term: 'Kapitał',
          definition: 'Kwota faktycznie pożyczona po tym, jak stypendia i wkład własny obniżyły całkowity koszt.',
        },
        {
          term: 'Amortyzacja',
          definition: 'Miesięczny proces spłaty kredytu za pomocą regularnych rat, które w pierwszej kolejności pokrywają odsetki, a z czasem zmniejszają pozostały kapitał.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Zalecany następny krok',
      html: 'Użyj tego kalkulatora, aby zawęzić listę uczelni, a następnie zweryfikuj faworyta z rzeczywistą decyzją o przyznaniu pomocy finansowej, realnymi kosztami zakwaterowania oraz oczekiwanymi zarobkami na początku kariery w danej dziedzinie przed podjęciem ostatecznej decyzji.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
