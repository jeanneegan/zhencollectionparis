export type SiteSocialNetwork = {
  id: "instagram" | "wechat" | "xiaohongshu" | "linkedin";
  label: string;
  href?: string;
  contactAnchor?: boolean;
};

export const siteSocialNetworks: SiteSocialNetwork[] = [
  {
    id: "instagram",
    label: "INS",
    href: "",
  },
  {
    id: "wechat",
    label: "微信",
    contactAnchor: true,
  },
  {
    id: "xiaohongshu",
    label: "小红书",
    href: "",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "",
  },
];

export function getSiteSocialHref(network: SiteSocialNetwork) {
  if (network.contactAnchor) {
    return "/apropos#contact";
  }

  return network.href || "/apropos#contact";
}

export function isExternalSocialLink(network: SiteSocialNetwork) {
  const href = getSiteSocialHref(network);
  return href.startsWith("http://") || href.startsWith("https://");
}
