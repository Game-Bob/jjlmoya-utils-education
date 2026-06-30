import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'kavram-haritasi-olusturucu' as const;
const title = 'Kavram Haritası Oluşturucu';
const description = 'Girintili notları, sürüklenebilir düğümler, daraltılabilir dallar, yakınlaştırma kontrolleri ve SVG veya PNG dışa aktarma özelliklerine sahip etkileşimli bir kavram haritasına dönüştürün.';

const faqItems = [
  { question: 'Kavram haritası oluşturucuya ne tür metinler yapıştırabilirim?', answer: 'Basit bir anahat kullanın: her satıra bir fikir, alt başlıklar için girinti. Madde işaretleri, numaralandırılmış listeler, sekmeler ve boşluklar kabul edilir; bu nedenle belgelerden, ders özetlerinden veya çalışma uygulamalarından kopyalanan notlar genellikle manuel yeniden biçimlendirme yapılmadan dönüştürülebilir.' },
  { question: 'En temiz kavram haritası için girintiyi nasıl biçimlendirmeliyim?', answer: 'Merkezi konuyu ilk satıra yerleştirin, ardından destekleyici fikirleri altına girintileyin. Aynı düzeydeki fikirleri aynı girinti derinliğinde hizalanmış olarak tutun. Bir düğüm yanlış üst öğenin altında görünüyorsa, genellikle düzeltilmesi gereken şey girinti düzeyidir.' },
  { question: 'Harita oluşturulduktan sonra düğümleri taşıyabilir miyim?', answer: 'Evet. Boşlukları ayarlamak, yoğun dalları ayırmak veya bir ilişkiyi vurgulamak için tuval üzerindeki herhangi bir düğümü sürükleyin. Ayrıca dışa aktarmadan önce tuvali kaydırabilir, yakınlaştırıp uzaklaştırabilir ve dalları daraltabilirsiniz.' },
  { question: 'SVG ve PNG dışa aktarma arasındaki fark nedir?', answer: 'SVG düzenlenebilir bir formattır ve vektör editörlerinde, slaytlarda ve belgelerde temiz bir şekilde ölçeklenir. PNG ise sınıf platformlarına, mesajlara, çalışma sayfalarına ve hızlı tekrar kartlarına yüklenmesi daha kolay olan sabit bir görüntüdür.' },
  { question: 'Bu araç çapraz bağlantıları otomatik olarak çıkarır mı?', answer: 'Hayır. Girintiden bir hiyerarşi oluşturur. Bu, çıktıyı tahmin edilebilir kılar, ancak nedenler, tezatlar veya geri besleme döngüleri gibi yatay bağlantılar SVG dışa aktarımından sonra manuel olarak gözden geçirilmelidir.' },
];

const howToItems = [
  { name: 'Bir anahat yapıştırın veya yazın', text: 'Her satıra bir kavram girin ve alt fikirleri üst konularının altına girintileyin.' },
  { name: 'Oluşturulan yapıyı gözden geçirin', text: 'Hiyerarşinin konunun nasıl çalışılması gerektiğiyle eşleşip eşleşmediğini kontrol etmek için canlı tuvali kullanın.' },
  { name: 'Tuvali düzenleyin', text: 'Görsel gruplama netleşene kadar düğümleri sürükleyin, kalabalık dalları daraltın ve yakınlaştırın.' },
  { name: 'Çalışma materyali için dışa aktarın', text: 'Düzenleme için SVG veya hızlı paylaşım, çalışma sayfaları ve slayt sunumları için PNG indirin.' },
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

export const content: ToolLocaleContent<ConceptMapTextExporterUI> = {
  slug,
  title,
  description,
  ui: {
    inputLabel: 'Girintili anahat',
    sampleButton: 'Örneği yükle',
    clearButton: 'Temizle',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Yakınlaştır',
    zoomOut: 'Uzaklaştır',
    resetView: 'Görünümü sıfırla',
    exportSvg: 'SVG Dışa Aktar',
    exportPng: 'PNG Dışa Aktar',
    collapseBranch: 'Dalı daralt',
    expandBranch: 'Dalı genişlet',
    emptyStateTitle: 'Henüz kavram yok',
    emptyStateText: 'Haritayı oluşturmak için her satıra bir fikir yazın ve alt konuları girintileyin.',
    nodeCount: 'kavramlar',
    depthCount: 'seviyeler',
    branchCount: 'bağlantılar',
    levelPrefix: 'S',
    untitledNodeLabel: 'Başlıksız',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'kavram-haritasi.svg',
    pngFilename: 'kavram-haritasi.png',
    sampleOutline: `Araştırma projesi
  Soru
    Hangi problem araştırılıyor?
    Kimler etkileniyor?
  Kanıt
    Birincil kaynaklar
    Akademik makaleler
    Veri seti
  Yöntem
    Örnekleme planı
    Analiz adımları
  Sonuç
    Ana bulgu
    Sınırlılıklar
    Sonraki araştırma sorusu`,
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Referanslar ve Akademik Kaynaklar',
  },
  seo: [
    { type: 'title', text: 'Girintili Notları Kavram Haritasına Dönüştürün', level: 2 },
    { type: 'paragraph', html: 'Bir konu artık sadece bir gerçekler listesi olmaktan çıktığında kavram haritası yararlıdır. Hangi fikirlerin merkezi olduğunu, hangi detayların onları desteklediğini ve bir öğrencinin kategorileri, örnekleri, nedenleri ve sonuçları nerede karıştırıyor olabileceğini gösterir. Bu oluşturucu, öğrencilerin halihazırda sahip oldukları notlar için tasarlanmıştır: girintili bir anahat yapıştırın, hiyerarşiyi ayarlayın, ardından çalışmaya hazır görsel bir harita düzenlemek için etkileşimli tuvali kullanın.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'kavram başına satır' }, { value: '2+', label: 'girinti seviyesi desteği' }, { value: 'SVG', label: 'düzenlenebilir dışa aktarma' }, { value: 'PNG', label: 'paylaşılabilir dışa aktarma' }] },
    { type: 'diagnostic', variant: 'info', title: 'Doğru haritalama için en iyi giriş formatı', html: '<ul><li>Ana konuyu en üstte kendi satırına yerleştirin.</li><li>Alt konuları, açıkladıkları, destekledikleri, tanımladıkları veya örneklendirdikleri fikrin altına girintileyin.</li><li>Aynı düzeydeki fikirleri aynı girinti derinliğinde hizalayın.</li><li>İsterseniz madde işaretleri veya numaralı listeler kullanın; yaygın liste işaretçileri otomatik olarak kaldırılır.</li><li>Düğüm etiketlerini kısa ve açıklayıcı tutun. Tam açıklamalar her düğümün içine değil, notlarınıza aittir.</li></ul>' },
    { type: 'title', text: 'Düzensiz Bir Kavram Haritası Nasıl Teşhis Edilir?', level: 3 },
    { type: 'table', headers: ['Ne görüyorsunuz', 'Olası neden', 'Nasıl düzeltilir'], rows: [['Bir detay yanlış konunun altında görünüyor', 'Girinti seviyesi çok sığ veya çok derin.', 'Doğru üst fikrin altına gelene kadar satırı sola veya sağa kaydırın.'], ['Harita çok geniş', 'Aynı düzeyde çok fazla fikir yerleştirilmiş.', 'İlgili kardeş öğeleri daha net bir kategori düğümü altında gruplayın.'], ['Haritada çalışmak zor', 'Düğüm etiketleri tam cümleler olarak yazılmış.', 'Etiketleri anahtar kelimelere, iddialara veya soru yönlendirmelerine kısaltın.'], ['Önemli ilişkiler eksik', 'Anahat hiyerarşik ancak konunun çapraz bağlantıları var.', 'SVG dışa aktarın ve gerekirse bir editörde yatay bağlantıları manuel olarak ekleyin.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Kavram haritası', description: 'Fikirler, önkoşullar, nedenler, kanıtlar ve kategoriler arasındaki ilişkileri göstermek için en iyisidir.', highlight: true, points: ['İlişki odaklı', 'Tekrar için iyi', 'Bir konuyu yüksek sesle açıklamak için yararlı'] }, { title: 'Anahat', description: 'Düzenli notlar, makale yapısı, ders dizileri, prosedürler ve kronolojik materyal için en iyisidir.', points: ['Yazması hızlı', 'Taraması kolay', 'Uzun detayları iyi yönetir'] }, { title: 'Zihin haritası', description: 'Konunun yapısı tam olarak bilinmeden önce geniş çağrışımları beyin fırtınası yapmak için en iyisidir.', points: ['Yaratıcı keşif', 'Gevşek gruplama', 'Daha az katı hiyerarşi'] }] },
    { type: 'tip', html: '<strong>Daraltmayı aktif bir hatırlama aracı olarak kullanın.</strong> Bir dalı daraltın, gizli detayları hafızanızdan söyleyin, ardından neyi kaçırdığınızı kontrol etmek için genişletin. Bu, haritayı pasif bir şemadan aktif bir tekrar aracına dönüştürür.' },
    { type: 'title', text: 'Görsel Haritalamadan Yararlanan Çalışma İş Akışları', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Sınav tekrarı', description: 'Haritayı olası sorular etrafında oluşturun. Üst düğümler nedenler, kanıtlar, sınırlılıklar, tanımlar veya örnekler gibi yönlendirmeler olmalıdır.', highlight: true, points: ['Hatırlama için daraltılmış dalları kullanın', 'Etiketleri kısa tutun', 'Hızlı tekrar sayfaları için PNG dışa aktarın'] }, { title: 'Araştırma planlaması', description: 'Haritayı bir araştırma sorusunu kanıtlara, yönteme, kaynaklara, sınırlılıklara ve sonuçlara bağlamak için kullanın.', points: ['Soruyu köke yerleştirin', 'Kanıtı yorumdan ayırın', 'Düzenleme için SVG dışa aktarın'] }] },
    { type: 'message', title: 'Önemli sınırlılık', html: 'Girinti bir ağaç oluşturur, tam bir semantik ağ değil. İki fikir farklı dallara aitse ancak yine de birbirini etkiliyorsa, araç bu çapraz bağlantıyı kendiliğinden oluşturmaz. Oluşturulan haritayı temiz bir ilk taslak olarak değerlendirin, ardından konu gerektirdiğinde dışa aktarımdan sonra hiyerarşik olmayan bağlantılar ekleyin.' },
    { type: 'title', text: 'Slaytlar, Çalışma Sayfaları ve Editörler İçin Kavram Haritalarını Dışa Aktarma', level: 3 },
    { type: 'paragraph', html: 'Bir vektör editöründe, sunum aracında veya yayıncılık iş akışında rafine edilebilecek düzenlenebilir bir diyagram istediğinizde SVG\'yi seçin. Bir sınıf platformu, öğrenme yönetim sistemi, çalışma sayfası, sohbet veya tekrar kartı için güvenilir bir görüntüye ihtiyacınız olduğunda PNG\'yi seçin. Dışa aktarmadan önce, kalabalık düğümleri düzenleyin, isteğe bağlı detayları daraltın ve ilişki yapısı haritanın kullanılacağı boyutta okunabilir olana kadar yakınlaştırın.' },
    { type: 'summary', title: 'Pratik bir iş akışı', items: ['Notlardan, yapay zeka taslaklarından veya bir ders belgesinden kaba bir anahat yapıştırın.', 'Her alt fikir doğru üst öğenin altına gelene kadar girintiyi düzeltin.', 'Düğümlerin tuvalde ve dışa aktarılan görüntüde okunabilir kalması için etiketleri kısaltın.', 'Kalabalık dalları sürükleyerek birbirinden ayırın ve son sürümde ihtiyaç duyulmayan detayları daraltın.', 'Daha fazla düzenleme için SVG veya hemen paylaşım için PNG indirin.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
