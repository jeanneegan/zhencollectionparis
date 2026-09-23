import { listDialogueParticipationApplications } from "@/app/lib/dialogue-applications-store";
import { ParticipationApplicationsAdminView } from "./participation-applications-admin-view";

export default async function AdminParticipationApplicationsPage() {
  const applications = await listDialogueParticipationApplications();

  return <ParticipationApplicationsAdminView initialApplications={applications} />;
}
