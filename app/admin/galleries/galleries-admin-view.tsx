"use client";

import {
  AdminBadge,
  AdminDataTable,
  AdminPageHeader,
  AdminTableLink,
} from "@/app/components/admin-data-table";
import { getAdminGalleryRows } from "@/app/lib/admin-data";
import { useLocale } from "@/app/lib/use-locale";

const labels = {
  zh: {
    title: "Galeries · 画廊列表",
    description: "合作画廊成员账号及代理/关注艺术家数量。",
    empty: "暂无画廊账号。",
    name: "Nom · 名称",
    email: "E-mail · 邮箱",
    represented: "Représentés · 代理",
    followed: "Suivis · 关注",
    messages: "Messages · 消息",
    action: "Espace · 空间",
  },
  fr: {
    title: "Galeries",
    description: "Comptes galerie partenaires et volume d'artistes représentés / suivis.",
    empty: "Aucune galerie.",
    name: "Nom · 名称",
    email: "E-mail · 邮箱",
    represented: "Représentés · 代理",
    followed: "Suivis · 关注",
    messages: "Messages · 消息",
    action: "Espace · 空间",
  },
  en: {
    title: "Galleries",
    description: "Partner gallery accounts and represented / followed artist counts.",
    empty: "No galleries.",
    name: "Name",
    email: "Email",
    represented: "Represented",
    followed: "Followed",
    messages: "Unread",
    action: "Workspace",
  },
};

export function GalleriesAdminView() {
  const [locale] = useLocale();
  const l = labels[locale];
  const rows = getAdminGalleryRows(locale);

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
          {
            key: "represented",
            header: l.represented,
            render: (row) => row.representedCount,
            className: "w-24",
          },
          {
            key: "followed",
            header: l.followed,
            render: (row) => row.followedCount,
            className: "w-20",
          },
          {
            key: "messages",
            header: l.messages,
            render: (row) =>
              row.unreadMessages > 0 ? (
                <AdminBadge tone="accent">{row.unreadMessages}</AdminBadge>
              ) : (
                "—"
              ),
            className: "w-24",
          },
          {
            key: "action",
            header: l.action,
            render: (row) => <AdminTableLink href={row.href}>Galerie</AdminTableLink>,
            className: "w-28",
          },
        ]}
      />
    </div>
  );
}
