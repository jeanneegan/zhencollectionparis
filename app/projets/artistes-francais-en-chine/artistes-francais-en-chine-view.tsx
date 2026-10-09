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
    contactCta: string;
    contactNote: string;
  }
> = {
  zh: {
    back: "← PROJETS · 项目",
    contactCta: "通过电子邮件联系 ZCP",
    contactNote: "请简要介绍您的创作背景、对中文呈现的需求，以及希望开展的合作方向。",
  },
  fr: {
    back: "← PROJETS · 项目",
    contactCta: "Contacter ZCP par e-mail",
    contactNote:
      "Présentez brièvement votre parcours, vos besoins de documentation en chinois et les coopérations envisagées.",
  },
  en: {
    back: "← Projects",
    contactCta: "Contact ZCP by email",
    contactNote:
      "Briefly introduce your practice, your needs for Chinese presentation, and the collaboration you have in mind.",
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

export function ArtistesFrancaisEnChineView() {
  const [locale, setLocale] = useLocale();
  const l = labels[locale];
  const useSerif = locale === "zh" || locale === "fr";
  const mailSubject = encodeURIComponent(
    locale === "zh"
      ? "法国艺术家走进中国 · 咨询"
      : locale === "fr"
        ? "Artistes français en Chine · Contact"
        : "French artists in China — Inquiry",
  );

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <Link
          href="/projets"
          className="text-[11px] tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900"
        >
          {l.back}
        </Link>

        <header className="mt-8 border-b border-stone-200 pb-10 text-center">
          <h1
            className={`${
              useSerif ? serif.className : ""
            } text-2xl font-normal tracking-wide text-[#5a2323] md:text-3xl`}
          >
            {tProgramme(programmeTitle, locale)}
          </h1>
          <p
            className={`${
              useSerif ? serif.className : ""
            } mx-auto mt-4 max-w-xl text-sm leading-[1.9] text-stone-600`}
          >
            {tProgramme(programmeSubtitle, locale)}
          </p>
        </header>

        <div className={`mt-12 space-y-10 ${useSerif ? serif.className : ""}`}>
          {programmeSections.map((section) => (
            <section key={section.id}>
              <h2 className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#5a2323]">
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

        <div className="mt-14 border border-stone-200 bg-stone-50/40 px-6 py-8 text-center md:px-10">
          <a
            href={`mailto:${zcpContactEmail}?subject=${mailSubject}`}
            className="inline-flex items-center justify-center border border-[#5a2323] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#5a2323] transition-colors hover:bg-[#5a2323] hover:text-white"
          >
            {l.contactCta}
          </a>
          <p className="mt-4 text-sm leading-[1.85] text-stone-600">{l.contactNote}</p>
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
