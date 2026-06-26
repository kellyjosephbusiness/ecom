import { type SchemaTypeDefinition } from "sanity";

// Taxonomy for "browse by condition" (e.g. Alzheimer's, Parkinson's).
export const condition = {
  name: "condition",
  title: "Condition",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    },
    { name: "description", title: "Description", type: "text" },
  ],
  preview: { select: { title: "title" } },
} as unknown as SchemaTypeDefinition;
