import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { AcademicScheduleOptimizerUI } from '../entry';

const slug = 'pengoptimal-jadwal-akademik' as const;
const title = 'Pengoptimal Jadwal Akademik';
const description = 'Buat jadwal kelas mingguan visual, beri kode warna pada mata kuliah, deteksi sesi yang bentrok, dan ekspor jadwal Anda sebagai file kalender .ics.';

const faqItems = [
  {
    question: 'Bagaimana cara kerja detektor bentrokan jadwal?',
    answer: 'Setiap blok kelas memiliki hari, jam mulai, dan durasi. Alat ini membandingkan setiap pasang blok dan menandainya jika berada pada hari yang sama dan rentang waktunya berpotongan.'
  },
  {
    question: 'Apakah saya bisa memindahkan kelas langsung di kalender?',
    answer: 'Ya. Seret blok kelas ke kolom hari lain untuk menguji tata letak mingguan yang baru. Status bentrokan akan langsung diperbarui setelah pemindahan.'
  },
  {
    question: 'Apa saja yang termasuk dalam ekspor .ics?',
    answer: 'Ekspor menghasilkan file iCalendar standar dengan setiap kelas sebagai acara, termasuk mata kuliah, ruangan, waktu mulai, dan waktu selesai. Anda dapat mengimpornya ke banyak aplikasi kalender.'
  },
  {
    question: 'Mengapa saya harus memberi kode warna pada mata kuliah?',
    answer: 'Warna membuat jadwal yang padat lebih mudah dipindai dengan cepat. Gunakan warna berbeda untuk praktikum, kuliah, seminar, atau mata kuliah dengan tingkat kesulitan tinggi agar bentrokan dan hari-hari padat terlihat lebih cepat.'
  }
];

const howToItems = [
  { name: 'Tambahkan detail kelas', text: 'Masukkan mata kuliah, ruangan, hari, jam mulai, durasi, dan warna.' },
  { name: 'Tempatkan blok pada kisi mingguan', text: 'Gunakan blok yang dihasilkan untuk melihat bagaimana setiap kelas cocok dengan jadwal mingguan Anda.' },
  { name: 'Selesaikan bentrokan', text: 'Cari blok bentrokan yang disorot, lalu pindahkan atau edit sesi hingga panel bentrokan bersih.' },
  { name: 'Ekspor kalender Anda', text: 'Unduh file .ics dan impor ke Google Calendar, Apple Calendar, Outlook, atau aplikasi kalender lainnya.' },
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

export const content: ToolLocaleContent<AcademicScheduleOptimizerUI> = {
  slug,
  title,
  description,
  ui: {
    subjectLabel: 'Mata Kuliah',
    roomLabel: 'Ruangan',
    dayLabel: 'Hari',
    startLabel: 'Mulai',
    durationLabel: 'Durasi',
    colorLabel: 'Warna',
    addClass: 'Tambah kelas',
    saveClass: 'Simpan kelas',
    newClass: 'Kelas baru',
    exportICS: 'Ekspor .ics',
    conflictLabel: 'Bentrokan jadwal',
    noConflicts: 'Tidak ada bentrokan yang terdeteksi',
    removeLabel: 'Hapus kelas',
    editHint: 'Pilih kelas untuk mengeditnya, atau seret ke hari dan waktu lain.',
    weekendDaysLabel: 'Hari akhir pekan',
    saturdayLabel: 'Sabtu',
    sundayLabel: 'Minggu',
    weekDayLabels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum'],
    weekendDayShortLabels: ['Sab', 'Min'],
    hourOptions: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    durationValues: ['1', '2', '3'],
    durationOptions: ['1 jam', '2 jam', '3 jam'],
    hourSuffix: ':00',
    timeSeparator: ' - ',
    defaultSubject: 'Kalkulus',
    defaultRoom: 'Ruangan 204',
    defaultNewSubject: 'Kelas baru',
    defaultFormDay: '0',
    defaultFormStart: '8',
    defaultFormDuration: '1',
    defaultColor: '#2f8f83',
    defaultEvents: [
      { id: 'event-0', subject: 'Kalkulus', room: 'Ruangan 204', day: 0, start: 9, duration: 2, color: '#2f8f83' },
      { id: 'event-1', subject: 'Kesusastraan', room: 'Lab B', day: 1, start: 11, duration: 2, color: '#c45a4a' },
      { id: 'event-2', subject: 'Fisika', room: 'Auditorium', day: 3, start: 10, duration: 3, color: '#6b5fc7' },
    ],
    removeGlyph: 'x',
    exportFilename: 'jadwal-akademik.ics',
    exportWeekStartISO: '2026-01-05',
    overlapSingular: 'bentrokan',
    overlapPlural: 'bentrokan',
    detectedLabel: 'terdeteksi',
    classEditorAriaLabel: 'Editor kelas',
    weeklyScheduleAriaLabel: 'Jadwal mingguan',
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi & Standar Kalender',
  },
  seo: [
    { type: 'title', text: 'Cara Membuat Jadwal Akademik Mingguan yang Benar-Benar Berfungsi', level: 2 },
    { type: 'paragraph', html: 'Jadwal yang baik melakukan lebih dari sekadar mencantumkan kelas. Ini menunjukkan di bagian mana minggu Anda terlalu padat, hari apa yang terfragmentasi, dan apakah dua sesi wajib saling bertabrakan. Pengoptimal jadwal akademik visual membuat masalah-masalah tersebut terlihat sebelum berubah menjadi kelas yang terlewat, perjalanan yang terburu-buru, atau pilihan pendaftaran yang tidak memungkinkan.' },
    { type: 'summary', title: 'Apa yang harus diperiksa sebelum menyelesaikan jadwal', items: [
      'Tidak ada dua kelas wajib yang tumpang tindih pada hari yang sama.',
      'Hari Sabtu dan Minggu dapat diaktifkan untuk sistem sekolah yang menggunakan kelas akhir pekan.',
      'Praktikum, seminar, dan kuliah menggunakan warna berbeda untuk pemindaian cepat.',
      'Mata kuliah yang berat tidak ditumpuk berturut-turut tanpa waktu istirahat.',
      'Jadwal akhir dapat diekspor ke aplikasi kalender harian Anda.'
    ] },
    { type: 'title', text: 'Mengapa Kisi Visual Lebih Baik daripada Daftar Biasa', level: 3 },
    { type: 'paragraph', html: 'Daftar mata kuliah biasa menyembunyikan tekanan waktu karena memisahkan setiap kelas dari sisa minggu lainnya. Sebuah kisi segera mengungkapkan kepadatan jadwal. Anda dapat melihat apakah hari Senin memiliki terlalu banyak jam pelajaran, apakah kuliah menghalangi praktikum, apakah sesi sekolah hari Sabtu mengubah ritme mingguan, dan apakah ruangan yang sama atau pola perjalanan menciptakan hambatan tersembunyi.' },
    { type: 'comparative', columns: 3, items: [
      { title: 'Daftar mata kuliah', description: 'Bagus untuk kode pendaftaran, lemah untuk mendeteksi tekanan mingguan.' },
      { title: 'Kisi mingguan', description: 'Terbaik untuk memahami ritme, celah, dan bentrokan dalam sekejap.', highlight: true },
      { title: 'Hanya aplikasi kalender', description: 'Berguna setelah perencanaan, tetapi lebih lambat untuk bereksperimen dengan banyak alternatif.' }
    ] },
    { type: 'title', text: 'Bagaimana Deteksi Bentrokan Bekerja', level: 3 },
    { type: 'paragraph', html: 'Dua kelas bentrok ketika terjadi pada hari yang sama dan rentang waktunya saling berpotongan. Sebagai contoh, kuliah pukul 10:00 hingga 12:00 tumpang tindih dengan seminar pukul 11:00 hingga 13:00 karena keduanya menempati jam 11:00. Alat ini memeriksa setiap blok terhadap setiap blok lainnya dan menandai kedua sisi tabrakan.' },
    { type: 'table', headers: ['Kelas A', 'Kelas B', 'Hasil'], rows: [
      ['Senin 09:00-11:00', 'Senin 11:00-13:00', 'Tidak ada bentrokan karena kelas yang satu berakhir saat kelas lainnya dimulai.'],
      ['Selasa 10:00-12:00', 'Selasa 11:00-13:00', 'Bentrokan karena rentang waktu saling berpotongan.'],
      ['Rabu 09:00-11:00', 'Kamis 09:00-11:00', 'Tidak ada bentrokan karena harinya berbeda.']
    ] },
    { type: 'title', text: 'Menggunakan Warna sebagai Sinyal Perencanaan Akademik', level: 3 },
    { type: 'paragraph', html: 'Warna bukan sekadar hiasan. Ini dapat menyandikan jenis mata kuliah, tingkat kesulitan, lokasi kampus, atau tingkat energi yang dibutuhkan. Palet yang konsisten membuat jadwal lebih mudah dibaca di bawah tekanan, terutama saat membandingkan kelas alternatif selama pendaftaran mata kuliah.' },
    { type: 'tip', html: '<strong>Jaga agar arti warna tetap konsisten.</strong> Misalnya, gunakan satu rumpun warna untuk praktikum, rumpun lain untuk kuliah umum, dan warna peringatan untuk sesi yang memerlukan perjalanan jauh atau persiapan berat.' },
    { type: 'title', text: 'Mengekspor ke Aplikasi Kalender', level: 3 },
    { type: 'paragraph', html: 'Format .ics adalah format pertukaran iCalendar standar. Mengekspor jadwal akademik memungkinkan Anda mengimpor kelas ke Google Calendar, Apple Calendar, Outlook, dan banyak sistem kalender sekolah lainnya. Setelah diimpor, Anda dapat menambahkan pengingat, waktu perjalanan, aturan berulang, dan blok belajar mandiri.' },
    { type: 'diagnostic', variant: 'warning', title: 'Sebelum mengimpor', html: 'Periksa apakah tanggal mulai minggu cocok dengan minggu yang ingin Anda impor, tinjau zona waktu di dalam aplikasi kalender Anda, dan konfirmasikan bahwa acara yang diimpor tidak menduplikasi umpan kalender sekolah yang sudah ada.' },
    { type: 'title', text: 'Alur Kerja Praktis untuk Pendaftaran Mata Kuliah', level: 3 },
    { type: 'list', items: [
      'Tambahkan kelas wajib terlebih dahulu dan selesaikan bentrokan jadwal sebelum menambahkan kelas pilihan.',
      'Aktifkan hari Sabtu atau Minggu ketika kalender sekolah Anda mencakup pembelajaran akhir pekan.',
      'Gunakan warna untuk memisahkan kuliah, praktikum, seminar, dan studi mandiri.',
      'Seret blok di antara hari-hari untuk membandingkan kelas alternatif dengan cepat.',
      'Sisakan celah kosong yang terlihat untuk makan, waktu perjalanan, dan waktu istirahat.',
      'Ekspor hanya setelah panel bentrokan bersih.'
    ] },
    { type: 'message', title: 'Perencanaan adalah proses berulang', html: 'Perlakukan versi pertama sebagai draf. Jadwal terbaik biasanya muncul setelah Anda menguji bentrokan, membandingkan format kelas, dan memeriksa apakah ritme mingguan dapat dijalankan secara berkelanjutan.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
