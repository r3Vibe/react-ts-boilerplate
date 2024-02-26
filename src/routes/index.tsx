import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import RouteHelper from "./RouteHelper";
import NotFound from "../pages/NotFound";

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
