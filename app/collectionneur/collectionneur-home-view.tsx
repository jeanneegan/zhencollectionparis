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
    welcomeBody: "请从左侧导航访问您的线上藏品档案、持续评价与转售申请。",
  },
  fr: {
    welcome: "Bienvenue",
    welcomeBody:
      "Accédez à votre archive de collection en ligne, aux évaluations continues et aux demandes de revente via la navigation à gauche.",
  },
  en: {
    welcome: "Welcome back",
    welcomeBody:
      "Access your online collection archive, ongoing evaluations, and resale requests from the navigation on the left.",
  },
};

export function CollectionneurHomeView({ member }: { member: MockMember }) {
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
