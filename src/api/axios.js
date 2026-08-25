import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV
    ? "/api"
    : `${import.meta.env.VITE_API_URL}/api`,
  timeout: 10000,
});

export default api;