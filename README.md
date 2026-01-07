# 🚀 Judix Assignment – Full Stack Task Management System

A production-ready **full-stack web application** featuring **JWT-based authentication**, a **protected dashboard**, and **CRUD operations** on tasks. The application is built with a scalable architecture and deployed to the cloud.

---

## 🌐 Live Demo

- **Frontend (Vercel):** [https://your-frontend-url.vercel.app](https://judix-assignement.vercel.app/)  
- **Backend (Render):** [https://your-backend-url.onrender.com  ](https://judix-assignement.onrender.com)



---

## 🧰 Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt

### Deployment
- Frontend: Vercel  
- Backend: Render  
- Database: MongoDB Atlas  

---

## ✨ Features

### 🔐 Authentication
- User registration
- User login
- JWT-based authentication
- Secure password hashing using bcrypt
- Logout functionality
- Protected routes (dashboard requires login)

### 📋 Dashboard (Task Management)
- Create new tasks
- View all tasks
- Update task status (pending/done)
- Delete tasks
- Search tasks
- User-specific data isolation

### 🛡️ Security
- Password hashing
- JWT verification middleware
- Protected API routes
- CORS properly configured
- Environment variables for secrets

---

## 🏗️ Project Structure

judix-assignment/

├── frontend/ (React + Vite)

└── backend/ (Node + Express)

---

### Backend Structure

backend/

├── src/

│ ├── models/

│ ├── controllers/

│ ├── routes/

│ ├── middleware/

│ └── config/

├── server.js

└── package.json


---

## 🔌 API Documentation

### 🔐 Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login user |

### 📋 Task Routes (Protected)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/tasks | Get all tasks |
| POST | /api/tasks | Create task |
| PUT | /api/tasks/:id | Update task |
| DELETE | /api/tasks/:id | Delete task |

### 🔑 Authorization Header


---

## 🧪 Postman Usage

1. Call `/api/auth/login` to get JWT token  
2. In Postman, go to **Headers** and add:

3. Use the task APIs normally.

(You may also export and attach the Postman collection if required.)

---

## 🛠️ Local Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/judix-assignment.git
cd judix-assignment

```
### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

### Create a .env file:
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```
### Run backend:
```bash
npm run dev
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```
### Create a .env file:
```bash
VITE_API_URL=http://localhost:5000/api
```
### Run frontend:
```bash
npm run dev
```
---
## 📈 Scalability & Production Architecture

### Backend Scalability

- Layered architecture (routes, controllers, models, middleware)
- Stateless JWT-based authentication
- Can be horizontally scaled behind a load balancer
- MongoDB indexes for performance optimization
- Can be extended with:
  - Redis caching
  - Queue systems (BullMQ / RabbitMQ)
  - API rate limiting
  - Microservices separation (Auth, Tasks, Users)

### Frontend Scalability

- Component-based architecture
- Centralized API service layer
- Can be extended with:
  - Global state management (Redux / Zustand)
  - Code splitting & lazy loading
  - Role-based routing
  - Migration to Next.js for SSR if needed

### DevOps & Infrastructure

- Environment-based configuration
- CI/CD pipelines (GitHub Actions)
- CDN (Vercel)
- Future Docker containerization support


--

## 👨‍💻 Author

**Om Gaikwad**  
B.Tech ECE, IIIT Pune  
Full Stack & ML Developer





