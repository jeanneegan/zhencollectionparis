import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { PublicMessageForm } from "@/app/components/public-message-form";
import { getArtistBySlug, t } from "@/app/artists/[slug]/data";
import {
  formatEpisodeMonth,
  getEpisodeBySlug,
  type DialogueAvatar,
  type DialogueExchange,
  type LocalizedText,
  type ObserverQuestion,
} from "../data";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

function SectionLabel({ zh, fr }: LocalizedText) {
  return (
    <div className="text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
        {fr}
      </p>
      <p className="mt-1 text-[11px] tracking-[0.15em] text-stone-400">{zh}</p>
    </div>
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
          className="object-cover object-center grayscale"
          sizes="56px"
        />
      </div>
      <p className="text-[10px] tracking-[0.12em] text-stone-400">
        {avatar.label ?? avatar.alt}
      </p>
    </div>
  );
}

function QuestionContent({ text }: { text: LocalizedText }) {
  return (
    <div className="space-y-4 text-sm leading-[1.9]">
      <p className={`${serif.className} text-stone-800`}>{text.zh}</p>
      <p className="text-stone-500">{text.fr}</p>
    </div>
  );
}

function ExchangeBlock({
  exchange,
  fromLabel,
}: {
  exchange: DialogueExchange;
  fromLabel?: string;
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
        <QuestionContent text={exchange.question} />
      </div>

      {exchange.answer ? (
        <div className="space-y-4 border-t border-stone-200 pt-6">
          {exchange.answerFrom ? (
            <DialogueIdentity avatar={exchange.answerFrom} />
          ) : null}
          <QuestionContent text={exchange.answer} />
        </div>
      ) : (
        <div className="border-t border-stone-200 pt-6">
          {exchange.answerFrom ? (
            <DialogueIdentity avatar={exchange.answerFrom} />
          ) : null}
          <p className="mt-4 text-xs tracking-wide text-stone-400">
            Réponse · 回答 · À venir
          </p>
        </div>
      )}
    </div>
  );
}

function ObserverBlock({ item }: { item: ObserverQuestion }) {
  return (
    <div className="border-l-2 border-stone-200 pl-6">
      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
        {item.author}
      </p>

      <div className="mt-4 space-y-4">
        {item.questionFrom ? <DialogueIdentity avatar={item.questionFrom} /> : null}
        <QuestionContent text={item.question} />
      </div>

      {item.answer ? (
        <div className="mt-6 space-y-4">
          {item.answerFrom ? <DialogueIdentity avatar={item.answerFrom} /> : null}
          <QuestionContent text={item.answer} />
        </div>
      ) : (
        <div className="mt-6">
          {item.answerFrom ? <DialogueIdentity avatar={item.answerFrom} /> : null}
          <p className="mt-4 text-xs tracking-wide text-stone-400">
            Réponse · 回答 · À venir
          </p>
        </div>
      )}
    </div>
  );
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DialoguePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    notFound();
  }

  const [willySlug, suHongSlug] = episode.artists;

  if (!getArtistBySlug(willySlug) || !getArtistBySlug(suHongSlug)) {
    notFound();
  }

  const featured = episode.featuredWorks
    .map(({ artistSlug, artworkId, displayAspect }) => {
      const artist = getArtistBySlug(artistSlug);
      const artwork = artist?.artworks.find((a) => a.id === artworkId);
      if (!artist || !artwork) return null;

      const aspectMatch = artwork.dimensions.match(
        /(\d+(?:\.\d+)?)\s*×\s*(\d+(?:\.\d+)?)/,
      );
      const aspect: [number, number] = displayAspect
        ? displayAspect
        : aspectMatch
          ? [Number(aspectMatch[1]), Number(aspectMatch[2])]
          : [4, 3];

      return { artist, artwork, aspect };
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
          Dialogue · Épisode {episode.episode}
        </p>
        <p className="mt-1 text-center text-[10px] tracking-[0.2em] text-stone-400">
          对话第{episode.episode}期 · {formatEpisodeMonth(episode.month, "zh")}{" "}
          · {formatEpisodeMonth(episode.month, "fr")}
        </p>

        <h1
          className={`${serif.className} mt-8 text-center text-3xl font-normal md:text-4xl`}
        >
          {episode.title.fr}{" "}
          <span className="text-stone-600">{episode.title.zh}</span>
        </h1>
        <div className="mx-auto mt-4 h-px w-12 bg-stone-300" />

        <section className="mt-16 space-y-8">
          <SectionLabel
            zh="巴黎臻藏共同问题"
            fr="Question commune · Zhen Collection Paris"
          />
          <ExchangeBlock exchange={episode.sharedQuestion} />
        </section>

        <section className="mt-16 space-y-8">
          <SectionLabel
            zh="Willy 向苏泓提问"
            fr="Willy Le Nalbaut → Su Hong"
          />
          <ExchangeBlock
            exchange={episode.willyToSuHong}
            fromLabel="Willy Le Nalbaut"
          />
        </section>

        <section className="mt-16 space-y-8">
          <SectionLabel
            zh="苏泓向 Willy 提问"
            fr="Su Hong → Willy Le Nalbaut"
          />
          <ExchangeBlock exchange={episode.suHongToWilly} fromLabel="苏泓 Su Hong" />
        </section>

        <section className="mt-16 space-y-8">
          <SectionLabel
            zh="观察者提问"
            fr="Questions des observateurs"
          />
          <div className="space-y-10">
            {episode.observerQuestions.map((item) => (
              <ObserverBlock key={item.author} item={item} />
            ))}
          </div>
        </section>

        <section className="mt-16 border border-dashed border-stone-300 bg-stone-50/30 px-6 py-8">
          <SectionLabel zh="公众留言" fr="Messages du public" />
          <p className="mt-6 text-center text-sm leading-[1.9] text-stone-600">
            {episode.publicParticipation.note.zh}
          </p>
          <p className="mt-3 text-center text-sm leading-[1.9] text-stone-400">
            {episode.publicParticipation.note.fr}
          </p>
          {episode.publicParticipation.open ? <PublicMessageForm /> : null}
        </section>

        <section className="mt-16">
          <h2 className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
            Œuvres · 作品
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-2">
            {featured.map((item) =>
              item ? (
                <figure
                  key={`${item.artist.slug}-${item.artwork.id}`}
                  className="mx-auto flex w-full max-w-md flex-col items-center"
                >
                  <Link
                    href={`/artists/${item.artist.slug}`}
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
                        alt={t(item.artwork.title, "fr")}
                        fill
                        className="object-contain object-center transition-transform group-hover:scale-[1.01]"
                        sizes="(max-width: 768px) 100vw, 448px"
                      />
                    </div>
                    <figcaption className="mt-4 text-center">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                        {item.artist.slug === willySlug
                          ? "Willy Le Nalbaut"
                          : "苏泓 Su Hong"}
                      </p>
                      <p className="mt-2 text-sm text-stone-800">
                        {t(item.artwork.title, "fr")}
                      </p>
                      <p className="mt-1 text-xs text-stone-400">
                        {item.artwork.year} · {t(item.artwork.medium, "fr")}
                      </p>
                    </figcaption>
                  </Link>
                </figure>
              ) : null,
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
