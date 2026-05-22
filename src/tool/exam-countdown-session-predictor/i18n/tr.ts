import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-turkish' as const;
const title = 'Sınav Geri Sayım ve Çalışma Seansı Planlayıcı';
const description = 'Sınav gününe eksiksiz hazırlanmak için günlük çalışma hızınızı tam olarak hesaplayın. Kaynak miktarını girin, dinlenme günlerini belirleyin ve size özel çalışma takvimi oluşturun.';

const faqItems = [
  { question: 'Sınavdan önceki son gece sabahlamak yerine her gün çalışmak neden daha etkilidir?', answer: 'Bilimsel araştırmalar, aralıklı öğrenmenin (çalışma seanslarını zamana yaymanın) bilgilerin uzun vadeli hafızada çok daha iyi saklanmasını sağladığını ve son günlerde her şeyi ezberlemeye çalışmaya kıyasla sınav kaygısını önemli ölçüde azalttığını göstermektedir.' },
  { question: 'Tekrar tamponu ne işe yarar?', answer: 'Tekrar tamponu, sınavdan hemen önceki belirli sayıda günü yalnızca genel tekrarlara ayırır. Planlayıcı bu günlerde yeni bir konu atamaz, böylece öğrendiklerinizi pekiştirmek için gerekli zamanı bulursunuz.' },
  { question: 'Kişiselleştirilmiş dinlenme günleri çalışma hızımı nasıl etkiler?', answer: 'Haftalık izin günü veya belirli bir tarih olarak bir günü takvimden çıkardığınızda, planlayıcı kalan çalışma materyalini diğer günlere dağıtır. Sınava zamanında yetişmeniz için günlük hedefinizi hafifçe artırır.' },
  { question: 'Bir dinlenme gününü tekrar çalışma gününe dönüştürebilir miyim?', answer: 'Evet. Çalışma takviminizdeki herhangi bir günü gerçek zamanlı olarak dinlenme veya çalışma günü olarak değiştirebilir ya da hariç tutulan tarihleri listeden kaldırarak anında yeniden hesaplama yapabilirsiniz.' },
];

const howToItems = [
  { name: 'Sınav tarihinizi girin', text: 'Takvim seçiciden yaklaşan sınavınızın tarihini belirleyin.' },
  { name: 'Toplam çalışma materyalini girin', text: 'Sayfa, konu veya soru sayısı gibi çalışmanız gereken toplam materyal miktarını yazın.' },
  { name: 'Çalışma düzeninizi ve tampon günleri belirleyin', text: 'Haftalık dinlenme günlerinizi seçin ve sınav öncesi tekrar tamponu süresini ayarlayın.' },
  { name: 'Düzenleyin ve takip edin', text: 'Çalışma takviminizdeki günleri doğrudan dinlenme günü olarak işaretleyip kaldırarak planınızı günlük yaşamınıza uyarlayın.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Çalışma Planlayıcı & Geri Sayım',
    examDateLabel: 'Sınav Tarihi',
    materialLabel: 'Toplam Materyal (Sayfa / Konu)',
    materialUnitLabel: 'Materyal Birimi',
    progressLabel: 'Şimdiye Kadar Tamamlanan',
    weeklyScheduleLabel: 'Haftalık Çalışma Günleri',
    reviewBufferLabel: 'Tekrar Tamponu (Gün)',
    excludedDatesLabel: 'Özel Dinlenme Günleri',
    dailyPaceLabel: 'Günlük Çalışma Hızı',
    daysLeftLabel: 'Kalan Gün',
    studyDaysLabel: 'Çalışma Günü',
    bufferDaysLabel: 'Tampon Gün',
    scheduleTitle: 'Kişisel Çalışma Takviminiz',
    resetButton: 'Varsayılana Sıfırla',
    addExclusionButton: 'Dinlenme Günü Ekle',
    daysOfWeek: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    dayTypes: {
      study: 'Çalışma Günü',
      rest: 'Dinlenme Günü',
      review: 'Tekrar Tamponu',
      exam: 'Sınav Günü',
    },
    units: {
      pages: 'Sayfa',
      chapters: 'Bölüm',
      exercises: 'Egzersiz',
      modules: 'Modül',
      topics: 'Konu',
    },
    noStudyDaysError: 'Çalışacak gününüz kalmadı! Haftalık çalışma günlerinizi ve tekrar tamponu ayarlarınızı kontrol edin.',
    examInPastError: 'Sınav tarihi gelecekte bir gün olmalıdır.',
    noMaterialError: 'Lütfen sıfırdan büyük bir toplam materyal miktarı girin.',
    scheduleTableHeader: {
      date: 'Tarih',
      day: 'Gün',
      type: 'Durum',
      target: 'Günlük Hedef',
      cumulative: 'Toplam İlerleme',
      action: 'Hızlı İşlemler',
    },
    markAsRest: 'Dinlenme Olarak İşaretle',
    markAsStudy: 'Çalışma Olarak İşaretle',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Referanslar & Akademik Kaynaklar',
  },
  seo: [
    { type: 'title', text: 'Maksimum Akılda Tutma İçin Çalışma Seansları Nasıl Planlanır', level: 2 },
    { type: 'paragraph', html: 'Sınava hazırlanmak, son gece saatlerce çalışmaktan ziyade çalışma yükünü zaman içinde nasıl dağıttığınızla ilgilidir. Kendinizi doğru ayarlamak, zihinsel tükenmişliği önlemek, hatırlama yeteneğini geliştirmek ve tüm materyali panik yapmadan bitirmek için son derece önemlidir.' },
    { type: 'title', text: 'Aralıklı Öğrenme ve Aralıklı Tekrar Bilimi', level: 3 },
    { type: 'paragraph', html: 'Beynimiz aralıklarla çalışıldığında en iyi öğrenmeyi gerçekleştirir. Çalışma seanslarını birkaç haftaya yaydığınızda, beyninizin bilgileri pekiştirerek daha güçlü sinirsel bağlar kurmasına olanak tanırsınız. Aralıklı tekrar, zihinsel yorgunluğu önler ve bilgilerin kısa süreli bellekten uzun süreli belleğe aktarılmasını kolaylaştırır.' },
    { type: 'paragraph', html: 'Ebbinghaus\'un Unutma Eğrisi teorisine göre, bilgileri aktif olarak tekrar etmediğimiz sürece zamanla unuturuz. Planlanmış aralıklar sıfırlama görevi görerek unutma hızını yavaşlatır ve derinlemesine kavramsal anlayış oluşturur.' },
    { type: 'title', text: 'Son Tekrar İçin Tampon Süre Belirleme', level: 3 },
    { type: 'paragraph', html: 'Sık yapılan hatalardan biri, sınav gününe kadar yeni konular çalışmaktır. Çalışma planının sonuna (genellikle sınavdan önceki 2 ila 5 gün) bir tekrar tamponu koymak, deneme sınavları çözmenize, özetleri okumanıza ve eksikleri kapatmanıza imkan tanır. Ayrıca sınav günü dinç olmanız için gereken uykuyu almanızı sağlar.' },
    { type: 'title', text: 'Esnek Planlamanın Gücü', level: 3 },
    { type: 'paragraph', html: 'Statik çalışma planları genellikle hayatın beklenmedik akışı karşısında başarısız olur. Birkaç sayfa geride kaldığınızda sabit plan geçerliliğini yitirir. Dinamik bir hesaplayıcı ise günlük hedeflerinizi gerçek zamanlı olarak yeniden hesaplayarak ufak gecikmelerin getirdiği stresi tamamen ortadan kaldırır.' },
    { type: 'list', items: [
      'Hesaplamaların doğru kalması için ilerlemenizi düzenli olarak girin.',
      'Beklenmedik plan çakışmaları olduğunda dinlenme günlerinizi ayarlayın.',
      'Gecikmeleri tek bir günde kapatmaya çalışmak yerine her gün dengeli bir hızda devam edin.'
    ] },
    { type: 'title', text: 'Esneklik: Dinlenme Günlerini Bilinçli Olarak Dahil Etme', level: 3 },
    { type: 'paragraph', html: 'Dinlenmek bir ödül değil, öğrenme sürecinin vazgeçilmez bir parçasıdır. Takviminize bilinçli olarak dinlenme günleri ekleyerek zihinsel yorgunluğu önlersiniz. Bu hesaplayıcı, kalan çalışma yükünü diğer günlere otomatik olarak yayar.' },
    { type: 'tip', html: '<strong>Beklenmedik durumlara hazırlıklı olun.</strong> Haftada en az bir dinlenme günü bırakın. Bu bir emniyet supabıdır. Hastalandığınızda veya acil bir işiniz çıktığında, o günü ana çalışma planınızı bozmadan arayı kapatmak için kullanabilirsiniz.' },
    { type: 'title', text: 'Çalışma Hızınızı Manuel Olarak Nasıl Hesaplarsınız', level: 3 },
    { type: 'paragraph', html: 'Günlük çalışma hedefinizi elle hesaplamak için basit bir matematiksel formül kullanabilirsiniz. İlk olarak, tamamladığınız sayfa veya konuları toplam hedeften çıkararak kalan iş yükünüzü bulun. Ardından, sınava kalan gün sayısından dinlenme günlerinizi ve tekrar tamponu günlerinizi çıkarın. Son olarak, kalan iş yükünü mevcut çalışma günlerine bölün.' },
    { type: 'paragraph', html: 'Örneğin, çalışmanız gereken 400 sayfa varsa, 50 sayfasını bitirdiyseniz, sınava 20 gün kalmışsa, 4 gün dinlenmeyi planlıyorsanız ve 2 günlük tekrar tamponu istiyorsanız: Kalan iş yükünüz 350 sayfa ve çalışma gününüz 14\'tür. Günlük çalışma hızınız 350 bölü 14, yani tam olarak günde 25 sayfadır.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
