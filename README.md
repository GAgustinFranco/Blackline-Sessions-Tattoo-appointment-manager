## ✒️ Blackline Sessions

Aplicación web fullstack para gestión de turnos y experiencia artística en el estudio de tatuajes Blackline Sessions.
Combina una interfaz moderna en React con un backend robusto en Express y PostgreSQL, permitiendo a los usuarios registrarse, iniciar sesión, reservar, consultar y cancelar turnos.

## ✨ Características
```bash
📅 Gestión de turnos: Crear, listar y cancelar citas personalizadas.

👤 Autenticación de usuarios: Registro e inicio de sesión con credenciales únicas.

🔒 Validaciones robustas de campos (edad mínima, formato de email, contraseñas seguras, etc.).

🎨 Interfaz moderna y responsiva desarrollada en React.

🎶 Experiencia inmersiva: mezcla de arte, blackwork y música local en vivo.

🧩 Conexión con base de datos PostgreSQL mediante TypeORM.
```
## 🛠️ Tecnologías Utilizadas
### 🔹 Backend
```bash
Node.js / Express

TypeScript

TypeORM

PostgreSQL

dotenv

morgan, cors
```
### 🔹 Frontend
```bash
React 19 (con Vite)

React Router DOM v7

Axios

Context API

CSS Modules
```
## 🏗️ Arquitectura
```bash
El proyecto sigue una arquitectura MVC (Model-View-Controller):

📂 src
 ┣ 📂 backend
 ┃ ┣ 📂 config
 ┃ ┣ 📂 controllers
 ┃ ┣ 📂 entities
 ┃ ┣ 📂 routes
 ┃ ┣ 📂 services
 ┃ ┗ index.ts
 ┗ 📂 frontend
   ┣ 📂 components
   ┣ 📂 views
   ┣ 📂 context
   ┣ 📂 helpers
   ┗ main.jsx
```
## ⚙️ Instalación y Configuración
```bash
1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/blackline-sessions.git
cd blackline-sessions

2️⃣ Instalar dependencias
Backend
cd back
npm install

Frontend
cd front
npm install

3️⃣ Configurar variables de entorno

Crea un archivo .env en el directorio back con el siguiente contenido:

PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_password
DB_NAME=blackline_db

🚀 Ejecución del Proyecto
Backend
npm run dev


Servidor disponible en: http://localhost:8080

Frontend
npm run dev


Aplicación disponible en: http://localhost:5173
```
## 🌐 Endpoints Principales
```bash
👥 Usuarios
Método	Ruta	Descripción
GET	/users/user	Lista todos los usuarios
GET	/users/user/:id	Obtiene un usuario por ID
POST	/users/user/register	Registra un nuevo usuario
POST	/users/user/login	Inicia sesión de usuario
📅 Turnos
Método	Ruta	Descripción
GET	/appointments/appointment	Lista todos los turnos
GET	/appointments/appointment/:id	Obtiene un turno por ID
POST	/appointments/appointment/schedule	Crea un nuevo turno
PUT	/appointments/appointment/cancel/:id	Cancela un turno
GET	/appointments/appointment/user/:userId	Lista los turnos de un usuario
```
## ✅ Validaciones del Sistema
```bash
Los turnos solo pueden agendarse los días jueves, viernes o sábado entre las 19:00 y 23:00 hs.

El usuario debe tener mínimo 18 años.

Las contraseñas deben incluir:

Una mayúscula

Una minúscula

Un número

Un carácter especial

Los nombres de usuario deben contener al menos un número y tener entre 6 y 20 caracteres.
```
## 🧱 Estructura del Proyecto
### Backend
```bash
/controllers: Controladores de usuarios y turnos.

/services: Lógica de negocio (validaciones, consultas DB).

/entities: Modelos de base de datos (User, Appointment, Credential).

/routes: Definición de rutas y endpoints.
```
### Frontend
```bash
/views: Páginas principales (Home, Login, Register, About, etc.).

/components: Elementos reutilizables (NavBar, AppointmentCard, etc.).

/context: Manejo global de usuario (Context API).

/helpers: Validaciones de formularios y funciones auxiliares.
```
## 👩‍🎨 Autores

Equipo Blackline Sessions
Una crew de artistas del blackwork que mezcla tatuajes, música y diseño digital.
Inspirado en la cultura under y la estética post-industrial.

## 🪶 Licencia

Este proyecto está bajo la licencia ISC.

Agustín Franco Galvez
📧 agustingalvez0901@gmail.com

📍 Santa Fe (Capital), Argentina