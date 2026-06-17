"use client";
import { useState } from "react";
import { PLATFORMS } from "@/lib/data";
import { type GeneratedContent } from "@/lib/contentGenerator";

type Props = { results: GeneratedContent[] };

export default function PromptOutput({ results }: Props) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (results.length === 0) return null;

  const handleCopy = async (text: string, idx: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  const getPlatformEmoji = (pid: string) => {
    return PLATFORMS.find((p) => p.id === pid)?.emoji || "📄";
  };
  const getPlatformName = (pid: string) => {
    return PLATFORMS.find((p) => p.id === pid)?.name || pid;
  };

  return (
    <section className="mx-4 mt-4">
      <h3 className="font-bold text-base mb-3 flex items-center gap-2"
        style={{ color: "var(--text)" }}>
        🔥 Konten Siap Pakai ({results.length} variasi)
      </h3>
      <div className="flex flex-col gap-3">
        {results.map((item, idx) => (
          <div key={idx} onClick={() => handleCopy(item.text, idx)}
            className="relative p-4 rounded-xl cursor-pointer transition-all"
            style={{
              background: copiedIdx === idx ? "#e6f7ee" : "var(--card)",
              border: `1px solid ${copiedIdx === idx ? "#2e7d4f" : "var(--border)"}`,
            }}>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded"
                style={{ background: "var(--accent)", color: "#000" }}>
                {getPlatformEmoji(item.platform)} {getPlatformName(item.platform)}
              </span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded"
                style={{ background: "var(--input-bg)", color: "var(--muted)" }}>
                {item.tag}
              </span>
              <span className="ml-auto text-[10px]"
                style={{ color: "var(--muted)" }}>
                {copiedIdx === idx ? "✅ Copied!" : "Tap to copy"}
              </span>
            </div>
            <div className="whitespace-pre-wrap text-sm leading-relaxed"
              style={{ color: "var(--text)" }}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
