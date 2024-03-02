import http from "..";

export const checkAxios = async () => {
  // works fine
  http.get("https://jsonplaceholder.typicode.com/todos/1");
};

/**
 * @author Arnab Gupta
 * @param token
 * @description when access token is expired we need this endpoint to refresh both the tokens.
 * @returns newly created tokens from the server
 */
export const refreshTokens = async (token: string) => {
  const data = await http.post("/auth/refresh-tokens", { token });
  return data.data.tokens;
};
