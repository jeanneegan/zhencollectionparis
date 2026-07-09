"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Serif_SC } from "next/font/google";
import { CollectorResaleRequestForm } from "@/app/components/collector-resale-request-form";
import { MemberWorkspaceLayout } from "@/app/components/member-workspace-layout";
import type { Locale } from "@/app/artists/[slug]/data";
import { t } from "@/app/artists/[slug]/data";
import {
  MOCK_COLLECTOR,
  MOCK_COLLECTOR_HOLDINGS,
} from "@/app/lib/collector-collection";
import type { MockMember } from "@/app/lib/auth";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageLabels: Record<
  Locale,
  {
    title: string;
    titleSub: string;
    collectingSince: string;
    focus: string;
    holdings: string;
    price: string;
    acquired: string;
    acquiredFrom: string;
    location: string;
    condition: string;
    notes: string;
    evaluations: string;
    viewArtist: string;
  }
> = {
  zh: {
    title: "Collection du collectionneur",
    titleSub: "藏家藏品",
    collectingSince: "Collection depuis · 收藏始于",
    focus: "Centre d'intérêt · 收藏方向",
    holdings: "Œuvres en collection · 藏品",
    price: "Prix · 价格",
    acquired: "Acquis en · 购入年份",
    acquiredFrom: "Provenance · 来源",
    location: "Localisation · 存放地点",
    condition: "État · 状况",
    notes: "Notes · 备注",
    evaluations: "Évaluations continues · 持续评价",
    viewArtist: "Voir l'artiste · 查看艺术家",
  },
  fr: {
    title: "Collection du collectionneur",
    titleSub: "藏家藏品",
    collectingSince: "Collection depuis · 收藏始于",
    focus: "Centre d'intérêt · 收藏方向",
    holdings: "Œuvres en collection · 藏品",
    price: "Prix · 价格",
    acquired: "Acquis en · 购入年份",
    acquiredFrom: "Provenance · 来源",
    location: "Localisation · 存放地点",
    condition: "État · 状况",
    notes: "Notes · 备注",
    evaluations: "Évaluations continues · 持续评价",
    viewArtist: "Voir l'artiste · 查看艺术家",
  },
  en: {
    title: "Collector's Collection",
    titleSub: "",
    collectingSince: "Collecting since",
    focus: "Focus",
    holdings: "Holdings",
    price: "Price",
    acquired: "Acquired",
    acquiredFrom: "Provenance",
    location: "Location",
    condition: "Condition",
    notes: "Notes",
    evaluations: "Ongoing evaluations",
    viewArtist: "View artist",
  },
};

export function CollectionneurView({ member }: { member: MockMember }) {
  const [locale] = useLocale();
  const l = pageLabels[locale];
  const collector = MOCK_COLLECTOR;

  return (
    <MemberWorkspaceLayout member={member} contentClassName="max-w-5xl">
        <header className="text-center md:text-left">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {l.title}
          </p>
          {locale !== "en" ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {l.titleSub}
            </p>
          ) : null}
          <h1
            className={`${serif.className} mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {locale === "en"
              ? l.title
              : `${t(collector.name, locale)} · ${l.titleSub}`}
          </h1>
          <p className="mt-3 text-sm text-stone-500">{t(collector.city, locale)}</p>
        </header>

        <div className="mt-10 grid gap-6 border-y border-stone-200 py-8 sm:grid-cols-2">
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.collectingSince}
            </p>
            <p className="mt-2 text-sm text-stone-800">{collector.collectingSince}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
              {l.focus}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-stone-800">
              {t(collector.focus, locale)}
            </p>
          </div>
        </div>

        <p className="mt-8 text-center text-sm leading-[1.9] text-stone-500">
          {t(collector.note, locale)}
        </p>

        <section className="mt-12">
          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.holdings}
          </p>
          <ul className="mt-6 space-y-8">
            {MOCK_COLLECTOR_HOLDINGS.map((holding) => (
              <li
                key={holding.id}
                className="border border-stone-200 bg-stone-50/30"
              >
                <div className="grid gap-0 md:grid-cols-[240px_minmax(0,1fr)]">
                  <div className="relative aspect-[4/5] bg-stone-100 md:aspect-auto md:min-h-[320px]">
                    <Image
                      src={holding.image}
                      alt={t(holding.title, locale)}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 240px"
                    />
                  </div>

                  <div className="space-y-5 p-5 md:p-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                        {t(holding.artistName, locale)}
                      </p>
                      <h2 className="mt-2 text-lg font-medium text-stone-900">
                        {t(holding.title, locale)}
                      </h2>
                      <p className="mt-2 text-sm text-stone-600">
                        {holding.year} · {t(holding.medium, locale)}
                      </p>
                      {holding.dimensions ? (
                        <p className="mt-1 text-sm text-stone-500">
                          {holding.dimensions}
                        </p>
                      ) : null}
                    </div>

                    <div className="border-t border-stone-200 pt-4">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                        {l.price}
                      </p>
                      <p className="mt-2 text-base font-medium text-stone-900">
                        {t(holding.price, locale)}
                      </p>
                    </div>

                    <dl className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                          {l.acquired}
                        </dt>
                        <dd className="mt-2 text-sm text-stone-700">
                          {holding.acquiredYear}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                          {l.acquiredFrom}
                        </dt>
                        <dd className="mt-2 text-sm text-stone-700">
                          {t(holding.acquiredFrom, locale)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                          {l.location}
                        </dt>
                        <dd className="mt-2 text-sm text-stone-700">
                          {t(holding.location, locale)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                          {l.condition}
                        </dt>
                        <dd className="mt-2 text-sm text-stone-700">
                          {t(holding.condition, locale)}
                        </dd>
                      </div>
                    </dl>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                        {l.notes}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">
                        {t(holding.notes, locale)}
                      </p>
                    </div>

                    {holding.evaluations.length > 0 ? (
                      <div className="border-t border-stone-200 pt-5">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                          {l.evaluations}
                        </p>
                        <ol className="mt-4 space-y-4">
                          {holding.evaluations.map((evaluation) => (
                            <li
                              key={`${holding.id}-${evaluation.date}-${t(evaluation.author, locale)}`}
                              className="border-l-2 border-stone-200 pl-4"
                            >
                              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                <time className="text-[11px] tabular-nums tracking-wide text-stone-400">
                                  {evaluation.date}
                                </time>
                                <span className="text-sm font-medium text-stone-800">
                                  {t(evaluation.author, locale)}
                                </span>
                                <span className="text-[11px] text-stone-400">
                                  · {t(evaluation.role, locale)}
                                </span>
                              </div>
                              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                                {t(evaluation.quote, locale)}
                              </p>
                            </li>
                          ))}
                        </ol>
                      </div>
                    ) : null}

                    <CollectorResaleRequestForm
                      locale={locale}
                      artworkTitle={holding.title}
                      artistName={holding.artistName}
                      initialPending={holding.resalePending}
                    />

                    <Link
                      href={`/artists/${holding.artistSlug}`}
                      className="inline-block text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                    >
                      {l.viewArtist}
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
    </MemberWorkspaceLayout>
  );
}
