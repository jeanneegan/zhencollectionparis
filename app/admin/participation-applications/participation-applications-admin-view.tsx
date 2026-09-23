"use client";

import {
  AdminDataTable,
  AdminPageHeader,
  type AdminTableColumn,
} from "@/app/components/admin-data-table";
import type { Locale } from "@/app/artists/[slug]/data";
import type { DialogueParticipationApplication } from "@/app/lib/dialogue-applications-store";
import { useLocale } from "@/app/lib/use-locale";

const labels: Record<
  Locale,
  {
    title: string;
    description: string;
    empty: string;
    date: string;
    name: string;
    email: string;
    role: string;
    message: string;
    link: string;
    emailSent: string;
    yes: string;
    no: string;
  }
> = {
  zh: {
    title: "Candidatures dialogue · 对话报名",
    description:
      "来自 /participer 的报名；同时会尝试发往 contact@zhencollection.paris（需配置 Resend）。",
    empty: "暂无报名。",
    date: "Date · 日期",
    name: "Nom · 姓名",
    email: "Email · 邮箱",
    role: "Profil · 身份",
    message: "Message · 内容",
    link: "Lien · 链接",
    emailSent: "E-mail · 邮件",
    yes: "Oui · 已发",
    no: "Non · 未发",
  },
  fr: {
    title: "Candidatures dialogue · 对话报名",
    description:
      "Candidatures reçues via /participer ; copie envoyée à contact@zhencollection.paris si Resend est configuré.",
    empty: "Aucune candidature pour le moment.",
    date: "Date · 日期",
    name: "Nom · 姓名",
    email: "Email · 邮箱",
    role: "Profil · 身份",
    message: "Message · 内容",
    link: "Lien · 链接",
    emailSent: "E-mail · 邮件",
    yes: "Oui · 已发",
    no: "Non · 未发",
  },
  en: {
    title: "Dialogue applications",
    description:
      "Applications from /participer; a copy is emailed to contact@zhencollection.paris when Resend is configured.",
    empty: "No applications yet.",
    date: "Date",
    name: "Name",
    email: "Email",
    role: "Profile",
    message: "Message",
    link: "Link",
    emailSent: "Email sent",
    yes: "Yes",
    no: "No",
  },
};

function formatDate(isoDate: string, locale: Locale): string {
  const date = new Date(isoDate);
  if (locale === "zh") return date.toLocaleString("zh-CN");
  if (locale === "en") return date.toLocaleString("en-US");
  return date.toLocaleString("fr-FR");
}

type AdminRow = DialogueParticipationApplication & {
  displayDate: string;
};

export function ParticipationApplicationsAdminView({
  initialApplications,
}: {
  initialApplications: DialogueParticipationApplication[];
}) {
  const [locale] = useLocale();
  const l = labels[locale];

  const rows: AdminRow[] = initialApplications.map((application) => ({
    ...application,
    displayDate: formatDate(application.createdAt, locale),
  }));

  const columns: AdminTableColumn<AdminRow>[] = [
    {
      key: "date",
      header: l.date,
      className: "whitespace-nowrap",
      render: (row) => row.displayDate,
    },
    {
      key: "name",
      header: l.name,
      render: (row) => row.name,
    },
    {
      key: "email",
      header: l.email,
      render: (row) => (
        <a
          href={`mailto:${row.email}`}
          className="font-mono text-xs text-stone-600 underline decoration-stone-300"
        >
          {row.email}
        </a>
      ),
    },
    {
      key: "role",
      header: l.role,
      render: (row) => row.role,
    },
    {
      key: "message",
      header: l.message,
      render: (row) => (
        <p className="max-w-md whitespace-pre-wrap text-sm leading-relaxed text-stone-700">
          {row.message}
        </p>
      ),
    },
    {
      key: "link",
      header: l.link,
      render: (row) =>
        row.link ? (
          <a
            href={row.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-stone-600 underline decoration-stone-300"
          >
            {row.link}
          </a>
        ) : (
          "—"
        ),
    },
    {
      key: "emailSent",
      header: l.emailSent,
      render: (row) => (row.emailSentAt ? l.yes : l.no),
    },
  ];

  return (
    <div>
      <AdminPageHeader
        title={l.title}
        description={l.description}
        count={rows.length}
      />
      <AdminDataTable columns={columns} rows={rows} emptyMessage={l.empty} />
    </div>
  );
}
