import { pgTable, integer, text } from 'drizzle-orm/pg-core';

export const exercises = pgTable('exercises', {
  id: integer('id').primaryKey(),
  name: text('name').notNull().unique(),
  category: text('category').notNull(),
  equipment: text('equipment').notNull(),
});
