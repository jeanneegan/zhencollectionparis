import { SiteBrandLink } from "@/app/components/site-brand-link";
import { AproposLink } from "@/app/components/apropos-link";
import { SiteNav } from "@/app/components/site-nav";

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
        <div className="flex shrink-0 items-center gap-4 md:gap-6">
          <AproposLink />
          {trailing}
        </div>
      </div>
      {showNav ? <SiteNav wide={wide} /> : null}
    </header>
  );
}
