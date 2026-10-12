"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";
import { archiveDisplay } from "@/app/artist-site/artist-site-fonts";
import { ArtistSiteFooter } from "@/app/artist-site/artist-site-footer";

const locales: { key: Locale; label: string }[] = [
  { key: "fr", label: "FR" },
  { key: "zh", label: "中文" },
  { key: "en", label: "EN" },
];

function normalizePath(pathname: string, linkPrefix: string): string {
  if (linkPrefix && pathname.startsWith(linkPrefix)) {
    const rest = pathname.slice(linkPrefix.length);
    return rest === "" ? "/" : rest;
  }
  return pathname || "/";
}

function isNavActive(routePath: string, current: string): boolean {
  if (routePath === "/") {
    return current === "/";
  }
  return current === routePath || current.startsWith(`${routePath}/`);
}

export function ArtistSiteShell({
  siteTitle,
  locale,
  onLocaleChange,
  menuLabel,
  closeLabel,
  navItems,
  linkPrefix,
  pathname,
  children,
}: {
  siteTitle: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  menuLabel: string;
  closeLabel: string;
  navItems: { href: string; label: string; external?: boolean }[];
  linkPrefix: string;
  pathname: string;
  children: ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = normalizePath(pathname, linkPrefix);
  const homeHref = linkPrefix || "/";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinkClass = (active: boolean) =>
    `block py-2 text-[13px] leading-snug transition-opacity hover:opacity-60 ${
      active ? "text-neutral-900" : "text-neutral-800"
    }`;

  return (
    <div className="min-h-screen bg-[#f6f4ef] text-neutral-900">
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between bg-[#ddd9d2] px-5 py-4 md:hidden">
        <Link
          href={homeHref}
          className={`${archiveDisplay.className} text-lg tracking-tight`}
          onClick={() => setMenuOpen(false)}
        >
          {siteTitle}
        </Link>
        <button
          type="button"
          className="text-[11px] uppercase tracking-[0.2em] text-neutral-700"
          onClick={() => setMenuOpen(true)}
        >
          {menuLabel}
        </button>
      </div>

      {menuOpen ? (
        <button
          type="button"
          aria-label={closeLabel}
          className="fixed inset-0 z-40 bg-neutral-900/25 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[min(100vw,17.5rem)] flex-col bg-[#ddd9d2] px-6 py-8 transition-transform duration-300 ease-out md:translate-x-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <Link
            href={homeHref}
            className={`${archiveDisplay.className} text-xl leading-tight tracking-tight text-neutral-900`}
            onClick={() => setMenuOpen(false)}
          >
            {siteTitle}
          </Link>
          <button
            type="button"
            className="text-[11px] uppercase tracking-[0.2em] text-neutral-600 md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            {closeLabel}
          </button>
        </div>

        <nav aria-label="Archive" className="mt-12 flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const href = item.external
                ? item.href
                : item.href === "/"
                  ? homeHref
                  : `${linkPrefix}${item.href}`;
              const active = !item.external && isNavActive(item.href, currentPath);
              const className = navLinkClass(active);

              return (
                <li key={item.external ? `external-${item.href}` : item.href}>
                  {item.external ? (
                    <a
                      href={href}
                      className={className}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className={className}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-8 text-[11px] tracking-wide text-neutral-600">
          {locales.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => onLocaleChange(key)}
              className={
                locale === key
                  ? "text-neutral-900 underline underline-offset-4"
                  : "hover:text-neutral-900"
              }
            >
              {label}
            </button>
          ))}
        </div>
      </aside>

      <div className="flex min-h-screen flex-col md:pl-[17.5rem]">
        <main className="flex-1 pt-[3.25rem] md:pt-0">{children}</main>
        <ArtistSiteFooter locale={locale} />
      </div>
    </div>
  );
}
