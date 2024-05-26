import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Store, User } from "../@types";
import { storage } from "./helper/storage";

// Create the zustand store
export const useAuthStore = create<Store>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      setLogin: (isLoggedIn: boolean) => set({ isLoggedIn }),
      setUser: (user: User) => set({ user }),
    }),
    {
      name: "authStore",
      storage: createJSONStorage(() => storage),
    }
  )
);
