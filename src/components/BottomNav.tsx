"use client";
import { useState } from "react";
import { NAV_ITEMS } from "@/lib/data";

const icons: Record<string, string> = {
  sparkle: "✨",
  bag: "🛒",
  repeat: "🔄",
  layers: "📊",
  user: "👤",
};

export default function BottomNav() {
  const [active, setActive] = useState("buat");

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t flex justify-around py-2"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}>
      {NAV_ITEMS.map((item) => (
        <button key={item.id} onClick={() => setActive(item.id)}
          className="flex flex-col items-center gap-0.5 px-2 py-1 transition-all"
          style={{ color: active === item.id ? "var(--accent)" : "var(--muted)" }}>
          <span className="text-xl">{icons[item.icon]}</span>
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
