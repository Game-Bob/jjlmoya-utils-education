import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'ders-kredisi-ilerleme-ve-tahmini-not-ortalamasi-hesaplayici' as const;
const title = 'Ders Kredisi İlerleme ve Tahmini Not Ortalaması Hesaplayıcı';
const description = 'Akademik programınızı dönem dönem düzenleyin, gerçek ve tahmini not ortalamanızı takip edin ve kalan dersler için gereken ders notlarını simüle edin.';

const faqItems = [
  {
    question: 'Akademik planlamaya nasıl başlayabilirim?',
    answer: 'Panele doğrudan dönemler ekleyerek ve derslerinizi yazarak başlayabilirsiniz. Kredi değerlerini belirleyebilir, derslerin durumunu seçebilir ve notlarınızı kaydedebilirsiniz.',
  },
  {
    question: 'Gerçek GANO ile Tahmini GANO arasındaki fark nedir?',
    answer: 'Gerçek GANO, yalnızca tamamlanmış ve resmi notu açıklanmış derslerle hesaplanır. Tahmini GANO ise mevcut dönemdeki ve gelecekteki derslerinizin not tahminlerini dahil ederek genel ortalamanızı gösterir.',
  },
  {
    question: 'Gereken Not göstergesi neyi ifade eder?',
    answer: 'Hedeflediğiniz genel GANO ortalamasına ulaşabilmeniz için kalan tüm derslerden almanız gereken asgari ağırlıklı not ortalamasını hesaplar.',
  },
  {
    question: 'Verilerim güvenli bir şekilde saklanıyor mu?',
    answer: 'Evet. Tüm verileriniz tarayıcınızın yerel depolama alanında tutulur. Herhangi bir sunucuya yüklenmez. İstediğiniz zaman planınızı JSON dosyası olarak dışa aktarabilirsiniz.',
  },
];

const howToItems = [
  { name: 'Hedefleri belirleyin', text: 'Mezuniyet için gereken toplam kredi miktarını ve hedef ortalamanızı panelin üst kısmına girin.' },
  { name: 'Dönemleri oluşturun', text: 'Dönemler ekleyin ve her derse resmi kredi değerini atayarak listenizi oluşturun.' },
  { name: 'Not ve durum güncelleyin', text: 'Derslerin durumunu Tamamlandı, Devam Ediyor veya Planlandı olarak değiştirin ve notları girin.' },
  { name: 'Gereken başarıyı analiz edin', text: 'Hedefinize ulaşmak için gelecek dönemlerde almanız gereken notları inceleyin.' },
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
    degreeNameLabel: 'Program Adı',
    graduationCreditsLabel: 'Mezuniyet Kredisi Hedefi',
    targetGpaLabel: 'Hedef GANO',
    realGpaLabel: 'Gerçek GANO',
    projectedGpaLabel: 'Tahmini GANO',
    creditsCompletedLabel: 'Tamamlanan Kredi',
    requiredGradeLabel: 'Gereken Not (Kalanlar İçin)',
    addSemesterButton: 'Dönem Ekle',
    addCourseButton: 'Ders Ekle',
    exportPlanButton: 'Planı Dışa Aktar',
    importPlanButton: 'Planı İçe Aktar',
    semesterNamePlaceholder: 'Dönem adı (ör. Güz 1. Yıl)',
    courseNamePlaceholder: 'Ders adı',
    creditsPlaceholder: 'Kredi',
    gradePlaceholder: 'Not',
    statusCompleted: 'Tamamlandı',
    statusInProgress: 'Devam Ediyor',
    statusPlanned: 'Planlandı',
    importError: 'Akademik plan içe aktarılamadı. Lütfen dosya biçimini kontrol edin.',
    uploadHint: 'Tüm veriler tarayıcınızda yerel olarak saklanır. İçe ve dışa aktarma işlemleri tamamen cihazınızda gerçekleşir.',
    statusMessageSuccess: 'Hedef not ortalamanıza ulaşma yolundasınız.',
    statusMessageWarning: 'Hedefinize ulaşmak için kalan derslerinizde ortalama {grade} veya üzerinde not almalısınız.',
    statusMessageImpossible: 'Mevcut ders ayarlarıyla hedef not ortalamanıza ulaşmanız matematiksel olarak imkansızdır.',
    degreeNamePlaceholder: 'ör. Bilgisayar Mühendisliği Lisansı',
    deleteSemesterLabel: 'Dönemi Sil',
    deleteCourseLabel: 'Dersi Sil',
    semesterTitleTemplate: 'Dönem {num}',
  },
  seo: [
    { type: 'title', text: 'Üniversite ders kredisi planlama ve tahmini genel not ortalaması hesaplama', level: 2 },
    { type: 'paragraph', html: 'Akademik ilerlemenizi yönetmek için ders kredisi ve GANO takibi hayati önem taşır. Bu araç, gelecekteki derslerinizin notlarını simüle etmenize ve mezuniyet hedefinize odaklanmanıza imkan tanır.' },
    { type: 'summary', title: 'Takip etmeniz gereken temel akademik metrikler', items: [
      'Kazanılan kredileri mezuniyet için gereken toplam kredi ile karşılaştırın.',
      'Gerçek başarılarınızı gelecek dönem tahminlerinden ayrı tutarak plan yapın.',
      'Bursları korumak veya mezuniyet derecelerini yakalamak için gereken minimum not ortalamasını görün.',
    ] },
    {
      type: 'proscons',
      title: 'Not simülatörünün avantajları ve sınırları',
      items: [
        {
          pro: 'Gelecek dönemleri proaktif olarak tasarlamanıza yardımcı olur.',
          con: 'Simülasyon doğruluğu tamamen girdiğiniz tahmini notların gerçekçiliğine bağlıdır.',
        },
        {
          pro: 'Akademik hedefleriniz için almanız gereken ders notlarını net bir şekilde gösterir.',
          con: 'Üniversitenizin özel harf notu ağırlıklarını veya koşullu geçiş kurallarını otomatik hesaba katmaz.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
