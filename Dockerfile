FROM node:21-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Production image, copy built assets from builder
FROM node:21-alpine AS runner
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --production --frozen-lockfile

# Copy built app and static files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]