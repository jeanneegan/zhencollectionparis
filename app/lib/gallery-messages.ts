import type { LocalizedText } from "@/app/artists/[slug]/data";

export type GalleryMessage = {
  id: string;
  date: string;
  from: LocalizedText;
  subject: LocalizedText;
  preview: LocalizedText;
  unread?: boolean;
};

export const GALLERY_RECEIVED_MESSAGES: GalleryMessage[] = [
  {
    id: "collection-attachez",
    date: "2026-07-04",
    from: {
      fr: "Collection · visiteur",
      zh: "收藏咨询 · 访客",
      en: "Collection · visitor",
    },
    subject: {
      fr: "Demande pour « Attachez vos ceintures ! »",
      zh: "关于《Attachez vos ceintures !》的咨询",
      en: "Inquiry about « Attachez vos ceintures ! »",
    },
    preview: {
      fr: "Bonjour, je souhaiterais connaître la disponibilité et le prix de cette œuvre de Willy Le Nalbaut, vue dans l'exposition Pérégrinations girouettes.",
      zh: "您好，我想了解 Willy Le Nalbaut 在《Pérégrinations girouettes》展览中这件作品的售价与是否可售。",
      en: "Hello, I would like to know the availability and price of this work by Willy Le Nalbaut, seen in the Pérégrinations girouettes exhibition.",
    },
    unread: true,
  },
  {
    id: "public-dialogue",
    date: "2026-06-28",
    from: {
      fr: "Public · Conversation",
      zh: "公众 · 对话",
      en: "Public · Conversation",
    },
    subject: {
      fr: "Message du public — épisode en cours",
      zh: "公众留言 — 当期对话",
      en: "Public message — current episode",
    },
    preview: {
      fr: "Votre dialogue entre artistes m'a fait penser à la place du regard du public dans une galerie de quartier.",
      zh: "艺术家对话让我想到社区画廊里公众凝视的位置。",
      en: "Your artist conversation made me think about the place of the public gaze in a neighbourhood gallery.",
    },
    unread: true,
  },
  {
    id: "zhen-collection",
    date: "2026-06-15",
    from: {
      fr: "Zhen Collection Paris",
      zh: "Zhen Collection Paris · 巴黎臻藏",
      en: "Zhen Collection Paris",
    },
    subject: {
      fr: "Mise en ligne de l'exposition Pérégrinations girouettes",
      zh: "展览《Pérégrinations girouettes》已上线",
      en: "Pérégrinations girouettes exhibition is live",
    },
    preview: {
      fr: "Votre sélection d'œuvres de Willy Le Nalbaut est désormais visible dans votre espace membre et peut être partagée.",
      zh: "您选定的 Willy Le Nalbaut 作品已在成员空间上线，可供分享。",
      en: "Your selection of works by Willy Le Nalbaut is now visible in your member space and ready to share.",
    },
  },
];
