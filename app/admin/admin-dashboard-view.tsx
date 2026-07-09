"use client";

import Link from "next/link";
import { AdminPageHeader } from "@/app/components/admin-data-table";
import { getAdminCounts } from "@/app/lib/admin-data";
import { getAdminNavLabels } from "@/app/lib/admin-nav";
import { useLocale } from "@/app/lib/use-locale";

const dashboardLabels = {
  zh: {
    title: "Tableau de bord · 控制台",
    description:
      "巴黎臻藏平台数据概览 — 艺术家、画廊、作品、藏家与成员账号的集中管理入口。",
    stats: {
      artists: "Artistes · 艺术家",
      galleries: "Galeries · 画廊",
      artworks: "Œuvres · 作品",
      critics: "Commentateurs · 评论家",
      collectors: "Collectionneurs · 藏家",
      members: "Membres · 成员",
      exhibitions: "Expositions · 展览",
      passports: "Passeports · 作品护照",
      holdings: "Entrées collection · 藏品记录",
      unreadMessages: "Messages non lus · 未读消息",
    },
  },
  fr: {
    title: "Tableau de bord",
    description:
      "Vue d'ensemble de la plateforme Zhen Collection Paris — accès centralisé aux entités et contenus.",
    stats: {
      artists: "Artistes · 艺术家",
      galleries: "Galeries · 画廊",
      artworks: "Œuvres · 作品",
      critics: "Commentateurs · 评论家",
      collectors: "Collectionneurs · 藏家",
      members: "Membres · 成员",
      exhibitions: "Expositions · 展览",
      passports: "Passeports · 作品护照",
      holdings: "Entrées collection · 藏品记录",
      unreadMessages: "Messages non lus · 未读消息",
    },
  },
  en: {
    title: "Dashboard",
    description:
      "Overview of the Zhen Collection Paris platform — centralized access to entities and content.",
    stats: {
      artists: "Artists",
      galleries: "Galleries",
      artworks: "Artworks",
      critics: "Critics",
      collectors: "Collectors",
      members: "Members",
      exhibitions: "Exhibitions",
      passports: "Artwork passports",
      holdings: "Collection entries",
      unreadMessages: "Unread messages",
    },
  },
};

export function AdminDashboardView() {
  const [locale] = useLocale();
  const l = dashboardLabels[locale];
  const nav = getAdminNavLabels(locale);
  const counts = getAdminCounts();

  const statCards = [
    { label: l.stats.artists, value: counts.artists, href: "/admin/artists" },
    { label: l.stats.galleries, value: counts.galleries, href: "/admin/galleries" },
    { label: l.stats.artworks, value: counts.artworks, href: "/admin/artworks" },
    { label: l.stats.critics, value: counts.critics, href: "/admin/critics" },
    { label: l.stats.collectors, value: counts.collectors, href: "/admin/collectors" },
    { label: l.stats.members, value: counts.members, href: "/admin/members" },
    { label: l.stats.exhibitions, value: counts.exhibitions, href: "/admin/exhibitions" },
    { label: l.stats.passports, value: counts.passports, href: "/admin/passports" },
    { label: l.stats.holdings, value: counts.holdings, href: "/admin/collectors" },
    {
      label: l.stats.unreadMessages,
      value: counts.unreadMessages,
      href: "/galerie?section=receivedMessages",
    },
  ];

  return (
    <div>
      <AdminPageHeader title={l.title} description={l.description} />

      <section aria-labelledby="admin-stats-heading">
        <h2 id="admin-stats-heading" className="sr-only">
          {nav.overviewSection}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {statCards.map((card) => (
            <Link
              key={card.href + card.label}
              href={card.href}
              className="group rounded-sm border border-stone-200 px-4 py-5 transition-colors hover:border-stone-400 hover:bg-stone-50/50"
            >
              <p className="text-[10px] uppercase tracking-[0.12em] text-stone-400">
                {card.label}
              </p>
              <p className="mt-3 text-2xl font-medium text-stone-900">{card.value}</p>
              <p className="mt-2 text-[11px] text-stone-400 transition-colors group-hover:text-stone-600">
                →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
