import { Link } from "react-router-dom";
import { IChildren } from "../../@types";

interface IProps extends IChildren {
  link: string;
}

export default function LinkWrapper({ link, children }: IProps) {
  return (
    <ul className="flex flex-col text-start w-full px-2">
      <li className="text-foreground text-large text-start py-4">
        <Link to={String(link)} className="w-full h-full">
          {children}
        </Link>
      </li>
    </ul>
  );
}
