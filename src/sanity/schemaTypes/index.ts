import { type SchemaTypeDefinition } from "sanity";

import { post } from "./post";

// Starter schema: a blog Post. Add more document/object types here.
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post],
};
