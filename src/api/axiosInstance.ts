import axios from "axios";

export const API = axios.create({
  baseURL: `${import.meta.env.VITE_API}/api/v1`,
});

export default API;