import type { Locale } from "@/app/artists/[slug]/data";

/** Override via NEXT_PUBLIC_ZCP_CONTACT_EMAIL / NEXT_PUBLIC_ZCP_WECHAT in production. */
export const zcpContactEmail =
  process.env.NEXT_PUBLIC_ZCP_CONTACT_EMAIL ?? "contact@zhencollection.paris";

export const zcpContactWechat =
  process.env.NEXT_PUBLIC_ZCP_WECHAT ?? "ZhenCollectionParis";

export const zcpContactLabels: Record<
  Locale,
  {
    organization: string;
    email: string;
    wechat: string;
    location: string;
    locationValue: string;
  }
> = {
  zh: {
    organization: "Zhen Collection Paris (ZCP)",
    email: "Email",
    wechat: "WeChat · 微信",
    location: "Location · 地址",
    locationValue: "Paris, France · 法国巴黎",
  },
  fr: {
    organization: "Zhen Collection Paris (ZCP)",
    email: "E-mail",
    wechat: "WeChat · 微信",
    location: "Adresse · 地址",
    locationValue: "Paris, France · 法国巴黎",
  },
  en: {
    organization: "Zhen Collection Paris (ZCP)",
    email: "Email",
    wechat: "WeChat",
    location: "Location",
    locationValue: "Paris, France",
  },
};
