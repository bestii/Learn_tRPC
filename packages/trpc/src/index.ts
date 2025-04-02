import { z } from "zod";
import { createContext } from "./context";
import { userRouter } from "./routers/users.ts";
import { publicProcedure, router } from "./trpc.ts";

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

export { createContext };
