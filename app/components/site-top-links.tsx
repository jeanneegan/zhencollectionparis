import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";

const connexionLabels: Record<Locale, string> = {
  fr: "Accès sur invitation · 受邀登录",
  zh: "Accès sur invitation · 受邀登录",
  en: "Invited Access",
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
