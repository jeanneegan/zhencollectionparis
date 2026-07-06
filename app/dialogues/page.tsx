import { getAllEpisodes, getEpisodesByYear } from "@/app/dialogue/data";
import { DialoguesView } from "./dialogues-view";

export default function DialoguesPage() {
  const total = getAllEpisodes().length;
  const byYear = getEpisodesByYear();

  return <DialoguesView total={total} byYear={byYear} />;
}
