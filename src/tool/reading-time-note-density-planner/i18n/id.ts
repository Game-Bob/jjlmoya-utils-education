import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ReadingTimeNoteDensityPlannerUI } from '../entry';

const slug = 'perencana-waktu-baca-kepadatan-catatan' as const;
const title = 'Perencana Waktu Membaca & Kepadatan Catatan';
const description = 'Estimasikan waktu membaca akademis setelah memperhitungkan pembuatan catatan, lalu bagi beban kerja ke dalam sesi belajar yang praktis.';

const faqItems = [
  { question: 'Mengapa mencatat sangat memengaruhi waktu membaca?', answer: 'Membaca akademis jarang sekali hanya memindai kata-kata. Setiap anotasi, ringkasan, pertanyaan di margin, atau flashcard menambah waktu pemrosesan. Merencanakan kepadatan catatan secara terpisah mencegah estimasi halaman-per-jam yang optimis berubah menjadi tumpukan tugas di malam hari.' },
  { question: 'Berapa estimasi halaman-per-jam yang baik?', answer: 'Untuk buku teks yang padat, 15 hingga 25 halaman per jam adalah hal yang umum. Untuk bacaan yang lebih ringan, 30 hingga 50 halaman per jam mungkin realistis. Jika materi memiliki rumus, sumber primer, atau kosakata asing, mulailah dengan estimasi lebih rendah dan sesuaikan setelah satu sesi uji waktu.' },
  { question: 'Bagaimana cara memilih kepadatan catatan?', answer: 'Gunakan 1 hingga 2 menit per halaman untuk penyorotan ringan atau outline singkat, 3 hingga 5 menit per halaman untuk catatan Cornell, dan lebih dari 5 minut per halaman saat Anda membuat flashcard, menyelesaikan contoh soal, atau menulis paragraf sintesis.' },
  { question: 'Bisakah perencana ini menggantikan jadwal silabus?', answer: 'Tidak. Alat ini membantu mengubah volume bacaan menjadi waktu dan sesi belajar, tetapi batas waktu, seminar, praktikum, dan blok revisi tetap perlu ditempatkan di kalender utama Anda.' },
];

const howToItems = [
  { name: 'Masukkan beban membaca', text: 'Tambahkan jumlah halaman atau unit setara halaman yang perlu Anda selesaikan.' },
  { name: 'Atur waktu yang tersedia', text: 'Masukkan total menit yang secara realistis dapat Anda habiskan sebelum batas waktu.' },
  { name: 'Estimasikan kecepatan baca dan kepadatan catatan', text: 'Pilih kecepatan halaman-per-jam dan rata-rata menit mencatat yang Anda harapkan per halaman.' },
  { name: 'Bagi menjadi beberapa sesi', text: 'Atur jumlah sesi untuk melihat halaman, menit, dan beban catatan per sesi.' },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'IDR' },
};

export const content: ToolLocaleContent<ReadingTimeNoteDensityPlannerUI> = {
  slug,
  title,
  description,
  ui: {
    pagesLabel: 'Halaman untuk dibaca',
    minutesLabel: 'Menit yang tersedia',
    speedLabel: 'Kecepatan membaca, halaman/jam',
    densityLabel: 'Kepadatan catatan, menit/halaman',
    sessionsLabel: 'Sesi belajar',
    totalTimeLabel: 'Total beban kerja',
    readingTimeLabel: 'Membaca',
    noteTimeLabel: 'Catatan',
    coverageLabel: 'Cakupan waktu',
    pagesSessionLabel: 'Halaman/sesi',
    minutesSessionLabel: 'Menit/sesi',
    notesSessionLabel: 'Menit catatan/sesi',
    controlsAriaLabel: 'Kontrol rencana membaca',
    minuteUnit: 'menit',
    hourUnit: 'jam',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi & Sumber Daya Akademik',
    statusLabels: {
      comfortable: 'Rencana nyaman',
      tight: 'Ketat tetapi bisa berjalan',
      overloaded: 'Jadwal kelebihan beban',
    },
    resetButton: 'Reset',
  },
  seo: [
    { type: 'title', text: 'Rencanakan Waktu Membaca Dengan Catatan, Bukan Hanya Halaman', level: 2 },
    { type: 'paragraph', html: 'Banyak mahasiswa mengestimasi waktu membaca dengan membagi halaman dengan perkiraan kecepatan kasar, lalu melupakan biaya tersembunyi terbesar: catatan. Bab sepanjang empat puluh halaman bisa menjadi tugas sembilan puluh menit jika Anda hanya memindainya, atau tugas tiga jam jika Anda membuat anotasi, meringkas, dan mengubah ide menjadi petunjuk ulasan. Perencana ini memisahkan kecepatan membaca dari kepadatan catatan sehingga jadwal Anda mencerminkan tugas akademis yang sebenarnya.' },
    { type: 'diagnostic', variant: 'info', title: 'Kapan rencana membaca Anda mungkin terlalu optimis', html: '<ul><li>Waktu yang Anda miliki hanya mencakup menit membaca mentah, bukan catatan atau penyelesaian masalah.</li><li>Anda menggunakan perkiraan halaman-per-jam yang sama untuk novel, buku teks, makalah penelitian, dan kasus hukum.</li><li>Sesi Anda lebih lama dari rentang perhatian biasa Anda, sehingga halaman-halaman berikutnya menerima catatan dengan kualitas lebih rendah.</li><li>Tenggat waktu mencakup tugas kuliah lainnya, tetapi rencana membaca mengasumsikan setiap menit luang adalah milik satu kelas.</li></ul>' },
    { type: 'title', text: 'Memilih Kecepatan Halaman-Per-Jam yang Realistis', level: 3 },
    { type: 'table', headers: ['Jenis materi', 'Kecepatan awal', 'Saran perencanaan'], rows: [['Tinjauan ringan atau konten yang dikenal', '40-60 halaman/jam', 'Gunakan hanya jika Anda sudah menguasai kosakata dan membaca untuk menyegarkan ingatan, bukan penguasaan.'], ['Bab buku teks standar', '20-35 halaman/jam', 'Kurangi kecepatan jika bab tersebut menyertakan contoh soal, diagram, atau pemeriksaan akhir bagian.'], ['Teori padat, penelitian, atau sumber primer', '8-20 halaman/jam', 'Rencanakan sesi yang lebih lambat dan tambahkan blok rekap karena pemahaman biasanya muncul setelah membaca ulang.']] },
    { type: 'tip', html: '<strong>Kalibrasi setelah satu sesi.</strong> Waktui sepuluh halaman pertama, termasuk catatan. Jika kalkulator mengatakan rencana itu nyaman tetapi sesi dengan pengukur waktu mengatakan sebaliknya, percayai sesi dengan pengukur waktu dan turunkan kecepatan Anda.' },
    { type: 'title', text: 'Apa Arti Kepadatan Catatan', level: 3 },
    { type: 'paragraph', html: 'Kepadatan catatan adalah waktu rata-rata yang dihabiskan untuk memproses setiap halaman setelah atau saat membacanya. Pendekatan kepadatan rendah mungkin berarti satu kata kunci margin dan satu sorotan stabilo. Pendekatan kepadatan tinggi mungkin berarti catatan Cornell, ringkasan singkat, daftar pertanyaan, dan tiga flashcard. Nilai yang tepat bergantung pada gaya penilaian: kuis faktual membutuhkan petunjuk pengambilan memori, ujian esai membutuhkan peta argumen, dan kursus kuantitatif membutuhkan contoh soal.' },
    { type: 'comparative', title: 'Catatan ringan vs catatan mendalam', columns: 2, items: [{ title: 'Catatan ringan', description: 'Penyelesaian lebih cepat, berguna untuk survei bacaan awal, tetapi lebih mudah dilupakan dan lebih sulit untuk direvisi nanti.', points: ['Terbaik untuk konten yang dikenal', 'Beban kerja langsung lebih rendah', 'Hasil revisi lebih lemah'] }, { title: 'Catatan mendalam', description: 'Penyelesaian lebih lambat, lebih baik untuk persiapan ujian, seminar, dan tugas menulis di mana bukti harus diingat dengan akurat.', highlight: true, points: ['Terbaik untuk konten yang dinilai', 'Beban kerja langsung lebih tinggi', 'Bahan ulasan yang lebih kuat'] }] },
    { type: 'summary', title: 'Aturan praktis perencanaan', items: ['Jaga agar sesi membaca biasa di bawah 75 menit jika memungkinkan.', 'Jika catatan melebihi waktu membaca, bagi tugas menjadi dua tahap: baca dulu, sintesis kemudian.', 'Sisakan sesi terakhir untuk konsolidasi alih-alih menetapkan halaman baru hingga tenggat waktu.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
