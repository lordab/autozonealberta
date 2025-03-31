import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing', {
    id: serial('id').primaryKey(),
    make: varchar('make').notNull(),
    year: varchar('year').notNull(),
})