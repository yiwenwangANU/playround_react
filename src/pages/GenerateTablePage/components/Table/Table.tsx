import type { FC } from "react";

interface Props {
  rows: number;
  cols: number;
}

const Table: FC<Props> = ({ rows, cols }) => (
  <div
    className="mx-auto my-2 grid w-fit grid-flow-col border-t border-l"
    style={{
      gridTemplateRows: `repeat(${rows}, 2.5rem)`,
      gridTemplateColumns: `repeat(${cols}, 2.5rem)`,
    }}
  >
    {Array.from({ length: rows * cols }, (_, i) => (
      <div className="flex items-center justify-center border-r border-b border-black">
        {i + 1}
      </div>
    ))}
  </div>
);

export default Table;
