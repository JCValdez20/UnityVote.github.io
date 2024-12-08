import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const votes = sqliteTable('votes', {
    id: integer('id').primaryKey({autoIncrement: true}),
    candidate: text('candidate').notNull(),
    votes: integer('votes').default(0),
});
