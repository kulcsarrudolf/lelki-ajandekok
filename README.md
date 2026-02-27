# Lelki Ajándékok

A spiritual gifts assessment application to help Christian believers identify their charismata through a comprehensive 180-question quiz.

## Live App

Go to [https://karizm.app](https://karizm.app) and test the app.

## Development

### Option 1: Docker (Recommended)

The easiest way to get started! No need to install Node.js locally - Docker handles everything.

**Prerequisites:**
- [Docker](https://www.docker.com/get-started) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) (usually comes with Docker Desktop)

**Start development server with hot reload:**

```bash
docker-compose up
```

The app will be available at `http://localhost:5173` with hot reload enabled. Any changes you make to the code will automatically refresh in the browser!

**Stop the development server:**

```bash
docker-compose down
```

**Rebuild after dependency changes:**

```bash
docker-compose up --build
```

> **Note:** The Docker setup uses **Node 24** and enforces this version for all developers, ensuring consistency across the team.

### Option 2: Local Development

If you prefer to run the app locally without Docker:

**Prerequisites:**
- **Node.js 24** (recommended) or 18+
- **Yarn** package manager

Install Yarn:

```bash
npm install -g yarn
```

> **Note:** This project is configured to only allow Yarn as the package manager. Attempting to use npm or pnpm will result in an error.

### Environment Configuration

Create a `.env` file in the root directory (optional):

```bash
cp .env.example .env
```

Available environment variables:
- `VITE_API_BASE_URL` - API base URL (default: https://koszikla-api.fly.dev/api/karizmapp)

### Install dependencies

```bash
yarn
```

### Run the app in dev mode

```bash
yarn dev
```

The app will be available at `http://localhost:5173`

### Build for production

```bash
yarn build
```

### Preview production build

```bash
yarn preview
```

### Lint code

```bash
yarn lint
```

## Tech Stack

- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type-safe JavaScript
- **Vite 5.4.16** - Build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **React Router 6.30.3** - Client-side routing
- **Native Fetch API** - HTTP client (no external dependencies)

## Package Manager

This project enforces Yarn usage through:
- `packageManager` field in package.json
- `preinstall` script that blocks other package managers
