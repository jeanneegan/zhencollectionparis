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
    title: "Connexion",
    titleSub: "登录",
    intro:
      "成员空间面向巴黎臻藏的合作艺术家、机构伙伴与团队成员。请使用受邀邮箱登录。",
    introSub:
      "Espace réservé aux artistes, partenaires et équipe de Zhen Collection Paris.",
    note: "公众浏览无需登录。",
  },
  fr: {
    title: "Connexion",
    titleSub: "登录",
    intro:
      "Espace réservé aux artistes, partenaires institutionnels et membres de l'équipe Zhen Collection Paris. Connectez-vous avec l'adresse qui vous a été confiée.",
    introSub:
      "成员空间面向巴黎臻藏的合作艺术家、机构伙伴与团队成员。请使用受邀邮箱登录。",
    note: "La consultation publique du site ne nécessite pas de connexion.",
  },
  en: {
    title: "Sign in",
    titleSub: "",
    intro:
      "This space is reserved for collaborating artists, institutional partners, and Zhen Collection Paris team members. Sign in with the email address provided to you.",
    introSub: "",
    note: "Public browsing of the site does not require sign-in.",
  },
};

export function ConnexionView() {
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

        <LoginForm locale={locale} />

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
