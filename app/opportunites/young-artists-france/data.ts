import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";

export type ProgrammeSection = {
  id: string;
  title: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
};

export const programmeTitle: LocalizedText = {
  zh: "ZCP 招募在法国的青年艺术家",
  fr: "ZCP — Recrutement de jeunes artistes en France",
  en: "ZCP — Call for young artists in France",
};

export const programmeSubtitle: LocalizedText = {
  zh: "支持国际职业发展，让创作获得持续的收入支持",
  fr: "Soutenir la carrière internationale et des revenus durables pour la création",
  en: "Supporting international careers and sustained income for artistic practice",
};

export const programmeSections: ProgrammeSection[] = [
  {
    id: "intro",
    title: {
      zh: "关于本计划",
      fr: "À propos du programme",
      en: "About the programme",
    },
    paragraphs: [
      {
        zh: "Zhen Collection Paris（ZCP）是一家新近成立于巴黎的艺术协会。我们正在建立连接法国、中国及更多国际城市的艺术推广与合作网络。",
        fr: "Zhen Collection Paris (ZCP) est une association artistique récemment fondée à Paris. Nous construisons un réseau de promotion et de coopération artistique reliant la France, la Chine et d'autres villes internationales.",
        en: "Zhen Collection Paris (ZCP) is a recently founded art association in Paris. We are building a network for artistic promotion and cooperation linking France, China, and other international cities.",
      },
      {
        zh: "我们寻找毕业于艺术院校、目前在法国生活和创作的青年艺术家，与他们建立长期合作。",
        fr: "Nous recherchons des jeunes artistes diplômés des écoles d'art, vivant et travaillant actuellement en France, pour établir une collaboration de long terme.",
        en: "We seek young artists who graduated from art schools and currently live and work in France, to build long-term collaboration.",
      },
      {
        zh: "我们的目标是持续为艺术家寻找适合其创作的国际职业发展机会，拓展画廊、策展人、机构及收藏关系，并通过作品销售、版画与其他合作，帮助艺术家逐步建立更稳定、可持续的收入来源，为长期创作提供支持。",
        fr: "Notre objectif est d'identifier, de façon continue, des opportunités de développement professionnel international adaptées à la pratique de chaque artiste, d'élargir les relations avec galeries, curateurs, institutions et collectionneurs, et — par la vente d'œuvres, les éditions et d'autres formes de coopération — d'aider les artistes à construire progressivement des revenus plus stables et durables au service de leur travail sur le long terme.",
        en: "Our aim is to keep finding international career opportunities suited to each artist's practice, to expand relationships with galleries, curators, institutions, and collectors, and — through sales, prints, and other collaborations — to help artists build more stable, sustainable income over time in support of long-term creation.",
      },
    ],
  },
  {
    id: "archive",
    title: {
      zh: "建立中、法、英三语艺术家档案",
      fr: "Un dossier artiste en chinois, français et anglais",
      en: "Trilingual artist profiles in Chinese, French, and English",
    },
    paragraphs: [
      {
        zh: "我们根据入选艺术家提供的资料，整理艺术家介绍、履历与作品信息，建立中、法、英三语档案，并发布于 ZCP 网站，让不同国家的观众与专业人士能够了解艺术家的创作。",
        fr: "À partir des documents fournis par les artistes sélectionnés, nous structurons la présentation, le parcours et les œuvres, puis publions un dossier trilingue sur le site ZCP, afin que publics et professionnels de différents pays puissent découvrir leur pratique.",
        en: "From materials provided by selected artists, we prepare biographical and portfolio information and publish trilingual profiles on the ZCP website so audiences and professionals in different countries can discover their work.",
      },
      {
        zh: "虽然协会刚刚起步，但网站上部分艺术家的介绍，已经在以其姓名进行的网络搜索中获得较靠前的位置。",
        fr: "L'association est encore jeune, mais plusieurs présentations d'artistes déjà en ligne apparaissent en bonne place dans les recherches effectuées à partir de leur nom.",
        en: "The association is still young, yet some artist pages already rank prominently in web searches for their names.",
      },
    ],
  },
  {
    id: "year",
    title: {
      zh: "持续一年的职业发展与推广合作",
      fr: "Une année de développement professionnel et de visibilité",
      en: "One year of professional development and promotion",
    },
    bullets: [
      {
        zh: "每季度更新一次艺术家档案，补充新作品、展览及其他经历。",
        fr: "Mise à jour trimestrielle du dossier : nouvelles œuvres, expositions et parcours.",
        en: "Quarterly updates to the artist file: new works, exhibitions, and career milestones.",
      },
      {
        zh: "通过 ZCP 网站、社交媒体及合作伙伴持续介绍艺术家与作品。",
        fr: "Présentation continue de l'artiste et de ses œuvres via le site ZCP, les réseaux sociaux et les partenaires.",
        en: "Ongoing presentation of the artist and their work through the ZCP website, social media, and partners.",
      },
      {
        zh: "每季度提供一次个性化发展机会推荐，包括驻地、奖项及策展人联系建议。",
        fr: "Chaque trimestre, recommandations personnalisées : résidences, prix, contacts curateurs.",
        en: "Each quarter, tailored recommendations: residencies, awards, and curator contacts.",
      },
      {
        zh: "每年向至少四家双方共同确认、适合艺术家作品的画廊介绍其创作，每家跟进一次，并转达实际收到的回复。",
        fr: "Chaque année, présentation du travail à au moins quatre galeries validées conjointement ; un suivi par galerie et transmission des réponses reçues.",
        en: "Each year, introduction to at least four mutually agreed galleries suited to the work; one follow-up per gallery and relay of responses received.",
      },
      {
        zh: "协助梳理原作与版画的价格体系，为国际推广和销售提供参考。",
        fr: "Aide à structurer les prix des œuvres originales et des éditions pour la diffusion et la vente internationales.",
        en: "Support in structuring pricing for originals and prints for international outreach and sales.",
      },
      {
        zh: "根据作品情况及相关授权，提供参与 ZCP 巴黎年度版画展的机会。",
        fr: "Selon les œuvres et les autorisations, possibilité de participer à l'exposition annuelle d'éditions ZCP à Paris.",
        en: "Where appropriate and with agreed rights, opportunity to join ZCP's annual print exhibition in Paris.",
      },
      {
        zh: "进行一次年度回顾交流，共同讨论下一阶段的发展方向。",
        fr: "Un entretien de bilan annuel pour orienter la suite du parcours.",
        en: "An annual review conversation to plan the next stage of development.",
      },
    ],
    paragraphs: [
      {
        zh: "我们也将通过不同城市的合作伙伴，持续寻找展览、作品销售、版画发行、委托创作及其他合作机会。每个项目都结合艺术家的创作方向、个人期待和实际条件共同推进。",
        fr: "Par l'intermédiaire de partenaires dans différentes villes, nous cherchons en continu des expositions, ventes, éditions, commandes et autres collaborations. Chaque projet avance en accord avec la direction artistique, les attentes personnelles et les conditions réelles de l'artiste.",
        en: "Through partners in different cities, we keep seeking exhibitions, sales, print editions, commissions, and other collaborations. Each project moves forward in line with the artist's practice, expectations, and practical constraints.",
      },
    ],
  },
  {
    id: "fees",
    title: {
      zh: "报名、筛选与费用",
      fr: "Candidature, sélection et frais",
      en: "Application, selection, and fees",
    },
    paragraphs: [
      {
        zh: "报名与筛选均免费。",
        fr: "La candidature et la sélection sont gratuites.",
        en: "Application and selection are free.",
      },
      {
        zh: "请通过电子邮件提交作品集及简短的个人介绍，并说明你目前的职业发展目标，以及对国际合作的期待。",
        fr: "Envoyez par e-mail un portfolio, une brève présentation, vos objectifs de développement professionnel et ce que vous attendez d'une coopération internationale.",
        en: "Please email a portfolio, a short personal statement, your current career goals, and what you hope for from international collaboration.",
      },
      {
        zh: "ZCP 完成筛选并通知入选后，艺术家可自主决定是否加入。确认加入后，才需支付一次性资料整理与三语档案发布费：50 欧元；未满 35 岁的艺术家为 25 欧元。",
        fr: "Après sélection et notification par ZCP, l'artiste décide librement de rejoindre le programme. En cas d'adhésion confirmée uniquement : frais unique de constitution du dossier et publication trilingue — 50 € ; 25 € pour les artistes de moins de 35 ans.",
        en: "After ZCP's selection and notification, the artist freely decides whether to join. Only upon confirmed participation: a one-time fee for file preparation and trilingual publication — €50; €25 for artists under 35.",
      },
      {
        zh: "年度合作费为 300 欧元／年，首批入选艺术家第一年免费。因此，首年仅需支付上述一次性资料费。",
        fr: "La cotisation annuelle est de 300 € par an ; elle est offerte la première année pour les premiers artistes sélectionnés. La première année ne comprend donc que les frais uniques de dossier ci-dessus.",
        en: "The annual partnership fee is €300 per year; the first year is free for the inaugural cohort. The first year therefore requires only the one-time file fee above.",
      },
      {
        zh: "第一年结束后，艺术家可自主选择是否续费。年费可分十二个月支付，每月 25 欧元。",
        fr: "Après la première année, l'artiste choisit librement de renouveler. La cotisation peut être répartie sur douze mois : 25 € par mois.",
        en: "After the first year, the artist may choose whether to renew. The annual fee may be paid in twelve monthly instalments of €25.",
      },
      {
        zh: "作品销售、版画制作及具体展览项目，由双方另行约定授权、费用、佣金与分成。",
        fr: "Ventes d'œuvres, production d'éditions et expositions concrètes font l'objet d'accords séparés sur les autorisations, frais, commissions et partages.",
        en: "Sales, print production, and specific exhibition projects are agreed separately on rights, costs, commissions, and revenue sharing.",
      },
    ],
  },
];

export function tProgramme(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
