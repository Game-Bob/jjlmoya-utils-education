import { bibliography } from '../bibliography';
import type { ToolLocaleContent } from '../../../types';
import type { UniversityFinanceSimulatorUI } from '../index';

const slug = 'simulator-keuangan-universitas' as const;
const title = 'Simulator Keuangan Universitas';
const description =
  'Modelkan biaya riil kuliah, bandingkan skenario beasiswa, dan proyeksikan pembayaran pinjaman mahasiswa dengan linimasa pelunasan visual dan tabel amortisasi.';

const faqItems = [
  {
    question: 'Apa saja yang dimasukkan simulator ini ke dalam total biaya?',
    answer:
      'Simulator ini menggabungkan uang kuliah tahunan, biaya hidup bulanan, jumlah tahun studi, dan jumlah bulan Anda memperkirakan membayar biaya hidup setiap tahun akademik. Kemudian simulator ini mengurangi beasiswa dan kontribusi awal apa pun sebelum menghitung pinjaman.',
  },
  {
    question: 'Bagaimana cicilan pinjaman mahasiswa bulanan dihitung?',
    answer:
      'Alat ini menggunakan rumus pinjaman amortisasi standar. Ini mengubah suku bunga tahunan menjadi suku bunga bulanan dan menyebarkan pembayaran ke seluruh jumlah tahun yang dipilih.',
  },
  {
    question: 'Bisakah saya menggunakannya untuk pinjaman keluarga tanpa bunga atau hibah?',
    answer:
      'Ya. Atur bunga tahunan ke 0 untuk mensimulasikan rencana pembayaran tanpa bunga. Anda juga dapat meningkatkan beasiswa atau kontribusi awal untuk mencerminkan hibah, tabungan, atau dukungan keluarga.',
  },
  {
    question: 'Mengapa jumlah pinjaman sangat berbeda antar profil?',
    answer:
      'Biaya hidup terakumulasi dengan cepat selama beberapa tahun akademik. Rencana komuter dan rencana tinggal di kampus dapat menghasilkan beban utang yang sangat berbeda meskipun uang kuliahnya sama.',
  },
  {
    question: 'Apakah tanggal bebas utang mencakup penangguhan eller skema pembayaran berbasis pendapatan?',
    answer:
      'Tidak. Versi ini mengasumsikan pembayaran dimulai pada jadwal tetap normal dengan cicilan bulanan yang sama. Ini ideal untuk perencanaan dasar, bukan untuk memodelkan setiap kasus kebijakan khusus.',
  },
];

const howToItems = [
  {
    name: 'Atur profil studi Anda',
    text: 'Gunakan salah satu profil cepat of geser slider secara manual untuk mencerminkan uang kuliah, biaya hidup, dan paket beasiswa Anda.',
  },
  {
    name: 'Sesuaikan asumsi pembiayaan',
    text: 'Pilih berapa banyak yang dapat Anda bayarkan di muka, lalu tetapkan bunga tahunan dan tahun pembayaran agar mencerminkan ketentuan pinjaman Anda.',
  },
  {
    name: 'Baca dasbor keuangan',
    text: 'Panel ringkasan menunjukkan biaya kuliah penuh Anda, pokok pinjaman, perkiraan cicilan bulanan, dan total bunga sehingga Anda dapat mengevaluasi keterjangkauan secara sekilas.',
  },
  {
    name: 'Periksa kurva pelunasan',
    text: 'Gunakan grafik untuk melihat bagaimana sisa saldo, total jumlah yang dibayarkan, dan akumulasi bunga berkembang dari tahun ke tahun.',
  },
  {
    name: 'Buka tabel amortisasi',
    text: 'Perluas tabel bulanan saat Anda membutuhkan analisis terperinci pokok pinjaman vs bunga untuk penganggaran atau diskusi keluarga.',
  },
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
  applicationCategory: 'FinanceApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent<UniversityFinanceSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    currency: 'Mata Uang',
    usdSymbol: '$',
    eurSymbol: '€',
    gbpSymbol: '£',
    jpySymbol: '¥',
    rubSymbol: '₽',
    inrSymbol: '₹',
    cnySymbol: '¥',
    krwSymbol: '₩',
    brlSymbol: 'R$',
    mxnSymbol: 'Mex$',
    chfSymbol: '₣',
    usd: 'USD',
    eur: 'EUR',
    gbp: 'GBP',
    jpy: 'JPY',
    rub: 'RUB',
    inr: 'INR',
    cny: 'CNY',
    krw: 'KRW',
    brl: 'BRL',
    mxn: 'MXN',
    chf: 'CHF',
    annualTuition: 'Uang kuliah tahunan',
    monthlyLivingCost: 'Biaya hidup bulanan',
    studyYears: 'Tahun studi',
    studyMonthsPerYear: 'Bulan biaya hidup per tahun',
    scholarshipPerYear: 'Beasiswa per tahun',
    upfrontContribution: 'Kontribusi awal',
    aprPercent: 'Bunga tahunan',
    repaymentYears: 'Tahun pembayaran',
    quickProfiles: 'Profil cepat',
    commuterProfile: 'Komuter',
    balancedProfile: 'Seimbang',
    campusProfile: 'Tinggal di kampus',
    stickerCost: 'Biaya studi penuh',
    borrowedPrincipal: 'Pokok pinjaman',
    monthlyPayment: 'Perkiraan cicilan bulanan',
    totalInterest: 'Total bunga',
    projectionTitle: 'Proyeksi utang',
    scheduleTitle: 'Jadwal amortisasi bulanan',
    chartBalance: 'Sisa saldo',
    chartPaid: 'Total dibayarkan',
    chartInterest: 'Bunga dibayarkan',
    openSchedule: 'Buka jadwal lengkap',
    closeSchedule: 'Sembunyikan jadwal lengkap',
    monthColumn: 'Bulan',
    paymentColumn: 'Pembayaran',
    principalColumn: 'Pokok',
    interestColumn: 'Bunga',
    balanceColumn: 'Saldo',
    timelineLabel: 'Linimasa bebas utang',
    affordabilityHint:
      'Jaga agar proyeksi cicilan bulanan Anda sejalan dengan kemungkinan pendapatan bersih tahun pertama Anda setelah lulus, bukan hanya anggaran mahasiswa Anda saat ini.',
    debtFreeLabel: 'Bebas utang setelah',
    scholarshipShare: 'Cakupan beasiswa',
    livingShare: 'Porsi biaya hidup',
    degreeCostLabel: 'Porsi uang kuliah',
    blendedCost: 'Rata-rata biaya tahunan',
    totalPaid: 'Total dibayar kembali',
    averageYearlyCost: 'Rata-rata biaya per tahun',
    plannerLabel: 'Perencana biaya',
    resultsLabel: 'Prospek pendanaan',
    assumptionsLabel: 'Asumsi pinjaman',
    scheduleHint:
      'Detail bulan ke bulan tentang bagaimana setiap pembayaran dibagi antara pokok pinjaman dan bunga.',
    noDebtNeeded: 'Tidak diperlukan utang dengan pengaturan saat ini',
    exactAmount: 'Jumlah persis',
    monthWord: 'Bulan',
    paymentWord: 'cicilan',
    principalWord: 'pokok',
    interestWord: 'bunga',
    remainingWord: 'tersisa',
    perMonthSuffix: '/bln',
    yearsSuffix: 'tahun',
    monthsSuffix: 'bulan',
    axisStart: '0',
    rowMetaSeparator: '·',
  },
  seo: [
    { type: 'title', text: 'Rencanakan Biaya Kuliah yang Sebenarnya Sebelum Anda Meminjam', level: 2 },
    {
      type: 'summary',
      title: 'Kegunaan kalkulator biaya kuliah ini',
      items: [
        'Memperkirakan biaya penuh untuk menyelesaikan gelar, bukan hanya angka uang kuliah yang diiklankan.',
        'Membandingkan sekolah, pilihan tempat tinggal, dan paket beasiswa pada basis utang yang sama.',
        'Melihat apakah rencana pembayaran terasa dapat dikelola sebelum Anda memutuskan untuk meminjam.',
      ],
    },
    {
      type: 'paragraph',
      html: 'Brosur universitas biasanya menonjolkan satu angka: uang kuliah. Kehidupan nyata lebih rumit. Anda mungkin juga membayar tempat tinggal, makanan, transportasi, buku, asuransi, dan bunga atas uang yang dipinjam. Itulah mengapa simulator pinjaman mahasiswa yang berguna tidak boleh berhenti pada harga stiker. Ini harus membantu Anda menjawab pertanyaan yang lebih sulit: <em>berapa biaya keputusan ini bagi saya selama masa kuliah, berapa banyak utang yang tersisa setelah bantuan, dan tekanan pembayaran seperti apa yang akan saya hadapi setelah lulus?</em>',
    },
    { type: 'title', text: 'Keputusan yang Dibantu Simulator Ini untuk Anda Ambil', level: 3 },
    {
      type: 'list',
      items: [
        'Apakah paket beasiswa benar-benar mengubah hasil utang atau hanya memperlunak tajuk pemasaran.',
        'Apakah tinggal di kampus, komuter, atau berbagi akomodasi memberikan keseimbangan jangka panjang yang paling sehat.',
        'Apakah jangka waktu pembayaran yang lebih lama sepadan dengan cicilan bulanan yang lebih rendah setelah total bunga diperhitungkan.',
        'Apakah program studi masih terlihat layak setelah Anda memasukkan biaya hidup, bukan hanya uang kuliah.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Gunakan ini sebelum Anda menyetujui tawaran sekolah',
      html: '<ul><li>Bandungkan dua atau tiga tawaran menggunakan asumsi biaya hidup yang sama.</li><li>Uji skenario beasiswa "terbaik" dan "lebih realistis".</li><li>Periksa apakah cicilan bulanan masih terasa dapat diterima jika pinjaman meningkat or pembayaran memakan waktu lebih lama.</li></ul>',
    },
    { type: 'title', text: 'Cara Membaca Hasil Tanpa Membohongi Diri Sendiri', level: 3 },
    {
      type: 'table',
      headers: ['Metrik', 'Arti', 'Mengapa penting'],
      rows: [
        ['Biaya studi penuh', 'Uang kuliah ditambah biaya hidup selama masa studi', 'Ini adalah anggaran nyata yang Anda coba danai, bukan angka sederhana di brosur'],
        ['Pokok pinjaman', 'Jumlah yang masih belum tertutup setelah beasiswa dan uang muka', 'Ini adalah utang yang mengikuti Anda ke masa pembayaran dan layak mendapatkan perhatian terbesar'],
        ['Perkiraan cicilan bulanan', 'Jumlah pembayaran tetap berdasarkan bunga dan jangka waktu pembayaran', 'Ini adalah tolok ukur cepat terbaik untuk tekanan keuangan setelah lulus'],
        ['Total bunga', 'Biaya ekstra yang dibayarkan di atas jumlah pinjaman', 'Ini membantu Anda melihat apakah cicilan bulanan yang lebih rendah diam-diam menjadi pinjaman yang jauh lebih mahal'],
      ],
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '4', label: 'masukan inti untuk diuji ketahanannya terlebih dahulu' },
        { value: '2', label: 'skenario yang minimal layak dibandingkan' },
        { value: '1', label: 'angka cicilan bulanan untuk pemeriksaan kelayakan' },
        { value: '0', label: 'ketergantungan pada uang kuliah saja yang harus Anda terima' },
      ],
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Jangka waktu lebih pendek',
          description: 'Lebih baik jika arus kas masa depan Anda kemungkinan cukup kuat untuk menyerap pembayaran yang lebih tinggi.',
          highlight: true,
          points: [
            'Cicilan bulanan lebih tinggi',
            'Total bunga lebih rendah',
            'Utang lunas lebih cepat',
          ],
        },
        {
          title: 'Jangka waktu lebih panjang',
          description: 'Lebih baik saat Anda membutuhkan ruang bernapas di awal, tetapi hanya jika Anda memahami biaya jangka panjang ekstra.',
          points: [
            'Cicilan bulanan lebih rendah',
            'Total bunga lebih tinggi',
            'Lebih fleksibel tetapi biaya jangka panjang lebih tinggi',
          ],
        },
      ],
    },
    {
      type: 'tip',
      html: '<strong>Stres tes yang berguna:</strong> turunkan beasiswa, naikkan sewa sedikit, dan perpanjang pembayaran beberapa tahun. Jika rencana tersebut hanya berfungsi pada versi yang paling optimis, itu belum merupakan rencana yang kuat.',
    },
    { type: 'title', text: 'Cara Praktis Membandingkan Dua Sekolah', level: 3 },
    {
      type: 'list',
      items: [
        'Masukkan asumsi biaya hidup yang sama untuk kedua sekolah terlebih dahulu agar Anda tidak membandingkan realitas yang berbeda.',
        'Kemudian perbarui hanya variabel yang benar-benar berbeda: uang kuliah, beasiswa, dan pilihan tempat tinggal yang mungkin.',
        'Fokus pada pokok pinjaman dan cicilan bulanan sebelum Anda fokus pada prestise atau merek.',
        'Jika satu opsi hanya menang karena Anda mengasumsikan biaya hidup yang murah secara tidak wajar, perlakukan itu sebagai tanda peringatan.',
      ],
    },
    {
      type: 'card',
      title: 'Yang sering dilewatkan keluarga',
      html: 'Sekolah yang terlihat lebih murah pada uang kuliah masih dapat menghasilkan lebih banyak utang secara keseluruhan jika biaya hidup secara struktural lebih tinggi atau dukungan beasiswa kurang stabil dari tahun ke tahun.',
    },
    { type: 'title', text: 'Batasan Proyeksi Biaya Universitas Mana Pun', level: 3 },
    {
      type: 'proscons',
      title: 'Kekuatan dan batasan',
      items: [
        {
          pro: 'Estimasi dasar cepat untuk membandingkan beberapa opsi studi',
          con: 'Tidak memodelkan penangguhan, masa tenggang, atau pembayaran berbasis pendapatan',
        },
        {
          pro: 'Membuat biaya hidup terlihat alih-alih menyembunyikannya di balik uang kuliah',
          con: 'Mengasumsikan bunga tetap dan cicilan bulanan tetap',
        },
        {
          pro: 'Menunjukkan lintasan utang secara visual alih-alih hanya melaporkan satu total tajuk',
          con: 'Tidak memperhitungkan pajak, inflasi, atau perubahan gaji di masa depan',
        },
      ],
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Bunga',
          definition: 'Suku bunga tahunan. Ini mewakili biaya pinjaman tahunan dan dikonversi menjadi tingkat bulanan untuk perhitungan pembayaran.',
        },
        {
          term: 'Pokok Pinjaman',
          definition: 'Jumlah yang sebenarnya dipinjam setelah beasiswa dan pembayaran di muka mengurangi total biaya.',
        },
        {
          term: 'Amortisasi',
          definition: 'Proses bulan demi bulan untuk melunasi pinjaman melalui pembayaran rutin yang mencakup bunga terlebih dahulu dan pokok pinjaman seiring waktu.',
        },
      ],
    },
    {
      type: 'message',
      title: 'Langkah selanjutnya yang disarankan',
      html: 'Gunakan simulator ini untuk mempersempit daftar pilihan Anda, lalu validasi pemenang terhadap surat bantuan keuangan yang sebenarnya, kenyataan tempat tinggal, dan pendapatan awal karir yang diharapkan untuk bidang Anda sebelum Anda membuat komitmen akhir.',
    },
  ],
  faq: faqItems,
  bibliography,
  howTo: howToItems,
  schemas: [faqSchema, howToSchema, appSchema],
};
