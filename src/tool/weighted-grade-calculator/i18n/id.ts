import type { ToolLocaleContent } from '../../../types';
import type { WeightedGradeCalculatorUI } from '../index';

const slug = 'kalkulator-nilai-tertimbang-skor-akhir';
const title = 'Kalkulator Nilai Tertimbang & Skor Akhir';
const description = 'Berhenti stres memikirkan IPK Anda! Hitung nilai kursus dan skor akhir Anda dengan mudah. Cukup masukkan tugas, ujian, dan bobotnya untuk melihat posisi Anda.';

const faqItems = [
  { question: 'Apa sebenarnya nilai tertimbang itu?', answer: 'Dalam banyak kursus, tidak semua tugas memiliki bobot yang sama. Ujian akhir mungkin bernilai 40% dari nilai Anda, sementara pekerjaan rumah hanya 10%. Nilai tertimbang memperhitungkan perbedaan ini sehingga Anda mengetahui posisi Anda yang sebenarnya.' },
  { question: 'Di mana saya bisa menemukan bobot nilai saya?', answer: 'Biasanya, bobot ini tercantum dalam silabus kursus Anda di bawah "Kebijakan Penilaian" atau "Asesmen". Profesor menetapkan persentase untuk berbagai kategori seperti partisipasi, kuis, dan proyek.' },
  { question: 'Bagaimana jika tugas saya belum mencapai total 100%?', answer: 'Jangan khawatir! Kalkulator kami akan menunjukkan nilai "proyeksi" berdasarkan tugas yang telah Anda selesaikan sejauh ini. Ini menskalakan skor Anda saat ini ke ekuivalen 100%.' },
  { question: 'Bisakah saya menggunakan ini untuk IPK saya?', answer: 'Tentu saja. Anda dapat memperlakukan setiap kursus sebagai "mata pelajaran" dan menggunakan jam kreditnya sebagai "bobot" untuk menemukan rata-rata tertimbang semester Anda.' },
];

const howToItems = [
  { name: 'Daftarkan tugas Anda', text: 'Masukkan nama ujian, kuis, atau proyek Anda. Jaga agar tetap teratur!' },
  { name: 'Masukkan skor Anda', text: 'Ketik nilai yang Anda terima untuk setiap item (biasanya dari 10 atau 100).' },
  { name: 'Tambahkan bobot', text: 'Periksa silabus Anda dan masukkan persentase kontribusi setiap item terhadap nilai akhir Anda.' },
  { name: 'Periksa hasilnya', text: 'Lihat nilai akhir Anda diperbarui secara instan. Tidak perlu perhitungan manual!' },
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
  faqTitle: 'Masih punya pertanyaan?',
  bibliographyTitle: 'Pelajari Lebih Lanjut',
  ui: {
    addSubject: 'Tambah Item',
    subjects: 'Nilai & Bobot',
    subjectName: 'Tugas / Mata Pelajaran',
    grade: 'Nilai',
    weight: 'Bobot (%)',
    scale: 'Skala (misalnya, 4.0, 10, 100)',
    finalGrade: 'Nilai Anda Saat Ini',
    removeSubject: 'Hapus',
    weightSum: 'Total Bobot',
    exampleSubject: 'Ujian Akhir',
    newSubjectPlaceholder: 'misal, Tengah Semester',
  },
  seo: [
    { type: 'title', text: 'Cara Menguasai Nilai Anda dengan Kalkulator Tertimbang', level: 2 },
    { type: 'paragraph', html: 'Pernah merasa bingung melihat tumpukan nilai? Anda tidak sendirian. Memahami <strong>rata-rata tertimbang</strong> Anda adalah rahasia untuk tetap unggul di sekolah menengah dan perguruan tinggi.' },
    { type: 'title', text: 'Mengapa Nilai Tertimbang Itu Penting', level: 3 },
    { type: 'paragraph', html: 'Rata-rata sederhana memperlakukan setiap tugas dengan cara yang sama. Namun di dunia nyata (и dalam silabus Anda), kuis berdurasi 2 menit tidak boleh dihitung sama besarnya dengan makalah akhir setebal 20 halaman. Nilai tertimbang memberikan lebih banyak "kekuatan" pada hal-hal yang penting.' },
    { type: 'paragraph', html: 'Apakah Anda sedang menghitung <strong>IPK semester</strong> Anda atau hanya mencoba melihat apakah Anda bisa melewatkan tugas opsional terakhir, pembobotan adalah alat yang Anda butuhkan.' },
    { type: 'title', text: 'Hitung Nilai Akhir Anda dalam 3 Langkah', level: 3 },
    { type: 'list', items: ['Temukan bobot setiap kategori dalam silabus Anda (misalnya, Ujian 50%, Pekerjaan Rumah 20%).', 'Kalikan skor Anda dengan bobot tersebut (misalnya, skor 90 * bobot 0,50 = 45 poin).', 'Jumlahkan semua poin tersebut untuk mendapatkan persentase akhir Anda.'] },
    { type: 'title', text: 'Tips Pro: Permainan "Bagaimana Jika"', level: 3 },
    { type: 'paragraph', html: 'Gunakan kalkulator ini untuk mensimulasikan berbagai skenario. "Bagaimana jika saya mendapat nilai 85 pada ujian akhir?" atau "Bagaimana jika saya melewatkan pekerjaan rumah ini?" Melihat dampaknya secara real-time membantu Anda memprioritaskan waktu belajar di bagian yang benar-benar memberikan pengaruh.' },
    { type: 'tip', html: '<strong>Jangan panik.</strong> Jika bobot Anda belum mencapai 100%, kalkulator akan memproyeksikan seperti apa nilai Anda berdasarkan tugas saat ini. Ini adalah cara yang bagus untuk melacak kemajuan di pertengahan semester!' },
    { type: 'title', text: 'Aritmetika vs Tertimbang: Perbedaan Sebenarnya', level: 3 },
    { type: 'paragraph', html: 'Rata-rata aritmetika bisa sangat menyesatkan. Jika Anda mendapat nilai 100% pada kuis kecil tetapi 50% pada ujian utama, rata-rata sederhana mengatakan Anda mendapat nilai 75% (lulus). Namun jika ujian tersebut bernilai 90% dari nilai Anda, <strong>nilai tertimbang Anda yang sebenarnya</strong> mendekati 55% (gagal). Selalu perhatikan bobotnya!' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography: [
    { name: 'Memahami Rata-rata Tertimbang (Wikipedia)', url: 'https://id.wikipedia.org/wiki/Rata-rata_tertimbang' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
