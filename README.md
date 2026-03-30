# nodejs-catalog-demo

Minimal Node.js Express application for testing GitHub Actions CI + Backstage Catalog integration.

## Prerequisites

- Node.js 20+

## Run

```bash
npm install
npm start
```

The app starts on http://localhost:3000. Try:

```bash
curl http://localhost:3000/health
```

## Test

```bash
npm test
```

## CI / Backstage

The GitHub Actions workflow (`.github/workflows/ci.yml`):
1. **build-and-test** – installs deps and runs tests on every push.
2. **catalog** – on `main` only, calls the Backstage Scaffolder to create a catalog component PR.

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `BACKSTAGE_URL` | Backstage instance URL |
| `BACKSTAGE_TOKEN` | Backstage API token |
| `OWNER_GROUP_REF` | Owner group ref, e.g. `group:default/team-cib` |
