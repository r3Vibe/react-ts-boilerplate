import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSiteStore } from "../../store/site.store";

/**
 * @author Arnab Gupta
 * @description Layout of the project that will wrape the whole project with a header and footer. Layout is not being used for 404 page.
 */
export default function Layout({ children }: { children: ReactNode }) {
  // get the 404 page status from the context
  const { is404 } = useSiteStore((state) => state);
  return (
    <main>
      {is404 ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </main>
  );
}
