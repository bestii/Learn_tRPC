import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable("todos", {
  id: integer("id").primaryKey().unique(),
  content: text("content").notNull(),
  done: integer("done").notNull().default(0),
});
