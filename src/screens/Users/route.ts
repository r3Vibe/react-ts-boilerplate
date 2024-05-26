import { IScreenRoute } from "../../@types";
import { lazy } from "react";

export const UserListPage = lazy(() => import("./index"));
export const UserAddPage = lazy(() => import("./UserAdd"));

export const userRoutes: IScreenRoute = {
  path: "/users",
  element: null,
  isPrivate: true,
  hasChild: true,
  allowRoles: ["admin"],
  children: [
    { path: "", element: UserListPage },
    { path: "add-user", element: UserAddPage },
  ],
};
