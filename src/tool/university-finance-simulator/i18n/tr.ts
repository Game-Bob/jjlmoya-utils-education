import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'universite-finansman-simulatoru' as const;
const title = 'Üniversite Finansman Simülatörü';
const description =
  'Üniversite eğitiminin gerçek maliyetini modelleyin, burs senaryolarını karşılaştırın ve görsel bir geri ödeme çizelgesi ve amortisman tablosu ile öğrenci kredisi ödemelerini projelendirin.';

const faqItems = [
  {
    question: 'Bu simülatör toplam maliyete neleri dahil eder?',
    answer:
      'Yıllık öğrenim ücretini, aylık yaşam masraflarını, eğitim yılı sayısını ve her akademik yılda yaşam masraflarını ödemeyi beklediğiniz ay sayısını birleştirir. Ardından bursları ve varsa başlangıç katkısını düşerek kredi tutarını hesaplar.',
  },
  {
    question: 'Aylık öğrenci kredisi ödemesi nasıl hesaplanır?',
    answer:
      'Araç, standart amortismanlı kredi formülünü kullanır. Yıllık faiz oranını aylık orana dönüştürür ve geri ödemeyi seçilen yıl sayısına yayar.',
  },
  {
    question: 'Sıfır faizli aile içi krediler veya hibeler için kullanabilir miyim?',
    answer:
      'Evet. Faizsiz bir geri ödeme planını simüle etmek için yıllık faiz oranını 0 olarak ayarlayın. Hibeleri, tasarrufları veya aile desteğini yansıtmak için burs veya başlangıç katkısını da artırabilirsiniz.',
  },
  {
    question: 'Ödünç alınan miktar profiller arasında neden bu kadar çok değişiyor?',
    answer:
      'Yaşam masrafları birden fazla akademik yıl boyunca hızla katlanır. Ailesiyle yaşayan bir öğrencinin planı ile kampüste yaşayan bir öğrencinin planı, öğrenim ücreti aynı kalsa bile çok farklı borç yükleri oluşturabilir.',
  },
  {
    question: 'Borçsuz kalma tarihi erteleme veya gelire dayalı planları içerir mi?',
    answer:
      'Hayır. Bu sürüm, geri ödemenin eşit aylık ödemelerle normal sabit bir programda başladığını varsayar. Temel planlama için idealdir, ancak her politika istisnasını modellemek için uygun değildir.',
  },
];

const howToItems = [
  {
    name: 'Eğitim profilinizi ayarlayın',
    text: 'Öğrenim ücretinizi, yaşam masraflarınızı ve burs paketinizi yansıtmak için hızlı profillerden birini kullanın veya sürgüleri manuel olarak hareket ettirin.',
  },
  {
    name: 'Finansman varsayımlarını ayarlayın',
    text: 'Peşin olarak ne kadar ödeyebileceğinizi seçin, ardından olası kredi koşullarınızı yansıtmak için yıllık faiz oranını ve geri ödeme yıllarını ayarlayın.',
  },
  {
    name: 'Finansal paneli okuyun',
    text: 'Özet kartları, tek bir bakışta karşılanabilirliği değerlendirebilmeniz için brüt eğitim maliyetinizi, ödünç alınan anaparanızı, tahmini aylık ödemenizi ve toplam faizinizi gösterir.',
  },
  {
    name: 'Geri ödeme eğrisini inceleyin',
    text: 'Kalan bakiye, toplam ödenen miktar ve birikmiş faizin yıldan yıla nasıl geliştiğini görmek için grafiği kullanın.',
  },
  {
    name: 'Amortisman tablosunu açın',
    text: 'Bütçe planlaması veya aile görüşmeleri için ayrıntılı anapara-faiz analizi gerektiğinde aylık tabloyu genişletin.',
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
    currency: 'Para Birimi',
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
    annualTuition: 'Yıllık öğrenim ücreti',
    monthlyLivingCost: 'Aylık yaşam masrafı',
    studyYears: 'Eğitim süresi',
    studyMonthsPerYear: 'Yılda yaşam masrafı ödenen ay sayısı',
    scholarshipPerYear: 'Yıllık burs miktarı',
    upfrontContribution: 'Başlangıç katkısı',
    aprPercent: 'Yıllık Faiz Oranı',
    repaymentYears: 'Geri ödeme süresi',
    quickProfiles: 'Hızlı profiller',
    commuterProfile: 'Ailesiyle yaşayan',
    balancedProfile: 'Dengeli',
    campusProfile: 'Kampüste yaşam',
    stickerCost: 'Toplam eğitim maliyeti',
    borrowedPrincipal: 'Ödünç alınan anapara',
    monthlyPayment: 'Tahmini aylık ödeme',
    totalInterest: 'Toplam faiz yükü',
    projectionTitle: 'Borç projeksiyonu',
    scheduleTitle: 'Aylık amortisman tablosu',
    chartBalance: 'Kalan bakiye',
    chartPaid: 'Toplam ödenen',
    chartInterest: 'Ödenen faiz',
    openSchedule: 'Tablonun tamamını aç',
    closeSchedule: 'Tablonun tamamını gizle',
    monthColumn: 'Ay',
    paymentColumn: 'Ödeme',
    principalColumn: 'Anapara',
    interestColumn: 'Faiz',
    balanceColumn: 'Bakiye',
    timelineLabel: 'Borçsuz kalma süresi',
    affordabilityHint:
      'Tahmini aylık ödemenizi yalnızca mevcut öğrenci bütçenize göre değil, mezuniyet sonrası ilk yıl alabileceğiniz net maaşınıza göre planlayın.',
    debtFreeLabel: 'Borçsuz kalma süresi',
    scholarshipShare: 'Burs oranı',
    livingShare: 'Yaşam masrafı payı',
    degreeCostLabel: 'Öğrenim ücreti payı',
    blendedCost: 'Ortalama yıllık maliyet',
    totalPaid: 'Toplam geri ödenen',
    averageYearlyCost: 'Yıllık ortalama maliyet',
    plannerLabel: 'Maliyet planlayıcı',
    resultsLabel: 'Finansman görünüm',
    assumptionsLabel: 'Kredi varsayımları',
    scheduleHint:
      'Her ödemenin anapara ve faiz arasında nasıl bölündüğünün aylık dökümü.',
    noDebtNeeded: 'Mevcut ayarlarla borçlanmaya gerek yok',
    exactAmount: 'Kesin miktar',
    monthWord: 'Ay',
    paymentWord: 'ödeme',
    principalWord: 'anapara',
    interestWord: 'faiz',
    remainingWord: 'kalan',
    perMonthSuffix: '/ay',
    yearsSuffix: 'yıl',
    monthsSuffix: 'ay',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Borçlanmadan Önce Üniversitenin Gerçek Maliyetini Planlayın', level: 2 },
    {
      type: 'summary',
      title: 'Bu üniversite maliyet hesaplayıcısı ne için yararlıdır?',
      items: [
        'Yalnızca ilan edilen öğrenim ücretini değil, bir diplomanın tüm maliyetini tahmin etmek.',
        'Okulları, barınma seçeneklerini ve burs paketlerini aynı borç tabanında karşılaştırmak.',
        'Borçlanmayı taahhüt etmeden önce bir geri ödeme planının yönetilebilir olup olmadığını görmek.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Bir üniversite broşürü genellikle tek bir sayıyı vurgular: öğrenim ücreti. Gerçek hayat daha karmaşıktır. Barınma, yemek, ulaşım, kitaplar, sigorta ve ödünç alınan paranın faizi için de ödeme yapabilirsiniz. Bu nedenle, kullanışlı bir öğrenci kredisi simülatörü yalnızca etiket fiyatında durmamalıdır. Şu zor soruyu yanıtlamanıza yardımcı olmalıdır: <em>Bu karar bana tüm eğitim boyunca ne kadara mal olacak, yardımlardan sonra ne kadar borç kalacak ve mezuniyetten sonra nasıl bir geri ödeme baskısıyla karşılaşacağım?</em>',
    },
    { type: 'title', text: 'Bu Simülatörün Karar Vermenize Yardımcı Olduğu Konular', level: 3 },
    {
      type: 'list',
      items: [
        'Bir burs paketinin borç sonucunu gerçekten değiştirip değiştirmediği yoksa sadece pazarlama başlığını mı yumuşattığı.',
        'Kampüste yaşamanın, evden gidip gelmenin veya paylaşımlı konaklamanın uzun vadede en sağlıklı dengeyi sunup sunmadığı.',
        'Toplam faiz dikkate alındığında, daha uzun bir geri ödeme süresinin daha düşük aylık ödemeye değip değmeyeceği.',
        'Sadece öğrenim ücretini değil, yaşam masraflarını da dahil ettikten sonra programın hala uygulanabilir görünüp görünmediği.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Bir okula evet demeden önce bunu kullanın',
      html: '<ul><li>Aynı yaşam masrafı varsayımlarını kullanarak iki veya üç teklifi karşılaştırın.</li><li>En iyi durum ve daha gerçekçi bir burs senaryosunu test edin.</li><li>Borçlanma artarsa veya geri ödeme daha uzun sürerse aylık ödemenin hala kabul edilebilir olup olmadığını kontrol edin.</li></ul>',
    },
    { type: 'title', text: 'Sonuçları Kendinizi Kandırmadan Nasıl Okumalısınız?', level: 3 },
    {
      type: 'table',
      headers: ['Metrik', 'Ne anlama geliyor', 'Neden önemli'],
      rows: [
        ['Toplam eğitim maliyeti', 'Tüm eğitim süresi boyunca öğrenim ücreti artı yaşam masrafları', 'Bu, finanse etmeye çalıştığınız gerçek bütçedir, broşürdeki basitleştirilmiş sayı değildir'],
        ['Ödünç alınan anapara', 'Burslar ve başlangıç nakdinden sonra hala karşılanmayan miktar', 'Bu, geri ödemede sizi takip eden ve en çok dikkat edilmesi gereken borçtur'],
        ['Tahmini aylık ödeme', 'Faiz oranına ve geri ödeme süresine bağlı sabit geri ödeme miktarı', 'Mezuniyet sonrası finansal baskının en iyi hızlı göstergesidir'],
        ['Toplam faiz', 'Ödünç alınan miktarın üzerine ödenen ekstra maliyet', 'Daha düşük aylık ödemenin sessizce çok daha pahalı bir krediye dönüşüp dönüşmediğini görmenize yardımcı olur'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'önce stres testine tabi tutulacak temel girdi' },
        { value: '2', label: 'en az karşılaştırılmaya değer senaryo' },
        { value: '1', label: 'akıl sağlığı kontrolü için aylık ödeme rakamı' },
        { value: '0', label: 'kabul etmeniz gereken öğrenim ücretine tek başına güvenme oranı' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Daha kısa süre',
          description: 'Gelecekteki nakit akışınız daha yüksek bir ödemeyi emebilecek kadar güçlü olacağında daha iyidir.',
          highlight: true,
          points: [
            'Daha yüksek aylık ödeme',
            'Daha düşük toplam faiz',
            'Borç daha hızlı biter',
          ],
        },
        {
          title: 'Daha uzun süre',
          description: 'Başlangıçta nefes alma odasına ihtiyacınız olduğunda daha iyidir, ancak yalnızca ekstra uzun vadeli maliyeti anlarsanız.',
          points: [
            'Daha düşük aylık ödeme',
            'Daha yüksek toplam faiz',
            'Daha fazla esneklik ancak daha fazla uzun vadeli maliyet',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Yararlı stres testi:</strong> Bursu düşürün, kirayı biraz artırın ve geri ödemeyi birkaç yıl uzatın. Plan yalnızca en iyimser versiyonda çalışıyorsa, henüz sağlam bir plan değildir.',
    },
    { type: 'title', text: 'İki Okulu Karşılaştırmanın Pratik Bir Yolu', level: 3 },
    {
      type: 'list',
      items: [
        'Farklı gerçekleri karşılaştırmamak için önce her iki okul için de aynı yaşam masrafı varsayımlarını girin.',
        'Ardından yalnızca gerçekten farklı olan değişkenleri güncelleyin: öğrenim ücreti, burs ve olası barınma seçeneği.',
        'Prestij veya markaya odaklanmadan önce ödünç alınan anaparaya ve aylık ödemeye odaklanın.',
        'Bir seçenek yalnızca alışılmadık derecede ucuz yaşam masrafları varsaydığınız için kazanıyorsa, bunu bir uyarı işareti olarak kabul edin.',
      ],
    },
    {
      type: 'card',
      title: 'Ailelerin genellikle gözden kaçırdığı şeyler',
      html: 'Öğrenim ücreti konusunda daha ucuz görünen bir okul, yaşam masrafları yapısal olarak daha yüksekse veya burs desteği yıldan yıla daha az istikrarlıysa genel olarak daha fazla borç yaratabilir.',
    },
    { type: 'title', text: 'Herhangi Bir Üniversite Maliyet Projeksiyonunun Sınırları', level: 3 },
    {
      type: 'proscons',
      title: 'Güçlü yönler ve sınırlar',
      items: [
        {
          pro: 'Birden fazla eğitim seçeneğini karşılaştırmak için hızlı temel tahmin',
          con: 'Ertelemeyi, ödemesiz dönemleri veya gelire dayalı geri ödemeyi modellemez',
        },
        {
          pro: 'Yaşam masraflarını öğrenim ücretinin arkasına saklamak yerine görünür kılar',
          con: 'Sabit bir faiz oranı ve sabit aylık ödeme varsayar',
        },
        {
          pro: 'Yalnızca bir başlık toplamı bildirmek yerine borç gidişatını görsel olarak gösterir',
          con: 'Vergileri, enflasyonu veya gelecekteki maaş değişikliklerini hesaba katmaz',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Yıllık Faiz Oranı',
          definition: 'Yıllık borçlanma maliyetini temsil eder ve geri ödeme hesaplamaları için aylık orana dönüştürülür.',
        },
        {
          term: 'Anapara',
          definition: 'Burslar ve peşin ödemeler toplam maliyeti düşürdükten sonra fiilen ödünç alınan miktar.',
        },
        {
          term: 'Amortisman',
          definition: 'Zaman içinde önce faizi, ardından anaparayı karşılayan düzenli ödemeler yoluyla bir borcu ödemenin aylık süreci.',
        },
      ],
    },
    {
      type: 'message',
      title: 'En iyi sonraki adım',
      html: 'Kısa listenizi daraltmak için bu simülatörü kullanın, ardından nihai taahhütte bulunmadan önce kazananı fiili finansal yardım mektubuna, barınma gerçekliğine ve alanınız için beklenen erken kariyer gelirine karşı doğrulayın.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
