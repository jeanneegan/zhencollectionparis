import { getEditionById, getEditionCopyRecord } from "@/app/edition/data";
import {
  getArtworkPassport,
  type ArtworkPassport,
} from "@/app/lib/artwork-passport";

function archiveIdForCopy(
  artistSlug: string,
  workId: string,
  year: number,
  copyNumber: number,
): string {
  const artistCode = artistSlug
    .split("-")
    .map((part) => part.slice(0, 1).toUpperCase())
    .join("");
  return `ZCP-${year}-${artistCode}-${workId}/${copyNumber}`;
}

export function getEditionCopyPassportPath(
  editionId: string,
  copyNumber: number,
): string {
  return `/edition/${editionId}/${copyNumber}`;
}

export function hasEditionCopyPassport(
  editionId: string,
  copyNumber: number,
): boolean {
  const edition = getEditionById(editionId);
  const copy = getEditionCopyRecord(editionId, copyNumber);
  if (!edition || !copy) {
    return false;
  }

  return getArtworkPassport(edition.artistSlug, edition.workId) !== null;
}

export function getEditionCopyPassport(
  editionId: string,
  copyNumber: number,
): ArtworkPassport | null {
  const edition = getEditionById(editionId);
  const copy = getEditionCopyRecord(editionId, copyNumber);
  if (!edition || !copy) {
    return null;
  }

  const base = getArtworkPassport(edition.artistSlug, edition.workId);
  if (!base) {
    return null;
  }

  return {
    ...base,
    archiveId: archiveIdForCopy(
      edition.artistSlug,
      edition.workId,
      edition.year,
      copyNumber,
    ),
    editionCopy: {
      number: copyNumber,
      total: edition.copies,
    },
    passportNote: copy.passportNote,
    collectorNote: copy.collectorNote,
    status: copy.status,
    provenance: copy.provenance,
  };
}
