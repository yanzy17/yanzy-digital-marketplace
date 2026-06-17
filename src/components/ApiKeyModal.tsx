"use client";
import { useState, useEffect } from "react";

type Props = { open: boolean; onClose: () => void };

export default function ApiKeyModal({ open, onClose }: Props) {
  const [key, setKey] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("gemini_api_key") || "";
    setKey(saved);
  }, [open]);

  const handleSave = () => {
    localStorage.setItem("gemini_api_key", key.trim());
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="w-full max-w-sm rounded-2xl p-5" style={{ background: "var(--card)" }}>
        <h3 className="font-bold text-lg mb-2" style={{ color: "var(--text)" }}>
          🔑 Setting API Key
        </h3>
        <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>
          Ambil API key GRATIS dari{" "}
          <a href="https://aistudio.google.com/apikey" target="_blank"
            rel="noopener" className="underline" style={{ color: "var(--accent)" }}>
            Google AI Studio
          </a>
          {" "}→ Create API Key → Copy paste di sini.
        </p>
        <input type="password" value={key} onChange={(e) => setKey(e.target.value)}
          placeholder="Paste Gemini API key di sini..."
          className="w-full px-3 py-2.5 rounded-lg text-sm outline-none mb-4"
          style={{ background: "var(--input-bg)", border: "1px solid var(--border)", color: "var(--text)" }} />
        <div className="flex gap-2">
          <button onClick={onClose}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium"
            style={{ border: "1px solid var(--border)", color: "var(--muted)" }}>
            Batal
          </button>
          <button onClick={handleSave}
            className="flex-1 py-2.5 rounded-lg text-sm font-bold"
            style={{ background: "var(--accent)", color: "#000" }}>
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
