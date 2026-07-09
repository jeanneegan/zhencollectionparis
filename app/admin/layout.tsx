import type { Metadata } from "next";
import { AdminWorkspaceLayout } from "@/app/components/admin-workspace-layout";
import { getAdminCounts } from "@/app/lib/admin-data";
import { createPageMetadata } from "@/app/lib/site-metadata";
import { requireSuper } from "@/app/lib/require-super";

export const metadata: Metadata = createPageMetadata({
  title: "Administration · 后台 · Zhen Collection Paris",
  description:
    "Console d'administration Zhen Collection Paris — artistes, galeries, œuvres et membres. · 巴黎臻藏后台管理。",
});

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const member = await requireSuper();
  const counts = getAdminCounts();

  return (
    <AdminWorkspaceLayout member={member} counts={counts}>
      {children}
    </AdminWorkspaceLayout>
  );
}
