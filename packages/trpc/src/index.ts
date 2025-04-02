import { userRouter } from "./routers/users";
import { router, publicProcedure } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  hello: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return `Hello, ${input.name}`;
    }),
  logToServer: publicProcedure
    .input(z.object({ message: z.string() }))
    .mutation(({ input }) => {
      console.log(input.message);
      return input.message;
    }),
  users: userRouter,
});

export type AppRouter = typeof appRouter;
