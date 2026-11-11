"use client";

import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { DialogueCurrentSpotlight } from "@/app/components/dialogue-current-spotlight";
import { FrenchArtistsChinaSpotlight } from "@/app/components/french-artists-china-spotlight";
import { useLocale } from "@/app/lib/use-locale";

export function HomeView() {
  const [locale, setLocale] = useLocale();

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
      </main>

      <SiteFooter wide locale={locale} />
    </div>
  );
}
