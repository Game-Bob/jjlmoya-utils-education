import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'agirlikli-not-hesaplayici' as const;
const title = 'Ağırlıklı Not ve Final Puanı Hesaplayıcı';
const description = 'GPA\'nız için stres yapmayı bırakın! Ders notlarınızı ve final puanlarınızı kolayca hesaplayın. Nerede olduğunuzu görmek için ödevlerinizi, sınavlarınızı ve ağırlıklarını girmeniz yeterlidir.';

const faqItems = [
  { question: 'Ağırlıklı not tam olarak nedir?', answer: 'Birçok derste tüm ödevler eşit değildir. Bir final sınavı notunuzun %40\'ını oluştururken, ev ödevleri sadece %10\'dur. Ağırlıklı not, gerçek durumunuzu bilmeniz için bu farklılıkları hesaba katar.' },
  { question: 'Not ağırlıklarımı nerede bulabilirim?', answer: 'Genellikle bunlar ders izlencenizde (syllabus) "Notlandırma Politikası" veya "Değerlendirme" altında listelenir. Profesörler katılım, kısa sınavlar ve projeler gibi farklı kategorilere bir yüzde atarlar.' },
  { question: 'Ödevlerim henüz %100\'e ulaşmadıysa ne olur?', answer: 'Endişelenmeyin! Hesaplayıcımız, şimdiye kadar tamamladığınız çalışmalara dayalı olarak "öngörülen" bir not gösterecektir. Mevcut puanlarınızı %100 karşılığına ölçeklendirir.' },
  { question: 'Bunu GPA\'m için kullanabilir miyim?', answer: 'Kesinlikle. Her dersi bir "konu" olarak ele alabilir ve dönem ağırlıklı ortalamanızı bulmak için kredi saatlerini "ağırlık" olarak kullanabilirsiniz.' },
];

const howToItems = [
  { name: 'Ödevlerinizi listeleyin', text: 'Sınavlarınızın, kısa sınavlarınızın veya projelerinizin adını girin. Düzenli kalın!' },
  { name: 'Puanlarınızı girin', text: 'Her bir öğe için aldığınız notu yazın (genellikle 10 veya 100 üzerinden).' },
  { name: 'Ağırlıkları ekleyin', text: 'Ders izlencenizi kontrol edin ve her bir öğenin final notunuza katkıda bulunduğu yüzdeyi girin.' },
  { name: 'Sonucunuzu kontrol edin', text: 'Final notunuzun anında güncellenmesini izleyin. Manuel matematik gerektirmez!' },
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

export const content: ToolLocaleContent<WeightedGradeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    addSubject: 'Öğe Ekle',
    subjects: 'Notlar ve Ağırlıklar',
    subjectName: 'Ödev / Ders',
    grade: 'Not',
    weight: 'Ağırlık (%)',
    scale: 'Ölçek (örn. 4.0, 10, 100)',
    finalGrade: 'Mevcut Notunuz',
    removeSubject: 'Kaldır',
    weightSum: 'Toplam Ağırlık',
    exampleSubject: 'Final Sınavı',
    newSubjectPlaceholder: 'örn. Vize',
  },
  seo: [
    { type: 'title', text: 'Ağırlıklı Hesaplayıcı ile Notlarınızda Nasıl Ustalaşılır?', level: 2 },
    { type: 'paragraph', html: 'Bir yığın nota bakarken hiç kaybolmuş hissettiniz mi? Yalnız değilsiniz. <strong>Ağırlıklı ortalamanızı</strong> anlamak, lisede ve üniversitede önde kalmanın sırrıdır.' },
    { type: 'title', text: 'Ağırlıklı Notlar Neden Önemlidir?', level: 3 },
    { type: 'paragraph', html: 'Basit bir ortalama her ödeve aynı şekilde davranır. Ancak gerçek dünyada (и ders izlencenizde), 2 dakikalık bir kısa sınav, 20 sayfalık bir dönem ödevi kadar sayılmamalıdır. Ağırlıklı notlar önemli şeylere daha fazla "güç" verir.' },
    { type: 'paragraph', html: 'İster <strong>dönem GPA\'nızı</strong> hesaplıyor olun, ister sadece son isteğe bağlı ödevi atlayıp atlayamayacağınızı görmeye çalışıyor olun, ağırlıklandırma ihtiyacınız olan araçtır.' },
    { type: 'title', text: 'Final Notunuzu 3 Adımda Hesaplayın', level: 3 },
    { type: 'list', items: ['Ders izlencenizde her kategorinin ağırlığını bulun (örn. Sınavlar %50, Ödevler %20).', 'Puanınızı bu ağırlıkla çarpın (örn. 90 puan * 0,50 ağırlık = 45 puan).', 'Final yüzdenizi elde etmek için tüm bu puanları toplayın.'] },
    { type: 'title', text: 'Profesyonel İpucu: "Ya Şöyle Olursa" Oyunu', level: 3 },
    { type: 'paragraph', html: 'Farklı senaryoları simüle etmek için bu hesaplayıcıyı kullanın. "Finalden 85 alırsam ne olur?" veya "Bu ödevi kaçırırsam ne olur?" Etkiyi gerçek zamanlı olarak görmek, çalışma zamanınızı gerçekten etkili olduğu yerlerde önceliklendirmenize yardımcı olur.' },
    { type: 'tip', html: '<strong>Panik yapmayın.</strong> Ağırlıklarınız henüz %100\'e ulaşmadıysa, hesaplayıcı mevcut çalışmalara dayanarak notunuzun neye benzediğini öngörecektir. Dönem ortasında ilerlemeyi takip etmek için harika bir yoldur!' },
    { type: 'title', text: 'Aritmetik ve Ağırlıklı Karşılaştırması: Gerçek Fark', level: 3 },
    { type: 'paragraph', html: 'Aritmetik bir ortalama tehlikeli bir şekilde yanıltıcı olabilir. Küçük bir kısa sınavda %100, ancak önemli bir sınavda %50 alırsanız, basit bir ortalama %75 (geçer) aldığınızı söyler. Ancak sınav notunuzun %90\'ını oluşturuyorsa, <strong>gerçek ağırlıklı notunuz</strong> %55\'e (kalır) daha yakındır. Daima ağırlıklara bakın!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
