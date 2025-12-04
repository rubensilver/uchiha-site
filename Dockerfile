# Etapa 1 — Builder
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

# COPIA O PRISMA ANTES DO GENERATE
COPY prisma ./prisma

COPY . .

RUN npx prisma generate

RUN npm run build

# Etapa 2 — Runner
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
