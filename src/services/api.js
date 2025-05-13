import axios from "axios";

const api = axios.create({
  baseURL: 'https://biblioteca-virtual-2-backend.onrender.com'
});

export default api;