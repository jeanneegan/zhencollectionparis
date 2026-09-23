import { NextResponse } from "next/server";
import { addDialogueParticipationApplication } from "@/app/lib/dialogue-applications-store";
import { sendInboundEmail } from "@/app/lib/send-inbound-email";

const ROLE_LABELS: Record<string, string> = {
  artist: "Artiste · 艺术家",
  observer: "Observateur · 观察者",
  public: "Public · 公众提问者",
  other: "Autre · 其他",
};

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, role, message, link } = body as {
    name?: unknown;
    email?: unknown;
    role?: unknown;
    message?: unknown;
    link?: unknown;
  };

  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (typeof email !== "string" || !email.trim()) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  if (typeof role !== "string" || !role.trim()) {
    return NextResponse.json({ error: "Role is required." }, { status: 400 });
  }

  if (name.trim().length > 120) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  if (email.trim().length > 200) {
    return NextResponse.json({ error: "Email is too long." }, { status: 400 });
  }

  if (message.trim().length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  if (link !== undefined && link !== null && typeof link !== "string") {
    return NextResponse.json({ error: "Invalid link." }, { status: 400 });
  }

  if (typeof link === "string" && link.trim().length > 500) {
    return NextResponse.json({ error: "Link is too long." }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedRole = role.trim();
  const trimmedMessage = message.trim();
  const trimmedLink = typeof link === "string" ? link.trim() : undefined;
  const roleLabel = ROLE_LABELS[trimmedRole] ?? trimmedRole;

  const emailResult = await sendInboundEmail({
    subject: `[ZCP] Dialogue participation · 报名对话 — ${trimmedName}`,
    replyTo: trimmedEmail,
    text: [
      "New dialogue participation application · 新对话报名",
      "",
      `Name · 姓名: ${trimmedName}`,
      `Email · 邮箱: ${trimmedEmail}`,
      `Profile · 身份: ${roleLabel}`,
      ...(trimmedLink ? [`Link · 链接: ${trimmedLink}`] : []),
      "",
      "Message · 简述与意向:",
      trimmedMessage,
      "",
      `Submitted at · 提交时间: ${new Date().toISOString()}`,
    ].join("\n"),
  });

  try {
    const application = await addDialogueParticipationApplication({
      name: trimmedName,
      email: trimmedEmail,
      role: trimmedRole,
      message: trimmedMessage,
      link: trimmedLink,
      ...(emailResult.sent ? { emailSentAt: new Date().toISOString() } : {}),
    });

    return NextResponse.json(
      {
        application,
        emailSent: emailResult.sent,
        ...(emailResult.error && !emailResult.sent
          ? { emailWarning: emailResult.error }
          : {}),
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Unable to save application." },
      { status: 500 },
    );
  }
}
