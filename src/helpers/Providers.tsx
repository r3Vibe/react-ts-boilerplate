import { ReactNode, StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import ProjectSEO from "../components/Helmet/Project";
import AxiosInterceptorWrapper from "./AxiosInterceptorWrapper";
import { ToastContainer } from "react-toastify";

/**
 * @author Arnab Gupta
 * @description All provider in one place to make thing easy to understand.
 */
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <StrictMode>
      <BrowserRouter>
        <HelmetProvider>
          <ProjectSEO />
          <AxiosInterceptorWrapper>
            {children}
            <ToastContainer   />
          </AxiosInterceptorWrapper>
        </HelmetProvider>
      </BrowserRouter>
    </StrictMode>
  );
}
