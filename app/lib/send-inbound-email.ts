import { getZcpInboundEmail } from "@/app/lib/zcp-inbound-email";

type SendInboundEmailInput = {
  subject: string;
  text: string;
  replyTo?: string;
};

export async function sendInboundEmail(
  input: SendInboundEmailInput,
): Promise<{ sent: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { sent: false, error: "RESEND_API_KEY is not configured." };
  }

  const from =
    process.env.RESEND_FROM?.trim() ??
    "ZCP Website <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [getZcpInboundEmail()],
      subject: input.subject,
      text: input.text,
      ...(input.replyTo ? { reply_to: input.replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    return {
      sent: false,
      error: body || `Resend HTTP ${response.status}`,
    };
  }

  return { sent: true };
}
