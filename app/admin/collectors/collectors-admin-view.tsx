"use client";

import {
  AdminBadge,
  AdminDataTable,
  AdminPageHeader,
  AdminTableLink,
} from "@/app/components/admin-data-table";
import { getAdminCollectorRows } from "@/app/lib/admin-data";
import { useLocale } from "@/app/lib/use-locale";

const labels = {
  zh: {
    title: "Collectionneurs · 藏家列表",
    description: "藏家成员及藏品记录、作品护照开通情况。",
    empty: "暂无藏家数据。",
    name: "Nom · 姓名",
    email: "E-mail · 邮箱",
    city: "Ville · 城市",
    since: "Depuis · 收藏起始",
    holdings: "Œuvres · 藏品",
    passports: "Passeports · 护照",
    action: "Espace · 空间",
  },
  fr: {
    title: "Collectionneurs",
    description: "Membres collectionneurs — holdings et passeports initiés.",
    empty: "Aucun collectionneur.",
    name: "Nom · 姓名",
    email: "E-mail · 邮箱",
    city: "Ville · 城市",
    since: "Depuis · 收藏起始",
    holdings: "Œuvres · 藏品",
    passports: "Passeports · 护照",
    action: "Espace · 空间",
  },
  en: {
    title: "Collectors",
    description: "Collector members — holdings and initiated passports.",
    empty: "No collectors.",
    name: "Name",
    email: "Email",
    city: "City",
    since: "Since",
    holdings: "Holdings",
    passports: "Passports",
    action: "Workspace",
  },
};

export function CollectorsAdminView() {
  const [locale] = useLocale();
  const l = labels[locale];
  const rows = getAdminCollectorRows(locale);

  return (
    <div>
      <AdminPageHeader title={l.title} description={l.description} count={rows.length} />
      <AdminDataTable
        emptyMessage={l.empty}
        rows={rows}
        columns={[
          { key: "name", header: l.name, render: (row) => row.name },
          {
            key: "email",
            header: l.email,
            render: (row) => (
              <span className="font-mono text-xs text-stone-600">{row.email}</span>
            ),
          },
          { key: "city", header: l.city, render: (row) => row.city },
          {
            key: "since",
            header: l.since,
            render: (row) => row.collectingSince,
            className: "w-24",
          },
          {
            key: "holdings",
            header: l.holdings,
            render: (row) => row.holdingCount,
            className: "w-20",
          },
          {
            key: "passports",
            header: l.passports,
            render: (row) =>
              row.passportCount > 0 ? (
                <AdminBadge tone="success">{row.passportCount}</AdminBadge>
              ) : (
                "—"
              ),
            className: "w-24",
          },
          {
            key: "action",
            header: l.action,
            render: (row) => (
              <AdminTableLink href={row.href}>Collectionneur</AdminTableLink>
            ),
            className: "w-32",
          },
        ]}
      />
    </div>
  );
}
