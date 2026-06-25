import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

// Read-only client for fetching content from Sanity in the storefront.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
