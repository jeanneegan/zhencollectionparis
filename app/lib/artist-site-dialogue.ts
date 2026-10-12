import type { Locale, LocalizedText } from "@/app/artists/[slug]/data";
import { t } from "@/app/artists/[slug]/data";
import type { DialogueEpisode } from "@/app/dialogue/data";

export type ArtistDialogueExcerpt = {
  id: string;
  kicker: LocalizedText;
  question: LocalizedText;
  questionFromLabel: LocalizedText;
  answer?: LocalizedText;
  role: "answer" | "question";
};

const SU_HONG_LABEL = "苏泓 Su Hong";

function isSuHongAvatar(label: string | undefined): boolean {
  return label === SU_HONG_LABEL;
}

/** Public ZCP dialogue content where Su Hong speaks or asks — from episode data only. */
export function getSuHongDialogueExcerpts(
  episode: DialogueEpisode,
): ArtistDialogueExcerpt[] {
  const items: ArtistDialogueExcerpt[] = [];
  const theme = episode.header?.theme ?? episode.title;

  const sharedSuAnswer = episode.sharedQuestion.answers?.find((entry) =>
    isSuHongAvatar(entry.answerFrom?.label),
  );
  if (sharedSuAnswer?.answer) {
    items.push({
      id: "shared-horse",
      kicker: theme,
      question: episode.sharedQuestion.question,
      questionFromLabel: {
        zh: "ZCP · 共同问题",
        fr: "ZCP · Question partagée",
        en: "ZCP · Shared question",
      },
      answer: sharedSuAnswer.answer,
      role: "answer",
    });
  }

  if (episode.willyToSuHong.answer) {
    items.push({
      id: "willy-to-su-hong",
      kicker: theme,
      question: episode.willyToSuHong.question,
      questionFromLabel: {
        zh: "Willy Le Nalbaut",
        fr: "Willy Le Nalbaut",
        en: "Willy Le Nalbaut",
      },
      answer: episode.willyToSuHong.answer,
      role: "answer",
    });
  }

  items.push({
    id: "su-hong-to-willy",
    kicker: theme,
    question: episode.suHongToWilly.question,
    questionFromLabel: {
      zh: SU_HONG_LABEL,
      fr: SU_HONG_LABEL,
      en: SU_HONG_LABEL,
    },
    role: "question",
  });

  return items;
}

export function formatDialogueEpisodeLabel(
  episode: DialogueEpisode,
  locale: Locale,
): string {
  const header = episode.header;
  if (!header) {
    return t(episode.title, locale);
  }
  return `${t(header.theme, locale)} · ${t(header.date, locale)}`;
}
