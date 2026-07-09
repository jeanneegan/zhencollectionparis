"use client";

import Link from "next/link";
import { AdminPageHeader } from "@/app/components/admin-data-table";

const notes = [
  {
    href: "/admin/notes/1",
    title: "笔记 1",
    description: "巴黎臻藏商业模式与共同体生态 — 八阶段商业模型、收入来源与核心定位。",
  },
  {
    href: "/admin/notes/2",
    title: "笔记 2",
    description: "逻辑统一与使命定位 — 四个核心问题、各方参与动机，以及「理解」作为平台中心。",
  },
];

export function NotesIndexView() {
  return (
    <div>
      <AdminPageHeader
        title="笔记"
        description="巴黎臻藏内部战略笔记 — 商业模式、共同体逻辑与使命定位。"
      />

      <ul className="grid gap-3 sm:grid-cols-2">
        {notes.map((note) => (
          <li key={note.href}>
            <Link
              href={note.href}
              className="group flex h-full flex-col rounded-sm border border-stone-200 px-5 py-5 transition-colors hover:border-stone-400 hover:bg-stone-50/50"
            >
              <h2 className="text-sm font-medium text-stone-900">{note.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-500">
                {note.description}
              </p>
              <p className="mt-4 text-[11px] text-stone-400 transition-colors group-hover:text-stone-600">
                →
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
