# karizm-app

A spiritual gifts assessment application to help Christian believers identify their charismata through a comprehensive 180-question quiz.

## Live App

Go to [https://karizm.app](https://karizm.app) and test the app.

## Development

### Option 1: Docker (Recommended)

No Node.js installation required - just Docker!

```bash
# Start development with hot reload
yarn dev:docker

# Or use docker-compose directly
docker-compose up

# Stop server
docker-compose down
```

App runs at `http://localhost:5173` with hot reload enabled.

### Option 2: Local Development

**Requirements:**
- Node.js **24+** (enforced)
- Yarn package manager

```bash
# Install dependencies
yarn

# Start dev server
yarn dev
```

## Available Scripts

```bash
yarn dev              # Start development server
yarn dev:docker       # Start development with Docker
yarn build            # Build for production
yarn build:docker     # Build production Docker image
yarn preview          # Preview production build
yarn lint             # Lint code
```

## Environment Variables

Optional `.env` configuration:
- `VITE_API_BASE_URL` - API base URL (default: https://koszikla-api.fly.dev/api/karizmapp)

## Docker

**Development:**
```bash
yarn dev:docker
```

**Production build:**
```bash
yarn build:docker
docker run -p 8080:80 lelki-ajandekok:latest
```

App will be available at `http://localhost:8080`

## Tech Stack

- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type-safe JavaScript
- **Vite 5.4.16** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Router 6.30.3** - Client-side routing
- **Native Fetch API** - HTTP client (no external dependencies)

## Requirements

- **Node.js**: 24+ (enforced via `engines` field)
- **Package Manager**: Yarn only (enforced via `preinstall` script)
