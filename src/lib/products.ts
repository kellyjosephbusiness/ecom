import { prisma } from "@/lib/prisma";
import { Product } from "@/types/product";

// Maps a Prisma Product row to the shape the UI components expect
// (nested `imgs` object instead of flat thumbnail/preview arrays).
export async function getProducts(): Promise<Product[]> {
  const rows = await prisma.product.findMany({ orderBy: { id: "asc" } });
  return rows.map((p) => ({
    id: p.id,
    title: p.title,
    reviews: p.reviews,
    price: p.price,
    discountedPrice: p.discountedPrice,
    imgs: { thumbnails: p.thumbnails, previews: p.previews },
  }));
}
