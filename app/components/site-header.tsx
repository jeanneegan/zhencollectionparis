import { SiteBrandLink } from "@/app/components/site-brand-link";

export function SiteHeader({
  trailing,
}: {
  trailing?: React.ReactNode;
}) {
  return (
    <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <SiteBrandLink />
        {trailing}
      </div>
    </header>
  );
}
