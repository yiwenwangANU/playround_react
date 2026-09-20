import { type FC, Suspense } from "react";
import Table from "./components/Table";
import PaginationControl from "./components/PaginationControl";
import TableSkeleton from "./components/Table/TableSkeleton";

const DataTablePage: FC = () => {
  return (
    <div>
      <Suspense fallback={<TableSkeleton />}>
        <Table />
      </Suspense>
      <PaginationControl />
    </div>
  );
};

export default DataTablePage;
