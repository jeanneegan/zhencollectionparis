"use client";

import { Noto_Serif_SC } from "next/font/google";
import { DialogueParticipationForm } from "@/app/components/dialogue-participation-form";
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
    title: "Participer à la conversation",
    titleSub: "报名对话",
    intro:
      "艺术家、观察者或公众 — 申请参与巴黎臻藏的对话项目。我们会根据主题与排期与您联系。",
    introSub:
      "Artistes, observateurs ou public — postulez pour rejoindre une conversation future de Zhen Collection Paris.",
    note: "此申请面向未来对话，与当期公众留言不同。",
  },
  fr: {
    title: "Participer à la conversation",
    titleSub: "报名对话",
    intro:
      "Artistes, observateurs ou public — postulez pour rejoindre une conversation future de Zhen Collection Paris.",
    introSub:
      "艺术家、观察者或公众 — 申请参与巴黎臻藏的对话项目。我们会根据主题与排期与您联系。",
    note:
      "Cette candidature concerne une conversation future, distincte des messages du public sur l'épisode en cours.",
  },
  en: {
    title: "Join a Conversation",
    titleSub: "Apply to participate",
    intro:
      "Artists, observers, or members of the public may apply to join a future Zhen Collection Paris conversation. We will be in touch according to theme and scheduling.",
    introSub: "",
    note:
      "This application is for future conversations, separate from public messages on the current episode.",
  },
};

export function ParticiperView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        }
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

        <DialogueParticipationForm locale={locale} />

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter />
    </div>
  );
}
