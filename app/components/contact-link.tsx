import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";

const labels: Record<Locale, string> = {
  fr: "Contact · 联系我们",
  zh: "Contact · 联系我们",
  en: "Contact",
};

export function ContactLink({
  locale = "fr",
  variant = "footer",
}: {
  locale?: Locale;
  variant?: "footer" | "page-bottom";
}) {
  return (
    <Link
      href="/apropos#contact"
      className={`tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900 ${
        variant === "page-bottom" ? "text-xs" : "text-[11px]"
      }`}
    >
      {labels[locale]}
    </Link>
  );
}
