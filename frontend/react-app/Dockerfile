# Usamos Node 20
FROM node:20-slim

WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del frontend
COPY . .

# Exponemos el puerto del frontend
EXPOSE 5173

# Comando por defecto
CMD ["npm", "run", "dev", "--", "--host"]
