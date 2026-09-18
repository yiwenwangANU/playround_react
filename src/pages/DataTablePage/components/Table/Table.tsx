import type { FC } from "react";
import type useFetchData from "../../hooks/useFetchData/useFetchData";

interface Props {
  users: ReturnType<typeof useFetchData>["users"];
}
const Table: FC<Props> = ({ users }) => {
  return (
    <table className="border-separate border-spacing-x-2 border-spacing-y-4">
      <thead>
        <tr className="text-left">
          <th className="w-10">ID</th>
          <th className="w-40">Name</th>
          <th className="w-10">Age</th>
          <th className="w-60">Occupation</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
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
