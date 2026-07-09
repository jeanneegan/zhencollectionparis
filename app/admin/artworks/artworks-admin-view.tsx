"use client";

import {
  AdminBadge,
  AdminDataTable,
  AdminPageHeader,
  AdminTableLink,
} from "@/app/components/admin-data-table";
import { getAdminArtworkRows } from "@/app/lib/admin-data";
import { useLocale } from "@/app/lib/use-locale";

const labels = {
  zh: {
    title: "Œuvres · 作品列表",
    description: "全部艺术家作品索引，标注是否已开通作品护照。",
    empty: "暂无作品数据。",
    titleCol: "Titre · 标题",
    artist: "Artiste · 艺术家",
    year: "Année · 年份",
    medium: "Medium · 媒介",
    passport: "Passeport · 护照",
    yes: "Oui · 已开通",
    no: "Non · 未开通",
    action: "Voir · 查看",
  },
  fr: {
    title: "Œuvres",
    description: "Index de toutes les œuvres — avec statut de passeport.",
    empty: "Aucune œuvre.",
    titleCol: "Titre · 标题",
    artist: "Artiste · 艺术家",
    year: "Année · 年份",
    medium: "Medium · 媒介",
    passport: "Passeport · 护照",
    yes: "Oui · 已开通",
    no: "Non · 未开通",
    action: "Voir · 查看",
  },
  en: {
    title: "Artworks",
    description: "Index of all artworks with passport status.",
    empty: "No artworks.",
    titleCol: "Title",
    artist: "Artist",
    year: "Year",
    medium: "Medium",
    passport: "Passport",
    yes: "Yes",
    no: "No",
    action: "View",
  },
};

export function ArtworksAdminView() {
  const [locale] = useLocale();
  const l = labels[locale];
  const rows = getAdminArtworkRows(locale);

  return (
    <div>
      <AdminPageHeader title={l.title} description={l.description} count={rows.length} />
      <AdminDataTable
        emptyMessage={l.empty}
        rows={rows}
        columns={[
          { key: "title", header: l.titleCol, render: (row) => row.title },
          { key: "artist", header: l.artist, render: (row) => row.artistName },
          {
            key: "year",
            header: l.year,
            render: (row) => row.year,
            className: "w-20",
          },
          { key: "medium", header: l.medium, render: (row) => row.medium },
          {
            key: "passport",
            header: l.passport,
            render: (row) =>
              row.hasPassport ? (
                <AdminBadge tone="success">{l.yes}</AdminBadge>
              ) : (
                <AdminBadge>{l.no}</AdminBadge>
              ),
            className: "w-28",
          },
          {
            key: "action",
            header: l.action,
            render: (row) => (
              <AdminTableLink href={row.href}>
                {row.hasPassport ? `#${row.id}` : row.artistSlug}
              </AdminTableLink>
            ),
            className: "w-32",
          },
        ]}
      />
    </div>
  );
}
