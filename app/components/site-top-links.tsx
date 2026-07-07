import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";

const connexionLabels: Record<Locale, string> = {
  fr: "Connexion · 登录",
  zh: "Connexion · 登录",
  en: "Sign in",
};

export function SiteTopLinks({ locale }: { locale: Locale }) {
  return (
    <div className="mb-10 text-center">
      <Link
        href="/connexion"
        className="text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900"
      >
        {connexionLabels[locale]}
      </Link>
    </div>
  );
}
