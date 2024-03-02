import { Helmet } from "react-helmet-async";

/**
 * @author Arnab Gupta
 * @description this react component provides seo with the ability to change the page title of every component it will be used with
 * @example     <>
      <HelmetHeader title="Home Page" />
      <div>Home Page</div>
    </>
 */
export default function index({ title }: { title: string }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
