import type { FC } from "react";

interface Props {
  skip: number;
  limit: number;
  total: number;
  onChangeSkip: (newSkip: number) => void;
  onChangeLimit: (newLimit: number) => void;
}
const PaginationControl: FC<Props> = ({
  skip,
  limit,
  total,
  onChangeLimit,
  onChangeSkip,
}) => {
  const currentPage = skip / limit + 1;
  const totalPage = Math.ceil(total / limit);

  return (
    <div className="flex gap-2">
      <select
        className="rounded border border-gray-400 bg-gray-200 px-2 py-0.5"
        onChange={(e) => onChangeLimit(Number(e.target.value))}
      >
        <option value={5}>Show 5</option>
        <option value={10}>Show 10</option>
        <option value={20}>Show 20</option>
      </select>
      <div className="py-0.5">
        Page {currentPage} of {totalPage}
      </div>
      <button
        className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:cursor-not-allowed disabled:opacity-30"
        onClick={() => onChangeSkip(Math.max(0, skip - limit))}
        disabled={skip - limit < 0}
      >
        Prev
      </button>
      <button
        className="cursor-pointer rounded border border-gray-400 bg-gray-200 px-2 py-0.5 disabled:cursor-not-allowed disabled:opacity-30"
        onClick={() => onChangeSkip(Math.min(total, skip + limit))}
        disabled={skip + limit >= total}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControl;
