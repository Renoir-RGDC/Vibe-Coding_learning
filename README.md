# VibeCoding Learning: Bun + ElysiaJS + Drizzle + MySQL

Backend REST API project built using **Bun**, **ElysiaJS**, **Drizzle ORM**, and **MySQL**.

## Prerequisites

- [Bun](https://bun.sh) (v1.3.14+)
- MySQL database instance

## Installation

```bash
bun install
```

## Environment Variables

Copy `.env.example` to `.env` and adjust your MySQL connection details:

```bash
cp .env.example .env
```

```env
PORT=3000
DATABASE_URL=mysql://root:password@localhost:3306/vibecoding
```

## Database Migrations

Generate migration files from schema:
```bash
bun run db:generate
```

Run migrations against your database:
```bash
bun run db:migrate
```

## Running the Application

Development mode (with hot reloading):
```bash
bun run dev
```

Production mode:
```bash
bun run start
```

## API Endpoints

- `GET /` — Health check & status
- `GET /users` — Get all users
- `GET /users/:id` — Get user by ID
- `POST /users` — Create a new user
- `PUT /users/:id` — Update user by ID
- `DELETE /users/:id` — Delete user by ID
