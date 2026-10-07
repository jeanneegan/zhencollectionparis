import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";
import { residencyPageIntro } from "@/app/opportunites/data";
import {
  programmeSubtitle,
  programmeTitle,
} from "@/app/opportunites/young-artists-france/data";

export type ProjectSection = {
  id: string;
  href: string;
  title: LocalizedText;
  lead: LocalizedText;
};

export const projectsPageTitle: LocalizedText = {
  zh: "项目",
  fr: "Projets",
  en: "Projects",
};

export const projectsPageIntro: LocalizedText = {
  zh: "ZCP 的展览、驻地与年度艺术家计划，在不同城市之间展开创作、相遇与推广。",
  fr: "Expositions, résidences et programme annuel des artistes — la création, la rencontre et la visibilité de ZCP entre les villes.",
  en: "Exhibitions, residencies, and the annual artists programme — ZCP's work across cities for creation, encounter, and visibility.",
};

export const projectSections: ProjectSection[] = [
  {
    id: "annual-programme",
    href: "/opportunites/young-artists-france",
    title: {
      zh: "年度艺术家计划",
      fr: "Programme annuel des artistes",
      en: "Annual artists programme",
    },
    lead: {
      zh: `${programmeTitle.zh} — ${programmeSubtitle.zh}`,
      fr: `${programmeTitle.fr} — ${programmeSubtitle.fr}`,
      en: `${programmeTitle.en} — ${programmeSubtitle.en}`,
    },
  },
  {
    id: "expositions",
    href: "/exposition",
    title: {
      zh: "展览",
      fr: "Expositions",
      en: "Exhibitions",
    },
    lead: {
      zh: "巴黎臻藏艺术展与公共项目，让艺术进入日常空间与城市生活。",
      fr: "Expositions et projets publics de Zhen Collection Paris — l'art dans les espaces du quotidien et la vie urbaine.",
      en: "Zhen Collection Paris exhibitions and public programmes — art in everyday spaces and city life.",
    },
  },
  {
    id: "residencies",
    href: "/opportunites",
    title: {
      zh: "驻地",
      fr: "Résidences",
      en: "Residencies",
    },
    lead: residencyPageIntro,
  },
];

export function tProjects(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
