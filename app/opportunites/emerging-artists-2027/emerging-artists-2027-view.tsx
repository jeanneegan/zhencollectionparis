"use client";

import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { useLocale } from "@/app/lib/use-locale";
import {
  getProgrammePdfHref,
  programmeSections,
  programmeStats,
  programmeSubtitle,
  programmeTimeline,
  programmeTitle,
  residencySlots,
  tProgramme,
} from "./data";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const labels: Record<
  Locale,
  {
    back: string;
    downloadPdf: string;
    applyCta: string;
    applyNote: string;
  }
> = {
  zh: {
    back: "← RÉSIDENCES · 驻地",
    downloadPdf: "下载完整 PDF 说明",
    applyCta: "报名即将开放",
    applyNote: "线上申请表链接确认后将在此更新。",
  },
  fr: {
    back: "← RÉSIDENCES · 驻地",
    downloadPdf: "Télécharger le PDF complet",
    applyCta: "Candidatures · bientôt en ligne",
    applyNote: "Le lien vers le formulaire sera publié ici dès confirmation.",
  },
  en: {
    back: "← Residencies",
    downloadPdf: "Download full programme PDF",
    applyCta: "Applications opening soon",
    applyNote: "The online application link will be posted here once confirmed.",
  },
};

function SectionBody({
  locale,
  paragraphs,
  bullets,
  note,
}: {
  locale: Locale;
  paragraphs?: { zh: string; fr: string; en: string }[];
  bullets?: { zh: string; fr: string; en: string }[];
  note?: { zh: string; fr: string; en: string };
}) {
  const useSerif = locale === "zh" || locale === "fr";

  return (
    <div className="mt-4 space-y-4">
      {bullets && bullets.length > 0 ? (
        <ul className="list-disc space-y-2 pl-5 text-sm leading-[1.85] text-stone-700">
          {bullets.map((item) => (
            <li key={item.zh.slice(0, 40)} className={useSerif ? serif.className : ""}>
              {tProgramme(item, locale)}
            </li>
          ))}
        </ul>
      ) : null}
      {paragraphs?.map((paragraph) => (
        <p
          key={paragraph.zh.slice(0, 40)}
          className={`${
            useSerif ? serif.className : ""
          } text-sm leading-[1.9] text-stone-700`}
        >
          {tProgramme(paragraph, locale)}
        </p>
      ))}
      {note ? (
        <p className="border-l-2 border-stone-200 pl-4 text-xs leading-[1.85] text-stone-500">
          {tProgramme(note, locale)}
        </p>
      ) : null}
    </div>
  );
}

export function EmergingArtists2027View() {
  const [locale, setLocale] = useLocale();
  const l = labels[locale];
  const useSerif = locale === "zh" || locale === "fr";

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/opportunites"
          className="text-[10px] uppercase tracking-[0.15em] text-stone-400 transition-colors hover:text-stone-800"
        >
          {l.back}
        </Link>

        <header className="mt-8 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {tProgramme(programmeSubtitle, locale)}
          </p>
          <h1
            className={`${serif.className} mt-6 text-2xl font-normal tracking-wide text-[#5a2323] md:text-3xl`}
          >
            {tProgramme(programmeTitle, locale)}
          </h1>
          <div className="mx-auto mt-4 h-px w-12 bg-stone-300" />
        </header>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {programmeStats.map((stat) => (
            <div
              key={stat.value + stat.label.zh}
              className="border border-stone-200 bg-stone-50/50 px-3 py-4 text-center"
            >
              <p className="text-2xl font-medium text-stone-900">{stat.value}</p>
              <p className="mt-2 text-[10px] leading-relaxed tracking-[0.08em] text-stone-500">
                {tProgramme(stat.label, locale)}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-10 border border-stone-200 bg-white px-5 py-6 md:px-8">
          <dl className="space-y-4">
            {programmeTimeline.map((row) => (
              <div
                key={row.label.zh}
                className="flex flex-col gap-1 border-b border-stone-100 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:justify-between sm:gap-6"
              >
                <dt className="text-[10px] uppercase tracking-[0.12em] text-stone-400">
                  {tProgramme(row.label, locale)}
                </dt>
                <dd
                  className={`${
                    useSerif ? serif.className : ""
                  } text-sm text-stone-800 sm:text-right`}
                >
                  {tProgramme(row.value, locale)}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-12 space-y-10">
          {programmeSections.map((section) => (
            <section key={section.id}>
              <h2 className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400">
                {tProgramme(section.title, locale)}
              </h2>
              <SectionBody
                locale={locale}
                paragraphs={section.paragraphs}
                bullets={section.bullets}
                note={
                  section.subsections?.length || section.id === "residency"
                    ? undefined
                    : section.note
                }
              />
              {section.subsections?.map((subsection) => (
                <div key={subsection.title.zh} className="mt-6">
                  <h3
                    className={`${
                      useSerif ? serif.className : ""
                    } text-sm font-medium text-stone-900`}
                  >
                    {tProgramme(subsection.title, locale)}
                  </h3>
                  <SectionBody
                    locale={locale}
                    paragraphs={subsection.paragraphs}
                    bullets={subsection.bullets}
                  />
                </div>
              ))}
              {section.id === "residency" ? (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {residencySlots.map((slot) => (
                    <div
                      key={slot.city.zh}
                      className="border border-stone-200 bg-stone-50/40 px-4 py-5"
                    >
                      <p className="text-[10px] uppercase tracking-[0.12em] text-stone-400">
                        {tProgramme(slot.city, locale)}
                      </p>
                      <p
                        className={`${
                          useSerif ? serif.className : ""
                        } mt-3 text-sm leading-[1.85] text-stone-700`}
                      >
                        {tProgramme(slot.detail, locale)}
                      </p>
                    </div>
                  ))}
                </div>
              ) : null}
              {section.id === "residency" && section.note ? (
                <SectionBody locale={locale} note={section.note} />
              ) : null}
              {section.subsections?.length && section.note ? (
                <SectionBody locale={locale} note={section.note} />
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-14 border border-stone-200 bg-stone-50/40 px-6 py-8 text-center">
          <p className="text-sm font-medium tracking-[0.06em] text-stone-900">
            {l.applyCta}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-stone-500">{l.applyNote}</p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <Link
              href={getProgrammePdfHref(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              {l.downloadPdf}
              <span aria-hidden>↓</span>
            </Link>
          </div>
        </section>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
