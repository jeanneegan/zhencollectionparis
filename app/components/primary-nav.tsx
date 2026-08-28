"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavItems } from "@/app/components/primary-nav-config";

const activeClass = "text-stone-900";
const inactiveClass = "text-stone-400 hover:text-stone-700";

export function PrimaryNav({ wide = false }: { wide?: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="border-t border-stone-200 bg-white/95"
    >
      <div
        className={`mx-auto overflow-x-auto px-4 md:px-6 ${
          wide ? "max-w-7xl md:px-10" : "max-w-3xl"
        }`}
      >
        <ul className="flex min-w-max items-stretch justify-center gap-1 py-2 md:gap-2 md:py-3">
          {primaryNavItems.map((item) => {
            const active = item.isActive(pathname);

            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={`flex min-h-10 flex-col items-center justify-center px-2 py-1 text-center transition-colors md:min-h-11 md:px-3 ${
                    active ? activeClass : inactiveClass
                  }`}
                >
                  <span className="text-[9px] font-medium tracking-[0.18em] md:text-[10px]">
                    {item.label}
                  </span>
                  <span
                    className={`mt-0.5 text-[9px] tracking-[0.08em] md:text-[10px] ${
                      active ? "text-stone-500" : "text-stone-400"
                    }`}
                  >
                    {item.labelZh}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
