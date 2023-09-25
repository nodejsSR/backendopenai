# Establecer la imagen base de Node.js
FROM node:18.17-alpine3.17

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo de configuración de dependencias
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código fuente de la aplicación
COPY . .

# Compilar TypeScript a JavaScript (ajusta el comando según tu proyecto)
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación (ajusta el puerto según tu aplicación)
EXPOSE 4000

# Comando para iniciar la aplicación (ajusta el comando según tu proyecto)
CMD ["node", "dist/server.js"]
