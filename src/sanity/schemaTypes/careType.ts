import { type SchemaTypeDefinition } from "sanity";

// Care-type hub source (e.g. Assisted Living, Memory Care, Independent Living).
export const careType = {
  name: "careType",
  title: "Care type",
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
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "faq" }],
    },
    { name: "seoDescription", title: "SEO description", type: "text" },
  ],
  preview: { select: { title: "name" } },
} as unknown as SchemaTypeDefinition;
