import { IScreenRoute } from "../../@types";
import { lazy } from "react";

export const LoginPage = lazy(() => import("./Login"));

export const authRoutes: IScreenRoute = {
  path: "/auth",
  element: null,
  isPrivate: false,
  hasChild: true,
  allowRoles: [],
  children: [{ path: "login", element: LoginPage }],
};
