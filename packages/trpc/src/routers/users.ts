import { z } from "zod";
import { publicProcedure, router } from "../trpc.ts";

const userProcedure = publicProcedure.input(
  z.object({
    id: z.string(),
  })
);

export const userRouter = router({
  get: userProcedure.query(({ input }) => {
    return {
      id: input.id,
    };
  }),
  update: userProcedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation((req) => {
      console.log(
        `Updating user with id: ${req.input.id} with name ${req.input.name}`
      );
      return {
        id: req.input.id,
        name: req.input.name,
      };
    }),
});
