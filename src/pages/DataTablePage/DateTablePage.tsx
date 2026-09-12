import { useState, type FC } from "react";
import useUsers from "@/services/useUsers";

const DataTablePage: FC = () => {
  const [skip, setSkip] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const { users, total } = useUsers({ skip, limit });

  return (
    <div className="mx-auto w-fit">
      <table>
        <thead>
          <tr className="table-fixed border-b border-gray-300 text-left">
            <th className="w-16 py-1">ID</th>
            <th className="w-40 py-1">Name</th>
            <th className="w-20 py-1">Age</th>
            <th className="w-64 py-1">Occupation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b border-gray-300">
              <td className="w-16 py-1">{user.id}</td>
              <td className="w-40 py-1">{user.name}</td>
              <td className="w-20 py-1">{user.age}</td>
              <td className="w-64 py-1">{user.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br className="border border-black" />
      <div className="flex items-center gap-2">
        <select
          onChange={(e) => {
            setSkip(0);
            setLimit(Number(e.target.value));
          }}
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
        >
          <option value={5}>Show 5</option>
          <option value={10}>Show 10</option>
          <option value={20}>Show 20</option>
        </select>
        <button
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => {
            setSkip((prev) => prev - limit);
          }}
          disabled={skip - limit < 0}
        >
          Prev
        </button>
        <div>
          Page {skip / limit + 1} of {Math.ceil(total / limit)}
        </div>
        <button
          className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => {
            setSkip((prev) => prev + limit);
          }}
          disabled={skip + limit >= total}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTablePage;
