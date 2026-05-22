import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export type SanityProject = {
  _id: string;
  title: string;
  category: string;
  image: SanityImageSource;
  url?: string;
};

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-03-01";

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = createClient({
  projectId: projectId ?? "missing-project-id",
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function projectImageUrl(
  source: SanityImageSource | string,
  width = 1360,
  height = 1000,
) {
  if (typeof source === "string") {
    return source;
  }

  return urlFor(source).width(width).height(height).fit("crop").auto("format").url();
}

const featuredProjectsQuery = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  category,
  image,
  url
}`;

export async function getFeaturedProjects(): Promise<SanityProject[]> {
  if (!isSanityConfigured) {
    return [];
  }

  return sanityClient.fetch<SanityProject[]>(featuredProjectsQuery);
}
