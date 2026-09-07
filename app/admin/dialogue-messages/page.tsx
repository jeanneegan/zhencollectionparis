import { listAllDialogueMessages } from "@/app/lib/dialogue-messages-store";
import { DialogueMessagesAdminView } from "./dialogue-messages-admin-view";

export default async function AdminDialogueMessagesPage() {
  const messages = await listAllDialogueMessages();

  return <DialogueMessagesAdminView initialMessages={messages} />;
}
