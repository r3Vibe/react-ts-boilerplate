import { create } from "zustand";
import { siteInterface } from "../interfaces";



/**
 * @author Arnab Gupta
 * @description App wise state managemnt for Site. This will store the loding, 404 states.
 */
export const useSiteStore = create<siteInterface>()((set) => ({
  isLoading: false,
  is404: false,
  set404: (state) => set(() => ({ is404: state })),
  setLoding: (state) => set(() => ({ isLoading: state })),
}));
