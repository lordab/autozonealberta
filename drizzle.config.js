import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_NJpi1XOy3LYQ@ep-cold-sunset-a50utkhw-pooler.us-east-2.aws.neon.tech/autozone-alberta?sslmode=require",
  }
});