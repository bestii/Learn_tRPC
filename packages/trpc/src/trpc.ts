import { initTRPC, TRPCError } from "@trpc/server";
import { createContext } from "./context";

const t = initTRPC.context<ReturnType<typeof createContext>>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

const isAdminMiddleware = t.middleware(({ ctx, next }) => {
  if (!ctx.isAdmin) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }
  return next({
    ctx: {
      user: { id: "1", name: "John Doe" },
    },
  });
});

export const adminProcedure = t.procedure.use(isAdminMiddleware);
