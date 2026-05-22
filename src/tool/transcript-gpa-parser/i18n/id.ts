import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { TranscriptGPAParserUI } from '../entry';

const slug = 'pembaca-transkrip-nilai-gpa' as const;
const title = 'Kalkulator & Pengurai IPK Transkrip';
const description = 'Hitung IPK kumulatif dan rata-rata nilai tertimbang Anda secara instan dengan menyalin dan menempelkan teks transkrip nilai universitas mentah Anda. Bekerja sepenuhnya secara offline.';

const faqItems = [
  {
    question: 'Bagaimana cara kerja penguraian otomatis?',
    answer: 'Alat ini memindai teks yang ditempelkan baris demi baris, membaginya menjadi beberapa kolom berdasarkan spasi, tab, atau tanda baca. Alat ini kemudian menganalisis nilai-nilai tersebut untuk secara otomatis mengidentifikasi kolom mana yang berisi nama mata kuliah, nilai, dan SKS.'
  },
  {
    question: 'Apakah data akademik saya aman?',
    answer: 'Ya, sepenuhnya aman. Proses penguraian dan perhitungan IPK berjalan sepenuhnya di dalam browser pada perangkat Anda. Tidak ada data yang dikirim ke server mana pun, menjaga privasi transkrip Anda tetap 100% aman.'
  },
  {
    question: 'Bagaimana jika kolom dipetakan secara tidak benar?',
    answer: 'Anda dapat menyesuaikannya dengan mudah. Setiap kolom dalam tabel yang terdeteksi memiliki header dropdown tempat Anda dapat memilih secara manual apakah kolom tersebut mewakili Nama Mata Kuliah, Nilai, SKS, atau harus Diabaikan.'
  },
  {
    question: 'Apakah alat ini mendukung nilai huruf dan skala yang berbeda?',
    answer: 'Ya, alat ini mendukung nilai huruf standar (A, B, C, D, F) serta skala numerik (0-10, 0-20, 0-100). Anda dapat mengonfigurasi skala maksimum agar sesuai dengan sistem universitas Anda.'
  }
];

const howToItems = [
  {
    name: 'Salin transkrip Anda',
    text: 'Buka portal universitas atau lembar nilai Anda, sorot teks tersebut, lalu salin.'
  },
  {
    name: 'Tempelkan teks',
    text: 'Tempelkan teks yang telah disalin ke dalam area teks pada alat ini.'
  },
  {
    name: 'Verifikasi dan petakan',
    text: 'Tinjau tabel yang dihasilkan secara otomatis. Jika diperlukan, sesuaikan peran kolom menggunakan header.'
  },
  {
    name: 'Dapatkan IPK Anda',
    text: 'Lihat hasil perhitungan IPK tertimbang dan total SKS Anda secara instan di bagian bawah.'
  }
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

export const content: ToolLocaleContent<TranscriptGPAParserUI> = {
  slug,
  title,
  description,
  ui: {
    pasteAreaLabel: 'Tempelkan transkrip Anda di sini',
    pasteAreaPlaceholder: 'Tempelkan teks yang disalin dari Moodle, Canvas, atau halaman transkrip universitas Anda...',
    parsedTitle: 'Data Transkrip yang Berhasil Diurai',
    columnSelect: 'Petakan kolom',
    subjectName: 'Nama Mata Kuliah',
    grade: 'Nilai',
    credits: 'SKS',
    ignore: 'Abaikan',
    gpaResult: 'IPK Kumulatif',
    totalCredits: 'Total SKS',
    emptyState: 'Tempelkan data transkrip Anda di atas untuk melihat pratinjau dan mengedit baris di sini.',
    scaleLabel: 'Batas Skala Nilai',
    customScale: 'Skala Nilai Maksimum',
    exampleSubject: 'Kalkulus I',
    newSubjectPlaceholder: 'Mata kuliah baru',
    clearBtn: 'Hapus teks',
    errorFormat: 'Kami tidak dapat mendeteksi kolom dengan jelas. Coba salin-tempel format tabel atau daftar.'
  },
  seo: [
    { type: 'title', text: 'Cara Mengurai dan Menghitung IPK dari Transkrip Apa Pun', level: 2 },
    { type: 'paragraph', html: 'Menghitung rata-rata akademik Anda tidak perlu dilakukan dengan memasukkan puluhan mata kuliah secara manual. Alat ini mengekstrak data dari salin-tempel teks mentah apa pun untuk menghitung IPK Anda.' },
    { type: 'title', text: 'Mengapa menggunakan pengurai transkrip mentah?', level: 3 },
    { type: 'paragraph', html: 'Portal universitas sering kali memformat laporan nilai dalam tabel HTML yang rumit. Menyalin dan menempelkannya secara langsung ke alat ini memungkinkan mesin heuristik kami mengekstrak mata kuliah, nilai, dan SKS secara instan tanpa kesalahan pengetikan.' },
    { type: 'title', text: 'Aman, privat, dan cepat', level: 3 },
    { type: 'paragraph', html: 'Karena mesin pengurai berjalan secara lokal di JavaScript, catatan akademik Anda tidak pernah meninggalkan browser Anda. Anda dapat mengurai halaman yang berisi ratusan baris dalam hitungan milidetik.' }
  ],
  faq: faqItems,
  howTo: howToItems,
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
