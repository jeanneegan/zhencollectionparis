"use client";

import { Noto_Serif_SC } from "next/font/google";
import type { Locale } from "@/app/artists/[slug]/data";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const narrationLabels: Record<
  Locale,
  {
    sectionTitle: string;
    hint: string;
    unavailable: string;
  }
> = {
  zh: {
    sectionTitle: "Écouter · 朗读",
    hint: "全文朗读 · 约 6 分钟",
    unavailable: "朗读音频暂不可用。",
  },
  fr: {
    sectionTitle: "Écouter · 朗读",
    hint: "Lecture intégrale · env. 6 min",
    unavailable: "Audio indisponible pour le moment.",
  },
  en: {
    sectionTitle: "Listen",
    hint: "Full narration · approx. 6 min",
    unavailable: "Narration audio is not available yet.",
  },
};

const narrationSources: Partial<Record<Locale, string>> = {
  zh: "/audio/apropos-zh.mp3",
  fr: "/audio/apropos-zh.mp3",
  en: "/audio/apropos-zh.mp3",
};

export function AproposNarration({ locale }: { locale: Locale }) {
  const source = narrationSources[locale];
  const labels = narrationLabels[locale];

  if (!source) {
    return null;
  }

  return (
    <section
      aria-labelledby="apropos-narration-heading"
      className="mt-14 border-t border-stone-200 pt-10"
    >
      <h2
        id="apropos-narration-heading"
        className={`text-[11px] font-medium uppercase tracking-[0.22em] text-[#5a2323] ${
          locale === "zh" ? serif.className : ""
        }`}
      >
        {labels.sectionTitle}
      </h2>
      <p
        className={`mt-3 text-xs leading-relaxed text-stone-500 ${
          locale === "zh" ? serif.className : ""
        }`}
      >
        {labels.hint}
      </p>
      <audio
        controls
        preload="metadata"
        className="mt-5 h-10 w-full max-w-full"
        aria-label={labels.sectionTitle}
      >
        <source src={source} type="audio/mpeg" />
        {labels.unavailable}
      </audio>
    </section>
  );
}
