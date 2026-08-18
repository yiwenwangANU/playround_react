import type { FC } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  company: { title: string };
};

interface Props {
  users: User[];
}

const DataTable: FC<Props> = ({ users }) => (
  <table>
    <tr className="border-gray-250 border-b">
      <th className="px-3 text-left">ID</th>
      <th className="px-3 text-left">Name</th>
      <th className="px-3 text-left">Age</th>
      <th className="px-3 text-left">Occupation</th>
    </tr>
    {users.map((user) => (
      <tr key={user.id} className="border-gray-250 border-b">
        <td className="px-3 py-1">{user.id}</td>
        <td className="px-3 py-1">
          {user.firstName} {user.lastName}
        </td>
        <td className="px-3">{user.age}</td>
        <td className="px-3">{user.company.title}</td>
      </tr>
    ))}
  </table>
);

export default DataTable;
