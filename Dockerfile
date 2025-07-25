# 1. Base image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all source code
COPY . .

# Build the Next.js app
ENV NEXT_DISABLE_ESLINT=true
RUN npm run build

# 2. Production image
FROM node:18-alpine AS production

WORKDIR /app

COPY package.json package-lock.json ./
# Install production dependencies and TypeScript (needed for next.config.ts)
RUN npm install --omit=dev && npm install typescript

COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/next.config.ts ./next.config.ts
COPY --from=base /app/src ./src
COPY --from=base /app/tsconfig.json ./tsconfig.json

EXPOSE 3000
CMD ["npm", "start"]