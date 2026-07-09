"use client";

import { Noto_Serif_SC } from "next/font/google";
import { PageBottomNav } from "@/app/components/page-bottom-nav";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

const serif = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500"],
});

type TrilingualText = {
  fr: string[];
  en: string[];
  zh: string[];
};

type AgreementSection = {
  heading: {
    fr: string;
    en: string;
    zh: string;
  };
  body: TrilingualText;
};

const prevailingNotice: TrilingualText = {
  fr: [
    "La version française fait foi en cas de divergence d'interprétation.",
  ],
  en: [
    "In case of any inconsistency, the French version shall prevail.",
  ],
  zh: ["如不同语言版本存在解释差异，以法文版本为准。"],
};

const sections: AgreementSection[] = [
  {
    heading: {
      fr: "Préambule",
      en: "Preamble",
      zh: "前言",
    },
    body: {
      fr: [
        "Zhen Collection Paris est une plateforme culturelle indépendante dédiée à la documentation des artistes, au dialogue interculturel et à la constitution d'archives à long terme. Le présent accord définit le cadre de collaboration entre les parties.",
      ],
      en: [
        "Zhen Collection Paris is an independent cultural platform dedicated to documenting artists, encouraging intercultural dialogue and building long-term archives. This Agreement defines the framework of collaboration.",
      ],
      zh: [
        "巴黎臻藏是一个独立的文化平台，致力于记录艺术家、促进跨文化对话，并建立长期艺术档案。本协议旨在明确双方合作框架。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 1 – Objet",
      en: "Article 1 – Scope",
      zh: "第一条 合作范围",
    },
    body: {
      fr: [
        "La collaboration peut comprendre le Passeport d'Artiste, les Dialogues d'Artistes, les expositions en ligne, les entretiens, les publications et les projets éditoriaux.",
      ],
      en: [
        "The collaboration may include the Artist Passport, Artist Dialogues, online exhibitions, interviews, publications and editorial projects.",
      ],
      zh: [
        "合作可包括艺术家护照、艺术家对话、线上展览、采访、出版及相关编辑项目。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 2 – Documents fournis par l'Artiste",
      en: "Article 2 – Materials Provided by the Artist",
      zh: "第二条 艺术家提供资料",
    },
    body: {
      fr: [
        "L'Artiste fournit des informations exactes et garantit disposer des droits nécessaires sur les contenus remis.",
      ],
      en: [
        "The Artist provides accurate materials and confirms having the necessary rights to them.",
      ],
      zh: [
        "艺术家提供真实、准确且拥有合法权利的资料，包括作品图片、肖像、履历、创作陈述及相关信息。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 3 – Archives de l'Artiste",
      en: "Article 3 – Artist Archive",
      zh: "第三条 艺术家档案",
    },
    body: {
      fr: [
        "ZCP peut créer, mettre à jour et conserver les archives publiques relatives à la pratique de l'Artiste.",
      ],
      en: [
        "ZCP may create, update and preserve a public archive of the Artist's practice.",
      ],
      zh: [
        "巴黎臻藏可建立、更新并长期保存艺术家的公开档案，包括作品、展览、出版、采访及其他公开信息。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 4 – Licence d'utilisation",
      en: "Article 4 – Licence of Use",
      zh: "第四条 使用许可",
    },
    body: {
      fr: [
        "L'Artiste accorde à ZCP une licence non exclusive, mondiale et gratuite pour utiliser les contenus sur son site, ses réseaux sociaux, ses publications, ses expositions et ses projets réalisés avec des galeries, musées, éditeurs, médias et institutions culturelles.",
      ],
      en: [
        "The Artist grants ZCP a non-exclusive, worldwide, royalty-free licence to use the materials on its website, social media, publications, exhibitions and collaborative projects with galleries, museums, publishers, media and cultural institutions.",
      ],
      zh: [
        "艺术家授予巴黎臻藏一项非独占、全球、免费的使用许可，用于网站、社交媒体、出版物、展览，以及与画廊、博物馆、出版社、媒体及其他文化机构合作开展的项目。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 5 – Propriété intellectuelle",
      en: "Article 5 – Intellectual Property",
      zh: "第五条 知识产权",
    },
    body: {
      fr: [
        "Les œuvres originales et les contenus fournis par l'Artiste demeurent la propriété de l'Artiste. Les droits d'auteur relatifs aux entretiens, traductions, contenus éditoriaux et mises en page réalisés par Zhen Collection Paris appartiennent à Zhen Collection Paris.",
      ],
      en: [
        "Original artworks and materials provided by the Artist remain the property of the Artist. The copyright in interviews, translations, editorial content and layouts created by Zhen Collection Paris belongs to Zhen Collection Paris.",
      ],
      zh: [
        "艺术家的原创作品及其提供的资料，其权利归艺术家所有。巴黎臻藏创作的采访、翻译、编辑内容及版式设计等成果，其著作权归巴黎臻藏所有。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 6 – Partenaires",
      en: "Article 6 – Third-party Cooperation",
      zh: "第六条 第三方合作",
    },
    body: {
      fr: [
        "ZCP peut utiliser les contenus autorisés dans des projets menés avec des partenaires culturels. Toute reprise des contenus éditoriaux de ZCP doit mentionner la source.",
      ],
      en: [
        "ZCP may use authorised materials in collaborative cultural projects. Reuse of ZCP editorial content shall credit Zhen Collection Paris.",
      ],
      zh: [
        "巴黎臻藏可在与第三方文化机构合作的项目中使用授权内容。转载巴黎臻藏原创内容应注明来源“Zhen Collection Paris（巴黎臻藏）”。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 7 – Activités commerciales",
      en: "Article 7 – Commercial Matters",
      zh: "第七条 商业合作",
    },
    body: {
      fr: [
        "L'Artiste autorise Zhen Collection Paris à présenter ses œuvres à des collectionneurs, galeries, institutions culturelles ainsi qu'à toute personne ou organisation susceptible de contribuer au développement de sa carrière artistique, et à assurer les échanges et le suivi relatifs à ces opportunités. Toute vente d'œuvre, représentation commerciale, collaboration commerciale, commission ou modalité de paiement fera l'objet d'un accord écrit distinct entre les parties.",
      ],
      en: [
        "The Artist authorizes Zhen Collection Paris to present their artworks to collectors, galleries, cultural institutions, and any individuals or organizations that may contribute to the development of the Artist's career, and to communicate and coordinate regarding such opportunities. Any artwork sale, commercial representation, commercial collaboration, commission arrangement, or payment terms shall be governed by a separate written agreement between the parties.",
      ],
      zh: [
        "艺术家授权巴黎臻藏向收藏家、画廊、文化机构及其他有助于艺术家职业发展的个人或机构介绍其作品，并就相关合作机会进行沟通与协调。任何作品销售、商业代理、商业合作、佣金安排或付款方式，均应由双方另行签署书面协议进行约定。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 8 – Édition et diffusion multilingue",
      en: "Article 8 – Editing & Multilingual Publication",
      zh: "第八条 编辑与多语言传播",
    },
    body: {
      fr: [
        "ZCP peut éditer, traduire et adapter les contenus pour différents supports tout en respectant l'intention de l'Artiste.",
      ],
      en: [
        "ZCP may edit, translate and adapt the materials for different media while respecting the Artist's intended meaning.",
      ],
      zh: [
        "巴黎臻藏可为传播需要进行编辑、翻译、排版、字幕制作及不同版本制作，并尊重艺术家原意。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 9 – Durée",
      en: "Article 9 – Term",
      zh: "第九条 协议期限",
    },
    body: {
      fr: [
        "L'accord prend effet à sa signature. Les archives publiées peuvent être conservées après sa résiliation.",
      ],
      en: [
        "The Agreement takes effect upon signature. Published archives may remain available after termination.",
      ],
      zh: [
        "协议自签署之日起生效。已公开发布的历史档案可在协议终止后继续保存。",
      ],
    },
  },
  {
    heading: {
      fr: "Article 10 – Droit applicable",
      en: "Article 10 – Governing Law",
      zh: "第十条 法律适用",
    },
    body: {
      fr: ["Le présent accord est régi par le droit français."],
      en: ["This Agreement is governed by French law."],
      zh: ["本协议适用法国法律。"],
    },
  },
];

function TrilingualParagraphs({
  paragraphs,
  useSerif = false,
}: {
  paragraphs: string[];
  useSerif?: boolean;
}) {
  return (
    <div className={`space-y-3 ${useSerif ? serif.className : ""}`}>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-sm leading-[1.95] text-stone-600 md:text-base"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function TrilingualBlock({ body }: { body: TrilingualText }) {
  return (
    <div className="mt-6 space-y-8">
      <TrilingualParagraphs paragraphs={body.fr} />
      <TrilingualParagraphs paragraphs={body.en} />
      <TrilingualParagraphs paragraphs={body.zh} useSerif />
    </div>
  );
}

function SectionHeading({
  heading,
}: {
  heading: AgreementSection["heading"];
}) {
  return (
    <h2 className="text-sm font-medium tracking-[0.04em] text-stone-900 md:text-base">
      <span className="block">{heading.fr}</span>
      <span className="mt-1 block font-normal text-stone-700">{heading.en}</span>
      <span className={`${serif.className} mt-1 block font-normal text-stone-700`}>
        {heading.zh}
      </span>
    </h2>
  );
}

export function AgreementView() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <header className="text-center">
          <h1 className="space-y-2 text-xl font-normal tracking-wide text-stone-900 md:text-2xl">
            <span className="block">
              Accord de collaboration et d&apos;archives d&apos;artiste
            </span>
            <span className="block text-stone-800">
              Artist Collaboration &amp; Archive Agreement
            </span>
            <span className={`${serif.className} block text-stone-800`}>
              艺术家合作与档案协议
            </span>
          </h1>
          <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-stone-400">
            Version 2026
          </p>
        </header>

        <div className="mt-10 border-y border-stone-200 py-8">
          <TrilingualBlock body={prevailingNotice} />
        </div>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.heading.en}>
              <SectionHeading heading={section.heading} />
              <TrilingualBlock body={section.body} />
            </section>
          ))}
        </div>

        <PageBottomNav locale="fr" />
      </main>

      <SiteFooter locale="fr" />
    </div>
  );
}
