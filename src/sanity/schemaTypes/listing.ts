import { type SchemaTypeDefinition } from "sanity";

// A directory Listing. General-purpose fields that fit most directory types
// (businesses, tools/SaaS, professionals). Declared as a plain object + cast
// (sanity@5 defineField needs TS >= 5.4; this project is on 5.2).
export const listing = {
  name: "listing",
  title: "Listing",
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
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short one-line summary shown on cards.",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "logo",
      title: "Logo / thumbnail",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "images",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "website",
      title: "Website",
      type: "url",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "tagline", media: "logo" },
  },
} as unknown as SchemaTypeDefinition;
