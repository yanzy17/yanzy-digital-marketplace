"use client";
import { useState } from "react";
import { PLATFORMS, FRAMEWORKS, SUBSTYLES, TONES } from "@/lib/data";
import { buildPrompt, DEFAULT_INPUT, type CreatorInput } from "@/lib/promptBuilder";

type Props = { onGenerate: (prompt: string) => void };

export default function CreatorForm({ onGenerate }: Props) {
  const [input, setInput] = useState<CreatorInput>({ ...DEFAULT_INPUT });
  const [tab, setTab] = useState<"standar" | "kasar">("standar");

  const set = <K extends keyof CreatorInput>(k: K, v: CreatorInput[K]) =>
    setInput((prev) => ({ ...prev, [k]: v }));

  const togglePlatform = (id: string) => {
    setInput((prev) => {
      const has = prev.platforms.includes(id);
      const next = has
        ? prev.platforms.filter((p) => p !== id)
        : [...prev.platforms, id];
      return { ...prev, platforms: next.length ? next : prev.platforms };
    });
  };

  const handleGenerate = () => {
    const final = { ...input, mode: tab };
    onGenerate(buildPrompt(final));
  };


  return (
    <section className="mx-4 mt-4 p-5 rounded-2xl" style={{ background: "var(--card)" }}>
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📝</span>
        <h2 className="font-bold text-lg" style={{ color: "var(--text)" }}>Formulir Kreator</h2>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-5">
        <button onClick={() => setTab("standar")}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: tab === "standar" ? "var(--text)" : "var(--input-bg)",
            color: tab === "standar" ? "var(--card)" : "var(--muted)",
            border: `1px solid ${tab === "standar" ? "var(--text)" : "var(--border)"}`,
          }}>
          Form Standar
        </button>
        <button onClick={() => setTab("kasar")}
          className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: tab === "kasar" ? "var(--text)" : "var(--input-bg)",
            color: tab === "kasar" ? "var(--card)" : "var(--muted)",
            border: `1px solid ${tab === "kasar" ? "var(--text)" : "var(--border)"}`,
          }}>
          Cerita Kasar (Improviser)
        </button>
      </div>


      {/* Panduan Konsep */}
      <div className="p-4 rounded-xl mb-4" style={{ background: "var(--input-bg)", border: "1px solid var(--border)" }}>
        <p className="font-semibold text-sm mb-2 flex items-center gap-1" style={{ color: "var(--text)" }}>
          <span>❓</span> Panduan Konsep Utama
        </p>

        {/* 1. Topik */}
        <label className="block text-sm font-medium mb-1 mt-3" style={{ color: "var(--text)" }}>
          1. Topik Utama
        </label>
        <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
          Materi inti yang dibahas. Contoh: &quot;gaji 5 juta&quot;, &quot;rekomendasi skincare&quot;
        </p>
        <input type="text" value={input.topik} onChange={(e) => set("topik", e.target.value)}
          placeholder="Contoh: cara mulai freelance dari nol"
          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }} />

        {/* 2. Platform */}
        <label className="block text-sm font-medium mb-1 mt-4" style={{ color: "var(--text)" }}>
          2. Pilih Platform
        </label>
        <div className="flex flex-wrap gap-2">
          {PLATFORMS.map((p) => (
            <button key={p.id} onClick={() => togglePlatform(p.id)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={{
                background: input.platforms.includes(p.id) ? "var(--accent)" : "var(--card)",
                color: input.platforms.includes(p.id) ? "#000" : "var(--muted)",
                border: `1px solid ${input.platforms.includes(p.id) ? "var(--accent)" : "var(--border)"}`,
              }}>
              {p.emoji} {p.name}
            </button>
          ))}
        </div>


        {/* 3. Target Audiens */}
        <label className="block text-sm font-medium mb-1 mt-4" style={{ color: "var(--text)" }}>
          3. Target Audiens (Opsional)
        </label>
        <input type="text" value={input.audiens} onChange={(e) => set("audiens", e.target.value)}
          placeholder="Contoh: mahasiswa, ibu rumah tangga, pekerja kantoran"
          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }} />

        {/* 4. Framework */}
        <label className="block text-sm font-medium mb-1 mt-4" style={{ color: "var(--text)" }}>
          4. Framework Pilihan
        </label>
        <select value={input.frameworkId} onChange={(e) => set("frameworkId", e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-sm outline-none appearance-none"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }}>
          {FRAMEWORKS.map((f) => (
            <option key={f.id} value={f.id}>{f.emoji ? `${f.emoji} ` : ""}{f.name}</option>
          ))}
        </select>
        {input.frameworkId === "custom" && (
          <textarea value={input.customFramework} onChange={(e) => set("customFramework", e.target.value)}
            placeholder="Tulis kerangka kustom kamu di sini..."
            rows={3} className="w-full mt-2 px-3 py-2 rounded-lg text-sm outline-none resize-none"
            style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }} />
        )}


        {/* 5. Sub-Style */}
        <label className="block text-sm font-medium mb-1 mt-4" style={{ color: "var(--text)" }}>
          5. Sub-Style Pilihan (Opsional)
        </label>
        <select value={input.substyleId} onChange={(e) => set("substyleId", e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-sm outline-none appearance-none"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }}>
          {SUBSTYLES.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>

        {/* 6. Tone */}
        <label className="block text-sm font-medium mb-1 mt-4" style={{ color: "var(--text)" }}>
          6. Gaya Bahasa / Tone
        </label>
        <select value={input.toneId} onChange={(e) => set("toneId", e.target.value)}
          className="w-full px-3 py-2 rounded-lg text-sm outline-none appearance-none"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }}>
          {TONES.map((t) => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>

        {/* 7. Produk */}
        <label className="block text-sm font-medium mb-1 mt-4" style={{ color: "var(--text)" }}>
          7. Tautkan Produk / Penawaran (Opsional)
        </label>
        <input type="text" value={input.produk} onChange={(e) => set("produk", e.target.value)}
          placeholder="Contoh: Ebook Canva gratis, template Notion, kursus online"
          className="w-full px-3 py-2 rounded-lg text-sm outline-none"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }} />


        {/* 8. Instruksi Tambahan */}
        <label className="block text-sm font-medium mb-1 mt-4" style={{ color: "var(--text)" }}>
          8. Instruksi Tambahan (Opsional)
        </label>
        <textarea value={input.instruksi} onChange={(e) => set("instruksi", e.target.value)}
          placeholder="Contoh: jangan pakai kata 'mindset', tambah humor receh"
          rows={2} className="w-full px-3 py-2 rounded-lg text-sm outline-none resize-none"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }} />

        {/* Kasar mode: raw story */}
        {tab === "kasar" && (
          <>
            <label className="block text-sm font-medium mb-1 mt-4" style={{ color: "var(--text)" }}>
              📝 Cerita Kasar / Bahan Mentah
            </label>
            <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
              Tulis apa aja yang ada di kepala lu, nanti AI yang rapikan.
            </p>
            <textarea value={input.rawStory} onChange={(e) => set("rawStory", e.target.value)}
              placeholder="Tulis cerita kasar lu di sini... bebas acak-acakan."
              rows={5} className="w-full px-3 py-2 rounded-lg text-sm outline-none resize-none"
              style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)" }} />
          </>
        )}
      </div>


      {/* Generate Button */}
      <button onClick={handleGenerate}
        className="w-full mt-4 py-3 rounded-xl font-bold text-base transition-all active:scale-95"
        style={{ background: "var(--accent)", color: "#000" }}>
        🚀 Generate Prompt
      </button>

      <p className="text-xs text-center mt-2" style={{ color: "var(--muted)" }}>
        Prompt akan muncul di bawah — tinggal copy-paste ke ChatGPT / Gemini / Claude.
      </p>
    </section>
  );
}
