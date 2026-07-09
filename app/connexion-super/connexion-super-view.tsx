"use client";

import { Noto_Serif_SC } from "next/font/google";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { LoginForm } from "@/app/components/login-form";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Locale } from "@/app/artists/[slug]/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<
  Locale,
  {
    title: string;
    titleSub: string;
    intro: string;
    introSub: string;
    note: string;
  }
> = {
  zh: {
    title: "Accès super utilisateur",
    titleSub: "超级用户登录",
    intro:
      "此入口面向平台超级用户，登录后可同时使用画廊与艺术家的全部成员功能。",
    introSub:
      "Accès réservé au super utilisateur de Zhen Collection Paris.",
    note: "请使用授权的超级用户邮箱登录。",
  },
  fr: {
    title: "Accès super utilisateur",
    titleSub: "超级用户登录",
    intro:
      "Accès réservé au super utilisateur de la plateforme, avec l'ensemble des fonctions galerie et artiste.",
    introSub:
      "此入口面向平台超级用户，登录后可同时使用画廊与艺术家的全部成员功能。",
    note: "Connectez-vous avec l'adresse super utilisateur autorisée.",
  },
  en: {
    title: "Super User Access",
    titleSub: "",
    intro:
      "Reserved for the platform super user, with full access to both gallery and artist member features.",
    introSub: "",
    note: "Sign in with the authorized super user email address.",
  },
};

export function ConnexionSuperView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.title}
          </p>
          {locale !== "en" ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {l.titleSub}
            </p>
          ) : null}
          <h1
            className={`${serif.className} mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {locale === "en" ? l.title : `${l.title} · ${l.titleSub}`}
          </h1>
        </header>

        <div className="mt-10 space-y-4 text-center text-sm leading-[1.9] text-stone-600">
          <p>{l.intro}</p>
          {l.introSub ? <p className="text-stone-500">{l.introSub}</p> : null}
          <p className="text-xs text-stone-400">{l.note}</p>
        </div>

        <LoginForm locale={locale} next="/espace" />

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
