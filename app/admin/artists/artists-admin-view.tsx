"use client";

import {
  AdminDataTable,
  AdminPageHeader,
  AdminTableLink,
} from "@/app/components/admin-data-table";
import { getAdminArtistRows } from "@/app/lib/admin-data";
import { useLocale } from "@/app/lib/use-locale";

const labels = {
  zh: {
    title: "Artistes · 艺术家列表",
    description: "平台收录的全部艺术家档案，含创作领域、所在城市与作品数量。",
    empty: "暂无艺术家数据。",
    name: "Nom · 姓名",
    practice: "Pratique · 领域",
    city: "Ville · 城市",
    artworks: "Œuvres · 作品",
    exhibitions: "Expositions · 展览",
    action: "Voir · 查看",
  },
  fr: {
    title: "Artistes",
    description:
      "Tous les profils artistes de la plateforme — pratique, ville et volume d'œuvres.",
    empty: "Aucun artiste.",
    name: "Nom · 姓名",
    practice: "Pratique · 领域",
    city: "Ville · 城市",
    artworks: "Œuvres · 作品",
    exhibitions: "Expositions · 展览",
    action: "Voir · 查看",
  },
  en: {
    title: "Artists",
    description: "All artist profiles on the platform.",
    empty: "No artists.",
    name: "Name",
    practice: "Practice",
    city: "City",
    artworks: "Artworks",
    exhibitions: "Exhibitions",
    action: "View",
  },
};

export function ArtistsAdminView() {
  const [locale] = useLocale();
  const l = labels[locale];
  const rows = getAdminArtistRows(locale);

  return (
    <div>
      <AdminPageHeader title={l.title} description={l.description} count={rows.length} />
      <AdminDataTable
        emptyMessage={l.empty}
        rows={rows}
        columns={[
          { key: "name", header: l.name, render: (row) => row.name },
          { key: "practice", header: l.practice, render: (row) => row.practice },
          { key: "city", header: l.city, render: (row) => row.city },
          {
            key: "artworks",
            header: l.artworks,
            render: (row) => row.artworkCount,
            className: "w-20",
          },
          {
            key: "exhibitions",
            header: l.exhibitions,
            render: (row) => row.exhibitionCount,
            className: "w-24",
          },
          {
            key: "action",
            header: l.action,
            render: (row) => <AdminTableLink href={row.href}>{row.slug}</AdminTableLink>,
            className: "w-40",
          },
        ]}
      />
    </div>
  );
}
