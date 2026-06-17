import { getTemplatesByPlatform, type Template } from "./templates";

export type GeneratorInput = {
  topik: string;
  platformId: string;
  audiens: string;
  frameworkId: string;
  produk: string;
};

export type GeneratedContent = {
  platform: string;
  tag: string;
  text: string;
};

function fillTemplate(tmpl: string, input: GeneratorInput): string {
  const topik = input.topik || "hal ini";
  const audiens = input.audiens || "kalian semua";
  const produk = input.produk || "";
  return tmpl
    .replace(/{topik}/g, topik)
    .replace(/{audiens}/g, audiens)
    .replace(/{produk}/g, produk);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


/**
 * Generate content for a single platform + framework combo.
 * Returns all matching templates filled with user input.
 */
export function generateContent(input: GeneratorInput): GeneratedContent[] {
  const templates = getTemplatesByPlatform(input.platformId);
  const results: GeneratedContent[] = [];

  if (input.frameworkId === "all") {
    // Generate one random template from each framework
    for (const [, tmpls] of Object.entries(templates)) {
      if (tmpls.length > 0) {
        const picked = tmpls[Math.floor(Math.random() * tmpls.length)];
        results.push({
          platform: input.platformId,
          tag: picked.tag,
          text: fillTemplate(picked.text, input),
        });
      }
    }
    return shuffle(results);
  }

  // Get templates for selected framework
  const fwTemplates: Template[] = templates[input.frameworkId] || [];

  if (fwTemplates.length === 0) {
    // Fallback to free flow
    const fallback = templates["free"] || [];
    fallback.forEach((t) => {
      results.push({
        platform: input.platformId,
        tag: t.tag,
        text: fillTemplate(t.text, input),
      });
    });
    return results;
  }

  fwTemplates.forEach((t) => {
    results.push({
      platform: input.platformId,
      tag: t.tag,
      text: fillTemplate(t.text, input),
    });
  });

  return results;
}

/**
 * Generate content for multiple platforms at once.
 */
export function generateMultiPlatform(
  input: Omit<GeneratorInput, "platformId">,
  platformIds: string[]
): GeneratedContent[] {
  const all: GeneratedContent[] = [];
  for (const pid of platformIds) {
    const results = generateContent({ ...input, platformId: pid });
    all.push(...results);
  }
  return all;
}
