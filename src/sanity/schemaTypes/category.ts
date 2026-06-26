import { type SchemaTypeDefinition } from "sanity";

// Directory category. Declared as a plain object + cast (sanity@5 defineField
// needs TS >= 5.4; this project is on 5.2).
export const category = {
  name: "category",
  title: "Category",
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
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  preview: { select: { title: "title" } },
} as unknown as SchemaTypeDefinition;
