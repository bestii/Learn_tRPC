import { todos } from "@/db/schema";
import Database from "better-sqlite3";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { z } from "zod";
import { publicProcedure, router } from "../trpc";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "drizzle" });

export const todoRouter = router({
  getTodos: publicProcedure.query(async () => {
    return await db.select().from(todos);
  }),
  createTodo: publicProcedure
    .input(z.object({ content: z.string() }))
    .mutation(async (opts) => {
      db.insert(todos).values({ content: opts.input.content, done: 0 }).run();
      return true;
    }),
  updateTodo: publicProcedure
    .input(
      z.object({
        id: z.number(),
        content: z.string(),
        done: z.number(),
      })
    )
    .mutation(async (opts) => {
      db.update(todos)
        .set({ content: opts.input.content, done: opts.input.done })
        .where(eq(todos.id, opts.input.id))
        .run();
      return true;
    }),
  deleteTodo: publicProcedure.input(z.number()).mutation(() => {
    return "Deleted";
  }),
});
