import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow';
const description = 'Zen odaklı zaman yönetimi ile üretkenliğinizde ustalaşın. Çalışma/mola döngülerini özelleştirin, bölünmeleri takip edin ve odaklanma kalıplarınızı gerçek zamanlı olarak görselleştirin.';

const faqItems = [
  { question: 'Pomodoro Tekniği nedir?', answer: 'Pomodoro Tekniği, odaklanılmış çalışma aralıklarını (genellikle 25 dakika) ve ardından gelen kısa molaları kullanan bir zaman yönetimi yöntemidir. Bu araç, tekniği özelleştirilebilir döngüler ve detaylı analizlerle geliştirir.' },
  { question: 'Çalışma/mola sürelerini özelleştirebilir miyim?', answer: 'Evet! Üç hazır ayardan (Tohum: 25/5, Ağaç: 50/10, Dağ: 90/15) birini seçin veya +5 ve -5 dakika düğmeleriyle süreleri anında ayarlayın.' },
  { question: 'Bölünme takibi ne işe yarar?', answer: 'Dikkat dağıtıcı düğmesine her tıkladığınızda, araç bir bölünme kaydeder. Bu, Odaklanma Puanınızı hesaplamanıza ve konsantrasyonunuzdaki kalıpları belirlemenize yardımcı olur.' },
  { question: 'Odaklanma Puanı nasıl hesaplanır?', answer: 'Odaklanma Puanı = ((Çalışma Süresi - Bölünmeler × 2) / Çalışma Süresi) × 100. Bu, bağlam değiştirmenin bilişsel maliyetini hesaba katar.' },
  { question: 'Oturum verilerimi dışa aktarabilir miyim?', answer: 'Evet. Oturum özetinizi Markdown olarak kopyalayabilir (Notion/Obsidian için harika) veya sosyal medyada görsel bir özet paylaşabilirsiniz.' },
];

const howToItems = [
  { name: 'Görevinizi girin', text: 'Üzerinde çalışmak üzere olduğunuz şeyi yazın. Bu, bağlamı ve niyeti korumanıza yardımcı olur.' },
  { name: 'Bir döngü seçin', text: 'Hızlı görevler için Tohum (25/5), standart çalışma için Ağaç (50/10) veya derin odaklanma için Dağ (90/15) seçin.' },
  { name: 'Başlatın ve odaklanın', text: 'Zamanlayıcı başlar. Duraklatmak için halkaya tıklayın. Gerektiğinde ayarlamak için +5/-5 kullanın. Sekme başlığı kalan süreyi gösterir.' },
  { name: 'Bölünmeleri takip edin', text: 'Dikkatiniz mi dağıldı? Dikkat Dağıtıcı Alarmı düğmesine tıklayın. Araç, Odaklanma Puanınızı hesaplamak için bunu kaydeder.' },
  { name: 'Hasadınızı gözden geçirin', text: 'Oturumunuzdan sonra istatistiklerinizi görün: Odaklanma Puanı, görev dağılımı ve üretkenliğinizin aylık ısı haritası.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: 'Ne üzerinde çalışacaksınız?',
    selectCycle: 'Odaklanma döngünüzü seçin',
    startButton: 'Başlat',
    seed: 'Tohum',
    tree: 'Ağaç',
    mountain: 'Dağ',
    timer: 'Zamanlayıcı',
    pauseButton: 'Duraklat',
    resumeButton: 'Devam Et',
    distractionButton: 'Dikkat Dağıtıcı Alarmı',
    addFiveMin: '+5dk',
    subtractFiveMin: '-5dk',
    focusMode: 'Odak',
    breakTime: 'Mola',
    sessionComplete: 'Oturum Tamamlandı',
    endSession: 'Oturumu Bitir',
    focusScore: 'Odaklanma Puanı',
    totalTime: 'Toplam Süre',
    interruptions: 'Bölünmeler',
    taskBreakdown: 'Görev Dağılımı',
    monthlyHeatmap: 'Aylık Aktivite',
    copyMarkdown: 'Markdown Kopyala',
    shareImage: 'Paylaş',
    wellnessMessage: 'Bir mola verin, bunu hak ettiniz',
    sessionSummary: 'Oturum Özeti',
    newSession: 'Yeni Oturum',
    copied: 'Kopyalandı!',
    unnamedTask: 'Adsız Görev',
    breakTimeNotification: 'Mola zamanı!',
    focusTimeNotification: 'Odaklanma zamanı!',
    interruptionsLabel: 'Bölünmeler:',
    studySession: 'Çalışma Oturumu',
  },
  seo: [
    { type: 'title', text: 'Pomodoro Flow ile Odaklanmada Ustalaşın', level: 2 },
    { type: 'paragraph', html: 'Üretkenlik daha çok çalışmakla değil, daha akıllıca çalışmakla ilgilidir. <strong>Pomodoro Flow</strong>, kanıtlanmış Pomodoro Tekniğini zen odaklı tasarım ve gerçek zamanlı analizlerle birleştirerek <em>nasıl</em> en iyi çalıştığınızı anlamanıza yardımcı olur.' },
    { type: 'title', text: 'Pomodoro Neden İşe Yarar?', level: 3 },
    { type: 'paragraph', html: 'İnsanlar 8 saatlik hiper-odaklanma maratonları için yaratılmamıştır. Beynimiz, odaklanılmış çalışma aralıklarını takip eden dinlendirici molalarla en iyi şekilde çalışır. Pomodoro Tekniği bunu basit bir ritüele dönüştürür: 25 dakika yoğun çalış, 5 dakika mola ver, tekrarla.' },
    { type: 'paragraph', html: 'Ancak her görev farklıdır. Bu nedenle Pomodoro Flow üç döngü sunar: Hızlı görevler için <strong>Tohum</strong> (25/5), günlük işleriniz için <strong>Ağaç</strong> (50/10) ve derin çalışma oturumları için <strong>Dağ</strong> (90/15).' },
    { type: 'title', text: 'Gerçek Güç: Bölünme Takibi', level: 3 },
    { type: 'paragraph', html: '50 dakika çalıştınız ve harika iş çıkardığınızı düşünüyorsunuz. Peki ya dikkatiniz 5 kez dağıldıysa? Her bölünme size bağlam değiştirme maliyeti yükler. Pomodoro Flow bunu tek bir düğmeyle (Dikkat Dağıtıcı Alarmı) takip eder ve konsantrasyonunuzun gerçek bir ölçüsü olan <strong>Odaklanma Puanınızı</strong> hesaplar.' },
    { type: 'paragraph', html: 'Zamanla, hangi görevlerin, günün hangi saatlerinin veya hangi ortamların en iyi odaklanmanıza izin verdiğini göreceksiniz. En yüksek verimi aldığınız işler burada gerçekleşir.' },
    { type: 'title', text: 'Yolunuza Çıkmayan Özellikler', level: 3 },
    { type: 'list', items: [
      'Zen-Tech Tasarım: Karanlık mod, glassmorphism ve gördüğünüz tek şey haline gelen merkezlenmiş bir zamanlayıcı.',
      'Canlı Sekme Başlığı: Tarayıcı sekmeniz geri sayımı gösterir, böylece bir bakışta zamanı bilirsiniz.',
      'Esnek Zamanlama: Yeniden başlatmadan çalışma/mola sürelerini anında ayarlayın.',
      'Oturum Dışa Aktarma: Özetinizi Markdown olarak kopyalayın veya sosyal medyada görsel bir paylaşım yapın.',
      'Aylık Isı Haritası: Üretkenlik kalıplarınızı görün. En yüksek odaklandığınız günler hangileri?',
    ] },
    { type: 'title', text: '"Akış Hali" Psikolojisi', level: 3 },
    { type: 'paragraph', html: 'Psikolog Mihaly Csikszentmihalyi <strong>akışı (flow)</strong>, zorluğun yetenekle buluştuğu ve zamanın kaybolduğu durum olarak tanımlar. Pomodoro Flow dikkat dağıtıcı unsurları ortadan kaldırır, net zaman sınırları belirler ve size anında geri bildirim verir; bunlar akış hali için gereken üç koşuldur.' },
    { type: 'tip', html: '<strong>Profesyonel İpucu:</strong> Akış halindeyken kendinizi bölmeyin. Zamanlayıcı çalarsa ancak bir düşüncenin ortasındaysanız, devam et düğmesine basın ve devam edin. Bölünmeleri takip etmenin güzelliği, dış kaos ile kendi ivmeniz arasındaki farkı görecek olmanızdır.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
