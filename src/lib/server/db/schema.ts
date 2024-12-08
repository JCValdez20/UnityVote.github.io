import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const advisers = sqliteTable('advisers', {
  id: integer('id').primaryKey({autoIncrement: true}),
  name: text('name').notNull(),
  votes: integer('votes').default(0),
});
