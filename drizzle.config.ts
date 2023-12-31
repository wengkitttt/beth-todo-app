import type { Config } from "drizzle-kit";

export default {
  schema: ["./src/db/schema/todo.ts"],
  driver: "turso",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
    authToken: process.env.DATABASE_AUTH_TOKEN as string,
  },
  out: "./src/db/migration",
} satisfies Config;
