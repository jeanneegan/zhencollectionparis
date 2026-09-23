import Image from "next/image";
import Link from "next/link";
import {
  getArtistBySlug,
  t,
  type ArtistProfile,
  type Locale,
} from "@/app/artists/[slug]/data";

const questionLabels: Record<
  Locale,
  {
    whyChina: string;
    whyFrance: string;
    hopeToLeave: string;
  }
> = {
  zh: {
    whyChina: "Pourquoi la Chine｜为什么中国",
    whyFrance: "Pourquoi la France｜为什么法国",
    hopeToLeave: "Ce que j'espère qu'on retienne｜我希望被记住的",
  },
  fr: {
    whyChina: "Pourquoi la Chine｜为什么中国",
    whyFrance: "Pourquoi la France｜为什么法国",
    hopeToLeave: "Ce que j'espère qu'on retienne｜我希望被记住的",
  },
  en: {
    whyChina: "Why China",
    whyFrance: "Why France",
    hopeToLeave: "What I hope to be remembered for",
  },
};

function ProseParagraphs({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <>
      {text
        .split(/\n\n+/)
        .filter(Boolean)
        .map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={className}>
            {paragraph}
          </p>
        ))}
    </>
  );
}

export function getArtistCollectionQuestionContent(
  artist: ArtistProfile,
  locale: Locale,
) {
  const isFrenchArtist = artist.nationality.en === "French";
  const isChineseArtist = artist.nationality.en === "Chinese";

  if (!isFrenchArtist && !isChineseArtist) {
    return null;
  }

  const labels = questionLabels[locale];
  const chinaText = t(artist.whyChinaFrance.china, locale);
  const franceText = t(artist.whyChinaFrance.france, locale);
  const hopeToLeaveText = t(artist.hopeToLeave, locale);
  const cultureQuestionLabel = isFrenchArtist ? labels.whyChina : labels.whyFrance;
  const cultureQuestionText = isFrenchArtist ? chinaText : franceText;

  if (!cultureQuestionText && !hopeToLeaveText) {
    return null;
  }

  return {
    cultureQuestionLabel,
    cultureQuestionText,
    hopeToLeaveText,
    hopeToLeaveLabel: labels.hopeToLeave,
  };
}

export function ArtistCollectionQuestionsBlock({
  artistSlug,
  locale,
  serifClassName = "",
}: {
  artistSlug: string;
  locale: Locale;
  serifClassName?: string;
}) {
  const artist = getArtistBySlug(artistSlug);
  if (!artist) {
    return null;
  }

  const content = getArtistCollectionQuestionContent(artist, locale);
  if (!content) {
    return null;
  }

  const bodyClass = `text-sm leading-[1.9] text-stone-800 ${serifClassName}`;
  const metaClass = "text-[10px] uppercase tracking-[0.12em] text-stone-500";
  const artistName = t(artist.name, locale);
  const portraitGrayscale =
    artist.slug !== "willy-le-nalbaut" && artist.slug !== "melanie-gerin";

  return (
    <div className="space-y-8 border border-stone-200 bg-stone-50/40 p-6 md:p-8">
      <div className="flex items-center gap-4">
        {artist.portrait ? (
          <Link
            href={`/artists/${artist.slug}`}
            className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-stone-100 transition-opacity hover:opacity-90"
          >
            <Image
              src={artist.portrait}
              alt={artistName}
              fill
              className={`object-cover object-center${
                portraitGrayscale ? " grayscale" : ""
              }`}
              sizes="56px"
            />
          </Link>
        ) : null}
        <Link
          href={`/artists/${artist.slug}`}
          className="text-[10px] font-medium uppercase tracking-[0.14em] text-stone-900 transition-colors hover:text-stone-600"
        >
          {artistName}
        </Link>
      </div>

      {content.cultureQuestionText ? (
        <div>
          <p className={metaClass}>{content.cultureQuestionLabel}</p>
          <div className={`mt-4 space-y-4 ${bodyClass}`}>
            <ProseParagraphs text={content.cultureQuestionText} className={bodyClass} />
          </div>
        </div>
      ) : null}

      {content.hopeToLeaveText ? (
        <div>
          <p className={metaClass}>{content.hopeToLeaveLabel}</p>
          <div className={`mt-4 space-y-4 ${bodyClass}`}>
            <ProseParagraphs text={content.hopeToLeaveText} className={bodyClass} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
