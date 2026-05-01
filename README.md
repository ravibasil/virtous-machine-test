# Fullstack CRUD Application

A simple full-stack CRUD (Create, Read, Update, Delete) application built with React and Express. 

This project is separated into a `frontend` and a `backend`.

## Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

## Getting Started

### 1. Backend Setup
The backend runs an Express server on port `5000` with an in-memory database.

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   node server.js
   ```
   *(To run tests: `npm test`)*

### 2. Frontend Setup
The frontend is a React application that runs on port `3000`.

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
   *(To run tests: `npm test`)*

## Features
- Create new items with a Title and Description
- Read/View a list of items
- Update existing items
- Delete an item
- Built-in API validations and error handling
- Basic minimal UI structure
- Jest tests for both API endpoints and the React UI
