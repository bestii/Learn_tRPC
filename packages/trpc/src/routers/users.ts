import { publicProcedure, router } from "../trpc";

export const userRouter = router({
  getUser: publicProcedure.query(() => {
    return {
      id: 1,
      name: "John Doe",
    };
  }),
});
