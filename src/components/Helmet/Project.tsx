import { Helmet } from "react-helmet-async";

/**
 * @author Arnab Gupta
 * @description provides seo support for the project add you meta tags here
 */
export default function ProjectSEO() {
  return (
    <Helmet>
      <title>Boilerplate</title>
      <meta
        name="description"
        content="Boilerplate Code For React Vite Typescript Project"
      />
    </Helmet>
  );
}
