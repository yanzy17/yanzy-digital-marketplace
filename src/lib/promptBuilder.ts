import {
  PLATFORMS,
  FRAMEWORKS,
  SUBSTYLES,
  TONES,
  type Platform,
} from "./data";

export type CreatorInput = {
  mode: "standar" | "kasar";
  topik: string;
  platforms: string[]; // platform ids
  audiens: string;
  panduan: string; // angle / panduan konsep
  frameworkId: string;
  customFramework: string;
  substyleId: string;
  toneId: string;
  produk: string;
  instruksi: string;
  jumlahPost: number;
  rawStory: string; // khusus mode "kasar"
};

export const DEFAULT_INPUT: CreatorInput = {
  mode: "standar",
  topik: "",
  platforms: ["threads"],
  audiens: "",
  panduan: "",
  frameworkId: "free",
  customFramework: "",
  substyleId: "auto",
  toneId: "genz",
  produk: "",
  instruksi: "",
  jumlahPost: 1,
  rawStory: "",
};

function platformBlock(platforms: Platform[]): string {
  if (platforms.length === 0) return "";
  const lines = platforms
    .map((p) => `• ${p.name} ${p.emoji} — ${p.format}`)
    .join("\n");
  return lines;
}

/**
 * Menyusun mega-prompt berbahasa Indonesia yang siap di-copy-paste
 * ke ChatGPT / Gemini / Claude (versi gratis). Tanpa API.
 */
export function buildPrompt(input: CreatorInput): string {
  const platforms = PLATFORMS.filter((p) => input.platforms.includes(p.id));
  const framework = FRAMEWORKS.find((f) => f.id === input.frameworkId);
  const substyle = SUBSTYLES.find((s) => s.id === input.substyleId);
  const tone = TONES.find((t) => t.id === input.toneId);

  const platformNames =
    platforms.map((p) => p.name).join(", ") || "media sosial";

  const parts: string[] = [];

  parts.push(
    `Kamu adalah copywriter & content creator profesional asal Indonesia yang jago bikin konten viral di ${platformNames}. ` +
      `Tugasmu: tulis konten yang terasa seperti ditulis manusia tulen — asyik, ga kaku, sarat emosi, scannable di HP, dan JAUH dari kesan robot/AI. ` +
      `Hindari kalimat klise copywriter agensi.`
  );

  // Tone
  if (tone) {
    parts.push(`GAYA BAHASA:\n${tone.guide}`);
  }

  // Platform formats
  if (platforms.length > 0) {
    parts.push(
      `PLATFORM & FORMAT (buatkan konten terpisah untuk tiap platform berikut):\n${platformBlock(
        platforms
      )}`
    );
  }

  // Topic / brief
  if (input.mode === "kasar") {
    parts.push(
      `BAHAN MENTAH DARI CREATOR (rapikan & kembangkan jadi konten yang enak dibaca, jangan diceramahi, pertahankan suara aslinya):\n"""\n${
        input.rawStory.trim() || "(belum diisi)"
      }\n"""`
    );
  }

  if (input.topik.trim()) {
    parts.push(`TOPIK UTAMA: ${input.topik.trim()}`);
  }

  if (input.audiens.trim()) {
    parts.push(`TARGET AUDIENS: ${input.audiens.trim()}`);
  }

  if (input.panduan.trim()) {
    parts.push(`PANDUAN / ANGLE: ${input.panduan.trim()}`);
  }

  // Framework
  if (framework) {
    let fwText = `FRAMEWORK: ${framework.name}\n${framework.guide}`;
    if (framework.id === "custom" && input.customFramework.trim()) {
      fwText += `\n${input.customFramework.trim()}`;
    }
    parts.push(fwText);
  }

  // Sub-style
  if (substyle) {
    parts.push(`SUB-STYLE STORYTELLING: ${substyle.name}\n${substyle.guide}`);
  }

  // Produk / penawaran
  if (input.produk.trim()) {
    parts.push(
      `PRODUK / PENAWARAN (selipkan secara soft selling, jangan hard sell, baru tawarkan setelah memberi value):\n${input.produk.trim()}`
    );
  }

  // Instruksi tambahan
  if (input.instruksi.trim()) {
    parts.push(`INSTRUKSI TAMBAHAN: ${input.instruksi.trim()}`);
  }

  // Output rules
  const jumlah =
    input.frameworkId === "all"
      ? "Buat 1 versi untuk tiap framework (lihat instruksi framework di atas)."
      : `Buat ${input.jumlahPost} variasi konten yang berbeda angle/hook-nya.`;

  parts.push(
    `ATURAN OUTPUT:\n` +
      `1. ${jumlah}\n` +
      `2. Tiap konten WAJIB punya HOOK pembuka yang bikin berhenti scroll.\n` +
      `3. Tutup dengan CTA yang halus & relevan.\n` +
      `4. Jangan pakai bahasa kaku/baku berlebihan, jangan kebanyakan tanda hubung, jangan mulai dengan "Di era digital ini".\n` +
      `5. Kalau ada beberapa platform, beri judul jelas tiap bagian (mis. "=== THREADS ===").\n` +
      `6. Sertakan 3-5 saran hashtag/keyword di akhir tiap konten bila relevan.\n` +
      `7. Bahasa: Indonesia.`
  );

  return parts.join("\n\n");
}

/** Ringkasan singkat pilihan user untuk preview chip di UI. */
export function summarize(input: CreatorInput): string[] {
  const chips: string[] = [];
  const platforms = PLATFORMS.filter((p) => input.platforms.includes(p.id));
  platforms.forEach((p) => chips.push(`${p.emoji} ${p.name}`));
  const fw = FRAMEWORKS.find((f) => f.id === input.frameworkId);
  if (fw) chips.push(fw.name);
  return chips;
}
