import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'rubrik-matrisi-tasarimcisi' as const;
const title = 'Rubrik Matrisi Tasarımcısı';
const description = 'Başarı düzeyleri, canlı %100 ağırlık doğrulaması, CSV dışa aktarımı ve yazdırmaya hazır düzen içeren düzenlenebilir ağırlıklı değerlendirme rubrikleri oluşturun.';

const faqItems = [
  { question: 'Rubrik matrisi nedir?', answer: 'Rubrik matrisi, satırlarda kriterleri ve sütunlarda başarı düzeylerini barındıran bir değerlendirme tablosudur. Her hücre, o düzeydeki performansın neye benzediğini açıklayarak notlandırmayı daha şeffaf ve tutarlı hale getirir.' },
  { question: 'Kriter ağırlıkları neden %100\'e eşit olmalıdır?', answer: 'Toplamın %100 olması notlandırma modelini açık hale getirir. Toplam %100\'ün altında veya üzerinde olduğunda, öğrenciler ve not verenler her bir kriterin nihai puana ne kadar katkıda bulunduğunu net bir şekilde yorumlayamazlar.' },
  { question: 'Öğrenciler bu aracı kullanabilir mi?', answer: 'Evet. Öğrenciler, ödev beklentilerini analiz etmek, taslaklar planlamak veya teslim etmeden önce akran değerlendirme listeleri oluşturmak için bu aracı kullanabilirler.' },
  { question: 'Hangi dışa aktarma seçenekleri mevcuttur?', answer: 'CSV dışa aktarımı e-tablolar ve LMS kurulumları için kullanışlıdır. Yazdır butonu, tarayıcının yazdırma akışını açar ve buradan işletim sistemi yazdırma penceresini kullanarak PDF olarak kaydedebilirsiniz.' },
];

const howToItems = [
  { name: 'Kriterleri düzenleyin', text: 'Herhangi bir kriter adına tıklayın ve bunu değerlendirmek istediğiniz beceri, çıktı veya gereksinimle değiştirin.' },
  { name: 'Ağırlıkları ayarlayın', text: 'Canlı ağırlık çubuğu dengelenmiş %100 rubriği bildirene kadar her bir yüzdeyi ayarlayın.' },
  { name: 'Başarı düzeylerini açıklayın', text: 'Her bir açıklama hücresine tıklayın ve o performans düzeyi için gözlemlenebilir kanıtlar yazın.' },
  { name: 'Gerektiğinde yapı ekleyin', text: 'Fazladan kriterler veya başarı düzeyleri oluşturmak için ekleme düğmelerini kullanın ve kullanışlı olmayan satır veya sütunları kaldırın.' },
  { name: 'Dışa aktarın veya yazdırın', text: 'E-tablolar için bir CSV indirin veya temiz bir PDF sürümü oluşturmak için yazdır seçeneğini kullanın.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Kriter',
    weightHeader: 'Ağırlık',
    levelSectionLabel: 'Başarı düzeyleri',
    levelBadgePrefix: 'D',
    addCriterion: 'Kriter ekle',
    addLevel: 'Düzey ekle',
    removeCriterion: 'Kriteri kaldır',
    removeLevel: 'Düzeyi kaldır',
    exportCsv: 'CSV Dışa Aktar',
    printRubric: 'Yazdır / PDF',
    csvFilename: 'rubrik-matrisi.csv',
    pdfDocumentTitle: 'Rubrik matrisi',
    pdfImageAlt: 'Rubrik matrisi',
    confirmDeleteTitle: 'Bu kriteri silmek istiyor musunuz?',
    confirmDeleteText: 'Bu işlem, kriteri ve onun başarı düzeyleri için yazılmış tüm açıklamaları kaldırır.',
    cancelDelete: 'İptal',
    confirmDelete: 'Kriteri sil',
    totalWeight: 'Toplam ağırlık',
    balanced: 'Tam olarak %100 dengelendi',
    under: 'Rubrik %100\'e ulaşana kadar ağırlık ekleyin',
    over: 'Rubrik tekrar %100 olana kadar ağırlığı azaltın',
    emptyCell: 'Düzenlemek için tıklayın',
    newCriterionTemplate: 'Kriter {index}',
    newDescriptorTemplate: 'Açıklama {index}.{level}',
    newLevelTemplate: 'Düzey {index}',
    defaultLevels: [
      { name: 'Örnek niteliğinde', score: 4 },
      { name: 'Yetkin', score: 3 },
      { name: 'Gelişmekte olan', score: 2 },
      { name: 'Başlangıç', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Argüman kalitesi',
        weight: 35,
        cells: [
          'Nüanslı gerekçelendirme ile net iddia',
          'Yeterli gerekçelendirme ile net iddia',
          'İddia mevcut ancak düzensiz',
          'İddia belirsiz veya eksik',
        ],
      },
      {
        name: 'Kanıt kullanımı',
        weight: 30,
        cells: [
          'Kanıtlar kesin ve entegre edilmiş',
          'Kanıtlar çoğu iddiayı destekliyor',
          'Kanıtlar genel veya zayıf bağlantılı',
          'Kanıt yok veya hatalı',
        ],
      },
      {
        name: 'Organizasyon',
        weight: 20,
        cells: [
          'Yapı okuyucuyu sorunsuz bir şekilde yönlendiriyor',
          'Yapı mantıklı',
          'Yapıda boşluklar veya tekrarlar var',
          'Yapıyı takip etmek zor',
        ],
      },
      {
        name: 'Akademik üslup',
        weight: 15,
        cells: [
          'Gelişmiş üslup ve kurallara kesin uyum',
          'Küçük hatalar anlamı engellemiyor',
          'Sık yapılan hatalar okuyucunun dikkatini dağıtıyor',
          'Hatalar anlamı belirsizleştiriyor',
        ],
      },
    ],
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Referanslar ve Akademik Kaynaklar',
  },
  seo: [
    { type: 'title', text: 'Öğrencilerin Gerçekten Kullanabileceği Rubrikler Tasarlayın', level: 2 },
    { type: 'paragraph', html: 'Güçlü bir değerlendirme rubriği, bir notlandırma kağıdından daha fazlasıdır. Beklentilerin paylaşılan bir haritasıdır. Öğrenciler çalışmayı teslim etmeden önce kalitenin neye benzediğini anlamak için, öğretmenler daha tutarlı not vermek için ve değerlendiriciler geri bildirimleri daha az belirsizlikle açıklamak için bunu kullanırlar. Bu tasarımcı yapıyı görünür kılar: kriterler, ağırlıklar, başarı düzeyleri ve açıklamaların tümü düzenlenebilir tek bir matriste yer alır.' },
    { type: 'diagnostic', variant: 'warning', title: 'Bir rubriğin ne zaman revizyona ihtiyacı olur?', html: '<ul><li>Birkaç kriter o kadar çok örtüşür ki, aynı hata iki kez cezalandırılır.</li><li>Toplam ağırlık %100\'e eşit değildir, bu da nihai puanı yorumlamayı zorlaştırır.</li><li>Açıklamalar, gözlemlenebilir kanıtlar olmaksızın iyi, zayıf veya mükemmel gibi belirsiz kelimeler kullanır.</li><li>Değerlendiricilerin güvenilir bir şekilde ayırt edemeyeceği kadar çok düzey vardır.</li></ul>' },
    { type: 'title', text: 'Kriterleri ve Ağırlıkları Seçme', level: 3 },
    { type: 'table', headers: ['Rubrik öğesi', 'İyi uygulama', 'Ortak sorun'], rows: [['Kriterler', 'Argüman, kanıt, yöntem, doğruluk veya sunum gibi belirgin becerileri veya çıktıları değerlendirin.', 'Birden fazla beceriyi tek bir satırda karıştırmak geri bildirimi belirsizleştirir.'], ['Ağırlıklar', 'Ağırlığı öğretim önceliğine ve ödev amacına göre eşleştirin.', 'Bazı çıktılar daha önemli olsa bile her satıra eşit ağırlık vermek.'], ['Düzeyler', 'Değerlendiricilerin tutarlı bir şekilde ayırt edebileceği 3 ila 5 düzey kullanın.', 'Küçük ifade farklılıklarıyla çok sayıda düzey eklemek.'], ['Açıklamalar', 'Öğrenci çalışmasında gözlemlenebilir kanıtları tanımlayın.', 'Değerlendirici gibi tınlayan ancak geliştirmeye kılavuzluk etmeyen etiketler kullanmak.']] },
    { type: 'comparative', title: 'Analitik ve bütünsel rubrikler', columns: 2, items: [{ title: 'Analitik rubrik', description: 'Performansı ayrı kriterlere ve ağırlıklara böler. Öğrencilerin hedefli geri bildirime ihtiyaç duyduğu veya birkaç değerlendiricinin uyum sağlaması gerektiği durumlar için en iyisidir.', highlight: true, points: ['Şeffaf puanlama', 'Spesifik geri bildirim', 'Karmaşık ödevler için iyi çalışır'] }, { title: 'Bütünsel rubrik', description: 'Tek bir genel karar verir. Uygulanması daha hızlıdır, ancak revizyon veya akran değerlendirmesi için daha az teşhis edicidir.', points: ['Daha hızlı notlandırma', 'Hızlı kontroller için kullanışlı', 'Daha az ayrıntılı geri bildirim'] }] },
    { type: 'tip', html: '<strong>Açıklamaları sıfatlardan değil, kanıtlardan yola çıkarak yazın.</strong> "Mükemmel analiz" yerine, mükemmel analizin ne yaptığını yazın: kanıtları iddiaya bağlar, sınırlılıkları ele alır ve kanıtların neden önemli olduğunu açıklar.' },
    { type: 'title', text: 'Ağırlıklı Bir Rubrik Nasıl Doğrulanır?', level: 3 },
    { type: 'paragraph', html: 'Ağırlıklar önceliği iletir. %40 değerindeki bir kriter, öğrenci çabasını %10 değerindeki bir kriterden farklı şekillendirir. Bu araçtaki canlı toplam kasıtlı olarak katıdır: rubrik yalnızca toplam tam olarak %100 olduğunda dengelenir. Toplam %100\'ün altındaysa, notun bir kısmı tanımsız kalır. %100\'ün üzerindeyse, model fazladan puan vaat eder ve kafa karışıklığı yaratır.' },
    { type: 'summary', title: 'Pratik bir rubrik iş akışı', items: ['Satırları yazmadan önce öğrenme çıktılarıyla başlayın.', 'Matrisi yalnızca geri bildirimi gerçekten etkileyecek kriterlerle sınırlayın.', 'Açıklamaları sade ve gözlemlenebilir bir dille taslak haline getirin.', 'Rubriği paylaşmadan önce %100 ağırlığı kontrol edin.', 'E-tablo veya LMS kurulumuna ihtiyaç duyduğunuzda CSV olarak dışa aktarın.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
