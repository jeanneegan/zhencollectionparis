"use client";

import {
  AdminDataTable,
  AdminPageHeader,
  AdminTableLink,
} from "@/app/components/admin-data-table";
import { getAdminPassportRows } from "@/app/lib/admin-data";
import { useLocale } from "@/app/lib/use-locale";

const labels = {
  zh: {
    title: "Passeports œuvre · 作品护照",
    description: "已由巴黎臻藏（ZCP）发起的作品护照列表。",
    empty: "暂无作品护照。",
    titleCol: "Titre · 标题",
    artist: "Artiste · 艺术家",
    year: "Année · 年份",
    id: "ID · 编号",
    action: "Passeport · 护照",
  },
  fr: {
    title: "Passeports œuvre",
    description: "Œuvres dont le passeport a été initié par Zhen Collection Paris.",
    empty: "Aucun passeport.",
    titleCol: "Titre · 标题",
    artist: "Artiste · 艺术家",
    year: "Année · 年份",
    id: "ID · 编号",
    action: "Passeport · 护照",
  },
  en: {
    title: "Artwork passports",
    description: "Works with passports initiated by Zhen Collection Paris.",
    empty: "No passports.",
    titleCol: "Title",
    artist: "Artist",
    year: "Year",
    id: "ID",
    action: "Passport",
  },
};

export function PassportsAdminView() {
  const [locale] = useLocale();
  const l = labels[locale];
  const rows = getAdminPassportRows(locale);

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
          {
            key: "id",
            header: l.id,
            render: (row) => (
              <span className="font-mono text-xs">
                {row.artistSlug}/{row.workId}
              </span>
            ),
            className: "w-40",
          },
          {
            key: "action",
            header: l.action,
            render: (row) => <AdminTableLink href={row.href}>→</AdminTableLink>,
            className: "w-24",
          },
        ]}
      />
    </div>
  );
}
