import { useState, type FC } from "react";
import useUserData from "./hooks/useUserData";
import DataTable from "./components/DataTable";

const URL = "https://dummyjson.com/users";

const DataTablePage: FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const { data, error, isLoading } = useUserData(URL, skip, limit);

  if (isLoading) return <div>is loading</div>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Something went wrong...</div>;

  return (
    <>
      <DataTable users={data.users} />
      <hr className="my-2" />
      <div className="flex items-center gap-2">
        <select
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setSkip(0);
          }}
          value={limit}
          className="rounded border border-gray-400 bg-gray-200 px-1 py-0.5"
        >
          <option value={5}>show 5</option>
          <option value={10}>show 10</option>
          <option value={15}>show 15</option>
        </select>
        <button
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400"
          onClick={() => {
            setSkip((prev) => {
              const result = prev - limit;
              return result >= 0 ? result : 0;
            });
          }}
          disabled={skip <= 0}
        >
          prev
        </button>
        <div>
          Page {Math.floor(skip / limit) + 1} of {Math.ceil(data.total / limit)}
        </div>
        <button
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400"
          onClick={() => {
            setSkip((prev) => prev + limit);
          }}
          disabled={data.total <= skip + limit}
        >
          next
        </button>
      </div>
    </>
  );
};

export default DataTablePage;
