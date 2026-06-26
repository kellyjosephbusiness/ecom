import { type SchemaTypeDefinition } from "sanity";

// City template source (highest-volume template). Facilities reference a city;
// the city page lists the facilities in it.
export const city = {
  name: "city",
  title: "City",
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
      name: "state",
      title: "State",
      type: "reference",
      to: [{ type: "state" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "intro",
      title: "Intro",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "faq" }],
    },
    { name: "seoDescription", title: "SEO description", type: "text" },
  ],
  preview: { select: { title: "name", subtitle: "state.name" } },
} as unknown as SchemaTypeDefinition;
