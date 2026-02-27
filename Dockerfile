# Production Dockerfile - Multi-stage build for optimized image
FROM node:24-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock .yarnrc.yml ./

# Install Yarn 1.x globally (matching packageManager in package.json)
RUN corepack enable && corepack prepare yarn@1.22.22 --activate

# Install dependencies
RUN yarn install --frozen-lockfile --production=false

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Production stage - serve with nginx
FROM nginx:alpine

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration (optional - create if you need custom config)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
