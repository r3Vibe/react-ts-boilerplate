import axios from "axios";

const instance = axios.create({
  baseURL:
    import.meta.env.VITE_ENV === "prod"
      ? "https://api-mojiai.weavers-web.com/v1"
      : "http://127.0.0.1:3022/v1",
  headers: { "Content-Type": "application/json" },
});

export default {
  GET: instance.get,
  POST: instance.post,
  PUT: instance.put,
  DELETE: instance.delete,
  PATCH: instance.patch,
};
