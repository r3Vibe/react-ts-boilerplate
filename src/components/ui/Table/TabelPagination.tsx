import { Pagination } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  page: number;
  total: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export default function TabelPagination({ page, total, setPage }: IProps) {
  return (
    <div className="py-2 px-2 flex justify-center items-center w-full">
      <Pagination
        showControls
        color="secondary"
        page={page}
        total={total}
        onChange={setPage}
      />
    </div>
  );
}
