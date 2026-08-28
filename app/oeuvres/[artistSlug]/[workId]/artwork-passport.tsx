"use client";

import Image from "next/image";
import Link from "next/link";
import { CollectorEvaluationForm } from "@/app/components/collector-evaluation-form";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { MemberWorkspaceLayout } from "@/app/components/member-workspace-layout";
import {
  getArtworkDisplayLayout,
  type Locale,
} from "@/app/artists/[slug]/data";
import type { MockMember } from "@/app/lib/auth";
import {
  t,
  type ArtworkPassport,
} from "@/app/lib/artwork-passport";
import { useLocale } from "@/app/lib/use-locale";

const labels: Record<
  Locale,
  {
    passport: string;
    artist: string;
    year: string;
    medium: string;
    dimensions: string;
    archiveId: string;
    collector: string;
    workCity: string;
    editionCopy: string;
    status: string;
    series: string;
    description: string;
    passportNote: string;
    collectorNote: string;
    provenance: string;
    referencePrice: string;
    memberOnlyPrice: string;
    evaluations: string;
    collectorEvaluation: string;
    collectorEvaluationIntro: string;
    exhibitions: string;
    venue: string;
    city: string;
    viewArtist: string;
    salesLink: string;
  }
> = {
  zh: {
    passport: "Passeport Œuvre · 作品护照",
    artist: "Artiste · 艺术家",
    year: "Année · 年份",
    medium: "Medium · 媒材",
    dimensions: "Dimensions · 尺寸",
    archiveId: "Archive ID · 档案编号",
    collector: "Collectionneur · 藏家",
    workCity: "Ville · 作品所在城市",
    editionCopy: "Exemplaire · 编号",
    status: "Statut · 状态",
    series: "Série · 系列",
    description: "Description · 作品描述",
    passportNote: "Note du passeport · 护照说明",
    collectorNote: "Note du collectionneur · 藏家说明",
    provenance: "Provenance · 来源",
    referencePrice: "Prix de référence · 参考价格",
    memberOnlyPrice: "Visible pour les collectionneurs inscrits · 注册藏家可见",
    evaluations: "Évaluations · 专业评价",
    collectorEvaluation: "Participation collectionneur · 藏家参与评价",
    collectorEvaluationIntro:
      "受邀藏家可在此留下对这件作品的专业阅读、持藏体会或持续评价。",
    exhibitions: "Expositions · 展览记录",
    venue: "Lieu · 场馆",
    city: "Ville · 城市",
    viewArtist: "Voir l'artiste · 查看艺术家",
    salesLink: "再次收藏",
  },
  fr: {
    passport: "Passeport Œuvre · 作品护照",
    artist: "Artiste · 艺术家",
    year: "Année · 年份",
    medium: "Medium · 媒材",
    dimensions: "Dimensions · 尺寸",
    archiveId: "Archive ID · 档案编号",
    collector: "Collectionneur · 藏家",
    workCity: "Ville · 作品所在城市",
    editionCopy: "Exemplaire · 编号",
    status: "Statut · 状态",
    series: "Série · 系列",
    description: "Description · 作品描述",
    passportNote: "Note du passeport · 护照说明",
    collectorNote: "Note du collectionneur · 藏家说明",
    provenance: "Provenance · 来源",
    referencePrice: "Prix de référence · 参考价格",
    memberOnlyPrice: "Visible pour les collectionneurs inscrits · 注册藏家可见",
    evaluations: "Évaluations · 专业评价",
    collectorEvaluation: "Participation collectionneur · 藏家参与评价",
    collectorEvaluationIntro:
      "受邀藏家可在此留下对这件作品的专业阅读、持藏体会或持续评价。",
    exhibitions: "Expositions · 展览记录",
    venue: "Lieu · 场馆",
    city: "Ville · 城市",
    viewArtist: "Voir l'artiste · 查看艺术家",
    salesLink: "再次收藏",
  },
  en: {
    passport: "Artwork Passport",
    artist: "Artist",
    year: "Year",
    medium: "Medium",
    dimensions: "Dimensions",
    archiveId: "Archive ID",
    collector: "Collector",
    workCity: "City",
    editionCopy: "Exemplar",
    status: "Status",
    series: "Series",
    description: "Description",
    passportNote: "Passport note",
    collectorNote: "Collector's note",
    provenance: "Provenance",
    referencePrice: "Reference Price",
    memberOnlyPrice: "Visible to registered collectors",
    evaluations: "Evaluations",
    collectorEvaluation: "Collector participation",
    collectorEvaluationIntro:
      "Invited collectors may leave a professional reading, holding note, or ongoing evaluation of this work.",
    exhibitions: "Exhibition History",
    venue: "Venue",
    city: "City",
    viewArtist: "View artist",
    salesLink: "Collect again · 再次收藏",
  },
};

const passportType = {
  meta: "text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400",
  metaPlain: "text-[11px] tabular-nums tracking-[0.1em] text-stone-400",
  body: "text-sm leading-[1.95] text-stone-600 md:text-base",
  heroPassport:
    "text-sm font-medium uppercase tracking-[0.15em] text-stone-400 md:text-base",
  heroName:
    "text-3xl font-light leading-tight tracking-tight text-stone-900 md:text-4xl lg:text-5xl",
  heroTagline: "text-sm leading-relaxed text-stone-600 md:text-base",
  heroValue: "text-sm text-stone-800 md:text-base",
  sectionTitle:
    "mt-2 text-xl font-light tracking-tight text-stone-900 md:text-2xl",
  listTitle: "text-sm font-medium text-stone-900 md:text-base",
  listMeta: "text-sm text-stone-500",
  quote: "text-sm leading-[1.9] text-stone-600 md:text-base",
} as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={passportType.sectionTitle}>{children}</h2>;
}

function ArtworkImage({
  passport,
  locale,
}: {
  passport: ArtworkPassport;
  locale: Locale;
}) {
  const views =
    passport.views ??
    ([
      {
        src: passport.image,
        imageAspect: passport.imageAspect,
      },
    ] as const);
  const layout = getArtworkDisplayLayout({
    dimensions: passport.dimensions,
    imageAspect: passport.imageAspect,
    views: passport.views,
    viewsLayout: passport.viewsLayout,
  });

  return (
    <div
      className={`grid gap-4 ${
        views.length > 1
          ? passport.viewsLayout === "row"
            ? "grid-cols-2"
            : "sm:grid-cols-2"
          : ""
      }`}
    >
      {views.map((view) => {
        const viewLayout = getArtworkDisplayLayout({
          dimensions: passport.dimensions,
          imageAspect: view.imageAspect ?? passport.imageAspect,
          views: passport.views,
          viewsLayout: passport.viewsLayout,
        });

        return (
          <div
            key={view.src}
            className="relative w-full overflow-hidden bg-stone-100"
            style={viewLayout.frameStyle}
          >
            <Image
              src={view.src}
              alt={t(passport.title, locale)}
              fill
              priority
              className="object-contain object-center"
              sizes={layout.imageSizes}
            />
          </div>
        );
      })}
    </div>
  );
}

export function ArtworkPassportView({
  passport,
  returnTo,
  member,
}: {
  passport: ArtworkPassport;
  returnTo?: string;
  member?: MockMember;
}) {
  const [locale, setLocale] = useLocale();
  const l = labels[locale];
  const pageWrap = member ? "w-full" : "mx-auto max-w-7xl";
  const description = passport.description ? t(passport.description, locale) : "";

  const passportContent = (
    <>
      <section
        id="passport-work"
        className="scroll-mt-28 border-b border-stone-200 bg-white md:scroll-mt-32"
      >
        <div className={`${pageWrap} grid grid-cols-1 md:grid-cols-2`}>
          <div className="bg-stone-100 p-6 md:min-h-[520px] md:p-10">
            <ArtworkImage passport={passport} locale={locale} />
          </div>

          <div
            className={`flex flex-col justify-center ${
              member ? "px-6 py-10 md:px-10" : "px-6 py-16 md:px-16 lg:px-20"
            }`}
          >
            {!member ? (
              <>
                <p className={passportType.heroPassport}>{l.passport}</p>
                <h1 className={`mt-4 ${passportType.heroName}`}>
                  {t(passport.title, locale)}
                </h1>
                {passport.subtitle ? (
                  <p className={`mt-4 ${passportType.heroTagline}`}>
                    {t(passport.subtitle, locale)}
                  </p>
                ) : null}
              </>
            ) : null}

            <dl className={`grid grid-cols-2 gap-x-8 gap-y-6 ${member ? "" : "mt-12"}`}>
              <div className="col-span-2">
                <dt className={passportType.meta}>{l.artist}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  <Link
                    href={`/artists/${passport.artistSlug}`}
                    className="transition-colors hover:text-stone-500"
                  >
                    {t(passport.artistName, locale)}
                  </Link>
                </dd>
              </div>
              {passport.collectorName ? (
                <div className="col-span-2">
                  <dt className={passportType.meta}>{l.collector}</dt>
                  <dd className={`mt-1 ${passportType.heroValue}`}>
                    {t(passport.collectorName, locale)}
                  </dd>
                </div>
              ) : null}
              {passport.locationCity ? (
                <div className="col-span-2">
                  <dt className={passportType.meta}>{l.workCity}</dt>
                  <dd className={`mt-1 ${passportType.heroValue}`}>
                    {t(passport.locationCity, locale)}
                  </dd>
                </div>
              ) : null}
              {passport.editionCopy ? (
                <div>
                  <dt className={passportType.meta}>{l.editionCopy}</dt>
                  <dd className={`mt-1 ${passportType.heroValue}`}>
                    {passport.editionCopy.number} / {passport.editionCopy.total}
                  </dd>
                </div>
              ) : null}
              <div>
                <dt className={passportType.meta}>{l.archiveId}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>{passport.archiveId}</dd>
              </div>
              <div className="col-span-2">
                <dt className={passportType.meta}>{l.year}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>{passport.year}</dd>
              </div>
              <div className="col-span-2">
                <dt className={passportType.meta}>{l.medium}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(passport.medium, locale)}
                </dd>
              </div>
              {passport.dimensions ? (
                <div className="col-span-2">
                  <dt className={passportType.meta}>{l.dimensions}</dt>
                  <dd className={`mt-1 ${passportType.heroValue}`}>
                    {passport.dimensions}
                  </dd>
                </div>
              ) : null}
              <div className="col-span-2">
                <dt className={passportType.meta}>{l.status}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(passport.status, locale)}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {passport.salesLink ? (
          <div
            className={`${pageWrap} border-t border-stone-200 px-6 py-10 md:px-10 md:py-12`}
          >
            {passport.salesLink.startsWith("/") ? (
              <Link
                href={passport.salesLink}
                className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-6 py-2.5 text-[11px] font-medium tracking-[0.1em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
              >
                {passport.salesLinkLabel
                  ? t(passport.salesLinkLabel, locale)
                  : l.salesLink}
                <span aria-hidden>→</span>
              </Link>
            ) : (
              <a
                href={passport.salesLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-900 px-6 py-2.5 text-[11px] font-medium tracking-[0.1em] text-stone-900 transition-colors hover:bg-stone-900 hover:text-white"
              >
                {passport.salesLinkLabel
                  ? t(passport.salesLinkLabel, locale)
                  : l.salesLink}
                <span aria-hidden>→</span>
              </a>
            )}
          </div>
        ) : null}

        <div
          className={`${pageWrap} border-t border-stone-200 px-6 py-12 md:px-10 md:py-14`}
        >
          <SectionTitle>{l.collectorEvaluation}</SectionTitle>
          <p className={`mt-4 max-w-3xl ${passportType.body}`}>
            {l.collectorEvaluationIntro}
          </p>
          <CollectorEvaluationForm locale={locale} />
        </div>
      </section>

      <section
        id="passport-archive"
        className={`${pageWrap} scroll-mt-28 space-y-20 px-6 py-16 md:scroll-mt-32 md:px-10 md:py-20`}
      >
        {passport.series ? (
          <div>
            <SectionTitle>{l.series}</SectionTitle>
            <p className={`mt-4 ${passportType.listTitle}`}>
              {t(passport.series.title, locale)}
            </p>
            {passport.series.period ? (
              <p className={`mt-2 ${passportType.metaPlain}`}>{passport.series.period}</p>
            ) : null}
            <p className={`mt-6 max-w-3xl ${passportType.body}`}>
              {t(passport.series.intro, locale)}
            </p>
          </div>
        ) : null}

        {description ? (
          <div>
            <SectionTitle>{l.description}</SectionTitle>
            <p className={`mt-6 max-w-3xl ${passportType.body}`}>{description}</p>
          </div>
        ) : null}

        <div>
          <SectionTitle>{l.passportNote}</SectionTitle>
          <p className={`mt-6 max-w-3xl ${passportType.body}`}>
            {t(passport.passportNote, locale)}
          </p>
        </div>

        <div>
          <SectionTitle>{l.collectorNote}</SectionTitle>
          <p className={`mt-6 max-w-3xl ${passportType.body}`}>
            {t(passport.collectorNote, locale)}
          </p>
        </div>

        {passport.provenance.length > 0 ? (
          <div>
            <SectionTitle>{l.provenance}</SectionTitle>
            <ul className="mt-6 space-y-3">
              {passport.provenance.map((entry) => (
                <li key={t(entry, "fr")} className={passportType.body}>
                  {t(entry, locale)}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {passport.referencePrice ? (
          <div>
            <SectionTitle>{l.referencePrice}</SectionTitle>
            <p className={`mt-6 ${passportType.listTitle}`}>
              {member
                ? t(passport.referencePrice, locale)
                : l.memberOnlyPrice}
            </p>
          </div>
        ) : null}

        {passport.exhibitionHistory.length > 0 ? (
          <div>
            <SectionTitle>{l.exhibitions}</SectionTitle>
            <ul className="mt-8 space-y-6">
              {passport.exhibitionHistory.map((entry) => (
                <li key={`${entry.year}-${t(entry.title, "fr")}`}>
                  <p className={passportType.metaPlain}>{entry.year}</p>
                  <p className={`mt-2 ${passportType.listTitle}`}>
                    {t(entry.title, locale)}
                  </p>
                  <p className={`mt-1 ${passportType.listMeta}`}>
                    {entry.venue} · {t(entry.city, locale)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section
        id="passport-evaluations"
        className={`${pageWrap} scroll-mt-28 border-t border-stone-200 px-6 py-16 md:scroll-mt-32 md:px-10 md:py-20`}
      >
        <SectionTitle>{l.evaluations}</SectionTitle>
        {passport.evaluations.length > 0 ? (
          <ol className="mt-10 space-y-8">
            {passport.evaluations.map((evaluation) => (
              <li
                key={`${evaluation.date}-${t(evaluation.author, "fr")}`}
                className="border-l-2 border-stone-200 pl-6"
              >
                <time dateTime={evaluation.date} className={passportType.metaPlain}>
                  {evaluation.date}
                </time>
                <p className={`mt-3 ${passportType.listTitle}`}>
                  {t(evaluation.author, locale)}
                  <span className={`ml-2 ${passportType.listMeta}`}>
                    · {t(evaluation.role, locale)}
                  </span>
                </p>
                <blockquote className={`mt-4 ${passportType.quote}`}>
                  「{t(evaluation.quote, locale)}」
                </blockquote>
              </li>
            ))}
          </ol>
        ) : (
          <p className={`mt-8 ${passportType.body}`}>{t(passport.passportNote, locale)}</p>
        )}

        <div className="mt-10">
          <Link
            href={`/artists/${passport.artistSlug}`}
            className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
          >
            {l.viewArtist}
          </Link>
        </div>
      </section>
    </>
  );

  if (member) {
    return (
      <MemberWorkspaceLayout member={member} contentClassName="w-full max-w-none min-w-0">
        <header className="border-b border-stone-200 pb-6">
          <p className={passportType.heroPassport}>{l.passport}</p>
          <h1 className={`mt-3 ${passportType.heroName}`}>{t(passport.title, locale)}</h1>
          <p className={`mt-4 max-w-2xl ${passportType.heroTagline}`}>
            {t(passport.artistName, locale)}
          </p>
        </header>

        <div className="mt-8 -mx-6 min-w-0 bg-stone-50 text-stone-900 md:-mx-10">
          {passportContent}
        </div>
      </MemberWorkspaceLayout>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader
        wide
        trailing={<LanguageSwitcher locale={locale} onChange={setLocale} />}
      />

      {passportContent}

      <div className="mx-auto max-w-3xl px-6">
        <PageBottomNav locale={locale} backHref={returnTo ?? "/"} />
      </div>

      <SiteFooter wide locale={locale} />
    </div>
  );
}
