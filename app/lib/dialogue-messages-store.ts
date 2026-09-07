import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { getEpisodeBySlug } from "@/app/dialogue/data";

const REDIS_KEY = "zcp-dialogue-messages";
const DATA_FILE = path.join(process.cwd(), "data", "dialogue-messages.json");

export type DialoguePublicMessage = {
  id: string;
  episodeSlug: string;
  createdAt: string;
  name?: string;
  body: string;
  deletedAt?: string;
};

function useUpstash(): boolean {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL &&
      process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}

async function readFromUpstash(): Promise<DialoguePublicMessage[]> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  const response = await fetch(`${url}/get/${REDIS_KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to read dialogue messages from Upstash.");
  }

  const payload = (await response.json()) as { result: string | null };
  if (!payload.result) {
    return [];
  }

  return JSON.parse(payload.result) as DialoguePublicMessage[];
}

async function writeToUpstash(messages: DialoguePublicMessage[]): Promise<void> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  const response = await fetch(`${url}/set/${REDIS_KEY}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(JSON.stringify(messages)),
  });

  if (!response.ok) {
    throw new Error("Failed to write dialogue messages to Upstash.");
  }
}

async function readFromFile(): Promise<DialoguePublicMessage[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as DialoguePublicMessage[];
  } catch {
    return [];
  }
}

async function writeToFile(messages: DialoguePublicMessage[]): Promise<void> {
  await mkdir(path.dirname(DATA_FILE), { recursive: true });
  await writeFile(DATA_FILE, `${JSON.stringify(messages, null, 2)}\n`, "utf-8");
}

async function readAllMessages(): Promise<DialoguePublicMessage[]> {
  if (useUpstash()) {
    return readFromUpstash();
  }
  return readFromFile();
}

async function writeAllMessages(messages: DialoguePublicMessage[]): Promise<void> {
  if (useUpstash()) {
    await writeToUpstash(messages);
    return;
  }
  await writeToFile(messages);
}

function isActive(message: DialoguePublicMessage): boolean {
  return !message.deletedAt;
}

export async function listDialogueMessagesForEpisode(
  episodeSlug: string,
): Promise<DialoguePublicMessage[]> {
  const messages = await readAllMessages();

  return messages
    .filter((message) => message.episodeSlug === episodeSlug && isActive(message))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function listAllDialogueMessages(options?: {
  includeDeleted?: boolean;
}): Promise<DialoguePublicMessage[]> {
  const messages = await readAllMessages();

  return messages
    .filter((message) => options?.includeDeleted || isActive(message))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function countActiveDialogueMessages(): Promise<number> {
  const messages = await readAllMessages();
  return messages.filter(isActive).length;
}

export async function addDialogueMessage(input: {
  episodeSlug: string;
  body: string;
  name?: string;
}): Promise<DialoguePublicMessage> {
  if (!getEpisodeBySlug(input.episodeSlug)) {
    throw new Error("Unknown dialogue episode.");
  }

  const message: DialoguePublicMessage = {
    id: crypto.randomUUID(),
    episodeSlug: input.episodeSlug,
    createdAt: new Date().toISOString(),
    name: input.name?.trim() || undefined,
    body: input.body.trim(),
  };

  const messages = await readAllMessages();
  messages.push(message);
  await writeAllMessages(messages);

  return message;
}

export async function deleteDialogueMessage(id: string): Promise<boolean> {
  const messages = await readAllMessages();
  const index = messages.findIndex((message) => message.id === id);

  if (index === -1) {
    return false;
  }

  messages[index] = {
    ...messages[index],
    deletedAt: new Date().toISOString(),
  };

  await writeAllMessages(messages);
  return true;
}
