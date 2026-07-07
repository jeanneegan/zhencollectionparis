import { getCurrentDialoguePath } from "@/app/dialogue/data";

export type SiteNavItem = {
  href: string;
  labelFr: string;
  labelZh: string | null;
  isDialogue: boolean;
  isActive: (path: string) => boolean;
};

export function getSiteNavItems(): SiteNavItem[] {
  const dialoguePath = getCurrentDialoguePath();

  return [
    {
      href: "/artists/willy-le-nalbaut",
      labelFr: "Willy LN",
      labelZh: null,
      isDialogue: false,
      isActive: (path) => path === "/artists/willy-le-nalbaut",
    },
    {
      href: dialoguePath,
      labelFr: "Conversation",
      labelZh: "对话",
      isDialogue: true,
      isActive: (path) => path.startsWith("/dialogue"),
    },
    {
      href: "/artists/su-hong",
      labelFr: "Su Hong",
      labelZh: "苏泓",
      isDialogue: false,
      isActive: (path) => path === "/artists/su-hong",
    },
  ];
}
