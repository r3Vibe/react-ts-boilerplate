import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md text-center">Error 404</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>Requested page was not found on the server</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link to={"/"}>Home</Link>
      </CardFooter>
    </Card>
  );
}
