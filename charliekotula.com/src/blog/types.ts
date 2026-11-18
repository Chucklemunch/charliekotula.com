// Shapes of the JSON written by scripts/fetch-substack.mjs into public/blog/.

export interface PostMeta {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  wordcount: number;
  coverImage: string | null;
  url: string;
}

export interface Post extends PostMeta {
  html: string;
}

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const readingTime = (words: number) => `${Math.max(1, Math.round(words / 230))} min read`;

export interface Publication {
  id: string;
  name: string;
  tagline: string;
  url: string;
  icon: string;
}
