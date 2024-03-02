import { Link } from "react-router-dom";
import { useSiteStore } from "../store/site.store";
import { useEffect } from "react";

/**
 * @author Arnab Gupta
 * @description 404 not found page
 */
export default function NotFound() {
  // get the 404 page state
  const { set404 } = useSiteStore((state) => state);

  useEffect(() => {
    // set 404 page state to true during mount
    set404(true);
    return () => {
      // set 404 page state to false during unmount
      set404(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "250px",
        }}
      >
        404
      </h1>
      <h1>Oops! Page not found</h1>
      <br />
      <h2>
        <Link to={"/"} style={{ textDecoration: "none", color: "#D6E940" }}>
          Go To Homepage
        </Link>
      </h2>
    </div>
  );
}
