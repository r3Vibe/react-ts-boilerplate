import { useEffect } from "react";
import HelmetHeader from "../components/Helmet";
import { checkAxios } from "../http/api";
export default function Home() {
  useEffect(() => {
    checkAxios();
  }, []);
  return (
    <>
      <HelmetHeader title="Home Page" />
      <div>Home Page</div>
    </>
  );
}
