"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { DialogueEpisodeList } from "@/app/components/dialogue-episode-list";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  formatEpisodeMonth,
  getAllEpisodes,
  getCurrentDialoguePath,
  getCurrentEpisode,
  getUpcomingEpisodes,
  type DialogueEpisode,
} from "@/app/dialogue/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export function HomeView() {
  const [locale, setLocale] = useLocale();
  const episode = getCurrentEpisode();
  const dialoguePath = getCurrentDialoguePath();
  const totalEpisodes = getAllEpisodes().length;
  const upcomingPreview = getUpcomingEpisodes(2);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        showNav={false}
        sticky={false}
        trailing={
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        }
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        {locale === "en" ? (
          <HomeEnglish
            episode={episode}
            dialoguePath={dialoguePath}
            totalEpisodes={totalEpisodes}
            upcomingPreview={upcomingPreview}
          />
        ) : (
          <HomeBilingual
            episode={episode}
            dialoguePath={dialoguePath}
            totalEpisodes={totalEpisodes}
            upcomingPreview={upcomingPreview}
          />
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

function HomeBilingual({
  episode,
  dialoguePath,
  totalEpisodes,
  upcomingPreview,
}: {
  episode: DialogueEpisode;
  dialoguePath: string;
  totalEpisodes: number;
  upcomingPreview: DialogueEpisode[];
}) {
  return (
    <>
      <div className="text-center">
        <p className="mx-auto max-w-lg text-sm leading-[1.9] tracking-wide text-stone-500">
          Zhen 臻 est un mouvement constant vers ce qui est vrai, juste, et
          digne d&apos;être conservé.
        </p>
        <p
          className={`${serif.className} mt-4 text-xs leading-[1.9] tracking-wide text-stone-400`}
        >
          臻，是持续趋向真实、恰当，与那些值得珍藏之物的过程。
        </p>
      </div>

      <section className="mt-10 border border-stone-200 bg-stone-50/50 px-6 py-10 md:px-10 md:py-12">
        <header className="text-center">
          <h1 className="text-2xl font-normal tracking-wide text-stone-900 md:text-3xl">
            Conversations entre artistes
          </h1>
          <p
            className={`${serif.className} mt-3 text-base tracking-[0.08em] text-stone-400 md:text-lg`}
          >
            艺术家之间的对话
          </p>
        </header>

        <div className="mx-auto my-8 h-px w-12 bg-stone-300" />

        <p className="text-center text-[10px] tracking-[0.2em] text-stone-400">
          <span className="font-medium uppercase tracking-[0.25em]">
            Épisode {episode.episode}
          </span>
          {" · "}
          <span className={serif.className}>
            第{episode.episode}期 · {formatEpisodeMonth(episode.month, "zh")}
          </span>
        </p>

        <h2
          className={`${serif.className} mt-8 text-center text-2xl font-bold text-[#5a2323] md:text-3xl`}
        >
          {episode.title.fr}{" "}
          <span>{episode.title.zh}</span>
        </h2>
        <div className="mx-auto mt-4 h-px w-12 bg-stone-300" />

        <div className="mt-8 space-y-6 text-left text-sm leading-[1.9] text-stone-600">
          <p className={`${serif.className} text-stone-800`}>
            {episode.sharedQuestion.question.zh}
          </p>
          <p className="text-stone-500">{episode.sharedQuestion.question.fr}</p>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={dialoguePath}
            className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
          >
            Découvrir la conversation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {upcomingPreview.length > 0 ? (
        <section className="mt-10">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            Prochaines conversations
          </p>
          <p className="mt-1 text-center text-[10px] tracking-[0.2em] text-stone-400">
            即将发布
          </p>
          <div className="mt-8">
            <DialogueEpisodeList
              episodes={upcomingPreview}
              serifClassName={serif.className}
              highlightCurrent={false}
            />
          </div>
        </section>
      ) : null}

      <section
        className={`${upcomingPreview.length > 0 ? "mt-8" : "mt-10"} text-center`}
      >
        <Link
          href="/dialogues"
          className="inline-flex items-center gap-2 text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900"
        >
          Voir toutes les conversations ({totalEpisodes}) · 查看全部对话（
          {totalEpisodes}期）
          <span aria-hidden>→</span>
        </Link>
      </section>

      <ArtistsSection
        dialogueLabel="对话"
        artistFr="Artiste français"
        artistCn="Artiste chinoise"
      />

      <section className="mt-16 border border-stone-200 px-6 py-10 text-center md:px-10 md:py-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
          Participer à la conversation
        </p>
        <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
          报名对话
        </p>
        <p className="mx-auto mt-6 max-w-md text-sm leading-[1.9] text-stone-600">
          Artistes, observateurs ou public — postulez pour rejoindre une
          conversation future.
        </p>
        <p className="mx-auto mt-2 max-w-md text-sm leading-[1.9] text-stone-500">
          艺术家、观察者或公众 — 申请参与巴黎臻藏的对话项目。
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/participer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
          >
            Candidater · 前往报名
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function HomeEnglish({
  episode,
  dialoguePath,
  totalEpisodes,
  upcomingPreview,
}: {
  episode: DialogueEpisode;
  dialoguePath: string;
  totalEpisodes: number;
  upcomingPreview: DialogueEpisode[];
}) {
  return (
    <>
      <div className="text-center">
        <p className="mx-auto max-w-lg text-sm leading-[1.9] tracking-wide text-stone-500">
          Zhen 臻 is a constant movement toward what is true, just, and worthy
          of being preserved.
        </p>
      </div>

      <section className="mt-10 border border-stone-200 bg-stone-50/50 px-6 py-10 md:px-10 md:py-12">
        <header className="text-center">
          <h1 className="text-3xl font-normal tracking-wide text-stone-900 md:text-4xl">
            Conversations Between Artists
          </h1>
        </header>

        <div className="mx-auto my-8 h-px w-12 bg-stone-300" />

        <p className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
          Episode {episode.episode} · {formatEpisodeMonth(episode.month, "en")}
        </p>

        <h2 className="mt-8 text-center text-2xl font-normal text-[#5a2323] md:text-3xl">
          {episode.title.en}
        </h2>
        <div className="mx-auto mt-4 h-px w-12 bg-stone-300" />

        <p className="mt-8 text-left text-sm leading-[1.9] text-stone-600">
          {episode.sharedQuestion.question.en}
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href={dialoguePath}
            className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
          >
            Discover the conversation
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {upcomingPreview.length > 0 ? (
        <section className="mt-10">
          <p className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            Upcoming conversations
          </p>
          <div className="mt-8">
            <DialogueEpisodeList
              episodes={upcomingPreview}
              serifClassName={serif.className}
              highlightCurrent={false}
              locale="en"
            />
          </div>
        </section>
      ) : null}

      <section
        className={`${upcomingPreview.length > 0 ? "mt-8" : "mt-10"} text-center`}
      >
        <Link
          href="/dialogues"
          className="inline-flex items-center gap-2 text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900"
        >
          View all conversations ({totalEpisodes})
          <span aria-hidden>→</span>
        </Link>
      </section>

      <ArtistsSection
        dialogueLabel="Conversation"
        artistFr="French artist"
        artistCn="Chinese artist"
      />

      <section className="mt-16 border border-stone-200 px-6 py-10 text-center md:px-10 md:py-12">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
          Join a Conversation
        </p>
        <p className="mx-auto mt-6 max-w-md text-sm leading-[1.9] text-stone-600">
          Artists, observers, or members of the public may apply to join a
          future Zhen Collection Paris conversation.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/participer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
          >
            Apply
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function ArtistsSection({
  dialogueLabel,
  artistFr,
  artistCn,
}: {
  dialogueLabel: string;
  artistFr: string;
  artistCn: string;
}) {
  return (
    <section className="mt-16">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <Link
          href="/artists/willy-le-nalbaut"
          className="group flex flex-col items-center text-center transition-opacity hover:opacity-80"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
            {artistFr}
          </p>
          <div className="relative mt-5 aspect-square w-full max-w-[220px] overflow-hidden bg-stone-100">
            <Image
              src="/artists/willy-le-nalbaut/portrait.jpg"
              alt="Willy Le Nalbaut"
              fill
              className="object-cover object-center"
              sizes="220px"
              priority
            />
          </div>
          <p className="mt-5 text-base tracking-wide text-stone-900">
            Willy Le Nalbaut
          </p>
        </Link>

        <div className="hidden items-stretch justify-center md:flex">
          <div className="flex flex-col items-center py-8">
            <div className="h-full w-px flex-1 border-l border-dotted border-stone-300" />
            <div className="my-4 flex flex-col items-center gap-1">
              <span className="text-2xl font-light text-stone-300">×</span>
              <span className="text-[11px] tracking-[0.2em] text-stone-400">
                {dialogueLabel}
              </span>
            </div>
            <div className="h-full w-px flex-1 border-l border-dotted border-stone-300" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 md:hidden">
          <span className="text-2xl font-light text-stone-300">×</span>
          <span className="text-[11px] tracking-[0.2em] text-stone-400">
            {dialogueLabel}
          </span>
        </div>

        <Link
          href="/artists/su-hong"
          className="group flex flex-col items-center text-center transition-opacity hover:opacity-80"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
            {artistCn}
          </p>
          <div className="relative mt-5 aspect-square w-full max-w-[220px] overflow-hidden bg-stone-100">
            <Image
              src="/artists/su-hong/portrait.png"
              alt="苏泓 Su Hong"
              fill
              className="object-cover object-center grayscale transition-all group-hover:grayscale-0"
              sizes="220px"
              priority
            />
          </div>
          <p className="mt-5 text-base tracking-wide text-stone-900">
            苏泓 Su Hong
          </p>
        </Link>
      </div>
    </section>
  );
}
