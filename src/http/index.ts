import axios from "axios";

/**
 * @author Arnab Gupta
 * @description Axios interceptor setup
 */
export const instance = axios.create({
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
