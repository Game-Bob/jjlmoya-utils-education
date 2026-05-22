import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { ExamCountdownUI } from '../types';

const slug = 'exam-countdown-session-predictor-indonesian' as const;
const title = 'Hitung Mundur Ujian & Prediksi Sesi Belajar';
const description = 'Hitung kecepatan belajar harian Anda untuk menghadapi ujian dengan persiapan matang. Masukkan jumlah materi, tentukan hari istirahat, dan buat kalender belajar sendiri.';

const faqItems = [
  { question: 'Mengapa belajar setiap hari lebih baik daripada sistem kebut semalam (SKS)?', answer: 'Penelitian menunjukkan bahwa latihan terdistribusi (membagi sesi belajar dari waktu ke waktu) menghasilkan retensi jangka panjang yang jauh lebih baik dan mengurangi kecemasan secara signifikan dibandingkan menumpuk semua materi di hari-hari terakhir.' },
  { question: 'Untuk apa gunanya jeda waktu peninjauan (buffer review)?', answer: 'Jeda peninjauan mencadangkan sejumlah hari tertentu tepat sebelum ujian hanya untuk peninjauan materi secara menyeluruh. Kalkulator tidak akan menjadwalkan materi baru selama hari-hari ini, memastikan Anda memiliki waktu untuk memantapkan pemahaman.' },
  { question: 'Bagaimana hari istirahat kustom memengaruhi kecepatan belajar saya?', answer: 'Saat Anda mengecualikan suatu hari (baik sebagai hari libur mingguan maupun tanggal kustom tertentu), kalkulator mendistribusikan ulang sisa materi ke hari belajar lainnya, sehingga target harian Anda sedikit meningkat agar tetap selesai tepat waktu.' },
  { question: 'Dapatkah saya mengubah kembali hari istirahat menjadi hari belajar?', answer: 'Ya. Anda dapat mengubah status hari apa saja dalam lini masa Anda antara istirahat dan belajar secara real-time, atau menghapus tanggal kustom dari daftar untuk segera menghitung ulang.' },
];

const howToItems = [
  { name: 'Masukkan tanggal ujian', text: 'Pilih tanggal ujian Anda yang akan datang pada input kalender.' },
  { name: 'Masukkan total materi', text: 'Masukkan jumlah materi yang perlu Anda pelajari, seperti jumlah halaman, bab, atau latihan.' },
  { name: 'Atur jadwal dan jeda review', text: 'Pilih hari istirahat mingguan Anda dan atur jeda waktu peninjauan (misalnya, 2 hari untuk peninjauan akhir).' },
  { name: 'Sesuaikan dan pantau', text: 'Ubah hari kalender individu sebagai hari istirahat kustom langsung di lini masa Anda untuk menyesuaikan dengan jadwal pribadi.' },
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

export const content: ToolLocaleContent<ExamCountdownUI> = {
  slug,
  title,
  description,
  ui: {
    title: 'Perencana Belajar & Hitung Mundur',
    examDateLabel: 'Tanggal Ujian',
    materialLabel: 'Total Materi (Halaman / Bab)',
    materialUnitLabel: 'Satuan Materi',
    progressLabel: 'Selesai Sejauh Ini',
    weeklyScheduleLabel: 'Hari Belajar Mingguan',
    reviewBufferLabel: 'Jeda Peninjauan (Hari)',
    excludedDatesLabel: 'Hari Istirahat Kustom',
    dailyPaceLabel: 'Kecepatan Belajar Harian',
    daysLeftLabel: 'Hari Tersisa',
    studyDaysLabel: 'Hari Belajar',
    bufferDaysLabel: 'Hari Jeda',
    scheduleTitle: 'Kalender Belajar Kustom Anda',
    resetButton: 'Kembalikan ke Default',
    addExclusionButton: 'Tambah Hari Istirahat',
    daysOfWeek: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    dayTypes: {
      study: 'Hari Belajar',
      rest: 'Hari Istirahat',
      review: 'Jeda Peninjauan',
      exam: 'Hari Ujian',
    },
    units: {
      pages: 'Halaman',
      chapters: 'Bab',
      exercises: 'Latihan',
      modules: 'Modul',
      topics: 'Topik',
    },
    noStudyDaysError: 'Anda tidak memiliki hari belajar yang tersedia! Periksa jadwal mingguan dan pengaturan jeda peninjauan Anda.',
    examInPastError: 'Tanggal ujian harus di masa mendatang.',
    noMaterialError: 'Silakan masukkan jumlah total materi yang lebih besar dari nol.',
    scheduleTableHeader: {
      date: 'Tanggal',
      day: 'Hari',
      type: 'Status',
      target: 'Target Harian',
      cumulative: 'Kemajuan Keseluruhan',
      action: 'Tindakan Cepat',
    },
    markAsRest: 'Tandai Istirahat',
    markAsStudy: 'Tandai Belajar',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi & Sumber Akademik',
  },
  seo: [
    { type: 'title', text: 'Cara Mengatur Tempo Sesi Belajar Anda untuk Retensi Maksimal', level: 2 },
    { type: 'paragraph', html: 'Mempersiapkan diri untuk ujian bukan sekadar tentang berapa jam yang Anda habiskan pada malam terakhir, melainkan tentang bagaimana Anda mendistribusikan beban belajar Anda. Mengatur tempo belajar sangat penting untuk menghindari kejenuhan kognitif, meningkatkan daya ingat, dan memastikan Anda mempelajari seluruh materi tanpa panik.' },
    { type: 'title', text: 'Ilmu tentang Pembelajaran Terdistribusi dan Spaced Repetition', level: 3 },
    { type: 'paragraph', html: 'Otak kita belajar paling baik melalui jeda waktu. Ketika Anda menyebarkan sesi belajar selama beberapa minggu, Anda memungkinkan otak Anda untuk membangun hubungan saraf yang lebih kuat melalui proses konsolidasi. Pengulangan berjarak (spaced repetition) mencegah kelelahan mental dan membantu mentransfer informasi dari ingatan jangka pendek ke ingatan jangka panjang.' },
    { type: 'paragraph', html: 'Menurut teori Kurva Lupa Ebbinghaus, kekuatan ingatan kita akan berkurang seiring waktu kecuali kita mengulas kembali materi tersebut secara aktif. Interval belajar terstruktur bertindak sebagai penyetelan ulang, memperlambat laju lupa dan membangun pemahaman konseptual yang mendalam.' },
    { type: 'title', text: 'Menetapkan Jeda untuk Peninjauan Akhir', level: 3 },
    { type: 'paragraph', html: 'Kesalahan umum yang sering terjadi adalah merencanakan untuk mempelajari materi baru hingga menit terakhir. Memiliki jeda peninjauan khusus (biasanya 2 hingga 5 hari sebelum ujian) memungkinkan Anda untuk berlatih ujian tiruan, meninjau ringkasan, dan mengatasi bagian yang masih lemah. Ini juga memastikan Anda mendapatkan tidur yang cukup agar tampil prima saat ujian.' },
    { type: 'title', text: 'Kekuatan Perencanaan yang Adaptif', level: 3 },
    { type: 'paragraph', html: 'Rencana belajar statis hampir selalu gagal karena hidup tidak dapat diprediksi. Jika Anda tertinggal beberapa halaman, rencana statis langsung menjadi usang. Kalkulator adaptif menghitung ulang kebutuhan harian Anda secara real-time, menghilangkan stres akibat hambatan kecil.' },
    { type: 'list', items: [
      'Masukkan kemajuan Anda secara berkala agar perhitungan tetap akurat.',
      'Sesuaikan tanggal target jika Anda menghadapi konflik jadwal yang tidak terduga.',
      'Pertahankan kecepatan yang konsisten daripada mencoba mengejar ketertinggalan besar dalam satu hari.'
    ] },
    { type: 'title', text: 'Fleksibilitas: Memperhitungkan Hari Istirahat', level: 3 },
    { type: 'paragraph', html: 'Istirahat bukanlah hadiah; melainkan bagian penting dari proses pembelajaran. Dengan merencanakan hari istirahat ke dalam kalender belajar, Anda terhindar dari kelelahan. Kalkulator ini memungkinkan Anda merencanakan hari-hari ini sebelumnya dan menyesuaikan target harian secara otomatis.' },
    { type: 'tip', html: '<strong>Rencanakan hal yang tidak terduga.</strong> Selalu sisakan setidaknya satu hari istirahat mingguan. Ini bertindak sebagai katup pengaman. Jika Anda sakit atau memiliki keadaan darurat, Anda dapat menggunakan hari itu untuk mengejar ketertinggalan tanpa merusak jadwal utama.' },
    { type: 'title', text: 'Cara Menghitung Kecepatan Belajar Anda Secara Manual', level: 3 },
    { type: 'paragraph', html: 'Untuk menghitung target belajar harian secara manual, Anda dapat menggunakan rumus matematika sederhana. Pertama, tentukan sisa beban kerja Anda dengan mengurangi materi yang telah diselesaikan dari total materi. Selanjutnya, hitung total hari antara hari ini dan ujian Anda, lalu kurangi hari istirahat dan hari jeda peninjauan. Terakhir, bagi sisa beban kerja dengan hari belajar yang tersedia.' },
    { type: 'paragraph', html: 'Sebagai contoh, jika Anda memiliki 400 halaman untuk dipelajari, telah menyelesaikan 50 halaman, memiliki sisa waktu 20 hari hingga ujian, berencana mengambil 4 hari istirahat, dan menginginkan jeda peninjauan 2 hari: sisa beban kerja Anda adalah 350 halaman, dan hari belajar Anda adalah 14. Kecepatan harian Anda adalah 350 dibagi 14, yang setara dengan 25 halaman per hari.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
