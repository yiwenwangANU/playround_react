import type { FC } from "react";
import type { Schema } from "../../generateTableSchema";

interface Props {
  table: Schema;
}

const Table: FC<Props> = ({ table }) => {
  const { rows, cols } = table;
  return (
    <table className="mx-auto my-10 w-fit border-t border-r text-center">
      <tbody>
        {Array.from({ length: rows }, (_, i) => (
          <tr>
            {Array.from({ length: cols }, (_, j) => (
              <td className="h-7 w-7 border-b border-l">
                {j % 2 === 0 ? i + j * rows + 1 : -i + (j + 1) * rows}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
