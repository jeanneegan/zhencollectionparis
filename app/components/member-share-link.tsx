"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

const labels: Record<
  Locale,
  {
    shareLink: string;
    shareNote: string;
    copyLink: string;
    copied: string;
  }
> = {
  zh: {
    shareLink: "Lien de partage · 分享链接",
    shareNote: "Partagez ce lien — toute personne peut consulter l'exposition. · 分享此链接，任何人都可以查看展览内容。",
    copyLink: "Copier le lien · 复制链接",
    copied: "Copié · 已复制",
  },
  fr: {
    shareLink: "Lien de partage · 分享链接",
    shareNote: "Partagez ce lien — toute personne peut consulter l'exposition. · 分享此链接，任何人都可以查看展览内容。",
    copyLink: "Copier le lien · 复制链接",
    copied: "Copié · 已复制",
  },
  en: {
    shareLink: "Share link",
    shareNote: "Share this link — anyone can view the exhibition.",
    copyLink: "Copy link",
    copied: "Copied",
  },
};

export function MemberShareLink({
  path,
  locale,
}: {
  path: string;
  locale: Locale;
}) {
  const [shareUrl, setShareUrl] = useState(path);
  const [copied, setCopied] = useState(false);
  const l = labels[locale];

  useEffect(() => {
    setShareUrl(`${window.location.origin}${path}`);
  }, [path]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard errors.
    }
  }

  return (
    <div className="mt-5 rounded-sm border border-stone-200 bg-stone-50/50 p-4">
      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
        {l.shareLink}
      </p>
      <p className="mt-2 text-[11px] leading-relaxed text-stone-500">{l.shareNote}</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center">
        <input
          type="text"
          readOnly
          value={shareUrl}
          aria-label={l.shareLink}
          className="w-full rounded-sm border border-stone-300 bg-white px-3 py-2 text-xs text-stone-700"
        />
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 rounded-full border border-stone-900 px-4 py-2 text-[11px] font-medium tracking-[0.08em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
        >
          {copied ? l.copied : l.copyLink}
        </button>
      </div>
    </div>
  );
}
