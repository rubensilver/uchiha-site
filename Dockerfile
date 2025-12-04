FROM node:20-bullseye AS builder
WORKDIR /app

# copy package files first (cache)
COPY package.json ./
RUN npm ci

# copy rest
COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM node:20-bullseye AS runner
WORKDIR /app
COPY --from=builder /app/ ./
ENV NODE_ENV=production
CMD ["npm", "run", "start"]
