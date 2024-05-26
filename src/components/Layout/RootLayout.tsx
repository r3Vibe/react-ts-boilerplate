import { useTheme } from "next-themes";
import { IChildren } from "../../@types";
import { useAuthStore } from "../../store/auth.store";
import MainLayoutWrapper from "../ui/MainLayoutWrapper";
import MainSectionWrapper from "../ui/MainSectionWrapper";
import Footer from "./Footer";
import NavbarHeader from "./Navbar";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }: IChildren) {
  const { isLoggedIn } = useAuthStore((state) => state);
  const theme = useTheme();
  return (
    <MainLayoutWrapper>
      {isLoggedIn ? <NavbarHeader /> : null}
      <MainSectionWrapper>
        {isLoggedIn ? <Sidebar /> : null}
        <div
          className={
            isLoggedIn
              ? "main"
              : "w-full h-[90vh] flex items-center justify-center"
          }
        >
          {children}
        </div>
      </MainSectionWrapper>
      {isLoggedIn ? <Footer /> : null}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme.theme}
      />
    </MainLayoutWrapper>
  );
}
