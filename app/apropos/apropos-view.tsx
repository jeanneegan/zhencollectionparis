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
  accentParagraphs?: number[];
};

const proseClass = "text-sm leading-[2] text-stone-700 md:text-base";
const calloutClass = "text-sm font-medium leading-[2] text-stone-800 md:text-base";
const accentBarClass = "border-l-2 border-stone-300 pl-5";
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
          "世界并不缺少艺术。缺少的是，一个能够让艺术持续生长、让人与人真正相遇、让共同记忆得以保存的地方。",
          "今天，我们每天观看无数图像，却越来越少停下来面对一件作品；越来越少认真倾听一位艺术家；也越来越少愿意进入另一种文化，只为了理解，而不是判断。",
          "于是，巴黎臻藏诞生了。",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "它不是为了增加一种声音。而是为了创造一种相遇。",
          "更为了珍藏那些因相遇而产生的共同记忆。",
        ],
      },
      {
        label: "艺术属于生命",
        paragraphs: [
          "我们相信，艺术首先属于生命。每一件作品，都来自一个人的生活、记忆、情感与思考。在成为作品之前，它首先是一段生命的经历；在拥有市场价值之前，它首先是一种理解世界的方式。因此，我们不仅关注作品，也关注作品背后的人。",
          "我们相信，一件真正的作品，不会因为一次展览结束，也不会因为一次交易完成而停止成长。它会随着时间，被不同的人观看、理解、收藏、讨论，并不断获得新的意义。",
        ],
      },
      {
        label: "对话也是创作",
        paragraphs: [
          "我们相信，对话本身就是一种创作。当一位法国艺术家向一位中国艺术家提出一个问题；当一位中国艺术家回应另一种文化的目光；当一位评论家写下新的理解；当一位收藏家分享与作品相伴的故事；当一位普通观众说出自己的真实感受——新的作品，也许已经开始诞生。",
          "它存在于人与人之间，存在于理解发生的那一刻。",
        ],
      },
      {
        label: "每一种观看，都值得留下",
        paragraphs: [
          "我们相信，每一种真诚的观看，都值得被尊重。艺术属于艺术家，也属于每一个愿意认真观看的人。专业的研究、评论与策展，为艺术建立知识；而普通人的感受，则让艺术重新回到生活。",
          "因此，我们不仅记录艺术家的声音，也记录评论家的理解、策展人的思考、收藏家的陪伴，以及公众真实的回应。因为真正构成艺术历史的，从来不是一个人的声音，而是一个共同体持续不断的参与。",
        ],
      },
      {
        label: "臻",
        variant: "verse",
        paragraphs: [
          "臻，是一个动词。它不是抵达，而是不断接近——接近真实，接近美，接近那些值得被保存、被传承、被分享的事物。",
          "因此，我们不急于定义，我们愿意持续靠近。因为真正的价值，总是在时间中慢慢形成。",
        ],
      },
      {
        label: "藏",
        variant: "verse",
        paragraphs: [
          "藏，不只是收藏。收藏作品，更收藏作品的一生——收藏人与人的相遇，收藏思想的流动，收藏不同文明之间持续发生的理解。",
          "一件作品，可以经历创作、展览、评论、收藏、出版、再展览、再收藏；每一次相遇，都会成为它生命的一部分。因此，巴黎臻藏不仅记录艺术家，也持续记录作品——记录它如何穿越时间，连接不同的人，并成为共同记忆的一部分。",
        ],
      },
      {
        label: "巴黎，与世界",
        paragraphs: [
          "巴黎，是我们的起点。中国，是我们的第一场对话。未来，我们希望连接更多国家、更多文化、更多文明。",
          "巴黎臻藏不属于任何一个国家，也不属于任何一种文化。我们相信，每一种文明，都拥有理解世界的独特方式。真正的交流，不是消除差异，而是在差异之中，看见彼此。",
        ],
      },
      {
        label: "一个持续生长的共同体",
        paragraphs: [
          "巴黎臻藏以协会的形式成立，但它真正希望建立的，并不仅是一家协会，而是一个能够随着时间不断生长的国际艺术共同体。在这里，艺术家、画廊、收藏家、评论家、策展人、研究者，以及每一位愿意认真观看的人，都共同参与一件作品的生命——作品因此不断成长，人也因此不断成长。",
          "我们建立艺术家的国际档案，记录作品的一生，举办跨文化线上展览，连接不同国家的专业人士与收藏家，让作品在时间中持续被理解、被传播、被收藏、被重新发现。",
        ],
      },
      {
        label: "我们真正珍藏的是什么？",
        paragraphs: [
          "我们记录作品、艺术家、评论、展览与收藏，记录一次次跨越文化的相遇，也记录这个时代如何通过艺术重新理解彼此。",
          "如果很多年以后，当人们回望这个时代，仍然能够通过这里，看见一位艺术家的成长、一件作品的一生、一位收藏家的陪伴、一场跨越文明的对话，以及无数普通人关于生命的真实思考。",
          "那么，巴黎臻藏存在的意义，便已经实现。",
          "因为我们相信：艺术，是媒介。",
          "时间，是创造者。",
          "而真正值得珍藏的，不是一件作品本身，而是一群人与一件作品共同走过的时间。",
        ],
        accentParagraphs: [3, 4],
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

function paragraphClass(
  section: AproposSection,
  baseClass: string,
  index: number,
): string {
  if (section.accentParagraphs?.includes(index)) {
    return `${baseClass} ${accentBarClass}`;
  }

  return baseClass;
}

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
  const textClass = variant === "callout" ? calloutClass : proseClass;

  if (variant === "callout") {
    return (
      <section className="rounded-sm border border-stone-200 bg-stone-50/80 px-6 py-7 md:px-8">
        <div className={`space-y-4 ${useSerif ? serif.className : ""}`}>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className={textClass}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "verse") {
    return (
      <section className="border-l-2 border-stone-300 pl-6 md:pl-8">
        {section.label ? (
          <SectionLabel locale={locale}>{section.label}</SectionLabel>
        ) : null}
        <div className={`space-y-5 ${useSerif ? serif.className : ""}`}>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className={paragraphClass(section, proseClass, index)}>
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
        {section.label ? (
          <SectionLabel locale={locale}>{section.label}</SectionLabel>
        ) : null}
        <ul className={`space-y-2 ${useSerif ? serif.className : ""}`}>
          {section.paragraphs.map((paragraph, index) => (
            <li key={index} className={`flex gap-3 ${proseClass}`}>
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

  return (
    <section>
      {section.label ? (
        <SectionLabel locale={locale}>{section.label}</SectionLabel>
      ) : null}
      <div className={`space-y-5 ${useSerif ? serif.className : ""}`}>
        {section.paragraphs.map((paragraph, index) => (
          <p key={index} className={paragraphClass(section, proseClass, index)}>
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
