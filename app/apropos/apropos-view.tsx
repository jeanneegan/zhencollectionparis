"use client";

import { Noto_Serif_SC } from "next/font/google";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Locale } from "@/app/artists/[slug]/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pageContent: Record<
  Locale,
  {
    title: string;
    titleSub: string;
    paragraphs: string[];
  }
> = {
  fr: {
    title: "Pourquoi « Zhen » ?",
    titleSub: "为什么「臻」？",
    paragraphs: [
      "Zhen (臻) est un mot chinois qui évoque un mouvement plutôt qu'un état.",
      "Il signifie avancer progressivement vers ce qui est plus juste, plus authentique et plus accompli. Ce n'est pas la recherche d'une perfection figée, mais un chemin fait de temps, d'expérience et de transformation.",
      "Pour nous, Zhen représente ce qui mérite d'être rencontré, compris, transmis et conservé.",
      "À travers les artistes, les œuvres et les dialogues entre les cultures, Zhen Collection Paris cherche à constituer une mémoire vivante de notre époque.",
      "Parce qu'une œuvre d'art ne conserve pas seulement une image. Elle conserve un regard, une rencontre, une manière d'habiter le monde.",
      "C'est dans ce sens que nous avons choisi le nom Zhen Collection Paris : une collection non seulement d'œuvres, mais aussi de relations, d'idées et de dialogues qui relient les êtres humains au-delà des frontières.",
    ],
  },
  zh: {
    title: "为什么「臻」？",
    titleSub: "Pourquoi « Zhen » ?",
    paragraphs: [
      "臻，是一个中文词，与其说是一种状态，不如说是一种方向。",
      "它意指逐渐走向更正、更真、更完善——不是追求凝固的完美，而是一条由时间、经验与转化铺就的路。",
      "对我们来说，臻代表值得被遇见、被理解、被传递、被保存的事物。",
      "通过艺术家、作品与跨文化的对话，巴黎臻藏（Zhen Collection Paris）试图构成我们这一时代的活记忆。",
      "因为一件艺术作品所保存的不只是一幅图像，更是一种目光、一次相遇、一种安住于世界的方式。",
      "正因此，我们选择 Zhen Collection Paris 这一名字：收藏的不仅是作品，更是人与人的关系、思想与对话——跨越边界的连接。",
    ],
  },
  en: {
    title: "Why « Zhen »?",
    titleSub: "",
    paragraphs: [
      "Zhen (臻) is a Chinese word that suggests movement rather than a fixed state.",
      "It means progressing gradually toward what is more just, more authentic, and more complete—not the pursuit of frozen perfection, but a path shaped by time, experience, and transformation.",
      "For us, Zhen represents what deserves to be encountered, understood, transmitted, and preserved.",
      "Through artists, artworks, and dialogue between cultures, Zhen Collection Paris seeks to build a living memory of our time.",
      "Because a work of art preserves not only an image. It preserves a way of seeing, an encounter, a manner of inhabiting the world.",
      "This is why we chose the name Zhen Collection Paris: a collection not only of artworks, but also of relationships, ideas, and dialogues that connect human beings across borders.",
    ],
  },
};

export function AproposView() {
  const [locale, setLocale] = useLocale();
  const content = pageContent[locale];

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        }
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
            {content.title}
          </p>
          {locale !== "en" ? (
            <p className="mt-1 text-[10px] tracking-[0.2em] text-stone-400">
              {content.titleSub}
            </p>
          ) : null}
          <h1
            className={`${locale === "zh" ? serif.className : ""} mt-8 text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {locale === "en" ? content.title : `${content.title} · ${content.titleSub}`}
          </h1>
        </header>

        <div className="mt-12 space-y-6 text-sm leading-[2] text-stone-600 md:text-base">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter />
    </div>
  );
}
