import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "@trpc/shared";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
