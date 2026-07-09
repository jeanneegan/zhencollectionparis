"use client";

import Link from "next/link";

export type AdminTableColumn<T> = {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
  className?: string;
};

export function AdminPageHeader({
  title,
  description,
  count,
}: {
  title: string;
  description?: string;
  count?: number;
}) {
  return (
    <header className="mb-8 border-b border-stone-200 pb-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-xl font-medium tracking-[0.02em] text-stone-900">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-500">
              {description}
            </p>
          ) : null}
        </div>
        {count !== undefined ? (
          <p className="text-[11px] uppercase tracking-[0.15em] text-stone-400">
            {count}
          </p>
        ) : null}
      </div>
    </header>
  );
}

export function AdminDataTable<T extends object>({
  columns,
  rows,
  emptyMessage,
}: {
  columns: AdminTableColumn<T>[];
  rows: T[];
  emptyMessage: string;
}) {
  if (rows.length === 0) {
    return (
      <p className="rounded-sm border border-dashed border-stone-200 px-4 py-8 text-center text-sm text-stone-500">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-sm border border-stone-200">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-stone-200 bg-stone-50/80">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={`px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500 ${column.className ?? ""}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          {rows.map((row, index) => (
            <tr key={index} className="transition-colors hover:bg-stone-50/60">
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`px-4 py-3 align-top text-stone-700 ${column.className ?? ""}`}
                >
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function AdminTableLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-stone-900 underline decoration-stone-300 underline-offset-2 transition-colors hover:decoration-stone-900"
    >
      {children}
    </Link>
  );
}

export function AdminBadge({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent" | "success";
}) {
  const toneClass =
    tone === "accent"
      ? "bg-red-50 text-red-700"
      : tone === "success"
        ? "bg-emerald-50 text-emerald-700"
        : "bg-stone-100 text-stone-600";

  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] ${toneClass}`}
    >
      {children}
    </span>
  );
}
