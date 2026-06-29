import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'etkilesimli-flashcard-olusturucu' as const;
const title = 'İnteraktif Flashcard Oluşturucu & Çalışma Destesi';
const description = 'Aktif hatırlama ve aralıklı tekrarlama ile çalışma seanslarınızı geliştirin. Özel bilgi kartları oluşturun, 3D kart döndürme ile çalışın ve desteleri dışa/içe aktarın.';

const faqItems = [
  { question: 'Aktif hatırlama nedir?', answer: 'Aktif hatırlama, sadece notları okumak yerine hafızayı aktif olarak geri çağırarak kendinizi test etme yöntemidir.' },
  { question: 'Aralıklı tekrarlama nasıl çalışır?', answer: 'Zor kartları daha sık, kolay kartları ise daha seyrek çalışarak uzun süreli öğrenme sağlama yöntemidir.' },
  { question: 'Bilgi kartlarımı nasıl kaydedebilirim?', answer: 'Destenizi JSON dosyası olarak dışa aktarabilirsiniz. Daha sonra çalışmaya devam etmek için İçe Aktar butonuna basıp dosyayı yüklemeniz yeterlidir.' },
  { question: 'Kolay, Orta ve Zor değerlendirmeleri ne işe yarar?', answer: 'Kartı ne kadar iyi hatırladığınızı belirlemenize yardımcı olurlar. Leitner sisteminde zor kartlar daha sık tekrarlanır.' },
];

const howToItems = [
  { name: 'Kart oluştur', text: 'Ön yüze soruyu, arka yüze ise cevabı veya açıklamayı yazıp Kart Ekle butonuna basın.' },
  { name: 'Kartı çevir', text: 'Cevabı görmek için görüntüleyicideki herhangi bir karta tıklayın.' },
  { name: 'Hafızanı değerlendir', text: 'Kolay, Orta veya Zor butonlarını kullanarak cevabı ne kadar kolay hatırladığınızı derecelendirin.' },
  { name: 'Çalışmayı kaydet', text: 'Destenizi indirmek için Dışa Aktar butonunu kullanın, böylece daha sonra tekrar yükleyebilirsiniz.' },
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

export const content: ToolLocaleContent<InteractiveFlashcardGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    cardCreator: 'Bilgi Kartı Oluşturucu',
    questionLabel: 'Ön Yüz (Soru)',
    answerLabel: 'Arka Yüz (Cevap)',
    addCard: 'Kart Ekle',
    questionPlaceholder: 'örn., Fransa\'nın başkenti neresidir?',
    answerPlaceholder: 'örn., Paris',
    reviewMode: 'Çalışma Seansı',
    cardIndex: 'Kart',
    flipCard: 'Çevirmek için tıklayın',
    nextCard: 'Sonraki',
    prevCard: 'Önceki',
    easy: 'Kolay',
    medium: 'Orta',
    hard: 'Zor',
    resetSession: 'İlerlemeyi Sıfırla',
    importExport: 'Deste Yönetimi',
    importDeck: 'JSON İçe Aktar',
    exportDeck: 'JSON Dışa Aktar',
    exportSelected: 'Seçilenleri Dışa Aktar',
    exportAll: 'Hepsini Dışa Aktar',
    emptyDeckWarning: 'Desteniz boş. Çalışmaya başlamak için bir kart oluşturun veya bir deste içe aktarın.',
    sampleQuestion1: 'Aktif hatırlama nedir?',
    sampleAnswer1: 'Öğrenme sürecinde hafızanın geri çağrılmasını aktif olarak uyarmayı içeren bir öğrenme tekniği.',
    sampleQuestion2: 'Unutma eğrisi hipotezini kim formüle etti?',
    sampleAnswer2: 'Zamanla bilginin unutulmasının üstel doğasını inceleyen Hermann Ebbinghaus.',
    aiPromptGenerator: 'Yapay Zeka Flashcard Asistanı',
    aiTopicsLabel: 'Sınav konularınızı veya notlarınızı girin',
    aiTopicsPlaceholder: 'örn., Türevler, integraller ve limitleri kapsayan matematik sınavı...',
    generatePromptBtn: 'Yapay Zeka Promptu Üret',
    aiPromptOutputLabel: 'Bu promptu ChatGPT/Gemini\'ye kopyalayın',
    copyPromptBtn: 'Panoya Kopyala',
    selectAll: 'Hepsini Seç',
    deleteCategory: 'Kategoriyi Sil',
    deleteConfirmMsg: 'Bu kategoriyi ve içindeki tüm kartları silmek istediğinizden emin misiniz?',
    cancel: 'İptal',
    delete: 'Sil',
    pasteJsonTitle: 'Flashcard JSON Yapıştır',
    pasteJsonPlaceholder: 'Yapay zeka tarafından üretilen JSON\'ı buraya yapıştırın...',
    importBtn: 'İçe Aktar',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Aktif Hatırlama ve Aralıklı Tekrar ile Öğrenme Stratejinizi Geliştirin', level: 2 },
    { type: 'paragraph', html: 'Flashcardlar uzun süreli hafıza ve bilgi kalıcılığı için en etkili araçlardan biridir. Aktif geri çağırma ile derecelendirmeyi birleştirerek eksiklerinizi hızla kapatabilirsiniz.' },
    { type: 'title', text: 'Aktif Hatırlama ve Pasif Çalışma Karşılaştırması', level: 3 },
    { type: 'paragraph', html: 'Pek çok öğrenci sadece notları tekrar okur. Bilişsel bilim, gerçek öğrenmenin beyni bilgiyi aktif olarak geri çağırmaya zorladığınızda gerçekleştiğini gösterir.' },
    { type: 'table', headers: ['Çalışma Metodu', 'Bilişsel Katılım', 'Kalıcılık Oranı', 'En Uygun Alan'], rows: [
      ['İnteraktif Flashcardlar', 'Yüksek (Aktif)', 'Mükemmel', 'Kelime bilgisi, formüller, anahtar kavramlar.'],
      ['Özet çıkartma', 'Orta (Sentez)', 'Makul', 'Karmaşık konuların anlaşılması.'],
      ['Notları tekrar okuma', 'Düşük (Pasif)', 'Zayıf', 'Yeni konularla ilk temas.'],
    ] },
    { type: 'title', text: 'Çalışma kartlarının avantajları ve sınırları', level: 3 },
    {
      type: 'proscons',
      title: 'Avantajlar ve kısıtlamaların karşılaştırılması',
      items: [
        { pro: 'Pasif tanıma yerine aktif zihinsel hatırlamayı zorlar.', con: 'Başlangıçta hazırlaması zaman alabilir.' },
        { pro: 'Net bilgi açıklarını anında tespit eder.', con: 'Çok karmaşık teorilerin derinlemesine anlaşılması için ideal olmayabilir.' },
        { pro: 'Her ders veya konu için kolayca özelleştirilebilir.', con: 'Aralıklı tekrarın etkisini görmek için düzenli çalışma disiplini gerektirir.' }
      ]
    },
    { type: 'title', text: 'Yapay Zeka Destekli Bilgi Kartı Hazırlama', level: 3 },
    { type: 'paragraph', html: 'Desteleri elle hazırlamak zahmetli olabilir. <strong>AI Asistanı</strong> ile notlarınızı hemen içe aktarılabilir JSON destelerine dönüştürün. Konuları yazın, promptu ChatGPT veya Gemini\'ye yapıştırıp sonucu içe aktarın.' },
    { type: 'title', text: 'Grup Çalışması: Seçmeli Paylaşım ve Birleştirme', level: 3 },
    { type: 'paragraph', html: 'İş bölümü yaparak çalışmak verimliliği artırır. Sistemimiz, dışa aktarırken sadece seçtiğiniz kategorileri almanızı sağlar. İçe aktarırken ise arkadaşınızın mevcut destesini silmeden yeni kartları **birleştirir** (merge).' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
