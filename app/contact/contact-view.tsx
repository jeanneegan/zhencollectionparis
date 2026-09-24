"use client";

import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import { ZcpContactDetails } from "@/app/components/zcp-contact-details";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Locale } from "@/app/artists/[slug]/data";
import { useLocale } from "@/app/lib/use-locale";


const pageLabels: Record<Locale, { kicker: string; kickerSub: string }> = {
  zh: { kicker: "CONTACT", kickerSub: "联系我们" },
  fr: { kicker: "CONTACT", kickerSub: "联系我们" },
  en: { kicker: "CONTACT", kickerSub: "" },
};

export function ContactView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const useSerif = locale === "zh";

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
            } mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {l.kicker}
            {locale !== "en" ? ` · ${l.kickerSub}` : ""}
          </h1>
        </header>

        <ZcpContactDetails
          locale={locale}
          className={`mt-12 ${useSerif ? serif.className : ""}`}
        />

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
