import { FormEvent } from "react";
import { IChildren } from "../../../@types";

interface IProps extends IChildren {
  title: string;
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  width?: string;
}

export default function FormWrapper({
  children,
  handleSubmit,
  title,
  width,
}: IProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 border-1 rounded-lg p-4 h-auto border-secondary"
      style={{ width }}
    >
      <>
        <h2 className="text-xl w-full text-center">{title}</h2>
        <hr className="border-secondary" />
        <div className="flex-1 flex items-center justify-center flex-col">
        {children}
        </div>
      </>
      <>
        <input
          type="submit"
          value="Submit"
          className="btn p-2 rounded-md bg-secondary cursor-pointer"
        />
      </>
    </form>
  );
}
