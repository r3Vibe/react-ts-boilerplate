import { IScreenRoute } from "../../@types";
import { lazy } from "react";

export const DashboardPage = lazy(() => import("./index"));

export const dashboardRoutes: IScreenRoute = {
  path: "/",
  element: null,
  isPrivate: true,
  hasChild: true,
  allowRoles: ["admin"],
  children: [{ path: "", element: DashboardPage }],
};
