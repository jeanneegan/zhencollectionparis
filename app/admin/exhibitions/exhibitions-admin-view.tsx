"use client";

import {
  AdminDataTable,
  AdminPageHeader,
  AdminTableLink,
} from "@/app/components/admin-data-table";
import { getAdminExhibitionRows } from "@/app/lib/admin-data";
import { useLocale } from "@/app/lib/use-locale";

const labels = {
  zh: {
    title: "Expositions · 展览列表",
    description: "平台线上展览及关联艺术家、作品数量。",
    empty: "暂无展览数据。",
    titleCol: "Titre · 标题",
    artist: "Artiste · 艺术家",
    year: "Année · 年份",
    works: "Œuvres · 作品",
    action: "Voir · 查看",
  },
  fr: {
    title: "Expositions",
    description: "Expositions en ligne — artiste associé et nombre d'œuvres.",
    empty: "Aucune exposition.",
    titleCol: "Titre · 标题",
    artist: "Artiste · 艺术家",
    year: "Année · 年份",
    works: "Œuvres · 作品",
    action: "Voir · 查看",
  },
  en: {
    title: "Exhibitions",
    description: "Online exhibitions with associated artist and artwork counts.",
    empty: "No exhibitions.",
    titleCol: "Title",
    artist: "Artist",
    year: "Year",
    works: "Artworks",
    action: "View",
  },
};

export function ExhibitionsAdminView() {
  const [locale] = useLocale();
  const l = labels[locale];
  const rows = getAdminExhibitionRows(locale);

  return (
    <div>
      <AdminPageHeader title={l.title} description={l.description} count={rows.length} />
      <AdminDataTable
        emptyMessage={l.empty}
        rows={rows}
        columns={[
          { key: "title", header: l.titleCol, render: (row) => row.title },
          { key: "artist", header: l.artist, render: (row) => row.artist },
          {
            key: "year",
            header: l.year,
            render: (row) => row.year,
            className: "w-20",
          },
          {
            key: "works",
            header: l.works,
            render: (row) => row.workCount,
            className: "w-20",
          },
          {
            key: "action",
            header: l.action,
            render: (row) => <AdminTableLink href={row.href}>{row.slug}</AdminTableLink>,
            className: "w-48",
          },
        ]}
      />
    </div>
  );
}
