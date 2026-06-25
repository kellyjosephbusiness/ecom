import { type SchemaTypeDefinition } from "sanity";

// Declared as a plain object and cast: sanity@5's defineField discriminated
// union needs TypeScript >= 5.4 to narrow correctly, and this project is on
// 5.2. The runtime shape is a standard Sanity document schema.
export const post = {
  name: "post",
  title: "Post",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    },
  ],
  preview: {
    select: { title: "title", media: "mainImage" },
  },
} as unknown as SchemaTypeDefinition;
