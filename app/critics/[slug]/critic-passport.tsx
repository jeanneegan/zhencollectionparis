"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteBrandLink } from "@/app/components/site-brand-link";
import { SiteFooter } from "@/app/components/site-footer";
import { MemberWorkspaceLayout } from "@/app/components/member-workspace-layout";
import type { Locale } from "@/app/artists/[slug]/data";
import type { MockMember } from "@/app/lib/auth";
import { useLocale } from "@/app/lib/use-locale";
import { type CriticProfile, t } from "./data";
import { getArtworkPassportPath, hasArtworkPassport } from "@/app/lib/artwork-passport";

const labels: Record<
  Locale,
  {
    archive: string;
    navProfile: string;
    navReviews: string;
    navArticles: string;
    birthYear: string;
    currentCity: string;
    nationality: string;
    specialty: string;
    languages: string;
    education: string;
    affiliations: string;
    since: string;
    criticStatement: string;
    platformNote: string;
    careerTimeline: string;
    workReviews: string;
    articles: string;
    recognition: string;
    viewArtist: string;
    viewArtwork: string;
  }
> = {
  zh: {
    archive: "Archive Commentateur · 评论家档案",
    navProfile: "档案",
    navReviews: "作品评论",
    navArticles: "独立文章",
    birthYear: "出生年份",
    currentCity: "现居城市",
    nationality: "国籍",
    specialty: "批评方向",
    languages: "工作语言",
    education: "Formation · 教育背景",
    affiliations: "Affiliations · 机构与出版",
    since: "自",
    criticStatement: "Position critique · 批评立场",
    platformNote: "Note · 档案说明",
    careerTimeline: "Chronologie · 职业时间轴",
    workReviews: "Commentaires d'œuvres · 作品评论",
    articles: "Articles indépendants · 独立文章",
    recognition: "Reconnaissance · 专业认可",
    viewArtist: "Voir l'artiste · 查看艺术家",
    viewArtwork: "Voir le passeport œuvre · 查看作品护照",
  },
  fr: {
    archive: "Archive Commentateur · 评论家档案",
    navProfile: "Profil",
    navReviews: "Commentaires",
    navArticles: "Articles",
    birthYear: "Année de naissance",
    currentCity: "Ville actuelle",
    nationality: "Nationalité",
    specialty: "Domaine critique",
    languages: "Langues de travail",
    education: "Formation · 教育背景",
    affiliations: "Affiliations · 机构与出版",
    since: "Depuis",
    criticStatement: "Position critique · 批评立场",
    platformNote: "Note · 档案说明",
    careerTimeline: "Chronologie · 职业时间轴",
    workReviews: "Commentaires d'œuvres · 作品评论",
    articles: "Articles indépendants · 独立文章",
    recognition: "Reconnaissance · 专业认可",
    viewArtist: "Voir l'artiste · 查看艺术家",
    viewArtwork: "Voir le passeport œuvre · 查看作品护照",
  },
  en: {
    archive: "Critic Archive",
    navProfile: "Profile",
    navReviews: "Reviews",
    navArticles: "Articles",
    birthYear: "Birth Year",
    currentCity: "Current City",
    nationality: "Nationality",
    specialty: "Focus",
    languages: "Working Languages",
    education: "Education",
    affiliations: "Affiliations",
    since: "Since",
    criticStatement: "Critical Position",
    platformNote: "Archive Note",
    careerTimeline: "Career Timeline",
    workReviews: "Work Reviews",
    articles: "Independent Articles",
    recognition: "Recognition",
    viewArtist: "View artist",
    viewArtwork: "View artwork passport",
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

const archiveSections = [
  { id: "archive-profile", key: "profile" },
  { id: "archive-reviews", key: "reviews" },
  { id: "archive-articles", key: "articles" },
] as const;

type ArchiveSection = (typeof archiveSections)[number]["key"];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={passportType.sectionTitle}>{children}</h2>;
}

function Divider() {
  return <hr className="border-stone-200" />;
}

function ProseParagraphs({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/\n\n+/)
        .filter(Boolean)
        .map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={`${passportType.body} mt-4 first:mt-0`}>
            {paragraph}
          </p>
        ))}
    </>
  );
}

function ArchiveSectionNav({
  labels: navLabels,
}: {
  labels: { navProfile: string; navReviews: string; navArticles: string };
}) {
  const [activeSection, setActiveSection] = useState<ArchiveSection>("profile");

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 160;
      let next: ArchiveSection = "profile";

      for (const section of archiveSections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        if (element.getBoundingClientRect().top - offset <= 0) {
          next = section.key;
        }
      }

      setActiveSection(next);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const items: { key: ArchiveSection; label: string; id: string }[] = [
    { key: "profile", label: navLabels.navProfile, id: "archive-profile" },
    { key: "reviews", label: navLabels.navReviews, id: "archive-reviews" },
    { key: "articles", label: navLabels.navArticles, id: "archive-articles" },
  ];

  return (
    <nav className="flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-medium uppercase tracking-[0.15em]">
      {items.map(({ key, label, id }) => (
        <button
          key={key}
          type="button"
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
          className={`transition-colors ${
            activeSection === key
              ? "text-stone-900"
              : "text-stone-400 hover:text-stone-900"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
}

function PortraitPlaceholder({ name, locale }: { name: CriticProfile["name"]; locale: Locale }) {
  const display = t(name, locale);
  const initials = display
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full min-h-[320px] items-center justify-center bg-stone-200 md:min-h-[640px]">
      <span className="text-5xl font-light tracking-[0.2em] text-stone-400 md:text-6xl">
        {initials}
      </span>
    </div>
  );
}

export function CriticPassport({
  critic,
  returnTo,
  member,
}: {
  critic: CriticProfile;
  returnTo?: string;
  member?: MockMember;
}) {
  const [locale, setLocale] = useLocale();
  const l = labels[locale];
  const navLabels = {
    navProfile: l.navProfile,
    navReviews: l.navReviews,
    navArticles: l.navArticles,
  };
  const pageWrap = member ? "w-full" : "mx-auto max-w-7xl";

  const archiveContent = (
    <>
      <section
        id="archive-profile"
        className="scroll-mt-28 border-b border-stone-200 bg-white md:scroll-mt-32"
      >
        <div className={`${pageWrap} grid grid-cols-1 md:grid-cols-2`}>
          <PortraitPlaceholder name={critic.name} locale={locale} />

          <div
            className={`flex flex-col justify-center ${
              member ? "px-6 py-10 md:px-10" : "px-6 py-16 md:px-16 lg:px-20"
            }`}
          >
            {!member ? (
              <>
                <p className={passportType.heroPassport}>{l.archive}</p>
                <h1 className={`mt-4 ${passportType.heroName}`}>{t(critic.name, locale)}</h1>
                <p className={`mt-8 max-w-md ${passportType.heroTagline}`}>
                  {t(critic.tagline, locale)}
                </p>
              </>
            ) : null}

            <dl className={`grid grid-cols-2 gap-x-8 gap-y-6 ${member ? "" : "mt-12"}`}>
              <div>
                <dt className={passportType.meta}>{l.birthYear}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>{critic.birthYear}</dd>
              </div>
              <div>
                <dt className={passportType.meta}>{l.currentCity}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(critic.currentCity, locale)}
                </dd>
              </div>
              <div>
                <dt className={passportType.meta}>{l.nationality}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(critic.nationality, locale)}
                </dd>
              </div>
              <div>
                <dt className={passportType.meta}>{l.specialty}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(critic.specialty, locale)}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className={passportType.meta}>{l.languages}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(critic.languages, locale)}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className={`${pageWrap} space-y-20 px-6 py-16 md:px-10 md:py-20`}>
        <div>
          <SectionTitle>{l.criticStatement}</SectionTitle>
          <div className="mt-6 max-w-3xl">
            <ProseParagraphs text={t(critic.criticStatement, locale)} />
          </div>
        </div>

        <Divider />

        <div>
          <SectionTitle>{l.education}</SectionTitle>
          <ul className="mt-8 space-y-6">
            {critic.education.map((item) => (
              <li key={`${item.year}-${t(item.institution, "fr")}`}>
                <p className={passportType.listTitle}>{t(item.institution, locale)}</p>
                <p className={`mt-1 ${passportType.listMeta}`}>
                  {item.year} · {t(item.degree, locale)} · {t(item.city, locale)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionTitle>{l.affiliations}</SectionTitle>
          <ul className="mt-8 space-y-6">
            {critic.affiliations.map((item) => (
              <li key={t(item.name, "fr")}>
                <p className={passportType.listTitle}>{t(item.name, locale)}</p>
                <p className={`mt-1 ${passportType.listMeta}`}>
                  {l.since} {item.since} · {t(item.role, locale)} · {t(item.city, locale)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionTitle>{l.careerTimeline}</SectionTitle>
          <ol className="mt-8 space-y-8 border-l border-stone-200 pl-6">
            {critic.careerTimeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[calc(1.5rem+1px)] top-1.5 h-2 w-2 rounded-full bg-stone-400" />
                <p className={passportType.metaPlain}>{item.year}</p>
                <p className={`mt-2 ${passportType.listTitle}`}>{t(item.title, locale)}</p>
                <p className={`mt-2 max-w-2xl ${passportType.body}`}>
                  {t(item.description, locale)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="archive-reviews"
        className="scroll-mt-28 border-y border-stone-200 bg-white md:scroll-mt-32"
      >
        <div className={`${pageWrap} px-6 py-16 md:px-10 md:py-20`}>
          <SectionTitle>{l.workReviews}</SectionTitle>
          <p className={`mt-4 max-w-3xl ${passportType.body}`}>
            {t(critic.platformNote, locale)}
          </p>

          <ul className="mt-10 space-y-10">
            {critic.workReviews.map((review) => (
              <li
                key={review.id}
                className="grid grid-cols-1 gap-6 border border-stone-200 bg-stone-50/40 p-5 md:grid-cols-[160px_minmax(0,1fr)] md:gap-8 md:p-6"
              >
                <div className="relative aspect-[4/5] w-full max-w-[160px] overflow-hidden bg-stone-100">
                  <Image
                    src={review.artworkImage}
                    alt={t(review.artworkTitle, locale)}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                </div>
                <div>
                  <time dateTime={review.date} className={passportType.metaPlain}>
                    {review.date}
                  </time>
                  <p className={`mt-3 ${passportType.listTitle}`}>
                    {t(review.artworkTitle, locale)} · {review.artworkYear}
                  </p>
                  <p className={`mt-1 ${passportType.listMeta}`}>
                    {t(review.artistName, locale)}
                  </p>
                  <blockquote className={`mt-4 ${passportType.quote}`}>
                    「{t(review.excerpt, locale)}」
                  </blockquote>
                  <div className="mt-5 flex flex-wrap gap-4">
                    <Link
                      href={`/artists/${review.artistSlug}`}
                      className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                    >
                      {l.viewArtist}
                    </Link>
                    {hasArtworkPassport(review.artistSlug, review.workId) ? (
                      <Link
                        href={getArtworkPassportPath(review.artistSlug, review.workId)}
                        className="text-[11px] tracking-[0.08em] text-stone-500 transition-colors hover:text-stone-900"
                      >
                        {l.viewArtwork}
                      </Link>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="archive-articles" className="scroll-mt-28 md:scroll-mt-32">
        <div className={`${pageWrap} px-6 py-16 md:px-10 md:py-20`}>
          <SectionTitle>{l.articles}</SectionTitle>
          <ul className="mt-10 space-y-8">
            {critic.articles.map((article) => (
              <li key={article.id} className="border-b border-stone-200 pb-8 last:border-0">
                <time dateTime={article.date} className={passportType.metaPlain}>
                  {article.date}
                </time>
                <p className={`mt-2 ${passportType.meta}`}>{t(article.subject, locale)}</p>
                <h3 className={`mt-3 ${passportType.listTitle}`}>{t(article.title, locale)}</h3>
                <p className={`mt-4 max-w-3xl ${passportType.body}`}>
                  {t(article.excerpt, locale)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${pageWrap} border-t border-stone-200 px-6 py-16 md:px-10 md:py-20`}>
        <SectionTitle>{l.recognition}</SectionTitle>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {critic.recognition.map((item) => (
            <figure
              key={t(item.source, "fr")}
              className="rounded-sm border border-stone-200 bg-white p-8"
            >
              <blockquote className={passportType.quote}>「{t(item.quote, locale)}」</blockquote>
              <figcaption className="mt-6 border-t border-stone-100 pt-4">
                <p className={passportType.listTitle}>{t(item.source, locale)}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );

  if (member) {
    return (
      <MemberWorkspaceLayout member={member} contentClassName="w-full max-w-none min-w-0">
        <header className="border-b border-stone-200 pb-6">
          <p className={passportType.heroPassport}>{l.archive}</p>
          <h1 className={`mt-3 ${passportType.heroName}`}>{t(critic.name, locale)}</h1>
          <p className={`mt-4 max-w-2xl ${passportType.heroTagline}`}>
            {t(critic.tagline, locale)}
          </p>
        </header>

        <div className="mt-8 -mx-6 min-w-0 bg-stone-50 text-stone-900 md:-mx-10">
          {archiveContent}
        </div>
      </MemberWorkspaceLayout>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <SiteBrandLink className="shrink-0" />
          <div className="flex shrink-0 items-center gap-4 md:gap-6">
            <ArchiveSectionNav labels={navLabels} />
            <LanguageSwitcher locale={locale} onChange={setLocale} />
          </div>
        </div>
      </header>

      {archiveContent}

      <div className="mx-auto max-w-3xl px-6">
        <PageBottomNav locale={locale} backHref={returnTo ?? "/"} />
      </div>

      <SiteFooter wide />
    </div>
  );
}
