import { Noto_Serif_SC } from "next/font/google";

/** Single shared instance — required for stable Vercel/Turbopack builds. */
export const notoSerifSc = Noto_Serif_SC({
  subsets: ["latin"],
  weight: "400",
});
