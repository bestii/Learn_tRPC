import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const todoRouter = router({
  getTodos: publicProcedure.query(() => {
    return [
      {
        id: 1,
        title: "Buy milk",
        completed: false,
      },
      {
        id: 2,
        title: "Buy eggs",
        completed: false,
      },
    ];
  }),
  createTodo: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(() => {
      return "Created";
    }),
  updateTodo: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string().optional(),
        completed: z.boolean().optional(),
      })
    )
    .mutation(() => {
      return "Updated";
    }),
  deleteTodo: publicProcedure.input(z.number()).mutation(() => {
    return "Deleted";
  }),
});
