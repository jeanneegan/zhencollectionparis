"use client";

import { MemberWorkspaceLayout } from "@/app/components/member-workspace-layout";
import type { Locale } from "@/app/artists/[slug]/data";
import type { MockMember } from "@/app/lib/auth";
import { useLocale } from "@/app/lib/use-locale";

const pageLabels: Record<
  Locale,
  {
    welcome: string;
    welcomeBody: string;
  }
> = {
  zh: {
    welcome: "Bienvenue · 欢迎回来",
    welcomeBody: "请从左侧导航发布作品在线评论或撰写独立文章。",
  },
  fr: {
    welcome: "Bienvenue",
    welcomeBody:
      "Accédez au commentaire en ligne sur les œuvres et à la publication d'articles indépendants via la navigation à gauche.",
  },
  en: {
    welcome: "Welcome back",
    welcomeBody:
      "Publish online artwork reviews and independent articles from the navigation on the left.",
  },
};

export function CommentateurHomeView({ member }: { member: MockMember }) {
  const [locale] = useLocale();
  const l = pageLabels[locale];

  return (
    <MemberWorkspaceLayout member={member}>
      <section>
        <h1 className="text-sm font-medium text-stone-900">{l.welcome}</h1>
        <p className="mt-3 text-sm leading-[1.8] text-stone-600">{l.welcomeBody}</p>
      </section>
    </MemberWorkspaceLayout>
  );
}
