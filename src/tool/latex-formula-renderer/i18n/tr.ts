import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'latex-formul-goruntuleyici' as const;
const title = 'LaTeX Formül Görüntüleyici';
const description = 'LaTeX matematiksel ifadelerini tarayıcınızda anında görüntüleyin. İstediğiniz formülü yazın ve sonucu PNG resmi, Markdown kod bloğu veya ham LaTeX kodu olarak kopyalayın.';

const faqItems = [
  { question: 'LaTeX nedir ve öğrenciler neden kullanır?', answer: 'LaTeX; matematik, fizik, mühendislik ve ekonomi alanlarında profesyonel kalitede denklemler yazmak için yaygın olarak kullanılan bir dizgi dilidir. Word\'den farklı olarak biçimlendirme üzerinde tam kontrol sağlar.' },
  { question: 'Bu aracı kullanmak için bir şey yüklemem gerekiyor mu?', answer: 'Hayır. Bu araç, açık kaynaklı bir JavaScript kütüphanesi olan KaTeX\'i kullanarak tamamen tarayıcınızda çalışır. Kurulum veya kayıt gerekmez.' },
  { question: 'Blok modu ile Satır İçi mod arasındaki fark nedir?', answer: 'Blok modu formülü kendi satırında ortalanmış olarak gösterir (bağımsız denklemler için idealdir). Satır içi mod ise formülü metin akışının içine daha küçük boyutta yerleştirir.' },
  { question: 'Formülüm neden sözdizimi hatası gösteriyor?', answer: 'LaTeX sözdizimi hataları genellikle kapatılmamış süslü parantezler, yanlış yazılmış komut adları veya desteklenmeyen komutlardan kaynaklanır.' },
  { question: 'Bu aracı Word veya Notion\'a formül yapıştırmak için kullanabilir miyim?', answer: 'Evet. Doğrudan yüksek çözünürlüklü bir resim indirmek için "PNG İndir"i veya hazır bir kod bloğu almak için "Markdown Kopyala"yı kullanın.' }
];

const howToItems = [
  { name: 'LaTeX ifadenizi yazın', text: 'Editöre geçerli bir LaTeX matematiksel ifadesi girin. Formül siz yazarken gerçek zamanlı olarak oluşturulur.' },
  { name: 'Görüntüleme modunu seçin', text: 'Bağımsız bir denklem için Blok modunu, metin içine yerleştirmek için Satır İçi modu seçin.' },
  { name: 'Yazı tipi boyutunu ayarlayın', text: 'Önizlemeyi büyütmek veya küçültmek için yazı tipi boyutu kaydırıcısını kullanın.' },
  { name: 'Tercih ettiğiniz formatta dışa aktarın', text: 'Görsel için "PNG İndir"e, kod bloğu için "Markdown Kopyala"ya veya ham kaynak için "LaTeX Kopyala"ya tıklayın.' }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer }
  }))
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howToItems.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text
  }))
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' }
};

export const content: ToolLocaleContent<LatexRendererUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'LaTeX Formül Görüntüleyici',
    inputLabel: 'LaTeX İfadesi',
    inputPlaceholder: 'örn. \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Blok',
    inlineModeLabel: 'Satır İçi',
    fontSizeLabel: 'Yazı Boyutu',
    downloadPngButton: 'PNG İndir',
    copyMarkdownButton: 'Markdown Kopyala',
    copyLatexButton: 'LaTeX Kopyala',
    resetButton: 'Sıfırla',
    previewTitle: 'Canlı Önizleme',
    copiedToast: 'Panoya kopyalandı',
    errorLabel: 'Sözdizimi hatası',
    emptyPreviewHint: 'Oluşturulan formülü burada görmek için yukarıya LaTeX yazmaya başlayın.',
    faqTitle: 'Sıkça Sorulan Sorular',
    bibliographyTitle: 'Referanslar ve Kaynaklar'
  },
  seo: [
    { type: 'title', text: 'Tarayıcınızda Matematiksel Formüller Nasıl Yazılır ve Görüntülenir', level: 2 },
    { type: 'paragraph', html: 'LaTeX bilimsel yayınların standardıdır. Bu araç, herhangi bir kuruluma gerek kalmadan KaTeX kullanarak formülleri anında görüntüler.' },
    { type: 'title', text: 'KaTeX Nedir ve Tarayıcı İçin Neden En İyi Seçimdir?', level: 3 },
    { type: 'paragraph', html: 'KaTeX, Khan Academy tarafından geliştirilen ve LaTeX formüllerini istemci tarafında son derece hızlı ve doğru bir şekilde görüntüleyen bir JavaScript kütüphanesidir.' },
    { type: 'paragraph', html: 'Her boyutta mükemmel şekilde ölçeklenen temiz HTML ve SVG çıktıları üretir.' },
    { type: 'title', text: 'Öğrenciler ve Araştırmacılar İçin Yaygın Kullanım Durumları', level: 3 },
    { type: 'list', items: [
      'Ödevleri teslim etmeden önce formüllerin LaTeX sözdizimini kontrol etmek.',
      'Word veya Notion\'a yapıştırmak için formülleri şeffaf PNG resimleri olarak indirmek.',
      'İfadeleri GitHub veya Jupyter için Markdown kod bloklarına dönüştürmek.',
      'Formülleri Overleaf projelerinize eklemeden önce test etmek.'
    ] },
    { type: 'title', text: 'Temel LaTeX Matematik Komutları Referansı', level: 3 },
    { type: 'paragraph', html: 'En yaygın kullanılan komutlar arasında kesirler, karekökler, toplamlar ve integraller yer alır.' },
    { type: 'title', text: 'Blok Modu vs Satır İçi Mod: Hangisi Ne Zaman Kullanılır', level: 3 },
    { type: 'paragraph', html: 'Blok modu formülü yeni bir satırda ortalarken, satır içi mod formülü metin satırının içine sığdırır.' },
    { type: 'tip', html: 'Hata ayıklama ipucu: Açılan her süslü parantezin eşleşen bir kapatma parantezi olmalıdır.' },
    { type: 'title', text: 'Formülleri Dışa Aktarma: PNG, Markdown ve LaTeX Karşılaştırması', level: 3 },
    { type: 'paragraph', html: 'PNG dışa aktarımı, tarayıcının Canvas API\'sini kullanarak şeffaf arka plana sahip net bir görüntü oluşturur.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
