import { type SchemaTypeDefinition } from "sanity";

// Article / guide — powers the article template and the article hub.
export const article = {
  name: "article",
  title: "Article",
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
    { name: "excerpt", title: "Excerpt", type: "text" },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
    },
    { name: "publishedAt", title: "Published at", type: "datetime" },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    },
  ],
  preview: { select: { title: "title", media: "mainImage" } },
} as unknown as SchemaTypeDefinition;
