"use client";

import Link from "next/link";
import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import type { Locale } from "@/app/artists/[slug]/data";

const PROGRAMME_HREF = "/projets/artistes-francais-en-chine";

const labels: Record<
  Locale,
  {
    kicker: string;
    titleFr: string;
    titleZh: string;
    lead: string;
    cta: string;
  }
> = {
  zh: {
    kicker: "PROJET ZCP · 项目",
    titleFr: "Artistes français en Chine",
    titleZh: "法国艺术家走进中国",
    lead: "中文资料整理、跨文化对话与本地合作支持，帮助在法国创作的艺术家进入华语语境。",
    cta: "Découvrir le programme · 了解项目 →",
  },
  fr: {
    kicker: "PROJET ZCP · 项目",
    titleFr: "Artistes français en Chine",
    titleZh: "法国艺术家走进中国",
    lead: "Documentation en chinois, dialogues interculturels et accompagnement local pour les artistes basés en France.",
    cta: "Découvrir le programme · 了解项目 →",
  },
  en: {
    kicker: "ZCP PROJECT",
    titleFr: "Artistes français en Chine",
    titleZh: "法国艺术家走进中国",
    lead: "Chinese materials, cross-cultural dialogue, and local partnership support for artists based in France.",
    cta: "Discover the programme →",
  },
};

const cardClass = "border border-stone-200 bg-white";
const kickerClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400";
const ctaClass =
  "inline-flex w-full items-center justify-center gap-2 border border-[#5a2323] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#5a2323] transition-colors hover:bg-[#5a2323] hover:text-white md:w-auto md:py-2.5";

export function FrenchArtistsChinaSpotlight({ locale }: { locale: Locale }) {
  const l = labels[locale];
  const useSerif = locale === "zh" || locale === "fr";

  return (
    <section className={`${cardClass} px-4 py-8 text-center md:px-10 md:py-12`}>
      <p className={kickerClass}>{l.kicker}</p>

      <p className="mt-8 text-sm font-medium tracking-[0.1em] text-stone-800">
        {l.titleFr}
      </p>
      <p
        className={`${
          useSerif ? serif.className : ""
        } mt-2 text-xl font-normal tracking-wide text-[#5a2323] md:text-2xl`}
      >
        {l.titleZh}
      </p>

      <p
        className={`${
          useSerif ? serif.className : ""
        } mx-auto mt-6 max-w-lg text-sm leading-[1.9] text-stone-600`}
      >
        {l.lead}
      </p>

      <div className="mt-10 flex justify-center">
        <Link href={PROGRAMME_HREF} className={ctaClass}>
          {l.cta}
        </Link>
      </div>
    </section>
  );
}
