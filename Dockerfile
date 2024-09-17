# imagen oficial de Node.js
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código de la aplicación
COPY . .

# Expone el puerto que utilizará la API
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "src/app.js"]
