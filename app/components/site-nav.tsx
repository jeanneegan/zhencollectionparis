"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSiteNavItems } from "./site-nav-config";

const items = getSiteNavItems();

export function SiteNav({ wide = false }: { wide?: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation principale"
      className="hidden border-t border-stone-200 bg-white/95 backdrop-blur-sm md:block"
    >
      <div
        className={`mx-auto grid grid-cols-3 px-6 ${
          wide ? "max-w-7xl md:px-10" : "max-w-3xl"
        }`}
      >
        {items.map(({ href, labelFr, labelZh, isDialogue, isActive }) => {
          const active = isActive(pathname);
          const mutedClass =
            isDialogue && !active
              ? "text-stone-400"
              : active
                ? "text-white/70"
                : "text-stone-400";

          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-12 flex-col items-center justify-center gap-0.5 px-2 transition-colors ${
                isDialogue
                  ? active
                    ? "bg-[#5a2323] text-white"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  : active
                    ? "bg-stone-900 text-white"
                    : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
              }`}
            >
              <span
                className={`text-center leading-tight tracking-wide ${
                  labelZh ? "text-[11px] font-medium" : "text-[10px] font-medium"
                }`}
              >
                {labelFr}
              </span>
              {labelZh ? (
                <span className={`text-[10px] tracking-wide ${mutedClass}`}>
                  {labelZh}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
