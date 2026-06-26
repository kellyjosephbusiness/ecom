import { type SchemaTypeDefinition } from "sanity";

// Reusable FAQ item, embedded on facilities, cities, care types, etc.
export const faq = {
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      validation: (rule) => rule.required(),
    },
  ],
  preview: { select: { title: "question" } },
} as unknown as SchemaTypeDefinition;
