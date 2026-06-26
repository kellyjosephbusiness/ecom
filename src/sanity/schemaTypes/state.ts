import { type SchemaTypeDefinition } from "sanity";

// State template source. Lists the cities within it (cities reference a state).
export const state = {
  name: "state",
  title: "State",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    },
    { name: "abbreviation", title: "Abbreviation", type: "string" },
    {
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "block" }],
    },
    { name: "seoDescription", title: "SEO description", type: "text" },
  ],
  preview: { select: { title: "name", subtitle: "abbreviation" } },
} as unknown as SchemaTypeDefinition;
