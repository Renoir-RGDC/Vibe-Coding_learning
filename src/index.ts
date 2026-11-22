import { Elysia } from "elysia";
import { routes } from "./routes";

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app = new Elysia()
  .get("/", () => ({
    name: "Bun + Elysia + Drizzle + MySQL API",
    status: "online",
  }))
  .use(routes)
  .listen(port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
