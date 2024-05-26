import TableWrapper from "../../components/ui/Table/TableWrapper";
import TableCapabilities from "../../components/ui/Table/TableCapabilities";
import TableInfo from "../../components/ui/Table/TableInfo";
import TabelPagination from "../../components/ui/Table/TabelPagination";
import CustomTable from "../../components/ui/Table/CustomTable";
import { useState } from "react";
import BoundaryWrapper from "../../components/BoundaryWrapper";
import TableSkeleton from "../../components/ui/Table/TableSkeleton";
import { testLoader } from "../../http/api";
import PageWrapper from "../../components/layout/PageWrapper";

const headers = ["Id", "Title", "Description"];

export default function UserList() {
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<string>("all");
  const [role, setRole] = useState<string>("all");
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);

  const url = `products?limit=${limit}&skip=10`;

  const filters = [
    {
      name: "Status",
      values: ["all", "active", "unverified", "blocked"],
      selected: status,
      setSelected: setStatus,
    },
    {
      name: "Role",
      values: ["all", "admin", "user"],
      selected: role,
      setSelected: setRole,
    },
  ];

  return (
    <PageWrapper title="Users" description="Users List Page">
      <TableWrapper>
        <TableCapabilities
          canSearch
          searchPlaceholder="Look for name or email..."
          searchValue={search}
          setSearchValue={setSearch}
          canAdd
          addLink="/users/add-user"
          canFilter
          filterFields={filters}
        />
        <TableInfo limit={limit} setLimit={setLimit} total={5} />
        <BoundaryWrapper
          Skeleton={<TableSkeleton headers={headers} />}
          ErrorEl={<TableSkeleton headers={headers} error />}
        >
          <CustomTable headers={headers} fetcher={testLoader} url={url} />
        </BoundaryWrapper>
        <TabelPagination page={page} total={10} setPage={setPage} />
      </TableWrapper>
    </PageWrapper>
  );
}
