"use client";

import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import type { Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { useLocale } from "@/app/lib/use-locale";

const copy: Record<Locale, { title: string; paragraphs: string[] }> = {
  fr: {
    title: "COLLECTION — Découvrir les œuvres",
    paragraphs: [
      "Découvrez les œuvres des artistes présentés par ZHEN COLLECTION PARIS et les lieux où elles sont proposées : auprès des artistes, des galeries, des éditeurs et de nos partenaires.",
      "ZHEN COLLECTION PARIS Association facilite la découverte des œuvres. Les ventes éventuelles sont réalisées directement par les professionnels ou les artistes concernés.",
    ],
  },
  zh: {
    title: "COLLECTION — 发现作品",
    paragraphs: [
      "了解 ZHEN COLLECTION PARIS 所介绍的艺术家作品，以及这些作品的提供之处：艺术家本人、画廊、出版方与我们的合作伙伴。",
      "ZHEN COLLECTION PARIS 协会协助人们发现这些作品。如有销售，由相关专业人士或艺术家直接完成。",
    ],
  },
  en: {
    title: "COLLECTION — Discover the works",
    paragraphs: [
      "Discover works by the artists presented by ZHEN COLLECTION PARIS, and the places where they are offered: with the artists, galleries, publishers, and our partners.",
      "ZHEN COLLECTION PARIS Association helps people discover the works. Any sales are made directly by the professionals or artists concerned.",
    ],
  },
};

export function DecouvrirView() {
  const [locale, setLocale] = useLocale();
  const l = copy[locale];
  const useSerif = locale === "zh" || locale === "fr";

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        wide
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="text-2xl font-light tracking-wide text-stone-900 md:text-3xl">
            {l.title}
          </h1>
        </header>

        <div
          className={`${
            useSerif ? serif.className : ""
          } mx-auto mt-10 max-w-xl space-y-6 text-sm leading-[1.9] text-stone-600 md:text-base`}
        >
          {l.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
