# Task Management System - Kemenaker

Platform manajemen task untuk kolaborasi mentor dan mentee.

## Tech Stack

- React 19.2.0
- Vite 7.2.4
- TailwindCSS
- Axios
- React Router DOM

## Setup

```bash
npm install
npm run dev
```

## Features

### Authentication

- Login/Signup dalam 1 halaman dengan toggle
- Role-based access (Mentor/Mentee)
- JWT authentication
- Protected routes

### Mentor

- CRUD task
- Manage teams
- Approve task completion

### Mentee

- View & update task status
- Kanban board (Coming Soon)

## API Endpoints

Base URL: `http://localhost:8000/api`

- POST `/auth/signup` - Register
- POST `/auth/login` - Login

## Project Structure

```
src/
├── components/     # Reusable components
├── contexts/       # React Context
├── pages/          # Page components
├── services/       # API services
└── App.jsx         # Main app
```
