import { Suspense } from "react";
import { IChildren } from "../../@types";
import { Routes } from "react-router-dom";
import RootLayout from "./RootLayout";
import Loader from "../common/Loader";

export default function RouteWrapper({ children }: IChildren) {
  return (
    <RootLayout>
      <Suspense fallback={<Loader />}>
        <Routes>{children}</Routes>
      </Suspense>
    </RootLayout>
  );
}
