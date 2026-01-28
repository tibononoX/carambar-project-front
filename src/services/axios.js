import axios from "axios";
const apiUrls = import.meta.env.VITE_API_URL?.split(",") || [];
const baseURL = apiUrls[0] || "http://localhost:8000/api/v1";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
