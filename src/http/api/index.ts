import http from "..";

export const checkAxios = async () => {
  // works fine
  http.get("https://jsonplaceholder.typicode.com/todos/1");
};
