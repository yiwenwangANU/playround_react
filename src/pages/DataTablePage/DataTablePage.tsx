import type { FC } from "react";
import { useSearchParams } from "react-router";
import useDataTable from "./useDataTable";

const DataTablePage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const skip = Number(searchParams.get("skip") ?? 0);
  const limit = Number(searchParams.get("limit") ?? 5);

  const { users, total } = useDataTable({ skip, limit });

  return (
    <div className="mx-auto w-fit">
      <table className="border-separate border-spacing-2">
        <thead>
          <tr className="text-left">
            <th className="w-10">ID</th>
            <th className="w-48">Name</th>
            <th className="w-10">Age</th>
            <th className="w-64">Occupation</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.occupation}</td>
          </tr>
        ))}
        <tbody></tbody>
      </table>
      <div className="flex items-center gap-2">
        <select
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
          onChange={(e) =>
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);
              params.set("skip", "0");
              params.set("limit", e.target.value);
              return params;
            })
          }
        >
          <option value={5}>Show 5</option>
          <option value={10}>Show 10</option>
          <option value={20}>Show 20</option>
        </select>
        <div>
          Page {skip / limit + 1} of {Math.ceil(total / limit)}
        </div>
        <button
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:opacity-50"
          disabled={skip <= 0}
          onClick={() => {
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);
              params.set("skip", String(Math.max(0, skip - limit)));
              return params;
            });
          }}
        >
          Prev
        </button>
        <button
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:opacity-50"
          disabled={skip + limit >= total}
          onClick={() =>
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);
              params.set("skip", String(Math.min(total, skip + limit)));
              return params;
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTablePage;
