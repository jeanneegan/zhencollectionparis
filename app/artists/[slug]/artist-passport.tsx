"use client";

import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { SiteBrandLink } from "@/app/components/site-brand-link";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteNav } from "@/app/components/site-nav";
import { useLocale } from "@/app/lib/use-locale";
import { type ArtistProfile, type Locale, t } from "./data";

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
    china: string;
    france: string;
    whyCreate: string;
    philosophy: string;
    exhibitions: string;
    year: string;
    exhibition: string;
    venue: string;
    city: string;
    type: string;
    solo: string;
    group: string;
    careerTimeline: string;
    conversation: string;
    sharedQuestion: string;
    artistAnswer: string;
    publicQuestions: string;
    openQuestion: string;
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
    china: "中国",
    france: "法国",
    whyCreate: "Pourquoi créer ?｜为什么创作？",
    philosophy: "Philosophie artistique｜创作理念",
    exhibitions: "Expositions｜展览",
    year: "年份",
    exhibition: "展览",
    venue: "场馆",
    city: "城市",
    type: "类型",
    solo: "个展",
    group: "群展",
    careerTimeline: "Chronologie professionnelle｜职业时间轴",
    conversation: "Conversation Zhen Collection · 巴黎臻藏对话",
    sharedQuestion: "共同问题",
    artistAnswer: "艺术家回答",
    publicQuestions: "公众开放问题",
    openQuestion: "开放提问",
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
    china: "Chine",
    france: "France",
    whyCreate: "Pourquoi créer ?｜为什么创作？",
    philosophy: "Philosophie artistique｜创作理念",
    exhibitions: "Expositions｜展览",
    year: "Année",
    exhibition: "Exposition",
    venue: "Lieu",
    city: "Ville",
    type: "Type",
    solo: "Solo",
    group: "Collectif",
    careerTimeline: "Chronologie professionnelle｜职业时间轴",
    conversation: "Conversation Zhen Collection · 巴黎臻藏对话",
    sharedQuestion: "Question commune",
    artistAnswer: "Réponse de l'artiste",
    publicQuestions: "Questions ouvertes du public",
    openQuestion: "Question ouverte",
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
    china: "China",
    france: "France",
    whyCreate: "Why Create",
    philosophy: "Artistic Philosophy",
    exhibitions: "Exhibitions",
    year: "Year",
    exhibition: "Exhibition",
    venue: "Venue",
    city: "City",
    type: "Type",
    solo: "Solo",
    group: "Group",
    careerTimeline: "Career Timeline",
    conversation: "Conversation · Zhen Collection Paris",
    sharedQuestion: "Shared Question",
    artistAnswer: "Artist's Answer",
    publicQuestions: "Open Public Questions",
    openQuestion: "Open Question",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-2 text-2xl font-light tracking-tight text-stone-900 md:text-3xl">
      {children}
    </h2>
  );
}

function Divider() {
  return <hr className="border-stone-200" />;
}

export function ArtistPassport({ artist }: { artist: ArtistProfile }) {
  const [locale, setLocale] = useLocale();
  const l = labels[locale];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-10">
          <SiteBrandLink className="shrink-0" />
          <div className="flex shrink-0 items-center gap-4 md:gap-6">
            <nav className="hidden gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 lg:flex">
              <span className="text-stone-900">{l.navArtist}</span>
              <span>{l.navWorks}</span>
              <span>{l.navExhibitions}</span>
            </nav>
            <LanguageSwitcher locale={locale} onChange={setLocale} />
          </div>
        </div>
        <SiteNav wide />
      </header>

      {/* Hero */}
      <section className="border-b border-stone-200 bg-white">
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
            <SectionLabel>{l.passport}</SectionLabel>
            <h1 className="mt-4 text-4xl font-light leading-tight tracking-tight text-stone-900 md:text-5xl lg:text-6xl">
              {t(artist.name, locale)}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-stone-600">
              {t(artist.tagline, locale)}
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
                  {l.birthYear}
                </dt>
                <dd className="mt-1 text-base text-stone-800">
                  {artist.birthYear}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
                  {l.birthplace}
                </dt>
                <dd className="mt-1 text-base text-stone-800">
                  {t(artist.birthplace, locale)}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
                  {l.currentCity}
                </dt>
                <dd className="mt-1 text-base text-stone-800">
                  {t(artist.currentCity, locale)}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
                  {l.nationality}
                </dt>
                <dd className="mt-1 text-base text-stone-800">
                  {t(artist.nationality, locale)}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
                  {l.practice}
                </dt>
                <dd className="mt-1 text-base text-stone-800">
                  {t(artist.practice, locale)}
                </dd>
              </div>
              <div className="col-span-2">
                <dt className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
                  {l.representedBy}
                </dt>
                <dd className="mt-1 text-base leading-relaxed text-stone-800">
                  {artist.representedBy}
                </dd>
              </div>
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
                  <p className="text-[11px] tabular-nums text-stone-400">
                    {item.year}
                  </p>
                  <p className="mt-1 text-sm font-medium text-stone-800">
                    {t(item.institution, locale)}
                  </p>
                  <p className="mt-0.5 text-sm text-stone-500">
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
                  <p className="text-sm font-medium text-stone-800">
                    {gallery.name}
                  </p>
                  <p className="mt-0.5 text-sm text-stone-500">
                    {t(gallery.city, locale)} · {t(gallery.role, locale)}
                  </p>
                  <p className="mt-0.5 text-[11px] text-stone-400">
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

      {/* Why China / Why France */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.whyChinaFrance}</SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <blockquote className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-stone-300">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              {l.china}
            </p>
            <p className="mt-4 text-base leading-[1.9] text-stone-700">
              {t(artist.whyChinaFrance.china, locale)}
            </p>
          </blockquote>
          <blockquote className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-stone-300">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              {l.france}
            </p>
            <p className="mt-4 text-base leading-[1.9] text-stone-700">
              {t(artist.whyChinaFrance.france, locale)}
            </p>
          </blockquote>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Why Create */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.whyCreate}</SectionTitle>
        <p className="mt-10 max-w-3xl text-lg leading-[2] text-stone-600 md:text-xl">
          {t(artist.whyCreate, locale)}
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.philosophy}</SectionTitle>
        <p className="mt-10 max-w-3xl text-lg leading-[2] text-stone-600 md:text-xl">
          {t(artist.philosophy, locale)}
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Exhibitions */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.exhibitions}</SectionTitle>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-stone-200 text-[11px] uppercase tracking-[0.15em] text-stone-400">
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
                  <td className="py-5 pr-8 tabular-nums text-sm text-stone-400">
                    {exhibition.year}
                  </td>
                  <td className="py-5 pr-8 text-sm font-medium text-stone-800">
                    {t(exhibition.title, locale)}
                  </td>
                  <td className="py-5 pr-8 text-sm text-stone-600">
                    {exhibition.venue}
                  </td>
                  <td className="py-5 pr-8 text-sm text-stone-600">
                    {t(exhibition.city, locale)}
                  </td>
                  <td className="py-5">
                    <span
                      className={`inline-block text-[11px] uppercase tracking-[0.1em] ${
                        exhibition.type === "solo"
                          ? "text-stone-900"
                          : "text-stone-400"
                      }`}
                    >
                      {exhibition.type === "solo" ? l.solo : l.group}
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
              <p className="text-[11px] tabular-nums uppercase tracking-[0.15em] text-stone-400">
                {item.year}
              </p>
              <h3 className="mt-2 text-base font-medium text-stone-900">
                {t(item.title, locale)}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-600">
                {t(item.description, locale)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Conversation */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.conversation}</SectionTitle>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-sm border border-stone-200 bg-white p-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              {l.sharedQuestion}
            </p>
            <p className="mt-4 text-lg font-light leading-relaxed text-stone-800">
              {t(artist.conversation.sharedQuestion, locale)}
            </p>
          </div>

          <div className="rounded-sm border border-stone-200 bg-stone-900 p-8 text-white">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              {l.artistAnswer}
            </p>
            <p className="mt-4 text-base leading-[1.9] text-stone-200">
              {t(artist.conversation.artistAnswer, locale)}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
            {l.publicQuestions}
          </p>
          <ul className="mt-6 divide-y divide-stone-200 border-t border-stone-200">
            {artist.conversation.publicQuestions.map((item) => (
              <li
                key={item.author}
                className="flex flex-col gap-3 py-6 md:flex-row md:items-start md:gap-12"
              >
                <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-stone-400 md:w-40">
                  {item.author}
                </p>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-stone-300">
                    {l.openQuestion}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-stone-700">
                    {t(item.question, locale)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Divider />
      </div>

      {/* Selected Works */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <SectionTitle>{l.selectedWorks}</SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {artist.artworks.map((artwork) => (
            <article key={artwork.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-stone-200">
                <Image
                  src={artwork.image}
                  alt={t(artwork.title, locale)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-base font-medium text-stone-900">
                  {t(artwork.title, locale)}
                </h3>
                <p className="mt-1 text-sm text-stone-400">{artwork.year}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">
                  {t(artwork.medium, locale)}
                </p>
                <p className="mt-1 text-[11px] text-stone-400">
                  {artwork.dimensions}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border border-stone-200 bg-stone-50/30 px-6 py-10 text-center md:px-10">
          <p className="text-[11px] font-medium tracking-[0.15em] text-stone-400">
            {l.collectionInquiry}
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-[1.9] text-stone-600">
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
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              {l.galleryRecognition}
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {artist.professionalReputation.galleryRecognition.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-sm border border-stone-200 bg-white p-8"
                >
                  <blockquote className="text-base leading-[1.85] text-stone-600">
                    「{t(item.quote, locale)}」
                  </blockquote>
                  <figcaption className="mt-6 border-t border-stone-100 pt-4">
                    <p className="text-sm font-medium text-stone-800">
                      {item.name}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              {l.collectorRecognition}
            </h3>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {artist.professionalReputation.collectorRecognition.map(
                (item) => (
                  <figure
                    key={item.name}
                    className="rounded-sm border border-stone-200 bg-white p-8"
                  >
                    <blockquote className="text-base leading-[1.85] text-stone-600">
                      「{t(item.quote, locale)}」
                    </blockquote>
                    <figcaption className="mt-6 border-t border-stone-100 pt-4">
                      <p className="text-sm font-medium text-stone-800">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-stone-400">
                        {t(item.title, locale)}
                      </p>
                    </figcaption>
                  </figure>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              {l.curatorMediaRecognition}
            </h3>
            <div className="mt-8 space-y-6">
              {artist.professionalReputation.curatorMediaRecognition.map(
                (item) => (
                  <figure
                    key={t(item.source, "fr")}
                    className="flex flex-col gap-4 border-l-2 border-stone-200 pl-6 md:flex-row md:items-start md:gap-12"
                  >
                    <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-stone-400 md:w-36">
                      {t(item.source, locale)}
                    </p>
                    <blockquote className="text-base leading-[1.85] text-stone-600">
                      {t(item.quote, locale)}
                    </blockquote>
                  </figure>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              {l.publicResonance}
            </h3>
            <div className="mt-8 space-y-6">
              {artist.professionalReputation.publicResonance.map((item) => (
                <figure
                  key={t(item.source, "fr")}
                  className="flex flex-col gap-4 border-l-2 border-stone-200 pl-6 md:flex-row md:items-start md:gap-12"
                >
                  <p className="shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-stone-400 md:w-36">
                    {t(item.source, locale)}
                  </p>
                  <blockquote className="text-base leading-[1.85] text-stone-600">
                    {t(item.quote, locale)}
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter wide />
    </div>
  );
}
