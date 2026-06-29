import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { CurriculumProgressTrackerUI } from '../entry';

const slug = 'kalkulator-kemajuan-sks-dan-proyeksi-ipk' as const;
const title = 'Kalkulator Kemajuan SKS dan Proyeksi IPK';
const description = 'Atur rencana kuliah semester demi semester, pantau IPK riil dan proyeksi, serta simulasi nilai yang dibutuhkan untuk mata kuliah tersisa.';

const faqItems = [
  {
    question: 'Bagaimana cara mulai merencanakan kuliah saya?',
    answer: 'Cukup tambahkan semester dan masukkan mata kuliah Anda langsung di dashboard. Anda dapat mengatur jumlah SKS, memilih status mata kuliah, dan memasukkan nilai.',
  },
  {
    question: 'Apa perbedaan antara IPK Riil dan IPK Proyeksi?',
    answer: 'IPK Riil dihitung hanya berdasarkan mata kuliah yang telah diselesaikan dengan nilai resmi. IPK Proyeksi menyimulasikan nilai akhir Anda dengan menyertakan mata kuliah yang sedang berjalan dan direncanakan.',
  },
  {
    question: 'Apa yang ditunjukkan oleh indikator Nilai yang Dibutuhkan?',
    answer: 'Ini menghitung nilai rata-rata persis yang harus Anda pertahankan pada sisa mata kuliah yang ada untuk mencapai Target IPK keseluruhan Anda.',
  },
  {
    question: 'Apakah data saya disimpan dengan aman?',
    answer: 'Ya. Semua data tetap berada di browser web Anda secara lokal. Tidak ada informasi yang diunggah ke server mana pun. Anda dapat mengekspor rencana Anda sebagai file JSON.',
  },
];

const howToItems = [
  { name: 'Konfigurasi target', text: 'Atur target SKS kelulusan dan Target IPK yang Anda inginkan di bagian atas dashboard.' },
  { name: 'Susun kurikulum', text: 'Tambahkan semester dan daftarkan mata kuliah Anda beserta bobot SKS resminya.' },
  { name: 'Perbarui nilai dan status', text: 'Ubah status mata kuliah antara Selesai, Sedang Berjalan, dan Direncanakan, lalu masukkan nilai.' },
  { name: 'Analisis nilai yang dibutuhkan', text: 'Lihat indikator untuk mengetahui nilai rata-rata minimal yang harus diraih pada semester mendatang.' },
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

export const content: ToolLocaleContent<CurriculumProgressTrackerUI> = {
  slug,
  title,
  description,
  ui: {
    degreeNameLabel: 'Nama Program Studi',
    graduationCreditsLabel: 'Target SKS Kelulusan',
    targetGpaLabel: 'Target IPK',
    realGpaLabel: 'IPK Riil',
    projectedGpaLabel: 'IPK Proyeksi',
    creditsCompletedLabel: 'SKS Selesai',
    requiredGradeLabel: 'Nilai yang Dibutuhkan (Sisa)',
    addSemesterButton: 'Tambah Semester',
    addCourseButton: 'Tambah Mata Kuliah',
    exportPlanButton: 'Ekspor Rencana',
    importPlanButton: 'Impor Rencana',
    semesterNamePlaceholder: 'Nama semester (misal: Semester 1)',
    courseNamePlaceholder: 'Nama mata kuliah',
    creditsPlaceholder: 'SKS',
    gradePlaceholder: 'Nilai',
    statusCompleted: 'Selesai',
    statusInProgress: 'Sedang Berjalan',
    statusPlanned: 'Direncanakan',
    importError: 'Rencana kuliah tidak dapat diimpor. Silakan periksa format file Anda.',
    uploadHint: 'Semua data disimpan di browser Anda secara lokal. Proses impor dan ekspor dilakukan sepenuhnya di perangkat Anda.',
    statusMessageSuccess: 'Anda berada di jalur yang tepat untuk mencapai target IPK.',
    statusMessageWarning: 'Anda membutuhkan nilai rata-rata {grade} atau lebih pada mata kuliah tersisa untuk mencapai target IPK.',
    statusMessageImpossible: 'Secara matematis mustahil untuk mencapai target IPK Anda dengan konfigurasi mata kuliah saat ini.',
    degreeNamePlaceholder: 'misal: S1 Teknik Informatika',
    deleteSemesterLabel: 'Hapus Semester',
    deleteCourseLabel: 'Hapus Mata Kuliah',
    semesterTitleTemplate: 'Semester {num}',
  },
  seo: [
    { type: 'title', text: 'Cara memproyeksikan IPK kelulusan dan mengelola bobot SKS kuliah', level: 2 },
    { type: 'paragraph', html: 'Mengelola rencana studi perguruan tinggi membutuhkan alat bantu strategis. Kalkulator ini membantu Anda memproyeksikan IPK akhir dan merencanakan target nilai pada mata kuliah tersisa.' },
    { type: 'summary', title: 'Indikator akademik penting yang perlu dipantau', items: [
      'Visualisasikan rasio SKS yang diselesaikan terhadap total SKS kelulusan.',
      'Pisahkan nilai riil dari simulasi proyeksi masa depan.',
      'Hitung rata-rata minimal yang dibutuhkan demi mempertahankan beasiswa kuliah.',
    ] },
    {
      type: 'proscons',
      title: 'Kelebihan dan keterbatasan simulator',
      items: [
        {
          pro: 'Membantu merencanakan semester mendatang secara proaktif.',
          con: 'Akurasi simulasi bergantung pada realisme estimasi nilai yang Anda masukkan.',
        },
        {
          pro: 'Menunjukkan target nilai yang jelas demi menjaga performa akademik.',
          con: 'Tidak memperhitungkan aturan perbaikan nilai khusus dari universitas Anda.',
        },
      ],
    },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
