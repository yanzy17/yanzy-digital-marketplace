"use client";
import { useState } from "react";
import { PLATFORMS, FRAMEWORKS } from "@/lib/data";

type Props = {
  onGenerate: (input: {
    topik: string;
    audiens: string;
    frameworkId: string;
    produk: string;
    platforms: string[];
  }) => void;
};

export default function CreatorForm({ onGenerate }: Props) {
  const [topik, setTopik] = useState("");
  const [audiens, setAudiens] = useState("");
  const [frameworkId, setFrameworkId] = useState("free");
  const [produk, setProduk] = useState("");
  const [platforms, setPlatforms] = useState<string[]>(["threads"]);

  const togglePlatform = (id: string) => {
    setPlatforms((prev) => {
      const has = prev.includes(id);
      const next = has ? prev.filter((p) => p !== id) : [...prev, id];
      return next.length ? next : prev;
    });
  };

  const handleGenerate = () => {
    onGenerate({ topik, audiens, frameworkId, produk, platforms });
  };

  return (
    <section className="mx-4 mt-4 p-5 rounded-2xl"
      style={{ background: "var(--card)" }}>
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xl">📝</span>
        <h2 className="font-bold text-lg"
          style={{ color: "var(--text)" }}>Formulir Kreator</h2>
      </div>


      {/* 1. Topik */}
      <label className="block text-sm font-medium mb-1"
        style={{ color: "var(--text)" }}>1. Topik Utama</label>
      <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>
        Materi inti. Contoh: &quot;freelance&quot;, &quot;skincare murah&quot;
      </p>
      <input type="text" value={topik}
        onChange={(e) => setTopik(e.target.value)}
        placeholder="Contoh: cara mulai freelance dari nol"
        className="w-full px-3 py-2 rounded-lg text-sm outline-none mb-4"
        style={{ background: "var(--input-bg)", border: "1px solid var(--border)", color: "var(--text)" }} />

      {/* 2. Platform */}
      <label className="block text-sm font-medium mb-1"
        style={{ color: "var(--text)" }}>2. Pilih Platform</label>
      <div className="flex flex-wrap gap-2 mb-4">
        {PLATFORMS.map((p) => (
          <button key={p.id} onClick={() => togglePlatform(p.id)}
            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
            style={{
              background: platforms.includes(p.id) ? "var(--accent)" : "var(--input-bg)",
              color: platforms.includes(p.id) ? "#000" : "var(--muted)",
              border: `1px solid ${platforms.includes(p.id) ? "var(--accent)" : "var(--border)"}`,
            }}>
            {p.emoji} {p.name}
          </button>
        ))}
      </div>

      {/* 3. Target Audiens */}
      <label className="block text-sm font-medium mb-1"
        style={{ color: "var(--text)" }}>3. Target Audiens (Opsional)</label>
      <input type="text" value={audiens}
        onChange={(e) => setAudiens(e.target.value)}
        placeholder="Contoh: mahasiswa, pekerja kantoran"
        className="w-full px-3 py-2 rounded-lg text-sm outline-none mb-4"
        style={{ background: "var(--input-bg)", border: "1px solid var(--border)", color: "var(--text)" }} />


      {/* 4. Framework */}
      <label className="block text-sm font-medium mb-1"
        style={{ color: "var(--text)" }}>4. Framework Konten</label>
      <select value={frameworkId}
        onChange={(e) => setFrameworkId(e.target.value)}
        className="w-full px-3 py-2 rounded-lg text-sm outline-none appearance-none mb-4"
        style={{ background: "var(--input-bg)", border: "1px solid var(--border)", color: "var(--text)" }}>
        <option value="all">🌈 Buat Semua Framework Sekaligus</option>
        {FRAMEWORKS.map((f) => (
          <option key={f.id} value={f.id}>
            {f.emoji ? `${f.emoji} ` : ""}{f.name}
          </option>
        ))}
      </select>

      {/* 5. Produk */}
      <label className="block text-sm font-medium mb-1"
        style={{ color: "var(--text)" }}>5. Produk / Penawaran (Opsional)</label>
      <input type="text" value={produk}
        onChange={(e) => setProduk(e.target.value)}
        placeholder="Contoh: Ebook Canva gratis, link bio"
        className="w-full px-3 py-2 rounded-lg text-sm outline-none mb-4"
        style={{ background: "var(--input-bg)", border: "1px solid var(--border)", color: "var(--text)" }} />

      {/* Generate */}
      <button onClick={handleGenerate}
        className="w-full py-3 rounded-xl font-bold text-base transition-all active:scale-95"
        style={{ background: "var(--accent)", color: "#000" }}>
        🚀 Generate Konten
      </button>
      <p className="text-xs text-center mt-2" style={{ color: "var(--muted)" }}>
        Langsung keluar hasil — tinggal copy &amp; paste ke sosmed!
      </p>
    </section>
  );
}
