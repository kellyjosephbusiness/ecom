import { type SchemaTypeDefinition } from "sanity";

import { listing } from "./listing";
import { category } from "./category";
import { post } from "./post";

// Directory content models (listing + category) plus an optional blog post.
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [listing, category, post],
};
