/**
 * Configuration for the CoPharma frontend
 */

// Use environment variable for API base, fallback to localhost for development
export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export default {
  API_BASE
};
