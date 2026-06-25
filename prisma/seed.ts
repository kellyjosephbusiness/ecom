import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// Neon serverless driver needs a WebSocket impl in Node (port 5432 may be
// blocked in some environments; this talks to Neon over HTTPS/WebSocket).
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is not set");

const adapter = new PrismaNeon({ connectionString });
const prisma = new PrismaClient({ adapter });

const base = [
  { id: 1, title: "Havit HV-G69 USB Gamepad", reviews: 15, price: 59.0, discountedPrice: 29.0 },
  { id: 2, title: "iPhone 14 Plus , 6/128GB", reviews: 5, price: 899.0, discountedPrice: 99.0 },
  { id: 3, title: "Apple iMac M1 24-inch 2021", reviews: 5, price: 59.0, discountedPrice: 29.0 },
  { id: 4, title: "MacBook Air M1 chip, 8/256GB", reviews: 6, price: 59.0, discountedPrice: 29.0 },
  { id: 5, title: "Apple Watch Ultra", reviews: 3, price: 99.0, discountedPrice: 29.0 },
  { id: 6, title: "Logitech MX Master 3 Mouse", reviews: 15, price: 59.0, discountedPrice: 29.0 },
  { id: 7, title: "Apple iPad Air 5th Gen - 64GB", reviews: 15, price: 59.0, discountedPrice: 29.0 },
  { id: 8, title: "Asus RT Dual Band Router", reviews: 15, price: 59.0, discountedPrice: 29.0 },
];

const products = base.map((p) => ({
  ...p,
  thumbnails: [
    `/images/products/product-${p.id}-sm-1.png`,
    `/images/products/product-${p.id}-sm-2.png`,
  ],
  previews: [
    `/images/products/product-${p.id}-bg-1.png`,
    `/images/products/product-${p.id}-bg-2.png`,
  ],
}));

async function main() {
  for (const p of products) {
    await prisma.product.upsert({ where: { id: p.id }, update: p, create: p });
  }
  // Keep the autoincrement sequence ahead of the explicitly-seeded ids.
  await prisma.$executeRawUnsafe(
    `SELECT setval(pg_get_serial_sequence('"Product"', 'id'), (SELECT COALESCE(MAX(id), 1) FROM "Product"))`
  );
  console.log(`Seeded ${products.length} products`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
