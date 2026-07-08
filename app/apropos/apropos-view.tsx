"use client";

import { Noto_Serif_SC } from "next/font/google";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteBrandLogo } from "@/app/components/site-brand-logo";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import type { Locale } from "@/app/artists/[slug]/data";
import { useLocale } from "@/app/lib/use-locale";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type SectionVariant = "default" | "callout" | "verse" | "list" | "closing";

type ClosingParagraphStyle =
  | "intro"
  | "lead"
  | "verse"
  | "body"
  | "emphasis"
  | "final";

type AproposSection = {
  label?: string;
  variant?: SectionVariant;
  paragraphs: string[];
  closingStyles?: ClosingParagraphStyle[];
};

const closingStyleClasses: Record<ClosingParagraphStyle, string> = {
  intro: "text-sm leading-[2] text-stone-600 md:text-base",
  lead: "text-base font-medium leading-[1.9] text-stone-800 md:text-lg",
  verse:
    "border-l-2 border-stone-300 pl-5 text-base font-medium leading-[1.85] text-stone-800 md:text-lg",
  body: "text-sm leading-[2] text-stone-600 md:text-base",
  emphasis: "text-base font-medium leading-[1.9] text-stone-800 md:text-lg",
  final: "text-lg font-medium leading-[1.85] text-stone-900 md:text-xl",
};

const closingParagraphStyles: ClosingParagraphStyle[] = [
  "intro",
  "lead",
  "verse",
  "verse",
  "body",
  "emphasis",
  "final",
];

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
          "巴黎臻藏以协会的形式成立。但它真正希望建立的，并不仅是一家协会。而是一个能够随着时间不断生长的艺术平台。",
          "在这里，艺术家、画廊，收藏家、研究者、策展人，以及每一位愿意认真观看的人，都可以相遇，让作品、思想与不同文化彼此交流，并共同留下这个时代的记录。",
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
        closingStyles: closingParagraphStyles,
        paragraphs: [
          "如果很多年以后，当人们回望这个时代，仍然能够通过这里，看见一位艺术家的创作、一场真实的对话、一段跨越文明的相遇，以及一个个普通人对于生命的思考，那么，巴黎臻藏存在的意义，便已经实现。",
          "因为我们相信，",
          "艺术，是媒介。",
          "而我们真正关心的，始终是每一个具体的人。",
          "愿每一个来到这里的人，都能够因为一次作品、一场对话、一次相遇，而重新思考自己的生命。",
          "因为真正值得收藏的，",
          "是人在不断理解自己、理解他人、理解世界的过程中，所留下的一生。",
        ],
      },
    ],
  },
  fr: {
    title: "Pourquoi Zhen Collection Paris ?",
    sections: [
      {
        paragraphs: [
          "Le monde ne manque pas d'art. Ce qui manque, c'est la volonté de s'arrêter et de vraiment se voir les uns les autres.",
          "Aujourd'hui, nous regardons chaque jour d'innombrables images. Pourtant, nous prenons de moins en moins le temps de nous arrêter devant une œuvre, d'écouter véritablement un artiste ou d'entrer dans une autre culture avec le désir de comprendre plutôt que de juger.",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "C'est de ce constat qu'est née Zhen Collection Paris.",
          "Non pas pour ajouter une voix de plus. Mais pour créer un espace de rencontre.",
        ],
      },
      {
        label: "L'art appartient d'abord à la vie",
        paragraphs: [
          "Nous croyons que l'art appartient d'abord à la vie. Chaque œuvre naît d'une histoire, d'une mémoire, d'une émotion et d'une pensée. Avant d'être une œuvre, elle est une expérience humaine. Avant d'avoir une valeur sur le marché, elle est une manière d'habiter le monde. C'est pourquoi nous nous intéressons autant aux œuvres qu'aux personnes qui les créent.",
        ],
      },
      {
        label: "Le dialogue est une création",
        paragraphs: [
          "Nous croyons que le dialogue est lui aussi une forme de création. Lorsqu'un artiste français pose une question à un artiste chinois. Lorsqu'un artiste chinois répond au regard d'une autre culture. Lorsqu'un visiteur exprime sincèrement ce qu'il ressent. Alors quelque chose de nouveau peut apparaître. Peut-être une œuvre. Peut-être une compréhension. Toujours une rencontre.",
        ],
      },
      {
        label: "Chaque regard sincère compte",
        paragraphs: [
          "Nous croyons que tout regard sincère mérite d'être entendu. L'art appartient aux artistes. Mais il appartient aussi à celles et ceux qui prennent le temps de le regarder. La recherche, la critique et le commissariat construisent le savoir. Le regard du public, lui, redonne à l'art sa place dans la vie. C'est pourquoi nous voulons conserver la diversité des regards. Parce que chaque rencontre authentique mérite d'être préservée.",
        ],
      },
      {
        label: "Zhen",
        variant: "verse",
        paragraphs: [
          "Zhen est un verbe.",
          "Ce n'est pas parvenir. C'est continuer à s'approcher.",
          "S'approcher du vrai. Du beau.",
          "De ce qui mérite d'être préservé, transmis et partagé.",
          "Nous ne cherchons donc pas à définir une vérité. Nous choisissons de continuer à nous en approcher.",
        ],
      },
      {
        label: "Collection",
        variant: "verse",
        paragraphs: [
          "Collection ne signifie pas seulement collectionner.",
          "C'est aussi recueillir le temps. Préserver les rencontres. Conserver le mouvement des idées. Garder la trace d'une époque.",
          "Collectionner ne consiste pas seulement à posséder. C'est permettre à une mémoire qui aurait pu disparaître de continuer à vivre.",
        ],
      },
      {
        label: "Paris et la Chine",
        paragraphs: [
          "Paris est notre point de départ. La Chine est notre première conversation.",
          "Mais Zhen Collection Paris n'appartient ni à un pays ni à une culture. Nous croyons que chaque civilisation porte une manière singulière de comprendre le monde.",
          "Le véritable dialogue n'efface pas les différences. Il leur permet de se rencontrer.",
        ],
      },
      {
        label: "Une plateforme vivante",
        paragraphs: [
          "Zhen Collection Paris est fondée sous la forme d'une association. Mais ce qu'elle souhaite véritablement construire n'est pas seulement une association. C'est une plateforme artistique appelée à grandir avec le temps.",
          "Ici, artistes, galeries, collectionneurs, chercheurs, commissaires d'exposition et tous ceux qui regardent avec attention peuvent se rencontrer, faire dialoguer les œuvres, les idées et les cultures, et laisser ensemble la trace de notre époque.",
        ],
      },
      {
        variant: "list",
        paragraphs: [
          "Nous y archivons des œuvres.",
          "Des artistes.",
          "Des conversations.",
          "Et la manière dont notre époque apprend, à travers l'art, à mieux se comprendre.",
        ],
      },
      {
        variant: "closing",
        closingStyles: closingParagraphStyles,
        paragraphs: [
          "Si, dans de nombreuses années, en regardant cette époque, l'on peut encore, à travers ce lieu, voir la création d'un artiste, une conversation authentique, une rencontre entre civilisations, et la réflexion de personnes ordinaires sur la vie, alors le sens de l'existence de Zhen Collection Paris sera accompli.",
          "Parce que nous croyons que",
          "L'art est un médium.",
          "Et ce qui nous importe véritablement, ce sont toujours les personnes concrètes.",
          "Nous souhaitons que chacun et chacune qui viennent ici puissent, à travers une œuvre, une conversation, une rencontre, repenser sa propre vie.",
          "Parce que ce qui mérite vraiment d'être conservé,",
          "C'est ce qu'une vie laisse derrière elle, dans le processus continuel de se comprendre soi-même, de comprendre autrui et de comprendre le monde.",
        ],
      },
    ],
  },
  en: {
    title: "Why Zhen Collection Paris?",
    sections: [
      {
        paragraphs: [
          "The world does not lack art. What is lacking is the willingness to stop and truly see one another.",
          "Today, we look at countless images every day. Yet we take less and less time to stop before a work, to truly listen to an artist, or to enter another culture with the desire to understand rather than to judge.",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "It was from this observation that Zhen Collection Paris was born.",
          "Not to add another voice. But to create a space for encounter.",
        ],
      },
      {
        label: "Art belongs first to life",
        paragraphs: [
          "We believe that art belongs first to life. Each work is born from a story, a memory, an emotion, and a thought. Before it is a work, it is a human experience. Before it has value on the market, it is a way of inhabiting the world. That is why we are as interested in the works as in the people who create them.",
        ],
      },
      {
        label: "Dialogue is also a form of creation",
        paragraphs: [
          "We believe that dialogue is also a form of creation. When a French artist asks a question of a Chinese artist. When a Chinese artist responds to the gaze of another culture. When a visitor sincerely expresses what they feel. Then something new can appear. Perhaps a work. Perhaps an understanding. Always an encounter.",
        ],
      },
      {
        label: "Every sincere gaze matters",
        paragraphs: [
          "We believe that every sincere gaze deserves to be heard. Art belongs to artists. But it also belongs to those who take the time to look at it. Research, criticism, and curating build knowledge. The gaze of the public, in turn, restores art's place in life. That is why we want to preserve the diversity of gazes. Because every authentic encounter deserves to be preserved.",
        ],
      },
      {
        label: "Zhen",
        variant: "verse",
        paragraphs: [
          "Zhen is a verb.",
          "It is not arrival. It is continuing to draw near.",
          "Drawing near to what is true. To beauty.",
          "To what deserves to be preserved, transmitted, and shared.",
          "So we do not seek to define a truth. We choose to keep drawing nearer to it.",
        ],
      },
      {
        label: "Collection",
        variant: "verse",
        paragraphs: [
          "Collection does not mean only collecting.",
          "It is also gathering time. Preserving encounters. Keeping the movement of ideas. Keeping the trace of an era.",
          "To collect is not only to possess. It is to allow a memory that might have disappeared to continue living.",
        ],
      },
      {
        label: "Paris and China",
        paragraphs: [
          "Paris is our starting point. China is our first conversation.",
          "But Zhen Collection Paris belongs neither to one country nor to one culture. We believe that each civilization carries a singular way of understanding the world.",
          "True dialogue does not erase differences. It allows them to meet.",
        ],
      },
      {
        label: "A living platform",
        paragraphs: [
          "Zhen Collection Paris is founded as an association. But what it truly hopes to build is not only an association. It is an art platform meant to grow over time.",
          "Here, artists, galleries, collectors, researchers, curators, and everyone who looks with attention can meet, allow works, ideas, and cultures to enter into dialogue, and together leave a trace of our era.",
        ],
      },
      {
        variant: "list",
        paragraphs: [
          "We archive works there.",
          "Artists.",
          "Conversations.",
          "And the way our era learns, through art, to understand itself better.",
        ],
      },
      {
        variant: "closing",
        closingStyles: closingParagraphStyles,
        paragraphs: [
          "If many years from now, when people look back at this era, they can still through this place see an artist's creation, a genuine conversation, an encounter across civilizations, and ordinary people's reflections on life, then the meaning of Zhen Collection Paris's existence will have been fulfilled.",
          "Because we believe,",
          "Art is a medium.",
          "And what we truly care about is always each concrete person.",
          "We hope that everyone who comes here may, through a work, a conversation, an encounter, rethink their own life.",
          "Because what is truly worth preserving,",
          "Is what a life leaves behind in the ongoing process of understanding oneself, understanding others, and understanding the world.",
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
    const styles = section.closingStyles;

    if (styles) {
      return (
        <section>
          <div className={`space-y-4 ${useSerif ? serif.className : ""}`}>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className={closingStyleClasses[styles[index]]}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      );
    }

    return (
      <section>
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

        <div className="mt-16 flex justify-center border-t border-stone-200 pt-12">
          <SiteBrandLogo variant="full" />
        </div>

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
