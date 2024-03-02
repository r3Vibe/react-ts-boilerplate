import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import RouteHelper from "./RouteHelper";
import NotFound from "../pages/NotFound";

/**
 * @author Arnab Gupta
 * @description Define all the pages of the project here and assign a url to them. Also set up protected routes with role
 */
export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/protected" element={<RouteHelper loginState={true} role="admin" />}>
        <Route path="test" element={<>Test Page</>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
