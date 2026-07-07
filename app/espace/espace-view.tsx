"use client";

import { useRouter } from "next/navigation";
import { Noto_Serif_SC } from "next/font/google";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Locale } from "@/app/artists/[slug]/data";
import { MOCK_USER } from "@/app/lib/auth";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<
  Locale,
  {
    kicker: string;
    kickerSub: string;
    title: string;
    titleSub: string;
    intro: string;
    introSub: string;
    signedInAs: string;
    memberTypeLabel: string;
    logout: string;
    modules: { title: string; body: string }[];
  }
> = {
  zh: {
    kicker: "Espace membre",
    kickerSub: "成员空间",
    title: "设计工作台",
    titleSub: "Atelier de conception",
    intro: "欢迎进入巴黎臻藏画廊成员设计空间。此处将用于编辑画廊资料、关系网络与对外展示内容。",
    introSub:
      "Bienvenue dans l'espace de conception réservé aux membres de Zhen Collection Paris.",
    signedInAs: "当前登录",
    memberTypeLabel: "Type de membre · 成员类型",
    logout: "Se déconnecter · 退出登录",
    modules: [
      {
        title: "Profil de la galerie · 画廊档案",
        body: "编辑画廊简介、联系方式、代理关系与对外可见信息。",
      },
      {
        title: "Relations · 关系网络",
        body: "记录与艺术家、展览、收藏与评论之间的连接。",
      },
      {
        title: "Présentation · 展示设计",
        body: "调整公开页面中的版式、文字与作品呈现方式。",
      },
    ],
  },
  fr: {
    kicker: "Espace membre",
    kickerSub: "成员空间",
    title: "Atelier de conception",
    titleSub: "设计工作台",
    intro:
      "Bienvenue dans l'espace de conception réservé aux galeries membres de Zhen Collection Paris. Ici, vous pourrez éditer le profil de la galerie, le réseau de relations et la présentation publique.",
    introSub:
      "欢迎进入巴黎臻藏画廊成员设计空间。此处将用于编辑画廊资料、关系网络与对外展示内容。",
    signedInAs: "Connecté en tant que",
    memberTypeLabel: "Type de membre · 成员类型",
    logout: "Se déconnecter · 退出登录",
    modules: [
      {
        title: "Profil de la galerie · 画廊档案",
        body: "Modifier la présentation de la galerie, les contacts, les représentations et les informations visibles.",
      },
      {
        title: "Relations · 关系网络",
        body: "Documenter les liens avec artistes, expositions, collections et critiques.",
      },
      {
        title: "Présentation · 展示设计",
        body: "Ajuster la mise en page, les textes et la présentation des œuvres sur l'espace public.",
      },
    ],
  },
  en: {
    kicker: "Member space",
    kickerSub: "",
    title: "Design workspace",
    titleSub: "",
    intro:
      "Welcome to the Zhen Collection Paris gallery member design workspace. Here you will edit gallery profiles, relationship networks, and public presentation.",
    introSub: "",
    signedInAs: "Signed in as",
    memberTypeLabel: "Member type",
    logout: "Sign out",
    modules: [
      {
        title: "Gallery profile",
        body: "Edit gallery presentation, contacts, representation, and visible information.",
      },
      {
        title: "Relationships",
        body: "Record connections with artists, exhibitions, collections, and criticism.",
      },
      {
        title: "Public presentation",
        body: "Adjust layout, copy, and artwork presentation on the public site.",
      },
    ],
  },
};

export function EspaceView({ userEmail }: { userEmail: string }) {
  const router = useRouter();
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/connexion");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.kicker}
          </p>
          {locale !== "en" ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {l.kickerSub}
            </p>
          ) : null}
          <h1
            className={`${serif.className} mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {locale === "en" ? l.title : `${l.title} · ${l.titleSub}`}
          </h1>
        </header>

        <div className="mt-8 rounded-sm border border-stone-200 bg-stone-50/60 px-5 py-4 text-center text-sm text-stone-600">
          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.signedInAs}
          </p>
          <p className="mt-2 font-medium text-stone-800">{userEmail}</p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.memberTypeLabel}
          </p>
          <p className="mt-1 text-xs text-stone-500">
            {MOCK_USER.memberType[locale]}
          </p>
        </div>

        <div className="mt-10 space-y-4 text-center text-sm leading-[1.9] text-stone-600">
          <p>{l.intro}</p>
          {l.introSub ? <p className="text-stone-500">{l.introSub}</p> : null}
        </div>

        <section className="mt-10 space-y-4">
          {l.modules.map((module) => (
            <article
              key={module.title}
              className="rounded-sm border border-stone-200 px-5 py-5 transition-colors hover:border-stone-400"
            >
              <h2 className="text-sm font-medium tracking-[0.06em] text-stone-900">
                {module.title}
              </h2>
              <p className="mt-3 text-sm leading-[1.8] text-stone-600">
                {module.body}
              </p>
              <p className="mt-4 text-[11px] tracking-[0.08em] text-stone-400">
                {locale === "en"
                  ? "Coming soon"
                  : "Bientôt disponible · 即将开放"}
              </p>
            </article>
          ))}
        </section>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleLogout}
            className="text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900"
          >
            {l.logout}
          </button>
        </div>
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
