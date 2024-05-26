import { lazy } from "react";
import { IScreenRoute } from "../../@types";

const ErrorPage = lazy(() => import("./index"));

export const ErrorRoutes: IScreenRoute = {
  path: "*",
  element: ErrorPage,
  hasChild: false,
  isPrivate: false,
  allowRoles: [],
  children: [],
};
