import { Route } from "react-router-dom";
import RouteWrapper from "../components/layout/RouteWrapper";
import { Screens } from "./screens";
import RouteProtection from "./RouteProtection";

export default function index() {
  return (
    <>
      <RouteWrapper>
        {Screens.map((Screen) => {
          if (Screen.hasChild) {
            return (
              <Route
                key={Screen.path}
                path={Screen.path}
                element={
                  Screen.isPrivate ? (
                    <RouteProtection roles={Screen.allowRoles} />
                  ) : null
                }
              >
                {Screen?.children?.map((Child) => {
                  return (
                    <Route
                      key={Child.path}
                      path={Child.path}
                      element={Child.element ? <Child.element /> : null}
                    />
                  );
                })}
              </Route>
            );
          }
          return (
            <Route
              key={Screen.path}
              path={Screen.path}
              element={Screen.element ? <Screen.element /> : null}
            />
          );
        })}
      </RouteWrapper>
    </>
  );
}
