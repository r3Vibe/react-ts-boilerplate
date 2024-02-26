import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface authInterface {
  isLoggedIn: boolean;
  role: string;
  setLogin: (loginState: boolean) => void;
}

export const useAuthStore = create<authInterface>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      role: "admin",
      setLogin: (loginState) => set(() => ({ isLoggedIn: loginState })),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
