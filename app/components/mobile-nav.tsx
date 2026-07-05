"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/artists/willy-le-nalbaut", label: "Willy", match: "/artists/willy-le-nalbaut" },
  { href: "/", label: "对话", match: "/" },
  { href: "/artists/su-hong", label: "苏泓", match: "/artists/su-hong" },
] as const;

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 backdrop-blur-sm md:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-3">
        {items.map(({ href, label, match }) => {
          const active = pathname === match;

          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-14 items-center justify-center px-2 text-xs font-medium tracking-wide transition-colors ${
                active
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
