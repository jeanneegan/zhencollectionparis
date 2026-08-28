"use client";

import Link from "next/link";
import { t, type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getAllFestivalIds, getFestivalById } from "@/app/festival/data";
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
    title: "FESTIVAL · 艺术节",
    subtitle: "巴黎臻藏艺术节与公共项目。",
    route: "Paris ↔ Shenzhen",
    tagline: "在日常空间发生的国际艺术节。",
    status: "项目筹备中，欢迎持续关注。",
    view: "Voir le festival · 查看艺术节",
    empty: "艺术节项目筹备中，敬请期待。",
  },
  fr: {
    title: "FESTIVAL · 艺术节",
    subtitle: "Festivals et projets publics de Zhen Collection Paris.",
    route: "Paris ↔ Shenzhen",
    tagline:
      "Festival international d'art dans les espaces du quotidien.",
    status: "Projet en préparation — restez informés.",
    view: "Voir le festival · 查看艺术节",
    empty: "Les projets festival sont en préparation.",
  },
  en: {
    title: "FESTIVAL",
    subtitle: "Zhen Collection Paris festivals and public programmes.",
    route: "Paris ↔ Shenzhen",
    tagline: "Annual international art festival in everyday spaces.",
    status: "Project in preparation — follow for updates.",
    view: "View festival",
    empty: "Festival projects are in preparation.",
  },
};

export function FestivalIndexView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
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
          <ul className="mt-12 space-y-4">
            {festivalIds.map((id) => {
              const festival = getFestivalById(id);
              if (!festival) {
                return null;
              }

              return (
                <li
                  key={id}
                  className="border border-stone-200 bg-white p-5 transition-colors hover:border-stone-400"
                >
                  <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                    {festival.year}
                  </p>
                  <h2 className="mt-2 text-sm font-medium text-stone-900">
                    {t(festival.title, locale)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {t(festival.intro, locale)}
                  </p>
                  {festival.href ? (
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
