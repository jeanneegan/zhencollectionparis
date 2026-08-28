import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";
import { t } from "@/app/artists/[slug]/data";
import { getEditionShopHomeUrl } from "@/app/lib/edition-shop";

export const EDITION_PROGRAMME_LABEL: LocalizedText = {
  zh: "巴黎臻藏出版计划",
  fr: "Collection éditoriale Zhen Collection Paris",
  en: "Zhen Collection Paris editions programme",
};

const linkClassName =
  "text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

export function EditionProgrammeLink({
  locale,
  className = linkClassName,
}: {
  locale: Locale;
  className?: string;
}) {
  return (
    <a
      href={getEditionShopHomeUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {t(EDITION_PROGRAMME_LABEL, locale)}
    </a>
  );
}

export function EditionProgrammeIntro({
  locale,
  suffix,
  className,
}: {
  locale: Locale;
  suffix: LocalizedText;
  className?: string;
}) {
  return (
    <p className={className}>
      <EditionProgrammeLink locale={locale} />
      {t(suffix, locale)}
    </p>
  );
}
