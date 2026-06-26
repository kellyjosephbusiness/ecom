import { type SchemaTypeDefinition } from "sanity";

// Reusable rating object: an overall score plus subcategory bars
// (e.g. Staff, Cleanliness, Care, Food, Activities).
export const rating = {
  name: "rating",
  title: "Rating",
  type: "object",
  fields: [
    {
      name: "overall",
      title: "Overall (0–5)",
      type: "number",
      validation: (rule) => rule.min(0).max(5),
    },
    {
      name: "categories",
      title: "Subcategory scores",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            {
              name: "score",
              title: "Score (0–5)",
              type: "number",
              validation: (rule) => rule.min(0).max(5),
            },
          ],
          preview: { select: { title: "label", subtitle: "score" } },
        },
      ],
    },
  ],
} as unknown as SchemaTypeDefinition;
