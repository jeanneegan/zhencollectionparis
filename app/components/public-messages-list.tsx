"use client";

import { Noto_Serif_SC } from "next/font/google";
import type { Locale } from "@/app/artists/[slug]/data";
import type { DialoguePublicMessage } from "@/app/lib/dialogue-messages-store";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const labels: Record<
  Locale,
  {
    heading: string;
    anonymous: string;
  }
> = {
  zh: {
    heading: "Messages du public · 公众留言",
    anonymous: "匿名",
  },
  fr: {
    heading: "Messages du public · 公众留言",
    anonymous: "Anonyme · 匿名",
  },
  en: {
    heading: "Public messages",
    anonymous: "Anonymous",
  },
};

function formatMessageDate(isoDate: string, locale: Locale): string {
  const date = new Date(isoDate);

  if (locale === "zh") {
    return date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  if (locale === "en") {
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PublicMessagesList({
  messages,
  locale,
}: {
  messages: DialoguePublicMessage[];
  locale: Locale;
}) {
  const l = labels[locale];

  if (messages.length === 0) {
    return null;
  }

  return (
    <div className="mx-auto mt-10 max-w-lg space-y-6">
      <p className="text-center text-[10px] uppercase tracking-[0.15em] text-stone-400">
        {l.heading}
      </p>
      <ul className="space-y-4">
        {messages.map((message) => (
          <li
            key={message.id}
            className="border border-stone-200 bg-white px-5 py-4"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[10px] uppercase tracking-[0.12em] text-stone-400">
                {message.name?.trim() || l.anonymous}
              </p>
              <p className="text-[10px] tracking-wide text-stone-400">
                {formatMessageDate(message.createdAt, locale)}
              </p>
            </div>
            <p
              className={`${serif.className} mt-3 text-sm leading-[1.85] text-stone-700`}
            >
              {message.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
