import { Elysia, t } from "elysia";
import { db } from "../db";
import { users } from "../db/schema";
import { eq } from "drizzle-orm";

export const routes = new Elysia({ prefix: "/users" })
  .get("/", async () => {
    return await db.select().from(users);
  })
  .get(
    "/:id",
    async ({ params: { id }, set }) => {
      const [user] = await db.select().from(users).where(eq(users.id, Number(id)));
      if (!user) {
        set.status = 404;
        return { message: "User not found" };
      }
      return user;
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    }
  )
  .post(
    "/",
    async ({ body, set }) => {
      try {
        const [result] = await db.insert(users).values(body);
        set.status = 201;
        return { message: "User created", insertId: result.insertId };
      } catch (err: any) {
        set.status = 400;
        return { error: err.message };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: "email" }),
      }),
    }
  )
  .put(
    "/:id",
    async ({ params: { id }, body, set }) => {
      const [result] = await db.update(users).set(body).where(eq(users.id, Number(id)));
      if (result.affectedRows === 0) {
        set.status = 404;
        return { message: "User not found" };
      }
      return { message: "User updated" };
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
      body: t.Object({
        name: t.Optional(t.String()),
        email: t.Optional(t.String({ format: "email" })),
      }),
    }
  )
  .delete(
    "/:id",
    async ({ params: { id }, set }) => {
      const [result] = await db.delete(users).where(eq(users.id, Number(id)));
      if (result.affectedRows === 0) {
        set.status = 404;
        return { message: "User not found" };
      }
      return { message: "User deleted" };
    },
    {
      params: t.Object({
        id: t.Numeric(),
      }),
    }
  );
