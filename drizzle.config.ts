import { type Config } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export default {
  schema: "./src/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    uri: process.env.NODE_ENV === "production" ? process.env.DATABASE_URL as string : process.env.DATABASE_URL_TEST as string,
  },
} satisfies Config;
