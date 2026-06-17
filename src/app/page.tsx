"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CreatorForm from "@/components/CreatorForm";
import PromptOutput from "@/components/PromptOutput";
import BottomNav from "@/components/BottomNav";
import ApiKeyModal from "@/components/ApiKeyModal";

export default function Home() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  const handleGenerate = async (prompt: string) => {
    const apiKey = localStorage.getItem("gemini_api_key") || "";
    if (!apiKey) {
      setError("API key belum diisi! Klik 🔑 di header untuk masukin Gemini API key (gratis).");
      return;
    }
    setLoading(true);
    setError("");
    setResult("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, apiKey }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Gagal generate");
      setResult(data.result);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Terjadi error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <Header onOpenSettings={() => setShowSettings(true)} />
      <HeroBanner />
      <CreatorForm onGenerate={handleGenerate} />
      <PromptOutput result={result} loading={loading} error={error} />
      <div className="h-8" />
      <BottomNav />
      <ApiKeyModal open={showSettings} onClose={() => setShowSettings(false)} />
    </div>
  );
}
