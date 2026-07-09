"use client";

import {
  AdminDataTable,
  AdminPageHeader,
  AdminTableLink,
} from "@/app/components/admin-data-table";
import { getAdminCriticRows } from "@/app/lib/admin-data";
import { useLocale } from "@/app/lib/use-locale";

const labels = {
  zh: {
    title: "Commentateurs · 评论家列表",
    description: "平台评论家档案及评论、文章数量。",
    empty: "暂无评论家数据。",
    name: "Nom · 姓名",
    city: "Ville · 城市",
    reviews: "Commentaires · 评论",
    articles: "Articles · 文章",
    action: "Archive · 档案",
  },
  fr: {
    title: "Commentateurs",
    description: "Profils critiques et volume de commentaires / articles.",
    empty: "Aucun commentateur.",
    name: "Nom · 姓名",
    city: "Ville · 城市",
    reviews: "Commentaires · 评论",
    articles: "Articles · 文章",
    action: "Archive · 档案",
  },
  en: {
    title: "Critics",
    description: "Critic profiles and review / article counts.",
    empty: "No critics.",
    name: "Name",
    city: "City",
    reviews: "Reviews",
    articles: "Articles",
    action: "Archive",
  },
};

export function CriticsAdminView() {
  const [locale] = useLocale();
  const l = labels[locale];
  const rows = getAdminCriticRows(locale);

  return (
    <div>
      <AdminPageHeader title={l.title} description={l.description} count={rows.length} />
      <AdminDataTable
        emptyMessage={l.empty}
        rows={rows}
        columns={[
          { key: "name", header: l.name, render: (row) => row.name },
          { key: "city", header: l.city, render: (row) => row.city },
          {
            key: "reviews",
            header: l.reviews,
            render: (row) => row.reviewCount,
            className: "w-24",
          },
          {
            key: "articles",
            header: l.articles,
            render: (row) => row.articleCount,
            className: "w-24",
          },
          {
            key: "action",
            header: l.action,
            render: (row) => <AdminTableLink href={row.href}>{row.slug}</AdminTableLink>,
            className: "w-36",
          },
        ]}
      />
    </div>
  );
}
