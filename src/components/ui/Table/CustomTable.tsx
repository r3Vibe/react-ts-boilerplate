import {
  Chip,
  ChipProps,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import useSWR from "swr";

interface IProps {
  headers: string[];
  data?: { [key: string]: string | number | boolean }[];
  fetcher: (url: string) => any;
  url: string;
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  blocked: "danger",
  unverified: "warning",
};

export default function CustomTable({ headers, fetcher, url }: IProps) {
  const { data } = useSWR(url, fetcher, {
    suspense: true,
  });

  return (
    <Table isStriped isCompact>
      <TableHeader>
        {headers.map((header) => {
          return <TableColumn key={header}>{header}</TableColumn>;
        })}
      </TableHeader>
      <TableBody>
        {data?.map((d: any, i: number) => {
          return (
            <TableRow key={i}>
              {headers.map((h) => {
                if (h.toLocaleLowerCase() === "status") {
                  return (
                    <TableCell key={h}>
                      <Chip
                        className="capitalize"
                        color={statusColorMap[String(d[h.toLocaleLowerCase()])]}
                        size="sm"
                        variant="flat"
                      >
                        {d[h.toLocaleLowerCase()]}
                      </Chip>
                    </TableCell>
                  );
                }
                return (
                  <TableCell className="capitalize" key={h}>
                    {d[h.toLocaleLowerCase()]}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
