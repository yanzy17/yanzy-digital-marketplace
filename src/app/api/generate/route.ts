import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt, apiKey } = await req.json();

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key belum diisi. Buka Settings untuk masukkan Gemini API key." },
        { status: 400 }
      );
    }

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt kosong. Isi form dulu ya." },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return NextResponse.json({ result: text });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Gagal generate";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
