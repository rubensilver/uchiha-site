# Use a imagem oficial Node.js
FROM node:20-bullseye AS runner

# Defina o diretório de trabalho
WORKDIR /app

# Copiar package.json
COPY package.json ./

# Instalar dependências (npm ci não funciona sem package-lock)
RUN npm install

# Copiar todos os arquivos do projeto
COPY . .

# Build do projeto Next.js
RUN npm run build

# Expor porta
EXPOSE 3000

# Comando final
CMD ["npm", "start"]
