import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_MODE === "dev"
      ? import.meta.env.VITE_DEV_URL
      : import.meta.env.VITE_PROD_URL,
  timeout: 2000,
});

export default {
  get: instance.get,
  post: instance.post,
  patch: instance.patch,
  put: instance.put,
  delete: instance.delete,
};
