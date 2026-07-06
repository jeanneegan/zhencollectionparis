"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PublicMessageForm } from "@/app/components/public-message-form";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { useLocale } from "@/app/lib/use-locale";
import {
  type Locale,
  type LocalizedText,
  t,
} from "@/app/artists/[slug]/data";
import {
  formatEpisodeMonth,
  type DialogueAvatar,
  type DialogueEpisode,
  type DialogueExchange,
  type ObserverQuestion,
} from "../data";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const labels: Record<
  Locale,
  {
    episode: string;
    episodeNum: string;
    sharedQuestion: string;
    willyToSuHong: string;
    suHongToWilly: string;
    observerQuestions: string;
    publicMessages: string;
    publicMessagesScope: string;
    participate: string;
    participateNote: string;
    participateLink: string;
    works: string;
    answerPending: string;
  }
> = {
  zh: {
    episode: "Conversation · Épisode",
    episodeNum: "对话第{n}期",
    sharedQuestion:
      "Question commune · Zhen Collection Paris｜巴黎臻藏共同问题",
    willyToSuHong: "Willy Le Nalbaut → Su Hong｜Willy 向苏泓提问",
    suHongToWilly: "Su Hong → Willy Le Nalbaut｜苏泓向 Willy 提问",
    observerQuestions: "Questions des observateurs｜观察者提问",
    publicMessages: "Messages du public｜公众留言",
    publicMessagesScope:
      "Pour cette épisode uniquement · 针对本期内容的留言",
    participate: "Participer à la conversation｜报名对话",
    participateNote:
      "Artistes, observateurs ou public — postulez pour rejoindre une conversation future · 艺术家、观察者或公众 — 申请参与未来对话",
    participateLink: "Candidater · 前往报名",
    works: "Œuvres sélectionnées｜作品",
    answerPending: "Réponse · 回答 · À venir",
  },
  fr: {
    episode: "Conversation · Épisode",
    episodeNum: "对话第{n}期",
    sharedQuestion:
      "Question commune · Zhen Collection Paris｜巴黎臻藏共同问题",
    willyToSuHong: "Willy Le Nalbaut → Su Hong｜Willy 向苏泓提问",
    suHongToWilly: "Su Hong → Willy Le Nalbaut｜苏泓向 Willy 提问",
    observerQuestions: "Questions des observateurs｜观察者提问",
    publicMessages: "Messages du public｜公众留言",
    publicMessagesScope:
      "Pour cette épisode uniquement · 针对本期内容的留言",
    participate: "Participer à la conversation｜报名对话",
    participateNote:
      "Artistes, observateurs ou public — postulez pour rejoindre une conversation future · 艺术家、观察者或公众 — 申请参与未来对话",
    participateLink: "Candidater · 前往报名",
    works: "Œuvres sélectionnées｜作品",
    answerPending: "Réponse · 回答 · À venir",
  },
  en: {
    episode: "Conversation · Episode",
    episodeNum: "Episode {n}",
    sharedQuestion: "Shared Question · Zhen Collection Paris",
    willyToSuHong: "Willy Le Nalbaut → Su Hong",
    suHongToWilly: "Su Hong → Willy Le Nalbaut",
    observerQuestions: "Observer Questions",
    publicMessages: "Public Messages",
    publicMessagesScope: "For this episode only",
    participate: "Join a Conversation",
    participateNote:
      "Apply to participate in a future conversation as an artist, observer, or member of the public",
    participateLink: "Apply",
    works: "Selected Works",
    answerPending: "Answer · Coming soon",
  },
};

export type FeaturedWork = {
  artistSlug: string;
  artistName: string;
  artwork: {
    id: string;
    title: LocalizedText;
    medium: LocalizedText;
    year: number;
    image: string;
  };
  aspect: [number, number];
};

function SectionLabel({
  children,
  inverted = false,
}: {
  children: React.ReactNode;
  inverted?: boolean;
}) {
  const labelClass = inverted ? "text-red-100/80" : "text-stone-400";

  return (
    <p
      className={`text-center text-[11px] font-medium tracking-[0.15em] ${labelClass}`}
    >
      {children}
    </p>
  );
}

function DialogueIdentity({ avatar }: { avatar: DialogueAvatar }) {
  if (avatar.type === "brand") {
    return (
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border border-stone-300 bg-white">
          <span className="text-[8px] font-medium uppercase tracking-[0.08em] text-stone-500">
            ZCP
          </span>
          <span className={`${serif.className} mt-0.5 text-[9px] text-stone-600`}>
            臻
          </span>
        </div>
        <p className="text-[10px] leading-relaxed tracking-[0.1em] text-stone-400">
          {avatar.label ?? avatar.alt}
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-stone-100">
        <Image
          src={avatar.src!}
          alt={avatar.alt}
          fill
          className={`object-cover object-center${
            avatar.src?.includes("willy-le-nalbaut") ? "" : " grayscale"
          }`}
          sizes="56px"
        />
      </div>
      <p className="text-[10px] tracking-[0.12em] text-stone-400">
        {avatar.label ?? avatar.alt}
      </p>
    </div>
  );
}

function QuestionContent({
  text,
  locale,
}: {
  text: LocalizedText;
  locale: Locale;
}) {
  return (
    <p
      className={`${serif.className} text-sm leading-[1.9] text-stone-800`}
    >
      {t(text, locale)}
    </p>
  );
}

function ExchangeBlock({
  exchange,
  locale,
  fromLabel,
  answerPending,
}: {
  exchange: DialogueExchange;
  locale: Locale;
  fromLabel?: string;
  answerPending: string;
}) {
  return (
    <div className="space-y-6 border border-stone-200 bg-stone-50/40 p-6 md:p-8">
      {fromLabel ? (
        <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
          {fromLabel}
        </p>
      ) : null}

      <div className="space-y-4">
        {exchange.questionFrom ? (
          <DialogueIdentity avatar={exchange.questionFrom} />
        ) : null}
        <QuestionContent text={exchange.question} locale={locale} />
      </div>

      {exchange.answer ? (
        <div className="space-y-4 border-t border-stone-200 pt-6">
          {exchange.answerFrom ? (
            <DialogueIdentity avatar={exchange.answerFrom} />
          ) : null}
          <QuestionContent text={exchange.answer} locale={locale} />
        </div>
      ) : (
        <div className="border-t border-stone-200 pt-6">
          {exchange.answerFrom ? (
            <DialogueIdentity avatar={exchange.answerFrom} />
          ) : null}
          <p className="mt-4 text-xs tracking-wide text-stone-400">
            {answerPending}
          </p>
        </div>
      )}
    </div>
  );
}

function ObserverBlock({
  item,
  locale,
  answerPending,
}: {
  item: ObserverQuestion;
  locale: Locale;
  answerPending: string;
}) {
  return (
    <div className="border-l-2 border-stone-200 pl-6">
      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
        {item.author}
      </p>

      <div className="mt-4 space-y-4">
        {item.questionFrom ? (
          <DialogueIdentity avatar={item.questionFrom} />
        ) : null}
        <QuestionContent text={item.question} locale={locale} />
      </div>

      {item.answer ? (
        <div className="mt-6 space-y-4">
          {item.answerFrom ? (
            <DialogueIdentity avatar={item.answerFrom} />
          ) : null}
          <QuestionContent text={item.answer} locale={locale} />
        </div>
      ) : (
        <div className="mt-6">
          {item.answerFrom ? (
            <DialogueIdentity avatar={item.answerFrom} />
          ) : null}
          <p className="mt-4 text-xs tracking-wide text-stone-400">
            {answerPending}
          </p>
        </div>
      )}
    </div>
  );
}

export function DialogueView({
  episode,
  featured,
}: {
  episode: DialogueEpisode;
  featured: FeaturedWork[];
}) {
  const [locale, setLocale] = useLocale();
  const l = labels[locale];
  const episodeNum = l.episodeNum.replace("{n}", String(episode.episode));

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        }
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
          {l.episode} {episode.episode}
        </p>
        <p className="mt-1 text-center text-[10px] tracking-[0.2em] text-stone-400">
          {episodeNum} · {formatEpisodeMonth(episode.month, locale)}
        </p>

        <h1
          className={`${serif.className} mt-8 text-center text-3xl font-normal text-[#5a2323] md:text-4xl`}
        >
          {locale === "zh" ? (
            <>
              {episode.title.fr}{" "}
              <span>{episode.title.zh}</span>
            </>
          ) : (
            t(episode.title, locale)
          )}
        </h1>
        <div className="mx-auto mt-4 h-px w-12 bg-stone-300" />

        <section className="mt-16 space-y-8">
          <SectionLabel>{l.sharedQuestion}</SectionLabel>
          <ExchangeBlock
            exchange={episode.sharedQuestion}
            locale={locale}
            answerPending={l.answerPending}
          />
        </section>

        <section className="mt-16 space-y-8">
          <SectionLabel>{l.willyToSuHong}</SectionLabel>
          <ExchangeBlock
            exchange={episode.willyToSuHong}
            locale={locale}
            fromLabel="Willy Le Nalbaut"
            answerPending={l.answerPending}
          />
        </section>

        <section className="mt-16 space-y-8">
          <SectionLabel>{l.suHongToWilly}</SectionLabel>
          <ExchangeBlock
            exchange={episode.suHongToWilly}
            locale={locale}
            fromLabel="苏泓 Su Hong"
            answerPending={l.answerPending}
          />
        </section>

        <section className="mt-16 space-y-8">
          <SectionLabel>{l.observerQuestions}</SectionLabel>
          <div className="space-y-10">
            {episode.observerQuestions.map((item) => (
              <ObserverBlock
                key={item.author}
                item={item}
                locale={locale}
                answerPending={l.answerPending}
              />
            ))}
          </div>
        </section>

        <section className="mt-10 border border-dashed border-stone-300 bg-stone-50/30 px-6 py-8">
          <SectionLabel>{l.publicMessages}</SectionLabel>
          <p className="mt-4 text-center text-xs tracking-wide text-stone-400">
            {l.publicMessagesScope}
          </p>
          <p className="mt-4 text-center text-sm leading-[1.9] text-stone-600">
            {t(episode.publicParticipation.note, locale)}
          </p>
          {episode.publicParticipation.open ? (
            <PublicMessageForm locale={locale} />
          ) : null}
        </section>

        <section className="mt-16">
          <SectionLabel>{l.works}</SectionLabel>
          <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-2">
            {featured.map((item) => (
              <figure
                key={`${item.artistSlug}-${item.artwork.id}`}
                className="mx-auto flex w-full max-w-md flex-col items-center"
              >
                <Link
                  href={`/artists/${item.artistSlug}`}
                  className="group block w-full"
                >
                  <div
                    className="relative mx-auto w-full overflow-hidden bg-stone-100"
                    style={{
                      aspectRatio: `${item.aspect[0]} / ${item.aspect[1]}`,
                    }}
                  >
                    <Image
                      src={item.artwork.image}
                      alt={t(item.artwork.title, locale)}
                      fill
                      className="object-contain object-center transition-transform group-hover:scale-[1.01]"
                      sizes="(max-width: 768px) 100vw, 448px"
                    />
                  </div>
                  <figcaption className="mt-4 text-center">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                      {item.artistName}
                    </p>
                    <p className="mt-2 text-sm text-stone-800">
                      {t(item.artwork.title, locale)}
                    </p>
                    <p className="mt-1 text-xs text-stone-400">
                      {item.artwork.year} · {t(item.artwork.medium, locale)}
                    </p>
                  </figcaption>
                </Link>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-16 border border-stone-200 bg-white px-6 py-8">
          <SectionLabel>{l.participate}</SectionLabel>
          <p className="mt-6 text-center text-sm leading-[1.9] text-stone-600">
            {l.participateNote}
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/participer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              {l.participateLink}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter />
    </div>
  );
}
