# 🚀 Project Setup: Bun + ElysiaJS + Drizzle + MySQL

## Objective

Initialize a new backend API project in this repository using **Bun** as the runtime, **ElysiaJS** as the web framework, **Drizzle ORM** for database access, and **MySQL** as the database.

---

## Phase 1 — Project Initialization

- Initialize a new Bun project (`bun init`) in the root of this repository.
- Install the required dependencies:
  - `elysia` — web framework
  - `drizzle-orm` — ORM
  - `drizzle-kit` — migrations & schema tooling (dev dependency)
  - `mysql2` — MySQL driver

## Phase 2 — Project Structure

Create the following folder structure:

```
src/
├── index.ts          # App entry point, starts Elysia server
├── db/
│   ├── schema.ts     # Drizzle table schemas
│   ├── index.ts      # Drizzle client & DB connection
│   └── migrate.ts    # Migration runner
├── routes/
│   └── index.ts      # API route definitions
drizzle.config.ts     # Drizzle Kit configuration
```

## Phase 3 — Database Configuration

- Set up a Drizzle client using the `mysql2` driver.
- Use environment variables (e.g. `DATABASE_URL`) for the connection string.
- Create a `drizzle.config.ts` pointing to the schema and migrations folder.
- Create a `.env.example` file documenting the required env vars.

## Phase 4 — Sample Schema & Migration

- Define at least one sample table (e.g. `users` with `id`, `name`, `email`, `createdAt`).
- Generate the initial migration using `drizzle-kit generate`.

## Phase 5 — API Routes

- Create a basic Elysia server listening on a configurable port.
- Add sample CRUD routes for the sample table:
  - `GET /users` — list all
  - `GET /users/:id` — get by id
  - `POST /users` — create
  - `PUT /users/:id` — update
  - `DELETE /users/:id` — delete

## Phase 6 — Scripts & DX

- Add the following scripts to `package.json`:
  - `dev` — run the server in watch mode (`bun --watch`)
  - `db:generate` — generate migrations
  - `db:migrate` — apply migrations
- Add a `.gitignore` covering `node_modules`, `.env`, and drizzle output.

---

> **Note:** This plan is intentionally high-level. The implementing agent should make reasonable choices for any details not specified here (naming conventions, error handling patterns, etc.).

