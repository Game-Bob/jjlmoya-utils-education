import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';

const slug = 'pembuat-sitasi';
const title = 'Pembuat Sitasi' as const;
const description = 'Buat referensi otomatis dalam format APA, MLA, dan Vancouver dengan penyimpanan persisten.' as const;

const ui = {
    format: 'Format',
    book: 'Buku',
    website: 'Situs Web',
    article: 'Artikel',
    publicationYear: 'Tahun Terbit',
    authors: 'Penulis (Nama Belakang, Inisial)',
    title: 'Judul',
    publisher: 'Penerbit',
    locationUrl: 'Lokasi / URL',
    preview: 'Pratinjau',
    saveToList: 'Simpan ke daftar saya',
    mySavedCitations: 'Sitasi Terarsip Saya',
    noSavedCitations: 'Anda tidak memiliki sitasi yang tersimpan.',
    clickToCopy: 'Klik pada sitasi untuk menyalinnya secara langsung',
    apa: 'APA (edisi ke-7)',
    mla: 'MLA (edisi ke-9)',
    vancouver: 'Vancouver',
    exampleAuthor: 'Perez, J.; Garcia, M.',
    exampleYear: '2024',
} as const;

const seo = [
    { type: 'title', text: 'Pembuat Sitasi: Kuasai APA, MLA, dan Vancouver', level: 2 },
    { type: 'paragraph', html: 'Mengutip sumber Anda dengan benar bukan hanya masalah etika akademik; ini adalah dasar untuk memberikan kredibilitas pada karya Anda dan menghindari plagiarisme. Alat kami memungkinkan Anda menghasilkan referensi otomatis dalam format yang paling banyak digunakan di dunia.' },
    { type: 'title', text: 'Gaya Sitasi yang Paling Penting', level: 3 },
    { type: 'paragraph', html: 'Tergantung pada bidang studi Anda, Anda akan diminta untuk menggunakan format tertentu. Ini bukan keinginan profesor semata; setiap gaya dirancang untuk memprioritaskan informasi yang paling relevan untuk setiap disiplin ilmu.' },
    { type: 'title', text: 'APA (ilmu sosial)', level: 4 },
    { type: 'paragraph', html: 'Dibuat oleh <strong>American Psychological Association</strong>, gaya ini berfokus pada tanggal publikasi untuk memberikan konteks historis pada penelitian. Ini adalah standar dalam Psikologi, Pendidikan, dan Sosiologi.' },
    { type: 'title', text: 'Vancouver (kedokteran)', level: 4 },
    { type: 'paragraph', html: 'Ini adalah sistem numerik di mana sumber dikutip berdasarkan urutan kemunculannya. Ini adalah format universal dalam biomedis dan ilmu kesehatan, memudahkan pembacaan teks dengan banyak referensi.' },
    { type: 'title', text: 'Bagaimana cara mengutip buku langkah demi langkah?', level: 3 },
    { type: 'paragraph', html: 'Meskipun alat kami mengotomatiskan hal ini, mengetahui elemen dasar akan membantu Anda mengidentifikasi informasi apa yang perlu Anda kumpulkan dari sumber fisik atau digital Anda.' },
    { type: 'list', items: ['<strong>Penulis:</strong> Nama belakang diikuti dengan inisial nama depan.', '<strong>Tahun:</strong> Tahun terbit dalam tanda kurung atau di akhir tergantung pada gayanya.', '<strong>Judul:</strong> Harus muncul dalam huruf miring untuk buku dan karya lengkap.', '<strong>Penerbit:</strong> Perusahaan yang bertanggung jawab menerbitkan karya tersebut.', '<strong>URL:</strong> Untuk sumber digital, tautan langsung atau DOI untuk lokasi permanen.'] },
    { type: 'title', text: 'Perbedaan Visual Antar Format', level: 3 },
    { type: 'table', headers: ['Elemen', 'APA (ke-7)', 'MLA (ke-9)', 'Vancouver'], rows: [['Penulis', 'Perez, J.', 'Perez, Juan.', 'Perez J.'], ['Tanggal', '(2024)', '2024.', '2024.'], ['Judul', 'Cetak miring', 'Dalam tanda kutip', 'Normal']] },
    { type: 'tip', html: 'Selalu konsultasikan panduan khusus institusi Anda. Meskipun APA adalah standar global, banyak universitas memiliki variasi lokal kecil atau mewajibkan penggunaan edisi standar tertentu.' },
    { type: 'title', text: 'Menghindari Plagiarisme Akademik', level: 3 },
    { type: 'paragraph', html: 'Plagiarisme tidak selalu disengaja. Seringkali terjadi karena kecerobohan dalam mencatat atau tidak tahu cara mereferensikan ide yang bukan milik sendiri. Menggunakan pembuat sitasi seperti ini memastikan bahwa setiap penulis menerima kredit yang layak mereka dapatkan, sekaligus melindungi integritas akademik Anda.' },
    { type: 'paragraph', html: 'Ingatlah bahwa meskipun Anda memparafrasekan sebuah ide dengan kata-kata Anda sendiri, Anda harus menyertakan kutipan yang sesuai dalam teks dan referensinya dalam bibliografi akhir.' },
];

const faq = [
    {
        question: 'Format apa saja yang didukung pembuat sitasi ini?',
        answer: 'Saat ini mendukung APA (edisi ke-7), MLA (edisi ke-9), dan Vancouver, yang merupakan format paling umum dalam ilmu sosial, humaniora, dan kesehatan.',
    },
    {
        question: 'Bisakah saya menyimpan sitasi saya?',
        answer: 'Ya, pembuat sitasi secara otomatis menyimpan riwayat Anda di penyimpanan lokal browser Anda sehingga Anda dapat berkonsultasi nanti.',
    },
    {
        question: 'Apa perbedaan antara APA dan Vancouver?',
        answer: 'APA menggunakan sistem penulis-tanggal (Perez, 2024), sedangkan Vancouver menggunakan sistem numerik sesuai urutan kemunculan dalam teks.',
    },
    {
        question: 'Apakah pembuat sitasi ini gratis?',
        answer: 'Sepenuhnya. Ini adalah alat gratis yang dirancang untuk membantu mahasiswa dan profesional dalam menulis karya akademik mereka.',
    },
] as const;

const howTo = [
    {
        name: 'Pilih jenis sumber',
        text: 'Pilih apakah sumber Anda adalah buku, situs web, atau artikel jurnal profesional.',
    },
    {
        name: 'Lengkapi data',
        text: 'Masukkan penulis, judul, tahun, dan penerbit atau URL. Semakin banyak data yang Anda masukkan, semakin akurat sitasinya.',
    },
    {
        name: 'Salin atau simpan',
        text: 'Salin sitasi secara langsung dengan satu klik atau tekan "Simpan ke daftar saya" untuk menambahkannya ke riwayat persisten Anda.',
    },
] as const;


const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
} as const;

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    step: howTo.map((item, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: item.name,
        text: item.text,
    })),
} as const;

const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description: description,
    applicationCategory: 'EducationalApplication',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
    },
} as const;

const schemas = [faqSchema, howToSchema, appSchema] as const;

export const content = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    howTo,
    bibliography,
    schemas,
} as const satisfies ToolLocaleContent;
