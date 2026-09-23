import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const REDIS_KEY = "zcp-dialogue-applications";
const DATA_FILE = path.join(process.cwd(), "data", "dialogue-applications.json");

export type DialogueParticipationApplication = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  role: string;
  message: string;
  link?: string;
  source: "participer";
  emailSentAt?: string;
};

function useUpstash(): boolean {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL &&
      process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}

async function readFromUpstash(): Promise<DialogueParticipationApplication[]> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  const response = await fetch(`${url}/get/${REDIS_KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to read dialogue applications from Upstash.");
  }

  const payload = (await response.json()) as { result: string | null };
  if (!payload.result) {
    return [];
  }

  return JSON.parse(payload.result) as DialogueParticipationApplication[];
}

async function writeToUpstash(
  applications: DialogueParticipationApplication[],
): Promise<void> {
  const url = process.env.UPSTASH_REDIS_REST_URL!;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN!;

  const response = await fetch(`${url}/set/${REDIS_KEY}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(JSON.stringify(applications)),
  });

  if (!response.ok) {
    throw new Error("Failed to write dialogue applications to Upstash.");
  }
}

async function readFromFile(): Promise<DialogueParticipationApplication[]> {
  try {
    const raw = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as DialogueParticipationApplication[];
  } catch {
    return [];
  }
}

async function writeToFile(
  applications: DialogueParticipationApplication[],
): Promise<void> {
  await mkdir(path.dirname(DATA_FILE), { recursive: true });
  await writeFile(
    DATA_FILE,
    `${JSON.stringify(applications, null, 2)}\n`,
    "utf-8",
  );
}

async function readAll(): Promise<DialogueParticipationApplication[]> {
  if (useUpstash()) {
    return readFromUpstash();
  }
  return readFromFile();
}

async function writeAll(
  applications: DialogueParticipationApplication[],
): Promise<void> {
  if (useUpstash()) {
    await writeToUpstash(applications);
    return;
  }
  await writeToFile(applications);
}

export async function addDialogueParticipationApplication(input: {
  name: string;
  email: string;
  role: string;
  message: string;
  link?: string;
  emailSentAt?: string;
}): Promise<DialogueParticipationApplication> {
  const application: DialogueParticipationApplication = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name: input.name.trim(),
    email: input.email.trim(),
    role: input.role.trim(),
    message: input.message.trim(),
    ...(input.link?.trim() ? { link: input.link.trim() } : {}),
    source: "participer",
    ...(input.emailSentAt ? { emailSentAt: input.emailSentAt } : {}),
  };

  const applications = await readAll();
  applications.push(application);
  await writeAll(applications);

  return application;
}

export async function listDialogueParticipationApplications(): Promise<
  DialogueParticipationApplication[]
> {
  const applications = await readAll();
  return applications.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function countDialogueParticipationApplications(): Promise<number> {
  const applications = await readAll();
  return applications.length;
}
