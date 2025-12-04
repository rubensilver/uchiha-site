# Builder based on Debian (glibc) to avoid Prisma/native engine problems
FROM node:20-bullseye AS builder

WORKDIR /app

COPY package.json* ./
RUN npm install --production=false

COPY . .

# no prisma generate (we removed prisma). Build the site
RUN npm run build

FROM node:20-bullseye AS runner
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3000
CMD ["npm", "start"]
