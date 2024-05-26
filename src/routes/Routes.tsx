import { Route } from "react-router-dom";

export default function Routes({ Screens }: { Screens: any }) {
  return (
    <>
      {Screens.map((Screen: any) => {
        if (Screen.hasChild) {
          return (
            <Route key={Screen.path} path={Screen.path}>
              {Screen.children.map((Child: any) => {
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
    </>
  );
}
