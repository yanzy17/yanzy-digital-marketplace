"use client";
import { useState } from "react";

type Props = { result: string; loading: boolean; error: string };

export default function PromptOutput({ result, loading, error }: Props) {
  const [copied, setCopied] = useState(false);

  if (loading) {
    return (
      <section className="mx-4 mt-4 p-5 rounded-2xl" style={{ background: "var(--card)" }}>
        <div className="flex items-center gap-3">
          <div className="animate-spin w-5 h-5 border-2 border-t-transparent rounded-full"
            style={{ borderColor: "var(--accent)", borderTopColor: "transparent" }} />
          <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
            Lagi nge-generate konten... tunggu bentar ya ✨
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-4 mt-4 p-5 rounded-2xl border"
        style={{ background: "var(--card)", borderColor: "#ef4444" }}>
        <p className="text-sm" style={{ color: "#ef4444" }}>❌ {error}</p>
      </section>
    );
  }

  if (!result) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <section className="mx-4 mt-4 p-5 rounded-2xl" style={{ background: "var(--card)" }}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-base" style={{ color: "var(--text)" }}>
          🔥 Konten Siap Pakai
        </h3>
        <button onClick={handleCopy}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
          style={{ background: "var(--accent)", color: "#000" }}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>
      <div className="whitespace-pre-wrap text-sm leading-relaxed p-4 rounded-xl overflow-auto max-h-[500px]"
        style={{ background: "var(--input-bg)", color: "var(--text)", border: "1px solid var(--border)" }}>
        {result}
      </div>
      <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
        💡 Tinggal copy & paste ke platform sosmed lu. Edit dikit kalau perlu.
      </p>
    </section>
  );
}
