import { integer } from "drizzle-orm/gel-core";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing', {
    id: serial('id').primaryKey(),
    make: varchar('make').notNull(),
    year: varchar('year').notNull(),
    vin: varchar('vin').notNull(),
    listingTitle: varchar('listingTitle').notNull(),
    price: integer('price').notNull(),
    mileage: integer('mileage').notNull()
})

export const CarImages=pgTable('carImages', {
    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    carListingId: integer('carListingId').notNull().references(()=>CarListing.id)
})