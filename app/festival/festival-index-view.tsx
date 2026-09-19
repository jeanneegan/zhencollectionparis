"use client";

import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { t, type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getAllFestivalIds, getFestivalById } from "@/app/festival/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<
  Locale,
  {
    title: string;
    subtitle: string;
    route: string;
    tagline: string;
    status: string;
    view: string;
    empty: string;
  }
> = {
  zh: {
    title: "EXHIBITIONS · 艺术展",
    subtitle: "巴黎臻藏艺术展与公共项目。",
    route: "Paris ↔ Shenzhen",
    tagline: "在日常空间发生的国际艺术展。",
    status: "项目筹备中，欢迎持续关注。",
    view: "Voir l'exposition · 查看艺术展",
    empty: "艺术展项目筹备中，敬请期待。",
  },
  fr: {
    title: "EXHIBITIONS · 艺术展",
    subtitle: "Expositions et projets publics de Zhen Collection Paris.",
    route: "Paris ↔ Shenzhen",
    tagline:
      "Exposition internationale d'art dans les espaces du quotidien.",
    status: "Projet en préparation — restez informés.",
    view: "Voir l'exposition · 查看艺术展",
    empty: "Les projets d'exposition sont en préparation.",
  },
  en: {
    title: "EXHIBITIONS",
    subtitle: "Zhen Collection Paris art exhibitions and public programmes.",
    route: "Paris ↔ Shenzhen",
    tagline: "International art exhibitions in everyday spaces.",
    status: "Project in preparation — follow for updates.",
    view: "View exhibition",
    empty: "Exhibition projects are in preparation.",
  },
};

export function FestivalIndexView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const useSerif = locale === "zh" || locale === "fr";
  const festivalIds = getAllFestivalIds();

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
          <p className="mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-stone-600">
            {l.subtitle}
          </p>
        </header>

        {festivalIds.length === 0 ? (
          <section className="mt-12 border border-stone-200 bg-stone-50/50 px-6 py-10 text-center md:px-10">
            <p className="text-sm font-medium tracking-[0.12em] text-stone-700">
              {l.route}
            </p>
            <p className="mx-auto mt-4 max-w-md text-sm leading-[1.9] text-stone-600">
              {l.tagline}
            </p>
            <p className="mt-6 text-sm leading-[1.9] text-stone-500">
              {l.status}
            </p>
          </section>
        ) : (
          <ul className="mt-12 space-y-6">
            {festivalIds.map((id) => {
              const festival = getFestivalById(id);
              if (!festival) {
                return null;
              }

              return (
                <li
                  key={id}
                  className="border border-stone-200 bg-stone-50/40 px-6 py-8 md:px-10 md:py-10"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                    {festival.eyebrow
                      ? t(festival.eyebrow, locale)
                      : festival.year}
                  </p>
                  <h2
                    className={`${
                      useSerif ? serif.className : ""
                    } mt-3 text-lg font-normal text-[#5a2323] md:text-xl`}
                  >
                    {t(festival.title, locale)}
                  </h2>
                  <p
                    className={`${
                      useSerif ? serif.className : ""
                    } mt-4 text-sm leading-[1.9] text-stone-700`}
                  >
                    {t(festival.intro, locale)}
                  </p>
                  {festival.detail ? (
                    <p
                      className={`${
                        useSerif ? serif.className : ""
                      } mt-4 text-sm leading-[1.9] text-stone-700`}
                    >
                      {t(festival.detail, locale)}
                    </p>
                  ) : null}
                  {festival.detailExtra ? (
                    <p
                      className={`${
                        useSerif ? serif.className : ""
                      } mt-4 text-sm leading-[1.9] text-stone-700`}
                    >
                      {t(festival.detailExtra, locale)}
                    </p>
                  ) : null}
                  {festival.meta ? (
                    <p className="mt-5 text-xs font-medium tracking-[0.08em] text-stone-500">
                      {t(festival.meta, locale)}
                    </p>
                  ) : null}
                  {festival.scheduleNote ? (
                    <p className="mt-3 text-xs leading-relaxed text-stone-500">
                      {t(festival.scheduleNote, locale)}
                    </p>
                  ) : null}
                  {festival.cta ? (
                    <div className="mt-8 flex justify-center">
                      <Link
                        href={festival.cta.href}
                        className="inline-flex items-center gap-2 rounded-full border border-[#5a2323] px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-[#5a2323] transition-colors hover:bg-[#5a2323] hover:text-white"
                      >
                        {t(festival.cta.label, locale)}
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  ) : festival.href ? (
                    <Link
                      href={festival.href}
                      className="mt-4 inline-block text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                    >
                      {l.view}
                    </Link>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
