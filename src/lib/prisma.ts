import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

// The Neon serverless driver needs a WebSocket implementation when running on
// Node.js (e.g. local dev and Vercel's Node runtime). This lets Prisma talk to
// Neon over HTTPS/WebSocket (port 443) instead of the raw Postgres wire
// protocol (port 5432).
neonConfig.webSocketConstructor = ws;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Add it to .env.development.local (see https://nextmerce.com/docs/database)."
  );
}

const adapter = new PrismaNeon({ connectionString });

// Reuse a single PrismaClient across hot-reloads in development to avoid
// exhausting database connections.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
