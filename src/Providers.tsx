import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { IChildren } from "./@types";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

export default function Providers({ children }: IChildren) {
  return (
    <HelmetProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <BrowserRouter>{children}</BrowserRouter>
        </NextThemesProvider>
      </NextUIProvider>
    </HelmetProvider>
  );
}
