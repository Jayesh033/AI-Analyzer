# AI Analyser

Simple instructions to run the project locally.

## Prerequisites
- Node.js 16+ installed
- npm (comes with Node.js)

## Install
From repository root, install both backend and frontend dependencies:

```bash
cd backend
npm install

# in a separate terminal
cd ../frontend
npm install
```

## Backend
1. Create a `.env` file in `backend/` (example values):

```
PORT=5000
# other env vars used by the backend
```

2. Start the backend server:

```bash
cd backend
npm run start
# or
npm run dev
```

## Frontend
Start the Vite dev server:

```bash
cd frontend
npm run dev
```

Open the app in your browser at the address shown by Vite (usually `http://localhost:5173`).

## Notes
- `.env` files are excluded from git via `.gitignore`.
- Adjust ports in `.env` if there are conflicts.
