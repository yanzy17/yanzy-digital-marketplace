// =============================================================
// ViralBoost — Template-based Content Generator (NO API)
// =============================================================

export type Platform = {
  id: string;
  name: string;
  emoji: string;
};

export const PLATFORMS: Platform[] = [
  { id: "threads", name: "Threads", emoji: "🧵" },
  { id: "instagram", name: "Instagram", emoji: "📸" },
  { id: "facebook", name: "Facebook", emoji: "👍" },
  { id: "twitter", name: "Twitter / X", emoji: "🐦" },
  { id: "tiktok", name: "TikTok", emoji: "🎵" },
];

export type Framework = {
  id: string;
  name: string;
  emoji?: string;
  desc: string;
};

export const FRAMEWORKS: Framework[] = [
  { id: "free", name: "Gaya Bebas (Free Flow)", emoji: "🪶", desc: "Ngalir natural" },
  { id: "unpopular", name: "Unpopular Opinion", desc: "Opini nyeleneh" },
  { id: "hardtruth", name: "Hard Truth", desc: "Kebenaran pahit" },
  { id: "pov", name: "POV", desc: "Sudut pandang relatable" },
  { id: "stopstart", name: "STOP / START", desc: "Hal yang harus dihentikan & dimulai" },
  { id: "economy", name: "In This Economy", desc: "Relatable soal kondisi ekonomi" },
  { id: "warga", name: "Warga Threads", desc: "Obrolan santai ala warga" },
  { id: "permission", name: "Permission Offer", desc: "Kasih izin biar audiens lega" },
  { id: "realization", name: "Random Realization", desc: "Kesadaran random nampol" },
  { id: "checkin", name: "Warga Check-In", desc: "Ajak interaksi" },
  { id: "yapping", name: "Daily Yapping", desc: "Curhat harian relatable" },
];

export const NAV_ITEMS = [
  { id: "buat", label: "Buat", icon: "sparkle" },
  { id: "shopee", label: "Shopee", icon: "bag" },
  { id: "secret", label: "Secret Viral", icon: "repeat" },
  { id: "spinner", label: "Viral Spinner", icon: "layers" },
  { id: "lainnya", label: "Lainnya", icon: "user" },
] as const;
