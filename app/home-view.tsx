"use client";

import Link from "next/link";
import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import type { Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { DialogueCurrentSpotlight } from "@/app/components/dialogue-current-spotlight";
import { FrenchArtistsChinaSpotlight } from "@/app/components/french-artists-china-spotlight";
import { useLocale } from "@/app/lib/use-locale";

const spotlightLabels: Record<
  Locale,
  {
    festivalKicker: string;
    festivalRoute: string;
    festivalTagline: string;
    festivalCta: string;
  }
> = {
  zh: {
    festivalKicker: "ZCP国际艺术展",
    festivalRoute: "巴黎 · 深圳 · 纽约 · 持续发展中",
    festivalTagline:
      "在巴黎、深圳、纽约等城市的咖啡馆、书店、旅店与日常空间发生的国际艺术展",
    festivalCta: "Découvrir le projet · 了解项目",
  },
  fr: {
    festivalKicker: "ZCP国际艺术展",
    festivalRoute: "Paris · Shenzhen · New York · en développement",
    festivalTagline:
      "Expositions internationales dans cafés, librairies, hôtels et espaces du quotidien à Paris, Shenzhen, New York et au-delà",
    festivalCta: "Découvrir le projet · 了解项目",
  },
  en: {
    festivalKicker: "ZCP INTERNATIONAL EXHIBITIONS",
    festivalRoute: "Paris · Shenzhen · New York · ongoing",
    festivalTagline:
      "International art in cafés, bookshops, hotels, and everyday spaces across Paris, Shenzhen, New York, and beyond",
    festivalCta: "Discover the project",
  },
};

const cardClass = "border border-stone-200 bg-white";
const kickerClass =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-stone-400";
const ctaSecondaryClass =
  "inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900";

export function HomeView() {
  const [locale, setLocale] = useLocale();
  const l = spotlightLabels[locale];
  const useSerif = locale === "zh";

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        wide
        sticky={false}
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-6xl space-y-8 px-3 py-10 md:space-y-12 md:px-8 md:py-16">
        <DialogueCurrentSpotlight locale={locale} />

        <FrenchArtistsChinaSpotlight locale={locale} />

        <section className={`${cardClass} px-4 py-8 text-center md:px-10 md:py-12`}>
          <p className={kickerClass}>{l.festivalKicker}</p>

          <p className="mt-8 text-sm font-medium tracking-[0.12em] text-stone-700">
            {l.festivalRoute}
          </p>
          <p
            className={`${
              useSerif ? serif.className : ""
            } mx-auto mt-4 max-w-md text-sm leading-[1.9] text-stone-600`}
          >
            {l.festivalTagline}
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/exposition" className={ctaSecondaryClass}>
              {l.festivalCta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter wide locale={locale} />
    </div>
  );
}
