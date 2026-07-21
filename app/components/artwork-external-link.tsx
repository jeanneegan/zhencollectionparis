import type { CSSProperties } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

const labels: Record<Locale, string> = {
  zh: "在线观看作品",
  fr: "Voir l'œuvre en ligne",
  en: "View work online",
};

export function ArtworkExternalLink({
  href,
  title,
  locale,
  frameStyle,
}: {
  href: string;
  title: string;
  locale: Locale;
  frameStyle: CSSProperties;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link flex w-full flex-col items-center justify-center border border-stone-200 bg-stone-50 px-6 py-10 text-center transition-colors hover:border-stone-900 hover:bg-white"
      style={frameStyle}
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-stone-400">
        {labels[locale]}
      </p>
      <p className="mt-4 text-sm text-stone-700 transition-colors group-hover/link:text-stone-900">
        {title}
      </p>
      <span
        className="mt-5 text-[11px] tracking-[0.12em] text-stone-500 transition-colors group-hover/link:text-stone-900"
        aria-hidden
      >
        →
      </span>
    </a>
  );
}
