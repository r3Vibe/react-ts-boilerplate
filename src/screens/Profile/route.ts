import { IScreenRoute } from "../../@types";
import { lazy } from "react";

export const ProfilePage = lazy(() => import("./index"));

export const profileRoutes: IScreenRoute = {
  path: "/profile",
  element: null,
  isPrivate: true,
  hasChild: true,
  allowRoles: ["admin"],
  children: [
    { path: "", element: ProfilePage },
  ],
};
