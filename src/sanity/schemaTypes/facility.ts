import { type SchemaTypeDefinition } from "sanity";

// Facility / community — the individual listing. Powers the facility template
// and the community cards on city / care-type / browse pages.
export const facility = {
  name: "facility",
  title: "Facility / Community",
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
      description: "One-line summary shown on community cards.",
    },
    {
      name: "city",
      title: "City",
      type: "reference",
      to: [{ type: "city" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "careTypes",
      title: "Care types",
      type: "array",
      of: [{ type: "reference", to: [{ type: "careType" }] }],
    },
    { name: "address", title: "Address", type: "address" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "website", title: "Website", type: "url" },
    {
      name: "logo",
      title: "Logo / thumbnail",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "pricing",
      title: "Pricing",
      type: "object",
      fields: [
        {
          name: "startingMonthlyCost",
          title: "Starting monthly cost (USD)",
          type: "number",
        },
        { name: "note", title: "Note", type: "string" },
      ],
    },
    { name: "rating", title: "Rating", type: "rating" },
    {
      name: "conditions",
      title: "Conditions supported",
      type: "array",
      of: [{ type: "reference", to: [{ type: "condition" }] }],
    },
    {
      name: "insurance",
      title: "Insurance accepted",
      type: "array",
      of: [{ type: "reference", to: [{ type: "insurance" }] }],
    },
    {
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{ type: "faq" }],
    },
    { name: "featured", title: "Featured", type: "boolean", initialValue: false },
    { name: "publishedAt", title: "Published at", type: "datetime" },
  ],
  preview: { select: { title: "name", subtitle: "tagline", media: "logo" } },
} as unknown as SchemaTypeDefinition;
