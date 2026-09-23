import { getAdminCounts } from "@/app/lib/admin-data";
import { countDialogueParticipationApplications } from "@/app/lib/dialogue-applications-store";
import { countActiveDialogueMessages } from "@/app/lib/dialogue-messages-store";
import { AdminDashboardView } from "./admin-dashboard-view";

export default async function AdminPage() {
  const counts = {
    ...getAdminCounts(),
    dialogueMessages: await countActiveDialogueMessages(),
    participationApplications: await countDialogueParticipationApplications(),
  };

  return <AdminDashboardView counts={counts} />;
}
