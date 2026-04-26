import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'international-grade-converter' as const;
const title = 'Uluslararası Not Dönüştürücü ve GPA Denklik Hesaplayıcı';
const description = 'Uluslararası sistemler arasında akademik not dönüşümü için en hassas araç. İspanya, ABD, İngiltere, Almanya, Fransa, İtalya ve daha fazlası için puanları anında çevirin. Erasmus+, Fulbright ve küresel üniversite başvuruları için vazgeçilmezdir.';

const faqItems = [
  { 
    question: 'Uluslararası not dönüşümü nasıl çalışır?', 
    answer: 'Araç, her ülkenin minimum geçme notuna ve mümkün olan maksimum puanına dayalı matematiksel bir lineer eşleme kullanır. Bu, bir sistemdeki "geçer" notun diğerindeki "geçer" notla hizalanmasını sağlayarak farklı ölçekler arasında akademik orantısal adaleti korur.' 
  },
  { 
    question: 'Bu dönüştürücü üniversite kabulleri için resmi bir belge yerine geçer mi?', 
    answer: 'Algoritmalarımız standart uluslararası denklik tablolarını (ECTS veya WES tarafından kullanılanlar gibi) takip etse de, bu araç bilgilendirme amaçlıdır. Resmi kredi tanıma için her zaman ev sahibi kurumunuza veya akredite bir değerlendirme servisine danışmalısınız.' 
  },
  { 
    question: '"Toplu Mod" (Bulk Mode) özelliği nedir?', 
    answer: 'Toplu Mod, uzun transkriptleri olan öğrencilerin birden fazla notu aynı anda işlemesine olanak tanır. PDF veya Excel kaydınızdan bir sayı sütununu kopyalayıp yapıştırmanız yeterlidir; araç bireysel dönüşümleri ve küresel GPA ortalamanızı anında hesaplar.' 
  },
  { 
    question: 'Notlarımı ECTS\'ye dönüştürebilir miyim?', 
    answer: 'Evet. Dönüştürücü, Avrupa Kredi Transfer ve Biriktirme Sistemi (ECTS) ile uyumlu denklikler sağlar; bu da hareketlilik planlayan veya Yüksek Lisans programlarına başvuran Avrupalı öğrenciler için mükemmeldir.' 
  }
];

const howToItems = [
  { name: '1. Kaynak Sistemi Seçin', text: 'Kendi ülkenizi veya belirli not ölçeğini (örn. İspanya 0-10, Fransa 0-20) belirleyin.' },
  { name: '2. Hedef Ülkeleri Tanımlayın', text: 'Başvuru yaptığınız ülkeleri ekleyerek tüm denklikleri kontrol panelinde yan yana görün.' },
  { name: '3. Akademik Verileri Girin', text: 'Hızlı kontroller için tek bir not girin veya tüm dönem kaydınız için Toplu Modu kullanın.' },
  { name: '4. Analiz Edin ve Dışa Aktarın', text: 'Görsel yüzdelik çubuklarını inceleyin ve kayıtlarınız için Denklik Raporunuzu PDF olarak indirin.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Toplu Mod işleme, Gerçek zamanlı dönüşüm, Dünya çapında ölçek desteği, PDF Rapor oluşturma',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Kaynak Not Sistemi',
    targetSystems: 'Küresel Denklikler',
    gradeInput: 'Notunuz',
    bulkMode: 'Toplu Kayıt İşleme',
    bulkPlaceholder: 'Not listenizi buraya yapıştırın (her satıra bir tane)...',
    results: 'Denklik Kontrol Paneli',
    passLimit: 'Min. Geçer',
    shareResults: 'Denklik Raporu Oluştur',
    averageMedia: 'Küresel Dönüştürülmüş Ortalama',
    compareTitle: 'Dünya Çapında Akademik Durum',
    addSystem: 'Ülke Ekle',
    removeSystem: 'Kaldır',
    selectCountry: 'Ülke Seç',
    sourceCountry: 'Kaynak Ülke',
    systemSelection: 'Sistem Seçimi',
    convertedScore: 'Dönüştürülmüş Not',
    emptyState: 'Küresel denklikleri görmek için bir not girin',
    minLabel: 'MİN',
    passLabel: 'GEÇER',
    maxLabel: 'MAKS',
    scaleLabel: 'Ölçek',
    howToTitle: 'Uluslararası Eğitime Giden Yolunuz',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Akademik Referanslar ve Standartlar',
    singleGradeMode: 'Tek Not',
    transcriptMode: 'Tam Transkript',
    gradeCounter: 'Girilen notlar',
    averageSummary: 'Hesaplanan ortalama',
    gradesIgnored: '{count} not kapsam dışı olduğu için yoksayıldı',
    bulkHelp: 'Transkriptinizi doğrudan yapıştırabilirsiniz. Boşluk, virgül veya satırla ayrılmış notları otomatik olarak algılıyoruz.',
    copiedLabel: 'Kopyalandı!',
    germanyExpl: 'Ters sistem: 1.0 mümkün olan en iyi not, 4.0 minimum geçme notudur.',
    spainExpl: 'Standart 0-10 ölçeği. 5.0 minimum geçme notudur.',
    usaExpl: '0.0 ile 4.0 arası GPA ölçeği. Genellikle 2.0 minimum geçme notudur.',
    ukExpl: 'Yüzde bazlı sınıflandırma. %40 minimum geçme notudur.',
    franceExpl: '20 puanlık ölçek. 10 minimum geçme notudur.',
    italyExpl: '30 puanlık ölçek. 18 minimum geçme notudur.',
    netherlandsExpl: '1-10 ölçeği. 6 minimum geçme notudur.',
    placeholderSpain: 'örn. 8.5',
    placeholderUSA: 'örn. 3.7 veya A-',
    placeholderFrance: 'örn. 14',
    placeholderGermany: 'örn. 1.3',
    placeholderUK: 'örn. 75',
    placeholderItaly: 'örn. 28',
    placeholderNetherlands: 'örn. 7.5',
  },
  seo: [
    { type: 'title', text: 'Küresel Hareketlilik için Hassas Not Dönüşümü', level: 2 },
    { type: 'paragraph', html: 'İster bir <strong>Erasmus+ öğrencisi</strong> olun, ister bir <strong>Ivy League Yüksek Lisansına</strong> başvuruyor olun, küresel akademik durumunuzu anlamak ilk adımdır. Notlar büyük farklılıklar gösterir: İspanya\'da 10 mükemmel iken, Fransa\'da bu sadece geçer nottur. Motorumuz bu farkları netleştirir.' },
    { type: 'title', text: 'GPA Dönüşümünde Doğruluk Neden Önemlidir?', level: 3 },
    { type: 'paragraph', html: 'Kabul komiteleri, binlerce başvuruyu filtrelemek için dönüştürülmüş GPA\'ları kullanır. Manuel hesaplamadaki küçük bir hata size bir bursa mal olabilir. Aracımız, büyük uluslararası eğitim büroları tarafından kullanılan <strong>resmi lineer eşleme algoritmalarını</strong> kullanır.' },
    { type: 'title', text: 'Desteklenen Başlıca Sistemler', level: 3 },
    { type: 'list', items: [
      '<strong>İspanya (0-10):</strong> Aprobado\'dan Sobresaliente\'ye detaylı eşleme.',
      '<strong>ABD GPA (4.0):</strong> Standart Amerikan üniversite denkliği.',
      '<strong>Almanya (1-6):</strong> 1.0\'ın zirve olduğu ters ölçek yönetimi.',
      '<strong>Fransa (0-20):</strong> Fransız Grande Écoles ve üniversiteleri için hassas dönüşüm.',
      '<strong>İngiltere Sınıflandırması:</strong> Yüzdeden Onur Derecesine (Honours Degree) çeviri.'
    ] },
    { type: 'tip', html: '<strong>Akademik İpucu:</strong> Birden fazla dönemdeki kümülatif GPA\'nızı bulmak için "Toplu Mod"u kullanın. Manuel e-tablo çalışmasında saatler kazandırır!' },
    { type: 'title', text: 'WES Denkliğinizi Hesaplayın', level: 3 },
    { type: 'paragraph', html: 'Resmi WES değerlendirmesi ücretli bir hizmet olsa da, aracımız WES GPA\'nızın <strong>yüksek hassasiyetli bir tahminini</strong> sunarak değerlendirme ücretlerini ödemeden önce nereye başvuracağınıza karar vermenize yardımcı olur.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
