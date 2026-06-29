import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { LatexRendererUI } from '../types';

const slug = 'render-rumus-latex' as const;
const title = 'LaTeX Formula Renderer';
const description = 'Render ekspresi matematika LaTeX secara instan di browser Anda. Ketik rumus apa saja dan salin hasilnya sebagai gambar PNG, blok kode Markdown, atau sumber LaTeX mentah tanpa memerlukan server.';

const faqItems = [
  { question: 'Apa itu LaTeX dan mengapa mahasiswa menggunakannya?', answer: 'LaTeX adalah bahasa penulisan dokumen yang banyak digunakan dalam matematika, fisika, teknik, dan ekonomi untuk menulis persamaan berkualitas profesional. Tidak seperti Word, LaTeX memberikan kontrol presisi atas pemformatan.' },
  { question: 'Apakah saya perlu menginstal sesuatu untuk menggunakan alat ini?', answer: 'Tidak. Alat ini berjalan sepenuhnya di browser Anda menggunakan KaTeX, pustaka JavaScript sumber terbuka. Tidak perlu server, masuk, atau instalasi.' },
  { question: 'Apa perbedaan antara mode Blok dan Inline?', answer: 'Mode Blok merender rumus pada baris tersendiri di tengah, ideal untuk persamaan mandiri. Mode Inline merender rumus di dalam alur teks dengan ukuran lebih kecil, berguna untuk menyisipkan simbol di dalam kalimat.' },
  { question: 'Mengapa rumus saya menampilkan kesalahan sintaksis?', answer: 'Kesalahan sintaksis LaTeX paling sering terjadi karena kurung kurawal yang tidak berpasangan, kesalahan ejaan nama perintah, atau perintah yang tidak didukung.' },
  { question: 'Bisakah saya menggunakan alat ini untuk menempelkan rumus ke Word atau Notion?', answer: 'Ya. Gunakan "Unduh PNG" untuk mengunduh gambar beresolusi tinggi secara langsung, atau "Salin Markdown" untuk mendapatkan blok kode LaTeX.' }
];

const howToItems = [
  { name: 'Ketik ekspresi LaTeX Anda', text: 'Masukkan ekspresi matematika LaTeX yang valid di editor sebelah kiri. Rumus akan dirender secara real-time.' },
  { name: 'Pilih mode rendering', text: 'Pilih mode Blok untuk persamaan mandiri yang terpusat, atau mode Inline untuk rumus kompak yang cocok di dalam teks.' },
  { name: 'Sesuaikan ukuran font', text: 'Gunakan penggeser ukuran font untuk memperbesar atau memperkecil pratinjau.' },
  { name: 'Ekspor dalam format pilihan Anda', text: 'Klik "Unduh PNG" untuk gambar, "Salin Markdown" untuk blok kode, atau "Salin LaTeX" untuk menyalin ekspresi sumber mentah.' }
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
    title: 'LaTeX Formula Renderer',
    inputLabel: 'Ekspresi LaTeX',
    inputPlaceholder: 'misal \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
    displayModeLabel: 'Blok',
    inlineModeLabel: 'Inline',
    fontSizeLabel: 'Ukuran Font',
    downloadPngButton: 'Unduh PNG',
    copyMarkdownButton: 'Salin Markdown',
    copyLatexButton: 'Salin LaTeX',
    resetButton: 'Atur Ulang',
    previewTitle: 'Pratinjau Langsung',
    copiedToast: 'Disalin ke papan klip',
    errorLabel: 'Kesalahan sintaksis',
    emptyPreviewHint: 'Mulai mengetik LaTeX di atas untuk melihat rumus yang dirender di sini.',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi & Sumber Daya'
  },
  seo: [
    { type: 'title', text: 'Cara Menulis dan Merender Formula Matematika di Browser Anda', level: 2 },
    { type: 'paragraph', html: 'LaTeX adalah standar untuk penulisan ilmiah dan matematika yang digunakan oleh universitas di seluruh dunia. Alat ini merender rumus secara instan menggunakan KaTeX tanpa instalasi.' },
    { type: 'title', text: 'Apa itu KaTeX dan Mengapa Ini Pilihan Terbaik untuk Browser?', level: 3 },
    { type: 'paragraph', html: 'KaTeX adalah pustaka JavaScript yang dibuat oleh Khan Academy untuk merender ekspresi LaTeX di browser dengan sangat cepat dan akurat secara client-side.' },
    { type: 'paragraph', html: 'KaTeX menghasilkan output HTML dan SVG bersih yang berskala sempurna pada ukuran berapa pun.' },
    { type: 'title', text: 'Kasus Penggunaan Umum untuk Mahasiswa dan Peneliti', level: 3 },
    { type: 'list', items: [
      'Memverifikasi sintaks LaTeX Anda sebelum mengumpulkan tugas.',
      'Mengunduh rumus sebagai gambar PNG untuk ditempelkan ke Word atau Notion.',
      'Mengonversi ekspresi LaTeX ke blok kode Markdown untuk GitHub atau Jupyter.',
      'Melihat pratinjau rumus sebelum memasukkannya ke dokumen Overleaf.'
    ] },
    { type: 'title', text: 'Referensi Perintah Matematika LaTeX Penting', level: 3 },
    { type: 'paragraph', html: 'Perintah yang paling umum digunakan meliputi pecahan, akar kuadrat, penjumlahan, dan integral.' },
    { type: 'title', text: 'Mode Blok vs Mode Inline: Kapan Menggunakan Masing-masing', level: 3 },
    { type: 'paragraph', html: 'Mode Blok memusatkan rumus pada barisnya sendiri, sedangkan mode Inline menyesuaikan rumus agar pas di dalam baris teks.' },
    { type: 'tip', html: 'Tip cepat untuk debugging kesalahan sintaks: pastikan setiap kurung kurawal buka memiliki kurung kurawal tutup yang sesuai.' },
    { type: 'title', text: 'Mengekspor Rumus: PNG vs Markdown vs Sumber LaTeX', level: 3 },
    { type: 'paragraph', html: 'Ekspor PNG menggunakan Canvas API browser untuk menghasilkan gambar latar belakang transparan yang tajam.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
