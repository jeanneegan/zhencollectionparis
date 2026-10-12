import type { Locale } from "@/app/artists/[slug]/data";
import { Instrument_Serif } from "next/font/google";
import { notoSerifSc } from "@/app/lib/noto-serif-sc";

export const archiveDisplay = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

/** Latin names use Instrument Serif; 中文 uses Noto Serif SC (same webfont on all devices). */
export function artistSiteNameFontClass(locale: Locale): string {
  return locale === "zh" ? notoSerifSc.className : archiveDisplay.className;
}
