export type Category = {
  title: string;
  id: number;
  img: string;
  // Senior living configuration
  slug: string;
  // "care" = level of care along the senior-care continuum,
  // "amenity" = lifestyle / community amenity
  kind: "care" | "amenity";
  // Short label used on cards and category listings
  description: string;
  // Longer intro paragraph shown at the top of the category page
  intro?: string;
  // Highlighted features / inclusions shown on the category page
  features?: string[];
};
