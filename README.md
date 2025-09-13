## Movie Finder
A responsive frontend web application for discovering and searching movies. Built with React and Chakra UI, this application interfaces with a custom backend API to provide a secure and efficient user experience.

## Features
Movie Discovery: Browse currently popular movies fetched from The Movie Database (TMDB) API.

Real-time Search: Dynamic search functionality with optimized API calls.

Responsive Design: Fully responsive layout for desktop, tablet, and mobile devices.

Modern UI: Clean and accessible interface built with Chakra UI.

## Tech Stack
Framework: React 18

Build Tool: Vite

Styling: Chakra UI

Language: JavaScript

HTTP Client: Native Fetch API

Package Manager: npm

## Installation and Setup
Clone the repository:
bash
git clone https://github.com/BrandonSolinap/movie-finder-frontend.git
cd movie-finder-frontend
Install dependencies:
bash
npm install
Start the development server:
bash
npm run dev
The application will open at http://localhost:5173.

## API Integration
This frontend is designed to work with a dedicated backend API server that handles all TMDB API requests securely. The backend repository can be found here: movie-finder-backend.

## Project Structure
text
movie-finder-frontend/
├── src/
│   ├── services/       # API service layer
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── package.json
└── README.md

## License
This project is licensed under the MIT License.


























# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
