import type { FC } from "react";

interface Props {
  rows: number;
  cols: number;
}

const Table: FC<Props> = ({ rows, cols }) => (
  <table>
    <tbody className="border-t border-l border-black">
      {Array.from({ length: rows }, (_, x) => (
        <tr key={x}>
          {Array.from({ length: cols }, (_, y) => (
            <td
              className="h-10 w-10 border-r border-b text-center"
              key={`${x}-${y}`}
            >
              {y % 2 === 0 ? y * rows + x + 1 : (y + 1) * rows - x}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
