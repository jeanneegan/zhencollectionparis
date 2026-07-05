import Link from "next/link";
import {
  type DialogueEpisode,
  formatEpisodeMonth,
} from "@/app/dialogue/data";

function episodeStatusLabel(episode: DialogueEpisode): string {
  if (episode.isCurrent) return "En cours · 当期";
  if (episode.status === "upcoming") return "À venir · 即将发布";
  return "Archives · 往期";
}

export function DialogueEpisodeList({
  episodes,
  serifClassName = "",
  highlightCurrent = true,
}: {
  episodes: DialogueEpisode[];
  serifClassName?: string;
  highlightCurrent?: boolean;
}) {
  return (
    <ul className="divide-y divide-stone-200 border-y border-stone-200">
      {episodes.map((item) => {
        const isCurrent = highlightCurrent && item.isCurrent;

        return (
          <li key={item.slug}>
            <Link
              href={`/dialogue/${item.slug}`}
              className={`flex items-center justify-between gap-4 py-5 transition-colors hover:bg-stone-50/80 ${
                isCurrent ? "bg-stone-50/50 px-4 -mx-4" : "px-1"
              }`}
            >
              <div className="min-w-0 text-left">
                <p className="text-[10px] tracking-[0.15em] text-stone-400">
                  Épisode {item.episode} · 第{item.episode}期 ·{" "}
                  {formatEpisodeMonth(item.month, "zh")}
                </p>
                <p
                  className={`${serifClassName} mt-1 text-base text-stone-900`}
                >
                  {item.title.fr}{" "}
                  <span className="text-stone-600">{item.title.zh}</span>
                </p>
              </div>
              <span
                className={`shrink-0 text-[10px] uppercase tracking-[0.12em] ${
                  isCurrent
                    ? "text-stone-900"
                    : item.status === "upcoming"
                      ? "text-stone-400"
                      : "text-stone-500"
                }`}
              >
                {episodeStatusLabel(item)}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
