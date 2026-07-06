import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";

const labels: Record<Locale, string> = {
  fr: "Pourquoi « Zhen » ? · 为什么「臻」？",
  zh: "Pourquoi « Zhen » ? · 为什么「臻」？",
  en: "Why « Zhen »?",
};

export function AproposLink({
  locale = "fr",
  showArrow = false,
  variant = "footer",
}: {
  locale?: Locale;
  showArrow?: boolean;
  variant?: "footer" | "page-bottom";
}) {
  return (
    <Link
      href="/apropos"
      className={`tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900 ${
        variant === "page-bottom"
          ? "text-xs"
          : showArrow
            ? "inline-flex items-center gap-2 text-xs"
            : "text-[11px]"
      }`}
    >
      {labels[locale]}
      {showArrow ? <span aria-hidden>→</span> : null}
    </Link>
  );
}
