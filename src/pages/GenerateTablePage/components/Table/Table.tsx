import type { FC } from "react";

interface Props {
  rows: number;
  cols: number;
}
const Table: FC<Props> = ({ rows, cols }) => {
  return (
    <table className="border-t border-l">
      <tbody>
        {Array.from({ length: rows }, (_, i) => (
          <tr>
            {Array.from({ length: cols }, (_, j) => (
              <td className="h-10 w-10 border-r border-b">
                {j % 2 === 0 ? i + j * rows : cols - i - 1 + j * rows}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
