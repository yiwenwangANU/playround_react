import type { FC } from "react";
import { useSearchParams } from "react-router";
import useUserDataSuspense from "../../hooks/useUserDataSuspense";

const Table: FC = () => {
  const [searchParams] = useSearchParams();
  const skip = Number(searchParams.get("skip") ?? 0);
  const limit = Number(searchParams.get("limit") ?? 5);
  const { users } = useUserDataSuspense({ skip, limit });

  return (
    <table className="border-separate border-spacing-2">
      <thead>
        <tr className="text-left">
          <th className="w-10">ID</th>
          <th className="w-50">Name</th>
          <th className="w-10">Age</th>
          <th className="w-70">Occupation</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.occupation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
