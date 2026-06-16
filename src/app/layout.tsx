import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ViralBoost — Creator Kit Multi-Platform",
  description: "Bikin konten viral tanpa API untuk Threads, IG, FB, Twitter, TikTok",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="min-h-screen pb-20">{children}</body>
    </html>
  );
}
