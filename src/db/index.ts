import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import * as schema from "./schema";

export const db = drizzle(
  new Client({
    url: process.env.NODE_ENV === "production" ? process.env.DATABASE_URL : process.env.DATABASE_URL_TEST,
  }).connection(),
  { schema }
);
