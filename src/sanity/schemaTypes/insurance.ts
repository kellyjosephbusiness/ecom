import { type SchemaTypeDefinition } from "sanity";

// Taxonomy for "browse by insurance" (e.g. Medicare, Medicaid, VA).
export const insurance = {
  name: "insurance",
  title: "Insurance",
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
