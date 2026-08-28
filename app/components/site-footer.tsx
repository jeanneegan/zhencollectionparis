import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";
import { ContactLink } from "@/app/components/contact-link";
import { EditionsLink } from "@/app/components/editions-link";
import { SiteSocialLinks } from "@/app/components/site-social-links";

export function SiteFooter({
  wide = false,
  locale = "fr",
}: {
  wide?: boolean;
  locale?: Locale;
}) {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div
        className={`mx-auto flex flex-col items-center gap-3 px-6 py-10 text-center ${
          wide ? "max-w-7xl md:px-10" : "max-w-3xl"
        }`}
      >
        <Link
          href="/"
          className="text-[11px] uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-stone-900"
        >
          Zhen Collection Paris 巴黎臻藏
        </Link>
        <ContactLink locale={locale} />
        <EditionsLink locale={locale} />
        <SiteSocialLinks />
        <p className="text-[11px] text-stone-400">
          Paris × Chine · 巴黎 × 中国 · Conversations · Rencontres · Une autre voix
        </p>
      </div>
    </footer>
  );
}
