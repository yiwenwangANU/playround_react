import { type FC } from "react";
import { useSearchParams } from "react-router";
import Table from "./components/Table";
import PaginationControl from "./components/PaginationControl";
import useFetchData from "./hooks/useFetchData/useFetchData";

const DataTablePage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const skip = Number(searchParams.get("skip") ?? "0");
  const limit = Number(searchParams.get("limit") ?? "5");

  const { users, total } = useFetchData({ skip, limit });

  const handleChangeSkip = (newSkip: number) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("skip", String(newSkip));
      return next;
    });
  };

  const handleChangeLimit = (newLimit: number) => {
    setSearchParams(() => {
      const next = new URLSearchParams();
      next.set("limit", String(newLimit));
      next.set("skip", "0");
      return next;
    });
  };
  return (
    <>
      <Table users={users} />
      <PaginationControl
        skip={Number(skip)}
        limit={Number(limit)}
        total={total}
        onChangeSkip={handleChangeSkip}
        onChangeLimit={handleChangeLimit}
      />
    </>
  );
};

export default DataTablePage;
