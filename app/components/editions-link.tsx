import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";

const labels: Record<Locale, string> = {
  fr: "Éditions · 出版",
  zh: "Éditions · 出版",
  en: "Editions",
};

export function EditionsLink({
  locale = "fr",
  variant = "footer",
}: {
  locale?: Locale;
  variant?: "footer" | "page-bottom";
}) {
  return (
    <Link
      href="/editions"
      className={`tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900 ${
        variant === "page-bottom" ? "text-xs" : "text-[11px]"
      }`}
    >
      {labels[locale]}
    </Link>
  );
}
