# Lelki Ajándékok

A spiritual gifts assessment application to help Christian believers identify their charismata through a comprehensive 180-question quiz.

## Live App

Go to [https://karizm.app](https://karizm.app) and test the app.

## Development

### Prerequisites

This project uses **Yarn** as the package manager. Please ensure you have Yarn installed:

```bash
npm install -g yarn
```

> **Note:** This project is configured to only allow Yarn as the package manager. Attempting to use npm or pnpm will result in an error.

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
