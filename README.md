# Soulmaking Companion

Mobile-first web app with a Vite + React frontend and a PocketBase backend.

## Requirements

- Node.js 20.19+ (for Vite)
- Fly.io account and `flyctl` installed

## Frontend

```bash
cd frontend
npm install
npm run dev
```

## Backend (PocketBase)

```bash
cd backend
cp .env.example .env
./pocketbase serve --http=0.0.0.0:8080 --dir=./pb_data --origins="http://localhost:5173"
```

Create the admin user at first launch.

## GitHub Actions

- Frontend CI runs on every push and pull request.
- Backend deploy to Fly.io runs on pushes to `main`.

Set the GitHub secret:

- `FLY_API_TOKEN`

Update [backend/fly.toml](backend/fly.toml) with your Fly app name and region.

## Fly.io setup (once)

```bash
cd backend
flyctl launch --no-deploy
flyctl volumes create pb_data --size 1 --region iad
```

Set runtime secrets for production origins:

```bash
flyctl secrets set PB_ORIGINS="https://your-frontend-domain"
```

## Security defaults

- No secrets committed to the repo.
- PocketBase restricted by `PB_ORIGINS`.
- Fly.io forces HTTPS by default.
