import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
  limit: number;
  total: number;
  setLimit: Dispatch<SetStateAction<number>>;
}

export default function TableInfo({ limit, setLimit, total }: IProps) {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center w-full">
      <span className="text-default-400 text-small">
        {t("users.total")} {total} {t("users.items")}
      </span>
      <label className="flex items-center text-default-400 text-small">
        {t("users.rows")}:
        <select
          className="bg-transparent outline-none text-default-400 text-small"
          value={limit}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setLimit(Number(e.target.value))
          }
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
      </label>
    </div>
  );
}
