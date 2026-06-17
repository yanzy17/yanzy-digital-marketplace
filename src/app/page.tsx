"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CreatorForm from "@/components/CreatorForm";
import PromptOutput from "@/components/PromptOutput";
import BottomNav from "@/components/BottomNav";
import { generateMultiPlatform, type GeneratedContent } from "@/lib/contentGenerator";

export default function Home() {
  const [results, setResults] = useState<GeneratedContent[]>([]);

  const handleGenerate = (input: {
    topik: string;
    audiens: string;
    frameworkId: string;
    produk: string;
    platforms: string[];
  }) => {
    const content = generateMultiPlatform(
      { topik: input.topik, audiens: input.audiens, frameworkId: input.frameworkId, produk: input.produk },
      input.platforms
    );
    setResults(content);
  };

  return (
    <div className="max-w-lg mx-auto">
      <Header />
      <HeroBanner />
      <CreatorForm onGenerate={handleGenerate} />
      <PromptOutput results={results} />
      <div className="h-24" />
      <BottomNav />
    </div>
  );
}
