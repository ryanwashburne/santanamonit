# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run check        # Lint and format with Biome
pnpm run check:write  # Lint and format with auto-fix
pnpm run typecheck    # TypeScript type checking

# Database
pnpm run db:generate  # Create new migration
pnpm run db:migrate   # Apply migrations
pnpm run db:push      # Push schema to database (no migration)
pnpm run db:studio    # Open Prisma Studio

# Setup
pnpm run setup        # Link Vercel project and pull env vars
pnpm run docker:start # Start local Postgres with Docker
```

**Always run `pnpm run check` and `pnpm run typecheck` after making changes.**

## Architecture

This is a Next.js 16 wedding website using the App Router with:
- **Chakra UI v3** for components (use MCP tools to learn component APIs)
- **tRPC** for type-safe API calls
- **Prisma** with PostgreSQL for database
- **Biome** for linting/formatting
- **Lefthook** for pre-commit hooks

### Key Paths

- `src/app/` - Next.js App Router pages
- `src/server/api/routers/` - tRPC routers (add new routers here)
- `src/server/api/root.ts` - Main tRPC router (register new routers here)
- `src/server/api/trpc.ts` - tRPC context and procedures
- `src/server/db.ts` - Prisma client
- `src/components/ui/` - Chakra UI wrapper components
- `src/app/theme.ts` - Chakra theme configuration
- `prisma/schema/schema.prisma` - Database schema
- `generated/prisma/` - Generated Prisma client (excluded from git)

### tRPC Usage

**Client components:** Import `api` from `@/trpc/react`
```tsx
const { data } = api.post.getLatest.useQuery();
```

**Server components:** Import `api` from `@/trpc/server`
```tsx
const data = await api.post.getLatest();
```

### tRPC Procedures

- `publicProcedure` - Unauthenticated, available to all
- `adminProcedure` - Requires admin token in cookies (uses `admin-token` cookie)

### Environment Variables

Validated via `@t3-oss/env-nextjs` in `src/env.js`. Required:
- `DATABASE_URL` - PostgreSQL connection string
- `RESEND_API_KEY` - Resend email API key
- `SECRET_ADMIN_KEY` - Admin authentication key
- `SEND_RSVP_EMAIL` - Boolean to enable/disable RSVP emails

### Import Alias

Use `@/*` for imports from `src/` directory.
