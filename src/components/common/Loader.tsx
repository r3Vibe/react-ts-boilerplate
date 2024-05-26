import { Spinner } from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="loader">
      <Spinner label="Loading..." color="secondary" />
    </div>
  );
}
