import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

interface IProps {
  headers: string[];
  error?: boolean;
}

export default function TableSkeleton({ headers, error }: IProps) {
  return (
    <Table>
      <TableHeader>
        {headers.map((header) => {
          return <TableColumn key={header}>{header}</TableColumn>;
        })}
      </TableHeader>
      {error ? (
        <TableBody emptyContent={"No Data Found!"}>{[]}</TableBody>
      ) : (
        <TableBody>
          <TableRow key="1">
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
          </TableRow>
        </TableBody>
      )}
    </Table>
  );
}
