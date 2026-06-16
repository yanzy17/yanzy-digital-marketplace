export default function HeroBanner() {
  return (
    <section className="mx-4 mt-4 p-6 rounded-2xl" style={{ background: "var(--card)" }}>
      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
        style={{ background: "var(--accent)", color: "#000" }}>
        ⭐ PREMIUM CREATOR KIT
      </span>
      <p className="text-xs uppercase tracking-wide mb-2" style={{ color: "var(--muted)" }}>
        MADE BY AND FOR INDONESIAN CREATORS
      </p>
      <h1 className="text-2xl font-bold leading-tight mb-3" style={{ color: "var(--text)" }}>
        Bikin Audiens Nangis, Ketawa, atau Auto-Belanja lewat kontenmu!
      </h1>
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        ViralBoost menyusun prompt AI agar tulisan lu terasa seperti warga sosmed tulen: 
        asyik, ga kaku, sarat emosional, scannable di HP, dan jauh dari bau robot. 
        Support Threads, Instagram, Facebook, Twitter/X, dan TikTok.
      </p>
    </section>
  );
}
