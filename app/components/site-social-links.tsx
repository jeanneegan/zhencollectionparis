import Link from "next/link";
import {
  getSiteSocialHref,
  isExternalSocialLink,
  siteSocialNetworks,
} from "@/app/lib/site-social";

const linkClass =
  "text-[11px] tracking-[0.12em] text-stone-500 transition-colors hover:text-stone-900";

export function SiteSocialLinks() {
  return (
    <nav aria-label="Social media" className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
      {siteSocialNetworks.map((network) => {
        const href = getSiteSocialHref(network);
        const external = isExternalSocialLink(network);

        if (external) {
          return (
            <a
              key={network.id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              {network.label}
            </a>
          );
        }

        return (
          <Link key={network.id} href={href} className={linkClass}>
            {network.label}
          </Link>
        );
      })}
    </nav>
  );
}
