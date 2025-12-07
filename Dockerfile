# Build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage - ~150KB thttpd-based static file server
FROM lipanski/docker-static-website:latest
COPY --from=builder /app/dist .
