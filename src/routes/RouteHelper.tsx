import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

export default function RouteHelper({
  role,
  loginState,
  navigateLink = "/",
}: {
  role?: string;
  loginState?: boolean;
  navigateLink?: string;
}) {
  const { isLoggedIn: currentLoggedInState, role: currentRole } = useAuthStore(
    (state) => state
  );

  return (
    <>
      {(!loginState || currentLoggedInState === loginState) &&
      (!role || role === currentRole) ? (
        <Outlet />
      ) : (
        <Navigate to={navigateLink} />
      )}
    </>
  );
}
