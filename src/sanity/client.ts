import { createClient } from "@sanity/client";

export const sanityConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || "2025-01-01",
  useCdn: true,
};

export const isSanityConfigured = Boolean(sanityConfig.projectId);

export const sanityClient = isSanityConfigured
  ? createClient(sanityConfig)
  : null;

export async function fetchSanity<T>(query: string, params: Record<string, unknown> = {}) {
  if (!sanityClient) return null;
  return sanityClient.fetch<T>(query, params);
}
