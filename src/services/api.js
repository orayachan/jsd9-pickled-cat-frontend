import axios from 'axios';

// เปลี่ยนตรงนี้เป็น URL backend ของคุณบน Render
const baseURL = 'https://jsd9-pickled-cat-backend.onrender.com';

const api = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('authToken') ?? null}`,
  },
  withCredentials: true,
});

export default api;
