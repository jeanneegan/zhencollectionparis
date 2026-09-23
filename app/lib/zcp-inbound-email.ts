/** Inbox for form submissions (server-only). Override in Vercel: ZCP_INBOUND_EMAIL */
export function getZcpInboundEmail(): string {
  return process.env.ZCP_INBOUND_EMAIL ?? "contact@zhencollection.paris";
}
