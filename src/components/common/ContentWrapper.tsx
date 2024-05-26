import { IChildren } from "../../@types";

export default function ContentWrapper({ children }: IChildren) {
  return (
    <div className="flex flex-col items-start justify-start gap-3 w-full h-full p-5">
      {children}
    </div>
  );
}
