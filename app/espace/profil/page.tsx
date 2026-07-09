import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getArtistBySlug } from "@/app/artists/[slug]/data";
import {
  getMemberBySession,
  isAuthenticatedSession,
  SESSION_COOKIE,
} from "@/app/lib/auth";
import { EditProfileView } from "./edit-profile-view";

export default async function EditProfilePage() {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE)?.value;
  const member = getMemberBySession(session);

  if (!isAuthenticatedSession(session) || !member) {
    redirect("/connexion?next=/espace/profil");
  }

  if (member.type !== "artist" || !member.artistSlug) {
    redirect("/espace");
  }

  const artist = getArtistBySlug(member.artistSlug);

  if (!artist) {
    redirect("/espace");
  }

  return <EditProfileView artist={artist} memberEmail={member.email} />;
}
