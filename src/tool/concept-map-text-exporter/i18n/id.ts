import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ConceptMapTextExporterUI } from '../entry';

const slug = 'peta-konsep-teks' as const;
const title = 'Pembuat Peta Konsep';
const description = 'Ubah catatan berindentasi menjadi peta konsep interaktif dengan simpul yang dapat digeser, cabang yang dapat dilipat, kontrol zoom, dan ekspor SVG atau PNG.';

const faqItems = [
  { question: 'Teks seperti apa yang bisa saya tempelkan ke pembuat peta konsep?', answer: 'Gunakan kerangka sederhana: satu ide per baris, dengan indentasi untuk subtopik. Poin-poin, daftar bernomor, tab, dan spasi dapat diterima, sehingga catatan yang disalin dari dokumen, ringkasan materi kuliah, atau aplikasi belajar biasanya dapat dikonversi tanpa pemformatan ulang manual.' },
  { question: 'Bagaimana cara memformat indentasi untuk menghasilkan peta konsep yang paling rapi?', answer: 'Tempatkan topik utama di baris pertama, lalu beri indentasi untuk ide-ide pendukung di bawahnya. Jaga agar ide-ide sejajar berada pada tingkat kedalaman indentasi yang sama. Jika suatu simpul muncul di bawah induk yang salah, tingkat indentasi hampir selalu merupakan hal yang perlu diperbaiki.' },
  { question: 'Apakah saya bisa memindahkan simpul setelah peta konsep dibuat?', answer: 'Ya. Seret simpul mana saja di kanvas untuk menyesuaikan jarak, memisahkan cabang yang padat, atau menekankan hubungan. Anda juga dapat menggeser kanvas, memperbesar atau memperkecil, dan melipat cabang sebelum mengekspor.' },
  { question: 'Apa perbedaan antara ekspor SVG dan PNG?', answer: 'SVG dapat diedit dan skalanya tetap tajam di editor vektor, slide, dan dokumen. PNG is gambar tetap yang lebih mudah diunggah ke platform kelas, pesan, lembar kerja, dan kartu revisi cepat.' },
  { question: 'Apakah alat ini mendeteksi hubungan silang secara otomatis?', answer: 'Tidak. Alat ini membangun hierarki berdasarkan indentasi. Hal ini menjaga agar hasil tetap dapat diprediksi, tetapi hubungan lateral seperti sebab-akibat, kontras, atau putaran umpan balik harus ditinjau secara manual setelah diekspor ke SVG.' },
];

const howToItems = [
  { name: 'Tempel atau tulis kerangka', text: 'Masukkan satu konsep per baris dan beri indentasi pada ide turunan di bawah topik induknya.' },
  { name: 'Tinjau struktur yang dihasilkan', text: 'Gunakan kanvas interaktif untuk memeriksa apakah hierarki sesuai dengan cara mempelajari topik tersebut.' },
  { name: 'Atur kanvas', text: 'Seret simpul, lipat cabang yang penuh, dan perbesar/perkecil hingga pengelompokan visual terlihat jelas.' },
  { name: 'Ekspor untuk materi belajar', text: 'Unduh SVG untuk diedit atau PNG untuk berbagi cepat, lembar kerja, dan presentasi.' },
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
    inputLabel: 'Kerangka berindentasi',
    sampleButton: 'Muat contoh',
    clearButton: 'Bersihkan',
    zoomOutMark: '-',
    zoomInMark: '+',
    zoomIn: 'Perbesar',
    zoomOut: 'Perkecil',
    resetView: 'Atur ulang tampilan',
    exportSvg: 'Ekspor SVG',
    exportPng: 'Ekspor PNG',
    collapseBranch: 'Lipat cabang',
    expandBranch: 'Bentangkan cabang',
    emptyStateTitle: 'Belum ada konsep',
    emptyStateText: 'Tulis satu ide per baris dan beri indentasi pada subtopik untuk membangun peta.',
    nodeCount: 'konsep',
    depthCount: 'tingkat',
    branchCount: 'hubungan',
    levelPrefix: 'T',
    untitledNodeLabel: 'Tanpa judul',
    collapsedBranchMark: '+',
    expandedBranchMark: '-',
    svgFilename: 'peta-konsep.svg',
    pngFilename: 'peta-konsep.png',
    sampleOutline: `Proyek penelitian
  Pertanyaan
    Masalah apa yang sedang diteliti?
    Siapa yang terpengaruh?
  Bukti
    Sumber primer
    Artikel akademis
    Kumpulan data
  Metode
    Rencana pengambilan sampel
    Langkah analisis
  Kesimpulan
    Temuan utama
    Batasan
    Pertanyaan penelitian selanjutnya`,
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi & Sumber Akademis',
  },
  seo: [
    { type: 'title', text: 'Ubah Catatan Berindentasi Menjadi Peta Konsep', level: 2 },
    { type: 'paragraph', html: 'Peta konsep sangat berguna ketika sebuah topik tidak lagi berupa daftar fakta sederhana. Peta ini menunjukkan ide-ide mana yang menjadi pusat, detail mana yang mendukungnya, dan di mana pelajar mungkin membingungkan kategori, contoh, penyebab, dan konsekuensi. Pembuat peta konsep ini dirancang untuk catatan yang sudah dimiliki siswa: tempelkan kerangka berindentasi, sesuaikan hierarki, lalu gunakan kanvas interaktif untuk mengatur peta visual yang siap digunakan untuk belajar.' },
    { type: 'stats', columns: 4, items: [{ value: '1', label: 'baris per konsep' }, { value: '2+', label: 'tingkat indentasi didukung' }, { value: 'SVG', label: 'ekspor yang dapat diedit' }, { value: 'PNG', label: 'ekspor yang dapat dibagikan' }] },
    { type: 'diagnostic', variant: 'info', title: 'Format input terbaik untuk pemetaan yang akurat', html: '<ul><li>Tempatkan topik utama pada baris tersendiri di bagian paling atas.</li><li>Beri indentasi pada subtopik di bawah ide yang dijelaskan, didukung, didefinisikan, atau dicontohkan.</li><li>Jaga agar ide-ide sejajar berada pada kedalaman indentasi yang sama.</li><li>Gunakan poin-poin atau daftar bernomor jika diinginkan; penanda daftar umum akan dihapus secara otomatis.</li><li>Jaga agar label simpul tetap singkat dan deskriptif. Penjelasan lengkap harus berada di catatan Anda, bukan di dalam setiap simpul.</li></ul>' },
    { type: 'title', text: 'Cara Mendiagnosis Peta Konsep yang Berantakan', level: 3 },
    { type: 'table', headers: ['Apa yang Anda lihat', 'Penyebab umum', 'Cara memperbaikinya'], rows: [['Detail muncul di bawah topik yang salah', 'Tingkat indentasi terlalu dangkal atau terlalu dalam.', 'Geser baris ke kiri atau kanan hingga berada di bawah ide induk yang benar.'], ['Peta konsep terlalu lebar', 'Terlalu banyak ide yang ditempatkan pada tingkat yang sama.', 'Kelompokkan elemen sejajar yang terkait di bawah simpul kategori yang lebih jelas.'], ['Peta konsep sulit dipelajari', 'Label simpul ditulis sebagai kalimat lengkap.', 'Persingkat label menjadi kata kunci, klaim, atau pertanyaan pemantik.'], ['Hubungan penting hilang', 'Kerangka bersifat hierarkis tetapi topik memiliki hubungan silang.', 'Ekspor SVG dan tambahkan hubungan lateral secara manual di editor jika diperlukan.']] },
    { type: 'comparative', columns: 3, items: [{ title: 'Peta konsep', description: 'Terbaik untuk menunjukkan hubungan antar ide, prasyarat, penyebab, bukti, dan kategori.', highlight: true, points: ['Berfokus pada hubungan', 'Bagus untuk revisi', 'Berguna untuk menjelaskan topik secara lisan'] }, { title: 'Kerangka', description: 'Terbaik untuk catatan teratur, struktur esai, urutan kuliah, prosedur, dan materi kronologis.', points: ['Cepat ditulis', 'Mudah dipindai', 'Menangani detail panjang dengan baik'] }, { title: 'Peta pikiran', description: 'Terbaik untuk curah pendapat asosiasi luas sebelum struktur topik diketahui sepenuhnya.', points: ['Eksplorasi kreatif', 'Pengelompokan bebas', 'Hierarki yang tidak terlalu ketat'] }] },
    { type: 'tip', html: '<strong>Gunakan pelipatan cabang sebagai alat pengingat aktif.</strong> Lipat cabang, sebutkan detail tersembunyi dari ingatan Anda, lalu bentangkan kembali untuk memeriksa apa yang terlewat. Ini mengubah peta dari diagram pasif menjadi pemicu revisi yang aktif.' },
    { type: 'title', text: 'Alur Belajar yang Memperoleh Manfaat dari Pemetaan Visual', level: 3 },
    { type: 'comparative', columns: 2, items: [{ title: 'Revisi ujian', description: 'Bangun peta di sekitar pertanyaan yang mungkin keluar. Simpul induk harus berupa petunjuk seperti penyebab, bukti, batasan, definisi, atau contoh.', highlight: true, points: ['Gunakan cabang terlipat untuk mengingat', 'Jaga label tetap singkat', 'Ekspor PNG untuk lembar tinjauan cepat'] }, { title: 'Perencanaan penelitian', description: 'Gunakan peta untuk menghubungkan pertanyaan penelitian dengan bukti, metode, sumber, batasan, dan kesimpulan.', points: ['Tempatkan pertanyaan di bagian akar', 'Pisahkan bukti dari interpretasi', 'Ekspor SVG untuk diedit'] }] },
    { type: 'message', title: 'Batasan penting', html: 'Indentasi membuat bagan pohon, bukan jaringan semantik lengkap. Jika dua ide termasuk dalam cabang yang berbeda tetapi masih saling mempengaruhi, alat ini tidak akan membuat hubungan silang tersebut secara otomatis. Perlakukan peta yang dihasilkan sebagai draf awal yang bersih, lalu tambahkan hubungan non-hierarkis setelah diekspor jika diperlukan.' },
    { type: 'title', text: 'Mengekspor Peta Konsep untuk Slide, Lembar Kerja, dan Editor', level: 3 },
    { type: 'paragraph', html: 'Pilih SVG saat Anda menginginkan diagram yang dapat diedit yang dapat disempurnakan di editor vektor, alat presentasi, atau alur kerja penerbitan. Pilih PNG saat Anda membutuhkan gambar yang andal untuk platform kelas, sistem manajemen pembelajaran, lembar kerja, obrolan, atau kartu revisi. Sebelum mengekspor, atur simpul yang padat, lipat detail opsional, dan lakukan zoom hingga struktur hubungan terbaca pada ukuran tempat peta akan digunakan.' },
    { type: 'summary', title: 'Alur kerja praktis', items: ['Tempelkan kerangka kasar dari catatan, draf AI, atau materi kuliah.', 'Perbaiki indentasi hingga setiap ide turunan berada di bawah induk yang benar.', 'Persingkat label agar simpul tetap terbaca di kanvas dan gambar yang diekspor.', 'Geser cabang yang padat agar terpisah dan lipat detail yang tidak diperlukan dalam versi final.', 'Unduh SVG untuk pengeditan lebih lanjut atau PNG untuk segera dibagikan.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
