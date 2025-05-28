# Transport Scheduler (Self-Hosted)

This is a self-hostable version of the **Transport Scheduler** web app, built with Next.js 15, Tailwind CSS, Docker, and PostgreSQL. It's structured to support a future SaaS model but currently focuses on running locally via Docker Compose.

---

## ✅ Project Overview

- 📦 App lives in: `apps/web/`
- 📄 Single root-level `package.json`
- 🐳 Dockerized with support for PostgreSQL + Redis
- ⚙️ Prisma ready with `.env` support
- 🔁 Supports hot reloading for development

---

## 🚀 Getting Started

### 1. Clone and install dependencies
```bash
git clone https://github.com/your-org/transport-scheduler.git
cd transport-scheduler
npm install
```

### 2. Start the services (PostgreSQL, Redis, Web)
```bash
docker-compose up -d
```

### 3. Open the app
Visit [http://localhost:3000](http://localhost:3000)

---

## 🔁 Hot Reloading During Development

To enable hot reloading:
1. Mount your local `apps/web` directory into the container in `docker-compose.yml`:
```yaml
volumes:
  - ./apps/web:/app
```
2. Replace the Docker `CMD` with the dev command in the Dockerfile:
```Dockerfile
CMD ["npm", "run", "dev", "--prefix", "apps/web"]
```
This will run Next.js in development mode inside the container.

---

## 🔐 Environment Variables (`.env`)
Create a `.env` file at the root of your project:
```env
DATABASE_URL=postgresql://scheduler:schedulerpass@postgres:5432/schedulerdb
REDIS_URL=redis://redis:6379
JWT_SECRET=your-random-jwt-secret
```
This is used by Prisma, your app, and other backend services.

---

## 🧬 Prisma Setup

Prisma is installed at the root and ready to go:

- Schema file: `prisma/schema.prisma`
- Example model:
```prisma
model User {
  id    String @id @default(uuid())
  name  String
  email String @unique
}
```

### Prisma commands:
```bash
npx prisma generate
npx prisma migrate dev --name init
npx prisma studio
```

---

## 🧹 Reset / Cleanup
To tear everything down:
```bash
docker-compose down -v
docker system prune -af
```

---

## 📌 Notes
- Future SaaS support will include Stripe integration, tenant isolation, and cloud-hosted tiers.
- Right now the focus is stability and self-hosting with a solid dev workflow.
