"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteBrandLink } from "@/app/components/site-brand-link";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteTopLinks } from "@/app/components/site-top-links";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { useLocale } from "@/app/lib/use-locale";
import { type ArtistProfile, type Locale, getArtworkDisplayLayout, t } from "./data";

const labels: Record<
  Locale,
  {
    passport: string;
    navArtist: string;
    navWorks: string;
    navExhibitions: string;
    birthYear: string;
    birthplace: string;
    currentCity: string;
    nationality: string;
    practice: string;
    representedBy: string;
    education: string;
    representation: string;
    since: string;
    whyChinaFrance: string;
    whyChina: string;
    whyFrance: string;
    collectionQuestions: string;
    hopeToLeave: string;
    china: string;
    france: string;
    artistStatement: string;
    exhibitions: string;
    year: string;
    exhibition: string;
    venue: string;
    city: string;
    type: string;
    solo: string;
    duo: string;
    group: string;
    careerTimeline: string;
    selectedWorks: string;
    collectionInquiry: string;
    collectionNote: string;
    collectionLink: string;
    professionalReputation: string;
    galleryRecognition: string;
    collectorRecognition: string;
    curatorMediaRecognition: string;
    publicResonance: string;
  }
> = {
  zh: {
    passport: "Passeport Artiste · 艺术家护照",
    navArtist: "艺术家",
    navWorks: "作品",
    navExhibitions: "展览",
    birthYear: "出生年份",
    birthplace: "出生地",
    currentCity: "现居城市",
    nationality: "国籍",
    practice: "艺术实践",
    representedBy: "代理画廊",
    education: "Formation · 教育背景",
    representation: "Représentation · 代理画廊",
    since: "自",
    whyChinaFrance:
      "Pourquoi la Chine / Pourquoi la France｜为什么中国 / 为什么法国",
    whyChina: "Pourquoi la Chine｜为什么中国",
    whyFrance: "Pourquoi la France｜为什么法国",
    collectionQuestions: "Questions · Zhen Collection Paris｜巴黎臻藏的提问",
    hopeToLeave: "Ce que j'espère qu'on retienne｜我希望被记住的",
    china: "中国",
    france: "法国",
    artistStatement: "Texte de l'artiste｜创作陈述",
    exhibitions: "Expositions｜展览",
    year: "年份",
    exhibition: "展览",
    venue: "场馆",
    city: "城市",
    type: "类型",
    solo: "个展",
    duo: "双人展",
    group: "群展",
    careerTimeline: "Chronologie professionnelle｜职业时间轴",
    selectedWorks: "Œuvres sélectionnées｜作品",
    collectionInquiry: "Collection inquiry · 收藏咨询",
    collectionNote:
      "对该艺术家的作品有收藏意向 · Demande de collection pour cet artiste",
    collectionLink: "Demander · 咨询收藏",
    professionalReputation: "Réputation professionnelle｜职业声誉",
    galleryRecognition: "Reconnaissance des galeries · 画廊认可",
    collectorRecognition: "Reconnaissance des collectionneurs · 藏家认可",
    curatorMediaRecognition:
      "Reconnaissance curateurs / médias · 策展人与媒体认可",
    publicResonance: "Résonance publique · 公众共鸣",
  },
  fr: {
    passport: "Passeport Artiste · 艺术家护照",
    navArtist: "Artistes",
    navWorks: "Œuvres",
    navExhibitions: "Expositions",
    birthYear: "Année de naissance",
    birthplace: "Lieu de naissance",
    currentCity: "Ville actuelle",
    nationality: "Nationalité",
    practice: "Pratique artistique",
    representedBy: "Galerie représentante",
    education: "Formation · 教育背景",
    representation: "Représentation · 代理画廊",
    since: "Depuis",
    whyChinaFrance:
      "Pourquoi la Chine / Pourquoi la France｜为什么中国 / 为什么法国",
    whyChina: "Pourquoi la Chine｜为什么中国",
    whyFrance: "Pourquoi la France｜为什么法国",
    collectionQuestions: "Questions · Zhen Collection Paris｜巴黎臻藏的提问",
    hopeToLeave: "Ce que j'espère qu'on retienne｜我希望被记住的",
    china: "Chine",
    france: "France",
    artistStatement: "Texte de l'artiste｜创作陈述",
    exhibitions: "Expositions｜展览",
    year: "Année",
    exhibition: "Exposition",
    venue: "Lieu",
    city: "Ville",
    type: "Type",
    solo: "Solo",
    duo: "Duo",
    group: "Collectif",
    careerTimeline: "Chronologie professionnelle｜职业时间轴",
    selectedWorks: "Œuvres sélectionnées｜作品",
    collectionInquiry: "Collection inquiry · 收藏咨询",
    collectionNote:
      "对该艺术家的作品有收藏意向 · Demande de collection pour cet artiste",
    collectionLink: "Demander · 咨询收藏",
    professionalReputation: "Réputation professionnelle｜职业声誉",
    galleryRecognition: "Reconnaissance des galeries · 画廊认可",
    collectorRecognition: "Reconnaissance des collectionneurs · 藏家认可",
    curatorMediaRecognition:
      "Reconnaissance curateurs / médias · 策展人与媒体认可",
    publicResonance: "Résonance publique · 公众共鸣",
  },
  en: {
    passport: "Artist Passport",
    navArtist: "Artists",
    navWorks: "Works",
    navExhibitions: "Exhibitions",
    birthYear: "Birth Year",
    birthplace: "Birthplace",
    currentCity: "Current City",
    nationality: "Nationality",
    practice: "Practice",
    representedBy: "Represented By",
    education: "Education",
    representation: "Representation",
    since: "Since",
    whyChinaFrance: "Why China / Why France",
    whyChina: "Why China",
    whyFrance: "Why France",
    collectionQuestions: "Questions · Zhen Collection Paris",
    hopeToLeave: "What I Hope to Be Remembered For",
    china: "China",
    france: "France",
    artistStatement: "Artist Statement",
    exhibitions: "Exhibitions",
    year: "Year",
    exhibition: "Exhibition",
    venue: "Venue",
    city: "City",
    type: "Type",
    solo: "Solo",
    duo: "Duo",
    group: "Group",
    careerTimeline: "Career Timeline",
    selectedWorks: "Selected Works",
    collectionInquiry: "Collection Inquiry",
    collectionNote: "Interested in collecting works by this artist",
    collectionLink: "Inquire",
    professionalReputation: "Professional Reputation",
    galleryRecognition: "Gallery Recognition",
    collectorRecognition: "Collector Recognition",
    curatorMediaRecognition: "Curator / Media Recognition",
    publicResonance: "Public Resonance",
  },
};

const passportType = {
  meta: "text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400",
  metaPlain: "text-[11px] tabular-nums tracking-[0.1em] text-stone-400",
  caption: "text-xs tracking-[0.08em] text-stone-400",
  body: "text-sm leading-[1.95] text-stone-600 md:text-base",
  bodyStrong: "text-sm leading-[1.9] text-stone-800 md:text-base",
  prose: "text-sm leading-[2] text-stone-600 md:text-base",
  proseWide: "text-sm leading-[2] text-stone-600 md:text-base md:leading-[2.05]",
  heroPassport:
    "text-sm font-medium uppercase tracking-[0.15em] text-stone-400 md:text-base",
  heroName:
    "text-3xl font-light leading-tight tracking-tight text-stone-900 md:text-4xl lg:text-5xl",
  heroTagline: "text-sm leading-relaxed text-stone-600 md:text-base",
  heroValue: "text-sm text-stone-800 md:text-base",
  sectionTitle:
    "mt-2 text-xl font-light tracking-tight text-stone-900 md:text-2xl",
  subsectionTitle:
    "text-lg font-light tracking-tight text-stone-900 md:text-xl",
  listTitle: "text-sm font-medium text-stone-900 md:text-base",
  listMeta: "text-sm text-stone-500",
  artworkTitle: "text-sm font-medium text-stone-900 md:text-base",
  artworkMeta: "text-sm text-stone-500",
  tableHead: "text-[11px] uppercase tracking-[0.15em] text-stone-400",
  tableYear: "text-sm tabular-nums text-stone-400",
  tableCell: "text-sm text-stone-600",
  tableCellStrong: "text-sm font-medium text-stone-800",
  quote: "text-sm leading-[1.9] text-stone-600 md:text-base",
} as const;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className={passportType.sectionTitle}>{children}</h2>;
}

function ProseParagraphs({
  text,
  className = passportType.proseWide,
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      {text
        .split(/\n\n+/)
        .filter(Boolean)
        .map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={className}>
            {paragraph}
          </p>
        ))}
    </>
  );
}

function exhibitionTypeLabel(
  type: "solo" | "duo" | "group",
  labels: { solo: string; duo: string; group: string },
): string {
  if (type === "solo") return labels.solo;
  if (type === "duo") return labels.duo;
  return labels.group;
}

function exhibitionTypeClass(type: "solo" | "duo" | "group"): string {
  if (type === "solo") return "text-stone-900";
  if (type === "duo") return "text-stone-700";
  return "text-stone-400";
}

function Divider() {
  return <hr className="border-stone-200" />;
}

const passportSections = [
  { id: "passport-artist", key: "artist" },
  { id: "passport-exhibitions", key: "exhibitions" },
  { id: "passport-works", key: "works" },
] as const;

type PassportSection = (typeof passportSections)[number]["key"];

function PassportSectionNav({
  labels,
}: {
  labels: { navArtist: string; navWorks: string; navExhibitions: string };
}) {
  const [activeSection, setActiveSection] = useState<PassportSection>("artist");

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 160;
      let next: PassportSection = "artist";

      for (const section of passportSections) {
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

  const items: { key: PassportSection; label: string; id: string }[] = [
    { key: "artist", label: labels.navArtist, id: "passport-artist" },
    { key: "works", label: labels.navWorks, id: "passport-works" },
    {
      key: "exhibitions",
      label: labels.navExhibitions,
      id: "passport-exhibitions",
    },
  ];

  return (
    <nav className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.15em] lg:flex">
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

type ArtistArtwork = ArtistProfile["artworks"][number];

function ArtworkCard({
  artwork,
  locale,
  articleClass = "",
}: {
  artwork: ArtistArtwork;
  locale: Locale;
  articleClass?: string;
}) {
  const layout = getArtworkDisplayLayout(artwork);
  const views =
    artwork.views ??
    ([
      {
        src: artwork.image,
        label: {
          zh: "",
          fr: "",
          en: "",
        },
        imageAspect: artwork.imageAspect,
      },
    ] as const);
  const showViewLabels = Boolean(
    artwork.views?.some(
      (view) => view.label && (view.label.zh || view.label.fr || view.label.en),
    ),
  );

  return (
    <article className={`group ${articleClass || layout.articleClass}`}>
      <div
        className={`grid gap-4 ${
          views.length > 1
            ? artwork.viewsLayout === "stack"
              ? ""
              : artwork.viewsLayout === "row"
                ? "grid-cols-2"
                : "sm:grid-cols-2"
            : ""
        }`}
      >
        {views.map((view) => {
          const viewLayout = getArtworkDisplayLayout({
            dimensions: artwork.dimensions,
            imageAspect: view.imageAspect ?? artwork.imageAspect,
            layoutPair: artwork.layoutPair,
            displayLayout: artwork.displayLayout,
            viewsLayout: artwork.viewsLayout,
            views: artwork.views,
          });

          return (
            <div key={view.src}>
              {showViewLabels && view.label ? (
                <p
                  className={`mb-2 text-center ${passportType.caption} uppercase tracking-[0.15em]`}
                >
                  {t(view.label, locale)}
                </p>
              ) : null}
              <div
                className="relative w-full overflow-hidden bg-stone-100"
                style={viewLayout.frameStyle}
              >
                <Image
                  src={view.src}
                  alt={
                    showViewLabels && view.label
                      ? `${t(artwork.title, locale)} · ${t(view.label, locale)}`
                      : t(artwork.title, locale)
                  }
                  fill
                  className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.01]"
                  sizes={viewLayout.imageSizes}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5">
        <h3 className={passportType.artworkTitle}>
          {t(artwork.title, locale)}
        </h3>
        {artwork.subtitle ? (
          <p className={`mt-1 ${passportType.artworkMeta} leading-relaxed`}>
            {t(artwork.subtitle, locale)}
          </p>
        ) : null}
        <p className={`mt-1 ${passportType.caption}`}>{artwork.year}</p>
        <p className={`mt-2 ${passportType.artworkMeta} leading-relaxed`}>
          {t(artwork.medium, locale)}
        </p>
        {artwork.dimensions ? (
          <p className={`mt-1 ${passportType.metaPlain}`}>
            {artwork.dimensions}
          </p>
        ) : null}
        {artwork.description ? (
          <div className={`mt-4 space-y-3 ${passportType.body}`}>
            {t(artwork.description, locale)
              .split(/\n\n+/)
              .filter(Boolean)
              .map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

function renderArtworkGridItems(
  artworks: ArtistArtwork[],
  locale: Locale,
): React.ReactNode[] {
  return artworks.flatMap((artwork, index, list) => {
    const next = list[index + 1];

    if (
      artwork.layoutPair?.role === "side" &&
      list[index - 1]?.layoutPair?.group === artwork.layoutPair.group
    ) {
      return [];
    }

    if (
      artwork.layoutPair?.role === "main" &&
      next?.layoutPair?.group === artwork.layoutPair.group &&
      next.layoutPair.role === "side"
    ) {
      const pairGridClass = artwork.layoutPair.equal
        ? "grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:col-span-2 sm:grid-cols-2"
        : "grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:col-span-2 sm:grid-cols-[minmax(0,1.45fr)_minmax(0,0.85fr)]";

      return [
        <div key={artwork.layoutPair.group} className={pairGridClass}>
          <ArtworkCard artwork={artwork} locale={locale} />
          <ArtworkCard artwork={next} locale={locale} />
        </div>,
      ];
    }

    return [
      <ArtworkCard key={artwork.id} artwork={artwork} locale={locale} />,
    ];
  });
}

export function ArtistPassport({
  artist,
  returnTo,
}: {
  artist: ArtistProfile;
  returnTo?: string;
}) {
  const [locale, setLocale] = useLocale();
  const l = labels[locale];
  const isFrenchArtist = artist.nationality.en === "French";
  const isChineseArtist = artist.nationality.en === "Chinese";
  const chinaText = t(artist.whyChinaFrance.china, locale);
  const franceText = t(artist.whyChinaFrance.france, locale);
  const hopeToLeaveText = t(artist.hopeToLeave, locale);
  const cultureQuestionLabel = isFrenchArtist ? l.whyChina : l.whyFrance;
  const cultureQuestionText = isFrenchArtist ? chinaText : franceText;
  const hasCollectionQuestions =
    Boolean(cultureQuestionText) || Boolean(hopeToLeaveText);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <SiteBrandLink className="shrink-0" />
          <div className="flex shrink-0 items-center gap-4 md:gap-6">
            <PassportSectionNav
              labels={{
                navArtist: l.navArtist,
                navWorks: l.navWorks,
                navExhibitions: l.navExhibitions,
              }}
            />
            <LanguageSwitcher locale={locale} onChange={setLocale} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 pt-8 md:px-10">
        <SiteTopLinks locale={locale} showAgreement />
      </div>

      {/* Hero */}
      <section
        id="passport-artist"
        className="scroll-mt-28 border-b border-stone-200 bg-white md:scroll-mt-32"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[640px]">
            <Image
              src={artist.portrait}
              alt={t(artist.name, locale)}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20">
            <p className={passportType.heroPassport}>{l.passport}</p>
            <h1 className={`mt-4 ${passportType.heroName}`}>
              {t(artist.name, locale)}
            </h1>
            <p className={`mt-8 max-w-md ${passportType.heroTagline}`}>
              {t(artist.tagline, locale)}
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <dt className={passportType.meta}>{l.birthYear}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {artist.birthYear}
                </dd>
              </div>
              <div>
                <dt className={passportType.meta}>{l.birthplace}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(artist.birthplace, locale)}
                </dd>
              </div>
              <div>
                <dt className={passportType.meta}>{l.currentCity}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(artist.currentCity, locale)}
                </dd>
              </div>
              <div>
                <dt className={passportType.meta}>{l.nationality}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(artist.nationality, locale)}
                </dd>
              </div>
              <div>
                <dt className={passportType.meta}>{l.practice}</dt>
                <dd className={`mt-1 ${passportType.heroValue}`}>
                  {t(artist.practice, locale)}
                </dd>
              </div>
              {t(artist.representedBy, locale) ? (
                <div className="col-span-2">
                  <dt className={passportType.meta}>{l.representedBy}</dt>
                  <dd
                    className={`mt-1 ${passportType.heroValue} leading-relaxed`}
                  >
                    {t(artist.representedBy, locale)}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </div>
      </section>

      {/* Education · Representation */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <SectionTitle>{l.education}</SectionTitle>
            <ul className="mt-8 space-y-6">
              {artist.education.map((item) => (
                <li key={`${item.year}-${t(item.institution, "fr")}`}>
                  <p className={passportType.metaPlain}>{item.year}</p>
                  <p className={`mt-1 ${passportType.listTitle}`}>
                    {t(item.institution, locale)}
                  </p>
                  <p className={`mt-0.5 ${passportType.listMeta}`}>
                    {t(item.degree, locale)} · {t(item.city, locale)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle>{l.representation}</SectionTitle>
            <ul className="mt-8 space-y-6">
              {artist.galleries.map((gallery) => (
                <li key={gallery.name}>
                  <p className={passportType.listTitle}>{gallery.name}</p>
                  <p className={`mt-0.5 ${passportType.listMeta}`}>
                    {t(gallery.city, locale)} · {t(gallery.role, locale)}
                  </p>
                  <p className={`mt-0.5 ${passportType.metaPlain}`}>
                    {l.since} {gallery.since}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Zhen Collection Paris · questions */}
      {(isFrenchArtist || isChineseArtist) && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionTitle>{l.collectionQuestions}</SectionTitle>
          {hasCollectionQuestions ? (
            <div className="mt-10 max-w-3xl space-y-12 border-l border-stone-200 pl-6 md:pl-8">
              <div>
                <p className={passportType.meta}>{cultureQuestionLabel}</p>
                {cultureQuestionText ? (
                  <p className={`mt-4 ${passportType.bodyStrong}`}>
                    {cultureQuestionText}
                  </p>
                ) : null}
              </div>
              <div>
                <p className={passportType.meta}>{l.hopeToLeave}</p>
                {hopeToLeaveText ? (
                  <div className="mt-4 space-y-4">
                    <ProseParagraphs text={hopeToLeaveText} />
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </section>
      )}

      {!isFrenchArtist && !isChineseArtist && (chinaText || franceText) ? (
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <SectionTitle>{l.whyChinaFrance}</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {chinaText ? (
              <blockquote className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-stone-300">
                <p className={passportType.meta}>{l.china}</p>
                <p className={`mt-4 ${passportType.bodyStrong}`}>{chinaText}</p>
              </blockquote>
            ) : null}
            {franceText ? (
              <blockquote className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-stone-300">
                <p className={passportType.meta}>{l.france}</p>
                <p className={`mt-4 ${passportType.bodyStrong}`}>
                  {franceText}
                </p>
              </blockquote>
            ) : null}
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Artist Statement */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.artistStatement}</SectionTitle>
        <div className="mt-10 max-w-3xl space-y-6">
          <ProseParagraphs text={t(artist.artistStatement, locale)} />
          {artist.introVideo ? (
            <div id="passport-intro-video" className="pt-6">
              <video
                src={artist.introVideo}
                controls
                playsInline
                preload="metadata"
                poster={artist.introVideoPoster ?? artist.portrait}
                className="aspect-video w-full bg-stone-900"
                aria-label={t(artist.name, locale)}
              />
            </div>
          ) : null}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Exhibitions */}
      <section
        id="passport-exhibitions"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 md:scroll-mt-32 md:px-10"
      >
        <SectionTitle>{l.exhibitions}</SectionTitle>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className={`border-b border-stone-200 ${passportType.tableHead}`}>
                <th className="pb-4 pr-8 font-medium">{l.year}</th>
                <th className="pb-4 pr-8 font-medium">{l.exhibition}</th>
                <th className="pb-4 pr-8 font-medium">{l.venue}</th>
                <th className="pb-4 pr-8 font-medium">{l.city}</th>
                <th className="pb-4 font-medium">{l.type}</th>
              </tr>
            </thead>
            <tbody>
              {artist.exhibitions.map((exhibition) => (
                <tr
                  key={`${exhibition.year}-${t(exhibition.title, "fr")}`}
                  className="border-b border-stone-100"
                >
                  <td className={`py-5 pr-8 ${passportType.tableYear}`}>
                    {exhibition.year}
                  </td>
                  <td className={`py-5 pr-8 ${passportType.tableCellStrong}`}>
                    {t(exhibition.title, locale)}
                  </td>
                  <td className={`py-5 pr-8 ${passportType.tableCell}`}>
                    {exhibition.venue}
                  </td>
                  <td className={`py-5 pr-8 ${passportType.tableCell}`}>
                    {t(exhibition.city, locale)}
                  </td>
                  <td className="py-5">
                    <span
                      className={`inline-block ${passportType.metaPlain} uppercase ${exhibitionTypeClass(exhibition.type)}`}
                    >
                      {exhibitionTypeLabel(exhibition.type, l)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Career Timeline */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.careerTimeline}</SectionTitle>
        <ol className="relative mt-12 border-l border-stone-200 pl-8 md:pl-10">
          {artist.careerTimeline.map((item, index) => (
            <li
              key={`${item.year}-${index}`}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[calc(2rem+0.5px)] top-1.5 h-2 w-2 rounded-full border border-stone-300 bg-white md:-left-[calc(2.5rem+0.5px)]" />
              <p className={`${passportType.metaPlain} uppercase`}>
                {item.year}
              </p>
              <h3 className={`mt-2 ${passportType.listTitle}`}>
                {t(item.title, locale)}
              </h3>
              <p className={`mt-2 max-w-2xl ${passportType.body}`}>
                {t(item.description, locale)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Selected Works */}
      <section
        id="passport-works"
        className="mx-auto max-w-7xl scroll-mt-28 px-6 py-20 md:scroll-mt-32 md:px-10"
      >
        <SectionTitle>{l.selectedWorks}</SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {(() => {
            const renderedSeries = new Set<string>();
            const nodes: React.ReactNode[] = [];

            for (const artwork of artist.artworks) {
              if (artwork.seriesId) {
                if (renderedSeries.has(artwork.seriesId)) continue;
                renderedSeries.add(artwork.seriesId);

                const series = artist.series?.find(
                  (item) => item.id === artwork.seriesId,
                );
                const seriesArtworks = artist.artworks.filter(
                  (item) => item.seriesId === artwork.seriesId,
                );

                nodes.push(
                  <div
                    key={`series-${artwork.seriesId}`}
                    className="sm:col-span-2"
                  >
                    {series ? (
                      <div className="max-w-3xl border-l border-stone-200 pl-6 md:pl-8">
                        <h3 className={passportType.subsectionTitle}>
                          {t(series.title, locale)}
                        </h3>
                        {series.period ? (
                          <p className={`mt-2 ${passportType.metaPlain} uppercase`}>
                            {series.period}
                          </p>
                        ) : null}
                        <div className="mt-6 space-y-4">
                          <ProseParagraphs
                            text={t(series.intro, locale)}
                            className={passportType.prose}
                          />
                        </div>
                      </div>
                    ) : null}
                    <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
                      {renderArtworkGridItems(seriesArtworks, locale)}
                    </div>
                  </div>,
                );
                continue;
              }

              nodes.push(...renderArtworkGridItems([artwork], locale));
            }

            return nodes;
          })()}
        </div>

        <div className="mt-16 border border-stone-200 bg-stone-50/30 px-6 py-10 text-center md:px-10">
          <p className={`${passportType.meta} tracking-[0.15em]`}>
            {l.collectionInquiry}
          </p>
          <p className={`mx-auto mt-4 max-w-md ${passportType.body}`}>
            {l.collectionNote}
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href={`/collection?artist=${artist.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-2.5 text-xs font-medium tracking-[0.12em] text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
            >
              {l.collectionLink}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Professional Reputation */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.professionalReputation}</SectionTitle>

        <div className="mt-16 space-y-20">
          <div>
            <h3 className={passportType.meta}>{l.galleryRecognition}</h3>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {artist.professionalReputation.galleryRecognition.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-sm border border-stone-200 bg-white p-8"
                >
                  <blockquote className={passportType.quote}>
                    「{t(item.quote, locale)}」
                  </blockquote>
                  <figcaption className="mt-6 border-t border-stone-100 pt-4">
                    <p className={passportType.listTitle}>{item.name}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div>
            <h3 className={passportType.meta}>{l.collectorRecognition}</h3>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {artist.professionalReputation.collectorRecognition.map(
                (item) => (
                  <figure
                    key={item.name}
                    className="rounded-sm border border-stone-200 bg-white p-8"
                  >
                    <blockquote className={passportType.quote}>
                      「{t(item.quote, locale)}」
                    </blockquote>
                    <figcaption className="mt-6 border-t border-stone-100 pt-4">
                      <p className={passportType.listTitle}>{item.name}</p>
                      <p className={`mt-0.5 ${passportType.metaPlain}`}>
                        {t(item.title, locale)}
                      </p>
                    </figcaption>
                  </figure>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className={passportType.meta}>{l.curatorMediaRecognition}</h3>
            <div className="mt-8 space-y-6">
              {artist.professionalReputation.curatorMediaRecognition.map(
                (item) => (
                  <figure
                    key={t(item.source, "fr")}
                    className="flex flex-col gap-4 border-l-2 border-stone-200 pl-6 md:flex-row md:items-start md:gap-12"
                  >
                    <p
                      className={`shrink-0 md:w-36 ${passportType.meta} tracking-[0.12em]`}
                    >
                      {t(item.source, locale)}
                    </p>
                    <blockquote className={passportType.quote}>
                      {t(item.quote, locale)}
                    </blockquote>
                  </figure>
                ),
              )}
            </div>
          </div>

          {artist.professionalReputation.publicResonance.length > 0 ? (
            <div>
              <h3 className={passportType.meta}>{l.publicResonance}</h3>
              <div className="mt-8 space-y-6">
                {artist.professionalReputation.publicResonance.map((item) => (
                  <figure
                    key={t(item.source, "fr")}
                    className="flex flex-col gap-4 border-l-2 border-stone-200 pl-6 md:flex-row md:items-start md:gap-12"
                  >
                    <p
                      className={`shrink-0 md:w-36 ${passportType.meta} tracking-[0.12em]`}
                    >
                      {t(item.source, locale)}
                    </p>
                    <blockquote
                      className={`whitespace-pre-line ${passportType.quote}`}
                    >
                      {t(item.quote, locale)}
                    </blockquote>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6">
        <PageBottomNav locale={locale} backHref={returnTo ?? "/"} />
      </div>

      <SiteFooter wide />
    </div>
  );
}
