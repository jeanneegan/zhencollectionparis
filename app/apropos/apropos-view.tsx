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

type SectionVariant = "default" | "callout" | "verse" | "list" | "closing";

type AproposSection = {
  label?: string;
  variant?: SectionVariant;
  paragraphs: string[];
};

const pageContent: Record<
  Locale,
  {
    title: string;
    sections: AproposSection[];
  }
> = {
  zh: {
    title: "为什么是巴黎臻藏？",
    sections: [
      {
        paragraphs: [
          "世界并不缺少艺术。缺少的是，人们愿意停下来，真正看见彼此。",
          "今天，我们每天都在观看无数图像，却越来越少真正面对一件作品；越来越少认真倾听一位艺术家；也越来越少愿意进入另一种文化，只为了理解，而不是判断。",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "巴黎臻藏，因此而诞生。",
          "它不是为了增加一种声音。而是为了创造一种相遇。",
        ],
      },
      {
        label: "艺术属于生命",
        paragraphs: [
          "我们相信，艺术首先属于生命。每一件作品，都来自一个人的生活、记忆、情感与思考。在成为作品之前，它首先是一段生命的经历。在拥有市场价值之前，它首先是一种观看世界的方式。因此，我们关注作品，也关注作品背后的人。",
        ],
      },
      {
        label: "对话也是创作",
        paragraphs: [
          "我们相信，对话本身也是一种创作。当一位法国艺术家向一位中国艺术家提出一个问题；当一位中国艺术家回应另一种文化的目光；当一位普通观众说出自己的真实感受；新的作品，也许已经开始诞生。它存在于人与人之间。存在于理解发生的那一刻。",
        ],
      },
      {
        label: "每一种观看都值得尊重",
        paragraphs: [
          "我们相信，每一种真诚的观看，都值得被尊重。艺术属于艺术家，也属于每一个愿意观看的人。专业的研究、评论与策展，为艺术建立知识。而普通人的感受，则让艺术重新回到生活。因此，我们希望记录不同的声音。因为每一次真实的相遇，都值得留下。",
        ],
      },
      {
        label: "臻",
        variant: "verse",
        paragraphs: [
          "臻，是一个动词。",
          "它不是抵达。而是不断接近。",
          "接近真实。接近美。",
          "接近那些值得被保存、被传承、被分享的事物。",
          "因此，我们不急于定义。我们愿意持续靠近。",
        ],
      },
      {
        label: "藏",
        variant: "verse",
        paragraphs: [
          "藏，也不仅意味着收藏。",
          "收藏作品。更收藏时间。",
          "收藏人与人的相遇。收藏思想的流动。收藏一个时代留下的痕迹。",
          "真正的收藏，不只是拥有。而是让那些原本会消失的记忆，继续活下去。",
        ],
      },
      {
        label: "巴黎与中国",
        paragraphs: [
          "巴黎，是我们的起点。中国，是我们的第一场对话。",
          "但巴黎臻藏并不属于某一个国家，也不属于某一种文化。我们相信，每一种文明，都拥有理解世界的独特方式。",
          "真正的交流，不是消除差异。而是在差异之中，发现彼此。",
        ],
      },
      {
        label: "一个持续生长的平台",
        paragraphs: [
          "巴黎臻藏，不是一家画廊。也不仅是一份收藏。它希望成为一个持续生长的平台。",
          "艺术家、收藏家、研究者、策展人，以及每一位愿意认真观看的人，都可以在这里相遇。",
        ],
      },
      {
        variant: "list",
        paragraphs: [
          "我们记录作品。",
          "记录艺术家。",
          "记录对话。",
          "也记录这个时代如何通过艺术重新理解彼此。",
        ],
      },
      {
        variant: "closing",
        paragraphs: [
          "如果很多年以后，当人们回望这个时代，仍然能够通过这里，看见一位艺术家的创作、一场真实的对话、一段跨越文化的相遇，那么，巴黎臻藏存在的意义，便已经实现。",
          "因为真正值得收藏的，不只是艺术。",
          "更是人与人之间不断发生的理解。",
        ],
      },
    ],
  },
  fr: {
    title: "Pourquoi Zhen Collection Paris ?",
    sections: [
      {
        paragraphs: [
          "Le monde ne manque pas d'art. Ce qui lui manque, c'est la volonté de s'arrêter pour vraiment se voir les uns les autres.",
          "Aujourd'hui, nous regardons chaque jour d'innombrables images, mais nous sommes de moins en moins nombreux à affronter véritablement une œuvre ; à écouter sincèrement un artiste ; à entrer dans une autre culture, simplement pour comprendre, et non pour juger.",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "Zhen Collection Paris est née de ce constat.",
          "Elle ne vise pas à ajouter une voix de plus. Elle cherche à créer une rencontre.",
        ],
      },
      {
        label: "L'art appartient d'abord à la vie",
        paragraphs: [
          "Nous croyons que l'art appartient d'abord à la vie. Chaque œuvre naît de la vie, de la mémoire, des émotions et de la pensée d'une personne. Avant d'être une œuvre, c'est d'abord une expérience de vie. Avant d'avoir une valeur marchande, c'est d'abord une manière de voir le monde. C'est pourquoi nous regardons les œuvres, mais aussi les personnes derrière elles.",
        ],
      },
      {
        label: "Le dialogue est une création",
        paragraphs: [
          "Nous croyons que le dialogue est lui-même une forme de création. Quand un artiste français pose une question à un artiste chinois ; quand un artiste chinois répond au regard d'une autre culture ; quand un spectateur ordinaire exprime ce qu'il ressent vraiment ; une nouvelle œuvre commence peut-être déjà à naître. Elle existe entre les personnes. Elle existe au moment où la compréhension advient.",
        ],
      },
      {
        label: "Chaque regard sincère compte",
        paragraphs: [
          "Nous croyons que chaque regard sincère mérite d'être respecté. L'art appartient à l'artiste, mais aussi à quiconque veut regarder. La recherche, la critique et la curation professionnelles construisent une connaissance de l'art. Les sentiments des spectateurs, eux, ramènent l'art dans la vie. C'est pourquoi nous voulons enregistrer des voix différentes. Parce que chaque rencontre authentique mérite d'être conservée.",
        ],
      },
      {
        label: "Zhen · 臻",
        variant: "verse",
        paragraphs: [
          "Zhen (臻) est un verbe.",
          "Ce n'est pas l'arrivée. C'est un rapprochement continu.",
          "Se rapprocher du réel. Se rapprocher du beau.",
          "Se rapprocher de ce qui mérite d'être préservé, transmis et partagé.",
          "C'est pourquoi nous ne nous pressons pas de définir. Nous préférons continuer de nous rapprocher.",
        ],
      },
      {
        label: "Cang · 藏",
        variant: "verse",
        paragraphs: [
          "Cang (藏) ne signifie pas seulement collectionner.",
          "Collectionner les œuvres. Mais aussi le temps.",
          "Les rencontres entre les personnes. La circulation des idées. Les traces laissées par une époque.",
          "Vraiment collectionner, ce n'est pas seulement posséder. C'est permettre à des mémoires qui disparaîtraient de continuer à vivre.",
        ],
      },
      {
        label: "Paris et la Chine",
        paragraphs: [
          "Paris est notre point de départ. La Chine est notre premier dialogue.",
          "Mais Zhen Collection Paris n'appartient à aucun pays, à aucune culture. Nous croyons que chaque civilisation possède sa propre manière de comprendre le monde.",
          "Le vrai échange ne consiste pas à effacer les différences. Il consiste à se découvrir les uns les autres au sein de ces différences.",
        ],
      },
      {
        label: "Une plateforme vivante",
        paragraphs: [
          "Zhen Collection Paris n'est pas une galerie. Ce n'est pas non plus seulement une collection. Elle aspire à devenir une plateforme en croissance continue.",
          "Artistes, collectionneurs, chercheurs, curateurs, et toute personne disposée à regarder avec attention peuvent s'y rencontrer.",
        ],
      },
      {
        variant: "list",
        paragraphs: [
          "Nous enregistrons les œuvres.",
          "Les artistes.",
          "Les dialogues.",
          "Et la manière dont notre époque se comprend à nouveau à travers l'art.",
        ],
      },
      {
        variant: "closing",
        paragraphs: [
          "Si, dans de nombreuses années, en regardant cette époque, l'on peut encore voir ici la création d'un artiste, un dialogue authentique, une rencontre entre cultures, alors le sens de Zhen Collection Paris sera accompli.",
          "Car ce qui vaut vraiment d'être conservé, ce n'est pas seulement l'art.",
          "C'est la compréhension qui continue de naître entre les personnes.",
        ],
      },
    ],
  },
  en: {
    title: "Why Zhen Collection Paris?",
    sections: [
      {
        paragraphs: [
          "The world does not lack art. What it lacks is the willingness to pause and truly see one another.",
          "Today we look at countless images every day, yet we face an actual work of art less and less often; listen carefully to an artist less and less often; and enter another culture—simply to understand, not to judge—less and less often.",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "Zhen Collection Paris was born from this observation.",
          "It is not here to add another voice. It is here to create an encounter.",
        ],
      },
      {
        label: "Art belongs first to life",
        paragraphs: [
          "We believe that art belongs first to life. Every work comes from a person's life, memory, feeling, and thought. Before it is a work, it is first an experience of life. Before it has market value, it is first a way of seeing the world. That is why we attend to works, and also to the people behind them.",
        ],
      },
      {
        label: "Dialogue is creation",
        paragraphs: [
          "We believe dialogue is itself a form of creation. When a French artist asks a Chinese artist a question; when a Chinese artist responds to the gaze of another culture; when an ordinary viewer speaks a genuine feeling; a new work may already be beginning. It exists between people. It exists in the moment understanding occurs.",
        ],
      },
      {
        label: "Every sincere gaze matters",
        paragraphs: [
          "We believe every sincere way of looking deserves respect. Art belongs to the artist, and also to everyone willing to look. Professional research, criticism, and curating build knowledge around art. The feelings of ordinary viewers bring art back into life. That is why we want to record different voices. Because every authentic encounter deserves to be kept.",
        ],
      },
      {
        label: "Zhen · 臻",
        variant: "verse",
        paragraphs: [
          "Zhen (臻) is a verb.",
          "It is not arrival. It is continual approach.",
          "Approaching what is real. Approaching beauty.",
          "Approaching what deserves to be preserved, transmitted, and shared.",
          "That is why we are not in a hurry to define. We are willing to keep drawing near.",
        ],
      },
      {
        label: "Cang · 藏",
        variant: "verse",
        paragraphs: [
          "Cang (藏) means more than collecting.",
          "Collecting works. But also time.",
          "Encounters between people. The movement of ideas. The traces an era leaves behind.",
          "True collecting is not merely possession. It is allowing memories that would otherwise disappear to keep living.",
        ],
      },
      {
        label: "Paris and China",
        paragraphs: [
          "Paris is our starting point. China is our first dialogue.",
          "But Zhen Collection Paris belongs to no single country and no single culture. We believe every civilization has its own way of understanding the world.",
          "True exchange does not erase difference. It discovers one another within difference.",
        ],
      },
      {
        label: "A platform that keeps growing",
        paragraphs: [
          "Zhen Collection Paris is not a gallery. Nor is it only a collection. It hopes to become a platform that keeps growing.",
          "Artists, collectors, researchers, curators, and everyone willing to look carefully can meet here.",
        ],
      },
      {
        variant: "list",
        paragraphs: [
          "We record works.",
          "Artists.",
          "Dialogues.",
          "And how our era comes to understand itself again through art.",
        ],
      },
      {
        variant: "closing",
        paragraphs: [
          "If, many years from now, people looking back at this time can still see here an artist's creation, a genuine dialogue, a cross-cultural encounter, then the meaning of Zhen Collection Paris will have been fulfilled.",
          "Because what is truly worth preserving is not only art.",
          "It is the understanding that keeps arising between people.",
        ],
      },
    ],
  },
};

function SectionLabel({
  children,
  locale,
}: {
  children: string;
  locale: Locale;
}) {
  return (
    <p
      className={`mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-400 ${
        locale === "zh" ? serif.className : ""
      }`}
    >
      {children}
    </p>
  );
}

function AproposSectionBlock({
  section,
  locale,
}: {
  section: AproposSection;
  locale: Locale;
}) {
  const variant = section.variant ?? "default";
  const useSerif = locale === "zh";

  if (variant === "callout") {
    return (
      <section className="rounded-sm border border-stone-200 bg-stone-50/80 px-6 py-7 md:px-8">
        {section.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`${
              useSerif ? serif.className : ""
            } ${index === 0 ? "text-base font-medium leading-[1.9] text-stone-900 md:text-lg" : "mt-3 text-sm leading-[1.9] text-stone-600 md:text-base"}`}
          >
            {paragraph}
          </p>
        ))}
      </section>
    );
  }

  if (variant === "verse") {
    return (
      <section className="border-l-2 border-stone-300 pl-6 md:pl-8">
        {section.label ? (
          <SectionLabel locale={locale}>{section.label}</SectionLabel>
        ) : null}
        <div className={`space-y-3 ${useSerif ? serif.className : ""}`}>
          {section.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "text-base font-medium leading-[1.85] text-stone-900 md:text-[17px]"
                  : "text-sm leading-[1.85] text-stone-600 md:text-base"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "list") {
    return (
      <section className="rounded-sm bg-stone-50/50 px-6 py-6 md:px-8">
        <ul className={`space-y-2 ${useSerif ? serif.className : ""}`}>
          {section.paragraphs.map((paragraph, index) => (
            <li
              key={index}
              className="flex gap-3 text-sm leading-[1.85] text-stone-700 md:text-base"
            >
              <span
                className="mt-[0.65em] h-1 w-1 shrink-0 rounded-full bg-stone-400"
                aria-hidden
              />
              <span>{paragraph}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (variant === "closing") {
    return (
      <section className="border-t border-stone-200 pt-10">
        <p
          className={`text-sm leading-[2] text-stone-600 md:text-base ${
            useSerif ? serif.className : ""
          }`}
        >
          {section.paragraphs[0]}
        </p>
        <div
          className={`mt-8 space-y-2 ${useSerif ? serif.className : ""}`}
        >
          {section.paragraphs.slice(1).map((paragraph, index, arr) => (
            <p
              key={index}
              className={
                index === arr.length - 1
                  ? "text-lg font-medium leading-[1.85] text-stone-900 md:text-xl"
                  : "text-base font-medium leading-[1.9] text-stone-800 md:text-lg"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      {section.label ? (
        <SectionLabel locale={locale}>{section.label}</SectionLabel>
      ) : null}
      <div className={`space-y-5 ${useSerif ? serif.className : ""}`}>
        {section.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0 && !section.label
                ? "text-base leading-[2] text-stone-800 md:text-[17px]"
                : "text-sm leading-[2] text-stone-600 md:text-base"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

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

      <main className="mx-auto max-w-3xl px-6 py-12 md:px-16 md:py-20">
        <header className="border-b border-stone-200 pb-10 text-center">
          <h1
            className={`${
              locale === "zh" ? serif.className : ""
            } text-2xl font-normal tracking-wide text-stone-900 md:text-3xl`}
          >
            {content.title}
          </h1>
        </header>

        <div className="mt-12 space-y-12 md:space-y-14">
          {content.sections.map((section, index) => (
            <AproposSectionBlock
              key={`${section.label ?? section.variant ?? "section"}-${index}`}
              section={section}
              locale={locale}
            />
          ))}
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
