import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export default function RouteProtection({ roles }: { roles: string[] }) {
  const { isLoggedIn, user, setLogin, setUser } = useAuthStore(
    (state) => state
  );

  if (!isLoggedIn) return <Navigate to="/auth/login" />;

  if (user?.role === "user") {
    setLogin(false);
    setUser(null);
    return <Navigate to="/auth/login" />;
  }

  if (!roles.includes(user?.role ?? "")) return <Navigate to="/" />;

  return <Outlet />;
}
