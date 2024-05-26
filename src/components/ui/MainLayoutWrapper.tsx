import { IChildren } from "../../@types";
export default function MainLayoutWrapper({ children }: IChildren) {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen">
      {children}
    </main>
  );
}
