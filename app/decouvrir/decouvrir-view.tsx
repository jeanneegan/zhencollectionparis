"use client";

import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import type { Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { useLocale } from "@/app/lib/use-locale";

const copy: Record<
  Locale,
  { title: string; subtitle: string; paragraphs: string[] }
> = {
  fr: {
    title: "NETWORK",
    subtitle: "Relier l'art, les cultures et les personnes",
    paragraphs: [
      "ZHEN COLLECTION PARIS développe un réseau de coopération artistique entre la France et la Chine, réunissant artistes, commissaires d'exposition, galeries, musées, centres d'art et institutions culturelles.",
      "À travers des expositions, des rencontres, des échanges interculturels et des projets communs, nous souhaitons créer de nouvelles opportunités de dialogue et de collaboration.",
      "Nous accueillons les partenaires issus des milieux artistiques, culturels, éducatifs et économiques pour imaginer et construire ensemble de nouvelles initiatives.",
    ],
  },
  zh: {
    title: "艺术网络",
    subtitle: "连接艺术、文化与人",
    paragraphs: [
      "巴黎臻藏在法国与中国之间发展艺术合作网络，汇聚艺术家、策展人、画廊、博物馆、艺术中心与文化机构。",
      "通过展览、相遇、跨文化交流与共同项目，我们希望创造新的对话与合作机会。",
      "我们欢迎来自艺术、文化、教育与经济领域的伙伴，一起构想并共建新的计划。",
    ],
  },
  en: {
    title: "NETWORK",
    subtitle: "Connecting art, cultures and people",
    paragraphs: [
      "ZHEN COLLECTION PARIS develops a network of artistic cooperation between France and China, bringing together artists, curators, galleries, museums, art centres and cultural institutions.",
      "Through exhibitions, encounters, intercultural exchanges and shared projects, we hope to create new opportunities for dialogue and collaboration.",
      "We welcome partners from the artistic, cultural, educational and economic fields to imagine and build new initiatives together.",
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
          <h1 className="text-2xl font-light tracking-[0.18em] text-stone-900 md:text-3xl">
            {l.title}
          </h1>
          <p
            className={`${
              useSerif ? serif.className : ""
            } mx-auto mt-6 max-w-xl text-base leading-relaxed text-stone-800 md:text-lg`}
          >
            {l.subtitle}
          </p>
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
