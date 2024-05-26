import { IChildren } from "../../@types";

export default function MainSectionWrapper({ children }: IChildren) {
  return (
    <section className="flex flex-1 w-full h-full flex-row">{children}</section>
  );
}
