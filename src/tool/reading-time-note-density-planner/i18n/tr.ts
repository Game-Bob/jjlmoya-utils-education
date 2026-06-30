import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'okuma-suresi-ve-not-yogunlugu-planlayici' as const;
const title = 'Okuma Süresi ve Not Yoğunluğu Planlayıcı';
const description = 'Not alma süresini de dahil ederek akademik okumaların ne kadar süreceğini tahmin edin, ardından çalışma yükünü pratik oturumlara bölün.';

const faqItems = [
  { question: 'Not almak okuma süresini neden bu kadar çok etkiler?', answer: 'Akademik okuma nadiren sadece kelimeleri taramaktan ibarettir. Her vurgulama, özet, kenar notu veya hafıza kartı işlem süresi ekler. Not alma yoğunluğunu ayrı olarak planlamak, iyimser bir sayfa/saat tahmininin teslim gününden önceki gece birikmiş işe dönüşmesini engeller.' },
  { question: 'İyi bir sayfa/saat tahmini nedir?', answer: 'Yoğun ders kitapları için saatte 15 ila 25 sayfa yaygındır. Daha hafif okumalar için saatte 30 ila 50 sayfa gerçekçi olabilir. Materyal formüller, birincil kaynaklar veya yabancı terimler içeriyorsa daha düşük bir tahminde bulunun ve bir süreli okuma seansından sonra hızı ayarlayın.' },
  { question: 'Not yoğunluğunu nasıl seçmeliyim?', answer: 'Basit vurgulama veya kısa bir taslak için sayfa başına 1 ila 2 dakika, Cornell notları için sayfa başına 3 ila 5 dakika ve hafıza kartları oluştururken, örnek çözerken veya sentez yazarken sayfa başına 5 dakikadan fazla süre ayırın.' },
  { question: 'Bu planlayıcı müfredat programının yerini alabilir mi?', answer: 'Hayır. Okuma hacmini zamana ve oturumlara dönüştürmeye yardımcı olur, ancak son teslim tarihleri, seminerler, laboratuvarlar ve tekrar blokları yine de ana takviminize yerleştirilmelidir.' },
];

const howToItems = [
  { name: 'Okuma yükünü girin', text: 'Tamamlamanız gereken sayfa sayısını veya sayfa eşdeğeri okuma miktarını ekleyin.' },
  { name: 'Kullanılabilir süreyi ayarlayın', text: 'Son teslim tarihinden önce gerçekçi olarak harcayabileceğiniz toplam dakikayı girin.' },
  { name: 'Okuma hızını ve not yoğunluğunu tahmin edin', text: 'Sayfa/saat cinsinden bir hız seçin ve sayfa başına beklediğiniz ortalama not alma dakikasını belirtin.' },
  { name: 'Oturumlara bölün', text: 'Oturum başına düşen sayfa, dakika ve not yükünü görmek için oturum sayısını ayarlayın.' },
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

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Okunacak sayfa sayısı',
    minutesLabel: 'Kullanılabilir dakika',
    speedLabel: 'Okuma hızı, sayfa/saat',
    densityLabel: 'Not yoğunluğu, dakika/sayfa',
    sessionsLabel: 'Çalışma oturumları',
    totalTimeLabel: 'Toplam iş yükü',
    readingTimeLabel: 'Okuma',
    noteTimeLabel: 'Notlar',
    coverageLabel: 'Zaman kapsamı',
    pagesSessionLabel: 'Sayfa/oturum',
    minutesSessionLabel: 'Dakika/oturum',
    notesSessionLabel: 'Not dakikası/oturum',
    controlsAriaLabel: 'Okuma planı kontrolleri',
    minuteUnit: 'dk',
    hourUnit: 'sa',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Referanslar ve Akademik Kaynaklar',
    statusLabels: {
      comfortable: 'Sürdürülebilir plan',
      tight: 'Sıkışık ama yapılabilir',
      overloaded: 'Program aşırı yüklü',
    },
    resetButton: 'Sıfırla',
  },
  seo: [
    { type: 'title', text: 'Okuma Süresini Yalnızca Sayfalarla Değil Notlarla Planlayın', level: 2 },
    { type: 'paragraph', html: 'Pek çok öğrenci, sayfaları kabaca bir hıza bölerek okuma süresini tahmin eder ve en büyük gizli maliyeti unutur: notlar. Kırk sayfalık bir bölümü üstünkörü okursanız doksan dakikalık bir iş olabilir veya not alırsanız, özetlerseniz ve fikirleri gözden geçirme sorularına dönüştürürseniz üç saatlik bir iş olabilir. Bu planlayıcı, zaman programınızın gerçek akademik görevi yansıtması için okuma hızını not yoğunluğundan ayırır.' },
    { type: 'diagnostic', variant: 'info', title: 'Okuma planınız muhtemelen ne zaman çok iyimserdir', html: '<ul><li>Kullanılabilir süreniz not alma veya problem çözme dakikalarını değil, yalnızca ham okuma dakikalarını kapsıyorsa.</li><li>Romanlar, ders kitapları, araştırma makaleleri ve yasal vakalar için saatte aynı sayfa tahminini kullanıyorsanız.</li><li>Oturumlarınız normal dikkat sürenizden uzunsa ve bu nedenle son sayfalarda not kalitesi düşüyorsa.</li><li>Son teslim tarihi diğer ders işlerini içeriyorsa, ancak okuma planı her boş dakikanın tek bir derse ait olduğunu varsayıyorsa.</li></ul>' },
    { type: 'title', text: 'Gerçekçi Bir Sayfa/Saat Hızı Seçmek', level: 3 },
    { type: 'table', headers: ['Materyal türü', 'Başlangıç hızı', 'Planlama önerisi'], rows: [['Hafif tekrar veya tanıdık içerik', '40-60 sayfa/saat', 'Yalnızca terminolojiye zaten hakimseniz ve öğrenmek için değil, tazelemek için okuyorsanız kullanın.'], ['Standart ders kitabı bölümü', '20-35 sayfa/saat', 'Bölüm çözümlü örnekler, diyagramlar veya bölüm sonu kontrolleri içeriyorsa hızı azaltın.'], ['Yoğun teori, araştırma veya birincil kaynak', '8-20 sayfa/saat', 'Daha yavaş oturumlar planlayın ve bir özetleme bloğu ekleyin, çünkü anlama genellikle tekrar okumadan sonra gerçekleşir.']] },
    { type: 'tip', html: '<strong>Bir oturumdan sonra kalibre edin.</strong> Notlar dahil ilk on sayfayı süre tutarak okuyun. Hesaplayıcı planın rahat olduğunu söylüyor ancak süreli oturum aksini gösteriyorsa, süreli oturuma güvenin ve hızınızı düşürün.' },
    { type: 'title', text: 'Not Yoğunluğu Ne Anlama Geliyor', level: 3 },
    { type: 'paragraph', html: 'Not yoğunluğu, okuma sırasında veya sonrasında her sayfayı işlemek için harcanan ortalama süredir. Düşük yoğunluklu bir yaklaşım, bir kenar notu ve bir vurgulama anlamına gelebilir. Yüksek yoğunluklu bir yaklaşım ise Cornell notları, kısa bir özet, bir soru listesi ve üç hafıza kartı anlamına gelebilir. Doğru değer değerlendirme stiline bağlıdır: olgusal testler hatırlatma kartlarına, kompozisyon sınavları argüman haritalarına ve sayısal dersler çözümlü örneklere ihtiyaç duyar.' },
    { type: 'comparative', title: 'Hafif notlar vs derin notlar', columns: 2, items: [{ title: 'Hafif notlar', description: 'Daha hızlı tamamlanır, yüzeysel okuma için yararlıdır, ancak daha çabuk unutulur ve daha sonra üzerinden tekrar yapmak zordur.', points: ['Tanıdık konular için en iyisi', 'Daha düşük acil iş yükü', 'Daha zayıf tekrar kaynağı'] }, { title: 'Derin notlar', description: 'Daha yavaş tamamlanır, bilgilerin doğru hatırlanması gereken sınav hazırlığı, seminerler ve yazılı ödevler için en iyi yöntemdir.', highlight: true, points: ['Sınav içerikleri için önerilir', 'Daha yüksek acil iş yükü', 'Çok güçlü tekrar materyali'] }] },
    { type: 'summary', title: 'Pratik Bir Planlama Kuralı', items: ['Mümkünse normal okuma oturumlarını 75 dakikanın altında tutun.', 'Notlar okuma süresini aşıyorsa görevi iki aşamaya bölün: önce okuyun, sonra sentezleyin.', 'Son teslim tarihine kadar yeni sayfalar atamak yerine son oturumu pekiştirmeye bırakın.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
