import type { FC } from "react";

interface Props {
  rows: number;
  cols: number;
}

const Table: FC<Props> = ({ rows, cols }) => {
  return (
    <table className="mx-auto my-5 w-fit text-center">
      <tbody>
        {Array.from({ length: rows }, (_, i) => (
          <tr key={i}>
            {Array.from({ length: cols }, (_, j) => (
              <td key={j} className="h-10 w-10 border">
                {j % 2 === 0 ? i + 1 + j * rows : (j + 1) * rows - i}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
