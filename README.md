# 🏪 API de Gestión de Tienda

## 📝 Descripción
Esta API permite gestionar una tienda en línea, incluyendo productos y categorías. Está construida con Node.js y Express, utilizando Sequelize como ORM y PostgreSQL como base de datos. Se ha implementado y desplegado en Render, con contenedores Docker para facilitar su despliegue.

## 🚀 Tecnologías Utilizadas
- 🟢 **Node.js** y **Express** para la estructura del backend.
- 🗄️ **PostgreSQL** como base de datos.
- 📦 **Sequelize** como ORM para la gestión de la base de datos.
- ☁️ **Render** para el despliegue en la nube.
- 🐳 **Docker** para la contenerización y fácil despliegue.

## ⚙️ Instalación y Configuración
### 📌 Prerrequisitos
Antes de iniciar, asegúrate de tener instalados:
- 🔗 [Node.js](https://nodejs.org/)
- 🐳 [Docker](https://www.docker.com/)
- 🗄️ PostgreSQL localmente o una instancia en la nube

### 🛠️ Instalación
1. 📥 Clona este repositorio:
   ```sh
   git clone https://github.com/tu_usuario/tu_repositorio.git
   cd tu_repositorio
   ```
2. 📦 Instala las dependencias:
   ```sh
   npm install
   ```
3. 📝 Configura las variables de entorno en un archivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=tu_usuario
   DB_PASSWORD=tu_contraseña
   DB_NAME=nombre_base_de_datos
   DB_PORT=5432
   PORT=3000
   ```
4. 📂 Ejecuta las migraciones de la base de datos:
   ```sh
   npx sequelize db:migrate
   ```

## 🚀 Uso
### ▶️ Iniciar la API
Para iniciar el servidor en desarrollo:
```sh
npm run dev
```
Para iniciar en producción:
```sh
npm start
```

### 📌 Endpoints Principales
| 🔹 Método | 🔹 Endpoint    | 🔹 Descripción               |
|----------|--------------|----------------------------|
| 📥 GET    | /productos   | Obtener todos los productos |
| ➕ POST   | /productos   | Registrar un producto       |
| 📥 GET    | /categorias  | Obtener todas las categorías |
| ➕ POST   | /categorias  | Registrar una categoría     |

## 🐳 Despliegue con Docker
1. 🔨 Construye la imagen Docker:
   ```sh
   docker build -t api-tienda .
   ```
2. 🚀 Ejecuta el contenedor:
   ```sh
   docker run -p 3000:3000 --env-file .env api-tienda
   ```
## 📜 Licencia
Este proyecto está bajo la licencia MIT.






