# Usa una imagen de Node.js como base
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instala las dependencias globales de Angular CLI
RUN npm install -g @angular/cli

# Copia el package.json y package-lock.json para instalar las dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Exponer el puerto 3000
EXPOSE 4200

# Comando para ejecutar la aplicación en modo desarrollo
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200"]