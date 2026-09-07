import { NextResponse } from "next/server";
import {
  addDialogueMessage,
  listDialogueMessagesForEpisode,
} from "@/app/lib/dialogue-messages-store";

export async function GET(request: Request) {
  const episodeSlug = new URL(request.url).searchParams.get("episodeSlug");

  if (!episodeSlug) {
    return NextResponse.json(
      { error: "episodeSlug is required." },
      { status: 400 },
    );
  }

  const messages = await listDialogueMessagesForEpisode(episodeSlug);
  return NextResponse.json({ messages });
}

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

  const { episodeSlug, message, name } = body as {
    episodeSlug?: unknown;
    message?: unknown;
    name?: unknown;
  };

  if (typeof episodeSlug !== "string" || !episodeSlug.trim()) {
    return NextResponse.json(
      { error: "episodeSlug is required." },
      { status: 400 },
    );
  }

  if (typeof message !== "string" || !message.trim()) {
    return NextResponse.json(
      { error: "Message is required." },
      { status: 400 },
    );
  }

  if (message.trim().length > 2000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }

  if (name !== undefined && name !== null && typeof name !== "string") {
    return NextResponse.json({ error: "Invalid name." }, { status: 400 });
  }

  if (typeof name === "string" && name.trim().length > 100) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  try {
    const created = await addDialogueMessage({
      episodeSlug: episodeSlug.trim(),
      body: message,
      name: typeof name === "string" ? name : undefined,
    });

    return NextResponse.json({ message: created }, { status: 201 });
  } catch (error) {
    const messageText =
      error instanceof Error ? error.message : "Unable to save message.";

    return NextResponse.json({ error: messageText }, { status: 400 });
  }
}
