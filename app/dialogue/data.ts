import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";

export type { LocalizedText };

export type DialogueAvatar = {
  type: "portrait" | "brand";
  src?: string;
  alt: string;
  label?: string;
};

const willyPortraitAvatar: DialogueAvatar = {
  type: "portrait",
  src: "/artists/willy-le-nalbaut/portrait.jpg",
  alt: "Willy Le Nalbaut",
  label: "Willy Le Nalbaut",
};

const suHongPortraitAvatar: DialogueAvatar = {
  type: "portrait",
  src: "/artists/su-hong/portrait.png",
  alt: "苏泓 Su Hong",
  label: "苏泓 Su Hong",
};

const melanieGerinAvatar: DialogueAvatar = {
  type: "portrait",
  src: "/observers/melanie-gerin/portrait.png",
  alt: "Mélanie Gérin",
  label: "Mélanie Gérin",
};

export type DialogueExchange = {
  question: LocalizedText;
  questionFrom?: DialogueAvatar;
  answer?: LocalizedText;
  answerFrom?: DialogueAvatar;
  answers?: { answer?: LocalizedText; answerFrom: DialogueAvatar }[];
};

export type ObserverQuestion = {
  author: string;
  /** Uppercase kicker above the observer name, e.g. MÉLANIE GÉRIN */
  authorKicker?: string;
  /** Short bio shown under the observer name */
  authorBio?: LocalizedText;
  /** Essay-style contribution (not observer Q&A) */
  article?: boolean;
  /** Lead-in before an essay (not a Q&A question) */
  articleIntro?: LocalizedText;
  question: LocalizedText;
  questionFrom?: DialogueAvatar;
  answer?: LocalizedText;
  answerFrom?: DialogueAvatar;
};

export type DialogueFounderLetter = {
  body: LocalizedText;
  name: LocalizedText;
  role: LocalizedText;
};

export type DialogueEpisodeHeader = {
  kicker: LocalizedText;
  theme: LocalizedText;
  artists: LocalizedText;
  date: LocalizedText;
};

export type DialogueCollectionArtistOffer = {
  artistSlug: string;
  workId: string;
  editionPriceEur?: number;
  editionProductName: LocalizedText;
};

export type DialogueCollectionSupport = {
  sectionTitle: LocalizedText;
  body: LocalizedText;
  originalAction: LocalizedText;
  editionAction: LocalizedText;
  artists: DialogueCollectionArtistOffer[];
};

export type DialogueEpisode = {
  slug: string;
  month: string;
  episode: number;
  title: LocalizedText;
  header?: DialogueEpisodeHeader;
  founderLetter?: DialogueFounderLetter;
  sharedQuestion: DialogueExchange;
  willyToSuHong: DialogueExchange;
  suHongToWilly: DialogueExchange;
  observerQuestions: ObserverQuestion[];
  publicParticipation: {
    open: boolean;
    note: LocalizedText;
  };
  artists: [string, string];
  featuredWorks: {
    artistSlug: string;
    artworkId: string;
    image?: string;
    displayAspect?: [number, number];
    description?: LocalizedText;
  }[];
  collectionSupport?: DialogueCollectionSupport;
  isCurrent: boolean;
  status?: "current" | "upcoming" | "archived";
};

export const episodes: DialogueEpisode[] = [
  {
    slug: "202609",
    month: "2026-09",
    episode: 1,
    title: { zh: "马", fr: "Le Cheval", en: "The Horse" },
    header: {
      kicker: {
        zh: "CONVERSATION INAUGURALE · 开篇对话",
        fr: "CONVERSATION INAUGURALE · 开篇对话",
        en: "CONVERSATION INAUGURALE · 开篇对话",
      },
      theme: {
        zh: "Le Cheval",
        fr: "Le Cheval",
        en: "Le Cheval",
      },
      artists: {
        zh: "Willy Le Nalbaut × Su Hong",
        fr: "Willy Le Nalbaut × Su Hong",
        en: "Willy Le Nalbaut × Su Hong",
      },
      date: {
        zh: "Septembre 2026",
        fr: "Septembre 2026",
        en: "Septembre 2026",
      },
    },
    founderLetter: {
      body: {
        zh: `这是 ZCP 的第一期对话，Willy 与苏泓。

Willy Le Nalbaut 在法国生活与创作，苏泓在中国生活与创作。在这场对话开始以前，我与他们、他们彼此之间，都并不相识。

我与 Willy 相遇在巴黎的 Galerie du Haut-Pavé。第一次见到他时，我被他作品中城市与乡村彼此交融的景象所吸引，也因此开始了解他的创作。后来，因为 ZCP 的第一次公开招募，我在许多中国艺术家的作品中遇见了苏泓。

我创立 Zhen Collection Paris（ZCP），有一个很明确的目标：希望更多法国艺术家被中国看见，也希望更多中国艺术家被法国，以及更远的地方看见。

但我想要的并不仅仅是让作品出现在另一个国家。我更希望不同文化中的艺术家有机会真正认识彼此，看看对方如何生活、如何创作，又如何理解同一个世界。

于是，我邀请 Willy 和苏泓开始了 ZCP 的第一次对话。

很巧，他们都画过——马。
苏泓画马，Willy 也画马。但当我真正了解他们的作品时，我发现，同样的马，在两个人那里，却有着完全不同的意义。

也许这正是对话有趣的地方：我们因为某种相似而相遇，却因为彼此的不同，开始真正看见对方。

在这场对话之外，法国电影制片人 Mélanie Gérin 也接受了我的邀请。我们因为生活中的缘分很早便已相识，她也见证了我创立 ZCP 的过程。这一次，她作为一个外部的观察者，观看两位艺术家的作品与交流，也观察这个刚刚开始的 ZCP，并写下她的感受。

于是，这场对话里有了两个彼此相遇的艺术家，也有了一个从外面观看这场相遇、见证 ZCP 如何开始的人。

生活中，有人离开，也有人走进。但永远感恩每一次相遇，因为相遇过，就已经有所不同。`,
        fr: `Ceci est la première conversation de ZCP, entre Willy et Su Hong.

Willy Le Nalbaut vit et travaille en France ; Su Hong vit et travaille en Chine. Avant cette conversation, je ne les connaissais pas — pas plus qu'ils ne se connaissaient entre eux.

J'ai rencontré Willy à la Galerie du Haut-Pavé, à Paris. Dès notre première rencontre, j'ai été attirée par la manière dont la ville et la campagne se mêlent dans ses œuvres, et c'est ainsi que j'ai commencé à découvrir son travail. Plus tard, grâce au premier appel public de ZCP, j'ai découvert Su Hong parmi de nombreuses œuvres d'artistes chinois.

J'ai fondé Zhen Collection Paris (ZCP) avec un objectif très clair : que davantage d'artistes français soient vus en Chine, et que davantage d'artistes chinois le soient en France — et au-delà.

Mais je ne souhaite pas seulement que des œuvres apparaissent dans un autre pays. Je souhaite surtout que des artistes de cultures différentes aient l'occasion de se connaître vraiment — de voir comment l'autre vit, crée et comprend le même monde.

C'est pour cela que j'ai invité Willy et Su Hong à ouvrir la première conversation de ZCP.

Par hasard, ils ont tous deux peint des chevaux. Su Hong peint le cheval ; Willy aussi. Mais en découvrant vraiment leurs œuvres, j'ai vu que le même animal prenait, chez chacun, des sens si différents.

C'est peut-être ce qui rend la conversation intéressante : nous nous rencontrons par une certaine ressemblance, et c'est par nos différences que nous commençons vraiment à voir l'autre.

Au-delà de cette conversation, la productrice française Mélanie Gérin a également accepté mon invitation. La vie nous avait fait nous rencontrer bien avant, et elle a été témoin de la fondation de ZCP. Cette fois, en observatrice extérieure, elle regarde les œuvres et les échanges des deux artistes, observe aussi ZCP à ses débuts, et écrit ce qu'elle en ressent.

Ainsi, cette conversation réunit deux artistes qui se rencontrent, et quelqu'un qui, de l'extérieur, regarde cette rencontre et témoigne aussi des débuts de ZCP.

Dans la vie, certains s'en vont, d'autres arrivent. Mais je reste toujours reconnaissante pour chaque rencontre, car dès lors qu'une rencontre a eu lieu, quelque chose est déjà différent.`,
        en: `This is ZCP's first conversation, between Willy and Su Hong.

Willy Le Nalbaut lives and works in France; Su Hong lives and works in China. Before this conversation began, I did not know them — nor did they know each other.

I met Willy at Galerie du Haut-Pavé in Paris. The first time I saw him, I was drawn to his work, and that is how I began to learn about his practice. Later, through ZCP's first open call, I discovered Su Hong among the work of many Chinese artists.

I founded Zhen Collection Paris (ZCP) with a very clear objective: that more French artists be seen in China, and that more Chinese artists be seen in France — and farther afield.

But I want more than works appearing in another country. I hope artists from different cultures can truly come to know one another — to see how the other lives, makes work, and understands the same world.

That is why I invited Willy and Su Hong to begin ZCP's first conversation.

By chance, they have both painted — the horse.
Su Hong paints horses; Willy does too. But as I came to know their work, I found that the same horse carries completely different meanings for each of them.

Perhaps that is what makes conversation interesting: we meet through something shared, and begin truly to see one another through our differences.

Beyond this conversation, French film producer Mélanie Gérin also accepted my invitation. We have known each other for a long time through life itself, and she witnessed the founding of ZCP. This time, as an outside observer, she watches the two artists' work and exchange, observes this ZCP that is only just beginning, and writes her response.

So this conversation brings together two artists who meet, and someone who watches that meeting from outside and bears witness to how ZCP begins.

In life, some people leave and others arrive. But I am always grateful for every encounter — because to have met, even once, already makes a difference.`,
      },
      name: {
        zh: "Jeanneegan Cui",
        fr: "Jeanneegan Cui",
        en: "Jeanneegan Cui",
      },
      role: {
        zh: "Fondatrice, Zhen Collection Paris ZCP",
        fr: "Fondatrice, Zhen Collection Paris ZCP",
        en: "Founder, Zhen Collection Paris ZCP",
      },
    },
    sharedQuestion: {
      questionFrom: {
        type: "brand",
        alt: "Zhen Collection Paris · ZCP",
        label: "Zhen Collection Paris · ZCP",
      },
      question: {
        zh: "今年是马年。你们都画过马。马对你们来说意味着什么？为什么？",
        fr: "Cette année est l'année du Cheval dans le calendrier chinois. Vous avez tous les deux représenté des chevaux dans votre travail. Que représente le cheval pour vous, et pourquoi ?",
        en: "This year is the Year of the Horse in the Chinese calendar. You have both depicted horses in your work. What does the horse mean to you, and why?",
      },
      answers: [
        {
          answerFrom: suHongPortraitAvatar,
          answer: {
            zh: "说到马，我第一个想到就是中华传统文化里十二地支的「午」，「午」在生肖中就是指的马这种动物。我们小时候都会背诵的属相顺口溜「……辰龙，巳蛇，午马，未羊……」！在中国人的五行中「午马」也代表「火」元素，按照中国古代的干支纪年法，2026年是丙午马年，「丙」在十天干中为「阳火」，所以今年可以说是「火马年」，火即为能量！另外再说到马会联想到速度，蓝天白云大草原上一群乌黑健硕的骏马在驰骋，就像是人生一世自由自在奔放的状态。能量流动不止，物质生生不息！",
            fr: `Quand on parle du cheval, la première chose qui me vient à l'esprit est le « Wu » (午), l'une des douze Branches terrestres de la culture traditionnelle chinoise. Dans le zodiaque chinois, « Wu » correspond précisément au cheval. En Chine, dès l'enfance, nous apprenons par cœur cette petite formule qui associe les douze Branches terrestres aux animaux du zodiaque : « … Chen, le Dragon ; Si, le Serpent ; Wu, le Cheval ; Wei, la Chèvre… »

Dans la pensée chinoise des Cinq Éléments, le « Cheval-Wu » (午马) est également associé à l'élément Feu. Selon l'ancien système chinois du cycle sexagésimal, fondé sur les Troncs célestes et les Branches terrestres, l'année 2026 est l'année Bing-Wu (丙午), l'année du Cheval. « Bing » (丙), parmi les dix Troncs célestes, correspond au « Feu Yang ». On peut donc dire que 2026 est une année du « Cheval de Feu ». Et le feu, c'est l'énergie !

Le cheval m'évoque aussi immédiatement la vitesse : sous un ciel bleu traversé de nuages blancs, dans l'immensité d'une prairie, j'imagine un groupe de chevaux noirs, puissants et vigoureux, galopant librement. C'est pour moi l'image d'une existence vécue dans la liberté, l'élan et sans entraves.

L'énergie ne cesse de circuler, et la matière ne cesse de se renouveler et de donner naissance à la vie.`,
            en: `When I think of the horse, the first thing that comes to mind is "Wu" (午), one of the Twelve Earthly Branches in traditional Chinese culture. In the Chinese zodiac, "Wu" corresponds to the horse. In China, from childhood, we learn by heart a little rhyme that connects the Twelve Earthly Branches with the zodiac animals: "… Chen, the Dragon; Si, the Snake; Wu, the Horse; Wei, the Goat…"

In the Chinese system of the Five Elements, the "Wu Horse" (午马) is also associated with the element of Fire. According to the traditional Chinese sexagenary cycle, based on the Heavenly Stems and Earthly Branches, 2026 is the year of Bing-Wu (丙午), the Year of the Horse. "Bing" (丙), one of the Ten Heavenly Stems, represents Yang Fire. So 2026 can also be described as a "Fire Horse" year. And fire is energy!

The horse also immediately makes me think of speed. Under a blue sky and white clouds, across a vast grassland, I imagine a herd of strong, black horses galloping freely. To me, this is an image of living one's life freely and without restraint, full of vitality and momentum.

Energy never ceases to flow, and matter continuously renews itself, giving rise to life.`,
          },
        },
        {
          answerFrom: willyPortraitAvatar,
          answer: {
            fr: `Je me suis représenté, dans la peinture visible sur ZCP, en âne.
Symboliquement, l'âne renvoie à plusieurs notions : la lenteur, l'entêtement, voire une certaine forme de bêtise. Autrefois, à l'école, on faisait porter aux enfants considérés comme « mauvais élèves » un bonnet d'âne pour les punir. Mais l'âne est aussi associé à des qualités bien différentes, notamment la patience et la persévérance.

Dans cette peinture, l'âne est dépassé par un groupe de chevaux resplendissants et colorés, tandis que lui apparaît gris et terne. Le contraste est volontaire. Le cheval, lui aussi membre de la famille des équidés, évoque la puissance, la vitesse et une certaine beauté.

Cette peinture est une métaphore de ma propre position face au monde de l'art contemporain et aux autres artistes. D'un sentiment que j'ai ressenti à un moment donné. Les chevaux me dépassent à toute vitesse, éclatants et étincelants, comme s'ils filaient à la vitesse d'un train ou d'un avion, sans même me laisser le temps de réagir. Tandis que l'âne avance plus lentement, avec ses propres moyens.

Il y a également une petite histoire personnelle derrière le choix de cet animal. Mon arrière-arrière-grand-père était maquignon (vendeur de chevaux), et le village dans lequel je vis s'appelle Asnières-sur-Nouère. Son nom fait référence aux ânes car cela signifie « marché aux ânes » et par extension aux chevaux.

Au-delà de toute cette symbolique, l'âne est simplement un animal que j'affectionne. Plus encore que le cheval, qui appartient pourtant à la même famille.
C'est pour cette raison que je le représente régulièrement dans mes tableaux.`,
            zh: `在ZCP本次对话的画作中，我把自画像画成一头驴。
象征意义上，驴让人想到几种观念：缓慢、固执，甚至某种愚钝。从前在学校里，会给被视为「坏学生」的孩子戴上驴耳帽作为惩罚。但驴也关联着截然不同的品质，尤其是耐心与坚持。

在这幅画里，驴被一群光彩夺目、色彩鲜艳的骏马甩在身后，而它自己显得灰扑扑、暗淡。这种对比是刻意的。马同样属于马科，却唤起力量、速度与某种美感。

这幅画是我面对当代艺术界与其他艺术家时自身处境的隐喻——某一时刻我曾有过的感受。那些马以全速超过我，耀眼闪亮，仿佛以火车或飞机的速度飞驰，甚至不给我反应的时间；而驴以更慢的步伐，凭自己的方式前行。

选择这种动物背后还有一段小小的个人故事。我的曾曾祖父是马商（maquignon），我居住的村庄名叫 Asnières-sur-Nouère，其名与驴有关，意为「驴市」，并由此延伸到马。

抛开这一切象征，驴就是我喜爱的动物——甚至比马更甚，尽管它们同属一类。正因如此，我经常在画里画它。`,
            en: `In the painting visible on ZCP, I represented myself as a donkey.
Symbolically, the donkey suggests several ideas: slowness, stubbornness, even a kind of foolishness. At school, children seen as "bad pupils" used to wear a dunce cap shaped like donkey's ears as punishment. But the donkey is also linked to very different qualities, especially patience and perseverance.

In this painting, the donkey is overtaken by a group of resplendent, colourful horses, while it appears grey and dull. The contrast is deliberate. The horse, also a member of the equine family, evokes power, speed, and a certain beauty.

This painting is a metaphor for my own position vis-à-vis the contemporary art world and other artists—a feeling I once had. The horses pass me at full speed, dazzling and glittering, as if they were racing at the speed of a train or a plane, without even giving me time to react. The donkey moves more slowly, with its own means.

There is also a small personal story behind the choice of this animal. My great-great-grandfather was a horse dealer (maquignon), and the village where I live is called Asnières-sur-Nouère. Its name refers to donkeys, meaning "donkey market," and by extension to horses.

Beyond all this symbolism, the donkey is simply an animal I am fond of—more so than the horse, though they belong to the same family. That is why I represent it regularly in my paintings.`,
          },
        },
      ],
    },
    willyToSuHong: {
      questionFrom: willyPortraitAvatar,
      question: {
        zh: "我想，在中国文化里，许多事物背后都藏着丰富的象征——你读我的画，会不会是完全另一种理解？",
        fr: "J'imagine qu'avec tout le symbolisme qui se trouve dans la culture chinoise caché derrière beaucoup de chose, tu dois avoir une lecture totalement différente de mes tableaux ?",
        en: "I imagine that with all the symbolism in Chinese culture hidden behind so many things, you must read my paintings in a completely different way?",
      },
      answerFrom: suHongPortraitAvatar,
    },
    suHongToWilly: {
      questionFrom: suHongPortraitAvatar,
      question: {
        zh: "你对中国当代艺术有多少了解？法国艺术家平时会关注中国当代艺术的发展吗？\n\n中国的艺术教育在很大程度上受到欧洲绘画传统和西方现代艺术的影响。作为法国艺术家，你如何看待来自中国和东方文化背景的当代艺术作品？\n\n当你观看我的作品时，首先看到的是一件当代艺术作品，还是作品背后的中国文化身份？其中哪些部分能够被你直接理解，哪些又让你感到陌生？",
        fr: "Dans quelle mesure connaissez-vous l'art contemporain chinois ? Les artistes français s'intéressent-ils généralement à son évolution ?\n\nL'enseignement artistique en Chine a été largement influencé par la tradition picturale européenne et par l'art moderne occidental. En tant qu'artiste français, comment regardez-vous les œuvres contemporaines issues de Chine et, plus largement, d'un contexte culturel oriental ?\n\nLorsque vous regardez mon travail, voyez-vous d'abord une œuvre d'art contemporain ou percevez-vous d'abord son identité culturelle chinoise ? Quels éléments vous paraissent immédiatement accessibles, et lesquels vous semblent plus étrangers ou nécessitent une connaissance du contexte chinois ?",
        en: "How much do you know about contemporary Chinese art? Do French artists usually follow the development of contemporary art in China?\n\nArt education in China has been shaped to a large extent by European painting traditions and Western modern art. As a French artist, how do you view contemporary artworks from China and from East Asian cultural backgrounds?\n\nWhen you look at my work, do you first see a contemporary artwork, or the Chinese cultural identity behind it? Which parts can you understand directly, and which feel unfamiliar to you?",
      },
      answerFrom: willyPortraitAvatar,
      answer: {
        zh: "遗憾的是，在欧洲，我们对中国当代艺术了解相当有限——至少这是我的印象。近几年或许对中国与中国艺术家多了一些关注，但就我个人而言，我只熟悉三四位知名的中国当代艺术家。\n\n从教育角度看，很少面向东方，尤其是中国。在学校，我们很少谈到，甚至几乎不谈中国艺术。\n\n乍看之下，当我看你的马系列《Ma Gui》，或动物系列 Big Friends 时，我更看到的是一件可能来自世界任何地区的当代艺术，并不会立刻感到一种中国文化身份。而在你的花卉系列或鱼类系列里，这种身份似乎更明显。我会想艺术家应有亚洲背景，因为某些文化或美学元素更可见。\n\n再读《Ma Gui》系列所附文字后，我更理解这些作品的意义。画中的元素在视觉上可及，也较容易理解，尤其通过它们的处理方式。但作为欧洲人，元素背后的观念或象征未必能直接理解。在欧洲，某些元素例如马也可以有象征维度，但或许不如在中国文化中那样强烈、那样深植。",
        fr: "Malheureusement, on connaît assez peu le monde de l'art contemporain chinois en Europe, du moins c'est l'impression que j'ai. Depuis quelques années il y a peut-être un peu plus de regard porté vers la Chine et les artistes chinois, mais personnellement, je ne connais que trois ou quatre artistes contemporains chinois connus.\n\nDu point de vue de l'enseignement, il est peu tourné vers l'Orient, et notamment vers la Chine. À l'école, on nous parle très peu, voire pas du tout, de l'art chinois.\n\nAu premier abord, lorsque je regarde ta série de peintures sur les chevaux, Ma Gui, ou encore celle sur les animaux, Big Friends, je vois davantage une œuvre d'art contemporain qui pourrait provenir de n'importe quelle autre région du monde. Je ne perçois pas immédiatement une identité culturelle chinoise. En revanche, dans ta série sur les fleurs ou celle sur les poissons, cette identité me semble plus présente. Je me dis alors que l'artiste doit être d'origine asiatique, car certains éléments culturels ou esthétiques sont plus visibles.\n\nEn lisant ensuite le texte qui accompagne la série Ma Gui, je comprends mieux le sens de ces œuvres. Les éléments présents dans les peintures sont accessibles visuellement et peuvent être compris assez facilement, notamment grâce à leur traitement. Par contre, en tant qu'Européen, l'idée qui se trouve derrière ces éléments ou leur symbolisme ne sont pas forcément compréhensibles directement. En Europe, certains éléments comme le cheval par exemple peuvent avoir une dimension symbolique, mais peut-être pas aussi forte et encrée que dans la culture chinoise.",
        en: "Unfortunately, we know relatively little about contemporary Chinese art in Europe — at least that's my impression. In recent years there may be slightly more attention toward China and Chinese artists, but personally I only know three or four well-known contemporary Chinese artists.\n\nFrom the standpoint of education, little is oriented toward the East, and especially toward China. At school we are told very little, if at all, about Chinese art.\n\nAt first glance, when I look at your horse paintings, Ma Gui, or your animal series Big Friends, I see contemporary art that could come from almost anywhere in the world. I don't immediately perceive a Chinese cultural identity. In your flower series or fish series, on the other hand, that identity seems more present. I then think the artist must be of Asian origin, because certain cultural or aesthetic elements are more visible.\n\nAfter reading the text that accompanies the Ma Gui series, I understand the meaning of these works better. The elements in the paintings are visually accessible and can be grasped fairly easily, especially through their treatment. But as a European, the ideas behind these elements or their symbolism are not necessarily understandable at once. In Europe, some elements such as the horse can carry symbolic weight, but perhaps not as strongly or as deeply rooted as in Chinese culture.",
      },
    },
    observerQuestions: [
      {
        author: "Mélanie Gérin",
        authorKicker: "MÉLANIE GÉRIN",
        article: true,
        questionFrom: melanieGerinAvatar,
        authorBio: {
          zh: "法国制片人，任职于 Zadig Productions，长期从事纪录片与电影制作。",
          fr: "Productrice française chez Zadig Productions, engagée depuis longtemps dans la production de documentaires et de films.",
          en: "A French producer at Zadig Productions, with a long-standing practice in documentary and film production.",
        },
        question: {
          zh: "代发布",
          fr: "À paraître",
          en: "Coming soon",
        },
      },
    ],
    publicParticipation: {
      open: true,
      note: {
        zh: "欢迎在此留言，参与这一期对话。",
        fr: "Laissez un message ici pour participer à cette conversation.",
        en: "Leave a message here to join this conversation.",
      },
    },
    artists: ["willy-le-nalbaut", "su-hong"],
    featuredWorks: [
      {
        artistSlug: "willy-le-nalbaut",
        artworkId: "3",
        displayAspect: [1024, 659],
      },
      {
        artistSlug: "su-hong",
        artworkId: "1",
        image: "/artists/su-hong/works/ma-gui-dialogue.jpg",
        displayAspect: [853, 1024],
        description: {
          zh: `此系列是复古与现代的融合，谐音与寓意的碰撞。灵感来源于中国传统文化在发音上的谐音。

在中国文化中，马象征着自由、奔放、力量与成功；柜作为家具中常见的物品，通常与财富、储存和稳定联系在一起。将「马有贵」这一谐音，既体现了传统文化的智慧，又赋予了作品独特的寓意。线条简洁流畅，展现出一种现代感。在构思过程中，将马的动物形象与各种复古柜子的结构融合在一起。

「柜马贵」或者「马富贵」——「马」与「柜子」在视觉上形成了强烈的对比和冲击，这种对「马」的寓意以及充满生机与希望的柜子的结合，也寓意着财富与自由、力量与稳定的完美结合。

同时，作品也传达出一种积极向上的精神。马的奔放与活力象征着人们在追求目标时的勇气和决心，而柜子的稳定则提醒人们在追求财富和成功的过程中，要保持内心的平静和稳定。这种精神传达使作品不仅具有视觉上的美感，更具有情感上的共鸣。`,
          fr: `Cette série fusionne le vintage et le contemporain — collision d'homophonies et de sens. L'inspiration vient des jeux de mots fondés sur la prononciation dans la culture chinoise traditionnelle.

En Chine, le cheval (马) symbolise liberté, fougue, force et réussite ; l'armoire (柜), meuble familier, évoque richesse, réserve et stabilité. L'homophonie « 马有贵 » (mǎ yǒu guì) porte la sagesse traditionnelle tout en conférant à l'œuvre une signification propre. Les lignes, fluides et épurées, affirment une modernité : au fil de la conception, la figure animale du cheval se fond avec diverses structures d'armoires anciennes.

« 柜马贵 » ou « 马富贵 » — le cheval et l'armoire produisent un contraste visuel fort ; cette alliance de sens — vitalité équestre et cabinet plein d'espoir — suggère l'union de richesse et liberté, de force et stabilité.

L'œuvre transmet aussi un esprit positif : la fougue du cheval incarne le courage et la détermination dans la quête d'un objectif ; la stabilité de l'armoire rappelle de garder le calme intérieur en poursuivant richesse et succès. Au-delà de la beauté visuelle, la série cherche une résonance émotionnelle.`,
          en: `This series merges the vintage and the contemporary—a collision of homophony and meaning. Its inspiration comes from wordplay rooted in pronunciation within traditional Chinese culture.

In Chinese culture, the horse (马) symbolizes freedom, vigor, strength, and success; the cabinet (柜), a familiar piece of furniture, is linked to wealth, storage, and stability. The homophonic phrase « 马有贵 » (mǎ yǒu guì) carries traditional wisdom while giving the work its distinct meaning. Lines stay fluid and concise, asserting a modern sensibility: through the process of conception, the animal figure of the horse merges with various structures of vintage cabinets.

« 柜马贵 » or « 马富贵 »—horse and cabinet create a sharp visual contrast; this pairing of meanings—equestrian vitality and a cabinet full of hope—suggests a union of wealth and freedom, strength and stability.

The work also conveys an upward spirit: the horse's exuberance stands for courage and resolve in pursuing one's goals; the cabinet's steadiness reminds us to keep inner calm while seeking wealth and success. Beyond visual beauty, the series seeks emotional resonance.`,
        },
      },
    ],
    collectionSupport: {
      sectionTitle: {
        zh: "COLLECTIONNER LA CONVERSATION · 收藏这场对话",
        fr: "COLLECTIONNER LA CONVERSATION · 收藏这场对话",
        en: "COLLECT THE CONVERSATION · 收藏这场对话",
      },
      body: {
        zh: `收藏本期两位艺术家的原作，或收藏为本次对话特别制作的 ZCP 限量对话版画。

每一次收藏，都支持艺术家的创作，也支持 ZCP 继续下一场对话。`,
        fr: `Collectionnez les originaux des deux artistes de cette conversation, ou les estampes en édition limitée ZCP, spécialement réalisées pour ce dialogue.

Chaque acquisition soutient le travail des artistes et permet à ZCP de poursuivre la prochaine conversation.`,
        en: `Collect the originals by the two artists in this conversation, or the ZCP limited dialogue prints made especially for this episode.

Each acquisition supports the artists' work and helps ZCP continue the next conversation.`,
      },
      originalAction: {
        zh: "收藏原作",
        fr: "Collectionner l'original",
        en: "Collect original",
      },
      editionAction: {
        zh: "收藏限量对话版画",
        fr: "Collectionner l'estampe dialogue ZCP",
        en: "Collect ZCP dialogue print",
      },
      artists: [
        {
          artistSlug: "willy-le-nalbaut",
          workId: "3",
          editionPriceEur: 169,
          editionProductName: {
            zh: "ZCP CONVERSATION 01 — Willy Le Nalbaut",
            fr: "ZCP CONVERSATION 01 — Willy Le Nalbaut",
            en: "ZCP CONVERSATION 01 — Willy Le Nalbaut",
          },
        },
        {
          artistSlug: "su-hong",
          workId: "1",
          editionPriceEur: 169,
          editionProductName: {
            zh: "ZCP CONVERSATION 01 — Su Hong",
            fr: "ZCP CONVERSATION 01 — Su Hong",
            en: "ZCP CONVERSATION 01 — Su Hong",
          },
        },
      ],
    },
    isCurrent: true,
    status: "current",
  },
];

export function getCurrentEpisode(): DialogueEpisode {
  const current = episodes.find((e) => e.isCurrent);
  if (!current) {
    throw new Error("No current dialogue episode configured.");
  }
  return current;
}

export function getEpisodeBySlug(slug: string): DialogueEpisode | undefined {
  return episodes.find((e) => e.slug === slug);
}

export function getAllEpisodes(): DialogueEpisode[] {
  return [...episodes].sort((a, b) => a.month.localeCompare(b.month));
}

export function getEpisodesByYear(): { year: string; episodes: DialogueEpisode[] }[] {
  const byYear = new Map<string, DialogueEpisode[]>();

  for (const episode of getAllEpisodes()) {
    const year = episode.month.slice(0, 4);
    const list = byYear.get(year) ?? [];
    list.push(episode);
    byYear.set(year, list);
  }

  return [...byYear.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, yearEpisodes]) => ({ year, episodes: yearEpisodes }));
}

export function getUpcomingEpisodes(limit?: number): DialogueEpisode[] {
  const upcoming = getAllEpisodes().filter(
    (episode) => episode.status === "upcoming" || (!episode.isCurrent && !episode.status),
  );
  return limit ? upcoming.slice(0, limit) : upcoming;
}

export function getCurrentDialoguePath(): string {
  return `/dialogue/${getCurrentEpisode().slug}`;
}

export function formatEpisodeMonth(
  month: string,
  locale: Locale,
  options?: { zhSpacedYear?: boolean },
): string {
  const [year, monthNum] = month.split("-");
  if (locale === "zh") {
    if (options?.zhSpacedYear) {
      return `${year} 年${Number(monthNum)}月`;
    }
    return `${year}年${Number(monthNum)}月`;
  }
  if (locale === "en") {
    return new Date(`${month}-01`).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  }
  return new Date(`${month}-01`).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });
}
