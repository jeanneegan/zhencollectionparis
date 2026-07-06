import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";

const backLabels: Record<Locale, string> = {
  fr: "← Retour · 返回",
  zh: "← Retour · 返回",
  en: "← Back",
};

const linkClass =
  "text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900";

export function PageBottomNav({ locale }: { locale: Locale }) {
  return (
    <div className="mt-14 text-center">
      <Link href="/" className={linkClass}>
        {backLabels[locale]}
      </Link>
    </div>
  );
}
