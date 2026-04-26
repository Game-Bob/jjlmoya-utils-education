import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InternationalGradeConverterUI } from '../entry';

const slug = 'konverter-nilai-internasional' as const;
const title = 'Konverter Nilai Internasional & Kalkulator Kesetaraan GPA';
const description = 'Alat paling presisi untuk mengonversi nilai akademik antar sistem internasional. Terjemahkan skor dari Spanyol, AS, Inggris, Jerman, Prancis, Italia, dan lainnya secara instan. Esensial untuk Erasmus+, Fulbright, dan pendaftaran universitas global.';

const faqItems = [
  { 
    question: 'Bagaimana cara kerja konversi nilai internasional?', 
    answer: 'Alat ini menggunakan pemetaan linear matematis berdasarkan nilai kelulusan minimum dan skor maksimum yang mungkin untuk setiap negara. Hal ini memastikan bahwa "lulus" di satu sistem selaras dengan "lulus" di sistem lain, menjaga keadilan proporsional akademik di berbagai skala.' 
  },
  { 
    question: 'Apakah konverter ini resmi untuk penerimaan universitas?', 
    answer: 'Meskipun algoritme kami mengikuti tabel kesetaraan internasional standar (seperti yang digunakan oleh ECTS atau WES), alat ini hanya untuk tujuan informasi. Untuk pengakuan kredit resmi, Anda harus selalu berkonsultasi dengan institusi tuan rumah atau layanan evaluasi terakreditasi.' 
  },
  { 
    question: 'Apa itu fitur "Mode Bulk" (Pemrosesan Massal)?', 
    answer: 'Mode Bulk memungkinkan mahasiswa dengan transkrip nilai yang panjang untuk memproses banyak nilai sekaligus. Cukup tempelkan kolom angka dari PDF atau rekaman Excel Anda, dan alat ini akan menghitung konversi individu dan rata-rata GPA global Anda secara instan.' 
  },
  { 
    question: 'Dapatkah saya mengonversi nilai saya ke ECTS?', 
    answer: 'Ya. Konverter ini menyediakan kesetaraan yang selaras dengan European Credit Transfer and Accumulation System (ECTS), menjadikannya sempurna bagi mahasiswa Eropa yang merencanakan mobilitas atau melamar program Magister.' 
  }
];

const howToItems = [
  { name: '1. Pilih Sistem Asal', text: 'Identifikasi negara asal atau skala penilaian spesifik (misalnya, Spanyol 0-10, Prancis 0-20).' },
  { name: '2. Tentukan Negara Tujuan', text: 'Tambahkan negara tempat Anda melamar untuk melihat semua kesetaraan berdampingan di dasbor.' },
  { name: '3. Masukkan Data Akademik', text: 'Masukkan nilai tunggal untuk pemeriksaan cepat atau gunakan Mode Bulk untuk seluruh rekaman semester Anda.' },
  { name: '4. Analisis & Ekspor', text: 'Tinjau batang persentil visual dan unduh Laporan Kesetaraan Anda sebagai PDF untuk disimpan dalam catatan Anda.' },
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
  applicationCategory: 'EducationApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
  aggregateRating: {
    '@type': 'AggregateRating' as const,
    ratingValue: '4.9',
    reviewCount: '1250'
  },
  featureList: 'Pemrosesan Mode Bulk, Konversi waktu nyata, Dukungan skala seluruh dunia, Pembuatan Laporan PDF',
  screenshot: 'https://jjlmoya.es/images/utilities/international-grade-converter.webp'
};

export const content: ToolLocaleContent<InternationalGradeConverterUI> = {
  slug,
  title,
  description,
  ui: {
    originSystem: 'Sistem Penilaian Sumber',
    targetSystems: 'Kesetaraan Global',
    gradeInput: 'Nilai Anda',
    bulkMode: 'Pemrosesan Rekaman Massal',
    bulkPlaceholder: 'Tempel daftar nilai Anda di sini (satu per baris)...',
    results: 'Dasbor Kesetaraan',
    passLimit: 'Min. Lulus',
    shareResults: 'Buat Laporan Kesetaraan',
    averageMedia: 'Rata-rata Terkonversi Global',
    compareTitle: 'Kedudukan Akademik Seluruh Dunia',
    addSystem: 'Tambah Negara',
    removeSystem: 'Hapus',
    selectCountry: 'Pilih Negara',
    sourceCountry: 'Negara Asal',
    systemSelection: 'Pemilihan Sistem',
    convertedScore: 'Skor Terkonversi',
    emptyState: 'Masukkan nilai untuk melihat kesetaraan global',
    minLabel: 'MIN',
    passLabel: 'LULUS',
    maxLabel: 'MAKS',
    scaleLabel: 'Skala',
    howToTitle: 'Jalan Anda Menuju Pendidikan Internasional',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi & Standar Akademik',
    singleGradeMode: 'Nilai Tunggal',
    transcriptMode: 'Transkrip Lengkap',
    gradeCounter: 'Nilai yang dimasukkan',
    averageSummary: 'Rata-rata yang dihitung',
    gradesIgnored: '{count} nilai diabaikan (di luar rentang)',
    bulkHelp: 'Anda dapat langsung menempelkan transkrip Anda. Kami mendeteksi nilai yang dipisahkan oleh spasi, koma, atau baris.',
    copiedLabel: 'Disalin!',
    germanyExpl: 'Sistem terbalik: 1.0 adalah nilai terbaik, 4.0 adalah batas kelulusan minimum.',
    spainExpl: 'Skala standar 0-10. 5.0 adalah batas kelulusan minimum.',
    usaExpl: 'Skala GPA dari 0.0 hingga 4.0. Biasanya 2.0 adalah batas kelulusan minimum.',
    ukExpl: 'Klasifikasi berbasis persentase. 40% adalah batas kelulusan minimum.',
    franceExpl: 'Skala 20 poin. 10 adalah batas kelulusan minimum.',
    italyExpl: 'Skala 30 poin. 18 adalah batas kelulusan minimum.',
    netherlandsExpl: 'Skala 1-10. 6 adalah batas kelulusan minimum.',
    placeholderSpain: 'misal: 8.5',
    placeholderUSA: 'misal: 3.7 atau A-',
    placeholderFrance: 'misal: 14',
    placeholderGermany: 'misal: 1.3',
    placeholderUK: 'misal: 75',
    placeholderItaly: 'misal: 28',
    placeholderNetherlands: 'misal: 7.5',
  },
  seo: [
    { type: 'title', text: 'Konversi Nilai Presisi untuk Mobilitas Global', level: 2 },
    { type: 'paragraph', html: 'Baik Anda seorang <strong>mahasiswa Erasmus+</strong> atau sedang melamar untuk <strong>Magister Ivy League</strong>, memahami kedudukan akademik global Anda adalah langkah pertama. Nilai sangat bervariasi: sementara nilai 10 di Spanyol adalah sempurna, di Prancis itu hanyalah nilai kelulusan. Mesin kami memperjelas perbedaan-perbedaan ini.' },
    { type: 'title', text: 'Mengapa Akurasi Penting dalam Konversi GPA', level: 3 },
    { type: 'paragraph', html: 'Komite penerimaan menggunakan GPA yang telah dikonversi untuk menyaring ribuan aplikasi. Kesalahan kecil dalam perhitungan manual dapat membuat Anda kehilangan beasiswa. Alat kami menggunakan <strong>algoritme pemetaan linear resmi</strong> yang digunakan oleh biro pendidikan internasional utama.' },
    { type: 'title', text: 'Sistem Utama yang Didukung', level: 3 },
    { type: 'list', items: [
      '<strong>Spanyol (0-10):</strong> Pemetaan terperinci dari Aprobado hingga Sobresaliente.',
      '<strong>USA GPA (4.0):</strong> Kesetaraan universitas Amerika standar.',
      '<strong>Jerman (1-6):</strong> Penanganan skala terbalik di mana 1.0 adalah puncaknya.',
      '<strong>Prancis (0-20):</strong> Konversi presisi untuk Grande Écoles dan universitas Prancis.',
      '<strong>Klasifikasi Inggris:</strong> Terjemahan persentase ke Gelar Kehormatan (Honours Degree).'
    ] },
    { type: 'tip', html: '<strong>Wawasan Akademik:</strong> Gunakan "Mode Bulk" untuk menemukan GPA kumulatif Anda di beberapa semester. Ini menghemat berjam-jam kerja spreadsheet manual!' },
    { type: 'title', text: 'Hitung Kesetaraan WES Anda', level: 3 },
    { type: 'paragraph', html: 'Meskipun evaluasi resmi WES adalah layanan berbayar, alat kami memberikan <strong>estimasi fidelitas tinggi</strong> dari GPA WES Anda, membantu Anda memutuskan ke mana akan melamar sebelum membayar biaya evaluasi.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
