"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCurrentDialoguePath } from "@/app/dialogue/data";

const dialoguePath = getCurrentDialoguePath();

const items = [
  {
    href: "/artists/willy-le-nalbaut",
    label: "Willy",
    isDialogue: false,
    isActive: (path: string) => path === "/artists/willy-le-nalbaut",
  },
  {
    href: dialoguePath,
    label: "对话",
    isDialogue: true,
    isActive: (path: string) => path.startsWith("/dialogue"),
  },
  {
    href: "/artists/su-hong",
    label: "苏泓",
    isDialogue: false,
    isActive: (path: string) => path === "/artists/su-hong",
  },
] as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 backdrop-blur-sm md:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-3">
        {items.map(({ href, label, isDialogue, isActive }) => {
          const active = isActive(pathname);

          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-14 items-center justify-center px-2 text-xs font-medium tracking-wide transition-colors ${
                isDialogue
                  ? active
                    ? "bg-[#5a2323] text-white"
                    : "bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  : active
                    ? "bg-stone-900 text-white"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
