import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Oops! Page not found</p>
      <Link to={"/"}>Go back to homepage</Link>
    </div>
  );
}
