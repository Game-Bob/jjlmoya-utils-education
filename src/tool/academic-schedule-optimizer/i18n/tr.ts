import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'akademik-program-optimizasyonu' as const;
const title = 'Akademik Ders Programı Optimizasyonu';
const description = 'Görsel bir haftalık ders programı oluşturun, dersleri renklendirin, çakışan saatleri tespit edin ve ders programınızı .ics takvim dosyası olarak dışa aktarın.';

const faqItems = [
  {
    question: 'Çakışma dedektörü nasıl çalışır?',
    answer: 'Her ders bloğunun bir günü, başlangıç saati ve süresi vardır. Araç, her ders bloğu çiftini karşılaştırır ve aynı günü paylaştıklarında ve zaman aralıkları kesiştiğinde onları işaretler.'
  },
  {
    question: 'Dersleri doğrudan takvim üzerinde taşıyabilir miyim?',
    answer: 'Evet. Yeni bir haftalık düzeni test etmek için bir ders bloğunu başka bir gün sütununa sürükleyip bırakın. Çakışma durumu taşımadan hemen sonra güncellenir.'
  },
  {
    question: '.ics dışa aktarımı neleri içerir?',
    answer: 'Dışa aktarma işlemi, her dersi ders adı, sınıf, başlangıç saati ve bitiş saati dahil olmak üzere bir etkinlik olarak içeren standart bir iCalendar dosyası oluşturur. Bunu birçok takvim uygulamasına aktarabilirsiniz.'
  },
  {
    question: 'Dersleri neden renklerle kodlamalıyım?',
    answer: 'Renkler, yoğun bir ders programını okumayı kolaylaştırır. Laboratuvarlar, teorik dersler, seminerler veya yüksek efor gerektiren dersler için farklı renkler kullanın, böylece çakışmalar ve yoğun günler daha hızlı fark edilir.'
  }
];

const howToItems = [
  { name: 'Ders detaylarını ekleyin', text: 'Ders adını, sınıfı, günü, başlangıç saatini, süreyi ve rengi girin.' },
  { name: 'Blokları haftalık ızgaraya yerleştirin', text: 'Her dersin haftalık programınıza nasıl uyduğunu görmek için oluşturulan blokları kullanın.' },
  { name: 'Çakışmaları çözün', text: 'Vurgulanan çakışma bloklarını bulun, ardından çakışma paneli temizlenene kadar dersleri taşıyın veya düzenleyin.' },
  { name: 'Takviminizi dışa aktarın', text: '.ics dosyasını indirin ve Google Takvim, Apple Takvim, Outlook veya başka bir takvim uygulamasına aktarın.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'TRY' },
};

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Ders',
    roomLabel: 'Sınıf',
    dayLabel: 'Gün',
    startLabel: 'Başlangıç',
    durationLabel: 'Süre',
    colorLabel: 'Renk',
    addClass: 'Ders ekle',
    saveClass: 'Dersi kaydet',
    newClass: 'Yeni ders',
    exportICS: '.ics Dışa Aktar',
    conflictLabel: 'Program Çakışmaları',
    noConflicts: 'Çakışma tespit edilmedi',
    removeLabel: 'Dersi kaldır',
    editHint: 'Düzenlemek için bir ders seçin veya başka bir güne ve saate sürükleyin.',
    weekendDaysLabel: 'Hafta sonu günleri',
    saturdayLabel: 'Cumartesi',
    sundayLabel: 'Pazar',
    weekDayLabels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum'],
    weekendDayShortLabels: ['Cmt', 'Paz'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 sa', '2 sa', '3 sa'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Kalkülüs',
    defaultRoom: 'Sınıf 204',
    defaultNewSubject: 'Yeni ders',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Kalkülüs', room: 'Sınıf 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Edebiyat', room: 'Laboratuvar B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Fizik', room: 'Oditoryum', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'akademik-program.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'çakışma',
    overlapPlural: 'çakışma',
    detectedLabel: 'tespit edildi',
    classEditorAriaLabel: 'Ders editörü',
    weeklyScheduleAriaLabel: 'Haftalık program',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Referanslar ve Takvim Standartları',
  },
  seo: [
    { type: 'title', text: 'Gerçekten İşe Yayan Haftalık Bir Ders Programı Nasıl Hazırlanır', level: 2 },
    { type: 'paragraph', html: 'İyi bir ders programı dersleri listelemekten daha fazlasını yapar. Haftanızın nerede aşırı yüklendiğini, hangi günlerin boşluklarla bölündüğünü ve zorunlu iki dersin çakışıp çakışmadığını gösterir. Görsel bir akademik ders programı düzenleyici, bu sorunları kaçırılan derslere, ulaşım telaşına veya imkansız kayıt seçimlerine dönüşmeden önce görünür kılar.' },
    { type: 'summary', title: 'Bir ders programını kesinleştirmeden önce kontrol edilmesi gerekenler', items: [
      'Aynı gün içinde zorunlu iki ders çakışmamalıdır.',
      'Hafta sonu dersleri olan eğitim sistemleri için Cumartesi ve Pazar günleri etkinleştirilebilir.',
      'Laboratuvarlar, seminerler ve teorik dersler hızlı tarama için farklı renkler kullanır.',
      'Ağır dersler, dinlenme süresi olmadan arka arkaya yığılmaz.',
      'Son program, günlük takvim uygulamanıza aktarılabilir.'
    ] },
    { type: 'title', text: 'Görsel Izgaralar Neden Düz Listelerden Daha İyidir', level: 3 },
    { type: 'paragraph', html: 'Düz ders listeleri, her dersi haftanın geri kalanından ayırdığı için zaman baskısını gizler. Bir ızgara ise yoğunluğu hemen ortaya koyar. Pazartesi gününün çok fazla ders saati olup olmadığını, bir teorik dersin bir laboratuvarı engelleyip engellemediğini, Cumartesi dersinin haftanın ritmini değiştirip değiştirmediğini ve aynı sınıfın veya ulaşım düzeninin gizli sürtüşmeler yaratıp yaratmadığını görebilirsiniz.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Ders listesi', description: 'Kayıt kodları için iyidir, ancak haftalık baskıyı tespit etmek için zayıftır.' },
      { title: 'Haftalık ızgara', description: 'Ritmi, boşlukları ve çakışmaları bir bakışta anlamak için en iyisidir.', highlight: true },
      { title: 'Yalnızca takvim uygulaması', description: 'Planlamadan sonra kullanışlıdır, ancak birçok alternatifle deneme yapmak için daha yavaştır.' }
    ] },
    { type: 'title', text: 'Çakışma Tespiti Nasıl Çalışır', level: 3 },
    { type: 'paragraph', html: 'İki ders, aynı gün gerçekleştiğinde ve zaman aralıkları kesiştiğinde çakışır. Örneğin, 10:00 - 12:00 saatleri arasındaki bir ders ile 11:00 - 13:00 saatleri arasındaki bir seminer çakışır çünkü her ikisi de 11:00 saatini işgal eder. Araç, her bloğu diğer her blokla karşılaştırır ve çakışmanın her iki tarafını da işaretler.' },
    { type: 'table', headers: ['Ders A', 'Ders B', 'Sonuç'], rows: [
      ['Pazartesi 09:00-11:00', 'Pazartesi 11:00-13:00', 'Biri bittiğinde diğeri başladığı için çakışma yok.'],
      ['Salı 10:00-12:00', 'Salı 11:00-13:00', 'Zaman aralıkları kesiştiği için çakışma var.'],
      ['Çarşamba 09:00-11:00', 'Perşembe 09:00-11:00', 'Günler farklı olduğu için çakışma yok.']
    ] },
    { type: 'title', text: 'Akademik Planlama Sinyali Olarak Renk Kullanımı', level: 3 },
    { type: 'paragraph', html: 'Renk sadece dekorasyon değildir. Ders türünü, zorluğu, kampüs konumunu veya enerji seviyesini kodlayabilir. Tutarlı bir palet, özellikle ders kaydı sırasında alternatif şubeleri karşılaştırırken programın baskı altında okunmasını kolaylaştırır.' },
    { type: 'tip', html: '<strong>Renk anlamlarını sabit tutun.</strong> Örneğin, laboratuvarlar için bir renk ailesi, teorik dersler için başka bir renk ailesi ve seyahat veya ön hazırlık gerektiren dersler için bir uyarı rengi kullanın.' },
    { type: 'title', text: 'Takvim Uygulamalarına Aktarma', level: 3 },
    { type: 'paragraph', html: '.ics formatı, standart iCalendar takvim değişim formatıdır. Ders programınızı dışa aktarmak, dersleri Google Takvim, Apple Takvim, Outlook ve birçok okul takvim sistemine aktarmanıza olanak tanır. İçe aktardıktan sonra hatırlatıcılar, seyahat süresi, yinelenen kurallar ve kişisel çalışma blokları ekleyebilirsiniz.' },
    { type: 'diagnostic', variant: 'warning', title: 'İçe aktarmadan önce', html: 'Hafta başlangıç tarihinin aktarmak istediğiniz hafta ile eşleştiğinden emin olun, takvim uygulamanızdaki saat dilimlerini gözden geçirin ve içe aktarılan etkinliklerin mevcut ders takvimini çoğaltmadığını onaylayın.' },
    { type: 'title', text: 'Ders Kaydı İçin Pratik Bir İş Akışı', level: 3 },
    { type: 'list', items: [
      'Seçmeli dersleri eklemeden önce zorunlu dersleri ekleyin ve sert çakışmaları çözün.',
      'Okul takviminiz hafta sonu eğitimini içeriyorsa Cumartesi veya Pazar gününü etkinleştirin.',
      'Teorik dersleri, laboratuvarları, seminerleri ve bağımsız çalışmaları ayırmak için renk kullanın.',
      'Alternatif şubeleri hızlı bir şekilde karşılaştırmak için blokları günler arasında sürükleyin.',
      'Yemekler, ulaşım süresi ve dinlenme blokları için görünür boşluklar bırakın.',
      'Yalnızca çakışma paneli temizlendikten sonra dışa aktarın.'
    ] },
    { type: 'message', title: 'Planlama yinelemeli bir süreçtir', html: 'İlk sürümü taslak olarak kabul edin. En iyi ders programı genellikle çakışmaları test ettikten, ders formatlarını karşılaştırdıktan ve haftalık ritmin sürdürülebilir olup olmadığını kontrol ettikten sonra ortaya çıkar.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
