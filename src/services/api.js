// src/services/api.js
// This file now only talks to YOUR backend server. The TMDB API key is safe on the backend.

const BACKEND_BASE_URL = 'http://localhost:3001/api';

// Function to fetch popular movies from your backend
export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BACKEND_BASE_URL}/movies/popular`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// Function to search movies through your backend
export const searchMovies = async (query) => {
  if (!query) return [];
  try {
    const response = await fetch(
      `${BACKEND_BASE_URL}/movies/search?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};