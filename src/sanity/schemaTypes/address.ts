import { type SchemaTypeDefinition } from "sanity";

// Reusable postal address + coordinates (for maps / "near me").
export const address = {
  name: "address",
  title: "Address",
  type: "object",
  fields: [
    { name: "street", title: "Street", type: "string" },
    { name: "city", title: "City", type: "string" },
    { name: "state", title: "State", type: "string" },
    { name: "zip", title: "ZIP / Postal code", type: "string" },
    { name: "geo", title: "Coordinates", type: "geopoint" },
  ],
} as unknown as SchemaTypeDefinition;
