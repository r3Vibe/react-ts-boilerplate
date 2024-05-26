import { IScreenRoute } from "../@types";
import { ErrorRoutes } from "../screens/Error/route";
import { dashboardRoutes } from "../screens/Dashboard/route";
import { userRoutes } from "../screens/Users/route";
import { authRoutes } from "../screens/Auth/route";
import { profileRoutes } from "../screens/Profile/route";

export const Screens: IScreenRoute[] = [
  dashboardRoutes,
  userRoutes,
  ErrorRoutes,
  authRoutes,
  profileRoutes
];
