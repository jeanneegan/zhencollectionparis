"use client";

import Link from "next/link";
import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import type { Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  projectSections,
  projectsPageIntro,
  projectsPageTitle,
  tProjects,
} from "@/app/projets/data";
import { useLocale } from "@/app/lib/use-locale";

const linkLabels: Record<Locale, string> = {
  zh: "Voir le programme · 查看详情",
  fr: "Voir le programme · 查看详情",
  en: "View programme",
};

export function ProjetsView() {
  const [locale, setLocale] = useLocale();
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
            {tProjects(projectsPageTitle, locale)}
          </h1>
          <p
            className={`${
              useSerif ? serif.className : ""
            } mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-stone-600 md:text-base`}
          >
            {tProjects(projectsPageIntro, locale)}
          </p>
        </header>

        <div className="mt-12 space-y-10">
          {projectSections.map((section) => (
            <section
              key={section.id}
              className="border border-stone-200 bg-stone-50/40 px-6 py-8 md:px-10 md:py-10"
            >
              <h2 className="text-sm font-medium tracking-[0.14em] text-stone-900">
                {tProjects(section.title, locale)}
              </h2>
              <p
                className={`${
                  useSerif ? serif.className : ""
                } mt-4 text-sm leading-[1.9] text-stone-600 md:text-base`}
              >
                {tProjects(section.lead, locale)}
              </p>
              <Link
                href={section.href}
                className="mt-6 inline-block text-xs tracking-[0.12em] text-stone-800 underline-offset-4 hover:underline"
              >
                {linkLabels[locale]}
              </Link>
            </section>
          ))}
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
