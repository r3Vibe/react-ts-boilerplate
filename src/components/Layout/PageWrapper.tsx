import { Helmet } from "react-helmet-async";
import { IChildren } from "../../@types";

interface IProps extends IChildren {
  title: string;
  description: string;
}

export default function PageWrapper({ children, title, description }: IProps) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {children}
    </>
  );
}
