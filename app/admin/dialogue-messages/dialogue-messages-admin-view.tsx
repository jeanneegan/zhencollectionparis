"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AdminDataTable,
  AdminPageHeader,
  type AdminTableColumn,
} from "@/app/components/admin-data-table";
import type { Locale } from "@/app/artists/[slug]/data";
import type { DialoguePublicMessage } from "@/app/lib/dialogue-messages-store";
import { useLocale } from "@/app/lib/use-locale";

const labels: Record<
  Locale,
  {
    title: string;
    description: string;
    empty: string;
    date: string;
    episode: string;
    name: string;
    message: string;
    actions: string;
    delete: string;
    confirmDelete: string;
    anonymous: string;
    deleting: string;
  }
> = {
  zh: {
    title: "Messages du public · 公众留言",
    description:
      "对话页收到的公众留言。删除后将从对话页隐藏，且不可恢复。",
    empty: "暂无留言。",
    date: "Date · 日期",
    episode: "Épisode · 期次",
    name: "Nom · 姓名",
    message: "Message · 留言",
    actions: "Actions · 操作",
    delete: "Supprimer · 删除",
    confirmDelete: "确定删除这条留言？",
    anonymous: "匿名",
    deleting: "Suppression… · 删除中…",
  },
  fr: {
    title: "Messages du public · 公众留言",
    description:
      "Messages reçus sur les pages de conversation. La suppression les retire de la page publique.",
    empty: "Aucun message pour le moment.",
    date: "Date · 日期",
    episode: "Épisode · 期次",
    name: "Nom · 姓名",
    message: "Message · 留言",
    actions: "Actions · 操作",
    delete: "Supprimer · 删除",
    confirmDelete: "Supprimer ce message ?",
    anonymous: "Anonyme · 匿名",
    deleting: "Suppression… · 删除中…",
  },
  en: {
    title: "Public messages",
    description:
      "Messages received on dialogue pages. Deleting removes them from the public page.",
    empty: "No messages yet.",
    date: "Date",
    episode: "Episode",
    name: "Name",
    message: "Message",
    actions: "Actions",
    delete: "Delete",
    confirmDelete: "Delete this message?",
    anonymous: "Anonymous",
    deleting: "Deleting…",
  },
};

function formatDate(isoDate: string, locale: Locale): string {
  const date = new Date(isoDate);

  if (locale === "zh") {
    return date.toLocaleString("zh-CN");
  }

  if (locale === "en") {
    return date.toLocaleString("en-US");
  }

  return date.toLocaleString("fr-FR");
}

type AdminRow = DialoguePublicMessage & {
  displayName: string;
  displayDate: string;
};

export function DialogueMessagesAdminView({
  initialMessages,
}: {
  initialMessages: DialoguePublicMessage[];
}) {
  const router = useRouter();
  const [locale] = useLocale();
  const l = labels[locale];
  const [messages, setMessages] = useState(initialMessages);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  async function handleDelete(id: string) {
    if (!window.confirm(l.confirmDelete)) {
      return;
    }

    setDeletingId(id);

    try {
      const response = await fetch(`/api/admin/dialogue-messages/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("delete-failed");
      }

      setMessages((current) => current.filter((message) => message.id !== id));
      router.refresh();
    } catch {
      window.alert(l.delete);
    } finally {
      setDeletingId(null);
    }
  }

  const rows: AdminRow[] = messages.map((message) => ({
    ...message,
    displayName: message.name?.trim() || l.anonymous,
    displayDate: formatDate(message.createdAt, locale),
  }));

  const columns: AdminTableColumn<AdminRow>[] = [
    {
      key: "date",
      header: l.date,
      className: "whitespace-nowrap",
      render: (row) => row.displayDate,
    },
    {
      key: "episode",
      header: l.episode,
      render: (row) => row.episodeSlug,
    },
    {
      key: "name",
      header: l.name,
      render: (row) => row.displayName,
    },
    {
      key: "message",
      header: l.message,
      render: (row) => (
        <p className="max-w-md whitespace-pre-wrap text-sm leading-relaxed text-stone-700">
          {row.body}
        </p>
      ),
    },
    {
      key: "actions",
      header: l.actions,
      className: "whitespace-nowrap",
      render: (row) => (
        <button
          type="button"
          onClick={() => handleDelete(row.id)}
          disabled={deletingId === row.id}
          className="text-xs text-red-700 underline decoration-red-200 underline-offset-2 transition-colors hover:decoration-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {deletingId === row.id ? l.deleting : l.delete}
        </button>
      ),
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
