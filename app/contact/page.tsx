import type { Metadata } from "next";
import { ContactView } from "@/app/contact/contact-view";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact · 联系我们 · Zhen Collection Paris",
  description:
    "Contact Zhen Collection Paris — email, WeChat, and location. · ZCP 联系方式。",
});

export default function ContactPage() {
  return <ContactView />;
}
