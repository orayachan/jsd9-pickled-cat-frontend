import axios from 'axios';

const baseURL =
  import.meta.env.DEV ?
    import.meta.env.VITE_API_URL
  : import.meta.env.VITE_PUBLIC_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    Authorization: localStorage.getItem('authToken') ?? null,
  },
  withCredentials: true,
});

export default api;
