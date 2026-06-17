"use client";
import { useState, useEffect } from "react";

type Props = { onOpenSettings: () => void };

export default function Header({ onOpenSettings }: Props) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}>
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center">
          <span className="text-white text-lg">🚀</span>
        </div>
        <span className="font-bold text-lg" style={{ color: "var(--text)" }}>ViralBoost</span>
        <span className="text-xs px-2 py-0.5 rounded font-semibold"
          style={{ background: "var(--accent)", color: "#000" }}>PRO</span>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onOpenSettings}
          className="w-8 h-8 rounded-full flex items-center justify-center border"
          style={{ borderColor: "var(--border)" }}>
          🔑
        </button>
        <button onClick={() => setDark(!dark)}
          className="w-8 h-8 rounded-full flex items-center justify-center border"
          style={{ borderColor: "var(--border)" }}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
