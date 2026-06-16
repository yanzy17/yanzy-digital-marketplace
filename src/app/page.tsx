"use client";
import { useState } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CreatorForm from "@/components/CreatorForm";
import PromptOutput from "@/components/PromptOutput";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="max-w-lg mx-auto">
      <Header />
      <HeroBanner />
      <CreatorForm onGenerate={setPrompt} />
      <PromptOutput prompt={prompt} />
      <div className="h-8" />
      <BottomNav />
    </div>
  );
}
