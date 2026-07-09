"use client";

import { Noto_Serif_SC } from "next/font/google";
import { AproposNarration } from "@/app/components/apropos-narration";
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
          "世界并不缺少艺术，缺少的是一个能让艺术持续生长、让人与人真正相遇、让共同记忆得以保存的地方。",
          "今天，我们每天观看无数图像，却越来越少停下来面对一件作品；越来越少认真倾听一位艺术家；也越来越少愿意走进另一种文化，只为理解，而非判断。",
          "于是，巴黎臻藏诞生了。",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "它不是为了增加一种声音，而是为了创造一种相遇，更为了珍藏那些因相遇而生的共同记忆。",
        ],
      },
      {
        label: "艺术属于生命",
        paragraphs: [
          "我们相信，艺术首先属于生命。每一件作品，都源自一个人的生活、记忆、情感与思考。在成为作品之前，它首先是一段生命的经历；在拥有市场价值之前，它首先是一种理解世界的方式。因此，我们关注的不只是作品，更是作品背后的人。",
          "我们相信，一件真正的作品，不会因一次展览的落幕而停止生长，也不会因一次交易的完成而止步于此。它将随着时间，被不同的人观看、理解、收藏、讨论，并不断获得新的意义。",
        ],
      },
      {
        label: "对话也是创作",
        paragraphs: [
          "我们相信，对话本身就是一种创作。当一位法国艺术家向一位中国艺术家提出问题；当一位中国艺术家回应另一种文化的目光；当一位评论家写下新的理解；当一位收藏家分享与作品相伴的故事；当一位普通观众说出内心真实的感受，一件新的作品，或许已悄然诞生。",
          "它存在于人与人之间，存在于理解发生的那一刻。",
        ],
      },
      {
        label: "每一种观看，都值得留下",
        paragraphs: [
          "我们相信，每一种真诚的观看都值得被尊重。艺术属于艺术家，也属于每一个愿意认真观看的人。专业的研究、评论与策展，为艺术建立知识；而普通人的感受，则让艺术重新回到生活。",
          "因此，我们不仅记录艺术家的声音，也记录评论家的理解、策展人的思考、收藏家的陪伴，以及公众真实的回应。因为真正构成艺术历史的，从来不是一个人的声音，而是一个共同体持续不断的参与。",
        ],
      },
      {
        label: "臻",
        variant: "verse",
        paragraphs: [
          "臻，是一个动词。它不是抵达，而是不断接近，接近真实，接近美，接近那些值得被保存、被传承、被分享的事物。",
          "因此，我们不急于定义，只愿持续靠近。因为真正的价值，总是在时间中慢慢形成。",
        ],
      },
      {
        label: "藏",
        variant: "verse",
        paragraphs: [
          "藏，不只是收藏。收藏作品，更收藏作品的一生，收藏人与人的相遇，收藏思想的流动，收藏不同文明之间持续发生的理解。",
          "一件作品，会经历创作、展览、评论、收藏、出版、再展览、再收藏；每一次相遇，都会成为它生命的一部分。因此，巴黎臻藏不仅记录艺术家，也持续记录作品，记录它如何穿越时间、连接不同的人，并成为共同记忆的一部分。",
        ],
      },
      {
        label: "巴黎，与世界",
        paragraphs: [
          "巴黎，是我们的起点；中国，是我们的第一场对话；未来，我们希望连接更多国家、更多文化、更多文明。",
          "巴黎臻藏不属于任何一个国家，也不属于任何一种文化。我们相信，每一种文明都拥有理解世界的独特方式。真正的交流，不是消除差异，而是在差异之中，看见彼此。",
        ],
      },
      {
        label: "一个持续生长的共同体",
        paragraphs: [
          "巴黎臻藏以协会的形式成立，但我们真正希望建立的，不仅是一家协会，而是一个能随时间不断生长的国际艺术共同体。在这里，艺术家、画廊、收藏家、评论家、策展人、研究者，以及每一位愿意认真观看的人，都共同参与一件作品的生命，作品因此不断成长，人也因此不断成长。",
          "我们建立艺术家的国际档案，记录作品的一生；举办跨文化线上展览，连接不同国家的专业人士与收藏家，让作品在时间中持续被理解、被传播、被收藏、被重新发现。",
        ],
      },
      {
        label: "我们真正珍藏的是什么？",
        paragraphs: [
          "我们记录作品、艺术家、评论、展览与收藏，记录一次次跨越文化的相遇，也记录这个时代如何通过艺术重新理解彼此。",
          "如果很多年以后，当人们回望这个时代，仍能通过这里，看见一位艺术家的成长、一件作品的一生、一位收藏家的陪伴、一场跨越文明的对话，以及无数普通人关于生命的真实思考。",
          "那么，巴黎臻藏存在的意义，便已实现。",
          "因为我们相信：",
          "艺术，是媒介。",
          "时间，是创造者。",
          "真正值得珍藏的，从来不是一件作品本身，而是它在人与人之间不断生成的共同理解。",
        ],
        accentParagraphs: [4, 5],
      },
    ],
  },
  fr: {
    title: "Pourquoi Zhen Collection Paris ?",
    sections: [
      {
        paragraphs: [
          "Le monde ne manque pas d'art. Ce qui lui manque, c'est un lieu où l'art puisse continuer à grandir, où les êtres humains puissent vraiment se rencontrer, et où la mémoire commune puisse être préservée.",
          "Aujourd'hui, nous regardons chaque jour d'innombrables images, mais nous nous arrêtons de moins en moins devant une œuvre ; nous écoutons de moins en moins vraiment un artiste ; et nous acceptons de moins en moins d'entrer dans une autre culture, simplement pour comprendre, et non pour juger.",
          "C'est ainsi qu'est né Zhen Collection Paris.",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "Il ne s'agit pas d'ajouter une voix de plus, mais de créer une rencontre, et plus encore, de préserver les mémoires communes que ces rencontres font naître.",
        ],
      },
      {
        label: "L'art appartient à la vie",
        paragraphs: [
          "Nous croyons que l'art appartient d'abord à la vie. Chaque œuvre naît de la vie, de la mémoire, des émotions et de la pensée d'une personne. Avant de devenir une œuvre, elle est d'abord un moment de vie ; avant d'avoir une valeur marchande, elle est d'abord une manière de comprendre le monde. C'est pourquoi nous ne nous intéressons pas seulement aux œuvres, mais aussi aux personnes qui se trouvent derrière elles.",
          "Nous croyons qu'une œuvre véritable ne cesse pas de grandir à la fin d'une exposition, ni ne s'arrête après une transaction. Avec le temps, elle continuera d'être regardée, comprise, collectionnée et discutée par des personnes différentes, et ne cessera de gagner de nouveaux sens.",
        ],
      },
      {
        label: "Le dialogue est aussi une création",
        paragraphs: [
          "Nous croyons que le dialogue lui-même est une forme de création. Lorsqu'un artiste français pose une question à un artiste chinois ; lorsqu'un artiste chinois répond au regard d'une autre culture ; lorsqu'un critique écrit une nouvelle interprétation ; lorsqu'un collectionneur partage l'histoire qui l'unit à une œuvre ; lorsqu'un simple visiteur exprime ce qu'il ressent vraiment, une œuvre nouvelle est peut-être déjà en train de naître.",
          "Elle existe entre les êtres humains, elle existe dans l'instant même où la compréhension se produit.",
        ],
      },
      {
        label: "Chaque regard mérite d'être conservé",
        paragraphs: [
          "Nous croyons que tout regard sincère mérite d'être respecté. L'art appartient aux artistes, mais il appartient aussi à chaque personne qui accepte de le regarder avec attention. La recherche, la critique et le commissariat professionnels construisent le savoir sur l'art ; le ressenti des gens ordinaires ramène l'art à la vie.",
          "C'est pourquoi nous ne recueillons pas seulement la voix des artistes, mais aussi la compréhension des critiques, la pensée des commissaires, l'accompagnement des collectionneurs, et les réactions sincères du public. Car ce qui constitue véritablement l'histoire de l'art n'a jamais été la voix d'une seule personne, mais la participation continue de toute une communauté.",
        ],
      },
      {
        label: "Zhen (臻)",
        variant: "verse",
        paragraphs: [
          "Zhen est un verbe. Il ne signifie pas atteindre, mais s'approcher sans cesse, s'approcher du vrai, s'approcher du beau, s'approcher de ce qui mérite d'être préservé, transmis et partagé.",
          "C'est pourquoi nous ne sommes pas pressés de définir ; nous préférons continuer à nous approcher. Car la véritable valeur se forme toujours lentement, dans le temps.",
        ],
      },
      {
        label: "Cang (藏)",
        variant: "verse",
        paragraphs: [
          "Cang ne signifie pas seulement collectionner. Collectionner une œuvre, c'est collectionner toute sa vie, collectionner les rencontres entre les êtres, la circulation des idées, et la compréhension qui ne cesse de naître entre les civilisations.",
          "Une œuvre peut traverser la création, l'exposition, la critique, la collection, la publication, une nouvelle exposition, une nouvelle collection ; chaque rencontre devient une part de sa vie. C'est pourquoi Zhen Collection Paris ne se contente pas de recueillir les artistes, mais continue de suivre les œuvres elles-mêmes, la manière dont elles traversent le temps, relient des personnes différentes, et deviennent une part de notre mémoire commune.",
        ],
      },
      {
        label: "Paris, et le monde",
        paragraphs: [
          "Paris est notre point de départ. La Chine est notre premier dialogue. À l'avenir, nous espérons relier davantage de pays, de cultures et de civilisations.",
          "Zhen Collection Paris n'appartient à aucun pays, à aucune culture en particulier. Nous croyons que chaque civilisation possède sa propre manière de comprendre le monde. Le véritable échange ne consiste pas à effacer les différences, mais à voir l'autre à travers elles.",
        ],
      },
      {
        label: "Une communauté en perpétuelle croissance",
        paragraphs: [
          "Zhen Collection Paris est fondée sous la forme d'une association, mais ce que nous souhaitons véritablement construire dépasse une simple association : c'est une communauté artistique internationale, capable de grandir avec le temps. Ici, artistes, galeries, collectionneurs, critiques, commissaires, chercheurs, et toute personne prête à regarder avec attention, participent ensemble à la vie d'une œuvre, l'œuvre grandit ainsi, et les personnes grandissent avec elle.",
          "Nous constituons des archives internationales d'artistes, retraçant la vie de leurs œuvres ; nous organisons des expositions en ligne interculturelles, reliant professionnels et collectionneurs de différents pays, afin que les œuvres continuent d'être comprises, diffusées, collectionnées et redécouvertes à travers le temps.",
        ],
      },
      {
        label: "Que préservons-nous vraiment ?",
        paragraphs: [
          "Nous documentons les œuvres, les artistes, les critiques, les expositions et les collections ; nous gardons trace de chaque rencontre interculturelle, et de la manière dont notre époque, à travers l'art, apprend à nouveau à se comprendre elle-même.",
          "Si, dans de nombreuses années, en se retournant vers notre époque, on pouvait encore voir ici la croissance d'un artiste, la vie entière d'une œuvre, l'accompagnement d'un collectionneur, un dialogue entre les civilisations, ainsi que les réflexions sincères d'innombrables personnes sur la vie.",
          "alors, la raison d'être de Zhen Collection Paris sera pleinement accomplie.",
          "Car nous croyons que :",
          "L'art est un médium.",
          "Le temps est le créateur.",
          "Ce qui mérite vraiment d'être préservé n'est jamais une œuvre en elle-même, mais la compréhension commune qu'elle ne cesse de faire naître entre les êtres humains.",
        ],
        accentParagraphs: [4, 5],
      },
    ],
  },
  en: {
    title: "Why Zhen Collection Paris?",
    sections: [
      {
        paragraphs: [
          "The world does not lack art. What it lacks is a place where art can keep growing, where people can truly meet one another, and where shared memory can be preserved.",
          "Today, we look at countless images every day, yet we stop less and less often to face a single work of art. We listen less and less to an artist. And we are less and less willing to step into another culture simply to understand it, rather than to judge it.",
          "This is why Zhen Collection Paris was born.",
        ],
      },
      {
        variant: "callout",
        paragraphs: [
          "It is not meant to add one more voice. It is meant to create an encounter, and more than that, to preserve the shared memories that such encounters bring into being.",
        ],
      },
      {
        label: "Art Belongs to Life",
        paragraphs: [
          "We believe that art belongs first to life. Every work comes from a person's life, memory, emotion, and thought. Before becoming a work, it is first a lived experience. Before having market value, it is first a way of understanding the world. This is why we pay attention not only to the work, but also to the person behind it.",
          "We believe that a true work of art does not stop growing when an exhibition ends, nor does it stop when a transaction is completed. Over time, it will continue to be seen, understood, collected, and discussed by different people, constantly gaining new meaning.",
        ],
      },
      {
        label: "Dialogue Is Also Creation",
        paragraphs: [
          "We believe that dialogue itself is a form of creation. When a French artist asks a question to a Chinese artist, when a Chinese artist responds to the gaze of another culture, when a critic writes a new interpretation, when a collector shares the story that binds them to a work, when an ordinary viewer expresses what they truly feel, a new work may already be quietly coming into being.",
          "It exists between people. It exists in the very moment that understanding happens.",
        ],
      },
      {
        label: "Every Way of Looking Deserves to Be Kept",
        paragraphs: [
          "We believe that every sincere way of looking deserves respect. Art belongs to artists, but it also belongs to everyone willing to look at it with genuine attention. Professional research, criticism, and curation build knowledge around art, while the feelings of ordinary people bring art back into life.",
          "This is why we record not only the voices of artists, but also the understanding of critics, the thinking of curators, the companionship of collectors, and the honest responses of the public. What truly makes up the history of art has never been a single voice, but the ongoing participation of a whole community.",
        ],
      },
      {
        label: "Zhen (臻)",
        variant: "verse",
        paragraphs: [
          "Zhen is a verb. It does not mean arriving, but constantly drawing closer, closer to truth, closer to beauty, closer to everything worth preserving, passing on, and sharing.",
          "This is why we are in no hurry to define things. We would rather keep drawing near. True value always forms slowly, over time.",
        ],
      },
      {
        label: "Cang (藏)",
        variant: "verse",
        paragraphs: [
          "Cang means more than collecting. To collect a work is to collect its entire life, to collect the encounters between people, the movement of ideas, and the understanding that keeps unfolding between civilizations.",
          "A work may pass through creation, exhibition, criticism, collection, publication, further exhibition, and further collection. Each encounter becomes part of its life. This is why Zhen Collection Paris does not only record artists, but continues to follow the works themselves, tracing how they move through time, connect different people, and become part of our shared memory.",
        ],
      },
      {
        label: "Paris, and the World",
        paragraphs: [
          "Paris is our starting point. China is our first dialogue. In the future, we hope to connect more countries, more cultures, and more civilizations.",
          "Zhen Collection Paris does not belong to any single country or culture. We believe that every civilization has its own way of understanding the world. True exchange does not erase differences. It allows us to see one another through them.",
        ],
      },
      {
        label: "A Community That Keeps Growing",
        paragraphs: [
          "Zhen Collection Paris was founded as an association, but what we truly hope to build is more than an association. It is an international artistic community capable of growing over time. Here, artists, galleries, collectors, critics, curators, researchers, and everyone willing to look with real attention all take part in the life of a work. In this way, the work keeps growing, and so do the people involved.",
          "We build international archives of artists, tracing the life of their works. We host cross-cultural online exhibitions, connecting professionals and collectors across different countries, so that works can continue to be understood, shared, collected, and rediscovered through time.",
        ],
      },
      {
        label: "What Do We Truly Preserve?",
        paragraphs: [
          "We record works, artists, criticism, exhibitions, and collections. We keep track of every cross-cultural encounter, and of how this era learns, again and again, to understand itself through art.",
          "If, many years from now, people looking back at this era could still see here the growth of an artist, the full life of a work, the companionship of a collector, a dialogue between civilizations, and the honest reflections on life shared by countless ordinary people, then the reason Zhen Collection Paris exists will already have been fulfilled.",
          "Because we believe:",
          "Art is the medium.",
          "Time is the creator.",
          "What truly deserves to be preserved is never a single work in itself, but the shared understanding it continuously brings into being between people.",
        ],
        accentParagraphs: [3, 4],
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
      className={`mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#5a2323] ${
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

        <AproposNarration locale={locale} />

        <PageBottomNav locale={locale} />
      </main>

      <SiteFooter locale={locale} />
    </div>
  );
}
