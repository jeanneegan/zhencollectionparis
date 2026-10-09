import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";

/** Confirmed partner listings only — add entries when city, works, and contact are verified. */
export type CollectionPartner = {
  id: string;
  city: LocalizedText;
  works: LocalizedText;
  contactLabel: LocalizedText;
  contactHref: string;
};

export const collectionOnlineShopUrl = "https://zhencollectionparis.com";

export const collectionPartners: CollectionPartner[] = [];

export const collectionPageTitle: LocalizedText = {
  zh: "COLLECTION · 收藏",
  fr: "COLLECTION · 收藏",
  en: "COLLECTION",
};

export const collectionPageIntro: LocalizedText = {
  zh: "ZCP 支持通过在线渠道与经确认的本地伙伴收藏作品。请选择适合您的方式了解详情。",
  fr: "ZCP propose la collection d'œuvres en ligne et via des partenaires locaux confirmés. Choisissez le canal qui vous convient.",
  en: "ZCP supports collecting works online and through confirmed local partners. Choose the path that suits you.",
};

export const onlinePurchaseTitle: LocalizedText = {
  zh: "在线购买",
  fr: "Achat en ligne",
  en: "Online purchase",
};

export const onlinePurchaseLead: LocalizedText = {
  zh: "前往 ZCP 在线平台浏览当前可收藏的作品与出版。",
  fr: "Accédez à la plateforme en ligne ZCP pour découvrir les œuvres et éditions disponibles.",
  en: "Visit the ZCP online platform to browse works and editions currently available.",
};

export const onlinePurchaseCta: LocalizedText = {
  zh: "前往在线平台 · zhencollectionparis.com",
  fr: "Accéder à la plateforme · zhencollectionparis.com",
  en: "Go to zhencollectionparis.com →",
};

export const partnerCollectionTitle: LocalizedText = {
  zh: "通过伙伴收藏",
  fr: "Collection via partenaires",
  en: "Collect through partners",
};

export const partnerCollectionLead: LocalizedText = {
  zh: "在已确认的城市，ZCP 与伙伴共同呈现经授权的作品；咨询方式见各条目。",
  fr: "Dans les villes confirmées, ZCP et ses partenaires présentent des œuvres autorisées — voir les contacts ci-dessous.",
  en: "In confirmed cities, ZCP and partners present authorized works — see contact details for each listing.",
};

export const partnersEmptyTitle: LocalizedText = {
  zh: "伙伴信息更新中",
  fr: "Informations partenaires en cours",
  en: "Partner listings in progress",
};

export const partnersEmptyBody: LocalizedText = {
  zh: "我们正与不同城市的伙伴确认城市、作品与咨询方式。暂无已公开的伙伴条目；若您希望了解通过伙伴收藏，请直接联系 ZCP。",
  fr: "Nous confirmons avec nos partenaires ville, œuvres et modalités de contact. Aucune fiche publique pour le moment ; pour la collection via partenaire, écrivez à ZCP.",
  en: "We are confirming city, works, and contact details with partners. No public listings yet; to inquire about collecting through a partner, contact ZCP directly.",
};

export const partnersContactCta: LocalizedText = {
  zh: "联系 ZCP",
  fr: "Contacter ZCP",
  en: "Contact ZCP",
};

export function tCollection(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
