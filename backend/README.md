# PocketBase Backend

## Local development

1. Copy the env file and edit allowed origins:

```
cp .env.example .env
```

2. Download PocketBase and run it locally:

```
./pocketbase serve --http=0.0.0.0:8080 --dir=./pb_data --origins="http://localhost:5173"
```

Create the first admin user in the browser when prompted.

## Fly.io

The Dockerfile downloads PocketBase during build. Set the `PB_ORIGINS` value in Fly secrets or in the Fly config.
