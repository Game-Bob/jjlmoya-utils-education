import type { ToolLocaleContent } from '../../../types';

const slug = 'alinti-olusturucu' as const;
const title = 'Alıntı Oluşturucu' as const;
const description = 'Kalıcı depolama ile APA, MLA ve Vancouver formatlarında otomatik referanslar oluşturun.' as const;
const faqTitle = 'Sıkça Sorulan Sorular' as const;
const bibliographyTitle = 'Kaynakça' as const;

const ui = {
    format: 'Format',
    book: 'Kitap',
    website: 'Web Sitesi',
    article: 'Makale',
    publicationYear: 'Yayın Yılı',
    authors: 'Yazarlar (Soyadı, Baş Harfleri)',
    title: 'Başlık',
    publisher: 'Yayıncı',
    locationUrl: 'Konum / URL',
    preview: 'Önizleme',
    saveToList: 'Listeme kaydet',
    mySavedCitations: 'Kaydedilmiş Alıntılarım',
    noSavedCitations: 'Kaydedilmiş alıntınız bulunmamaktadır.',
    clickToCopy: 'Doğrudan kopyalamak için alıntının üzerine tıklayın',
    apa: 'APA (7. baskı)',
    mla: 'MLA (9. baskı)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Alıntı Oluşturucu: APA, MLA ve Vancouver\'da Ustalaşın', level: 2 },
    { type: 'paragraph', html: 'Kaynaklarınızı doğru bir şekilde alıntılamak sadece akademik bir etik meselesi değildir; çalışmanıza güvenilirlik kazandırmanın ve intihalden kaçınmanın temelidir. Aracımız, dünyada en yaygın kullanılan formatlarda otomatik referanslar oluşturmanıza olanak tanır.' },
    { type: 'title', text: 'En Önemli Alıntı Stilleri', level: 3 },
    { type: 'paragraph', html: 'Çalışma alanınıza bağlı olarak belirli bir format kullanmanız gerekecektir. Bu profesörlerin bir kaprisi değildir; her stil, her disiplin için en ilgili bilgilere öncelik verecek şekilde tasarlanmıştır.' },
    { type: 'title', text: 'APA (sosyal bilimler)', level: 4 },
    { type: 'paragraph', html: '<strong>Amerikan Psikoloji Derneği</strong> tarafından oluşturulmuştur ve araştırmaya tarihsel bağlam sağlamak için yayın tarihine odaklanır. Psikoloji, Eğitim ve Sosyoloji alanlarında standarttır.' },
    { type: 'title', text: 'Vancouver (tıp)', level: 4 },
    { type: 'paragraph', html: 'Kaynakların metinde görünme sırasına göre alıntılandığı sayısal bir sistemdir. Biyotıp ve sağlık bilimlerinde evrensel formattır ve çok sayıda referans içeren metinlerin okunmasını kolaylaştırır.' },
    { type: 'title', text: 'Adım Adım Bir Kitap Nasıl Alıntılanır?', level: 3 },
    { type: 'paragraph', html: 'Aracımız bunu otomatikleştirse de, temel unsurları bilmek fiziksel veya dijital kaynaklarınızdan hangi bilgileri toplamanız gerektiğini belirlemenize yardımcı olacaktır.' },
    { type: 'list', items: ['<strong>Yazarlar:</strong> Soyadını takiben adın baş harfi.', '<strong>Yıl:</strong> Stile bağlı olarak parantez içinde veya sonunda yayın yılı.', '<strong>Başlık:</strong> Kitaplar ve tam eserler için italik görünmelidir.', '<strong>Yayıncı:</strong> Eserin yayınlanmasından sorumlu şirket.', '<strong>URL:</strong> Dijital kaynaklar için, kalıcı konum için doğrudan bağlantı veya DOI.'] },
    { type: 'title', text: 'Formatlar Arasındaki Görsel Farklar', level: 3 },
    { type: 'table', headers: ['Öğe', 'APA (7.)', 'MLA (9.)', 'Vancouver'], rows: [['Yazar', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Tarih', '(2024)', '2024.', '2024.'], ['Başlık', 'İtalik', 'Tırnak içinde', 'Normal']] },
    { type: 'tip', html: 'Daima kurumunuzun özel kılavuzuna başvurun. APA küresel bir standart olsa da, birçok üniversitenin küçük yerel varyasyonları vardır veya standartların belirli bir baskısının kullanılmasını gerektirir.' },
    { type: 'title', text: 'Akademik İtihalden Kaçınmak', level: 3 },
    { type: 'paragraph', html: 'İntihal her zaman kasıtlı değildir. Genellikle not alırken yapılan dikkatsizliklerden veya kendinize ait olmayan bir fikre nasıl atıfta bulunacağınızı bilmemekten kaynaklanır. Bunun gibi bir alıntı oluşturucu kullanmak, her yazarın hak ettiği krediyi almasını sağlarken akademik dürüstlüğünüzü korur.' },
    { type: 'paragraph', html: 'Kendi kelimelerinizle bir fikri başka bir şekilde ifade etseniz bile, metne ilgili alıntıyı и kaynakçaya referansını eklemeniz gerektiğini unutmayın.' },
];

const faq = [
    {
        question: 'Oluşturucu hangi formatları destekliyor?',
        answer: 'Şu anda sosyal bilimler, beşeri bilimler ve sağlık alanlarında en yaygın formatlar olan APA (7. baskı), MLA (9. baskı) ve Vancouver\'ı desteklemektedir.',
    },
    {
        question: 'Alıntılarımı kaydedebilir miyim?',
        answer: 'Evet, oluşturucu geçmişinizi otomatik olarak tarayıcınızın yerel deposuna kaydeder, böylece daha sonra bakabilirsiniz.',
    },
    {
        question: 'APA ve Vancouver arasındaki fark nedir?',
        answer: 'APA yazar-tarih sistemini (Perez, 2024) kullanırken, Vancouver metindeki görünme sırasına göre sayısal bir sistem kullanır.',
    },
    {
        question: 'Alıntı oluşturucu ücretsiz mi?',
        answer: 'Tamamen. Öğrencilere ve profesyonellere akademik çalışmalarını yazarken yardımcı olmak için tasarlanmış ücretsiz bir araçtır.',
    },
] as const;

const howTo = [
    {
        name: 'Kaynak türünü seçin',
        text: 'Kaynağınızın bir kitap mı, web sitesi mi yoksa profesyonel bir dergi makalesi mi olduğunu seçin.',
    },
    {
        name: 'Verileri tamamlayın',
        text: 'Yazar, başlık, yıl ve yayıncı veya URL bilgilerini girin. Ne kadar çok veri girerseniz, alıntı o kadar doğru olur.',
    },
    {
        name: 'Kopyalayın veya kaydedin',
        text: 'Alıntıyı tek tıklamayla doğrudan kopyalayın veya kalıcı geçmişinize eklemek için "Listeme kaydet"e basın.',
    },
] as const;

const bibliography = [
    {
        name: 'APA Stil El Kitabı 7. Baskı',
        url: 'https://apastyle.apa.org/',
    },
    {
        name: 'MLA Stil Kılavuzu (Purdue OWL)',
        url: 'https://owl.purdue.edu/',
    },
    {
        name: 'Vancouver Kılavuz İlkeleri - ICJME',
        url: 'https://www.icmje.org/recommendations/browse/manuscript-preparation/preparing-for-submission.html',
    },
] as const;

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
} as const;

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item.name,
        text: item.text,
    })),
} as const;

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'EducationalApplication',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
} as const;

const schemas = [faqSchema, howToSchema, appSchema] as const;

export const content = {
    slug,
    title,
    description,
    faqTitle,
    bibliographyTitle,
    ui,
    seo,
    faq,
    howTo,
    bibliography,
    schemas,
} as const satisfies ToolLocaleContent;
