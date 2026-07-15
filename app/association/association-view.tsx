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

const proseClass = "text-sm leading-[2] text-stone-700 md:text-base";
const calloutClass = "text-sm font-medium leading-[2] text-stone-800 md:text-base";

const pageContent: Record<
  Locale,
  {
    title: string;
    paragraphs: string[];
    closing: string;
  }
> = {
  zh: {
    title: "为什么是巴黎臻藏？",
    paragraphs: [
      "巴黎臻藏（Zhen Collection Paris）是一家成立于法国巴黎的国际文化艺术协会。",
      "协会立足巴黎，致力于推动巴黎与中国当代艺术生态之间长期、专业、平等、双向的交流，搭建连接艺术家、评论家、策展人、画廊、收藏家及文化机构的国际合作平台。",
      "巴黎汇聚着来自世界各地的艺术家、评论家、策展人、画廊、收藏家及文化机构，是世界重要的艺术交流中心之一。巴黎臻藏致力于将生活和工作在巴黎的优秀国际艺术家及其艺术实践介绍给中国，同时将中国当代艺术家、艺术实践与文化视角带入巴黎，促进两地艺术生态之间更加深入、持续和富有创造力的交流与合作。",
      "协会通过艺术家对话、展览、学术评论、出版、艺术档案及国际合作项目，记录当代艺术中的跨文化交流，推动艺术思想、创作实践与专业资源的长期连接，为艺术家创造更多国际交流与发展的机会，也为不同文化背景下的专业人士搭建相互了解、合作与共同成长的平台。",
      "我们相信，艺术不仅能够跨越语言和地域，更能够成为不同文明相互理解的重要桥梁。巴黎臻藏希望以巴黎为起点，连接中国，并逐步连接更多国家和地区，与世界各地的艺术家、评论家、策展人、画廊、收藏家及文化机构共同构建开放、持续、平等的国际文化艺术交流网络，让每一次相遇都成为文明互鉴的一部分。",
    ],
    closing: "连接巴黎，连接中国；以艺术促进文明对话。",
  },
  fr: {
    title: "Pourquoi Zhen Collection Paris ?",
    paragraphs: [
      "Zhen Collection Paris (巴黎臻藏) est une association internationale de culture et d'art fondée à Paris, en France.",
      "Basée à Paris, l'association s'engage à promouvoir des échanges de long terme, professionnels, égaux et bidirectionnels entre les écosystèmes artistiques contemporains parisiens et chinois, en construisant une plateforme de coopération internationale reliant artistes, critiques, commissaires, galeries, collectionneurs et institutions culturelles.",
      "Paris rassemble des artistes, critiques, commissaires, galeries, collectionneurs et institutions culturelles du monde entier, et constitue l'un des grands centres d'échange artistique au monde. Zhen Collection Paris s'engage à présenter en Chine les artistes internationaux remarquables qui vivent et travaillent à Paris, ainsi que leurs pratiques artistiques, tout en apportant à Paris les artistes chinois contemporains, leurs pratiques et leurs perspectives culturelles, afin de favoriser des échanges et des collaborations plus profonds, durables et créatifs entre les deux écosystèmes artistiques.",
      "À travers le dialogue entre artistes, les expositions, la critique académique, les publications, les archives artistiques et les projets de coopération internationale, l'association documente les échanges interculturels dans l'art contemporain, favorise la connexion durable entre les idées artistiques, les pratiques créatives et les ressources professionnelles, crée davantage d'opportunités d'échange et de développement international pour les artistes, et offre aux professionnels de différentes cultures une plateforme pour se connaître, collaborer et grandir ensemble.",
      "Nous croyons que l'art peut non seulement traverser les langues et les frontières, mais aussi devenir un pont important pour la compréhension mutuelle entre les civilisations. Zhen Collection Paris souhaite prendre Paris comme point de départ, relier la Chine, et progressivement connecter davantage de pays et de régions, afin de construire, avec des artistes, critiques, commissaires, galeries, collectionneurs et institutions culturelles du monde entier, un réseau ouvert, durable et égalitaire d'échanges culturels et artistiques internationaux, où chaque rencontre devient une part du dialogue entre les civilisations.",
    ],
    closing:
      "Relier Paris, relier la Chine ; faire de l'art un vecteur de dialogue entre les civilisations.",
  },
  en: {
    title: "Why Zhen Collection Paris?",
    paragraphs: [
      "Zhen Collection Paris (巴黎臻藏) is an international cultural and arts association founded in Paris, France.",
      "Based in Paris, the association is dedicated to fostering long-term, professional, equal, and two-way exchange between the contemporary art ecosystems of Paris and China, building an international cooperation platform connecting artists, critics, curators, galleries, collectors, and cultural institutions.",
      "Paris brings together artists, critics, curators, galleries, collectors, and cultural institutions from around the world, and stands as one of the world's important centres of artistic exchange. Zhen Collection Paris is committed to introducing outstanding international artists living and working in Paris—and their artistic practices—to China, while bringing contemporary Chinese artists, artistic practices, and cultural perspectives to Paris, fostering deeper, more sustained, and more creative exchange and collaboration between the two art ecosystems.",
      "Through artist dialogue, exhibitions, academic criticism, publishing, art archives, and international cooperation projects, the association documents cross-cultural exchange in contemporary art, advances long-term connections among artistic ideas, creative practices, and professional resources, creates more opportunities for artists to exchange and develop internationally, and builds a platform for professionals from different cultural backgrounds to understand one another, collaborate, and grow together.",
      "We believe art can not only cross languages and borders, but also serve as an important bridge for mutual understanding among civilizations. Zhen Collection Paris hopes to take Paris as its starting point, connect with China, and gradually connect more countries and regions, building—together with artists, critics, curators, galleries, collectors, and cultural institutions worldwide—an open, sustained, and equitable international network of cultural and artistic exchange, where every encounter becomes part of civilizational dialogue.",
    ],
    closing:
      "Connecting Paris, connecting China; using art to foster dialogue among civilizations.",
  },
};

export function AssociationView() {
  const [locale, setLocale] = useLocale();
  const content = pageContent[locale];
  const useSerif = locale === "zh";

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader
        trailing={
          <LanguageSwitcher locale={locale} onChange={setLocale} />
        }
      />

      <main className="mx-auto max-w-3xl px-6 py-12 md:px-16 md:py-20">
        <header className="border-b border-stone-200 pb-10 text-center">
          <h1
            className={`${
              useSerif ? serif.className : ""
            } text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {content.title}
          </h1>
        </header>

        <div className={`mt-12 space-y-5 ${useSerif ? serif.className : ""}`}>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className={proseClass}>
              {paragraph}
            </p>
          ))}
        </div>

        <section className="mt-12 rounded-sm border border-stone-200 bg-stone-50/80 px-6 py-7 text-center md:px-8">
          <p className={`${calloutClass} ${useSerif ? serif.className : ""}`}>
            {content.closing}
          </p>
        </section>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
