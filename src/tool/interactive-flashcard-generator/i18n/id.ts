import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { InteractiveFlashcardGeneratorUI } from '../index';

const slug = 'interactive-flashcard-generator' as const;
const title = 'Pembuat Flashcard Interaktif & Dek Belajar';
const description = 'Tingkatkan sesi belajar Anda dengan active recall dan spaced repetition. Buat kartu khusus, pelajari dengan efek putar 3D, dan ekspor/impor dek.';

const faqItems = [
  { question: 'Apa itu active recall?', answer: 'Active recall adalah prinsip belajar yang menguji ingatan Anda dengan memanggil kembali informasi secara aktif, bukan membaca catatan secara pasif.' },
  { question: 'Bagaimana cara kerja spaced repetition?', answer: 'Spaced repetition adalah metode di mana Anda meninjau kartu yang sulit lebih sering dan kartu yang mudah lebih jarang pada interval waktu yang meningkat untuk mengoptimalkan retensi.' },
  { question: 'Bagaimana cara menyimpan flashcard kustom saya?', answer: 'Anda dapat mengekspor dek Anda sebagai file JSON. Untuk melanjutkan belajar nanti, cukup klik tombol Impor dan unggah file tersebut.' },
  { question: 'Apa fungsi nilai Mudah, Sedang, dan Sulit?', answer: 'Mereka membantu Anda mengategorikan seberapa baik Anda mengingat kartu tersebut. Dalam sistem Leitner, kartu yang sulit ditinjau lebih sering.' },
];

const howToItems = [
  { name: 'Buat Kartu', text: 'Masukkan pertanyaan pada kolom Depan dan jawaban pada kolom Belakang, lalu klik Tambah Kartu.' },
  { name: 'Tinjau Dek', text: 'Klik pada kartu apa saja di penampil untuk membaliknya dan melihat jawaban.' },
  { name: 'Evaluasi Ingatan', text: 'Nilai seberapa mudah Anda mengingat jawaban menggunakan tombol Mudah, Sedang, atau Sulit.' },
  { name: 'Simpan Sesi Belajar', text: 'Gunakan tombol Ekspor untuk mengunduh dek kustom Anda sehingga Anda dapat memuatnya kembali nanti.' },
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
    cardCreator: 'Pembuat Flashcard',
    questionLabel: 'Depan (Pertanyaan)',
    answerLabel: 'Belakang (Jawaban)',
    addCard: 'Tambah Kartu',
    questionPlaceholder: 'misal, Apa ibu kota Prancis?',
    answerPlaceholder: 'misal, Paris',
    reviewMode: 'Sesi Belajar',
    cardIndex: 'Kartu',
    flipCard: 'Klik untuk membalik',
    nextCard: 'Berikutnya',
    prevCard: 'Sebelumnya',
    easy: 'Mudah',
    medium: 'Sedang',
    hard: 'Sulit',
    resetSession: 'Reset Progres',
    importExport: 'Manajemen Dek',
    importDeck: 'Impor JSON',
    exportDeck: 'Ekspor JSON',
    exportSelected: 'Ekspor Terpilih',
    exportAll: 'Ekspor Semua',
    emptyDeckWarning: 'Dek Anda kosong. Buat kartu atau impor dek untuk mulai belajar.',
    sampleQuestion1: 'Apa itu active recall?',
    sampleAnswer1: 'Teknik belajar yang melibatkan stimulasi aktif penarikan memori selama proses pembelajaran.',
    sampleQuestion2: 'Siapa yang merumuskan hipotesis kurva lupa?',
    sampleAnswer2: 'Hermann Ebbinghaus, yang mempelajari sifat eksponensial dari melupakan informasi dari waktu ke waktu.',
    aiPromptGenerator: 'Asisten Flashcard AI',
    aiTopicsLabel: 'Masukkan topik ujian atau catatan Anda',
    aiTopicsPlaceholder: 'misal, Ujian matematika tentang Turunan, Integral, dan Limit...',
    generatePromptBtn: 'Buat Prompt AI',
    aiPromptOutputLabel: 'Salin prompt ini ke ChatGPT/Gemini',
    copyPromptBtn: 'Salin ke Clipboard',
    selectAll: 'Pilih Semua',
    deleteCategory: 'Hapus Kategori',
    deleteConfirmMsg: 'Apakah Anda yakin ingin menghapus kategori ini beserta semua kartunya?',
    cancel: 'Batal',
    delete: 'Hapus',
    pasteJsonTitle: 'Tempel JSON Flashcard',
    pasteJsonPlaceholder: 'Tempel JSON yang dihasilkan oleh AI di sini...',
    importBtn: 'Impor',
    aiPromptTemplate: 'Act as an educational assistant. Generate a set of flashcards for the following topics:\n"{topics}"\n\nOutput the result formatted inside a single markdown code block with the "json" language identifier (using triple backticks) so it is easy to copy. Do not include any other markdown text outside the code block. Use this exact structure:\n```json\n{\n  "categories": ["Math Exam"],\n  "deck": [\n    {\n      "question": "[Flashcard Front / Question]",\n      "answer": "[Flashcard Back / Answer]",\n      "category": "Math Exam",\n      "score": null\n    }\n  ]\n}\n```',
  },
  seo: [
    { type: 'title', text: 'Optimalkan Strategi Belajar Anda dengan Active Recall dan Spaced Repetition', level: 2 },
    { type: 'paragraph', html: 'Flashcard diakui sebagai salah satu alat paling efektif untuk retensi memori jangka panjang. Dengan menggabungkan active recall dan sistem penilaian, Anda dapat segera menutupi celah pengetahuan.' },
    { type: 'title', text: 'Active Recall vs. Pembelajaran Pasif', level: 3 },
    { type: 'paragraph', html: 'Banyak siswa hanya membaca ulang catatan mereka. Namun, sains kognitif membuktikan bahwa pembelajaran sejati terjadi ketika Anda memaksa otak untuk mengambil informasi secara aktif.' },
    { type: 'table', headers: ['Metode Belajar', 'Keterlibatan Kognitif', 'Tingkat Retensi', 'Paling Cocok Untuk'], rows: [
      ['Flashcard Interaktif', 'Tinggi (Aktif)', 'Sangat Baik', 'Kosakata, rumus, konsep kunci, tanggal.'],
      ['Merangkum teks', 'Sedang (Sintesis)', 'Cukup', 'Memahami alur cerita yang kompleks.'],
      ['Membaca ulang catatan', 'Rendah (Pasif)', 'Buruk', 'Kontak awal dengan materi baru.'],
    ] },
    { type: 'title', text: 'Kelebihan dan kekurangan belajar dengan flashcard', level: 3 },
    {
      type: 'proscons',
      title: 'Perbandingan manfaat dan keterbatasan',
      items: [
        { pro: 'Memaksa ingatan mental aktif daripada pengenalan pasif.', con: 'Membutuhkan waktu untuk membuatnya di awal.' },
        { pro: 'Mengidentifikasi kesenjangan pengetahuan secara instan.', con: 'Kurang cocok untuk pemahaman mendalam tentang teori yang sangat kompleks.' },
        { pro: 'Sangat portabel dan dapat disesuaikan untuk mata pelajaran apa pun.', con: 'Membutuhkan disiplin belajar yang teratur untuk efek maksimal.' }
      ]
    },
    { type: 'title', text: 'Pembuatan Flashcard dengan Bantuan AI', level: 3 },
    { type: 'paragraph', html: 'Membuat dek secara manual bisa melelahkan. Dengan <strong>Asisten AI</strong> kami, ubah catatan menjadi dek JSON yang siap diimpor. Tuliskan topik, salin prompt ke ChatGPT/Gemini, lalu impor hasilnya.' },
    { type: 'title', text: 'Belajar Kelompok: Ekspor Selektif dan Penggabungan', level: 3 },
    { type: 'paragraph', html: 'Belajar dalam kelompok lebih produktif dengan membagi tugas. Ekspor kategori tertentu saja, lalu impor ke akun teman Anda tanpa menghapus progres belajarnya.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
