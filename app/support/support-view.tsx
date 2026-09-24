"use client";

import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Locale } from "@/app/artists/[slug]/data";
import { useLocale } from "@/app/lib/use-locale";
import Link from "next/link";
import { supportContent } from "@/app/support/support-content";


const pageLabels: Record<Locale, { kicker: string; kickerSub: string }> = {
  zh: { kicker: "SUPPORT", kickerSub: "赞助" },
  fr: { kicker: "SUPPORT", kickerSub: "赞助" },
  en: { kicker: "SUPPORT", kickerSub: "" },
};

const proseClass = "text-sm leading-[2] text-stone-700 md:text-base";
const supportHeadingColor = "text-[#5a2323]";

export function SupportView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const useSerif = locale === "zh";
  const content = supportContent;

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:px-16 md:py-20">
        <header className="border-b border-stone-200 pb-10 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.kicker}
          </p>
          {l.kickerSub ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {l.kickerSub}
            </p>
          ) : null}
          <h1
            className={`${
              useSerif ? serif.className : ""
            } mt-8 text-2xl font-normal tracking-wide ${supportHeadingColor} md:text-3xl`}
          >
            {l.kicker}
            {locale !== "en" ? ` · ${l.kickerSub}` : ""}
          </h1>
        </header>

        <div className={`mt-12 ${useSerif ? serif.className : ""}`}>
          <div className="space-y-2">
            {content.lead[locale].map((line) => (
              <p
                key={line.slice(0, 48)}
                className="text-sm font-medium leading-[1.85] text-stone-900 md:text-base"
              >
                {line}
              </p>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            {content.paragraphs[locale].map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className={proseClass}>
                {paragraph}
              </p>
            ))}
          </div>

          {content.subsections.map((subsection) => (
            <div key={subsection.heading.en} className="mt-10">
              <h2
                className={`text-[10px] font-medium uppercase tracking-[0.2em] ${supportHeadingColor}`}
              >
                {subsection.heading[locale]}
              </h2>
              {subsection.paragraphs?.[locale][0] ? (
                <p className={`mt-4 ${proseClass}`}>
                  {subsection.paragraphs[locale][0]}
                </p>
              ) : null}
              {subsection.bullets?.[locale]?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-[1.85] text-stone-700 md:text-base">
                  {subsection.bullets[locale].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {subsection.paragraphs?.[locale].slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className={`mt-4 ${proseClass}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <p className="mt-10 text-sm font-medium tracking-[0.06em] text-stone-800">
            <Link href="/contact" className="underline-offset-4 hover:underline">
              {content.closing[locale]}
            </Link>
          </p>
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
