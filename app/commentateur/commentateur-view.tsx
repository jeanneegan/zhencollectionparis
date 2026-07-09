"use client";

import { Noto_Serif_SC } from "next/font/google";
import {
  ArtworkEvaluationForm,
  type EvaluationWork,
} from "@/app/components/artwork-evaluation-form";
import { LanguageSwitcher } from "@/app/components/language-switcher";
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
    title: "Commentaire en ligne",
    titleSub: "评论家在线评论",
    intro:
      "本页面向受邀评论者开放。欢迎就平台上的作品撰写专业评论，纳入艺术批评与公共阅读的档案记录。",
    introSub:
      "Cette page est réservée aux commentateurs invités — publiez vos commentaires professionnels sur les œuvres de la plateforme.",
    note: "评论经审阅后可能公开展示。",
  },
  fr: {
    title: "Commentaire en ligne",
    titleSub: "评论家在线评论",
    intro:
      "Cette page est réservée aux commentateurs invités. Publiez vos commentaires professionnels sur les œuvres présentées sur la plateforme.",
    introSub:
      "本页面向受邀评论者开放。欢迎就平台上的作品撰写专业评论，纳入艺术批评与公共阅读的档案记录。",
    note:
      "Les commentaires peuvent être intégrés à l'archive publique, après relecture.",
  },
  en: {
    title: "Online Review",
    titleSub: "",
    intro:
      "This page is reserved for invited critics. Publish professional reviews of works presented on the platform.",
    introSub: "",
    note: "Reviews may be included in the public archive after editorial review.",
  },
};

export function CommentateurView({ works }: { works: EvaluationWork[] }) {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
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

        <ArtworkEvaluationForm locale={locale} works={works} variant="critic" />

        <PageBottomNav locale={locale} backHref="/espace" />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
