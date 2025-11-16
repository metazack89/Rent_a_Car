<div align="center">
🚗 Rent A Car — Fullstack Application
Plataforma moderna para gestionar alquiler de vehículos

React • Node.js • MongoDB • JWT • Tailwind • Vercel

<br/> <img src="https://img.shields.io/badge/STATUS-EN%20DESARROLLO-blue?style=for-the-badge"/> <img src="https://img.shields.io/badge/STACK-MERN-purple?style=for-the-badge"/> <img src="https://img.shields.io/badge/PRs-WELCOME-brightgreen?style=for-the-badge"/> <img src="https://img.shields.io/badge/DEPLOY-Vercel-black?style=for-the-badge"/>

<br/><br/>

<img src="https://github.com/user-attachments/assets/rentacar.jpg" alt="banner" width="100%" /> </div>
🧭 Descripción del Proyecto

Rent A Car es una aplicación fullstack diseñada para administrar el alquiler de vehículos de manera sencilla y eficiente.
Cuenta con autenticación, gestión de usuarios, catálogo de vehículos, reservas, panel administrativo y despliegue en la nube.

Construida con un stack moderno:

⚛️ React + Vite

🖥️ TailwindCSS + Axios + Router

🚀 Node.js + Express + MongoDB

🔐 JWT + Bcrypt

☁️ Vercel (Frontend + API)

🔗 Demo

https://rent-car-orpin.vercel.app/

🌟 Características Principales
👤 Autenticación

Registro / Login con JSON Web Tokens

Persistencia segura de sesión

Restablecimiento de contraseña (si aplica)

🚘 Gestión de Vehículos

Crear, editar y eliminar autos (admin)

Búsqueda, filtrado y detalles del vehículo

Control de disponibilidad por fechas

📅 Reservas

Crear reservas

Ver historial personal

Panel de administración para gestionar reservas

🧱 Arquitectura Moderna

API escalable y modular

Manejo de errores unificado

Validaciones robustas

Código limpio con buenas prácticas

🚀 Tecnologías
🎨 Frontend

<div> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" width="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" width="40"/> </div>
⚙️ Backend
<div> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width="40"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="40"/> </div>

🏁 Instalación
▶️ Frontend
cd client
npm install
npm run dev

.env ejemplo:
VITE_API_URL=http://localhost:5000

🖥️ Backend
cd server
npm install
npm start

.env ejemplo:
PORT=5000
MONGO_URI=mongodb://localhost:27017/rentacar
JWT_SECRET=clave_super_segura

📡 Endpoints principales
Método Endpoint Descripción
POST /auth/register Registrar usuario
POST /auth/login Iniciar sesión
GET /cars Listar autos
POST /cars Crear auto (admin)
POST /bookings Crear reserva
GET /bookings/user Reservas del usuario
🤝 Contribuciones

¡Las contribuciones son bienvenidas!
Puedes abrir un Issue o un Pull Request para colaborar.

⭐ Apoya el Proyecto

Si este proyecto te ayuda o te inspira, considera dejar una estrella ⭐ en GitHub.
¡Tu apoyo mantiene vivo el desarrollo!

📬 Contacto

¿Quieres colaborar o tienes dudas?
Abre un Issue en el repositorio o escríbeme directamente.
