import Link from "next/link";
import type { SiteSocialNetwork } from "@/app/lib/site-social";
import {
  getSiteSocialHref,
  isExternalSocialLink,
  siteSocialNetworks,
} from "@/app/lib/site-social";

const linkClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900";

function SocialIcon({
  networkId,
  className = "h-4 w-4",
}: {
  networkId: SiteSocialNetwork["id"];
  className?: string;
}) {
  switch (networkId) {
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className={className}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "wechat":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className={className}
          fill="currentColor"
        >
          <path d="M8.5 4C4.91 4 2 6.34 2 9.24c0 1.62.84 3.07 2.17 4.05L3.5 16l2.98-1.49c.92.26 1.9.4 2.92.4.18 0 .36-.01.54-.02C9.5 16.66 11.8 18 14.5 18c.34 0 .67-.03 1-.08l2.73 1.37-.73-2.55C18.6 15.72 19.5 14.1 19.5 12.3 19.5 8.98 16.42 6.5 12.5 6.5c-.65 0-1.28.07-1.89.2C9.64 4.78 9.1 4 8.5 4Zm-2.2 4.1a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Zm4.4 0a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z" />
          <path d="M14.5 8.5c3.04 0 5.5 2.01 5.5 4.8 0 1.45-.72 2.75-1.86 3.58l.55 1.92-2.05-1.03a7.2 7.2 0 0 1-3.14.7C11.04 18.47 8.5 16.46 8.5 13.7c0-2.79 2.46-5.2 6-5.2Zm-1.4 2.55a.95.95 0 1 0 0-1.9.95.95 0 0 0 0 1.9Zm2.8 0a.95.95 0 1 0 0-1.9.95.95 0 0 0 0 1.9Z" />
        </svg>
      );
    case "xiaohongshu":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className={className}
          fill="currentColor"
        >
          <path d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm1.2 2v12h9.6V6H7.2Zm2.1 1.8h5.4v1.5H9.3V7.8Zm0 2.7h5.4v1.5H9.3v-1.5Zm0 2.7h3.6v1.5H9.3v-1.5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className={className}
          fill="currentColor"
        >
          <path d="M6.5 8.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4.75 20v-9.5h3.5V20h-3.5ZM13.25 10.5c-1.88 0-3.25 1.03-3.75 2.02V10.5h-3.5V20h3.5v-5.25c0-1.45 1.1-2.62 2.5-2.62s2.25 1.05 2.25 2.5V20h3.5v-5.75c0-3.05-1.82-5.25-4.5-5.25Z" />
        </svg>
      );
  }
}

function SocialLink({
  network,
  href,
  external,
}: {
  network: SiteSocialNetwork;
  href: string;
  external: boolean;
}) {
  const content = (
    <>
      <SocialIcon networkId={network.id} />
      <span className="sr-only">{network.label}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        aria-label={network.label}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass} aria-label={network.label}>
      {content}
    </Link>
  );
}

export function SiteSocialLinks() {
  return (
    <nav
      aria-label="Social media"
      className="flex flex-wrap items-center justify-center gap-2"
    >
      {siteSocialNetworks.map((network) => (
        <SocialLink
          key={network.id}
          network={network}
          href={getSiteSocialHref(network)}
          external={isExternalSocialLink(network)}
        />
      ))}
    </nav>
  );
}
