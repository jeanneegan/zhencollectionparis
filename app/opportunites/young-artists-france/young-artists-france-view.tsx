"use client";

import Link from "next/link";
import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import { type Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { zcpContactEmail } from "@/app/lib/site-contact";
import { useLocale } from "@/app/lib/use-locale";
import {
  programmeSections,
  programmeSubtitle,
  programmeTitle,
  tProgramme,
} from "./data";

const labels: Record<
  Locale,
  {
    back: string;
    applyCta: string;
    applyNote: string;
  }
> = {
  zh: {
    back: "← RÉSIDENCES · 驻地",
    applyCta: "通过电子邮件报名",
    applyNote: "请发送作品集、个人介绍、职业发展目标及对国际合作的期待。",
  },
  fr: {
    back: "← RÉSIDENCES · 驻地",
    applyCta: "Candidater par e-mail",
    applyNote:
      "Portfolio, présentation, objectifs professionnels et attentes vis-à-vis de la coopération internationale.",
  },
  en: {
    back: "← Residencies",
    applyCta: "Apply by email",
    applyNote:
      "Send your portfolio, personal statement, career goals, and hopes for international collaboration.",
  },
};

function SectionBody({
  locale,
  paragraphs,
  bullets,
}: {
  locale: Locale;
  paragraphs?: { zh: string; fr: string; en: string }[];
  bullets?: { zh: string; fr: string; en: string }[];
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
    </div>
  );
}

export function YoungArtistsFranceView() {
  const [locale, setLocale] = useLocale();
  const l = labels[locale];
  const mailSubject = encodeURIComponent(
    locale === "zh"
      ? "ZCP 招募青年艺术家 · 报名"
      : locale === "fr"
        ? "ZCP recherche de jeunes artistes · Candidature"
        : "ZCP Young Artists — Application",
  );

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
          <p
            className={`${
              locale === "zh" || locale === "fr" ? serif.className : ""
            } text-sm leading-relaxed text-stone-600 md:text-base`}
          >
            {tProgramme(programmeSubtitle, locale)}
          </p>
          <h1
            className={`${serif.className} mt-6 text-2xl font-normal tracking-wide text-[#5a2323] md:text-3xl`}
          >
            {tProgramme(programmeTitle, locale)}
          </h1>
          <div className="mx-auto mt-4 h-px w-12 bg-stone-300" />
        </header>

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
              />
            </section>
          ))}
        </div>

        <section className="mt-14 border border-stone-200 bg-stone-50/40 px-6 py-8 text-center">
          <p className="text-sm font-medium tracking-[0.06em] text-stone-900">
            {l.applyCta}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-stone-500">{l.applyNote}</p>
          <a
            href={`mailto:${zcpContactEmail}?subject=${mailSubject}`}
            className="mt-6 inline-flex items-center rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
          >
            {zcpContactEmail}
          </a>
        </section>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
