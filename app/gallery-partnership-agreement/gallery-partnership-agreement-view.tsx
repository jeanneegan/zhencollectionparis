"use client";

import { Noto_Serif_SC } from "next/font/google";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const prevailingNotice = {
  fr: [
    "La version française fait foi en cas de divergence d'interprétation.",
  ],
  en: [
    "In case of any inconsistency, the French version shall prevail.",
  ],
  zh: ["如不同语言版本存在解释差异，以法文版本为准。"],
};

const mainContent = {
  fr: [
    "Zhen Collection Paris respecte la relation de représentation entre l'artiste et la galerie partenaire. Pour les artistes déjà représentés par une galerie partenaire de Zhen Collection Paris, ZCP procède, en principe, à la vente des œuvres par l'intermédiaire de cette galerie partenaire, et perçoit, conformément au Gallery Partnership Agreement signé séparément entre les parties, les commissions convenues au titre du développement commercial ou de l'apport de clients.",
  ],
  en: [
    "Zhen Collection Paris respects the agency relationship between artists and partner galleries. For artists already represented by a Zhen Collection Paris partner gallery, ZCP will, in principle, conduct artwork sales through that partner gallery, and collect the agreed business development or client introduction commissions in accordance with the Gallery Partnership Agreement separately executed by both parties.",
  ],
  zh: [
    "巴黎臻藏尊重艺术家与合作画廊之间的代理关系。对于已由巴黎臻藏合作画廊代理的艺术家，巴黎臻藏原则上通过该合作画廊开展作品销售，并依据双方另行签署的《Gallery Partnership Agreement》收取约定的业务拓展佣金或客户介绍佣金。",
  ],
};

function TrilingualParagraphs({
  paragraphs,
  useSerif = false,
}: {
  paragraphs: string[];
  useSerif?: boolean;
}) {
  return (
    <div className={`space-y-3 ${useSerif ? serif.className : ""}`}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-sm leading-[1.95] text-stone-600 md:text-base"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function TrilingualBlock({
  body,
}: {
  body: { fr: string[]; en: string[]; zh: string[] };
}) {
  return (
    <div className="space-y-8">
      <TrilingualParagraphs paragraphs={body.fr} />
      <TrilingualParagraphs paragraphs={body.en} />
      <TrilingualParagraphs paragraphs={body.zh} useSerif />
    </div>
  );
}

export function GalleryPartnershipAgreementView() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="space-y-2 text-xl font-normal tracking-wide text-stone-900 md:text-2xl">
            <span className="block">Gallery Partnership Agreement</span>
            <span className="block text-stone-800">
              Accord de partenariat galerie
            </span>
            <span className={`${serif.className} block text-stone-800`}>
              合作画廊协议
            </span>
          </h1>
          <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-stone-400">
            Version 2026
          </p>
        </header>

        <div className="mt-10 border-y border-stone-200 py-8">
          <TrilingualBlock body={prevailingNotice} />
        </div>

        <section className="mt-12">
          <TrilingualBlock body={mainContent} />
        </section>

        <PageBottomNav locale="fr" backHref="/espace" />
      </main>

      <SiteFooter locale="fr" />
    </div>
  );
}
