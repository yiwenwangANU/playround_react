const TableSkeleton = () => (
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
      {Array.from({ length: 5 }, (_, i) => (
        <tr key={i} className="animate-pulse">
          <td>
            <div className="h-6 w-8 rounded bg-gray-200" />
          </td>
          <td>
            <div className="h-6 w-40 rounded bg-gray-200" />
          </td>
          <td>
            <div className="h-6 w-8 rounded bg-gray-200" />
          </td>
          <td>
            <div className="h-6 w-60 rounded bg-gray-200" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TableSkeleton;
