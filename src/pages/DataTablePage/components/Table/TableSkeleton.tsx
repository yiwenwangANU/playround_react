import type { FC } from "react";

const TableSkeleton: FC = () => (
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
      {Array.from({ length: 5 }, () => (
        <tr className="animate-pulse">
          <td className="h-6 w-8 rounded bg-gray-100" />
          <td className="h-6 w-42 rounded bg-gray-100" />
          <td className="h-6 w-8 rounded bg-gray-100" />
          <td className="h-6 w-56 rounded bg-gray-100" />
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableSkeleton;
