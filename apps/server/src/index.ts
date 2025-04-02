import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter, createContext } from "@trpc/shared";
import cors from "cors";
import express from "express";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/trpc", createExpressMiddleware({ router: appRouter, createContext }));

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
