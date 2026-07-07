import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";
import { getReturnLabelKey, isAllowedReturnPath } from "@/app/lib/return-to";

const backLabels: Record<Locale, string> = {
  fr: "← Retour · 返回",
  zh: "← Retour · 返回",
  en: "← Back",
};

const workspaceBackLabels: Record<Locale, string> = {
  fr: "← Retour à l'espace membre · 返回工作台",
  zh: "← Retour à l'espace membre · 返回工作台",
  en: "← Back to workspace",
};

const exhibitionsBackLabels: Record<Locale, string> = {
  fr: "← Retour aux expositions · 返回展览",
  zh: "← Retour aux expositions · 返回展览",
  en: "← Back to exhibitions",
};

const linkClass =
  "text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900";

export function PageBottomNav({
  locale,
  backHref = "/",
  backLabel,
}: {
  locale: Locale;
  backHref?: string;
  backLabel?: string;
}) {
  const href = isAllowedReturnPath(backHref) ? backHref : "/";
  const labelKey = getReturnLabelKey(href);
  const label =
    backLabel ??
    (labelKey === "exhibitions"
      ? exhibitionsBackLabels[locale]
      : labelKey === "workspace"
        ? workspaceBackLabels[locale]
        : backLabels[locale]);

  return (
    <div className="mt-14 text-center">
      <Link href={href} className={linkClass}>
        {label}
      </Link>
    </div>
  );
}
