"use client";

import { notoSerifSc as serif } from "@/app/lib/noto-serif-sc";
import type { Locale } from "@/app/artists/[slug]/data";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import {
  collectionOnlineShopUrl,
  collectionPageIntro,
  collectionPageTitle,
  collectionPartners,
  onlinePurchaseCta,
  onlinePurchaseLead,
  onlinePurchaseTitle,
  partnerCollectionLead,
  partnerCollectionTitle,
  partnersContactCta,
  partnersEmptyBody,
  partnersEmptyTitle,
  tCollection,
} from "@/app/editions/collection-data";
import { zcpContactEmail } from "@/app/lib/site-contact";
import { useLocale } from "@/app/lib/use-locale";

const sectionClass =
  "border border-stone-200 bg-stone-50/40 px-6 py-8 md:px-10 md:py-10";
const primaryCtaClass =
  "inline-flex items-center justify-center border border-[#5a2323] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[#5a2323] transition-colors hover:bg-[#5a2323] hover:text-white";
const secondaryCtaClass =
  "inline-flex items-center justify-center border border-stone-300 px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.16em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900";

export function EditionsIndexView() {
  const [locale, setLocale] = useLocale();
  const useSerif = locale === "zh" || locale === "fr";
  const mailSubject = encodeURIComponent(
    locale === "zh"
      ? "通过伙伴收藏 · 咨询"
      : locale === "fr"
        ? "Collection via partenaires · Contact"
        : "Collect through partners — Inquiry",
  );

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        wide
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="text-2xl font-light tracking-wide text-stone-900 md:text-3xl">
            {tCollection(collectionPageTitle, locale)}
          </h1>
          <p
            className={`${
              useSerif ? serif.className : ""
            } mx-auto mt-6 max-w-xl text-sm leading-[1.9] text-stone-600`}
          >
            {tCollection(collectionPageIntro, locale)}
          </p>
        </header>

        <div className="mt-12 space-y-6">
          <section className={sectionClass}>
            <h2 className="text-sm font-medium tracking-[0.14em] text-stone-900">
              {tCollection(partnerCollectionTitle, locale)}
            </h2>
            <p
              className={`${
                useSerif ? serif.className : ""
              } mt-4 text-sm leading-[1.9] text-stone-600`}
            >
              {tCollection(partnerCollectionLead, locale)}
            </p>

            {collectionPartners.length > 0 ? (
              <ul className="mt-8 space-y-4">
                {collectionPartners.map((partner) => (
                  <li
                    key={partner.id}
                    className="border border-stone-200 bg-white px-5 py-5 md:px-6"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-stone-500">
                      {tCollection(partner.city, locale)}
                    </p>
                    <p
                      className={`${
                        useSerif ? serif.className : ""
                      } mt-3 text-sm leading-[1.85] text-stone-700`}
                    >
                      {tCollection(partner.works, locale)}
                    </p>
                    <a
                      href={partner.contactHref}
                      className="mt-4 inline-block text-[11px] tracking-[0.1em] text-stone-800 underline-offset-4 hover:underline"
                    >
                      {tCollection(partner.contactLabel, locale)}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mt-8 border border-dashed border-stone-300 bg-white/60 px-5 py-6 text-center md:px-8">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-stone-500">
                  {tCollection(partnersEmptyTitle, locale)}
                </p>
                <p
                  className={`${
                    useSerif ? serif.className : ""
                  } mt-4 text-sm leading-[1.9] text-stone-600`}
                >
                  {tCollection(partnersEmptyBody, locale)}
                </p>
                <a
                  href={`mailto:${zcpContactEmail}?subject=${mailSubject}`}
                  className={`${secondaryCtaClass} mt-6`}
                >
                  {tCollection(partnersContactCta, locale)}
                </a>
              </div>
            )}
          </section>

          <section className={sectionClass}>
            <h2 className="text-sm font-medium tracking-[0.14em] text-stone-900">
              {tCollection(onlinePurchaseTitle, locale)}
            </h2>
            <p
              className={`${
                useSerif ? serif.className : ""
              } mt-4 text-sm leading-[1.9] text-stone-600`}
            >
              {tCollection(onlinePurchaseLead, locale)}
            </p>
            <div className="mt-6">
              <a
                href={collectionOnlineShopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={primaryCtaClass}
              >
                {tCollection(onlinePurchaseCta, locale)}
              </a>
            </div>
          </section>
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
