"use client";
import { useState } from "react";

type Props = { prompt: string };

export default function PromptOutput({ prompt }: Props) {
  const [copied, setCopied] = useState(false);

  if (!prompt) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-4 mt-4 p-5 rounded-2xl" style={{ background: "var(--card)" }}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-base" style={{ color: "var(--text)" }}>
          📋 Prompt Siap Copy
        </h3>
        <button onClick={handleCopy}
          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
          style={{ background: "var(--accent)", color: "#000" }}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-sm leading-relaxed p-4 rounded-xl overflow-auto max-h-96"
        style={{ background: "var(--input-bg)", color: "var(--text)", border: "1px solid var(--border)" }}>
        {prompt}
      </pre>
      <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>
        💡 Paste prompt ini ke ChatGPT, Gemini, atau Claude (versi gratis pun jalan).
      </p>
    </section>
  );
}
