export const EDITION_SHOP_BASE_URL = "https://zbrv5b-vd.myshopify.com";

export function getEditionShopHomeUrl(): string {
  return EDITION_SHOP_BASE_URL;
}

export function getEditionShopProductUrl(productPath: string): string {
  return `${EDITION_SHOP_BASE_URL}${productPath}`;
}
