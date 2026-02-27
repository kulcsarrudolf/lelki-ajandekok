# Docker Development Guide

## Quick Start

1. **Start the development server:**
   ```bash
   docker-compose up
   ```

2. **Open your browser:**
   Visit `http://localhost:5173`

3. **Start coding:**
   Edit any file in the `src/` directory and watch it automatically reload in the browser!

## How It Works

### Hot Reload
The Docker setup mounts your local source code into the container, so any changes you make are immediately reflected:

- ✅ Changes to `src/` files trigger automatic reload
- ✅ Changes to config files (vite, tailwind, postcss) trigger reload
- ✅ Changes to `index.html` trigger reload
- ✅ No need to rebuild the Docker image for code changes

### Node Version Enforcement
- The Docker image uses **Node.js 24** (Alpine Linux)
- All developers on the team will use the exact same Node version
- Eliminates "works on my machine" issues

## Common Commands

### Start Development Server
```bash
docker-compose up
```

Add `-d` flag to run in background (detached mode):
```bash
docker-compose up -d
```

### Stop Development Server
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f app
```

### Rebuild After Dependency Changes
If you modify `package.json` or `yarn.lock`:
```bash
docker-compose up --build
```

Or rebuild without starting:
```bash
docker-compose build
```

### Execute Commands in Container
Run yarn commands inside the container:
```bash
docker-compose exec app yarn lint
docker-compose exec app yarn build
```

### Clean Up Everything
Remove containers, networks, and volumes:
```bash
docker-compose down -v
```

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, you can change it in `docker-compose.yml`:
```yaml
ports:
  - "3000:5173"  # Map host port 3000 to container port 5173
```

### Hot Reload Not Working
1. Make sure `CHOKIDAR_USEPOLLING=true` is set in `docker-compose.yml`
2. Restart the container: `docker-compose restart`

### Permission Issues (Linux)
If you encounter permission issues with files created by Docker:
```bash
sudo chown -R $USER:$USER .
```

### Rebuild from Scratch
```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

## Technical Details

### File Watching
- Uses polling mode (`usePolling: true`) for reliable file watching across different operating systems
- Environment variable `CHOKIDAR_USEPOLLING=true` ensures file changes are detected

### Volume Mounts
The following directories and files are mounted for hot reload:
- `./src` - Application source code
- `./public` - Static assets
- `./index.html` - Entry HTML file
- Config files (vite, tailwind, postcss, tsconfig)

The `node_modules` directory is kept in the container (not mounted) for better performance.

### Network
- Container port 5173 is mapped to host port 5173
- Access via `http://localhost:5173`
- The Vite dev server is configured to listen on all addresses (`host: true`)

## Production Build

For production builds, you would typically create a separate `Dockerfile` (not `Dockerfile.dev`):

```dockerfile
FROM node:24-alpine AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN corepack enable && yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

This creates an optimized production image with just the built files served by nginx.
