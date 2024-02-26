import { Helmet } from "react-helmet-async";

export default function index({ title }: { title: string }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
