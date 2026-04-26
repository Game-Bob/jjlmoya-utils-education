import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { PomodoroFlowUI } from '../index';

const slug = 'pomodoro-flow' as const;
const title = 'Pomodoro Flow';
const description = 'Kuasai produktivitas Anda dengan manajemen waktu yang berfokus pada zen. Sesuaikan siklus kerja/istirahat, lacak interupsi, dan visualisasikan pola fokus Anda secara real-time.';

const faqItems = [
  { question: 'Apa itu Teknik Pomodoro?', answer: 'Teknik Pomodoro adalah metode manajemen waktu yang menggunakan interval kerja terfokus (biasanya 25 menit) diikuti dengan istirahat singkat. Alat ini mengembangkannya dengan siklus yang dapat disesuaikan dan analitik mendetail.' },
  { question: 'Dapatkah saya menyesuaikan durasi kerja/istirahat?', answer: 'Ya! Pilih dari tiga prasetel (Seed: 25/5, Tree: 50/10, Mountain: 90/15) atau sesuaikan waktu secara langsung dengan tombol +5 dan -5 menit.' },
  { question: 'Apa kegunaan pelacakan interupsi?', answer: 'Setiap kali Anda mengeklik tombol distraksi, alat ini mencatat interupsi. Ini membantu menghitung Skor Fokus Anda dan mengidentifikasi pola dalam konsentrasi Anda.' },
  { question: 'Bagaimana Skor Fokus dihitung?', answer: 'Skor Fokus = ((Waktu Kerja - Interupsi × 2) / Waktu Kerja) × 100. Ini memperhitungkan biaya kognitif dari peralihan konteks.' },
  { question: 'Dapatkah saya mengekspor data sesi saya?', answer: 'Ya. Anda dapat menyalin ringkasan sesi Anda sebagai Markdown (bagus untuk Notion/Obsidian) atau berbagi ringkasan visual di media sosial.' },
];

const howToItems = [
  { name: 'Masukkan tugas Anda', text: 'Ketik apa yang akan Anda kerjakan. Ini membantu menjaga konteks dan niat.' },
  { name: 'Pilih siklus', text: 'Pilih Seed (25/5) untuk tugas cepat, Tree (50/10) untuk pekerjaan standar, atau Mountain (90/15) untuk fokus mendalam.' },
  { name: 'Mulai dan fokus', text: 'Timer dimulai. Klik lingkaran untuk menjeda. Gunakan +5/-5 untuk menyesuaikan jika perlu. Bilah judul menunjukkan waktu yang tersisa.' },
  { name: 'Lacak interupsi', text: 'Terganggu? Klik tombol Peringatan Distraksi. Alat ini mencatatnya untuk menghitung Skor Fokus Anda.' },
  { name: 'Tinjau hasil Anda', text: 'Setelah sesi Anda, lihat statistik Anda: Skor Fokus, rincian tugas, dan heatmap bulanan produktivitas Anda.' },
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

export const content: ToolLocaleContent<PomodoroFlowUI> = {
  slug,
  title,
  description,
  ui: {
    taskInput: 'Apa yang akan Anda kerjakan?',
    selectCycle: 'Pilih siklus fokus Anda',
    startButton: 'Mulai',
    seed: 'Seed',
    tree: 'Tree',
    mountain: 'Mountain',
    timer: 'Timer',
    pauseButton: 'Jeda',
    resumeButton: 'Lanjutkan',
    distractionButton: 'Peringatan Distraksi',
    addFiveMin: '+5m',
    subtractFiveMin: '-5m',
    focusMode: 'Fokus',
    breakTime: 'Istirahat',
    sessionComplete: 'Sesi Selesai',
    endSession: 'Akhiri Sesi',
    focusScore: 'Skor Fokus',
    totalTime: 'Total Waktu',
    interruptions: 'Interupsi',
    taskBreakdown: 'Rincian Tugas',
    monthlyHeatmap: 'Aktivitas Bulanan',
    copyMarkdown: 'Salin Markdown',
    shareImage: 'Bagikan',
    wellnessMessage: 'Istirahatlah sejenak, Anda layak mendapatkannya',
    sessionSummary: 'Ringkasan Sesi',
    newSession: 'Sesi Baru',
    copied: 'Disalin!',
    unnamedTask: 'Tugas Tanpa Nama',
    breakTimeNotification: 'Waktunya istirahat!',
    focusTimeNotification: 'Waktunya fokus!',
    interruptionsLabel: 'Interupsi:',
    studySession: 'Sesi Belajar',
  },
  seo: [
    { type: 'title', text: 'Kuasai Fokus dengan Pomodoro Flow', level: 2 },
    { type: 'paragraph', html: 'Produktivitas bukan tentang bekerja lebih keras—ini tentang bekerja lebih cerdas. <strong>Pomodoro Flow</strong> menggabungkan Teknik Pomodoro yang terbukti dengan desain yang berfokus pada zen dan analitik real-time untuk membantu Anda memahami <em>bagaimana</em> Anda bekerja dengan baik.' },
    { type: 'title', text: 'Mengapa Pomodoro Bekerja', level: 3 },
    { type: 'paragraph', html: 'Manusia tidak diciptakan untuk maraton hiper-fokus selama 8 jam. Otak kita bekerja paling baik dalam siklus kerja terfokus yang diikuti oleh istirahat pemulihan. Teknik Pomodoro mengubah ini menjadi ritual sederhana: bekerja secara intens selama 25 menit, istirahat selama 5 menit, ulangi.' },
    { type: 'paragraph', html: 'Tetapi setiap tugas berbeda. Itulah mengapa Pomodoro Flow menawarkan tiga siklus: <strong>Seed</strong> untuk tugas cepat (25/5), <strong>Tree</strong> untuk pekerjaan harian Anda (50/10), dan <strong>Mountain</strong> untuk sesi kerja mendalam (90/15).' },
    { type: 'title', text: 'Kekuatan Sebenarnya: Pelacakan Interupsi', level: 3 },
    { type: 'paragraph', html: 'Anda bekerja selama 50 menit dan mengira Anda telah menyelesaikannya dengan baik. Tetapi apakah Anda teralihkan 5 kali? Setiap interupsi merugikan Anda biaya peralihan konteks. Pomodoro Flow melacak hal ini dengan satu tombol (Peringatan Distraksi) dan menghitung <strong>Skor Fokus</strong> Anda—metrik nyata dari konsentrasi Anda.' },
    { type: 'paragraph', html: 'Seiring waktu, Anda akan melihat tugas, waktu, atau lingkungan mana yang memungkinkan Anda mencapai fokus terbaik. Di situlah pekerjaan dengan pengaruh tertinggi Anda terjadi.' },
    { type: 'title', text: 'Fitur yang Tidak Menghalangi Anda', level: 3 },
    { type: 'list', items: [
      'Desain Zen-Tech: Mode gelap, glassmorphism, dan timer terpusat yang menjadi satu-satunya hal yang Anda lihat.',
      'Bilah Judul Langsung: Tab browser Anda menunjukkan hitungan mundur, sehingga Anda tahu waktu dalam sekejap.',
      'Waktu Fleksibel: Sesuaikan waktu kerja/istirahat secara langsung tanpa memulai ulang.',
      'Ekspor Sesi: Salin ringkasan Anda sebagai Markdown atau bagikan visual ke media sosial.',
      'Heatmap Bulanan: Lihat pola produktivitas Anda. Hari apa yang menjadi puncak fokus Anda?',
    ] },
    { type: 'title', text: 'Psikologi "State of Flow"', level: 3 },
    { type: 'paragraph', html: 'Psikolog Mihaly Csikszentmihalyi mendefinisikan <strong>flow</strong> sebagai keadaan di mana tantangan bertemu dengan keterampilan, dan waktu seakan menghilang. Pomodoro Flow menghilangkan gangguan, menetapkan batasan waktu yang jelas, dan memberi Anda umpan balik segera—tiga syarat untuk keadaan flow.' },
    { type: 'tip', html: '<strong>Tips Pro:</strong> Saat Anda dalam kondisi flow, jangan menginterupsi diri sendiri. Jika timer berbunyi tetapi Anda sedang di tengah pemikiran, klik lanjutkan dan teruslah bekerja. Keindahan dari melacak interupsi adalah Anda akan melihat perbedaan antara kekacauan eksternal dan momentum Anda sendiri.' },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
