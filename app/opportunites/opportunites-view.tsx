"use client";

import { Noto_Serif_SC } from "next/font/google";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export function OpportunitesView() {
  const [locale, setLocale] = useLocale();

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center md:py-24">
        <p className="text-sm leading-[2] tracking-wide text-stone-700 md:text-base">
          De Paris et de Chine, vers d&apos;autres villes du monde.
        </p>
        <p
          className={`${serif.className} mt-6 text-sm leading-[2] tracking-wide text-stone-600 md:text-base`}
        >
          从巴黎与中国出发，连接世界各地的城市。
        </p>
        <p className="mt-6 text-sm leading-[2] tracking-wide text-stone-500 md:text-base">
          From Paris and China to cities around the world.
        </p>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
