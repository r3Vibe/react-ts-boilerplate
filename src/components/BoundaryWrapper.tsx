import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundar";
import { IChildren } from "../@types";
import Error from "./layout/Error";

interface IProps extends IChildren {
  Skeleton?: ReactNode;
  ErrorEl?: ReactNode;
}

export default function BoundaryWrapper({ children, Skeleton, ErrorEl }: IProps) {
  return (
    <ErrorBoundary fallback={ErrorEl ?? <Error />}>
      <Suspense fallback={Skeleton ?? <div>Loading...</div>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
