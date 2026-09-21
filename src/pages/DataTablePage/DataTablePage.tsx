import { Suspense, type FC } from "react";
import Table from "./components/Table";
import PaginationControl from "./components/PaginationControl";
import TableSkeleton from "./components/Table/TableSkeleton";

const DataTablePage: FC = () => (
  <main className="mx-auto w-fit">
    <Suspense fallback={<TableSkeleton />}>
      <Table />
    </Suspense>
    <PaginationControl />
  </main>
);

export default DataTablePage;
