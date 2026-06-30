import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { RubricMatrixDesignerUI } from '../entry';

const slug = 'perancang-matriks-rubrik' as const;
const title = 'Perancang Matriks Rubrik';
const description = 'Buat rubrik penilaian berbobot yang dapat diedit dengan tingkat pencapaian, validasi bobot 100% langsung, ekspor CSV, dan tata letak siap cetak.';

const faqItems = [
  { question: 'Apa itu matriks rubrik?', answer: 'Matriks rubrik adalah kisi penilaian yang menempatkan kriteria pada baris dan tingkat pencapaian pada kolom. Setiap sel menggambarkan seperti apa kinerja pada tingkat tersebut, membuat penilaian menjadi lebih transparan dan konsisten.' },
  { question: 'Mengapa bobot kriteria harus berjumlah 100%?', answer: 'Total 100% membuat model penilaian menjadi eksplisit. Jika totalnya kurang atau lebih dari 100%, siswa dan penilai tidak dapat menafsirkan dengan jelas seberapa besar kontribusi setiap kriteria terhadap nilai akhir.' },
  { question: 'Bisakah siswa menggunakan alat ini?', answer: 'Ya. Siswa dapat menggunakannya untuk memahami harapan tugas, merencanakan draf, atau membuat daftar periksa tinjauan sejawat sebelum pengumpulan.' },
  { question: 'Opsi ekspor apa saja yang disertakan?', answer: 'Ekspor CSV berguna untuk spreadsheet dan pengaturan LMS. Tombol cetak membuka alur cetak browser, di mana Anda dapat menyimpan sebagai PDF menggunakan dialog cetak sistem operasi.' },
];

const howToItems = [
  { name: 'Edit kriteria', text: 'Klik nama kriteria apa pun dan ganti dengan keterampilan, hasil, atau persyaratan yang ingin Anda nilai.' },
  { name: 'Atur bobot', text: 'Sesuaikan setiap persentase hingga bilah bobot langsung melaporkan rubrik 100% yang seimbang.' },
  { name: 'Jelaskan tingkat pencapaian', text: 'Klik ke setiap sel deskriptor dan tulis bukti yang dapat diamati untuk tingkat kinerja tersebut.' },
  { name: 'Tambahkan struktur saat dibutuhkan', text: 'Gunakan tombol tambah untuk membuat kriteria ekstra atau tingkat pencapaian, dan hapus baris atau kolom yang tidak berguna.' },
  { name: 'Ekspor atau cetak', text: 'Unduh CSV untuk spreadsheet atau gunakan cetak untuk membuat versi PDF yang bersih.' },
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

export const content: ToolLocaleContent<RubricMatrixDesignerUI> = {
  slug,
  title,
  description,
  ui: {
    criterionHeader: 'Kriteria',
    weightHeader: 'Bobot',
    levelSectionLabel: 'Tingkat pencapaian',
    levelBadgePrefix: 'T',
    addCriterion: 'Tambah kriteria',
    addLevel: 'Tambah tingkat',
    removeCriterion: 'Hapus kriteria',
    removeLevel: 'Hapus tingkat',
    exportCsv: 'Ekspor CSV',
    printRubric: 'Cetak / PDF',
    csvFilename: 'matriks-rubrik.csv',
    pdfDocumentTitle: 'Matriks rubrik',
    pdfImageAlt: 'Matriks rubrik',
    confirmDeleteTitle: 'Hapus kriteria ini?',
    confirmDeleteText: 'Tindakan ini akan menghapus kriteria dan semua deskriptor yang ditulis untuk tingkat pencapaiannya.',
    cancelDelete: 'Batal',
    confirmDelete: 'Hapus kriteria',
    totalWeight: 'Total pembobotan',
    balanced: 'Seimbang tepat 100%',
    under: 'Tambahkan bobot hingga rubrik mencapai 100%',
    over: 'Kurangi bobot hingga rubrik kembali ke 100%',
    emptyCell: 'Klik untuk mengedit',
    newCriterionTemplate: 'Kriteria {index}',
    newDescriptorTemplate: 'Deskriptor {index}.{level}',
    newLevelTemplate: 'Tingkat {index}',
    defaultLevels: [
      { name: 'Sangat Baik', score: 4 },
      { name: 'Kompeten', score: 3 },
      { name: 'Berkembang', score: 2 },
      { name: 'Pemula', score: 1 },
    ],
    defaultCriteria: [
      {
        name: 'Kualitas argumen',
        weight: 35,
        cells: [
          'Klaim jelas dengan penalaran yang bernuansa',
          'Klaim jelas dengan penalaran yang memadai',
          'Klaim ada tetapi tidak merata',
          'Klaim tidak jelas atau hilang',
        ],
      },
      {
        name: 'Penggunaan bukti',
        weight: 30,
        cells: [
          'Bukti tepat dan terintegrasi',
          'Bukti mendukung sebagian besar klaim',
          'Bukti bersifat umum atau terhubung secara longgar',
          'Bukti tidak ada atau tidak akurat',
        ],
      },
      {
        name: 'Organisasi',
        weight: 20,
        cells: [
          'Struktur memandu pembaca dengan lancar',
          'Struktur logis',
          'Struktur memiliki celah atau pengulangan',
          'Struktur sulit diikuti',
        ],
      },
      {
        name: 'Gaya akademis',
        weight: 15,
        cells: [
          'Gaya halus dan konvensi akurat',
          'Kesalahan kecil tidak menghalangi makna',
          'Kesalahan sering terjadi mengalihkan perhatian pembaca',
          'Kesalahan membuat makna tidak jelas',
        ],
      },
    ],
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    bibliographyTitle: 'Referensi & Sumber Daya Akademik',
  },
  seo: [
    { type: 'title', text: 'Rancang Rubrik yang Benar-benar Dapat Digunakan Siswa', level: 2 },
    { type: 'paragraph', html: 'Rubrik penilaian yang kuat lebih dari sekadar lembar nilai. Ini adalah peta harapan bersama. Siswa menggunakannya untuk memahami seperti apa kualitas sebelum mengumpulkan tugas, guru menggunakannya untuk menilai secara lebih konsisten, dan peninjau menggunakannya untuk menjelaskan umpan balik dengan lebih sedikit ambiguitas. Perancang ini membuat struktur terlihat jelas: kriteria, bobot, tingkat pencapaian, dan deskriptor semuanya ada dalam satu matriks yang dapat diedit.' },
    { type: 'diagnostic', variant: 'warning', title: 'Kapan rubrik perlu direvisi', html: '<ul><li>Beberapa kriteria sangat tumpang tindih sehingga kesalahan yang sama dihukum dua kali.</li><li>Total bobot tidak sama dengan 100%, membuat nilai akhir sulit ditafsirkan.</li><li>Deskriptor menggunakan kata-kata samar seperti baik, lemah, atau luar biasa tanpa bukti yang dapat diamati.</li><li>Ada terlalu banyak tingkatan bagi penilai untuk dapat membedakannya secara andal.</li></ul>' },
    { type: 'title', text: 'Memilih Kriteria dan Bobot', level: 3 },
    { type: 'table', headers: ['Elemen rubrik', 'Praktik baik', 'Masalah umum'], rows: [['Kriteria', 'Nilai keterampilan atau hasil yang berbeda seperti argumen, bukti, metode, akurasi, atau presentasi.', 'Mencampur beberapa keterampilan ke dalam satu baris membuat umpan balik tidak jelas.'], ['Bobot', 'Cocokkan bobot dengan prioritas instruksional dan tujuan tugas.', 'Memberikan bobot yang sama untuk setiap baris bahkan ketika beberapa hasil lebih penting.'], ['Tingkat', 'Gunakan 3 hingga 5 tingkat yang dapat dibedakan secara konsisten oleh penilai.', 'Menambahkan banyak tingkat dengan perbedaan kata yang sangat kecil.'], ['Deskriptor', 'Jelaskan bukti yang dapat diamati dalam pekerjaan siswa.', 'Menggunakan label yang terdengar evaluatif tetapi tidak memandu perbaikan.']] },
    { type: 'comparative', title: 'Rubrik analitik vs holistik', columns: 2, items: [{ title: 'Rubrik analitik', description: 'Memecah kinerja menjadi kriteria dan bobot yang terpisah. Paling baik jika siswa membutuhkan umpan balik terarah atau beberapa penilai harus menyelaraskan pemahaman.', highlight: true, points: ['Skor transparan', 'Umpan balik spesifik', 'Bekerja dengan baik untuk tugas-tugas kompleks'] }, { title: 'Rubrik holistik', description: 'Memberikan satu penilaian keseluruhan. Lebih cepat diterapkan, tetapi kurang diagnostik untuk revisi atau tinjauan sejawat.', points: ['Penilaian lebih cepat', 'Berguna untuk pemeriksaan cepat', 'Umpan balik kurang rinci'] }] },
    { type: 'tip', html: '<strong>Tulis deskriptor berdasarkan bukti, bukan kata sifat.</strong> Alih-alih "analisis luar biasa", tulis apa yang dilakukan analisis luar biasa: menghubungkan bukti ke klaim, mengatasi keterbatasan, dan menjelaskan mengapa bukti itu penting.' },
    { type: 'title', text: 'Cara Memvalidasi Rubrik Berbobot', level: 3 },
    { type: 'paragraph', html: 'Bobot mengomunikasikan prioritas. Kriteria bernilai 40% membentuk upaya siswa secara berbeda dari kriteria bernilai 10%. Total langsung dalam alat ini sengaja dibuat ketat: rubrik seimbang hanya jika jumlahnya tepat 100%. Jika totalnya kurang dari 100%, sebagian dari nilai tidak ditentukan. Jika lebih dari 100%, model menjanjikan poin berlebih dan menciptakan kebingungan.' },
    { type: 'summary', title: 'Alur kerja rubrik praktis', items: ['Mulailah dengan hasil belajar sebelum menulis baris.', 'Batasi matriks pada kriteria yang benar-benar akan memengaruhi umpan balik.', 'Rancang draf deskriptor dalam bahasa yang sederhana dan dapat diamati.', 'Periksa pembobotan 100% sebelum membagikan rubrik.', 'Ekspor CSV saat Anda memerlukan pengaturan spreadsheet atau LMS.'] },
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
