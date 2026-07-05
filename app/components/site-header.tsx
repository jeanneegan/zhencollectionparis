import { SiteBrandLink } from "@/app/components/site-brand-link";
import { SiteNav } from "@/app/components/site-nav";

export function SiteHeader({
  trailing,
  wide = false,
}: {
  trailing?: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm">
      <div
        className={`mx-auto flex items-center justify-between gap-4 px-6 py-5 ${
          wide ? "max-w-7xl md:px-10" : "max-w-3xl"
        }`}
      >
        <SiteBrandLink className="shrink-0" />
        {trailing}
      </div>
      <SiteNav wide={wide} />
    </header>
  );
}
