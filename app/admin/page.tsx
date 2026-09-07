import { getAdminCounts } from "@/app/lib/admin-data";
import { countActiveDialogueMessages } from "@/app/lib/dialogue-messages-store";
import { AdminDashboardView } from "./admin-dashboard-view";

export default async function AdminPage() {
  const counts = {
    ...getAdminCounts(),
    dialogueMessages: await countActiveDialogueMessages(),
  };

  return <AdminDashboardView counts={counts} />;
}
