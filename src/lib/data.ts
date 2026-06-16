// =============================================================
// ViralBoost — Data layer
// Semua "otak" konten: platform, framework, sub-style, tone.
// Dipakai untuk menyusun mega-prompt (tanpa API).
// =============================================================

export type Platform = {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  // Instruksi format spesifik per platform untuk diselipkan ke prompt
  format: string;
};

export const PLATFORMS: Platform[] = [
  {
    id: "threads",
    name: "Threads",
    emoji: "🧵",
    tagline: "Utas santai ala warga Threads",
    format:
      "Format UTAS (thread) Threads: 1 ide kuat per post, kalimat pendek, banyak baris jeda biar scannable di HP, hook nampar di baris pertama. Maksimal ±500 karakter per post. Pisahkan tiap post dengan penanda [POST 1], [POST 2], dst.",
  },
  {
    id: "instagram",
    name: "Instagram",
    emoji: "📸",
    tagline: "Caption + hook 3 baris pertama",
    format:
      "Format CAPTION Instagram: hook nendang di 3 baris pertama (sebelum 'more'), body storytelling rapi, CTA ajak save/share/komen, tutup dengan 5-10 hashtag relevan campuran besar & niche. Tambahkan ide carousel (slide 1-5) bila cocok.",
  },
  {
    id: "facebook",
    name: "Facebook",
    emoji: "👍",
    tagline: "Storytelling panjang & emosional",
    format:
      "Format POST Facebook: storytelling panjang & emosional, paragraf mengalir, relatable buat audiens dewasa, bangun konteks → konflik → resolusi → CTA halus. Boleh pakai emoji secukupnya.",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    emoji: "🐦",
    tagline: "Thread pendek & punchy",
    format:
      "Format THREAD X (Twitter): tiap tweet maksimal 280 karakter, punchy, hook tweet pertama wajib bikin berhenti scroll, 1 insight per tweet, beri penanda 1/, 2/, 3/, tutup dengan CTA follow/RT.",
  },
  {
    id: "tiktok",
    name: "TikTok",
    emoji: "🎵",
    tagline: "Script video: hook 3 detik",
    format:
      "Format SCRIPT TikTok: tulis dalam bentuk script video — [HOOK 0-3 detik], [BODY], [CTA]. Sertakan saran visual/b-roll singkat, on-screen text, dan caption + hashtag FYP. Bahasa lisan, bukan tulisan formal.",
  },
];

export type Framework = {
  id: string;
  name: string;
  emoji?: string;
  desc: string; // ditampilkan di UI
  guide: string; // diselipkan ke prompt
};

export const FRAMEWORKS: Framework[] = [
  {
    id: "all",
    name: "Buat Semua Framework Sekaligus",
    emoji: "🌈",
    desc: "Sekali generate, dapat banyak variasi utas dari semua framework.",
    guide:
      "Buatkan SATU versi konten untuk SETIAP framework yang tersedia (Unpopular Opinion, Hard Truth, POV, STOP/START, In This Economy, Warga Threads, Permission Offer, Random Realization, Warga Check-In, Daily Yapping). Beri judul tiap blok dengan nama framework-nya. Total minimal 10 variasi.",
  },
  {
    id: "free",
    name: "Gaya Bebas (Free Flow)",
    emoji: "🪶",
    desc: "Tanpa kerangka kaku, ngalir natural.",
    guide:
      "Tulis dengan gaya bebas mengalir natural tanpa kerangka kaku, tapi tetap punya hook kuat di awal dan CTA di akhir.",
  },
  {
    id: "custom",
    name: "Kustom Framework",
    emoji: "🛠️",
    desc: "Atur sendiri kerangkanya.",
    guide:
      "Gunakan kerangka kustom yang ditentukan user di bawah ini sebagai struktur utama konten:",
  },
  {
    id: "unpopular",
    name: "Unpopular opinion",
    desc: "Lempar opini nyeleneh yang memancing diskusi.",
    guide:
      "Buka dengan 'Unpopular opinion:' lalu lempar pendapat berani/kontroversial (tapi bisa dipertanggungjawabkan) soal topik. Pancing perdebatan sehat.",
  },
  {
    id: "hardtruth",
    name: "Hard truth",
    desc: "Kebenaran pahit yang jarang diomongin.",
    guide:
      "Sampaikan 'hard truth' — kebenaran pahit yang jarang orang berani bilang soal topik ini. Tegas, nampar, tapi membangun.",
  },
  {
    id: "pov",
    name: "POV",
    desc: "Sudut pandang yang bikin relate.",
    guide:
      "Mulai dengan 'POV:' lalu gambarkan satu situasi/sudut pandang yang super relatable buat target audiens sampai mereka mikir 'ini gue banget'.",
  },
  {
    id: "stopstart",
    name: "STOP / START",
    desc: "Hal yang harus dihentikan & dimulai.",
    guide:
      "Pakai struktur STOP doing X / START doing Y. List hal yang harus audiens berhentikan dan mulai lakukan terkait topik.",
  },
  {
    id: "economy",
    name: "In this economy",
    desc: "Bumbu relatable soal kondisi ekonomi.",
    guide:
      "Bungkus pesan dengan angle 'in this economy' / 'di ekonomi kayak gini' — relatable soal kondisi dompet & realita biaya hidup, lalu sambungkan ke solusi/topik.",
  },
  {
    id: "warga",
    name: "Warga Threads",
    desc: "Ngajak ngobrol ala sesama warga Threads.",
    guide:
      "Tulis ala obrolan santai sesama 'warga Threads' — akrab, ngajak interaksi, kayak lagi cerita ke temen di timeline.",
  },
  {
    id: "permission",
    name: "Permission Offer",
    desc: "Kasih 'izin' biar audiens merasa lega.",
    guide:
      "Pakai struktur 'Permission Offer' — kasih audiens 'izin' untuk melakukan/berhenti dari sesuatu (contoh: 'Izin ya, kamu boleh kok...'), bikin mereka merasa divalidasi.",
  },
  {
    id: "realization",
    name: "Random Realization",
    desc: "Kesadaran random yang nampol.",
    guide:
      "Mulai dengan sebuah 'random realization' — kesadaran tiba-tiba yang nampol & bikin mikir, lalu kembangkan jadi insight soal topik.",
  },
  {
    id: "checkin",
    name: "Warga Check-In",
    desc: "Ajak audiens check-in / interaksi.",
    guide:
      "Buat konten 'check-in' yang ngajak audiens jawab/komen (contoh: 'Warga, lagi di fase mana nih?'). Fokus ke engagement & balasan.",
  },
  {
    id: "yapping",
    name: "Daily Yapping",
    desc: "Curhat/ngalor-ngidul harian yang relatable.",
    guide:
      "Tulis ala 'daily yapping' — curhat/ngalor-ngidul santai harian yang relatable, lalu sisipkan pesan/insight secara halus di tengah-tengah.",
  },
];

export type SubStyle = {
  id: string;
  name: string;
  guide: string;
};

export const SUBSTYLES: SubStyle[] = [
  {
    id: "auto",
    name: "✨ Otomatis Pilihkan Style Terbaik",
    guide:
      "Pilih sendiri sub-style storytelling yang paling cocok dengan topik & framework agar hasilnya paling kuat.",
  },
  {
    id: "5k",
    name: "5K Story",
    guide:
      "Pakai pola '5K Story': cerita yang dibangun dari Kejadian, Konflik, Klimaks, Konklusi, dan Call-to-action.",
  },
  {
    id: "atm",
    name: "Breakdown Perjalanan / ATM Caraku",
    guide:
      "Breakdown perjalanan/proses langkah demi langkah ala 'Amati-Tiru-Modifikasi' — biar audiens bisa contek caranya.",
  },
  {
    id: "lifelesson",
    name: "Life Lesson Setelah Pengalaman",
    guide:
      "Ceritakan sebuah pengalaman lalu tarik 'life lesson' kuat di akhir yang bisa dipegang audiens.",
  },
  {
    id: "proof",
    name: "Proof First / Hasil Besar",
    guide:
      "Buka dengan bukti/hasil besar dulu (proof first) untuk menarik perhatian, baru ceritakan prosesnya.",
  },
  {
    id: "guided",
    name: "Guided Story",
    guide:
      "Tuntun audiens pelan-pelan lewat cerita terstruktur, seolah memandu mereka dari titik A ke B.",
  },
  {
    id: "relate",
    name: "Relate Story",
    guide:
      "Fokus pada cerita yang super relatable dengan keseharian audiens supaya mereka merasa 'ini gue banget'.",
  },
  {
    id: "fromzero",
    name: "Cerita proses dari nol",
    guide:
      "Ceritakan proses benar-benar dari nol/mulai dari bawah, jujur soal struggle-nya, sampai ada progress.",
  },
  {
    id: "smallinsight",
    name: "Cerita kejadian kecil jadi insight",
    guide:
      "Ambil satu kejadian kecil/sepele, lalu ubah jadi insight besar yang bermakna.",
  },
];

export type Tone = { id: string; name: string; guide: string };

export const TONES: Tone[] = [
  { id: "genz", name: "Gen Z Santai", guide: "Bahasa Gen Z Indonesia super santai: pakai 'lu/gue' atau 'aku/kamu' yang akrab, slang wajar (literally, ngab, anjir-halus, real, valid, fyi), emoji secukupnya, ga kaku, ga bau robot." },
  { id: "santuy", name: "Santuy Friendly", guide: "Santai friendly, akrab tapi sopan, cocok untuk audiens umum." },
  { id: "inspiratif", name: "Inspiratif", guide: "Hangat & inspiratif, membangun semangat tanpa terdengar menggurui." },
  { id: "tegas", name: "Tegas / Bold", guide: "Tegas, bold, to the point, berani — cocok untuk hot take." },
  { id: "jualan", name: "Soft Selling", guide: "Persuasif tapi halus (soft selling), jualan tanpa terkesan maksa." },
];

export const NAV_ITEMS = [
  { id: "buat", label: "Buat", icon: "sparkle" },
  { id: "shopee", label: "Shopee", icon: "bag" },
  { id: "secret", label: "Secret Viral", icon: "repeat" },
  { id: "spinner", label: "Viral Spinner", icon: "layers" },
  { id: "lainnya", label: "Lainnya", icon: "user" },
] as const;
