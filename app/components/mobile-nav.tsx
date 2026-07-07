"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getSiteNavItems } from "./site-nav-config";
import { useIsAuthenticated } from "@/app/lib/use-is-authenticated";

const artistActiveClass = "bg-stone-900 text-white";
const dialogueActiveClass = "bg-[#5a2323] text-white";

const items = getSiteNavItems();

export function MobileNav() {
  const pathname = usePathname();
  const isAuthenticated = useIsAuthenticated();

  if (isAuthenticated || pathname.startsWith("/espace")) {
    return null;
  }

  return (
    <nav
      aria-label="Navigation mobile"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-200 bg-white/95 backdrop-blur-sm md:hidden"
    >
      <div className="mx-auto grid max-w-lg grid-cols-3">
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
              className={`flex min-h-14 flex-col items-center justify-center gap-0.5 px-2 transition-colors ${
                isDialogue
                  ? active
                    ? dialogueActiveClass
                    : "bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  : active
                    ? artistActiveClass
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
