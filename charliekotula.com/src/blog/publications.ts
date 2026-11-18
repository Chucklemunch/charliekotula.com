import data from "./publications.json";
import { Publication } from "./types";

// Shared with scripts/fetch-substack.mjs, which reads the same JSON file.
export const publications: Publication[] = data;

export const findPublication = (id?: string) => publications.find((p) => p.id === id);
