# Todo Full Stack App

A full stack Todo application.

<img width="1347" height="788" alt="Screenshot 2025-07-25 at 23 27 43" src="https://github.com/user-attachments/assets/6048d5da-b59a-41d4-abde-8168aba229bc" />



---

## Tech Stack

- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TailwindCSS](https://tailwindcss.com/)
- **Backend:** [Node.js](https://nodejs.org/) + [Express.js](https://expressjs.com/)
- **Database:** [MySQL](https://www.mysql.com/)
- **Containerization:** [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

---

## Requirements

- **Node.js:** v18+ recommended
- **Docker & Docker Compose:** For easy setup 
- **MySQL:** Local or Docker

---

## Getting Started

### 1️⃣ Without Docker

#### Backend Setup

```bash
cd backend
npm install
npm run server
```
- The backend runs at [http://localhost:5009](http://localhost:5009).
- Ensure you have a MySQL server running with a `todo` database (or use Docker).

#### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```
- The frontend runs at [http://localhost:5173](http://localhost:5173).

---

### 2️⃣ With Docker (Recommended)

#### Step 1: Build and Start All Services

```bash
docker-compose up --build
```

#### Step 2: Access the App

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5009/api/tasks](http://localhost:5009/api/tasks)
- **MySQL:** Exposed at port `3306` (or `3307` depending on your setup)

#### Step 3: Environment Variables

Configure your database credentials in `backend/.env`:
```env
DB_HOST=mysql
DB_USER=user
DB_PASS=yourpassword
DB_NAME=todo
```

**Default Docker credentials:**
- DB User: `user`
- Password: `password` (or as defined in `.env`)
- DB Name: `todo`

---

## Clean Up Docker

Stop and remove containers, networks, and volumes:
```bash
docker-compose down -v --remove-orphans
```

---

## Features

- **Add Tasks:** Input title & description for each task
- **View Tasks:** See all tasks, with status indicators
- **Mark as Done:** Complete tasks with one click
- **Delete Tasks:** Remove tasks instantly
- **Responsive UI:** Clean and modern design with TailwindCSS
- **API Integration:** Real-time updates via REST API
- **Dockerized Setup:** Easy deployment with Docker Compose

---

## How It Works

- **Frontend:** React app communicates with backend via RESTful API.
- **Backend:** Express.js server handles requests and connects to MySQL database.
- **Database:** Stores tasks with title, description, and completion status.
- **Docker:** Simplifies setup—no manual database installation required.
