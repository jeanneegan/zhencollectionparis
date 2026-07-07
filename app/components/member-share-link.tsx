"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/app/artists/[slug]/data";

const labels: Record<Locale, { share: string; copied: string }> = {
  zh: {
    share: "Partager · 分享",
    copied: "Copié · 已复制",
  },
  fr: {
    share: "Partager · 分享",
    copied: "Copié · 已复制",
  },
  en: {
    share: "Share",
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
    <button
      type="button"
      onClick={handleCopy}
      className="rounded-full border border-stone-300 px-4 py-2 text-[11px] font-medium tracking-[0.08em] text-stone-600 transition-colors hover:border-stone-900 hover:text-stone-900"
    >
      {copied ? l.copied : l.share}
    </button>
  );
}
