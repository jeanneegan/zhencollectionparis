import Link from "next/link";
import type { Locale } from "@/app/artists/[slug]/data";

const connexionLabels: Record<Locale, string> = {
  fr: "Accès sur invitation · 受邀登录",
  zh: "Accès sur invitation · 受邀登录",
  en: "Invited Access",
};

const agreementLabels: Record<Locale, string> = {
  fr: "Accord de collaboration et d'archives d'artiste · 艺术家合作与档案协议",
  zh: "Accord de collaboration et d'archives d'artiste · 艺术家合作与档案协议",
  en: "Artist Collaboration & Archive Agreement",
};

const linkClassName =
  "text-xs tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900";

export function SiteTopLinks({
  locale,
  showAgreement = false,
}: {
  locale: Locale;
  showAgreement?: boolean;
}) {
  return (
    <div className="mb-10 space-y-2 text-center">
      <div>
        <Link href="/connexion" className={linkClassName}>
          {connexionLabels[locale]}
        </Link>
      </div>
      {showAgreement ? (
        <div>
          <Link
            href="/collaboration-archive-agreement"
            className={linkClassName}
          >
            {agreementLabels[locale]}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
