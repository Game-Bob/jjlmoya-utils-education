import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'transkript-gno-cozucu' as const;
const title = 'Transkript GNO Ayrıştırıcı ve Hesaplayıcı';
const description = 'Üniversite transkript metninizi kopyalayıp yapıştırarak genel not ortalamanızı (GNO) ve ağırlıklı not ortalamanızı anında hesaplayın. Tamamen çevrimdışı çalışır.';

const faqItems = [
  {
    question: 'Otomatik ayrıştırma nasıl çalışır?',
    answer: 'Yapıştırılan metni satır satır tarar; boşluklar, sekmeler veya noktalama işaretlerine göre sütunlara böler. Ardından, hangi sütunun ders adlarını, notları ve kredileri içerdiğini otomatik olarak belirlemek için değerleri analiz eder.'
  },
  {
    question: 'Akademik verilerim güvende mi?',
    answer: 'Evet, tamamen. Ayrıştırma ve GNO hesaplama işlemleri tamamen cihazınızdaki tarayıcı içinde çalışır. Hiçbir veri herhangi bir sunucuya gönderilmez, böylece transkriptiniz %100 gizli kalır.'
  },
  {
    question: 'Sütunlar yanlış eşleştirilirse ne olur?',
    answer: 'Bunları kolayca düzenleyebilirsiniz. Tespit edilen tablodaki her sütunun üstünde, o sütunun Ders Adı, Not, Kredi değerlerini mi temsil ettiğini yoksa Yoksayılması mı gerektiğini manuel olarak seçebileceğiniz bir açılır menü başlığı bulunur.'
  },
  {
    question: 'Harfli notları ve farklı not sistemlerini destekliyor mu?',
    answer: 'Evet, standart harfli notların (A, B, C, D, F) yanı sıra sayısal not sistemlerini de (0-10, 0-20, 0-100) destekler. Üniversite sisteminize uyması için maksimum not sınırını yapılandırabilirsiniz.'
  }
];

const howToItems = [
  {
    name: 'Transkriptinizi kopyalayın',
    text: 'Üniversite portalınıza veya not belgenize gidin, metni vurgulayın ve kopyalayın.'
  },
  {
    name: 'Metni yapıştırın',
    text: 'Kopyalanan metni bu aracın metin alanına yapıştırın.'
  },
  {
    name: 'Doğrulayın ve eşleştirin',
    text: 'Otomatik olarak oluşturulan tabloyu gözden geçirin. Gerekirse sütun rollerini başlıkları kullanarak ayarlayın.'
  },
  {
    name: 'GNO\'nuzu alın',
    text: 'Hesaplanan ağırlıklı GNO\'nuzu ve toplam kredinizi en altta anında görün.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Transkriptinizi buraya yapıştırın',
    pasteAreaPlaceholder: 'Moodle, Canvas veya üniversite transkript sayfanızdan kopyalanan metni yapıştırın...',
    parsedTitle: 'Ayrıştırılan Transkript Verileri',
    columnSelect: 'Sütunu eşleştir',
    subjectName: 'Ders/Konu Adı',
    grade: 'Not',
    credits: 'Kredi',
    ignore: 'Yoksay',
    gpaResult: 'Genel Not Ortalaması (GNO)',
    totalCredits: 'Toplam Kredi',
    emptyState: 'Satırları burada önizlemek ve düzenlemek için transkript verilerinizi yukarıya yapıştırın.',
    scaleLabel: 'Not Sistemi Limiti',
    customScale: 'Maksimum Not Sistemi',
    exampleSubject: 'Analiz I',
    newSubjectPlaceholder: 'Yeni ders',
    clearBtn: 'Metni temizle',
    errorFormat: 'Net sütunlar tespit edemedik. Bir tablo veya liste biçimini kopyalayıp yapıştırmayı deneyin.'
  },
  seo: [
    { type: 'title', text: 'Herhangi bir Transkriptten GNO Nasıl Ayrıştırılır ve Hesaplanır', level: 2 },
    { type: 'paragraph', html: 'Akademik ortalamanızı hesaplamak, düzinelerce dersin manuel olarak girilmesini gerektirmemelidir. Bu araç, GNO\'nuzu hesaplamak için herhangi bir düz metin kopyalama-yapıştırma işleminden veri çıkarır.' },
    { type: 'title', text: 'Neden düz metin transkript ayrıştırıcısı kullanmalısınız?', level: 3 },
    { type: 'paragraph', html: 'Üniversite portalları genellikle not raporlarını karmaşık HTML tabloları şeklinde biçimlendirir. Bunları doğrudan bu araca kopyalayıp yapıştırmak, sezgisel motorumuzun dersleri, notları ve kredileri yazım hatası olmadan anında ayıklamasını sağlar.' },
    { type: 'title', text: 'Güvenli, özel ve hızlı', level: 3 },
    { type: 'paragraph', html: 'Ayrıştırma motoru JavaScript içinde yerel olarak çalıştığından, akademik geçmişiniz tarayıcınızdan asla çıkmaz. Yüzlerce satır içeren sayfaları milisaniyeler içinde ayrıştırabilirsiniz.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
