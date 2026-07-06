"use client";

import { Noto_Serif_SC } from "next/font/google";
import { DialogueEpisodeList } from "@/app/components/dialogue-episode-list";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Locale } from "@/app/artists/[slug]/data";
import type { DialogueEpisode } from "@/app/dialogue/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<
  Locale,
  {
    kicker: string;
    title: string;
    intro: string;
  }
> = {
  fr: {
    kicker: "Toutes les conversations",
    title: "Archives · {n} épisodes",
    intro: "Parcourez les épisodes par année.",
  },
  zh: {
    kicker: "全部对话",
    title: "对话归档 · 共 {n} 期",
    intro: "按年份浏览。",
  },
  en: {
    kicker: "All conversations",
    title: "Archives · {n} episodes",
    intro: "Browse episodes by year.",
  },
};

export function DialoguesView({
  total,
  byYear,
}: {
  total: number;
  byYear: { year: string; episodes: DialogueEpisode[] }[];
}) {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        }
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.kicker}
          </p>
          <h1
            className={`${locale === "zh" ? serif.className : ""} mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {l.title.replace("{n}", String(total))}
          </h1>
          <p className="mt-3 text-sm text-stone-500">{l.intro}</p>
        </header>

        <div className="mt-12 space-y-14">
          {byYear.map(({ year, episodes }) => (
            <section key={year}>
              <p className="text-center text-[11px] font-medium tracking-[0.2em] text-stone-400">
                {year}
              </p>
              <div className="mt-6">
                <DialogueEpisodeList
                  episodes={episodes}
                  serifClassName={serif.className}
                  locale={locale}
                />
              </div>
            </section>
          ))}
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter />
    </div>
  );
}
