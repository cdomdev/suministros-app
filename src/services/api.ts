import axios from "axios";
const HOST = import.meta.env.PUBLIC_HOST_API;
const TOKEN_APP = import.meta.env.PUBLIC_TOKEN_APP;

// axios.defaults.withCredentials = true;

export const api = axios.create({
  baseURL: HOST,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    if (TOKEN_APP) {
      config.headers["x-app-token"] = TOKEN_APP;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


