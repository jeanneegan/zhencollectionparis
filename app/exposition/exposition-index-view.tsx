"use client";

import Link from "next/link";
import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import { t, type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getAllExpositionIds, getExpositionById } from "@/app/exposition/data";
import { useLocale } from "@/app/lib/use-locale";


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
    title: "EXPOSITIONS · 艺术展",
    subtitle: "巴黎臻藏艺术展与公共项目。",
    route: "Paris ↔ Shenzhen",
    tagline: "在日常空间发生的国际艺术展。",
    status: "项目筹备中，欢迎持续关注。",
    view: "Voir l'exposition · 查看展览",
    empty: "展览项目筹备中，敬请期待。",
  },
  fr: {
    title: "EXPOSITIONS · 艺术展",
    subtitle: "Expositions et projets publics de Zhen Collection Paris.",
    route: "Paris ↔ Shenzhen",
    tagline:
      "Exposition internationale d'art dans les espaces du quotidien.",
    status: "Projet en préparation — restez informés.",
    view: "Voir l'exposition · 查看展览",
    empty: "Les projets d'exposition sont en préparation.",
  },
  en: {
    title: "EXPOSITIONS",
    subtitle: "Zhen Collection Paris exhibitions and public programmes.",
    route: "Paris ↔ Shenzhen",
    tagline: "International art exhibitions in everyday spaces.",
    status: "Project in preparation — follow for updates.",
    view: "View exhibition",
    empty: "Exhibition projects are in preparation.",
  },
};

export function ExpositionIndexView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const useSerif = locale === "zh" || locale === "fr";
  const expositionIds = getAllExpositionIds();

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

        {expositionIds.length === 0 ? (
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
            {expositionIds.map((id) => {
              const exposition = getExpositionById(id);
              if (!exposition) {
                return null;
              }

              return (
                <li
                  key={id}
                  className="border border-stone-200 bg-stone-50/40 px-6 py-8 md:px-10 md:py-10"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                    {exposition.eyebrow
                      ? t(exposition.eyebrow, locale)
                      : exposition.year}
                  </p>
                  <h2
                    className={`${
                      useSerif ? serif.className : ""
                    } mt-3 text-lg font-normal text-[#5a2323] md:text-xl`}
                  >
                    {t(exposition.title, locale)}
                  </h2>
                  <p
                    className={`${
                      useSerif ? serif.className : ""
                    } mt-4 text-sm leading-[1.9] text-stone-700`}
                  >
                    {t(exposition.intro, locale)}
                  </p>
                  {exposition.detail ? (
                    <p
                      className={`${
                        useSerif ? serif.className : ""
                      } mt-4 text-sm leading-[1.9] text-stone-700`}
                    >
                      {t(exposition.detail, locale)}
                    </p>
                  ) : null}
                  {exposition.detailExtra ? (
                    <p
                      className={`${
                        useSerif ? serif.className : ""
                      } mt-4 text-sm leading-[1.9] text-stone-700`}
                    >
                      {t(exposition.detailExtra, locale)}
                    </p>
                  ) : null}
                  {exposition.meta ? (
                    <p className="mt-5 whitespace-pre-line text-xs font-medium tracking-[0.08em] text-stone-500">
                      {t(exposition.meta, locale)}
                    </p>
                  ) : null}
                  {exposition.scheduleNote ? (
                    <p className="mt-3 text-xs leading-relaxed text-stone-500">
                      {t(exposition.scheduleNote, locale)}
                    </p>
                  ) : null}
                  {exposition.cta ? (
                    <div className="mt-8 flex justify-center">
                      <Link
                        href={exposition.cta.href}
                        className="inline-flex items-center gap-2 rounded-full border border-[#5a2323] px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-[#5a2323] transition-colors hover:bg-[#5a2323] hover:text-white"
                      >
                        {t(exposition.cta.label, locale)}
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  ) : exposition.href ? (
                    <Link
                      href={exposition.href}
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
