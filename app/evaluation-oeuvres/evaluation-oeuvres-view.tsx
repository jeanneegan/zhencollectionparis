"use client";

import { Noto_Serif_SC } from "next/font/google";
import { ArtworkEvaluationForm } from "@/app/components/artwork-evaluation-form";
import type { EvaluationWork } from "@/app/components/artwork-evaluation-form";
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
    title: "Évaluation des œuvres en ligne",
    titleSub: "在线作品评估",
    intro:
      "本页供艺术专业人士使用。欢迎画廊、策展人、研究者、收藏家、评论者等，就平台上的作品留下专业观点与判断。",
    introSub:
      "Cette page s'adresse aux professionnels de l'art — galeristes, commissaires, chercheurs, collectionneurs, critiques — pour partager leur lecture professionnelle des œuvres.",
    note: "专业观点将纳入档案记录，经审阅后可能公开展示。",
  },
  fr: {
    title: "Évaluation des œuvres en ligne",
    titleSub: "在线作品评估",
    intro:
      "Cette page s'adresse aux professionnels de l'art — galeristes, commissaires, chercheurs, collectionneurs, critiques — pour partager leur lecture professionnelle des œuvres.",
    introSub:
      "本页供艺术专业人士使用。欢迎画廊、策展人、研究者、收藏家、评论者等，就平台上的作品留下专业观点与判断。",
    note:
      "Les regards professionnels peuvent être intégrés à l'archive, après relecture.",
  },
  en: {
    title: "Online Artwork Evaluation",
    titleSub: "",
    intro:
      "This page is for art professionals — gallerists, curators, researchers, collectors, and critics — to share their professional reading and assessment of works on the platform.",
    introSub: "",
    note:
      "Professional views may be included in the archive after review.",
  },
};

export function EvaluationOeuvresView({
  works,
  member,
}: {
  works: EvaluationWork[];
  member: MockMember;
}) {
  const [locale] = useLocale();
  const l = pageLabels[locale];

  return (
    <MemberWorkspaceLayout member={member} contentClassName="max-w-6xl">
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

      <ArtworkEvaluationForm locale={locale} works={works} />
    </MemberWorkspaceLayout>
  );
}
