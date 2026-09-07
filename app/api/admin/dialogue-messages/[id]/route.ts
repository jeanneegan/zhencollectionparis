import { NextResponse } from "next/server";
import { deleteDialogueMessage } from "@/app/lib/dialogue-messages-store";
import {
  getSuperMemberFromSession,
  unauthorizedSuperResponse,
} from "@/app/lib/require-super-api";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_request: Request, context: RouteContext) {
  const member = await getSuperMemberFromSession();
  if (!member) {
    return unauthorizedSuperResponse();
  }

  const { id } = await context.params;
  const deleted = await deleteDialogueMessage(id);

  if (!deleted) {
    return NextResponse.json({ error: "Message not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
