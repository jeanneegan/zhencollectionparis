import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";

export const PROGRAMME_PDF_CN =
  "/documents/ZCP_Emerging_Artists_Programme_2027_CN.pdf";

export const PROGRAMME_PDF_FR =
  "/documents/ZCP_Emerging_Artists_Programme_2027_FR.pdf";

/** @deprecated Use getProgrammePdfHref(locale) */
export const PROGRAMME_PDF_HREF = PROGRAMME_PDF_CN;

export function getProgrammePdfHref(locale: Locale): string {
  if (locale === "zh") {
    return PROGRAMME_PDF_CN;
  }
  return PROGRAMME_PDF_FR;
}

export type ProgrammeStat = {
  value: string;
  label: LocalizedText;
};

export type ProgrammeTimelineRow = {
  label: LocalizedText;
  value: LocalizedText;
};

export type ProgrammeSubsection = {
  title: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
};

export type ProgrammeSection = {
  id: string;
  title: LocalizedText;
  paragraphs?: LocalizedText[];
  bullets?: LocalizedText[];
  subsections?: ProgrammeSubsection[];
  note?: LocalizedText;
};

export const programmeTitle: LocalizedText = {
  zh: "ZCP 2027青年艺术家计划",
  fr: "ZCP Emerging Artists Programme 2027",
  en: "ZCP Emerging Artists Programme 2027",
};

export const programmeSubtitle: LocalizedText = {
  zh: "OPEN CALL · PARIS · SHENZHEN",
  fr: "OPEN CALL · PARIS · SHENZHEN",
  en: "OPEN CALL · PARIS · SHENZHEN",
};

export const programmeStats: ProgrammeStat[] = [
  {
    value: "24",
    label: {
      zh: "位入选艺术家",
      fr: "artistes sélectionnés",
      en: "selected artists",
    },
  },
  {
    value: "12",
    label: {
      zh: "组年度对话",
      fr: "dialogues annuels",
      en: "annual dialogues",
    },
  },
  {
    value: "1",
    label: {
      zh: "次巴黎年度展",
      fr: "exposition annuelle à Paris",
      en: "annual exhibition in Paris",
    },
  },
  {
    value: "2",
    label: {
      zh: "个驻地名额",
      fr: "résidences Paris–Shenzhen",
      en: "Paris–Shenzhen residencies",
    },
  },
];

export const programmeTimeline: ProgrammeTimelineRow[] = [
  {
    label: { zh: "报名时间", fr: "Candidatures", en: "Applications" },
    value: {
      zh: "2026年9月21日至12月20日",
      fr: "21 septembre – 20 décembre 2026",
      en: "21 September – 20 December 2026",
    },
  },
  {
    label: { zh: "入选公布", fr: "Annonce des sélections", en: "Selection announced" },
    value: {
      zh: "2026年12月28日",
      fr: "28 décembre 2026",
      en: "28 December 2026",
    },
  },
  {
    label: { zh: "项目周期", fr: "Durée du programme", en: "Programme period" },
    value: {
      zh: "2027年1月1日至12月31日",
      fr: "1er janvier – 31 décembre 2027",
      en: "1 January – 31 December 2027",
    },
  },
  {
    label: { zh: "报名审核费", fr: "Frais de dossier", en: "Application review fee" },
    value: {
      zh: "25 欧元",
      fr: "25 EUR",
      en: "€25",
    },
  },
];

export const programmeSections: ProgrammeSection[] = [
  {
    id: "background",
    title: { zh: "项目背景", fr: "Contexte", en: "Background" },
    paragraphs: [
      {
        zh: "Zhen Collection Paris（ZCP）是在法国巴黎成立的文化艺术协会，致力于连接不同城市、文化与艺术实践。许多青年艺术家的作品具有真实而独特的价值，却常常只在自己熟悉的语言、城市或文化环境中被观看。进入另一种文化与艺术市场，不仅需要展示作品，也需要准确的专业档案、跨语言表达、持续的对话，以及与画廊、策展人和艺术专业人士之间的真实连接。",
        fr: "Zhen Collection Paris (ZCP) est une association culturelle fondée à Paris, dédiée à relier villes, cultures et pratiques artistiques. De nombreux artistes émergents produisent des œuvres d'une valeur réelle et singulière, mais elles restent souvent visibles seulement dans leur propre langue, ville ou contexte culturel. Entrer sur un autre marché et dans une autre culture exige non seulement montrer l'œuvre, mais aussi un dossier professionnel précis, une présentation trilingue, un dialogue soutenu et des liens concrets avec galeries, commissaires et professionnels.",
        en: "Zhen Collection Paris (ZCP) is a cultural association founded in Paris, dedicated to connecting cities, cultures, and artistic practices. Many emerging artists create work of genuine and distinctive value, yet it is often seen only within their familiar language, city, or cultural context. Entering another art market and cultural sphere requires not only showing the work, but accurate professional documentation, trilingual presentation, sustained dialogue, and real connections with galleries, curators, and art professionals.",
      },
      {
        zh: "ZCP Emerging Artists Programme 2027 希望选择 24 位具有独立创作意识和发展潜力的青年艺术家，通过专业档案、三语呈现、年度艺术家对话、巴黎线下展览、专业画廊推荐及巴黎—深圳驻地，帮助艺术家在欧洲与中国的不同文化语境中被看见、被了解和被理解，并逐步接触东西方艺术网络与市场。",
        fr: "Le ZCP Emerging Artists Programme 2027 vise à sélectionner 24 artistes émergents dotés d'une conscience créative autonome et d'un potentiel de développement. Par le dossier professionnel, la présentation en trois langues, les dialogues annuels, une exposition à Paris, des recommandations de galeries et des résidences Paris–Shenzhen, le programme aide les artistes à être vus, compris et accueillis dans des contextes européens et chinois, et à entrer progressivement dans les réseaux et marchés de l'Est et de l'Ouest.",
        en: "The ZCP Emerging Artists Programme 2027 seeks to select 24 emerging artists with independent creative vision and development potential. Through professional archives, trilingual presentation, annual artist dialogues, an exhibition in Paris, gallery recommendations, and Paris–Shenzhen residencies, the programme helps artists be seen, understood, and engaged across European and Chinese contexts, and to connect gradually with art networks and markets in East and West.",
      },
      {
        zh: "这不是一次以竞争为目的的短期评选，也不承诺立即带来销售或画廊代理。ZCP 希望与艺术家建立长期的记录、交流与专业连接，让作品跨越语言和地域，遇见新的观众、同行、策展人、画廊及收藏者。",
        fr: "Il ne s'agit pas d'un concours court orienté vers la compétition, ni d'une promesse de vente immédiate ou de représentation par une galerie. ZCP souhaite construire avec les artistes un enregistrement, un échange et des liens professionnels durables, pour que l'œuvre traverse langues et territoires et rencontre de nouveaux publics, pairs, commissaires, galeries et collectionneurs.",
        en: "This is not a short competitive selection, nor a promise of immediate sales or gallery representation. ZCP aims to build long-term records, exchange, and professional connection with artists, so that work crosses languages and geographies and meets new audiences, peers, curators, galleries, and collectors.",
      },
    ],
  },
  {
    id: "eligibility",
    title: { zh: "申请资格", fr: "Éligibilité", en: "Eligibility" },
    paragraphs: [
      {
        zh: "本计划面向年满 18 周岁、具有专业艺术背景和持续创作实践的艺术家。申请人原则上应符合以下条件之一：",
        fr: "Le programme s'adresse aux artistes majeurs (18 ans et plus) disposant d'une formation artistique professionnelle et d'une pratique créative continue. Les candidats doivent, en principe, remplir l'une des conditions suivantes :",
        en: "The programme is open to artists aged 18 or over with professional art training and ongoing creative practice. Applicants should, in principle, meet one of the following:",
      },
    ],
    bullets: [
      {
        zh: "毕业于专业美术学院或高等艺术院校；",
        fr: "Diplômé·e d'une école des beaux-arts ou d'un établissement supérieur d'art ;",
        en: "Graduate of a fine arts academy or higher art institution;",
      },
      {
        zh: "接受过系统的视觉艺术专业训练；",
        fr: "Formation professionnelle systématique en arts visuels ;",
        en: "Systematic professional training in visual arts;",
      },
      {
        zh: "已经形成较为明确的个人创作语言，并具有持续的专业创作、展览或相关艺术实践。",
        fr: "Langage créatif personnel affirmé, avec pratique professionnelle, expositions ou expérience artistique continue.",
        en: "A clearly defined personal artistic language, with sustained professional practice, exhibitions, or related art experience.",
      },
    ],
    note: {
      zh: "未曾就读专业艺术院校，但作品具有突出质量、鲜明个人语言、成熟创作方向或特殊艺术经历的申请人，可破格纳入评审。专业艺术院校在读者并非本计划的主要对象；仅在其作品和创作实践已经达到专业水平时，方可例外申请。申请不受国籍和居住城市限制。征集方向包括绘画、摄影、版画、数字艺术、综合材料、雕塑、装置及其他视觉艺术。",
      fr: "Les candidats sans cursus en école d'art mais dont l'œuvre est remarquable, le langage personnel net, la direction mûre ou l'expérience singulière peuvent être admis exceptionnellement. Les étudiant·e·s en école d'art ne sont pas le public principal ; une candidature exceptionnelle n'est possible que si l'œuvre et la pratique atteignent déjà un niveau professionnel. Aucune restriction de nationalité ni de ville de résidence. Disciplines : peinture, photographie, gravure, art numérique, matériaux mixtes, sculpture, installation et autres arts visuels.",
      en: "Applicants who have not attended art school but whose work is outstanding, with a strong personal language, mature direction, or distinctive experience may be considered exceptionally. Current art-school students are not the primary audience; exception applies only when work and practice already meet a professional level. No restriction on nationality or city of residence. Fields include painting, photography, printmaking, digital art, mixed media, sculpture, installation, and other visual arts.",
    },
  },
  {
    id: "materials",
    title: { zh: "申请材料", fr: "Dossier de candidature", en: "Application materials" },
    subsections: [
      {
        title: { zh: "1. 基本信息", fr: "1. Informations de base", en: "1. Basic information" },
        paragraphs: [
          {
            zh: "姓名或艺术家姓名、出生年份、国籍、现居城市、电子邮箱、联系电话，以及艺术教育、专业训练或相关职业背景。",
            fr: "Nom ou nom d'artiste, année de naissance, nationalité, ville de résidence, e-mail, téléphone, formation artistique, entraînement professionnel ou parcours connexe.",
            en: "Name or artist name, year of birth, nationality, city of residence, email, phone, art education, professional training, or related background.",
          },
        ],
      },
      {
        title: { zh: "2. 艺术家简历", fr: "2. CV artistique", en: "2. Artist CV" },
        paragraphs: [
          {
            zh: "一至两页 PDF，包括教育背景、展览、驻地、获奖、收藏及其他重要艺术经历。",
            fr: "PDF d'une à deux pages : formation, expositions, résidences, prix, collections et autres faits marquants.",
            en: "One- to two-page PDF: education, exhibitions, residencies, awards, collections, and other key art experience.",
          },
        ],
      },
      {
        title: { zh: "3. 创作陈述", fr: "3. Statement", en: "3. Artist statement" },
        paragraphs: [
          {
            zh: "建议 300 至 500 字，介绍个人创作方向、长期关注的主题及主要工作方式。",
            fr: "300 à 500 mots recommandés : direction créative, thèmes de long terme et modes de travail.",
            en: "300–500 words recommended: creative direction, long-term themes, and main working methods.",
          },
        ],
      },
      {
        title: { zh: "4. 代表作品", fr: "4. Œuvres représentatives", en: "4. Representative works" },
        paragraphs: [
          {
            zh: "提交 5 至 10 件代表作品。每件作品须注明名称、创作年份、材料或媒介、原作尺寸及是否可供销售，并提供清晰图片。影像作品可提供观看链接及密码。",
            fr: "5 à 10 œuvres. Pour chacune : titre, année, medium, dimensions, disponibilité à la vente, images nettes. Œuvres vidéo : lien et mot de passe.",
            en: "5–10 works. For each: title, year, medium, dimensions, availability for sale, clear images. Time-based work: viewing link and password.",
          },
        ],
      },
      {
        title: {
          zh: "5. 巴黎年度展候选作品",
          fr: "5. Œuvre candidate pour l'exposition annuelle à Paris",
          en: "5. Work for the annual Paris exhibition",
        },
        paragraphs: [
          {
            zh: "从代表作品中选择一件适合制作艺术版画的作品并提供高清图像。最终参展作品及印刷文件将在入选后确认。",
            fr: "Choisir une œuvre adaptée à une estampe d'art et fournir une image HD. Œuvre et fichiers d'impression confirmés après sélection.",
            en: "Select one work suitable for an art print from your submission and provide a high-resolution image. Final work and print files confirmed after selection.",
          },
        ],
      },
      {
        title: { zh: "6. 个人链接", fr: "6. Liens", en: "6. Links" },
        paragraphs: [
          {
            zh: "个人网站、Instagram、线上作品集或其他专业平台链接；如无可不提供。",
            fr: "Site web, Instagram, portfolio en ligne ou autre plateforme professionnelle ; facultatif.",
            en: "Website, Instagram, online portfolio, or other professional platform; optional.",
          },
        ],
      },
      {
        title: {
          zh: "7. 简短申请说明",
          fr: "7. Note de motivation",
          en: "7. Short application note",
        },
        paragraphs: [
          {
            zh: "不超过 300 字：为什么希望参加 ZCP Emerging Artists Programme 2027？希望在这一年中获得怎样的交流或发展？",
            fr: "300 mots maximum : pourquoi ce programme en 2027 ? Quels échanges ou développements souhaitez-vous cette année ?",
            en: "Maximum 300 words: why apply to the ZCP Emerging Artists Programme 2027? What exchange or development do you hope for this year?",
          },
        ],
      },
      {
        title: { zh: "8. 驻地意向", fr: "8. Intention de résidence", en: "8. Residency intention" },
        paragraphs: [
          {
            zh: "说明是否有意申请巴黎或深圳驻地，并简要介绍希望在该城市开展的创作方向。报名阶段无须提交完整驻地方案。",
            fr: "Indiquer si vous souhaitez Paris ou Shenzhen et la direction créative envisagée ; pas de projet complet exigé à ce stade.",
            en: "State interest in Paris or Shenzhen residency and brief creative direction; full residency proposal not required at application stage.",
          },
        ],
      },
    ],
    note: {
      zh: "提交格式：文字材料建议合并为一份 PDF，命名为「姓名_ZCP2027_Application.pdf」。作品图片可单独上传，命名为「姓名_作品序号_作品名称_年份.jpg」。图片建议使用 JPG 或 PNG，单张不超过 10MB。申请材料可使用中文、法文或英文提交。",
      fr: "Format : textes en un seul PDF « Nom_ZCP2027_Application.pdf ». Images séparées « Nom_numéro_titre_année.jpg », JPG ou PNG, max. 10 Mo par fichier. Dossier accepté en chinois, français ou anglais.",
      en: "Format: merge text in one PDF named « Name_ZCP2027_Application.pdf ». Upload images separately as « Name_number_title_year.jpg », JPG or PNG, max 10MB each. Materials accepted in Chinese, French, or English.",
    },
  },
  {
    id: "benefits",
    title: { zh: "入选艺术家权益", fr: "Avantages pour les artistes sélectionnés", en: "Benefits for selected artists" },
    subsections: [
      {
        title: { zh: "1. 艺术家专业档案", fr: "1. Dossier professionnel", en: "1. Professional archive" },
        paragraphs: [
          {
            zh: "ZCP 将为每位入选艺术家建立专业档案，包括艺术家简介、个人简历、创作陈述、代表作品、一件重点作品，以及中文、法文、英文三语基础呈现，并在 ZCP 官方网站展示。",
            fr: "ZCP établit pour chaque artiste un dossier : bio, CV, statement, œuvres représentatives, une œuvre mise en avant, présentation de base en chinois, français et anglais, publiée sur le site ZCP.",
            en: "ZCP builds a professional archive for each artist: bio, CV, statement, representative works, one highlighted work, basic trilingual presentation (Chinese, French, English), published on the ZCP website.",
          },
        ],
      },
      {
        title: { zh: "2. 年度艺术家对话", fr: "2. Dialogues annuels", en: "2. Annual artist dialogues" },
        paragraphs: [
          {
            zh: "24 位艺术家组成 12 组对话，每组 2 位。2027 年 1 月至 12 月，ZCP 每月组织一组线上对话。每位艺术家原则上参加一次；内容可使用中文、法文或英文，并以视频、文字或图文形式发布和存档。",
            fr: "24 artistes en 12 binômes. De janvier à décembre 2027, un dialogue en ligne par mois. Chaque artiste participe une fois en principe ; contenus en chinois, français ou anglais, publiés et archivés (vidéo, texte ou image-texte).",
            en: "24 artists in 12 pairs. From January to December 2027, one online dialogue per month. Each artist participates once in principle; content in Chinese, French, or English, published and archived as video, text, or image-text.",
          },
        ],
      },
      {
        title: { zh: "3. 巴黎年度线下展", fr: "3. Exposition annuelle à Paris", en: "3. Annual exhibition in Paris" },
        paragraphs: [
          {
            zh: "ZCP 计划于 2027 年在巴黎举办一次青年艺术家年度线下展。具体日期、场地和展期将在确认后公布。每位入选艺术家选择一件代表作品，由 ZCP 统一制作艺术版画参展。ZCP 负责基础版画制作、策展和布展，艺术家无须承担基础版画制作及展览费用。",
            fr: "Exposition annuelle d'artistes émergents à Paris en 2027 ; dates, lieu et durée confirmés ultérieurement. Chaque artiste choisit une œuvre ; ZCP produit une estampe d'art pour l'exposition, assume production, commissariat et accrochage de base.",
            en: "ZCP plans an annual emerging artists exhibition in Paris in 2027; dates, venue, and duration to be confirmed. Each artist selects one work; ZCP produces an art print for the show and covers basic print production, curating, and installation.",
          },
          {
            zh: "艺术家如希望展出原作，可另行申请。ZCP 将根据策展主题、场地、作品尺寸、安装及安全条件决定是否接收。经确认参展的原作，其往返运输、专业包装、运输保险、海关及清关费用原则上由艺术家承担。未经书面确认，艺术家不得自行寄送原作。如涉及作品或版画销售，ZCP 将与艺术家另行签订协议，明确售价、授权及收益分配。",
            fr: "Exposition de l'original sur demande séparée, selon thème, lieu, dimensions et sécurité. Frais de transport, emballage, assurance, douane à la charge de l'artiste sauf accord écrit. Pas d'envoi d'original sans confirmation. Ventes : accord distinct sur prix, droits et partage.",
            en: "Originals may be requested separately; acceptance depends on theme, venue, size, and safety. Shipping, packing, insurance, and customs are the artist's responsibility unless agreed in writing. No unsolicited shipment of originals. Sales require a separate agreement on price, rights, and revenue share.",
          },
        ],
      },
      {
        title: { zh: "4. 专业画廊推荐", fr: "4. Recommandations de galeries", en: "4. Gallery recommendations" },
        paragraphs: [
          {
            zh: "ZCP 将根据艺术家的创作方向、作品特点及画廊定位进行针对性推荐。每位入选艺术家在项目年度内，原则上至少获得一次与其创作方向相匹配的专业画廊推荐。画廊拥有独立的艺术判断及合作决定权。推荐不代表 ZCP 承诺画廊回复、作品销售、展览邀请、签约或代理。",
            fr: "Recommandations ciblées selon pratique, œuvre et profil de galerie. Au moins une recommandation par artiste et par an en principe. Les galeries décident en toute indépendance ; la recommandation n'engage pas ZCP sur réponse, vente, exposition, contrat ou représentation.",
            en: "Targeted recommendations based on practice, work, and gallery profile. At least one matching gallery recommendation per artist per programme year in principle. Galleries decide independently; recommendation does not guarantee response, sale, exhibition, contract, or representation.",
          },
        ],
      },
      {
        title: {
          zh: "5. 年度更新、会员续期与持续推广",
          fr: "5. Mise à jour, adhésion et visibilité continue",
          en: "5. Annual updates, membership renewal, and ongoing promotion",
        },
        paragraphs: [
          {
            zh: "2027 计划结束后，ZCP 可邀请入选艺术家每年进行一次交流，更新个人简历、代表作品、展览经历及最新创作方向。ZCP 将根据艺术家的持续创作情况、资料更新、合作意愿及未来项目的匹配程度，确认是否发出下一年度的续期邀请。",
            fr: "Après 2027, ZCP peut inviter les artistes à une mise à jour annuelle (CV, œuvres, expositions, direction). La reconduction dépend de la pratique, des mises à jour, de la volonté de collaboration et de l'adéquation aux projets futurs.",
            en: "After 2027, ZCP may invite selected artists to an annual update of CV, works, exhibitions, and direction. Renewal depends on ongoing practice, updates, willingness to collaborate, and fit with future projects.",
          },
          {
            zh: "获得续期邀请的艺术家，可自愿申请成为或继续成为 ZCP 艺术家会员，并缴纳当年度会费。年度会费暂定为 25 欧元，具体金额以 ZCP 当年度公布的会员规则为准。完成资料更新及会费缴纳后，艺术家进入下一年度持续推广名单。",
            fr: "Sur invitation, adhésion volontaire au statut de membre artiste ZCP (cotisation annuelle, provisoirement 25 EUR selon règlement en vigueur). Après mise à jour et paiement, inscription à la liste de promotion continue.",
            en: "Invited artists may voluntarily join or renew as ZCP artist members (annual fee, provisionally €25 per current membership rules). After update and payment, entry on the ongoing promotion list.",
          },
        ],
      },
    ],
    note: {
      zh: "进入持续推广名单的艺术家，可继续通过 ZCP 官方网站、社交媒体、内容发布及专业网络获得推广，并有机会受邀参与未来的展览、对话、出版、驻地及其他文化艺术活动。年度交流不等同于自动续期；缴纳会费也不代表 ZCP 承诺作品销售、画廊代理或具体活动名额。",
      fr: "Promotion via site, réseaux sociaux et réseau professionnel ; invitations possibles aux expositions, dialogues, éditions, résidences et activités futures. La mise à jour annuelle n'implique pas reconduction automatique ; la cotisation n'engage pas ZCP sur ventes, représentation ou places garanties.",
      en: "Ongoing promotion via the ZCP website, social media, and professional network; possible invitations to future exhibitions, dialogues, publications, residencies, and activities. Annual update is not automatic renewal; membership fee does not guarantee sales, representation, or specific programme slots.",
    },
  },
  {
    id: "residency",
    title: {
      zh: "巴黎—深圳艺术家驻地",
      fr: "Résidences Paris–Shenzhen",
      en: "Paris–Shenzhen residencies",
    },
    paragraphs: [
      {
        zh: "ZCP 将从 24 位入选艺术家中进一步遴选 2 位艺术家，参加巴黎—深圳跨城市驻地计划。驻地名额将在 24 位入选艺术家中进行第二阶段遴选，主要考虑创作方向、驻地提案、可执行性及跨文化交流潜力。",
        fr: "ZCP sélectionnera 2 artistes parmi les 24 pour une résidence transurbaine Paris–Shenzhen (second tour : direction créative, projet, faisabilité, potentiel d'échange interculturel).",
        en: "ZCP will select 2 of the 24 artists for a cross-city Paris–Shenzhen residency (second round based on creative direction, proposal, feasibility, and cross-cultural potential).",
      },
    ],
    note: {
      zh: "材料费按实际创作支出报销，须提供有效凭证；未使用部分不折算为现金。往返交通、签证、旅行保险、餐饮及个人生活费用，除非另有书面说明，原则上由艺术家承担。",
      fr: "Frais de matériaux remboursés sur justificatifs (max. 500 EUR par ville) ; solde non versé en espèces. Transport, visa, assurance, repas et frais personnels à la charge de l'artiste sauf accord écrit.",
      en: "Material costs reimbursed on receipt (max €500 per city); unused balance not paid in cash. Travel, visa, insurance, meals, and personal expenses are the artist's unless agreed in writing.",
    },
  },
  {
    id: "jury",
    title: { zh: "评审标准与机制", fr: "Critères et processus", en: "Selection criteria and process" },
    bullets: [
      {
        zh: "作品的艺术质量、个人语言及独特性；",
        fr: "Qualité artistique, langage personnel et singularité ;",
        en: "Artistic quality, personal language, and distinctiveness;",
      },
      {
        zh: "创作方向的连贯性及持续发展潜力；",
        fr: "Cohérence de la pratique et potentiel de développement ;",
        en: "Coherence of practice and development potential;",
      },
      {
        zh: "参与对话及跨文化交流的意愿；",
        fr: "Volonté de dialogue et d'échange interculturel ;",
        en: "Willingness to dialogue and engage across cultures;",
      },
      {
        zh: "申请材料的真实性与完整性。",
        fr: "Authenticité et complétude du dossier.",
        en: "Authenticity and completeness of the application.",
      },
    ],
    paragraphs: [
      {
        zh: "艺术院校背景是评审参考之一，但不是唯一标准。2027 年度艺术家遴选由 ZCP 组织，并计划邀请来自法国和中国的艺术专业人士及 ZCP 代表共同参与。评审成员如与申请人存在可能影响独立判断的直接关系，应主动说明并回避相关评审。报名审核费仅用于材料接收、整理及评审组织，不影响评审结果。",
        fr: "La formation en école d'art est un critère parmi d'autres. Sélection organisée par ZCP avec des professionnels de France et de Chine (composition à annoncer). Conflits d'intérêt : déclaration et abstention. Les frais de dossier couvrent réception et organisation de la sélection, sans influence sur le résultat.",
        en: "Art-school background is one reference among others. Selection is organized by ZCP with art professionals from France and China (composition to be announced). Conflicts of interest must be declared and recused. The application fee covers intake and review organization only and does not influence outcomes.",
      },
    ],
  },
  {
    id: "copyright",
    title: { zh: "版权与授权", fr: "Droits et autorisations", en: "Copyright and licensing" },
    paragraphs: [
      {
        zh: "作品著作权始终归艺术家所有。入选艺术家同意 ZCP 将相关作品图像及对话内容用于本计划的艺术家档案、巴黎年度展、官方网站、社交媒体、新闻传播及项目存档。ZCP 将在合理范围内标注艺术家姓名及作品信息。商业复制、出版或版画销售须另行取得艺术家书面授权，并另行约定销售价格及收益分配。",
        fr: "Les droits d'auteur restent à l'artiste. Les sélectionné·e·s autorisent ZCP à utiliser images et contenus de dialogue pour dossiers, exposition parisienne, site, réseaux sociaux, communication et archive du programme, avec attribution. Reproduction commerciale, édition ou vente d'estampes : autorisation écrite et accord distinct sur prix et partage.",
        en: "Copyright remains with the artist. Selected artists authorize ZCP to use work images and dialogue content for programme archives, the Paris exhibition, the website, social media, press, and project records, with proper attribution. Commercial reproduction, publication, or print sales require separate written authorization and agreement on price and revenue share.",
      },
    ],
  },
  {
    id: "disclaimer",
    title: { zh: "特别说明", fr: "Mentions importantes", en: "Important notice" },
    paragraphs: [
      {
        zh: "入选本计划不代表 ZCP 承诺作品销售、画廊代理、个人展览、奖项、媒体报道、签证或市场价值提升。展览及驻地的具体时间和执行方式，可能根据场地、签证、交通、安全及其他实际情况作合理调整。如申请材料存在虚假信息、抄袭或侵权，ZCP 有权取消其申请、入选、展览或驻地资格。",
        fr: "La sélection n'engage pas ZCP sur ventes, représentation, exposition solo, prix, presse, visa ou valorisation marché. Calendrier et modalités des expositions et résidences peuvent être ajustés. Fausses informations, plagiat ou atteinte aux droits : exclusion possible à tout stade.",
        en: "Selection does not commit ZCP to sales, representation, solo shows, awards, press, visas, or market value increase. Exhibition and residency timing and format may be adjusted for venue, visa, travel, safety, or other factors. False information, plagiarism, or infringement may lead to disqualification at any stage.",
      },
    ],
  },
  {
    id: "apply",
    title: { zh: "申请方式", fr: "Comment candidater", en: "How to apply" },
    bullets: [
      {
        zh: "填写线上申请表；",
        fr: "Remplir le formulaire en ligne ;",
        en: "Complete the online application form;",
      },
      {
        zh: "上传完整申请材料；",
        fr: "Téléverser le dossier complet ;",
        en: "Upload the full application materials;",
      },
      {
        zh: "支付 25 欧元报名审核费。",
        fr: "Régler les frais de dossier de 25 EUR.",
        en: "Pay the €25 application review fee.",
      },
    ],
    paragraphs: [
      {
        zh: "申请人须在 2026 年 12 月 20 日前完成上述步骤。申请材料及报名费全部收到后，申请人将收到报名确认邮件。",
        fr: "À accomplir avant le 20 décembre 2026. Confirmation par e-mail une fois dossier et paiement reçus.",
        en: "Complete by 20 December 2026. Confirmation email once materials and payment are received.",
      },
    ],
    note: {
      zh: "申请材料及报名费全部收到后，报名正式生效。报名费不代表保证入选；材料进入审核后原则上不予退还。如 ZCP 取消本届计划，报名费将全额退还。入选艺术家不再支付其他项目费用。",
      fr: "Candidature effective à réception du dossier et du paiement. Les frais ne garantissent pas la sélection ; en principe non remboursables après entrée en revue. Remboursement intégral si ZCP annule l'édition. Aucun autre frais programme pour les sélectionné·e·s.",
      en: "Application is effective once materials and fee are received. The fee does not guarantee selection; generally non-refundable after review begins. Full refund if ZCP cancels the edition. No further programme fees for selected artists.",
    },
  },
];

export const residencySlots = [
  {
    city: { zh: "巴黎驻地", fr: "Résidence Paris", en: "Paris residency" },
    detail: {
      zh: "1 位艺术家 · 10 天 · 提供住宿 · 创作材料费最高 500 欧元",
      fr: "1 artiste · 10 jours · hébergement · matériaux jusqu'à 500 EUR",
      en: "1 artist · 10 days · accommodation · materials up to €500",
    },
  },
  {
    city: { zh: "深圳驻地", fr: "Résidence Shenzhen", en: "Shenzhen residency" },
    detail: {
      zh: "1 位艺术家 · 3 周（21 天）· 提供住宿 · 创作材料费最高 500 欧元",
      fr: "1 artiste · 3 semaines (21 jours) · hébergement · matériaux jusqu'à 500 EUR",
      en: "1 artist · 3 weeks (21 days) · accommodation · materials up to €500",
    },
  },
];

export function tProgramme(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
