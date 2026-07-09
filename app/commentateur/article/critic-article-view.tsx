"use client";

import { Noto_Serif_SC } from "next/font/google";
import { CriticArticleForm } from "@/app/components/critic-article-form";
import { MemberWorkspaceLayout } from "@/app/components/member-workspace-layout";
import type { Locale } from "@/app/artists/[slug]/data";
import type { MockMember } from "@/app/lib/auth";
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
    title: "Article indépendant",
    titleSub: "评论家独立文章",
    intro:
      "本页面向受邀评论者开放。您可以撰写不绑定具体作品的独立评论文章，讨论艺术家、展览、趋势或任何批评议题。",
    introSub:
      "Cette page permet aux commentateurs invités de publier un article indépendant, sans œuvre associée.",
    note: "文章经审阅后可能公开展示。",
  },
  fr: {
    title: "Article indépendant",
    titleSub: "评论家独立文章",
    intro:
      "Cette page permet aux commentateurs invités de publier un article indépendant — sur un artiste, une exposition, une tendance ou tout sujet critique, sans œuvre associée.",
    introSub:
      "本页面向受邀评论者开放。您可以撰写不绑定具体作品的独立评论文章，讨论艺术家、展览、趋势或任何批评议题。",
    note:
      "Les articles peuvent être intégrés à l'archive publique, après relecture.",
  },
  en: {
    title: "Independent Article",
    titleSub: "",
    intro:
      "This page allows invited critics to publish a standalone article—on an artist, an exhibition, a trend, or any critical subject, without linking to a specific artwork.",
    introSub: "",
    note: "Articles may be included in the public archive after editorial review.",
  },
};

export function CriticArticleView({ member }: { member: MockMember }) {
  const [locale] = useLocale();
  const l = pageLabels[locale];

  return (
    <MemberWorkspaceLayout member={member} contentClassName="max-w-3xl">
      <header className="text-center md:text-left">
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

      <div className="mt-10 space-y-4 text-sm leading-[1.9] text-stone-600 md:text-left">
        <p>{l.intro}</p>
        {l.introSub ? <p className="text-stone-500">{l.introSub}</p> : null}
        <p className="text-xs text-stone-400">{l.note}</p>
      </div>

      <CriticArticleForm locale={locale} />
    </MemberWorkspaceLayout>
  );
}
