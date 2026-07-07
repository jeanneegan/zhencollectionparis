"use client";

import { SiteBrandLink } from "@/app/components/site-brand-link";
import { SiteNav } from "@/app/components/site-nav";
import { shouldHidePublicNav, useIsAuthenticated } from "@/app/lib/use-is-authenticated";
import { usePathname } from "next/navigation";

export function SiteHeader({
  trailing,
  wide = false,
  showNav = true,
  sticky = true,
}: {
  trailing?: React.ReactNode;
  wide?: boolean;
  showNav?: boolean;
  sticky?: boolean;
}) {
  const isAuthenticated = useIsAuthenticated();
  const pathname = usePathname();
  const showPublicNav =
    showNav &&
    !shouldHidePublicNav(pathname, isAuthenticated);

  return (
    <header
      className={`border-b border-stone-200 bg-white/95 backdrop-blur-sm ${
        sticky ? "sticky top-0 z-50" : ""
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-4 px-6 py-5 ${
          wide ? "max-w-7xl md:px-10" : "max-w-3xl"
        }`}
      >
        <SiteBrandLink className="shrink-0" />
        {trailing}
      </div>
      {showPublicNav ? <SiteNav wide={wide} /> : null}
    </header>
  );
}
