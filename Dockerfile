# Etapa 1 — Builder
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# GERA O PRISMA CLIENT AQUI! 🔥
RUN npx prisma generate

# Compila o Next.js
RUN npm run build

# Etapa 2 — Runner
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
