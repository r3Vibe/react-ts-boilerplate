import { IChildren } from "../../../@types";

export default function TableWrapper({ children }: IChildren) {
  return (
    <div className="flex flex-col items-center justify-start gap-3 w-full h-full p-5">
      {children}
    </div>
  );
}
