"use client";

import {
  AdminBadge,
  AdminDataTable,
  AdminPageHeader,
  AdminTableLink,
} from "@/app/components/admin-data-table";
import { getAdminMemberRows } from "@/app/lib/admin-data";
import { useLocale } from "@/app/lib/use-locale";

const labels = {
  zh: {
    title: "Membres · 成员账号",
    description: "全部测试成员账号及角色类型。",
    empty: "暂无成员账号。",
    name: "Nom · 姓名",
    email: "E-mail · 邮箱",
    type: "Rôle · 角色",
    role: "Type · 类型",
    action: "Espace · 空间",
  },
  fr: {
    title: "Membres",
    description: "Tous les comptes membres de démonstration et leurs rôles.",
    empty: "Aucun membre.",
    name: "Nom · 姓名",
    email: "E-mail · 邮箱",
    type: "Rôle · 角色",
    role: "Type · 类型",
    action: "Espace · 空间",
  },
  en: {
    title: "Member accounts",
    description: "All demo member accounts and their roles.",
    empty: "No members.",
    name: "Name",
    email: "Email",
    type: "Role label",
    role: "Type",
    action: "Workspace",
  },
};

const roleTone: Record<string, "neutral" | "accent" | "success"> = {
  super: "accent",
  gallery: "success",
  artist: "neutral",
  critic: "neutral",
  collector: "neutral",
};

export function MembersAdminView() {
  const [locale] = useLocale();
  const l = labels[locale];
  const rows = getAdminMemberRows(locale);

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
          { key: "type", header: l.type, render: (row) => row.type },
          {
            key: "role",
            header: l.role,
            render: (row) => (
              <AdminBadge tone={roleTone[row.role] ?? "neutral"}>{row.role}</AdminBadge>
            ),
            className: "w-28",
          },
          {
            key: "action",
            header: l.action,
            render: (row) => (
              <AdminTableLink href={row.homePath}>→</AdminTableLink>
            ),
            className: "w-20",
          },
        ]}
      />
    </div>
  );
}
