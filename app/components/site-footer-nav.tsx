import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";

const linkClass =
  "text-[11px] tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900";

const footerNavItems: Record<
  Locale,
  { href: string; label: string; external?: boolean }[]
> = {
  zh: [
    { href: "/editions", label: "ÉDITIONS · 限量作品" },
    { href: "/apropos", label: "ABOUT · 关于" },
    { href: "/apropos#contact", label: "CONTACT · 联系我们" },
  ],
  fr: [
    { href: "/editions", label: "ÉDITIONS · 限量作品" },
    { href: "/apropos", label: "ABOUT · 关于" },
    { href: "/apropos#contact", label: "CONTACT · 联系我们" },
  ],
  en: [
    { href: "/editions", label: "EDITIONS · Limited editions" },
    { href: "/apropos", label: "ABOUT · About" },
    { href: "/apropos#contact", label: "CONTACT · Contact us" },
  ],
};

export function SiteFooterNav({ locale = "fr" }: { locale?: Locale }) {
  const items = footerNavItems[locale];

  return (
    <nav aria-label="Footer navigation" className="flex flex-col items-center gap-2">
      {items.map(({ href, label, external }) =>
        external ? (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            {label}
          </a>
        ) : (
          <Link key={href} href={href} className={linkClass}>
            {label}
          </Link>
        ),
      )}
    </nav>
  );
}
