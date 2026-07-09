"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Noto_Serif_SC } from "next/font/google";
import { CollectorResaleRequestForm } from "@/app/components/collector-resale-request-form";
import { MemberWorkspaceLayout } from "@/app/components/member-workspace-layout";
import type { Locale } from "@/app/artists/[slug]/data";
import { t } from "@/app/artists/[slug]/data";
import { getArtistPriceHistory, type ArtistPricePoint } from "@/app/lib/artist-price-history";
import {
  MOCK_COLLECTOR,
  MOCK_COLLECTOR_HOLDINGS,
  type CollectorHolding,
} from "@/app/lib/collector-collection";
import type { MockMember } from "@/app/lib/auth";
import { getArtworkPassportPathForImage } from "@/app/lib/artwork-passport";
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
    priceHistory: string;
    priceHistoryNote: string;
    viewArtist: string;
    viewArtworkPassport: string;
    resalePending: string;
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
    priceHistory: "Évolution des prix de l'artiste · 艺术家作品价格走势",
    priceHistoryNote: "Prix médian annuel de référence pour les œuvres de cet artiste · 该艺术家作品年度市场参考中位价",
    viewArtist: "Voir l'artiste · 查看艺术家",
    viewArtworkPassport: "Voir le passeport œuvre · 查看作品护照",
    resalePending: "Revente en cours · 转售中",
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
    priceHistory: "Évolution des prix de l'artiste · 艺术家作品价格走势",
    priceHistoryNote: "Prix médian annuel de référence pour les œuvres de cet artiste · 该艺术家作品年度市场参考中位价",
    viewArtist: "Voir l'artiste · 查看艺术家",
    viewArtworkPassport: "Voir le passeport œuvre · 查看作品护照",
    resalePending: "Revente en cours · 转售中",
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
    priceHistory: "Artist's work price trend (by year)",
    priceHistoryNote: "Annual reference median price for this artist's works",
    viewArtist: "View artist",
    viewArtworkPassport: "View artwork passport",
    resalePending: "Resale pending",
  },
};

function ArtistPriceHistory({
  history,
  locale,
  label,
  artistName,
  note,
}: {
  history: ArtistPricePoint[];
  locale: Locale;
  label: string;
  artistName: CollectorHolding["artistName"];
  note: string;
}) {
  if (history.length === 0) {
    return null;
  }

  const maxAmount = Math.max(...history.map((point) => point.amount));

  return (
    <div className="border-t border-stone-200 pt-5">
      <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
        {label}
      </p>
      <p className="mt-2 text-sm text-stone-600">{t(artistName, locale)}</p>
      <p className="mt-1 text-xs text-stone-400">{note}</p>
      <ul className="mt-4 space-y-4">
        {history.map((point) => (
          <li key={point.year}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm tabular-nums text-stone-700">
                {point.year}
              </span>
              <span className="text-sm font-medium text-stone-900">
                {t(point.value, locale)}
              </span>
            </div>
            <div className="mt-2 h-1.5 bg-stone-100">
              <div
                className="h-full bg-stone-500 transition-all"
                style={{ width: `${(point.amount / maxAmount) * 100}%` }}
              />
            </div>
            {point.note ? (
              <p className="mt-1.5 text-[11px] text-stone-400">
                {t(point.note, locale)}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HoldingDetail({
  holding,
  locale,
  l,
}: {
  holding: CollectorHolding;
  locale: Locale;
  l: (typeof pageLabels)[Locale];
}) {
  const artworkPassportHref = getArtworkPassportPathForImage(
    holding.artistSlug,
    holding.image,
  );

  return (
    <div className="space-y-6">
      <div className="border border-stone-200 bg-stone-50/30">
        <div className="relative aspect-[4/5] w-full bg-stone-100 lg:aspect-[5/4]">
          <Image
            src={holding.image}
            alt={t(holding.title, locale)}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 640px"
            priority
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
              <p className="mt-1 text-sm text-stone-500">{holding.dimensions}</p>
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

          <ArtistPriceHistory
            history={getArtistPriceHistory(holding.artistSlug)}
            locale={locale}
            label={l.priceHistory}
            artistName={holding.artistName}
            note={l.priceHistoryNote}
          />

          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
                {l.acquired}
              </dt>
              <dd className="mt-2 text-sm text-stone-700">{holding.acquiredYear}</dd>
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
          {artworkPassportHref ? (
            <Link
              href={artworkPassportHref}
              className="ml-4 inline-block text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
            >
              {l.viewArtworkPassport}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function CollectionneurView({ member }: { member: MockMember }) {
  const [locale] = useLocale();
  const l = pageLabels[locale];
  const collector = MOCK_COLLECTOR;
  const [selectedId, setSelectedId] = useState(MOCK_COLLECTOR_HOLDINGS[0]?.id ?? "");
  const selectedHolding =
    MOCK_COLLECTOR_HOLDINGS.find((holding) => holding.id === selectedId) ??
    MOCK_COLLECTOR_HOLDINGS[0] ??
    null;

  return (
    <MemberWorkspaceLayout member={member} contentClassName="max-w-6xl">
      <header>
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
          {l.title}
        </p>
        {locale !== "en" ? (
          <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
            {l.titleSub}
          </p>
        ) : null}
        <h1
          className={`${serif.className} mt-6 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
        >
          {locale === "en"
            ? l.title
            : `${t(collector.name, locale)} · ${l.titleSub}`}
        </h1>
        <p className="mt-3 text-sm text-stone-500">{t(collector.city, locale)}</p>
      </header>

      <div className="mt-8 grid gap-6 border-y border-stone-200 py-6 sm:grid-cols-2">
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

      <p className="mt-6 text-sm leading-[1.9] text-stone-500">
        {t(collector.note, locale)}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[240px_minmax(0,1fr)]">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="text-[10px] uppercase tracking-[0.15em] text-stone-400">
            {l.holdings}
          </p>
          <ul className="mt-3 flex gap-2 overflow-x-auto pb-2 lg:max-h-[calc(100vh-8rem)] lg:flex-col lg:gap-1 lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-1">
            {MOCK_COLLECTOR_HOLDINGS.map((holding) => {
              const active = holding.id === selectedId;

              return (
                <li key={holding.id} className="shrink-0 lg:shrink">
                  <button
                    type="button"
                    onClick={() => setSelectedId(holding.id)}
                    className={`flex w-full items-center gap-3 border p-2 text-left transition-colors ${
                      active
                        ? "border-stone-900 bg-stone-50"
                        : "border-stone-200 hover:border-stone-400"
                    }`}
                  >
                    <span className="relative h-16 w-12 shrink-0 overflow-hidden bg-stone-100">
                      <Image
                        src={holding.image}
                        alt={t(holding.title, locale)}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </span>
                    <span className="hidden min-w-0 lg:block">
                      <span className="block truncate text-xs font-medium text-stone-900">
                        {t(holding.title, locale)}
                      </span>
                      <span className="mt-1 block truncate text-[11px] text-stone-500">
                        {t(holding.artistName, locale)}
                      </span>
                      {holding.resalePending ? (
                        <span className="mt-1 block truncate text-[10px] uppercase tracking-wide text-stone-400">
                          {l.resalePending}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <section className="min-w-0">
          {selectedHolding ? (
            <HoldingDetail holding={selectedHolding} locale={locale} l={l} />
          ) : null}
        </section>
      </div>
    </MemberWorkspaceLayout>
  );
}
