import type { FC } from "react";

interface Props {
  users: User[];
}

type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  company: {
    title: string;
  };
};

const Table: FC<Props> = ({ users }) => (
  <table>
    <tr className="border-b border-gray-200">
      <th className="px-2 text-left">ID</th>
      <th className="px-2 text-left">Name</th>
      <th className="px-2 text-left">Age</th>
      <th className="px-2 text-left">Occupation</th>
    </tr>
    {users.map((user) => (
      <tr key={user.id} className="border-b border-gray-200">
        <td className="px-2">{user.id}</td>
        <td className="px-2">
          {user.firstName} {user.lastName}
        </td>
        <td className="px-2">{user.age}</td>
        <td className="px-2">{user.company.title}</td>
      </tr>
    ))}
  </table>
);

export default Table;
