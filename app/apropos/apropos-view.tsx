"use client";

import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Locale } from "@/app/artists/[slug]/data";
import { aboutSections } from "@/app/apropos/about-content";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<Locale, { title: string; titleSub: string }> = {
  zh: {
    title: "ABOUT",
    titleSub: "关于",
  },
  fr: {
    title: "ABOUT",
    titleSub: "À propos",
  },
  en: {
    title: "About",
    titleSub: "",
  },
};

const proseClass = "text-sm leading-[2] text-stone-700 md:text-base";
const linkClass =
  "text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900";

function SectionHeading({
  locale,
  title,
  subtitle,
}: {
  locale: Locale;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h2 className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
        {title}
      </h2>
      <p
        className={`mt-2 text-sm text-stone-600 ${
          locale === "zh" ? serif.className : ""
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}

export function AproposView() {
  const [locale, setLocale] = useLocale();
  const l = pageLabels[locale];
  const useSerif = locale === "zh";

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:px-16 md:py-20">
        <header className="border-b border-stone-200 pb-10 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.title}
          </p>
          {l.titleSub ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {l.titleSub}
            </p>
          ) : null}
          <h1
            className={`${
              useSerif ? serif.className : ""
            } mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {l.title}
            {locale !== "en" ? ` · ${l.titleSub}` : ""}
          </h1>
        </header>

        <nav
          aria-label="About sections"
          className="mt-12 border border-stone-200 bg-stone-50/50"
        >
          <ul className="divide-y divide-stone-200">
            {aboutSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex flex-col gap-1 px-5 py-4 transition-colors hover:bg-white md:px-6 md:py-5"
                >
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
                    {section.title[locale]}
                  </span>
                  <span
                    className={`text-sm text-stone-800 ${
                      useSerif ? serif.className : ""
                    }`}
                  >
                    {section.subtitle[locale]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-14 space-y-16 md:space-y-20">
          {aboutSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-t border-stone-200 pt-10 md:pt-12"
            >
              <SectionHeading
                locale={locale}
                title={section.title[locale]}
                subtitle={section.subtitle[locale]}
              />

              {section.lead ? (
                <div
                  className={`mt-6 space-y-2 ${useSerif ? serif.className : ""}`}
                >
                  {section.lead[locale].map((line) => (
                    <p
                      key={line.slice(0, 48)}
                      className="text-sm font-medium leading-[1.85] text-stone-900 md:text-base"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}

              {section.paragraphs ? (
                <div
                  className={`mt-6 space-y-4 ${useSerif ? serif.className : ""}`}
                >
                  {section.paragraphs[locale].map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className={proseClass}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : null}

              {section.subsections?.map((subsection) => (
                <div key={subsection.heading.en} className="mt-10">
                  <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone-500">
                    {subsection.heading[locale]}
                  </h3>
                  {subsection.paragraphs?.[locale][0] ? (
                    <p
                      className={`mt-4 ${proseClass} ${
                        useSerif ? serif.className : ""
                      }`}
                    >
                      {subsection.paragraphs[locale][0]}
                    </p>
                  ) : null}
                  {subsection.bullets?.[locale]?.length ? (
                    <ul
                      className={`mt-4 list-disc space-y-2 pl-5 text-sm leading-[1.85] text-stone-700 md:text-base ${
                        useSerif ? serif.className : ""
                      }`}
                    >
                      {subsection.bullets[locale].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {subsection.paragraphs?.[locale].slice(1).map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className={`mt-4 ${proseClass} ${
                        useSerif ? serif.className : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}

              {section.closing ? (
                <p className="mt-10 text-sm font-medium tracking-[0.06em] text-stone-800">
                  <a href="#contact" className="underline-offset-4 hover:underline">
                    {section.closing[locale]}
                  </a>
                </p>
              ) : null}

              {section.links?.length ? (
                <ul className="mt-6 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {link.label[locale]} →
                        </a>
                      ) : (
                        <Link href={link.href} className={linkClass}>
                          {link.label[locale]} →
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.pageHref && section.pageLabel ? (
                <div className="mt-6">
                  <Link
                    href={section.pageHref}
                    className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-5 py-2 text-[11px] font-medium tracking-[0.08em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
                  >
                    {section.pageLabel[locale]}
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
