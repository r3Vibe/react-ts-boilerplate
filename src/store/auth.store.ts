import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { authInterface } from "../interfaces";

/**
 * @author Arnab Gupta
 * @description App wise state managemnt for Auth. This will store the users data, login info
 */
export const useAuthStore = create<authInterface>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      access_token: null,
      refresh_token: null,
      role: "admin",
      setLogin: (loginState) => set(() => ({ isLoggedIn: loginState })),
      setTokne: (token, tokentype) =>
        set(() =>
          tokentype === "access"
            ? { access_token: token }
            : { refresh_token: token }
        ),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
